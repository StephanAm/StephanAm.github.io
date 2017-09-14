import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';
import Api from '../src/api';
import Cart from '../src/components/Cart';
const mockCart = [
  { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
  { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
  { id: 'c', brand: 'Nike', name: 'Roshe', price: 333.99 },
  { id: 'd', brand: 'Reebok', name: 'Classic Brown', price: 1999.99 },
  { id: 'e', brand: 'Reebok', name: 'Classic White', price: 1999.99 },
  { id: 'f', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 }
];
describe('App', () => {

  it('should render the <Cart> component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Cart).length).toEqual(1);
  });

  it('should pass `state.cart` as a prop to <Cart />', () => {
    const wrapper = shallow(<App/>);
    const CartProps = wrapper.find(Cart).props();
    expect(Object.keys(CartProps)).toContain('items');
    expect(CartProps.items).toEqual(wrapper.state().cart);
  });
  it("should implement a instance method called 'handleCartRemove'",()=>{
    const wrapper = shallow(<App/>);
    expect(Object.keys(wrapper.instance())).toContain('handleCartRemove');
    expect(wrapper.instance().handleCartRemove).toBeInstanceOf(Function);
  });
  it("should remove an item from the cart when 'handleCartRemove' is called",()=>{
    const wrapper = shallow(<App/>);
    wrapper.setState({cart:mockCart});
    var initialCartCount = wrapper.state().cart.length;
    expect(initialCartCount).toEqual(mockCart.length);
    wrapper.instance().handleCartRemove(4);
    expect(wrapper.state().cart.length).toBeLessThan(initialCartCount);
  });
  it("should pass 'handleCartRemove' as a property named 'onRemoveItem' to <Cart />",()=>{
    const wrapper = shallow(<App/>);
    const cartProps = wrapper.find(Cart).props();
    expect(Object.keys(cartProps)).toContain('onRemoveItem');
    expect(cartProps.onRemoveItem).toEqual(wrapper.instance().handleCartRemove);
  });
});

describe('Cart', () => {


  const mockShoe = { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999 };

  it('should render a <li> for each item in the cart', () => {
    const wrapper = shallow(<Cart items={mockCart}/>);
    expect(wrapper.find('li').length).toEqual(mockCart.length);
  });
  it('should implement an <a/> element for each <li>',()=>{
    const wrapper = shallow(<Cart items={mockCart}/>);
    var listItems = wrapper.find('li');
    listItems.forEach((i)=>{
      expect(i.find('a').length).toEqual(1);
    });
  });

});