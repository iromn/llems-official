from PIL import Image, ImageDraw

def remove_background_floodfill(input_path, output_path, tolerance=30):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        width, height = img.size
        
        # Get data
        data = img.load()
        
        # We will use a queue for flood fill
        # Starting points: 4 corners
        seeds = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
        
        # Check if corners are actually white-ish before starting
        valid_seeds = []
        for x, y in seeds:
            r, g, b, a = data[x, y]
            if r > 255-tolerance and g > 255-tolerance and b > 255-tolerance:
                valid_seeds.append((x, y))
        
        if not valid_seeds:
            print("Corners are not white. Assuming no white background to remove or crop needed.")
            # Fallback: try scanning edges
            for x in range(width):
                if data[x, 0][0] > 200: valid_seeds.append((x, 0))
                if data[x, height-1][0] > 200: valid_seeds.append((x, height-1))
            for y in range(height):
                if data[0, y][0] > 200: valid_seeds.append((0, y))
                if data[width-1, y][0] > 200: valid_seeds.append((width-1, y))

        visited = set()
        queue = list(valid_seeds)
        
        for q in queue:
            visited.add(q)
            
        print(f"Starting flood fill with {len(queue)} seeds...")

        while queue:
            x, y = queue.pop(0)
            
            # Turn current pixel transparent
            data[x, y] = (255, 255, 255, 0)
            
            # Check neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        r, g, b, a = data[nx, ny]
                        # Check if it's "white enough" to be background
                        if r > 255-tolerance and g > 255-tolerance and b > 255-tolerance:
                            visited.add((nx, ny))
                            queue.append((nx, ny))

        img.save(output_path, "WEBP")
        print(f"Saved to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    # Using a fresh tolerance
    remove_background_floodfill("public/logo.webp", "public/logo_transparent_v2.webp", tolerance=50)
