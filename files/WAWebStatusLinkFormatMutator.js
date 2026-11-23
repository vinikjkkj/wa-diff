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
      var t = e.children,
        n = e.dataTab,
        o = e.link,
        a = e.selectable,
        i = e.xstyle,
        l = r("WAWebLinkFormatMutator").useWAWebReclassifiedLink(o);
      return s.jsx(r("WAWebLongLinkMutatorComponent.react"), {
        xstyle: i,
        selectable: a,
        link: l,
        dataTab: n,
        children: t,
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.cleanUrl = _),
      (l.redactUrl = f),
      (l.StatusLink = g));
  },
  98,
);
