# MySQL

Este repositório contém Anotações e Atividade prática do Curso "MySQL - Trabalhando com as susas primeiras tabelas".

### Ferramentas
- MySQL
- XAMPP

### Comandos mais utilizados
CREATE - Criar tabela
INSERT INTO - Inserir novo dado
SELECT FROM - Mostrar o dado especificado
UPDATE SET - Alterar informação
WHERE - Onde fazer a ação
DELETE FROM - "Com grandes poderes vêm grandes responsabilidades"
<!-- Boa prática ao deletar: checar antes de deletar
SELECT * FROM pessoa WHERE id = 5;

DELETE FROM pessoa WHERE id = 5 -->
ORDER BY - Ordenando lista <!-- DESC, ASC -->
GROUP BY - Agrupar dados

JOIN - Relaciona dados de uma tabela com outra
RIGHT - Informa se o dado externo está à direita
LEFT - Informa se o dado externo está à esquerda
INNER JOIN - Consulta só valores relacionados com a tabela
OUTER JOIN - Consulta valores não relacionados com a tabela
AS - videos_canais AS vc (agora pode chamar a tabela 'videos_canais' escrevendo só 'vc')

UNION - União de duas consultas (as tabelas devem ter o mesmo número de colunas)

#### Exercício proposto para praticar a utilização de JOIN e UNION
Relacionar duas tabela, "videos" e "canais", manipulando a tabela "videos_canais"

SELECT v.nome_video, v.autor_video, c.nome_canal FROM videos_canais AS vc JOIN videos AS v ON VC.fk_videos = v.id.videios JOIN canais AS c ON vc.fk_canal = c.id_canal

<!-- Só traz informações solicitadas -->
SELECT * FROM videos_canais AS vc INNER JOIN videos AS v ON VC.fk_videos = v.id.videos INNER JOIN canais AS c ON vc.fk_canal = c.id_canal

<!-- Traz todas as informações disponíveis inclusive Null -->
SELECT * FROM videos_canais AS vc OUTER JOIN videos AS v ON VC.fk_videos = v.id.videos OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal <!-- Ocorre erro por falta de especificação do lado a se consultar (RIGHT ou LEFT) -->

<!--  -->
SELECT * FROM videos_canais AS vc RIGHT OUTER JOIN videos AS v ON vc.fk_videos = v.id.videos RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal <!-- Retorna -->