/* Criando Tabela */
CREATE TABLE pessoas (
  id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(30) NOT NULL,
  nascimento DATE
)

/* Inserindo dados na tabela */
INSERT INTO pessoas (nome, nascimento) VALUES ('Yuri', '1996-04-02');
INSERT INTO pessoas (nome, nascimento) VALUES ('Maria', '1994-10-04');
INSERT INTO pessoas (nome, nascimento) VALUES ('Marlon', '1975-11-22');
INSERT INTO pessoas (nome, nascimento) VALUES ('Lílian', '1974-03-20');

/* Alterando dados na tabela */
UPDATE pessoas SET nome = 'Yuri Mota' WHERE id = '1';
UPDATE pessoas SET nome = 'Maria Moreira' WHERE id = '2';
UPDATE pessoas SET nome = 'Marlon Aguiar' WHERE id = '3';
UPDATE pessoas SET nome = 'Lílian Mota' WHERE id = '4';

/* Inserindo mais um usuário para testar Delete */
INSERT INTO pessoas (nome, nascimento) VALUES ('Marcelo Freitas', '1980-05-22');

/* Deletando usuário cadastrado no id 5 */
SELECT FROM pessoas WHERE id = 5;

DELETE FROM pessoas WHERE id = 5;

/* Adicionando um campo 'genero' */
ALTER TABLE `pessoa` ADD `genero` VARCHAR(1) NOT NULL AFTER `nascimento`;

/* Atualizando dados 'genero' */
UPDATE pessoa SET genero = 'M' WHERE id = 1;
UPDATE pessoa SET genero = 'F' WHERE id = 2;
UPDATE pessoa SET genero = 'M' WHERE id = 3;
UPDATE pessoa SET genero = 'F' WHERE id = 4;

/* Agrupando e contando usuários por genero*/
SELECT COUNT(id), genero FROM pessoa GROUP BY genero