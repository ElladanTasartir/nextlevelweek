import multer from 'multer';
//multer é uma biblioteca que ajuda com o upload de imagens
import path from 'path';
import crypto from 'crypto';

export default { //exportar essas configurações
    storage: multer.diskStorage({  //diskStorage recebe duas propriedades
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //aonde vão parar os arquivos que receberem o upload
        filename(request, file, callback) { //mesmo request que vai trazer o arquivo e entrar nas rotas
            //depois o arquivo em si e por último um callback que vai ocorrer quando acabou de processar o filename
            const hash = crypto.randomBytes(6).toString('hex');
            const fileName = `${hash}-${file.originalname.replace(' ', '')}`;//pega o nome original do arquivo e coloca um hash antes

            callback(null, fileName) //recebe como primeiro parâmetro um erro, mas já que é um código simples, podemos jogar nulo
            //pois não terá erro nessas linhas anteriores
            //e o nome do arquivo
        }
    }),
};