namespace PerfilFamilia.Models;
public class Carta
{
    public int Id { get; set; }
    public string Categoria { get; set; } = "";
    public string Resposta { get; set; } = "";
    public List<string> Pistas { get; set; } = new();
}