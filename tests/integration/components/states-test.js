import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-countries-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | states', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the list of states', async function (assert) {
    this.setProperties({
      states: {
        totalCount: 20,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: true,
          startCursor: 'eyJjdXJzb3IiOjgxfQ==',
          endCursor: 'eyJjdXJzb3IiOjEwMH0=',
        },
        edges: [
          {
            node: {
              id: 81,
              name: 'Adrar',
              state_code: '01',
              latitude: 26.418131,
              longitude: -0.6014717,
            },
          },
          {
            node: {
              id: 82,
              name: 'Aïn Defla',
              state_code: '44',
              latitude: 36.2509429,
              longitude: 1.9393815,
            },
          },
          {
            node: {
              id: 83,
              name: 'Aïn Témouchent',
              state_code: '46',
              latitude: 35.2992698,
              longitude: -1.1392792,
            },
          },
          {
            node: {
              id: 84,
              name: 'Algiers',
              state_code: '16',
              latitude: 36.6997294,
              longitude: 3.0576199,
            },
          },
          {
            node: {
              id: 85,
              name: 'Annaba',
              state_code: '23',
              latitude: 36.8020508,
              longitude: 7.5247243,
            },
          },
        ],
      },
    });

    await render(hbs`<States @states={{this.states}} />`);

    assert.dom('[data-test-country-states]').exists();
    assert.dom('[data-test-country-states] tbody').exists();
  });
});
