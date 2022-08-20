import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';


export default () => (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

            

                <Card titulo="#09 - Comunicação Direta" color="#59323c">
                    <DiretaPai></DiretaPai>
                </Card>

                

                <Card titulo="#08 - Renderização Condicional" color="#6F28E4">
                    <ParOuImpar numero={7}></ParOuImpar>
                    <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                    {/* <UsuarioInfo usuario={{email: 'fer@nando.com'}}></UsuarioInfo> */}
                </Card>


                <Card titulo="#07 - Desafios Repetição: Produtos" color="#CC66FF">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                    
                    
                </Card>

                <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    
                    
                    </Familia>
                    
                </Card>

                <Card titulo="#04 - Desafio aleatório" color="#FA6900">
                    <Aleatorio 
                        min={1}
                        max={60}
                        titulo="Numero aleatório"
                    />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                
                <Card titulo="#02 - Com Parametro"  color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Dillan Braz" nota={8.6} />
                </Card>
                
                <Card titulo="#01 - Primeiro" color="#588c73">
                    <Primeiro></Primeiro>
                </Card>

            </div>

            
            
            
        </div>
    );
