__d(
  "BindResourceProcessingDelegate",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        ((this.$2 = []),
          (this.$3 = new Map()),
          (this.$4 = new Map()),
          (this.$5 = new Set()),
          (this.$6 = new Set()),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.collectTreeResource = function (t, n) {
          var e, r;
          ((e = (r = this.$1).isResourceProcessed) != null && e.call(r, n)) ||
            this.$5.has(n) ||
            (this.$5.add(n), this.$4.set(n, t));
        }),
        (t.isResourceProcessed = function (t) {
          var e, n, r;
          return this.$5.has(t)
            ? !0
            : (e =
                  (n = (r = this.$1).isResourceProcessed) == null
                    ? void 0
                    : n.call(r, t)) != null
              ? e
              : !1;
        }),
        (t.collectVariable = function (t, n, r, o) {
          (this.$2.push({
            variableId: t,
            manifestEntry: n,
            initialData: r,
            snapshot: o,
          }),
            this.$6.add(t));
        }),
        (t.containsVariable = function (t) {
          return this.$6.has(t) ? !0 : this.$1.containsVariable(t);
        }),
        (t.addExpandedVariable = function (t, n) {
          this.$3.set(t, n);
        }),
        (t.commitAll = function (t, n) {
          var e = [];
          for (var r of this.$2) {
            var o = r.initialData.commitToStore(r.variableId, t);
            (o != null && e.push(o),
              n(r.variableId, r.manifestEntry, r.initialData.initialValue, o));
          }
          return {
            expandedVariables: this.$3,
            cancelTokens: e,
            collectedTreeResources: this.$4,
          };
        }),
        (t.getExpandedVariables = function () {
          return this.$3;
        }),
        (t.getCollectedTreeResources = function () {
          return this.$4;
        }),
        (t.getCollectedVariableCount = function () {
          return this.$2.length;
        }),
        (t.hasExpandedVariable = function (t) {
          return this.$3.has(t);
        }),
        (t.getExpandedVariable = function (t) {
          return this.$3.get(t);
        }),
        e
      );
    })();
    i.BindResourceProcessingDelegate = e;
  },
  66,
);
