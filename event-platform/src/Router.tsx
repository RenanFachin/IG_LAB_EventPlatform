import { Route, Routes } from "react-router-dom";
import { Event } from './pages/Event'
import { Subscribe } from "./pages/Subscribe";

export function Router(){
    return(
        <Routes>
            <Route path="" element={<Subscribe />}/>
            <Route path="/event" element={<Event />}/>

            {/* Rotas com infos dinâmicas */}
            <Route path="/event/lesson/:slug" element={<Event />}/>
        </Routes>
    )
}