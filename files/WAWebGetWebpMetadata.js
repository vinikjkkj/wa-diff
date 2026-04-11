__d(
  "WAWebGetWebpMetadata",
  ["WALogger", "WAWebWebp", "WAWebWebpMetadata"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = new Uint8Array(t),
        r = o("WAWebWebp").findWebpMetadata(n);
      if (!r) return {};
      var a = r.position,
        i = r.size,
        l = new TextDecoder(),
        s = n.slice(a, a + i),
        u = l.decode(s);
      try {
        var c = JSON.parse(u);
        return c;
      } catch (t) {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sticker emoji parse failed, returning {}",
              ])),
          ),
          {}
        );
      }
    }
    function u(e) {
      var t = s(e),
        n = o("WAWebWebpMetadata").toWebpMetadata(t);
      return n;
    }
    l.getWebpMetadata = u;
  },
  98,
);
