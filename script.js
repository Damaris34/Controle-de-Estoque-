import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/adicionar")
public class AdicionarEstoqueServlet extends HttpServlet {
    private List<ItemEstoque> estoque = new ArrayList<>();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String codigo = request.getParameter("codigo");
        String nome = request.getParameter("nome");
        int quantidade = Integer.parseInt(request.getParameter("quantidade"));
        String descricao = request.getParameter("descricao");

        ItemEstoque item = new ItemEstoque(codigo, nome, quantidade, descricao);
        estoque.add(item);

        // Redirecionar de volta para a página principal
        response.sendRedirect("index.html");
    }
}

class ItemEstoque {
    private String codigo;
    private String nome;
    private int quantidade;
    private String descricao;

    public ItemEstoque(String codigo, String nome, int quantidade, String descricao) {
        this.codigo = codigo;
        this.nome = nome;
        this.quantidade = quantidade;
        this.descricao = descricao;
    }

    // Getters e Setters
}
