import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/adicionarMaterial")
public class AdicionarMaterialServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String codigo = request.getParameter("codigo");
        String nome = request.getParameter("nome");
        int quantidade = Integer.parseInt(request.getParameter("quantidade"));
        String descricao = request.getParameter("descricao");

        // Lógica para adicionar ao banco de dados

        // Redireciona de volta para a página principal
        response.sendRedirect("index.html");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Adicione scripts para interatividade conforme necessário
});
