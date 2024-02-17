import {
  Checkbox,
  CheckboxGroup,
  RangeSlider,
  Slider,
  TextInput,
} from '@mantine/core';
import React, { ReactElement, useState } from 'react';

type FilterProps = {
  type: string;
  filterByTypeFn: {
    filterByType: string[];
    setFilterByType: (type: string[]) => void;
  };
  filterByPriceFn: {
    filterByPrice: string;
    setFilterByPrice: (type: string) => void;
  };
  // filterByPriceRangeFn: {
  //   filterByPriceRange: number[];
  //   setFilterByPriceRange: (type: number[]) => void;
  // };
};

export const Filter = ({
  type,
  filterByTypeFn: { filterByType, setFilterByType },
  filterByPriceFn: { filterByPrice, setFilterByPrice },
}: FilterProps) => {

  const filterType = (e: Event) => {
    const { value } = (e.currentTarget as HTMLInputElement)

    if (filterByType.includes(value)){
      const qwerty = filterByType.filter(i => i !== value)
      setFilterByType(qwerty)
    }
    else{
      const qwerty = [...filterByType, value]
      setFilterByType(qwerty);
    }

  }
  return (
    <div className="sticky top-[11%] w-[200px] bg-[var(--testColor)] text-[white] rounded p-5 h-[80vh]">
      <h1 className="text-[white] mt-0">Filter</h1>
      {type.toLowerCase() === 'electronics' ? (
        <></>
      ) : (
        <div className="">
          <div>
            <CheckboxGroup label="By Type" p={5}>
              <Checkbox
                radius={2}
                label="Jeans"
                value={'jeans'}
                onClick={(e) => {filterType(e as unknown as Event)}}
                mt={4}
                color="var(--testColor)"
              />
              <Checkbox
                radius={2}
                className=""
                label="T-shirts"
                value={'tshirts'}
                onClick={(e) => {filterType(e as unknown as Event)}}
                mt={4}
                color="var(--testColor)"
              />
              <Checkbox
                radius={2}
                label="Shoes"
                value={'shoes'}
                onClick={(e) => {filterType(e as unknown as Event)}}
                mt={4}
                color="var(--testColor)"
              />
            </CheckboxGroup>
          </div>
          <div className="my-5">
            <CheckboxGroup value={[filterByPrice]} label="By Price" p={5}>
              <Checkbox
                radius={3}
                label="Low To High"
                value={'asc'}
                onClick={(e) => {
                  if (filterByPrice === 'asc') setFilterByPrice('');
                  else setFilterByPrice(e.currentTarget.value);
                }}
                mt={4}
                color="var(--testColor)"
              />
              <Checkbox
                radius={3}
                label="High to Low"
                value={'desc'}
                onClick={(e) => {
                  if (filterByPrice === 'desc') setFilterByPrice('');
                  else setFilterByPrice(e.currentTarget.value);
                }}
                mt={4}
                color="var(--testColor)"
              />
            </CheckboxGroup>
          </div>
          <div className="w-full h-[50px]">
            {/* <Slider color={'blue'} min={10} max={2000} /> */}
            {/* <RangeSlider
              mt={50}
              step={1}
              min={minPrice}
              max={maxPrice}
              radius={5}
              color="var(--offWhite)"
              labelAlwaysOn
              value={[filterByPriceRange[0], filterByPriceRange[1]]}
              onChange={(e) => {
                setFilterByPriceRange(e);
              }}
              // label={valueLabelFormat}
            /> */}

            {/* TODO create a min and max input for price */}
            {/* <div className="flex">
              <TextInput
                placeholder="Min"
                m={2}
                radius={2}
                onChange={(e) =>
                  setFilterByPriceRange((prev) => {
                    if (parseInt(e.target.value) >= minPrice)
                      return [parseInt(e.target.value), prev[1]];
                  })
                }
                value={filterByPriceRange[0]}
              />
              <TextInput
                placeholder="Max"
                onChange={(e) =>
                  setFilterByPriceRange((prev) => {
                    if (parseInt(e.target.value) <= maxPrice)
                      return [prev[0], parseInt(e.target.value)];
                  })
                }
                m={2}
                radius={2}
                value={filterByPriceRange[1]}
              />
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};
