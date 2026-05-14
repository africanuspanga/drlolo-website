const SESSION_KEY = "drLoloAdminSession";

export interface AdminSession {
  email: string;
  token: string;
  expiresAt: number;
}

const HARDCODED_EMAIL = "admin@drlolocosmetics.com";
const HARDCODED_PASSWORD = "Kariakoo@1961";

export function login(email: string, password: string): AdminSession | null {
  if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
    const session: AdminSession = {
      email,
      token: generateToken(),
      expiresAt: Date.now() + 1000 * 60 * 60 * 24, // 24 hours
    };
    if (typeof window !== "undefined") {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    }
    return session;
  }
  return null;
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(SESSION_KEY);
  }
}

export function getSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    const session: AdminSession = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

function generateToken(): string {
  return (
    Math.random().toString(36).substring(2) +
    Math.random().toString(36).substring(2)
  );
}
