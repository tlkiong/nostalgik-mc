import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RulesComponent } from './rules/rules.component';
import { RulesRoutingModule } from './rules-routing.module';

@NgModule({
  declarations: [RulesComponent],
  imports: [CommonModule, RulesRoutingModule],
})
export class RulesModule {}
