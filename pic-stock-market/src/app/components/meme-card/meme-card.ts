import { Component, Input, Output, EventEmitter, input} from '@angular/core';
import { Meme } from '../../models/meme';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent} from '@angular/material/card';
import { CurrencyPipe, NgClass } from '@angular/common';


@Component({
  selector: 'app-meme-card',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, CurrencyPipe, NgClass, MatCardContent],
  templateUrl: './meme-card.html',
  styleUrl: './meme-card.css'
})
export class MemeCard {
  @Input() meme!: Meme;
  @Output() memeSelected = new EventEmitter<Meme>();

  selectMeme() {
    this.memeSelected.emit(this.meme)
  }

}
