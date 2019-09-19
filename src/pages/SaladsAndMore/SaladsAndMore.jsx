import React, { useEffect, useContext } from 'react';
import { MenuGrid } from '../../components'
import { AppContext } from '../../context/AppContext';
import { Navbar } from '../../components';
import gridHelper from '../../helpers/gridHelper';

const SaladsAndMore = ({ match }) => {
  const { allItems, setMenuGridItems, sections } = useContext(AppContext);

  const gridContents = sections.map(section => {
    return {
      gridItems: section.options.map(option => option._ref)
    };
  });

  useEffect(()=>{
    const currentSelection = [...allItems.flat()].filter(item => {
      return gridContents[gridHelper(match.path)].gridItems.includes(item._id);
    });
    setMenuGridItems([...currentSelection]);
  }, [])

  return(
    <div>
      <Navbar currentPath={match.path} />
      <MenuGrid header="SALADS & MORE" />
    </div>
  )
};

export default SaladsAndMore;
