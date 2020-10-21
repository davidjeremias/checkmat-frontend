<template>
    <v-dialog v-model="dialog" width="1000">
        
        <v-card>
        <v-card-title
          class="headline red lighten-2"
          primary-title
        >
          Registrar Cliente
        </v-card-title>

        <v-card-text>
            <v-form v-model="valid" >
                <v-container>
                    <v-row class="text-center">
                        <v-text-field
                            v-model="nome"
                            :rules="nomeRules"
                            label="Nome Completo"
                            type="text"
                            required
                            prepend-icon="mdi-account"
                        ></v-text-field>
                    </v-row>
                    <v-row class="text-center">
                        <v-text-field
                            v-model="cpf"
                            :rules="cpfRules"
                            label="CPF"
                            type="number"
                            min="11" max="11"
                            required
                            prepend-icon="mdi-card-account-details-outline"
                        ></v-text-field>
                        <v-text-field
                            v-model="idade"
                            :rules="cpfRules"
                            label="Idade"
                            type="number"
                            min="1" max="300"
                            required
                            prepend-icon="mdi-sort-numeric-ascending"
                        ></v-text-field>
                    </v-row>
                    <v-row class="text-center">
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            type="text"
                            required
                            prepend-icon="mdi-card-account-mail"
                        ></v-text-field>

                        <v-text-field
                            v-model="celular"
                            :rules="cpfRules"
                            label="Celular"
                            type="text"
                            min="11" max=11
                            required
                            prepend-icon="mdi-phone-dial"
                        ></v-text-field>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>

        <v-divider></v-divider>
       

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="login"
            :disabled="isButton"
          >
            Registrar
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
</template>

<script>
import methodsGlobais from '@/mixins/methodsGlobais.js'
export default {
    name: 'Registro',
    mixins: [methodsGlobais],
    props: {
        dialog:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            nome: null,
            cpf: null,
            nomeRules: [
                v => !!v || 'Nome é Obrigatório'
            ],
            cpfRules: [
                v => !!v || 'CPF é Obrigatório',
                v => {
                    if(!this.validarCPF(v)){
                        return 'CPF inválido'
                    }
                }
            ],
        }
    },
}
</script>