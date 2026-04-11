__d(
  "XController",
  ["XControllerURIBuilder", "XRequest"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.getURIBuilder = function (t) {
          var e = this,
            n = new (r("XControllerURIBuilder"))(this.$1, this.$2);
          if (t) {
            var o = this.getRequest(t);
            Object.keys(this.$2).forEach(function (t) {
              var r = e.$2[t],
                a = "";
              !r.required &&
                !Object.prototype.hasOwnProperty.call(r, "defaultValue") &&
                (a = "Optional");
              var i = "get" + a + r.type,
                l = o[i](t);
              if (
                !(
                  l == null ||
                  (Object.prototype.hasOwnProperty.call(r, "defaultValue") &&
                    l === r.defaultValue)
                )
              ) {
                var s = "set" + r.type;
                n[s](t, l);
              }
            });
          }
          return n;
        }),
        (t.getRequest = function (t) {
          return new (r("XRequest"))(this.$1, this.$2, t);
        }),
        (e.create = function (n, r) {
          return new e(n, r);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
