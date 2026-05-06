create database loja_carro;
use loja_carro;
create table carros (
id int auto_increment primary key,
titulo varchar(100),
preco  decimal(9, 2),
descricao text,
marca varchar(50),
modelo varchar(50),
kilometragem  int,
data_compra date,
cambio varchar(20)
);

insert into carros (
titulo, preco, descricao, marca, modelo, kilometragem, data_compra, cambio
) values (
'Vendo celta', 12000.00, 'Carro com pouco tempo de uso', 'Chevrolet', 'Celta', 50000, '2013-12-12', 'Manual'
);

select * from carros;

insert into carros (
titulo, preco, descricao, marca, modelo, kilometragem, data_compra, cambio
) values (
'Vendo celta', 12000.00, 'Carro com pouco tempo de uso', 'Volksvagen', 'Gol', 50000, '2013-12-12', 'Manual'
);