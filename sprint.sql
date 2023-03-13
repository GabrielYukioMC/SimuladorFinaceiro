CREATE DATABASE sprint1;

USE sprint1;

CREATE TABLE empresa(
IdEmpresa INT PRIMARY KEY AUTO_INCREMENT,
CNPJ CHAR(14),
RazaoSocial VARCHAR(40),
DtCadastro DATETIME default current_timestamp,
Endereco VARCHAR(40),
NumeroEndereco INT,
Bairro VARCHAR(40),
CEP CHAR(8),
Cidade VARCHAR(50),
Estado VARCHAR(50)
);

CREATE TABLE Usuario (
IdUsuario INT PRIMARY KEY AUTO_INCREMENT,
DtCadastro DATETIME default current_timestamp,
Nome VARCHAR(50),
Email VARCHAR(50),
Telefone CHAR(15)
);


CREATE TABLE Sensor(
IdSensor INT PRIMARY KEY AUTO_INCREMENT,
TipoSensor VARCHAR(40),
StatusSensor VARCHAR(40), constraint chkStatus check (StatusSensor IN ('Manutenção','Inativo','Ativo'))

);

CREATE TABLE DadosSensor (

IdDadoSensor INT PRIMARY KEY AUTO_INCREMENT,
DadosSensor INT,
DtDados DATETIME default current_timestamp

);