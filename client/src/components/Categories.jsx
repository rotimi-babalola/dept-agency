import React from 'react';
import styled from 'styled-components';

const Categories = () => (

  <Categories.Container>
    <Categories.InnerContainer>
      <Categories.Label htmlFor="categories">Show me</Categories.Label>
      <Categories.Select id="categories" name="categories">
        <option value="all work">All Work</option>
        <option value="technology">Technology</option>
        <option value="design">Design</option>
        <option value="science">Science</option>
      </Categories.Select>
      <Categories.Label htmlFor="categories">in</Categories.Label>
      <Categories.Select id="industries" name="categories">
        <option value="all industries">all Industries</option>
        <option value="b2b">b2b</option>
        <option value="retail&fashion">retail & fashion</option>
        <option value="utilities">utilities</option>
      </Categories.Select>
    </Categories.InnerContainer>
  </Categories.Container>

);

Categories.Container = styled.div`
  display: flex;
`;

Categories.InnerContainer = styled.div`
  margin-left: auto;
`;

Categories.Label = styled.label`
  font-family: 'Teko';
  font-weight: 100;
  margin-right: 2px;
  margin-left: 10px;
  font-size: 1.8rem;
`;

Categories.Select = styled.select`
  height: 30px;
  font-size: 1rem;
`;

export default Categories;
