import { Component } from '@angular/core';

@Component({
    selector: 'music-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.scss']
})

export class AlbumList{
    songs = [{
        "name":"Song Name",
        "details":"Song Details",
        "imageUrl":"",
        "duration":"4:53"
    },
    {
        "name":"Song Name",
        "details":"Song Details",
        "imageUrl":"",
        "duration":"4:53"
    },
    {
        "name":"Song Name",
        "details":"Song Details",
        "imageUrl":"",
        "duration":"4:53"
    },
    {
        "name":"Song Name",
        "details":"Song Details",
        "imageUrl":"",
        "duration":"4:53"
    },
    {
        "name":"Song Name",
        "details":"Song Details",
        "imageUrl":"",
        "duration":"4:53"
    }];
}
