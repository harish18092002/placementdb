import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
// import { alldetails } from './service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  selectedids: string[];
  filteredid!: any;
  data: any;

  constructor(private router: Router, private route: ActivatedRoute, private afs: AngularFirestore) {



    // this is for the imported data from home 

    this.selectedids = this.route.snapshot.queryParamMap.get('id')?.split(',') ?? [];

    console.log("This is the id came from home component", this.selectedids)
    this.filteredid = this.users.filter(obj => this.selectedids.includes(obj.cardData.id));

    console.log("This is the filtered id in details component", this.filteredid)
  };
  addNew = false;



  // this the db for students
  users = [
    {
      selected: true,
      cardData: {
        id: "1",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'ABC',
        },
        {
          title: 'Package',
          value: '2000',
        },
        {
          title: 'Location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: false,
      cardData: {
        id: "2",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'ABC',
        },
        {
          title: 'Package',
          value: '7000',
        },
        {
          title: 'Location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: false,
      cardData: {
        id: "3",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'ABC',
        },
        {
          title: 'Package',
          value: '8000',
        },
        {
          title: 'Location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: false,
      cardData: {
        id: "4",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'ABC',
        },
        {
          title: 'Package',
          value: '9000',
        },
        {
          title: 'Location',
          value: 'T.nagar'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: false,
      cardData: {
        id: "5",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'xyz',
        },
        {
          title: 'Package',
          value: '10000',
        },
        {
          title: 'Location',
          value: 'Ooty'
        }


      ]
    },

  ];




  selectedstudent = this.filteredid;
  showdetails = false;
  showListElements = false;
  setSelectedstudent(user: any) {
    this.users.forEach((user) => {
      user.selected = false;
    });
    user.selected = true;
    this.selectedstudent = user;
  }


  onSubmit(data: any) {
    this.addNew = false;
    data = {

      selected: false,
      cardData: {
        id: data.id,
      },
      studentdetails: [
        {
          title: 'Company',
          value: data.company,
        },
        {
          title: 'Package',
          value: data.package,
        },
        {
          title: 'Loction',
          value: data.location
        },

      ],

    };

    console.log('new service framed', data);
    this.selectedstudent = data;
    this.filteredid.push(data);
    console.log("This is the updated users" + this.users)


    this.afs.collection('newstudents').add(data);

    console.log("Thse are the new students added to db", data)

  }

  addNewService() {
    this.users.forEach((item) => (item.selected = false));
    this.addNew = true;
  }
  cancelAddForm() {
    this.selectedstudent = this.users[0];
    this.selectedstudent.selected = true;
    this.addNew = false;
  }
  create() {



  }

  // below code is for the get data functions 

  // async get() {
  //   // this.afs
  //   //   .collection("users")

  //   //   .doc(this.data)
  //   //   .get();

  //   const citiesRef = this.afs.collection('cities');
  //   const snapshot = await citiesRef.get();
  //   snapshot.forEach(doc => {
  //     console.log('=>', doc);
  //   });

  //   //  const stores$ = this.afs
  //   //             .collection<IStore>('stores')
  //   //             .doc(booking.storeId)
  //   //             .get();
  //   //           booking.store = await (await lastValueFrom(stores$)).data();

  //   console.log("This is the data from firestore", this.data)

  // }

  // retrieveTutorials(): void {
  //   this.afs.getAll().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ id: c.payload.doc.id, ...c.payload.doc.data() })
  //       )
  //     )
  //   ).subscribe(data => {
  //     this.tutorials = data;
  //   });
  // }

}

