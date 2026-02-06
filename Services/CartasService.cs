using System.Net.Http.Json;
using PerfilFamilia.Models;

namespace PerfilFamilia.Services;
public class CartasService
{
    private readonly HttpClient _http;
    public CartasService(HttpClient http) => _http = http;

    public async Task<List<Carta>> CarregarCategoriaAsync(string categoria)
    {
        return await _http.GetFromJsonAsync<List<Carta>>($"data/{categoria}.json") ?? new();
    }
}