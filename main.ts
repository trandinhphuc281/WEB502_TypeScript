import Navigo from 'navigo'; // When using ES modules.
import Header from './src/components/header';
import PokemonDetail from './src/components/details';
import './style.css';

const router = new Navigo('/', {linksSelector: "a"});

const print = async function (components, id){
  const app = document.getElementById('app');
  if(app)
    app.innerHTML = await components.render(id);
}

router.on({
  '/':()=> print(Header,),
  '/pokemons/:id':(data) => {
    const id = +data.data.id
    print(PokemonDetail, id)
  }
});
router.resolve();
