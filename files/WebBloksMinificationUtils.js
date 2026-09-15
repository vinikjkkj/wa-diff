__d(
  "WebBloksMinificationUtils",
  ["WebBloksErrors", "webBloksGlobalAttributeKeys"],
  function (t, n, r, o, a, i, l) {
    var e = {
        toCanonicalAttrs: { style: '"' },
        toLogicalAttrs: { '"': "style" },
      },
      s = new Map(
        Object.entries(r("webBloksGlobalAttributeKeys").toCanonicalAttrs).map(
          function (e) {
            var t = e[0],
              n = e[1];
            return [String(n), t];
          },
        ),
      ),
      u = new Map();
    function c(e) {
      var t = u.get(e);
      return (
        t == null &&
          ((t = new Map(
            Object.entries(e.toCanonicalAttrs).map(function (e) {
              var t = e[0],
                n = e[1];
              return [String(n), t];
            }),
          )),
          u.set(e, t)),
        t
      );
    }
    function d(e) {
      if (e == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "This WebBloks operation requires a style minification map.",
        );
      return e;
    }
    function m(e, t, n) {
      var r = n[e];
      if (r == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No minification-map entry found for WebBloks style " + e + ".",
        );
      var a = g(t, r);
      if (a == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No minification-map entry found for WebBloks attribute " +
            e +
            "." +
            t +
            ".",
        );
      return a;
    }
    function p(e, t, n, r) {
      if (typeof t == "number") return String.fromCodePoint(t);
      if (n) return t;
      var o = String(t);
      return o === "transform3d" ? "\x8B" : m(e, o, d(r));
    }
    function _(e, t, n) {
      var o,
        a = n == null ? void 0 : n[e];
      return (o = a == null ? void 0 : a.toCanonicalAttrs[t]) != null
        ? o
        : r("webBloksGlobalAttributeKeys").toCanonicalAttrs[t];
    }
    function f(t, n, r) {
      var a,
        i,
        l = r[t];
      if (l == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No minification-map entry found for WebBloks style " + t + ".",
        );
      var u =
        (a = (i = c(l).get(n)) != null ? i : e.toLogicalAttrs[n]) != null
          ? a
          : s.get(n);
      if (u == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No unminification-map entry found for WebBloks attribute " +
            t +
            "." +
            n +
            ".",
        );
      return u;
    }
    function g(t, n) {
      var o, a;
      return (o =
        (a = n.toCanonicalAttrs[t]) != null ? a : e.toCanonicalAttrs[t]) != null
        ? o
        : r("webBloksGlobalAttributeKeys").toCanonicalAttrs[t];
    }
    ((l.requireWebBloksStyleMinificationMap = d),
      (l.getMinifiedWebBloksAttributeKey = m),
      (l.getWebBloksDynamicAttributeKey = p),
      (l.getOptionalMinifiedWebBloksAttributeKey = _),
      (l.getLogicalWebBloksAttributeKey = f),
      (l.getOptionalMinifiedWebBloksAttributeKeyFromEntry = g));
  },
  98,
);
