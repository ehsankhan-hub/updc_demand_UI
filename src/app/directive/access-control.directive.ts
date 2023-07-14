import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Directive({
  selector: '[accessControl]'
})
export class AccessControlDirective implements OnInit{
  @Input("moduleType") moduleType!: string ;
  @Input("accessType") accessType!: string;
  constructor(private elementRef: ElementRef, private auth: AuthService) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.display = "none";
    this.checkAccess();
  }
   checkAccess() {
    const accessControls: any = this.auth.getUserAccess();
    console.log('accessControls'+accessControls)
    const module: any = accessControls.find((access: { module_name: string; }) => access.module_name === this.moduleType);
    this.elementRef.nativeElement.style.display = module[this.accessType] ? "block" : "none";
  }

}
