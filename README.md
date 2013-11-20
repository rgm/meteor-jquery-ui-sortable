meteor-jquery-ui-sortable
=========================

[Sortable](http://jqueryui.com/sortable) is a jQuery UI behaviour for
interactively drag-reordering table rows. This is from jQueryUI 1.10.3.

## Why separate?

We ran into some trouble using the [simple port of
jQueryUI](https://github.com/TimHeckel/meteor-jquery-ui) because of the [known
CSS conflicts with
Bootstrap](https://github.com/TimHeckel/meteor-jquery-ui-bootstrap). Rather
than add another package to solve the problem of two packages fighting, we
custom-packaged only the behavioural part of jQueryUI we needed and sidestepped
the jQueryUI theming entirely.

## How to install
1. `npm install -g meteorite` (if not already installed)
2. `mrt add jqueryui-sortable`
3. For the simplest invocation, have a `<table>` with a multiple-row `<tbody>` in a template, and call `$('tbody').sortable()` in its `.rendered()` event.

## Documentation

http://api.jqueryui.com/sortable/


