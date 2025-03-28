document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Dados registrados com sucesso!');
});

document.getElementById('exportPdf').addEventListener('click', function() {
    alert('Exportação para PDF iniciada!');
});
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stock")
public class StockController {

    @PostMapping("/register")
    public String registerStock(@RequestBody StockData stockData) {
        return "Estoque registrado com sucesso!";
    }

    @GetMapping("/exportPdf")
    public void exportPdf() {
        // Lógica para exportar para PDF
    }
}

class StockData {
    private String registrationDate;
    private String materialName;
    private int quantityUsed;
    private String missingMaterial;
    private int purchaseQuantity;

    // Getters e Setters
}
