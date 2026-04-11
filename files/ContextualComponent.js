__d(
  "ContextualComponent",
  ["Parent"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = e.element,
          n = e.isRoot,
          r = e.parent;
        ((this.$2 = n),
          (this.$3 = t),
          (this.$4 = r),
          (this.$5 = new Set()),
          (this.$6 = []),
          (this.$7 = []),
          this.$8());
      }
      ((e.forNode = function (n) {
        return e.$1.get(n) || null;
      }),
        (e.closestToNode = function (n) {
          var t = o("Parent").find(n, function (t) {
            return !!e.forNode(t);
          });
          return t ? e.forNode(t) : null;
        }),
        (e.register = function (n) {
          return new e(n);
        }));
      var t = e.prototype;
      return (
        (t.onCleanup = function (t) {
          this.$6.push(t);
        }),
        (t.onUnmount = function (t) {
          this.$7.push(t);
        }),
        (t.cleanup = function () {
          (this.$5.forEach(function (e) {
            return e.cleanup();
          }),
            this.$6.forEach(function (e) {
              return e();
            }),
            (this.$6 = []));
        }),
        (t.unmount = function () {
          (this.cleanup(),
            this.$5.forEach(function (e) {
              return e.unmount();
            }),
            this.$7.forEach(function (e) {
              return e();
            }),
            (this.$7 = []));
          var t = this.$4;
          t && (e.$1.delete(this.$3), t.$9(this));
        }),
        (t.reinitialize = function () {
          var t = this.$4;
          (t && (t.$9(this), (this.$4 = void 0)),
            e.$1.delete(this.$3),
            this.$8());
        }),
        (t.$8 = function () {
          if (!this.$2 && !this.$4) {
            var t = e.closestToNode(this.$3);
            t && (this.$4 = t);
          }
          (this.$4 && this.$4.$10(this), e.$1.set(this.$3, this));
        }),
        (t.$10 = function (t) {
          this.$5.add(t);
        }),
        (t.$9 = function (t) {
          this.$5.delete(t);
        }),
        e
      );
    })();
    ((e.$1 = new Map()), (l.default = e));
  },
  98,
);
