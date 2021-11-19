CREATE TABLE produtos(
    codigo INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'Chave',
    descricao VARCHAR(45) NOT NULL COMMENT 'Descrição do Produto',
    preco DECIMAL(10,2) NOT NULL ,
    tipo_embalagem INT COMMENT '1=Unidade/2=Pack/3=Caixa',
    quantidade_embalagem INT NOT NULL COMMENT 'Em unidades',
    peso INT NOT NULL COMMENT 'Em gramas'

);


INSERT INTO produtos(descricao, preco, tipo_embalagem, quantidade_embalagem, peso)
VALUES(
    'Caixa p/ Smartphone Samsung Galaxy X30 premium',
    89.34,
    3,
    3000,
    300
);