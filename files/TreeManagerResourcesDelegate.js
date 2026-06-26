__d(
  "TreeManagerResourcesDelegate",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getVariable = function (t) {
          return this.$1.getCommittedTreeResources().variables.get(t);
        }),
        (t.containsVariable = function (t) {
          return this.$1.getCommittedTreeResources().variables.has(t);
        }),
        (t.getVariablesUnsafe = function () {
          return this.$1.getCommittedTreeResources().variables;
        }),
        (t.getExpandedVariable = function (t) {
          return this.$1.getExpandedVariables().get(t);
        }),
        (t.getExpandedVariablesUnsafe = function () {
          return this.$1.getExpandedVariables();
        }),
        (t.getManifestEntry = function (t) {
          return this.$1.getCommittedTreeResources().variableDefinitions.get(t);
        }),
        (t.getParameter = function (t) {
          return this.$1.getCommittedTreeResources().parameters[t];
        }),
        (t.getValue = function (t) {
          return this.$1.getCommittedTreeResources().values.get(t);
        }),
        (t.getPayload = function (t) {
          return this.$1.getCommittedTreeResources().payloads.get(t);
        }),
        (t.getTemplate = function (t) {
          return this.$1.getCommittedTreeResources().templates.get(t);
        }),
        (t.getFunction = function (t) {
          return this.$1.getCommittedTreeResources().functionTable.get(t);
        }),
        (t.getTreeResourcesState = function () {
          return this.$1.getCommittedTreeResources();
        }),
        e
      );
    })();
    i.TreeManagerResourcesDelegate = e;
  },
  66,
);
