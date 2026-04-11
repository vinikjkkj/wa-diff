__d(
  "WebBloksCallback",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e), (this.$2 = t), (this.$4 = n), (this.$3 = r));
      }
      var t = e.prototype;
      return (
        (t.invoke = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          if (this.$3 != null) return this.$3.apply(this, n);
          var a = this.$2;
          if (a != null) {
            if (this.$1 != null) return a.apply(void 0, [this.$1].concat(n));
            if (this.$4 != null && t != null) {
              var i = t.createBloksModelScopedContext(this.$4);
              return a.apply(void 0, [i].concat(n));
            }
          }
          throw new (o("WebBloksErrors").WebBloksError)(
            "WebBloksCallback: An attempt to invoke an invalid callback.",
          );
        }),
        e
      );
    })();
    l.WebBloksCallback = e;
  },
  98,
);
