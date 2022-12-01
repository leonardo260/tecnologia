import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Product } from './domain/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsCollection: AngularFirestoreCollection<Product>;
  
  product:any;

  constructor(private afs: AngularFirestore,private readonly firestore: Firestore) { 
    this.productsCollection = afs.collection<Product>('productos');
  }
  getProductsFire() {
    return this.productsCollection.valueChanges();
  }
}
