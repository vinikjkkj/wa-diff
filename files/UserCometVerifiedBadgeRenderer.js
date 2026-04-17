__d(
  "UserCometVerifiedBadgeRenderer",
  [
    "CometProfileVerificationBadge.react",
    "UserCometVerifiedBadgeRenderer_user.graphql",
    "XPlatReactEnvironment",
    "react",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        verifiedIconContainer: {
          paddingInlineStart: "xaso8d8",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    e !== void 0 || (e = n("UserCometVerifiedBadgeRenderer_user.graphql"));
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
          i = n.is_verified;
        return i == null || i === !1 || a == null || !t.has(a)
          ? e
          : u.jsxs(u.Fragment, {
              children: [
                e,
                o("XPlatReactEnvironment").isWeb()
                  ? u.jsx(o("react-strict-dom").html.span, {
                      style: c.verifiedIconContainer,
                      children: u.jsx(
                        r("CometProfileVerificationBadge.react"),
                        { profileID: a, size: "small" },
                      ),
                    })
                  : u.jsx(o("react-strict-dom").html.div, {
                      style: c.verifiedIconContainer,
                      children: u.jsx(
                        r("CometProfileVerificationBadge.react"),
                        { profileID: a, size: "small" },
                      ),
                    }),
              ],
            });
      };
    }
    l.default = d;
  },
  98,
);
