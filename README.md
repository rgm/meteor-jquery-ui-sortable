meteor-jquery-ui-sortable
=========================

jQueryUI's sortable interaction, minus theming CSS and packaged for Meteor. Extracted from jQueryUI 1.10.3 and relies on jQuery 1.9.1.

All rights to jqueryui-sortable are with the original author. See http://jqueryui.com/sortable/

## Installation

Install via atmosphere.

## Example

    Template.myTemplate.rendered = function() {
      var opts = {}; // something more here, obviously
      $('tbody').sortable(opts);
    }
