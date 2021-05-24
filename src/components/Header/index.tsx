/* eslint-disable arrow-parens */
/* eslint-disable operator-linebreak */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/index';
import { ProductCart } from '../ProductCart';
import { ProductList } from '../ProductList';
import {
  ClientOptions,
  Container,
  ContainerHeader,
  LogoOptions,
  Cart,
  Login,
  ContainerSearch,
  Search,
  Results,
  ResultsCart,
  ContainerProductCart,
} from './styles';

import Logo from '../../assets/logoJussiVectorGreen.svg';
import IconSearch from '../../assets/search.svg';
import IconCart from '../../assets/shopping-cart.svg';
import { loadRequest } from '../../store/ducks/products/actions';
import { Products } from '../../store/ducks/products/types';
import { loadRequestCart } from '../../store/ducks/cart/actions';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: ApplicationState) => {
    return state.products;
  });

  const [searchWord, setSearchWord] = useState('');
  const [filter, setFilter] = useState([] as Products[]);
  const [loadProducts, setLoadProducts] = useState([] as Products[]);

  const findProducts = useCallback(async () => {
    dispatch(loadRequest());
  }, [dispatch]);

  const verifyQuantityProduct = useCallback(async () => {
    dispatch(loadRequestCart({ id: 1, quantity: 1 }));
  }, [dispatch]);

  useEffect(() => {
    findProducts();
  }, []);

  useEffect(() => {
    console.log('====>', products);
    setLoadProducts(products.data);
  }, [products]);

  useEffect(() => {
    const array = loadProducts.filter((c: Products) => {
      return (
        c.name.toLocaleLowerCase().indexOf(searchWord.toLocaleLowerCase()) > -1
      );
    });

    setFilter(array);

    console.log('ARRAY GERADO', array);
  }, [searchWord]);

  return (
    <Container>
      <ContainerHeader>
        <LogoOptions>
          <img src={Logo} alt="logo" />
          <div>
            <p>Nossas Soluções</p>
          </div>
          <div>
            <p>Conheça a Jüssi</p>
          </div>
        </LogoOptions>
        <ClientOptions>
          <ContainerSearch>
            <Search>
              <input
                type="text"
                placeholder="Buscar"
                // eslint-disable-next-line arrow-parens
                onChange={event => {
                  return setSearchWord(event.target.value);
                }}
              />
              <img src={IconSearch} alt="search" />
            </Search>
            <Results open={!!filter.length && !!searchWord}>
              <ContainerProductCart>
                {filter.length &&
                  filter.map(p => {
                    return (
                      <ProductList name={p.name} price={p.price} key={p.id} />
                    );
                  })}
              </ContainerProductCart>
            </Results>
          </ContainerSearch>
          <Login>
            <p>Login</p>
          </Login>
          <Cart
            onClick={() => {
              return verifyQuantityProduct();
            }}
          >
            <img src={IconCart} alt="cart" />
            {/* <ResultsCart>
              <ContainerProductCart>
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
              </ContainerProductCart>
            </ResultsCart> */}
          </Cart>
        </ClientOptions>
      </ContainerHeader>
    </Container>
  );
};
