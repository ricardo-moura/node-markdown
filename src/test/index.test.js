const readFile = require("../index");
const resultArray = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('readFile::', () => {
    it('should be a function', () => {
        expect(typeof readFile).toBe('function');
    });
    it('should return an array with results', async () => {
        const result = await readFile('src/test/arquivos/texto1.md');
        expect(result).toEqual(resultArray);
    });
    it('should return there are no links in the file', async () => {
        const result = await readFile('src/test/arquivos/texto1_semlinks.md');
        expect(result).toEqual('There are no links in this file!');
    });
    it('should throw an exception when file does not exist', async () => {
        await expect(readFile('src/test/arquivos')).rejects.toThrow('file not founded!')
    });
    it('should resolve the function with success', async () => {
        await expect(readFile('src/test/arquivos/texto1.md')).resolves.toEqual(resultArray);
    });
});
