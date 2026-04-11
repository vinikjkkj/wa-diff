__d(
  "WAWebWamTypeHash",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.set = function (t) {
            for (var e in t) this[e] = t[e];
          }),
          e
        );
      })();
    function u(e, t, n) {
      var o = { $className: { value: e } };
      for (var a in t) {
        var i = t[a],
          l = typeof i == "string" || typeof i == "function" ? { type: i } : i;
        if (l == null || typeof l != "object") {
          var s;
          throw r("err")(
            e +
              " specified with non-object " +
              ((s = JSON.stringify(l)) != null ? s : "undefined"),
          );
        }
        o[a] = { enumerable: !0, get: c(a, l), set: d(a, l) };
      }
      var u = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.all = {}), t && n.set(t), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(n);
      return (Object.defineProperties(u.prototype, o), u);
    }
    function c(e, t) {
      return function () {
        return this.all[e];
      };
    }
    function d(t, n) {
      var r = n.type,
        a = n.set;
      return function (i) {
        if (i !== this.all[t]) {
          if (i != null) {
            if (typeof r == "function") {
              if (!r(i)) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "type-validator fails ",
                      "",
                    ])),
                  i,
                );
                var n = new TypeError(
                  this.$className + "." + t + " type-validator failed",
                );
                throw (n.stack, n);
              }
            } else if (typeof i !== r) {
              var l = new TypeError(
                this.$className +
                  "." +
                  t +
                  " requires type " +
                  r +
                  ", got " +
                  String(i),
              );
              throw (l.stack, l);
            }
          }
          (a && a.call(this, i), (this.all[t] = i));
        }
      };
    }
    ((l.TypeHash = s), (l.defineTypeHash = u));
  },
  98,
);
