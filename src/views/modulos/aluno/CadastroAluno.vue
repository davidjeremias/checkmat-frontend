<template>
    <div>
        <TitlePage title="Alunos" tamanho="h5"></TitlePage>
        <v-row style="height: 80px;">
            <template v-if="isPesquisaAluno">
                <v-col cols="4" sm="4" md="3">
                    <v-text-field v-model="modalidade" label="Pesquisa" placeholder="Nome ou CPF"></v-text-field>
                </v-col>
                <v-col cols="4" sm="4" md="3">
                    <v-btn right color="green">
                        <span class="btn-form-save">Pesquisar</span>
                    </v-btn>
                </v-col>
            </template>
            <v-col cols="4" sm="4" md="3" v-if="isPesquisaAluno">
                <v-btn right color="blue" absolute @click="cadastrarAluno">
                    <span class="btn-form-save">Novo Aluno</span>
                </v-btn>
            </v-col>
            <v-col cols="4" sm="4" md="3" v-if="isNovoAluno">
                <v-btn right color="blue" absolute @click="cadastrarAluno">
                    <span class="btn-form-save">Voltar</span>
                </v-btn>
            </v-col>
        </v-row>
        <v-card v-if="isNovoAluno">
            <v-tabs v-model="tab" background-color="black" dark>
                <v-tab>Dados do Aluno</v-tab>
                <v-tab @click="setEndereco">Endereço</v-tab>
                <v-tab>Contato</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <TitleTab title="Dados do Aluno"></TitleTab>

                        <v-row style="height: 80px;">
                            <v-col cols="4" sm="4" md="3">
                                <v-text-field outlined placeholder="999.999.999-99" v-mask="'###.###.###-##'" v-model="cpf" label="CPF"></v-text-field>
                            </v-col>
                            <v-col cols="4" sm="6" md="4">
                                <v-text-field outlined v-model="nome" label="Nome Completo"></v-text-field>
                            </v-col>
                            <v-col cols="4" sm="6" md="4">
                                <v-text-field outlined placeholder="99/99/9999" v-mask="'##/##/####'" v-model="dataNascimento" label="Data de Nascimento"></v-text-field>
                            </v-col>
                        </v-row>

                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item eager>
                    <v-card flat>
                    <v-card-text>
                        <Endereco enderecoDTO="enderecoDTO"></Endereco>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-text><TitleTab title="Contato"></TitleTab></v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
            <v-btn rounded right color="green" absolute bottom>
                <span class="btn-form-save">Salvar</span>
            </v-btn>
        </v-card>
    </div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue'
import TitleTab from '@/components/TitleTab.vue'
import Endereco from '@/components/Endereco.vue'
import methodsGlobais from '@/mixins/methodsGlobais.js'
import bus from '@/bus'

export default {
    name: 'CadastroAluno',
    mixins: [methodsGlobais],
    components:{
        TitlePage,
        TitleTab,
        Endereco
    },
    data(){
        return{
            cpf: null,
            nome: null,
            dataNascimento: null,
            enderecoDTO: null,
            tab: null,
            isNovoAluno: false,
            isPesquisaAluno: true,
        }
    },
    methods:{
        extraiParametros(empresaDTO){
            this.cnpj = empresaDTO.cnpj;
            this.nomeFantasia = empresaDTO.fantasia;
            this.razaoSocial = empresaDTO.nome;
            this.naturezaJuridica = empresaDTO.natureza_juridica;
            this.dataAbertura = this.formatDateLocaleBR(empresaDTO.dataAbertura);
            this.porte = empresaDTO.porte;
            this.situacao = empresaDTO.situacao
            if(empresaDTO.enderecoDTO !== null){
                this.enderecoDTO = empresaDTO.enderecoDTO;
            }
        },
        setEndereco(){
            bus.$emit('endereco', this.enderecoDTO);
        },
        cadastrarAluno(){
            this.isNovoAluno = true;
            this.isPesquisaAluno = false;
        }
    }
}
</script>
