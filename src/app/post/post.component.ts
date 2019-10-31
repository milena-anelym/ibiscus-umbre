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

  constructor() {}

  lastUpdate = new Date();

  getLike() {
    return this.like;
  }

  getUnlike() {
    return this.unlike;
  }

  getColor() {
    if (this.like > this.unlike) {
      return "green";
    } else if (this.unlike > this.like) {
      return "red";
    } else if (this.unlike === this.like) {
      return "Black";
    }
  }

  ngOnInit() {
  }

  like = 0;
  unlike = 0;

  onLike() {
    this.like++;
  };

  onUnlike() {
    this.unlike++;
  };

}
