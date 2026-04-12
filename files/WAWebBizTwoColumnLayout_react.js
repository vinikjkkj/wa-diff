__d(
  "WAWebBizTwoColumnLayout.react",
  ["WAWebFlexBox.react", "WAWebResizeObserver.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = 24,
      d = 20,
      m = 1084,
      p = 380,
      _ = p * 2 + d + c * 2,
      f = {
        primary: { minWidth: "x1snuils", rowGap: "x1f0uite", $$css: !0 },
        largeScreenPrimary: { flexGrow: "xgyuaek", $$css: !0 },
        root: {
          alignContent: "xc26acl",
          columnGap: "x1mn2tih",
          display: "x78zum5",
          height: "x5yr21d",
          maxWidth: "x1unwqui",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          rowGap: "x1f0uite",
          width: "xh8yej3",
          $$css: !0,
        },
        largeScreenRoot: { justifyContent: "xl56j7k", $$css: !0 },
        secondary: {
          height: "xg7h5cd",
          minWidth: "x1snuils",
          rowGap: "x1f0uite",
          $$css: !0,
        },
        largeScreenSecondary: {
          flexGrow: "x1iyjqo2",
          position: "x7wzq59",
          top: "x242muq",
          $$css: !0,
        },
      };
    function g(e) {
      var t = e.flipResizeOrder,
        n = t === void 0 ? !1 : t,
        a = e.primaryContent,
        i = e.secondaryContent,
        l = u(!1),
        c = l[0],
        d = l[1],
        m = function (t) {
          d(t.width <= _);
        },
        p = n && c && i != null,
        g = s.jsx(o("WAWebFlexBox.react").FlexColumn, {
          xstyle: [f.primary, !c && f.largeScreenPrimary],
          align: "stretch",
          children: a,
        }),
        h =
          i != null &&
          s.jsx(o("WAWebFlexBox.react").FlexColumn, {
            xstyle: [f.secondary, !c && f.largeScreenSecondary],
            children: i,
          });
      return s.jsx(r("WAWebResizeObserver.react"), {
        className: "xh8yej3 xc26acl xl56j7k x78zum5 x5yr21d",
        onResize: m,
        children: s.jsx(o("WAWebFlexBox.react").FlexItem, {
          direction: c ? "vertical" : "horizontal",
          flex: !0,
          xstyle: [f.root, !c && f.largeScreenRoot],
          children: p
            ? s.jsxs(s.Fragment, { children: [h, g] })
            : s.jsxs(s.Fragment, { children: [g, h] }),
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
