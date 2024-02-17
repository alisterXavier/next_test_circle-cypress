import { Combobox, ComboboxStore, InputBase } from '@mantine/core';
import React from 'react';

type comboWrapperTypes = {
  comboState: ComboboxStore;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  search: string;
  children: React.ReactNode;
  label: string
};
const ComboboxWrapper = ({
  comboState,
  setSearch,
  setState,
  search,
  label,
  children,
}: comboWrapperTypes) => {
  return (
    <Combobox
      variant=""
      width={300}
      store={comboState}
      onOptionSubmit={(val) => {
        setState(val);
        setSearch(val);
        comboState.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          styles={{
            input: {
              border: '.1px solid var(--testColor)',
              boxShadow: '20px 20px 48px #bebebe,-20px -20px 48px #ffffff',
            },
            label: {
              position: 'relative',
              zIndex: 1,
            },
          }}
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          label={label}
          m={10}
          w={300}
          rightSection={<Combobox.Chevron />}
          onClick={() => comboState.openDropdown()}
        ></InputBase>
      </Combobox.Target>

      <Combobox.Dropdown w={300} data-cy={'test-user-options'}>
        <Combobox.Options
          style={{ overflowY: 'auto' }}
          w={300}
          mah={300}
          mih={25}
        >
          {children}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default ComboboxWrapper;
