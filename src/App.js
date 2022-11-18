import './App.css'
import { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from './components/Items';
import { Menu } from './components/Menu';
import { ShowItem } from './components/ShowItem';
import Image from './components/Image';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          img: '10.png',
          title: 'Ролл Мамс',
          desc: 'Обжаренное куриное филе, панированное в сухарях, хрустящий салат, ломтики сочного томата и ломтик сыра в зажаренной пшеничной лепешке, заправленной фирменным соусом.',
          category: 'vlepeshke',
          price: '132'
        },
        {
          id: 2,
          img: '20.png',
          title: 'Двойной ролл Мамс',
          desc: '(Все в двойном размере) Обжаренное куриное филе, панированное в сухарях, хрустящий салат, ломтики сочного томата и ломтик сыра в зажаренной пшеничной лепешке, заправленной фирменным соусом.',
          category: 'vlepeshke',
          price: '207'
        },
        {
          id: 3,
          img: '30.png',
          title: 'Ролл Папс',
          desc: 'Рубленный говяжий бифштекс со специями, ломтик сыра, хрустящий салат, ломтики сочного томата в зажаренной пшеничной лепешке, заправленной томатным соусом и фирменным соусом.',
          category: 'vlepeshke',
          price: '156'
        },
        {
          id: 4,
          img: '40.png',
          title: 'Двойной ролл Папс',
          desc: '(Все в двойном размере) Рубленный говяжий бифштекс со специями, ломтик сыра, хрустящий салат, ломтики сочного томата в зажаренной пшеничной лепешке, заправленной томатным соусом и фирменным соусом.',
          category: 'vlepeshke',
          price: '249'
        },
        {
          id: 5,
          img: '50.png',
          title: 'Веган ролл',
          desc: 'Оливки, ломтики сыра сиртаки, хрустящий салат, ломтики сочного томата, свежие сочные огурчики, перчик сладкий в зажаренной пшеничной лепешке, заправленный оливковым маслом.',
          category: 'vlepeshke',
          price: '189'
        },
        {
          id: 6,
          img: '60.png',
          title: 'Ролл фри',
          desc: 'Картофель фри, хрустящий салат, ломтики сочного томата, хрустящие маринованные огурчики в зажаренной пшеничной лепешке, заправленный сырным соусом.',
          category: 'vlepeshke',
          price: '141'
        },
        {
          id: 7,
          img: '70.png',
          title: 'Мамчикен',
          desc: 'Обжаренное куриное филе, панированное в сухарях, которое подается на булочке с кунжутом, заправленной хрустящим салатом, ломтиками сочного томата, ломтиком сыра и фирменным соусом.',
          category: 'burger',
          price: '141'
        },
        {
          id: 8,
          img: '80.png',
          title: 'Чикенбургер',
          desc: 'Обжаренное куриное филе, панированное в сухарях, которое подается на булочке с кунжутом, заправленной хрустящим салатом, хрустящим маринованным огурчиком и фирменным соусом.',
          category: 'burger',
          price: '121'
        },
        {
          id: 9,
          img: '90.png',
          title: 'Фреш Мамс',
          desc: 'Обжаренное куриное филе, панированное в сухарях, которое подается на булочке с кунжутом, заправленной хрустящим салатом, свежими сочными огурчиками, ломтиками сочного томата, болгарским перчиком и фирменным соусом.',
          category: 'burger',
          price: '137'
        },
        {
          id: 10,
          img: '100.png',
          title: 'Биг Пап',
          desc: 'Обжаренная булка разрезанная на три части. В одном бургере вы получаете двойную порцию говяжьего бифштекса, двойную порцию сыра, двойную порцию хрустящего салата, двойную порцию маринованных огурчиков, двойную порцию томатного и фирменных соусов.',
          category: 'burger',
          price: '233'
        },
        {
          id: 11,
          img: '110.png',
          title: 'Мини Мам Чикен',
          desc: '(мини-версия знаменитого Мам Чикен) Обжаренное куриное филе, панированное в сухарях, которое подается на булочке для бургера мини, заправленной хрустящим салатом, ломтиками сочного томата, ломтиком сыра и фирменным соусом.',
          category: 'burger',
          price: '111'
        },
        {
          id: 12,
          img: '120.png',
          title: 'Чизбургер Пап',
          desc: 'Булочка с кунжутом, обжаренный сочный бифштекс, два ломтика сыра, хрустящие маринованные огурчики, хрустящий салат, томатный соус, фирменный соус.',
          category: 'burger',
          price: '160'
        },
        {
          id: 13,
          img: '130.png',
          title: 'Хот-дог',
          desc: 'Сочная сосиска, зажаренный в гриле багет, маринованные огурчики, ломтики сочного томата, хрустящий салат,  фирменный соус, томатный соус.',
          category: 'hot-dog',
          price: '142'
        },
        {
          id: 14,
          img: '140.png',
          title: 'Двойной хот-дог',
          desc: 'Две сочные сосиски, зажаренный в гриле багет, маринованные огурчики, ломтики сочного томата, хрустящий салат,  фирменный соус, томатный соус.',
          category: 'hot-dog',
          price: '204'
        },
        {
          id: 15,
          img: '150.png',
          title: 'Чикен Папс',
          desc: 'Куриные крылышки, панированные в сухарях, обжаренные во фритюре',
          category: 'wings-legs',
          price: '223'
        },
        {
          id: 16,
          img: '160.png',
          title: 'Куриные ножки',
          desc: 'Куриные ножки, панированные в сухарях, обжаренные во фритюре',
          category: 'wings-legs',
          price: '218'
        },
        {
          id: 17,
          img: '170.png',
          title: 'CRAZY BASKET ТОЛЬКО В ПАПАSOUS',
          desc: 'Куриные ножки - 2шт, куриные крылья - 5шт, картофель фри малая, куриное филе панированное - 160г, фирменный соус',
          category: 'wings-legs',
          price: '600'
        },
        {
          id: 18,
          img: '180.png',
          title: 'Салат «Греческий»',
          desc: 'Оливки, сливочный сыр брынза, томаты, свежие огурчики, сладкий перчик, лист салата, оливковое масло, кунжут',
          category: 'salad',
          price: '233'
        },
        {
          id: 19,
          img: '190.png',
          title: 'Салат «Фирменный»',
          desc: 'Картофель фри, маринованные огурчики, томаты, фирменный соус, лист салата, куриное филе, панированное в сухарях',
          category: 'salad',
          price: '159'
        },
        {
          id: 20,
          img: '200.png',
          title: 'Ланч «MINI»',
          desc: 'Гамбургер, картофель фри (малая порция), соус фирменный, сок 0.2л',
          category: 'lunch',
          price: '291'
        },
        {
          id: 21,
          img: '210.png',
          title: 'Ланч «Стандарт»',
          desc: 'Чикенбургер, картофель фри средняя, соус фирменный, сок 0,33л',
          category: 'lunch',
          price: '317'
        },
        {
          id: 22,
          img: '220.png',
          title: 'Картофель фри',
          desc: 'Картофель, соль',
          category: 'potato',
          price: '110'
        },
        {
          id: 23,
          img: '230.png',
          title: 'Картофельные дольки от Папы',
          desc: 'Картофель, соль.',
          category: 'potato',
          price: '168'
        },
        {
          id: 24,
          img: '240.png',
          title: 'Томатный кетчуп',
          desc: '',
          category: 'sauces',
          price: '26'
        },
        {
          id: 25,
          img: '250.png',
          title: 'Тайский соус',
          desc: '',
          category: 'sauces',
          price: '52'
        },
        {
          id: 26,
          img: '260.png',
          title: 'Чай',
          desc: '',
          category: 'drink',
          price: '40'
        },
        {
          id: 27,
          img: '270.png',
          title: 'Милкшейк',
          desc: '',
          category: 'drink',
          price: '130'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return(
      <div className="wrapper">
        <Header orders={ this.state.orders } onDelete = { this.deleteOrder }/>
        <Image />
        <Menu chooseCategory={ this.chooseCategory } />
        <Items onShowItem={ this.onShowItem } items={ this.state.currentItems } onAdd = { this.addToOrder }/>
        { this.state.showFullItem && <ShowItem onAdd = { this.addToOrder } onShowItem={ this.onShowItem } item={this.state.fullItem} /> }
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }


  addToOrder (item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}
export default App;