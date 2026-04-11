__d(
  "FallbackTreeResourcesDelegate",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e, t, n) {
        ((this.$1 = e), (this.$2 = t), (this.$3 = n));
      }
      var t = e.prototype;
      return (
        (t.$4 = function () {
          var e;
          return (e = this.$2) != null
            ? e
            : this.$1.getCommittedTreeResources();
        }),
        (t.$5 = function () {
          var e;
          return (e = this.$3) != null ? e : this.$1.getExpandedVariables();
        }),
        (t.getVariable = function (t) {
          return this.$4().variables.get(t);
        }),
        (t.containsVariable = function (t) {
          return this.$4().variables.has(t);
        }),
        (t.getVariablesUnsafe = function () {
          return this.$4().variables;
        }),
        (t.getExpandedVariable = function (t) {
          return this.$5().get(t);
        }),
        (t.getExpandedVariablesUnsafe = function () {
          return this.$5();
        }),
        (t.getManifestEntry = function (t) {
          return this.$4().variableDefinitions.get(t);
        }),
        (t.getParameter = function (t) {
          return this.$4().parameters[t];
        }),
        (t.getValue = function (t) {
          return this.$4().values.get(t);
        }),
        (t.getPayload = function (t) {
          return this.$4().payloads.get(t);
        }),
        (t.getTemplate = function (t) {
          return this.$4().templates.get(t);
        }),
        (t.getFunction = function (t) {
          return this.$4().functionTable.get(t);
        }),
        (t.getTreeResourcesState = function () {
          return this.$4();
        }),
        e
      );
    })();
    i.FallbackTreeResourcesDelegate = e;
  },
  66,
);
