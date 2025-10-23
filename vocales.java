public class vocales {
    public static void main(String[] args) {
        String texto = "¡Hacktoberfest es divertido!";
        int contador = contarVocales(texto);
        System.out.println("Cantidad de vocales: " + contador);
    }

    public static int contarVocales(String texto) { 
        int total = 0;
        texto = texto.toLowerCase();
        for (int i = 0; i < texto.length(); i++) {
            char c = texto.charAt(i);
            if ("aeiouáéíóú".indexOf(c) != -1) {
                total++;
            }
        }
        return total;
    }
}
