import React, { Fragment, useEffect, useContext } from 'react';
import { Navbar, MenuGrid } from '../../components';
import { AppContext } from '../../context/AppContext';

const SpecialOffers = () => {
  const { allItems, menuGridItems, setMenuGridItems, sectionItems } = useContext(AppContext);

  useEffect(()=>{
    console.log(allItems)
    const currentSelection = [...allItems.flat()].filter(item=>{
      return sectionItems.includes(item._id)
    })
    console.log(currentSelection, "currentselection")
    setMenuGridItems([...currentSelection])
  }, [])

  return (
    
    <Fragment>
      <Navbar />
      <MenuGrid header={"SPECIAL OFFERS"} menuItems={menuGridItems}/>
    </Fragment>
  );
};

export default SpecialOffers;