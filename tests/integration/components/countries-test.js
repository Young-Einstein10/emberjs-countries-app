import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-countries-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | countries', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the list of countries', async function (assert) {
    this.setProperties({
      countries: {
        totalCount: 20,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: true,
          startCursor: 'eyJjdXJzb3IiOjF9',
          endCursor: 'eyJjdXJzb3IiOjIwfQ==',
        },
        edges: [
          {
            cursor: 'eyJjdXJzb3IiOjF9',
            node: {
              id: 1,
              name: 'Afghanistan',
              currency: 'AFN',
              currency_symbol: '؋',
              capital: 'Kabul',
              region: 'Asia',
              subregion: 'Southern Asia',
              emoji: '🇦🇫',
              iso2: 'AF',
              iso3: 'AFG',
              numeric_code: '004',
            },
          },
          {
            cursor: 'eyJjdXJzb3IiOjJ9',
            node: {
              id: 2,
              name: 'Aland Islands',
              currency: 'EUR',
              currency_symbol: '€',
              capital: 'Mariehamn',
              region: 'Europe',
              subregion: 'Northern Europe',
              emoji: '🇦🇽',
              iso2: 'AX',
              iso3: 'ALA',
              numeric_code: '248',
            },
          },
          {
            cursor: 'eyJjdXJzb3IiOjN9',
            node: {
              id: 3,
              name: 'Albania',
              currency: 'ALL',
              currency_symbol: 'Lek',
              capital: 'Tirana',
              region: 'Europe',
              subregion: 'Southern Europe',
              emoji: '🇦🇱',
              iso2: 'AL',
              iso3: 'ALB',
              numeric_code: '008',
            },
          },
          {
            cursor: 'eyJjdXJzb3IiOjIwfQ==',
            node: {
              id: 20,
              name: 'Barbados',
              currency: 'BBD',
              currency_symbol: 'Bds$',
              capital: 'Bridgetown',
              region: 'Americas',
              subregion: 'Caribbean',
              emoji: '🇧🇧',
              iso2: 'BB',
              iso3: 'BRB',
              numeric_code: '052',
            },
          },
        ],
      },
    });

    await render(hbs`<Countries @countries={{this.countries}} />`);

    assert.dom('[data-test-countries]').exists();
    assert.dom('[data-test-countries] tbody').exists();
  });
});
