import { ReactDOMServer, createApp } from './deps.ts';
import html from './views/index.tsx';

const app = new createApp();

const colors = ['yellow','blue'];

app.handle('/', async ( req ) => {
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html; charset=UTF-8"
        }),
        body:ReactDOMServer.renderToString(
            html({ colors })
        )
    });
});

app.post('/addColor', async (req) => {
    const color = (await req.text()).split('color=')[1]
    colors.push(color)
    req.redirect('/')
})

app.listen({ port: 8080});