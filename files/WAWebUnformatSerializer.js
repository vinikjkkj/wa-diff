__d(
  "WAWebUnformatSerializer",
  ["WAWebFormatSerializer", "WAWebIdentityFunction"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.onDelimiter = function (t, n) {
          return "";
        }),
        (t.onMutator = function (t, n, r, o, a) {
          var e = a == null ? void 0 : a.spoilerReplacement;
          if (t.maskOnUnformat === !0 && e != null) return e;
          if (t.unformatDecorations != null) {
            var i = t.unformatDecorations,
              l = i.post,
              u = i.pre;
            return s([typeof u == "function" ? u(r) : u].concat(n, [l]));
          }
          return s(n);
        }),
        t
      );
    })(r("WAWebFormatSerializer"));
    ((e.onRoot = function (e) {
      return s(e);
    }),
      (e.onText = o("WAWebIdentityFunction").identityFunction));
    function s(e) {
      return e.filter(Boolean).join("");
    }
    l.default = e;
  },
  98,
);
