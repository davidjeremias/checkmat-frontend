<template>
    <div>
        <TitlePage title="Pagar Matrícula"></TitlePage>
        <v-row style="height: 80px;">
            <v-col cols="4" sm="4" md="3">
                <v-text-field filled v-model="valorMatricula" label="Valor da Matrícula" disabled prefix="R$" v-mask="'###,##'"></v-text-field>
            </v-col>
            <v-col cols="4" sm="6" md="3">
                <v-text-field filled v-model="dataPagamento" label="Data Pagamento" disabled v-mask="'##/##/####'"></v-text-field>
            </v-col>
            <v-col cols="4" sm="6" md="3">
                <v-text-field outlined v-model="naturezaJuridica" label="Natureza Jurídica"></v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue'
export default {
    name: 'PagarMatricula',
    components:{
        TitlePage
    },
    created(){
        this.dataPagamento = new Date().toLocaleString();
    },
    data(){
        return{
            valorMatricula: '550,50',
            dataPagamento: Date,    
        }
    },
    methods:{
        onModalCartao(tipo){
            this.dialog = true;
            console.log(tipo);
        }
    }
}
</script>3