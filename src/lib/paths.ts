export const getImagePath = (path: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/llems-official';
    return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};
