import { Header } from "./components/Header";
import { Investments } from "./components/Investments";
import { Main } from "./components/Main";
import { investimentos } from "./data/investments";

export default function App() {
    return (
        <>
            <Header>react-investments v1.0.1</Header>

            <Main>
                { investimentos.investments.map((investment) => {
                    return (
                        <Investments 
                            key={investment.id} 
                            data={investimentos.reports.filter((report) => report.investmentId === investment.id)}
                        >
                            { investment.description }
                        </Investments>
                    )
                }) }
            </Main>
        </>
    )
}