from PIL import Image

def get_dominant_color(path):
    try:
        img = Image.open(path)
        img = img.convert("RGB")
        img = img.resize((50, 50))  # Resize for speed
        
        # Simple color extraction by counting frequent calculations
        colors = img.getcolors(50*50) 
        if not colors: # For RGB, getcolors might return None if maxcolors exceeded
             # Manual counting
             pixels = list(img.getdata())
             from collections import Counter
             counts = Counter(pixels)
             most_common = counts.most_common(5)
             hex_colors = []
             for count, rgb in most_common:
                 hex_colors.append('#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2]))
             return hex_colors
        
        # Sort by saturation
        import colorsys
        def get_saturation(rgb):
            return colorsys.rgb_to_hsv(rgb[0]/255.0, rgb[1]/255.0, rgb[2]/255.0)[1]

        sorted_colors = sorted(colors, key=lambda t: get_saturation(t[1]), reverse=True)
        
        hex_colors = []
        for count, rgb in sorted_colors:
            # Filter out very dark/noise if needed, but saturation usually handles it
             # Ignore extremely small counts if they are noise (optional)
            if count < 5: continue

            hex_val = '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])
            if hex_val not in hex_colors:
                hex_colors.append(hex_val)
            
            if len(hex_colors) >= 5:
                break
                
        return hex_colors

    except Exception as e:
        print(f"Error: {e}")
        return []

print(get_dominant_color("public/logo.webp"))
