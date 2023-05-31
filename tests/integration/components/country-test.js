import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-countries-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | country', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders country page', async function (assert) {
    this.setProperties({
      country: {
        id: 4,
        name: 'Algeria',
        capital: 'Algiers',
        currency: 'DZD',
        currency_symbol: 'دج',
        phone_code: '213',
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
          ],
        },
      },
    });

    await render(hbs`<Country @country={{this.country}} />`);

    assert.dom('[data-test-country-page]').exists();
  });
});
