import { SOCIAL_PROOF_CONFIG } from './socialProofConfig';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get storage instance based on config
function getStorage(): Storage {
  return SOCIAL_PROOF_CONFIG.useSessionStorage ? sessionStorage : localStorage;
}

// Load shown names from storage
export function loadShownNames(): string[] {
  try {
    const storage = getStorage();
    const stored = storage.getItem(SOCIAL_PROOF_CONFIG.storageKey);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Save shown names to storage
export function saveShownNames(names: string[]): void {
  try {
    const storage = getStorage();
    storage.setItem(SOCIAL_PROOF_CONFIG.storageKey, JSON.stringify(names));
  } catch {
    // Silently fail if storage is unavailable
  }
}

// Initialize shuffled names list (call once on mount)
export function initializeShuffledNames(): string[] {
  return shuffleArray(SOCIAL_PROOF_CONFIG.names);
}

// Get next available name (not yet shown)
export function getNextName(shuffledNames: string[], shownNames: string[]): string | null {
  const availableName = shuffledNames.find((name) => !shownNames.includes(name));
  return availableName || null;
}

// Get random city (cities can repeat)
export function getRandomCity(): string {
  const cities = SOCIAL_PROOF_CONFIG.cities;
  return cities[Math.floor(Math.random() * cities.length)];
}

// Get random time ago string
export function getRandomTimeAgo(): string {
  const options = SOCIAL_PROOF_CONFIG.timeAgoOptions;
  return options[Math.floor(Math.random() * options.length)];
}

// Get random interval between min and max (in milliseconds)
export function getRandomInterval(): number {
  const { showIntervalMin, showIntervalMax } = SOCIAL_PROOF_CONFIG;
  return Math.floor(Math.random() * (showIntervalMax - showIntervalMin + 1)) + showIntervalMin;
}

// Check if all names have been used
export function areAllNamesUsed(shuffledNames: string[], shownNames: string[]): boolean {
  return shownNames.length >= shuffledNames.length;
}
