import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: { num: number }[] = [
    { num: 1 },
    { num: 2 },
    { num: 3 }
  ]

  get Sum() {
    return this.counters.reduce(
      (result, current) => result + current.num, 0);
  }
  onAddCounter() {
    this.counters.push({ num: 0 });
  }
  onRemoveCounter(index: number) {
    this.counters.splice(index, 1);
  }
  onResetAll() {
    this.counters.forEach(_ => _.num = 0);
  }
}
