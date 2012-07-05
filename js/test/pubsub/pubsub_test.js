/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */


module('SOFW Categories Expander Basics', {
    setup: function() {
        var $ul = $('#qunit-fixture').find('.sofw-producttype-categories');
        $ul.sofw_categoriesexpander();
        this.$kiddies = $ul.children();
        this.$morekiddies = $('.sofw-moreitems').find('ul').children();
    }
});

test( "if plugin exists", function() {
    ok( $.fn.sofw_categoriesexpander, "The plugin exists" );
});

test("reduces items correctly", function() {
    strictEqual( this.$kiddies.length, 9, "Should be only 9 items." );
});

test("rest of the items correct amount", function() {
    strictEqual( this.$morekiddies.length, 11, "Should be only 11 items." );
});

test("changing of link text", function() {
    strictEqual( $('.sofw-toggleItemsLink').trigger('click').text(), 'Weniger Kategorien', "Should say 'Weniger Kategorien'" );
});



  /*
  module('jQuery#awesome', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', 1, function() {
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.awesome(), this.elems, 'should be chaninable');
  });

  test('is awesome', 1, function() {
    strictEqual(this.elems.awesome().text(), 'awesomeawesomeawesome', 'should be thoroughly awesome');
  });

  module('jQuery.awesome');

  test('is awesome', 1, function() {
    strictEqual($.awesome(), 'awesome', 'should be thoroughly awesome');
  });

  module(':awesome selector', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', 1, function() {
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':awesome').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });
*/

}(jQuery));
