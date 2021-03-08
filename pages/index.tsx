import Layout from '../components/Layout/Layout'
import Session from '../components/Session/Session'
import Youtube from '../components/Youtube/Youtube'
import Input from '../components/Input/Input'
import Textarea from '../components/Textarea/Textarea'
import {Button, ColorType, ButtonType, ButtonFloatType} from '../components/Button/Button'

const IndexPage = () => (
  <Layout>
    <Session>
      <h1>Sobre</h1>
      <p>
        Músico, compositor, arranjador e instrumentista. Ao longo deste período, James vem desenvolvendo e consolidando seu trabalho em diferentes frentes.
        <br/>
        Como professor, atua desde os 15 anos de idade, transmitindo seu conhecimento musical para várias gerações de músicos porto-alegrenses.
        <br/>
        Como compositor, passou a desenvolver um trabalho solo a partir do final da década de 80. Desde então, já gravou 4 CDs independentes, com temas de sua autoria, produziu e participou de inúmeros shows.
        <br/>
        Trabalha como produtor ou arranjador em vários outros projetos musicais na cidade.
        <br/>
        Como instrumentista, James atua, principalmente, na área do jazz e da música instrumental brasileira, com diversas formações musicais.
        <br/>
        Recebeu 4 Prêmios Açorianos de Música, o último deles esse ano, 2020, como melhor compositor instrumental com seu novo trabalho solo, "Manacô", além de muitas outras indicações ao prêmio. Recebeu, também, a indicação para representar o RS no Projeto Pixinguinha, promovido pelo Governo Federal.
      </p>
    </Session>

    <Session>
      <Youtube url={'https://www.youtube.com/embed/zobTcDkijjQ'} />
    </Session>

    <Session>

      <h1>Contato</h1>
      <h4>texto para entrar em contato</h4>

      <form action="">

        <Input 
          id={'name'} 
          name={'Name'} 
          type={'Text'} 
          placeHolder={'Your name'} />

        <Input 
          id={'email'} 
          name={'Email'} 
          type={'Email'} 
          placeHolder={'email@email.com'} />


        <Input 
          id={'phone'} 
          name={'Phone'} 
          type={'phone'} 
          placeHolder={'(55) 99999-9999'} />   

        <Textarea
          id={'mensagem'}
          name={'Mensagem'}
          placeHolder={'Digite sua mensagem'} />     

        <Button 
          id={'sendEmail'}
          name={'Enviar'}
          float={ButtonFloatType.right}
        />

      </form>


    </Session>

  </Layout>
)

export default IndexPage