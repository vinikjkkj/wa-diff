__d(
  "BindTreeResources",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.getVariable = function (t) {
          return this.$1.variables.get(t);
        }),
        (t.containsVariable = function (t) {
          return this.$1.variables.has(t);
        }),
        (t.getVariablesUnsafe = function () {
          return this.$1.variables;
        }),
        (t.getExpandedVariable = function (t) {
          return this.$2.get(t);
        }),
        (t.getExpandedVariablesUnsafe = function () {
          return this.$2;
        }),
        (t.getManifestEntry = function (t) {
          return this.$1.variableDefinitions.get(t);
        }),
        (t.getParameter = function (t) {
          return this.$1.parameters[t];
        }),
        (t.getValue = function (t) {
          return this.$1.values.get(t);
        }),
        (t.getPayload = function (t) {
          return this.$1.payloads.get(t);
        }),
        (t.getTemplate = function (t) {
          return this.$1.templates.get(t);
        }),
        (t.getFunction = function (t) {
          return this.$1.functionTable.get(t);
        }),
        (t.getTreeResourcesState = function () {
          return this.$1;
        }),
        e
      );
    })();
    i.BindTreeResources = e;
  },
  66,
);
