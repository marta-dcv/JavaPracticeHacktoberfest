import java.util.Scanner;

public class InventarioSimple {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] productos = new String[100];
        int[] cantidades = new int[100];
        int contador = 0;

        int opcion;
        do {
            System.out.println("\n--- INVENTARIO SIMPLE ---");
            System.out.println("1. Agregar producto");
            System.out.println("2. Mostrar inventario");
            System.out.println("3. Salir");
            System.out.print("Elige una opción: ");
            opcion = scanner.nextInt();
            scanner.nextLine(); // limpiar buffer

            switch (opcion) {
                case 1 -> {
                    System.out.print("Nombre del producto: ");
                    productos[contador] = scanner.nextLine();
                    System.out.print("Cantidad: ");
                    cantidades[contador] = scanner.nextInt();
                    contador++;
                }
                case 2 -> {
                    System.out.println("\n--- INVENTARIO ---");
                    for (int i = 0; i < contador; i++) {
                        System.out.println("Producto: " + productos[i] + " | Cantidad: " + cantidades[i]);
                    }
                    if (contador == 0) System.out.println("Inventario vacío.");
                }
                case 3 -> System.out.println("Saliendo...");
                default -> System.out.println("Opción no válida.");
            }
        } while (opcion != 3);
    }
}
