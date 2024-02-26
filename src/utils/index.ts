export const getExtension = (fileName: string | undefined): string => {
    if (!fileName) {
        return ''
    }
    return fileName.split('.').pop() ?? ''
}