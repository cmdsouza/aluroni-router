import Menu from "components/Menu";
import Footer from "components/Footer";
import Inicio from "pages/Inicio";
import Cardapio from "pages/Cardapio";
import NotFound from "pages/NotFound";
import Prato from "pages/Prato";
import Sobre from "pages/Sobre";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PaginaPadrao from "components/PaginaPadrao";

export default function AppRouter(){
    return(
        <main className='container'>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path="cardapio" element={<Cardapio />} />
                        <Route path="sobre" element={<Sobre />} />
                        <Route path="prato/:id" element={<Prato />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}