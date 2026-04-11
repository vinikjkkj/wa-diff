__d(
  "WAWebUnformatSerializer",
  ["WAWebFormatSerializer"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebFormatSerializer"));
    ((e.onDelimiter = function () {}),
      (e.onMutator = function (e, t, n) {
        if (e.unformatDecorations != null) {
          var r = e.unformatDecorations,
            o = r.post,
            a = r.pre;
          return s([typeof a == "function" ? a(n) : a].concat(t, [o]));
        }
        return s(t);
      }),
      (e.onRoot = function (e) {
        return s(e);
      }),
      (e.onText = function (e) {
        return e;
      }));
    function s(e) {
      return e.filter(Boolean).join("");
    }
    l.default = e;
  },
  98,
);
