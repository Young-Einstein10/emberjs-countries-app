import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class StatesComponent extends Component {
  @service router;

  @action plusOne(number = 0) {
    return number + 1;
  }

  @action
  handlePrevious(page) {
    if (page.hasPreviousPage) {
      this.router.transitionTo({
        queryParams: {
          action: 'previous',
          cursor: page.startCursor,
        },
      });
    }
  }

  @action
  handleNext(page) {
    if (page.hasNextPage) {
      this.router.transitionTo({
        queryParams: {
          action: 'next',
          cursor: page.endCursor,
        },
      });
    }
  }
}
