export async function loadComponent(path: string): Promise<string> {
  const response = await fetch(path);
  return await response.text();
}
