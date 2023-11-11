# Carregar compras do cache

## Caso de sucesso

1. Sistema executa o comando carregar compras
2. Sistema carrega os dados do cache
3. Sistema valida se o Cache tem menos de 3 dias
4. Sistema cria uma lista de compras a partir dos dados do Cache
5. Sistema retorna uma lista de compras

## Exceção - Cache expirado

1. Sistema limpa o cache
2. Sistema retorna erro

## Exceção - cache vazio

1. Sistema retorna erro
