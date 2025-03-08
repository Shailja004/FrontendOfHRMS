import { Type } from "@angular/core"
import { ActivatedRouteSnapshot, Data, ParamMap, Params, Route, UrlSegment } from "@angular/router"
import { Observable } from "rxjs"

export class ActivatedRoute {
    snapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot
    title!: Observable<string | undefined>
    url!: Observable<UrlSegment[]>
    params!: Observable<Params>
    queryParams!: Observable<Params>
    fragment!: Observable<string | null>
    data!: Observable<Data>
    outlet!: string
    component!: Type<any> | null
    routeConfig!: Route | null
    root: ActivatedRoute = new ActivatedRoute
    parent: ActivatedRoute | null = new ActivatedRoute
    firstChild: ActivatedRoute | null = new ActivatedRoute
    children: ActivatedRoute[] = []
    pathFromRoot: ActivatedRoute[] = []
    paramMap!: Observable<ParamMap>
    queryParamMap!: Observable<ParamMap>
  }