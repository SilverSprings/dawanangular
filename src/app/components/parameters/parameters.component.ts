import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  name: string;
  lastName: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // instantanée : this.route.snapshot.paramMap

    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (params.has('name')) {
          this.name = params.get('name');
      }
    });

    // ?lastName=doe
    this.route.queryParamMap.subscribe( (queryParams: ParamMap ) => {
      // ...
      if (queryParams.has('lastName')) {
         this.lastName = queryParams.get('lastName');
         console.log(this.lastName);
      }
    });

    // #title2
    this.route.fragment.subscribe( (value: string ) => {
      // ...
    });

    // data
    this.route.data.subscribe((data: Data) => {
      console.log( data );
    });
  }

  public goBack(): void {
    this.router.navigate(['/parameters']);
  }
}
