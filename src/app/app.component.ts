import { Component } from '@angular/core';

// 3rd-Party Services
import { OAuthService } from 'angular2-oauth2/oauth-service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private oauthService: OAuthService) { 
            // Login-Url
        this.oauthService.loginUrl = "http://localhost:5000/connect/authorize"; //Id-Provider?
        
        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = "http://localhost:5050";
        
        // The SPA's id. Register SPA with this id at the auth-server
        this.oauthService.clientId = "travelmanager";
        
        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.issuer = "http://localhost:5000";
 
        // set the scope for the permissions the client should request
        this.oauthService.scope = "openid profile identityprovider offline_access holidayapi";
        
        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;
        
        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);
        
        // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
        this.oauthService.logoutUrl = "http://localhost:5000/connect/endsession?id_token_hint={{id_token}}&post_logout_redirect_uri=http://localhost:5050";
        
        // This method just tries to parse the token within the url when
        // the auth-server redirects the user back to the web-app
        // It dosn't initiate the login
        this.oauthService.tryLogin({});
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  isLoggedIn(): boolean {
    let accessToken = this.oauthService.getAccessToken();
    let idToken = this.oauthService.getIdToken();
    let isLoggedIn = idToken && accessToken;

    return isLoggedIn;
  }
}
