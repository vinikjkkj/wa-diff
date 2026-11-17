__d(
  "WebBloksTreePendingUpdates",
  [],
  function (t, n, r, o, a, i) {
    var e = [],
      l = (function () {
        function t() {
          ((this.root = null), (this.$1 = []));
        }
        var n = t.prototype;
        return (
          (n.enqueueMutation = function (t) {
            var e;
            ((this.$2 = (e = this.$2) != null ? e : []), this.$2.push(t));
          }),
          (n.enqueueResource = function (t) {
            var e;
            ((this.$3 = (e = this.$3) != null ? e : []), this.$3.push(t));
          }),
          (n.pendingMutations = function () {
            var t;
            return (t = this.$2) != null ? t : e;
          }),
          (n.pendingResources = function () {
            var t;
            return (t = this.$3) != null ? t : e;
          }),
          (n.enqueueWrite = function (t, n) {
            var e = [t, n];
            this.$1.push(function () {
              return e;
            });
          }),
          (n.enqueueOperation = function (t) {
            this.$1.push(t);
          }),
          (n.hasPendingWrites = function () {
            return this.$1.length > 0;
          }),
          (n.hasRenderUpdates = function () {
            var e, t, n, r;
            return (
              this.hasPendingWrites() ||
              ((e = (t = this.$2) == null ? void 0 : t.length) != null
                ? e
                : 0) > 0 ||
              ((n = (r = this.$3) == null ? void 0 : r.length) != null
                ? n
                : 0) > 0 ||
              this.root != null
            );
          }),
          (n.takeWrites = function (t, n) {
            var e = this.$1;
            this.$1 = [];
            var r = new Map();
            for (var o of e) {
              var a = o(t, n, r);
              a != null && r.set(a[0], a[1]);
            }
            return r;
          }),
          (n.reset = function () {
            ((this.$1 = []),
              (this.$2 = null),
              (this.$3 = null),
              (this.root = null));
          }),
          t
        );
      })(),
      s = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.enqueueWrite = function (t, n) {
            this.$1.set(t, n);
          }),
          (t.hasPendingWrites = function () {
            return this.$1.size > 0;
          }),
          (t.takePendingWrites = function () {
            var e = this.$1;
            return ((this.$1 = new Map()), e);
          }),
          e
        );
      })();
    ((i.WebBloksTreePendingUpdates = l), (i.WebBloksLegacyPendingUpdates = s));
  },
  66,
);
