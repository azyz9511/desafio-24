import { React } from '../deps.ts';

interface Proptypes {
    colors: string[];
}

const html = ({ colors }: Proptypes) => {
    return (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Desafio 24</title>
        </head>
        <body>
            <div style={{
                    width: "100%",
                    height: "500px",
                    'align-items': 'center',
                    'justify-content': 'center',
                    'flex-direction': 'column',
                    display: 'flex'
                }}>
                <form action="/addColor" method="POST" encType="application/x-www-form-urlencoded">
                    <h2>Ingrese un color en ingles</h2>
                    <input type="text" name="color" id="color"/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit" value="Enviar" />
                </form>
                <div style={{
                    'flex-direction': 'row',
                    display: 'flex'
                    }}>
                    {colors.map(color => (
                        <div style={{
                            background:color,
                            width: "100px",
                            height: "50px",
                            'border-radius': '20px',
                            'align-items': 'center',
                            'justify-content': 'center',
                            display: 'flex',
                            'margin-right': '10px',
                            color:'#808080'
                        }}>
                            { color }
                        </div>
                    ))}
                </div>
            </div>
        </body>
    </html>
    )
}

export default html;