const SUPABASE_URL = 'https://sdlwjpqahpjeifwgzwuj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbHdqcHFhaHBqZWlmd2d6d3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM2OTI3MjcsImV4cCI6MTk2OTI2ODcyN30.ZrHNlkqxRcpyMPe1vBxWLCKVBqUSLAPj5cek4R35NSg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('/auth');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('../game');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

export async function getScores() {
    const response = await client
        .from('high_scores')
        .select('*')
        .order('user_score', { ascending: false });

    return response.data;
}

export async function removeData(id) {
    const response = await client
        .from('high_score')
        .delete()
        .eq('id', id);

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
