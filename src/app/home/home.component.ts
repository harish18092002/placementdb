import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  addNew = false;
  editing = false;


  customers = [
    {
      customerId: 'X78976TY6546I',
      selected: true,
      cardData: {
        Name: 'Harish',
        no: '9790909162',

      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Harish',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },

      ],
      contact: [

        {
          title: 'Phone number',
          value: '9790909162',
        },


      ],
      address: [
        {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },

    // 2nd customer

    {
      customerId: 'X78976TY6546I',
      selected: false,
      cardData: {
        Name: 'Abin',
        no: '9987654321',

      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Abin',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },

      ],
      contact: [

        {
          title: 'Phone number',
          value: '9987654321',
        },


      ],
      address: [
        {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },


    // 3rdcustomer

    {
      customerId: 'X78976TY6546I',
      selected: false,
      cardData: {
        Name: 'Arun',
        no: '1234567890',

      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Arun',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },

      ],
      contact: [

        {
          title: 'Phone number',
          value: '1234567890',
        },


      ],
      address: [
        {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },


    // 4th customer

    {
      customerId: 'X78976TY6546I',
      selected: false,
      cardData: {
        Name: 'Madan',
        no: '9234567890',

      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Madan',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },

      ],
      contact: [

        {
          title: 'Phone number',
          value: '9234567890',
        },


      ],
      address: [
        {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },

    {
      customerId: 'X78976TY6546I',
      selected: false,
      cardData: {
        Name: 'Nivetha',
        no: '1234567890',

      },
      customerDetails: [
        {
          title: 'Customer name',
          value: 'Nivetha',
        },
        {
          title: 'Status',
          value: 'Active',
        },
        {
          title: 'Customer ID',
          value: 'X78976TY6546I',
        },
        {
          title: 'Store name',
          value: 'Guduvanchery',
        },

      ],
      contact: [

        {
          title: 'Phone number',
          value: '1234567890',
        },


      ],
      address: [
        {
          title: 'Home',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
        },
        {
          title: 'Office',
          value: `14/A, East coast street, South west
          Kotturpalayamkotai, Vikasvendra kundramma puram,
          Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
        },
      ],
    },


    //     {
    //     customerId: 'X78976TY6546I',
    //      selected: false,
    //     cardData: {
    //       Name: 'Akash',
    //       no: '1234567890',

    //     },
    //     customerDetails: [
    //       {
    //         title: 'Customer name',
    //         value: 'Akash',
    //       },
    //       {
    //         title: 'Status',
    //         value: 'Active',
    //       },
    //       {
    //         title: 'Customer ID',
    //         value: 'X78976TY6546I',
    //       },
    //       {
    //         title: 'Store name',
    //         value: 'Guduvanchery',
    //       },

    //     ],
    //     contact: [

    //       {
    //         title: 'Phone number',
    //         value: '1234567890',
    //       },


    //     ],
    //     address: [
    //  {
    //         title: 'Home',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
    //       },
    //       {
    //         title: 'Office',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
    //       },
    //     ],
    //   },

    //     {
    //     customerId: 'X78976TY6546I',
    //       selected: false,
    //     cardData: {
    //       Name: 'Tazeen',
    //       no: '1234567890',

    //     },
    //     customerDetails: [
    //       {
    //         title: 'Customer name',
    //         value: 'Tazeen',
    //       },
    //       {
    //         title: 'Status',
    //         value: 'Active',
    //       },
    //       {
    //         title: 'Customer ID',
    //         value: 'X78976TY6546I',
    //       },
    //       {
    //         title: 'Store name',
    //         value: 'Guduvanchery',
    //       },

    //     ],
    //     contact: [

    //       {
    //         title: 'Phone number',
    //         value: '1234567890',
    //       },


    //     ],
    //     address: [
    //  {
    //         title: 'Home',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
    //       },
    //       {
    //         title: 'Office',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
    //       },
    //     ],
    //   },

    //     {
    //     customerId: 'X78976TY6546I',
    //           selected: false,
    //     cardData: {
    //       Name: 'Sam',
    //       no: '1234567890',

    //     },
    //     customerDetails: [
    //       {
    //         title: 'Customer name',
    //         value: 'Sam',
    //       },
    //       {
    //         title: 'Status',
    //         value: 'Active',
    //       },
    //       {
    //         title: 'Customer ID',
    //         value: 'X78976TY6546I',
    //       },
    //       {
    //         title: 'Store name',
    //         value: 'Guduvanchery',
    //       },

    //     ],
    //     contact: [

    //       {
    //         title: 'Phone number',
    //         value: '1234567890',
    //       },


    //     ],
    //     address: [
    //  {
    //         title: 'Home',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
    //       },
    //       {
    //         title: 'Office',
    //         value: `14/A, East coast street, South west
    //         Kotturpalayamkotai, Vikasvendra kundramma puram,
    //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
    //       },
    //     ],
    //   },


  ]


  selectedcustomer = this.customers[0];
  showdetails = false;
  showListElements = false;
  setSelectedcustomer(customer: any) {
    this.customers.forEach((customer) => {
      customer.selected = false;
    });
    customer.selected = true;
    this.selectedcustomer = customer;
  }


  onSubmit(data: any) {
    this.addNew = false;
    data = {
      name: data.name,
      selected: true,
      cardData: {
        Name: data.name,
        no: data.number,
      },
      customerDetails: [
        {
          title: 'Customer name',
          value: data.name,
        },
        { title: 'Status', value: `Active` },
        {
          title: 'Customer ID',
          value: `e_` + uuidv4(),
        },

        {
          title: 'Store name',
          value: data.storename,
        },
      ],
      contact: [
        {
          title: 'Phone number',
          value: data.number,
        },
      ],
      address: [
        {
          title: 'Home',
          value:
            data.line1 + ' ' +
            data.city + ' ' +
            data.state + ' ' +
            data.pincode,
        },
        {
          title: 'Office',
          value:

            data.line2 + ' ' +
            data.line3 + ' ' +
            data.city + ' ' +
            data.state + ' ' +
            data.pincode,
        },
      ],
    };

    console.log('new service framed', data);
    this.selectedcustomer = data;
    this.customers.push(data);
  }

  addNewService() {
    this.customers.forEach((item) => (item.selected = false));
    this.addNew = true;
  }
  cancelAddForm() {
    this.selectedcustomer = this.customers[0];
    this.selectedcustomer.selected = true;
    this.addNew = false;
  }


}
