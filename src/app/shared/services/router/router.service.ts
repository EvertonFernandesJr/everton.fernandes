import { inject, Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class RouterService {
  private router = inject(Router);

  private titleService = inject(Title);

  private activatedRoute = inject(ActivatedRoute);

  public activatedRoute$!: Observable<Data>;

  public routerEvents$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    tap(() => this.activatedRouterChangeHandler())
  );

  public activatedRouterChangeHandler(): void {
    this.activatedRoute$ = this.getChild(this.activatedRoute).data.pipe(
      tap(data => {
        this.titleService.setTitle(data['title']);
      })
    );
  }

  public getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
