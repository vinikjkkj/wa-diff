__d(
  "WAWebNewsletterStatusCardText",
  ["WABidi"],
  function (t, n, r, o, a, i, l) {
    var e = "\u2026",
      s = h();
    function u(e, t, n, r) {
      return e.split("\n").flatMap(function (e) {
        return f(e, t, n, r);
      });
    }
    function c(t, n, r, o) {
      return o(t, n) <= r ? t : d(t, n, r, o, e);
    }
    function d(e, t, n, r, o) {
      for (
        var a = _(e.trimEnd());
        a.length > 0 && r("" + a.join("").trimEnd() + o, t) > n;
      )
        a.pop();
      return "" + a.join("").trimEnd() + o;
    }
    function m(e) {
      return o("WABidi").bidiDir(e) === "rtl";
    }
    function p(e, t) {
      return function (n, r) {
        return e(n, r, t);
      };
    }
    function _(e) {
      return s != null
        ? Array.from(s.segment(e), function (e) {
            var t = e.segment;
            return t;
          })
        : Array.from(e);
    }
    function f(e, t, n, r) {
      var o = [],
        a = "";
      for (var i of e.split(" ").filter(Boolean)) {
        var l,
          s = a === "" ? i : a + " " + i;
        if (r(s, t) <= n) {
          a = s;
          continue;
        }
        a !== "" && o.push(a);
        var u = g(i, t, n, r);
        (o.push.apply(o, u.slice(0, -1)),
          (a = (l = u[u.length - 1]) != null ? l : ""));
      }
      return (o.push(a), o);
    }
    function g(e, t, n, r) {
      var o = [],
        a = "";
      for (var i of _(e))
        a !== "" && r(a + i, t) > n ? (o.push(a), (a = i)) : (a += i);
      return (o.push(a), o);
    }
    function h() {
      var e,
        t =
          (e = Object.getOwnPropertyDescriptor(Intl, "Segmenter")) == null
            ? void 0
            : e.value;
      return typeof t == "function"
        ? new t(void 0, { granularity: "grapheme" })
        : null;
    }
    ((l.ELLIPSIS = e),
      (l.wrapCardText = u),
      (l.truncateToWidth = c),
      (l.shortenWithSuffix = d),
      (l.isRtlText = m),
      (l.measureInDirection = p),
      (l.splitCardCharacters = _));
  },
  98,
);
