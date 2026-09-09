__d(
  "WAWebVoipRelayOverrides",
  ["WALogger", "WAWebVoipWapNodeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "te2",
      u = 4,
      c = 16,
      d = 6,
      m = 18,
      p = {
        hou1c01: {
          v4: [157, 240, 24, 133],
          v6: [
            42, 3, 40, 128, 242, 98, 0, 219, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
        bog2c01: {
          v4: [163, 70, 152, 133],
          v6: [
            42, 3, 40, 128, 242, 2, 0, 219, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
        bog2c02: {
          v4: [57, 144, 115, 57],
          v6: [
            42, 3, 40, 128, 243, 47, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
        lim1c01: {
          v4: [157, 240, 197, 133],
          v6: [
            42, 3, 40, 128, 242, 67, 0, 219, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
        mia3c01: {
          v4: [57, 144, 23, 57],
          v6: [
            42, 3, 40, 128, 243, 50, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
        mia3c02: {
          v4: [157, 240, 14, 129],
          v6: [
            42, 3, 40, 128, 242, 44, 1, 219, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
        mia3c03: {
          v4: [57, 144, 163, 57],
          v6: [
            42, 3, 40, 128, 243, 81, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
        mia5c01: {
          v4: [57, 144, 197, 57],
          v6: [
            42, 3, 40, 128, 243, 98, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
        mia5c02: {
          v4: [57, 144, 199, 57],
          v6: [
            42, 3, 40, 128, 243, 99, 1, 57, 250, 206, 176, 12, 0, 0, 103, 73,
          ],
        },
      };
    function _(t) {
      o("WAWebVoipWapNodeUtils").forEachVoipWapNodeWithTag(t, s, function (t) {
        var n = o("WAWebVoipWapNodeUtils").getVoipRelayTe2Endpoint(t);
        if (n != null) {
          var r = n.content,
            a = n.relayName;
          if (Object.hasOwn(p, a)) {
            var i = p[a];
            if (r.length === d) for (var l = 0; l < u; l++) r[l] = i.v4[l];
            else if (r.length === m) for (var s = 0; s < c; s++) r[s] = i.v6[s];
            else
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: relay override ",
                    ": unexpected te2 endpoint length ",
                    ", left as-is",
                  ])),
                a,
                r.length,
              );
          }
        }
      });
    }
    l.overrideRelayIp = _;
  },
  98,
);
