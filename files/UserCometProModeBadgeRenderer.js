__d(
  "UserCometProModeBadgeRenderer",
  [
    "CometProModeBadge.react",
    "UserCometProModeBadgeRenderer_user.graphql",
    "react",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        badgeContainer: {
          paddingInlineStart: "xaso8d8",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    e !== void 0 || (e = n("UserCometProModeBadgeRenderer_user.graphql"));
    function d(e) {
      var t = new Set(
        e == null
          ? void 0
          : e
              .map(function (e) {
                var t = e.id;
                return t;
              })
              .filter(Boolean),
      );
      return function (e, n) {
        var a = n.id,
          i = n.show_promode_badge;
        return i == null || i === !1 || a == null || !t.has(a)
          ? e
          : u.jsxs(u.Fragment, {
              children: [
                e,
                u.jsx(o("react-strict-dom").html.span, {
                  style: c.badgeContainer,
                  children: u.jsx(r("CometProModeBadge.react"), {
                    profileID: a,
                    size: "small",
                    surface: "FEED",
                  }),
                }),
              ],
            });
      };
    }
    l.default = d;
  },
  98,
);
