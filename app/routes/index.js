import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import query from 'ember-countries-app/gql/queries/countries.graphql';

export default class IndexRoute extends Route {
  @queryManager apollo;

  queryParams = {
    action: {
      refreshModel: true,
    },
    cursor: {
      refreshModel: true,
    },
  };

  async model({ action, cursor }) {
    if (action === 'previous') {
      const { countries } = await this.fetchPrevious(cursor);
      return countries;
    }

    if (action === 'next') {
      const { countries } = await this.fetchMore(cursor);
      return countries;
    }

    const variables = {
      page: {
        first: 20,
        after: null,
      },
    };
    const { countries } = await this.apollo.watchQuery({ query, variables });
    return countries;
  }

  @action
  async fetchMore(next) {
    return await this.apollo.query({
      query,
      variables: {
        page: {
          first: 20,
          after: next,
        },
      },
    });
  }

  @action
  async fetchPrevious(prev) {
    return await this.apollo.query({
      query,
      variables: {
        page: {
          last: 20,
          before: prev,
        },
      },
    });
  }
}
