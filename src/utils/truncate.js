export const truncateText = ( str ) => {
    if (str.length < 300 ) return str;
    
    return str.substring(0, 300) + '...';
}