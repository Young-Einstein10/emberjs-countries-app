import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CountriesComponent extends Component {
  @service router;

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
