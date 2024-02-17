'use client';
import { useOrders } from '@/shared/hooks/order';
import { selectAuthState } from '@/shared/redux/authSlice';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import {
  DataTable,
  DataTableExpandedRows,
  DataTableValueArray,
} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { components } from '@/shared/types/api';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Grid, Table, Text } from '@mantine/core';

const rowExpansionTemplate = (data: components['schemas']['Orders']) => {
  return (
    <div className="p-3 w-[60%] bg-gray-100 flex items-center justify-center">
      <div className="w-[80%]">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <p className="uppercase text-center">Product</p>
              </Table.Th>
              <Table.Th>
                <p className="uppercase text-center">Discount</p>
              </Table.Th>
              <Table.Th>
                <p className="uppercase text-center">Price</p>
              </Table.Th>
              <Table.Th>
                <p className="uppercase text-center">Quantity</p>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data?.products?.map((item, index) => (
              <Table.Tr
                key={`wrapper ${data.id + index}`}
                className="cursor-pointer image-transition"
              >
                <Table.Td>
                  <div className="relative flex items-center">
                    <figure className={`relative w-[50px] h-[100px]`}>
                      {item?.productImages.map((image, index) => {
                        return (
                          <Image
                            data-cy={`test-cart-item-image-${item.id}`}
                            key={index}
                            alt={item.productName}
                            className={`transition-all duration-200 ${
                              index === 1 && 'hover:opacity-0'
                            }`}
                            src={image}
                            fill
                            quality={100}
                            style={{
                              objectFit: 'contain',
                            }}
                          />
                        );
                      })}
                    </figure>
                    <div className="w-[320px]">
                      <p
                        className="small-product-title w-fit !h-[20px] ml-3 text-[12px]"
                        data-cy={`test-cart-item-title-${item.id}`}
                      >
                        {item.productName}
                      </p>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <div className="flex justify-center items-center">
                    <p
                      className="text-[var(--testColor)] p-1 text-[12px]"
                      data-cy={`test-cart-item-discount-${data.id}`}
                    >
                      {item.discount > 0 ? `-${item.discount}%` : ''}
                    </p>
                  </div>
                </Table.Td>
                <Table.Td style={{ textAlign: 'center' }}>
                  <p
                    data-cy={`test-cart-item-price-${item.id}`}
                    className="text-[12px]"
                  >
                    ${item.price}
                  </p>
                </Table.Td>
                <Table.Td style={{ textAlign: 'center' }}>
                  <div className="flex items-center justify-center my-1">
                    <p
                      className="flex items-center justify-center text-[12px]"
                      data-cy={`test-cart-item-qty-${item.id}`}
                    >
                      {item.quantity}
                    </p>
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

const Orders = () => {
  const user = useSelector(selectAuthState);
  const { orderData, orderIsLoading, orderErrors } = useOrders({
    customerId: user?.data.user?.id ?? undefined,
  });
  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | DataTableValueArray | undefined
  >([]);

  const hash = (e: any, options: { rowIndex: number }) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
      }}
    >
      <p>{options.rowIndex + 1}</p>
    </div>
  );

  const orderDateTemplate = (rowData: components['schemas']['Orders']) => {
    return dayjs(rowData.created_at).format('DD/MM/YYYY HH:mm');
  };

  return (
    <div className="main-wrapper">
      <div className="w-full h-[90%]">
        <DataTable
          className="data-table"
          loading={orderIsLoading || !orderData?.data}
          value={orderData?.data}
          virtualScrollerOptions={{
            itemSize: 5,
          }}
          emptyMessage={
            <div className="w-full h-full text-center">Nothing to display.</div>
          }
          size="normal"
          expandedRows={expandedRows}
          onRowToggle={(e) => {
            setExpandedRows(e.data);
          }}
          paginator={orderData?.data && orderData?.data.length > 10}
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          width={400}
          tableStyle={{
            width: '90%',
          }}
          showGridlines
          style={{
            height: '400px',
          }}
          header={<h1>Orders</h1>}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
        >
          <Column
            expander={true}
            align={'center'}
            headerStyle={{
              background: 'rgba(247, 249, 252, 0.80)',
              color: 'var(--testColor',
              fontSize: '14px',
              textTransform: 'uppercase',
              padding: '10px',
              outline: 'none',
            }}
            bodyStyle={{
              padding: '10px',
            }}
            style={{
              width: '100px',
              height: '60px !important',
            }}
          />
          <Column
            headerStyle={{
              background: 'rgba(247, 249, 252, 0.80)',
              color: 'var(--testColor',
              fontSize: '14px',
              textTransform: 'uppercase',
              padding: '10px',
              outline: 'none',
            }}
            bodyStyle={{
              padding: '10px',
            }}
            style={{
              width: '100px',
              height: '60px',
            }}
            body={hash}
            header="#"
          />
          <Column
            field="created_at"
            header="Purchased Date"
            headerStyle={{
              background: 'rgba(247, 249, 252, 0.80)',
              color: 'var(--testColor',
              fontSize: '14px',
              padding: '10px',
              textTransform: 'uppercase',
              outline: 'none',
            }}
            bodyStyle={{
              padding: '10px',
            }}
            style={{
              height: '60px',
            }}
            sortable={true}
            body={orderDateTemplate}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Orders;
