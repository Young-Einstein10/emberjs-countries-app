import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-countries-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | states/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders <States::Item />', async function (assert) {
    this.setProperties({
      state: {
        node: {
          id: 81,
          name: 'Adrar',
          state_code: '01',
          latitude: 26.418131,
          longitude: -0.6014717,
        },
      },
    });

    await render(hbs`<States::Item @index={{1}} @state={{this.state}} />`);

    assert.dom('[data-test-state-item]').exists();
    assert.dom('[data-test-state-sn]').containsText('1');
    assert.dom('[data-test-state-name]').containsText('Adrar');
    assert.dom('[data-test-state-state_code]').containsText('01');
    assert.dom('[data-test-state-lat]').containsText('26.418131');
    assert.dom('[data-test-state-lon]').containsText('-0.6014717');
  });
});
