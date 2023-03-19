import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Julian';
  age = 32;
  img = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Black&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Pale';
  btnDisabled = true;
  person = {
    name: 'Julian',
    age: 32,
    avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Black&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Pale'
  };
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
}
