const SUPABASE_URL = 'https://vhggynhjqqqtwnroniln.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZ2d5bmhqcXFxdHducm9uaWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4NDQyMTYsImV4cCI6MTk4MDQyMDIxNn0.LywedVmTirq5Yt63NAh6Y7aUjEb_3Q4tzwYTQAl2Nu8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createPost(post) {
    const response = client.from('posts').insert(post).single();
    return response;
}

export async function getPosts() {
    const query = client.from('posts').select('*').limit('50');
    return await query;
}
