__d(
  "WebBloksLogger",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.warn = function (t) {
          for (
            var e,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          (e = console).warn.apply(e, ["[wbloks] " + t].concat(r));
        }),
        (t.mustfix = function (t) {
          for (
            var e,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          (e = console).error.apply(e, ["[wbloks] " + t].concat(r));
        }),
        (t.scriptError = function (t) {
          this.mustfix(t.message, t);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
