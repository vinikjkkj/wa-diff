__d(
  "WAWebCrosspostingIcons.react",
  [
    "WAWebCrosspostingConfig",
    "WAWebCrosspostingGatingUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        crosspostingIcons: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          columnGap: "x17zd0t2",
          marginInlineStart: "xdwrcjd",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(16),
        a = t.crosspostingInfo,
        i = t.testidPrefix,
        l = t.xstyle,
        s = i === void 0 ? "status" : i;
      if (!o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled())
        return null;
      var d, m, p;
      if (n[0] !== a || n[1] !== s || n[2] !== l) {
        p = Symbol.for("react.early_return_sentinel");
        e: {
          var _;
          n[6] !== a
            ? ((_ = function (t) {
                return (
                  o("WAWebCrosspostingConfig").isCrosspostedToDestination(
                    a,
                    t.destination,
                  ) ||
                  o(
                    "WAWebCrosspostingConfig",
                  ).isPendingCrosspostingToDestination(a, t.destination)
                );
              }),
              (n[6] = a),
              (n[7] = _))
            : (_ = n[7]);
          var f = o(
            "WAWebCrosspostingConfig",
          ).CROSSPOSTING_DESTINATION_CONFIG.filter(_);
          if (f.length === 0) {
            p = null;
            break e;
          }
          n[8] !== l
            ? ((d = (e || (e = r("stylex"))).props(c.crosspostingIcons, l)),
              (n[8] = l),
              (n[9] = d))
            : (d = n[9]);
          var g;
          (n[10] !== a || n[11] !== s
            ? ((g = function (t) {
                var e = o(
                  "WAWebCrosspostingConfig",
                ).isPendingCrosspostingToDestination(a, t.destination);
                return u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x78zum5" },
                      1: { className: "x78zum5 xti2d7y" },
                    }[!!e << 0],
                    {
                      children: t.getFilledIcon({
                        width: 16,
                        height: 16,
                        testid: s + "-crosspost-" + t.keySuffix + "-icon",
                      }),
                    },
                  ),
                  t.keySuffix,
                );
              }),
              (n[10] = a),
              (n[11] = s),
              (n[12] = g))
            : (g = n[12]),
            (m = f.map(g)));
        }
        ((n[0] = a),
          (n[1] = s),
          (n[2] = l),
          (n[3] = d),
          (n[4] = m),
          (n[5] = p));
      } else ((d = n[3]), (m = n[4]), (p = n[5]));
      if (p !== Symbol.for("react.early_return_sentinel")) return p;
      var h;
      return (
        n[13] !== d || n[14] !== m
          ? ((h = u.jsx("div", babelHelpers.extends({}, d, { children: m }))),
            (n[13] = d),
            (n[14] = m),
            (n[15] = h))
          : (h = n[15]),
        h
      );
    }
    l.default = d;
  },
  98,
);
