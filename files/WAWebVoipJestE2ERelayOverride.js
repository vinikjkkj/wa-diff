__d(
  "WAWebVoipJestE2ERelayOverride",
  ["WALogger", "WAWebVoipWapNodeUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "te2",
      d = 4,
      m = 16,
      p = 2,
      _ = d + p,
      f = m + p,
      g = 3480,
      h = {
        rcln0c01: [
          36, 1, 219, 0, 49, 255, 224, 98, 250, 206, 176, 12, 0, 0, 128, 130,
        ],
        rrva0c01: [
          36, 1, 219, 0, 34, 255, 255, 197, 250, 206, 176, 12, 0, 0, 128, 130,
        ],
      };
    function y(e) {
      o("WAWebVoipWapNodeUtils").forEachVoipWapNodeWithTag(e, c, C);
    }
    function C(t) {
      var n = o("WAWebVoipWapNodeUtils").getVoipRelayTe2Endpoint(t);
      if (n != null) {
        var r = n.content,
          a = n.relayName;
        if (!Object.hasOwn(h, a)) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: jest-e2e relay override: no entry for ",
                ", left as-is",
              ])),
            a,
          );
          return;
        }
        if (r.length !== _ && r.length !== f) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: jest-e2e relay override ",
                ": unexpected te2 endpoint length ",
                ", left as-is",
              ])),
            a,
            r.length,
          );
          return;
        }
        for (var i = h[a], l = new Uint8Array(f), c = 0; c < m; c++)
          l[c] = i[c];
        (new DataView(l.buffer).setUint16(m, g, !1),
          (t.content = l),
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: jest-e2e relay override ",
                ": ",
                "-byte endpoint -> [",
                "]:",
                "",
              ])),
            a,
            r.length,
            b(i),
            g,
          ));
      }
    }
    function b(e) {
      for (
        var t = e.map(function (e) {
            return e.toString(16).padStart(2, "0");
          }),
          n = [],
          r = 0;
        r < m;
        r += 2
      )
        n.push("" + t[r] + t[r + 1]);
      return n.join(":");
    }
    l.maybeOverrideJestE2ERelayEndpoints = y;
  },
  98,
);
