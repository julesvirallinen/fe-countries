
export function useSorting(arr:string[]): string[] {
    return arr.sort((a, b) => {
        return a.localeCompare(b, 'en', { sensitivity: 'base' });
      });
}


export function useThemeSwitcher(theme:string): string {
  switch (theme) {
    case 'pink':
      return '#e3127e';
    case 'orange':
      return 'rgb(255, 119, 0)';
    default: return '#61dafb';
  }

}
