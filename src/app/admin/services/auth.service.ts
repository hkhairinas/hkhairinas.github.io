import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  public async create(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return await this.firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  public async login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return await this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  public async logout(): Promise<void> {
    return await this.firebaseAuth.signOut();
  }
}
