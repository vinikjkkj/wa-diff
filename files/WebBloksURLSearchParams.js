__d(
  "WebBloksURLSearchParams",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.params = new Map()),
          e != null &&
            e
              .slice(1)
              .split("&")
              .forEach(function (e) {
                var n = e.split("="),
                  r = n[0],
                  o = n[1],
                  a = decodeURIComponent(r);
                t.params.set(a, decodeURIComponent(o));
              }));
      }
      var t = e.prototype;
      return (
        (t.append = function (t, n) {
          this.params.set(t, n);
        }),
        (t.delete = function (t) {
          this.params.delete(t);
        }),
        (t.get = function (t) {
          return this.params.get(t) || null;
        }),
        (t.set = function (t, n) {
          this.params.set(t, n);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
