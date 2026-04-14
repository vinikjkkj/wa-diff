__d(
  "WAWebAvatarOverlay.react",
  ["$InternalEnum", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = n("$InternalEnum").Mirrored(["DEFAULT", "COMMUNITY"]);
    function d(e) {
      var t = e.icon,
        n = e.ref,
        r = e.text,
        o = e.theme,
        a = u(
          function () {
            var e = s.jsxs(s.Fragment, {
              children: [
                s.jsx("div", { className: "x1awj2ng", children: t }),
                s.jsx("div", {
                  "data-testid": void 0,
                  className:
                    "xh8yej3 x2b8uid x1mzt3pk x1awj2ng x1nxh6w3 x1d3mw78",
                  children: r,
                }),
              ],
            });
            return (
              (e = s.jsx("div", {
                className:
                  "x78zum5 x6s0dn4 xl56j7k xdt5ytf x129bwdz x9f619 x29ncy0 x17j7krd x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
                children: e,
              })),
              e
            );
          },
          [t, r],
        );
      return s.createElement(
        "div",
        babelHelpers.extends(
          { ref: n },
          {
            0: {
              className:
                "x10l6tqk x13vifvy x16uhe5s x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x219wg1",
            },
            1: {
              className:
                "x10l6tqk x13vifvy x16uhe5s x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d x219wg1 x1bczwif x17un8ov x1e7945m x11o6v7j",
            },
          }[(o === c.COMMUNITY) << 0],
          { key: "avatar-overlay" },
        ),
        a,
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.AvatarOverlayTheme = c),
      (l.AvatarOverlay = d));
  },
  98,
);
