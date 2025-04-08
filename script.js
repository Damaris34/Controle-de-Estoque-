import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/registrar")
public class RegistroServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String dataRegistro = request.getParameter("dataRegistro");
        String materialUtilizado = request.getParameter("materialUtilizado");
        String materialFalta = request.getParameter("materialFalta");

        // Aqui você pode adicionar a lógica para salvar os dados no banco de dados ou em um arquivo

        // Redirecionar de volta para a página principal
        response.sendRedirect("index.html");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Aqui você pode adicionar a lógica para carregar os materiais em falta do servidor e exibi-los na lista
});
