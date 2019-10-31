import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postName: string;
  @Input() postContenu: string;
  @Input() postNote: number;

  constructor() { }

  lastUpdate = new Date();

  getNote() {
    return this.postNote;
  }

  getColor() {
    if (this.postNote >= 5) {
      return "green";
    } else if (this.postNote < 5) {
      return "red";
    }
  }

  ngOnInit() {
  }

  onLike() {
    this.postNote++;
  };

  onUnlike() {
    this.postNote--;
  };

}
