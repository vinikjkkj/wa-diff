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
      );
    function u(e, t, n) {
      var r = n[e];
      if (r == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No unminification-map entry found for WebBloks style " + e + ".",
        );
      var a = p(t, r);
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
    function c(e, t, n) {
      if (typeof t == "number") return String.fromCodePoint(t);
      var r = String(t);
      return r === "transform3d" ? "\x8B" : u(e, r, n);
    }
    function d(e, t, n) {
      var o,
        a = n[e];
      return (o = a == null ? void 0 : a.toCanonicalAttrs[t]) != null
        ? o
        : r("webBloksGlobalAttributeKeys").toCanonicalAttrs[t];
    }
    function m(t, n, r) {
      var a,
        i,
        l = r[t];
      if (l == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No unminification-map entry found for WebBloks style " + t + ".",
        );
      var u =
        (a = (i = l.toLogicalAttrs[n]) != null ? i : e.toLogicalAttrs[n]) !=
        null
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
    function p(t, n) {
      var o, a;
      return (o =
        (a = n.toCanonicalAttrs[t]) != null ? a : e.toCanonicalAttrs[t]) != null
        ? o
        : r("webBloksGlobalAttributeKeys").toCanonicalAttrs[t];
    }
    ((l.getMinifiedWebBloksAttributeKey = u),
      (l.getMinifiedWebBloksDynamicAttributeKey = c),
      (l.getOptionalMinifiedWebBloksAttributeKey = d),
      (l.getLogicalWebBloksAttributeKey = m),
      (l.getOptionalMinifiedWebBloksAttributeKeyFromEntry = p));
  },
  98,
);
