import countries from "$lib/countries.json";

export async function load({ params }) { return countries[params.index]; }