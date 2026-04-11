__d(
  "WAWebStatusLinkFormatMutator",
  ["WAWebLinkFormatMutator", "WAWebLongLinkMutatorComponent.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 34,
      c = 12,
      d = "...";
    function m(e, t) {
      var n = Math.min(
        t.length,
        Math.max(t.length - c, t.length + e.length - u),
      );
      return t.length - n;
    }
    function p(e, t) {
      var n = t.length > c || t.length + e.length > u ? t.slice(0, m(e, t)) : t;
      return n;
    }
    function _(e) {
      var t = e.domain,
        n = e.path;
      return [t.replace(/^www\./, ""), n == null || n.length === 1 ? "" : n];
    }
    function f(e, t) {
      var n = p(e, t),
        r = e + (n.length === 1 ? "" : n),
        o = r.length > u ? "" + d + r.slice(r.length - u) : r,
        a = t !== n ? d : "";
      return o + a;
    }
    var g = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.jsx = function (n, o, a) {
          var t = _(o),
            i = t[0],
            l = t[1],
            u = f(i, l);
          if (u !== i + l) {
            var c;
            return s.jsx(r("WAWebLongLinkMutatorComponent.react"), {
              xstyle: a.linkXstyle,
              selectable: (c = a.selectable) != null ? c : !1,
              link: o,
              dataTab: a.dataTab,
              children: u,
            });
          }
          return e.jsx.call(this, [i + l], o, a);
        }),
        t
      );
    })(r("WAWebLinkFormatMutator"));
    ((l.cleanUrl = _), (l.redactUrl = f), (l.StatusLink = g));
  },
  98,
);
