import { InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa'},
            { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'},
            { id: 3, name: 'Lazer', description: 'Cinemas, parques, praias, etc'},
            { id: 4, name: 'Salário', description: 'Salário'},
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
        ];

        return { categories }
    }

}