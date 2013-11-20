Package.describe({
  summary: "Reorder elements in a list or grid using the mouse"
});

Package.on_use(function(api) {
  api.use('jquery', 'client');
  api.add_files(['jquery-ui-sortable.js', 'jquery-ui-sortable.css'], 'client');
});
