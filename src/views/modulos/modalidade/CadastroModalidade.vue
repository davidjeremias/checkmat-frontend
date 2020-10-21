<template>
    <div>
        <TitlePage title="Modalidades"></TitlePage>
        <v-row style="height: 80px;">
            <v-col cols="4" sm="4" md="3">
                <v-text-field v-model="modalidade" label="Modalidade" placeholder="Nome da Modalidade"></v-text-field>
            </v-col>
            <v-col cols="4" sm="4" md="3">
                <v-btn right color="blue">
                    <span class="btn-form-save">Pesquisar</span>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue'
export default {
    name: 'CadastroModalidade',
    components:{
        TitlePage
    },
    data(){
        return{
            modalidade: null  
        }
    }
}
</script>3