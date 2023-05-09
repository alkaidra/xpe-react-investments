type InvestmentsProps = {
    children: React.ReactNode;
    data: ({ id: string; investmentId: string; month: number; year: number; value: number; })[];
}

export function Investments({ children, data }: InvestmentsProps) {
    if (!data) {
        return <p>sem investimentos</p>
    }

    const rendiment = data[data.length - 1].value - data[data.length - data.length].value;
    const percentage = (data[data.length - 1].value - data[data.length - data.length].value) / 10;

    data.sort((a, b) => {
        if (a.month < b.month) return -1;
        if (a.month > b.month) return 1;
        return 0;
    });

    return (
        <div className="border p-2 rounded-lg text-center">
            <h3 className="font-semibold">{ children }</h3>
            <h4 className="font-semibold">Rendimento total: 
                <span 
                    className={ rendiment > 0 ? "text-green-500" : "text-red-500"}
                >
                    &#32;R$ {rendiment.toFixed(2)} ({ percentage.toFixed(2) })
                </span>
            </h4>

            {
                data.map(({ month, year, value }, key) => {
                    return (
                        <div key={key} className="border-b flex justify-between p-2">
                            <div className="flex gap-4">
                                <span>{ month < 10 ? "0" + month : month }/{ year }</span>
                                <span>R$ { value?.toFixed(2) }</span>
                            </div>

                            <span>
                                {
                                    value === 1000 ? 0.0 : (((value * 100) / data[key - 1].value) - 100).toFixed(2)
                                }
                                %
                            </span>
                        </div>
                    );
                })
            }
        </div>
    );
}