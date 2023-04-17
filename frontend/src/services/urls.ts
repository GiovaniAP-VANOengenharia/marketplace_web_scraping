export const urls: string[] = [
'https://lista.mercadolivre.com.br/',
'https://www.buscape.com.br/',
];

interface ICategory {
  mercadoLivre: string[];
  buscape: string[];
}

export const categories: ICategory = {
  mercadoLivre: ['geladeira', 'smart-tv', 'celulares-smartphones'],
  buscape: ['geladeira', 'tv', 'celular'],
};
