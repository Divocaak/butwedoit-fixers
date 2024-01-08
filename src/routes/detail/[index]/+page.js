import countries from "$lib/countries.json";

export async function load({ params }) { return { id: params.index, countryData: countries[params.index] }; }