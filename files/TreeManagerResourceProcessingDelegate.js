__d(
  "TreeManagerResourceProcessingDelegate",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        ((this.processedResourceIds = new Set()), (this.config = e));
      }
      var t = e.prototype;
      return (
        (t.collectTreeResource = function (t, n) {
          this.processedResourceIds.has(n) ||
            (this.processedResourceIds.add(n),
            this.config.onCollectTreeResource != null &&
              this.config.onCollectTreeResource(t, n));
        }),
        (t.isResourceProcessed = function (t) {
          return this.processedResourceIds.has(t);
        }),
        (t.collectVariable = function (t, n, r, o) {
          var e = r.commitToStore(t, this.config.observer);
          this.config.onCollectVariable(t, n, r.initialValue, e);
        }),
        (t.containsVariable = function (t) {
          return this.config.containsVariable(t);
        }),
        (t.addExpandedVariable = function (t, n) {
          this.config.onAddExpandedVariable != null &&
            this.config.onAddExpandedVariable(t, n);
        }),
        e
      );
    })();
    i.TreeManagerResourceProcessingDelegate = e;
  },
  66,
);
