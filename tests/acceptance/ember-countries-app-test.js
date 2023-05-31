import { module, test } from 'qunit';
import {
  click,
  visit,
  currentURL,
  currentRouteName,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-countries-app/tests/helpers';

module('Acceptance | ember countries app', function (hooks) {
  setupApplicationTest(hooks);

  test('view countries: visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('[data-test-title]').hasText('Countries List');
    assert.dom('[data-test-countries]').exists();
    // assert.dom('[data-test-countries] tbody').

    assert.dom('[data-test-pagination]').exists();
    assert
      .dom('button[data-test-prev-btn]')
      .exists()
      .hasText('Previous')
      .hasAttribute('disabled');
    assert.dom('button[data-test-next-btn]').exists().hasText('Next');

    await click('button[data-test-next-btn]');
    assert.dom('button[data-test-prev-btn]').doesNotHaveAttribute('disabled');
  });

  test('view country details: visiting /countries/:id', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('[data-test-countries]').exists();

    assert.dom('[data-test-country-item-id]').exists();
    await click('[data-test-country-item-id]');

    assert.strictEqual(currentRouteName(), 'country');

    assert.dom('[data-test-header]').exists().containsText('Country Details');
    assert.dom('[data-test-country-detail]').exists();
    assert.dom('[data-test-country-states]').exists();

    assert.dom('[data-test-pagination]').exists();
    assert
      .dom('button[data-test-prev-btn]')
      .exists()
      .hasText('Previous')
      .hasAttribute('disabled');
    assert.dom('button[data-test-next-btn]').exists().hasText('Next');

    await click('button[data-test-next-btn]');
    assert.dom('button[data-test-prev-btn]').doesNotHaveAttribute('disabled');

    assert.dom('[data-test-go-back]').exists();
    await click('[data-test-go-back]');
    // assert.strictEqual(currentRouteName(), 'countries');
  });
});
