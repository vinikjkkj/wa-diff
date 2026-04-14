__d(
  "WAWebCrosspostingIcons.react",
  [
    "WAWebCrosspostingConfig",
    "WAWebCrosspostingGatingUtils",
    "react",
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
      var n = t.crosspostingInfo,
        a = t.testidPrefix,
        i = a === void 0 ? "status" : a,
        l = t.xstyle;
      if (!o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled())
        return null;
      var s = o(
        "WAWebCrosspostingConfig",
      ).CROSSPOSTING_DESTINATION_CONFIG.filter(function (e) {
        return (
          o("WAWebCrosspostingConfig").isCrosspostedToDestination(
            n,
            e.destination,
          ) ||
          o("WAWebCrosspostingConfig").isPendingCrosspostingToDestination(
            n,
            e.destination,
          )
        );
      });
      return s.length === 0
        ? null
        : u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(c.crosspostingIcons, l),
              {
                children: s.map(function (e) {
                  var t = o(
                    "WAWebCrosspostingConfig",
                  ).isPendingCrosspostingToDestination(n, e.destination);
                  return u.jsx(
                    "span",
                    babelHelpers.extends(
                      {},
                      {
                        0: { className: "x78zum5" },
                        1: { className: "x78zum5 xti2d7y" },
                      }[!!t << 0],
                      {
                        children: e.getFilledIcon({
                          width: 16,
                          height: 16,
                          testid: i + "-crosspost-" + e.keySuffix + "-icon",
                        }),
                      },
                    ),
                    e.keySuffix,
                  );
                }),
              },
            ),
          );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
