export const ADMIN_PRODUCTS_KEY = "drLoloAdminProducts";
export const ADMIN_BLOGS_KEY = "drLoloAdminBlogs";

export interface AdminProduct {
  id: string;
  name: string;
  collection: string;
  description: string;
  image: string; // base64 or /path
  cta: string;
  createdAt: string;
}

export interface AdminBlog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string; // base64 or /path
  readTime: string;
  date: string;
  createdAt: string;
}

// Products
export function getAdminProducts(): AdminProduct[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(ADMIN_PRODUCTS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as AdminProduct[];
  } catch {
    return [];
  }
}

export function saveAdminProduct(product: AdminProduct): void {
  const products = getAdminProducts();
  const existingIndex = products.findIndex((p) => p.id === product.id);
  if (existingIndex >= 0) {
    products[existingIndex] = product;
  } else {
    products.push(product);
  }
  localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(products));
}

export function deleteAdminProduct(id: string): void {
  const products = getAdminProducts().filter((p) => p.id !== id);
  localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(products));
}

// Blogs
export function getAdminBlogs(): AdminBlog[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(ADMIN_BLOGS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as AdminBlog[];
  } catch {
    return [];
  }
}

export function saveAdminBlog(blog: AdminBlog): void {
  const blogs = getAdminBlogs();
  const existingIndex = blogs.findIndex((b) => b.id === blog.id);
  if (existingIndex >= 0) {
    blogs[existingIndex] = blog;
  } else {
    blogs.push(blog);
  }
  localStorage.setItem(ADMIN_BLOGS_KEY, JSON.stringify(blogs));
}

export function deleteAdminBlog(id: string): void {
  const blogs = getAdminBlogs().filter((b) => b.id !== id);
  localStorage.setItem(ADMIN_BLOGS_KEY, JSON.stringify(blogs));
}

// Image to base64
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
