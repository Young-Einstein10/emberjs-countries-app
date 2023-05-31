import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import query from 'ember-countries-app/gql/queries/country.graphql';

export default class CountryRoute extends Route {
  @queryManager apollo;

  queryParams = {
    action: {
      refreshModel: true,
    },
    cursor: {
      refreshModel: true,
    },
  };

  async model(params) {
    const { id, action, cursor } = params;

    if (action === 'previous') {
      const { country } = await this.fetchPrevious(parseInt(id), cursor);
      return country;
    }

    if (action === 'next') {
      const { country } = await this.fetchMore(parseInt(id), cursor);
      return country;
    }

    const variables = {
      id: parseInt(id),
      page: {
        first: 20,
        after: null,
      },
    };
    const { country } = await this.apollo.watchQuery({ query, variables });
    return country;
  }

  @action
  async fetchMore(id, next) {
    return await this.apollo.query({
      query,
      variables: {
        id,
        page: {
          first: 20,
          after: next,
        },
      },
    });
  }

  @action
  async fetchPrevious(id, prev) {
    return await this.apollo.query({
      query,
      variables: {
        id,
        page: {
          last: 20,
          before: prev,
        },
      },
    });
  }
}
