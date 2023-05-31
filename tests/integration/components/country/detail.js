import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-countries-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | country/detail', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders <Country::Detail />', async function (assert) {
    this.setProperties({
      country: {
        id: 4,
        name: 'Algeria',
        capital: 'Algiers',
        currency: 'DZD',
        currency_symbol: 'دج',
        phone_code: '213',
      },
    });

    await render(hbs`<Country::Detail @country={{this.country}} />`);

    assert.dom('[data-test-country-detail]').exists();
    assert.dom('[data-test-country-name]').containsText('Algeria');
    assert.dom('[data-test-country-capital]').containsText('Algiers');
    assert.dom('[data-test-country-currency]').containsText('DZD');
    assert.dom('[data-test-country-currency-symbol]').containsText('دج');
    assert.dom('[data-test-country-phone-code]').containsText('213');
  });
});
