__d(
  "WAWebStatusLinkFormatMutator",
  [
    "WAWebLinkFormatMutator",
    "WAWebLongLinkMutatorComponent.react",
    "react",
    "react-compiler-runtime",
  ],
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
        (t.jsx = function (n, r, o) {
          var t = _(r),
            a = t[0],
            i = t[1],
            l = f(a, i);
          if (l !== a + i) {
            var u,
              c = h(r);
            return s.jsx(c, {
              xstyle: o.linkXstyle,
              selectable: (u = o.selectable) != null ? u : !1,
              link: r,
              dataTab: o.dataTab,
              children: l,
            });
          }
          return e.jsx.call(this, [a + i], r, o);
        }),
        t
      );
    })(r("WAWebLinkFormatMutator"));
    function h(e) {
      return e.suspiciousHostChecksPending === !0
        ? y
        : r("WAWebLongLinkMutatorComponent.react");
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.dataTab,
        i = e.link,
        l = e.selectable,
        u = e.xstyle,
        c = r("WAWebLinkFormatMutator").useWAWebReclassifiedLink(i),
        d;
      return (
        t[0] !== n || t[1] !== c || t[2] !== a || t[3] !== l || t[4] !== u
          ? ((d = s.jsx(r("WAWebLongLinkMutatorComponent.react"), {
              xstyle: u,
              selectable: l,
              link: c,
              dataTab: a,
              children: n,
            })),
            (t[0] = n),
            (t[1] = c),
            (t[2] = a),
            (t[3] = l),
            (t[4] = u),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    ((l.cleanUrl = _), (l.redactUrl = f), (l.StatusLink = g));
  },
  98,
);
