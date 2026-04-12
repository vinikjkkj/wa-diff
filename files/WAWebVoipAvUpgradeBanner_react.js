__d(
  "WAWebVoipAvUpgradeBanner.react",
  ["fbt", "WAWebClickable.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        acceptButton: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          minWidth: "x4m7ku4",
          height: "x10w6t97",
          minHeight: "x21xpn4",
          backgroundColor: "x1qdxaal",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        ignoreButton: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          minWidth: "x4m7ku4",
          height: "x10w6t97",
          minHeight: "x21xpn4",
          backgroundColor: "x1otzlqf",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          cursor: "x1ypdohk",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.contactName,
        n = e.onAccept,
        r = e.onIgnore;
      return u.jsxs("div", {
        className:
          "x78zum5 x1q0g3np x6s0dn4 x16ovd2e x12xbjc7 x1nzty39 xb0esv5 x8a3fw1 x1aj3ljl x10l6tqk xm6i5cn xxc7z9f x1wxaq2x xt7dq6l x1o0tod xtijo5x xvc5jky x11t971q x1d9eok4 xp88cpc xi5p3m0 x1g83kfv x3qq2k7 x2x8art x1qor8vf xf5e64p",
        children: [
          u.jsx("div", {
            className:
              "x7whbhp xk50ysn x1f6kntn x1fc57z9 xf4yft x1pha01r x1iyjqo2",
            children: s._(/*BTDS*/ "{contactName} is sharing video", [
              s._param("contactName", t),
            ]),
          }),
          u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: r,
            xstyle: c.ignoreButton,
            children: u.jsx("div", {
              className: "x7whbhp xk50ysn x1f6kntn x1fc57z9 xf4yft xn76zm4",
              children: s._(/*BTDS*/ "Ignore"),
            }),
          }),
          u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: n,
            xstyle: c.acceptButton,
            children: u.jsx("div", {
              className: "x7whbhp xk50ysn x1f6kntn x1fc57z9 xf4yft x9disrw",
              children: s._(/*BTDS*/ "Accept"),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
