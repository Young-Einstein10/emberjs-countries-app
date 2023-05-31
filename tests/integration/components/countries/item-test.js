import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-countries-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | countries/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders <Countries::Item />', async function (assert) {
    this.setProperties({
      country: {
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
    });

    await render(hbs`<Countries::Item @country={{this.country}} />`);

    assert.dom('[data-test-country-item]').exists();
    assert.dom('[data-test-country-item-id]').containsText('Afghanistan');
    assert.dom('[data-test-country-item-capital]').containsText('Kabul');
    assert.dom('[data-test-country-item-currency]').containsText('AFN');
    assert.dom('[data-test-country-item-region]').containsText('Asia');
    assert
      .dom('[data-test-country-item-subregion]')
      .containsText('Southern Asia');
    assert.dom('[data-test-country-item-emoji]').containsText('🇦🇫');
  });
});
