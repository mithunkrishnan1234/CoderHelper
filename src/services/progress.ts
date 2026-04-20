const STORAGE_PREFIX = 'jph';

export function isSolved(problemId: string): boolean {
  return localStorage.getItem(`${STORAGE_PREFIX}:solved:${problemId}`) === 'true';
}

export function markSolved(problemId: string): void {
  localStorage.setItem(`${STORAGE_PREFIX}:solved:${problemId}`, 'true');
}

export function getSavedCode(problemId: string): string | null {
  return localStorage.getItem(`${STORAGE_PREFIX}:code:${problemId}`);
}

export function saveCode(problemId: string, code: string): void {
  localStorage.setItem(`${STORAGE_PREFIX}:code:${problemId}`, code);
}

export function getSolvedCount(problemIds: string[]): number {
  return problemIds.filter((id) => isSolved(id)).length;
}

export function clearProgress(): void {
  const keys = Object.keys(localStorage).filter((k) => k.startsWith(STORAGE_PREFIX));
  keys.forEach((k) => localStorage.removeItem(k));
}
