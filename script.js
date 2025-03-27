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
        // Recupera os parâmetros do formulário
        String codigo = request.getParameter("codigo");
        String nome = request.getParameter("nome");
        int quantidade = Integer.parseInt(request.getParameter("quantidade"));
        String descricao = request.getParameter("descricao");

        // Cria um novo item de estoque
        ItemEstoque item = new ItemEstoque(codigo, nome, quantidade, descricao);

        // Adiciona o item ao estoque
        estoque.add(item);

        // Redireciona de volta para a página principal
        response.sendRedirect("index.html");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Exibe a lista de itens do estoque
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().write("<html><body>");
        response.getWriter().write("<h2>Estoque Atual</h2>");
        response.getWriter().write("<table border='1'>");
        response.getWriter().write("<tr><th>Código</th><th>Nome</th><th>Quantidade</th><th>Descrição</th></tr>");

        for (ItemEstoque item : estoque) {
            response.getWriter().write("<tr>");
            response.getWriter().write("<td>" + item.getCodigo() + "</td>");
            response.getWriter().write("<td>" + item.getNome() + "</td>");
            response.getWriter().write("<td>" + item.getQuantidade() + "</td>");
            response.getWriter().write("<td>" + item.getDescricao() + "</td>");
            response.getWriter().write("</tr>");
        }

        response.getWriter().write("</table>");
        response.getWriter().write("</body></html>");
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

    public String getCodigo() {
        return codigo;
    }

    public String getNome() {
        return nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public String getDescricao() {
        return descricao;
    }
}
