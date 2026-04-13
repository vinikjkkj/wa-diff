__d(
  "WDSMenu.react",
  ["BaseMenu.react", "WDSMenuContext", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = "x1wwg65c-B",
      d = "x1vm5b0x-B",
      m = "x1xe9l1o-B",
      p = "x1jn504y-B",
      _ = 260,
      f = { maxWidth: "xf68679", $$css: !0 },
      g = { minWidth: "xkj4a21", $$css: !0 },
      h = { minHeight: "x82snj4", $$css: !0 },
      y = { maxHeight: "x1jols5v", $$css: !0 },
      C = { transformOrigin: "xf6vlc6", $$css: !0 },
      b = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          rowGap: "x129bwdz",
          columnGap: "x1trrmfo",
          minWidth: "xt7fyls",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          paddingLeft: null,
          paddingRight: null,
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          borderTopColor: "x1ekq09l",
          borderInlineEndColor: "xlmuga0",
          borderBottomColor: "x54tcbp",
          borderInlineStartColor: "xlzwp1d",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          boxShadow: "xvktan5",
          animationDuration: "x4afe7t",
          animationTimingFunction: "xuqacwm",
          animationFillMode: "x10e4vud",
          $$css: !0,
        },
        containerMaxWidth: function (t) {
          return [
            f,
            {
              "--x-maxWidth": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        containerMinWidth: function (t) {
          return [
            g,
            {
              "--x-minWidth": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        containerMinHeight: function (t) {
          return [
            h,
            {
              "--x-minHeight": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        containerMaxHeight: function (t) {
          return [
            y,
            {
              "--x-maxHeight": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        positionAbove: { animationName: "xet5ma0", $$css: !0 },
        positionBelow: { animationName: "x65gd29", $$css: !0 },
        transformOrigin: function (t, n) {
          return [
            C,
            {
              "--x-transformOrigin": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + " " + n),
            },
          ];
        },
        containerExiting: {
          animationName: "xxp0q0x",
          animationDuration: "xtsvl71",
          animationFillMode: "x10e4vud",
          $$css: !0,
        },
        scrollableArea: {
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        scrollableAreaWithMaxHeight: {
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        containerHorizontal: {
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          minWidth: null,
          $$css: !0,
        },
      },
      v = function (t) {
        (t.preventDefault(), t.stopPropagation());
      };
    function S(e) {
      var t = e.children,
        n = e.isContainer,
        a = n === void 0 ? !1 : n,
        i = e.isHorizontalMenu,
        l = i === void 0 ? !1 : i,
        c = e.maxHeight,
        d = e.maxWidth,
        m = e.minHeight,
        p = e.minWidth,
        f = e.testid,
        g = e.useMaxWidth,
        h = g === void 0 ? !0 : g,
        y = u(o("WDSMenuContext").WDSMenuAnimationContext),
        C = y.align,
        S = y.isClosing,
        R = y.position,
        L = "center";
      C === "start" ? (L = "left") : C === "end" && (L = "right");
      var E = "center";
      return (
        R === "above" ? (E = "bottom") : R === "below" && (E = "top"),
        l
          ? s.jsx(o("react-strict-dom").html.div, {
              onContextMenu: v,
              role: "menu",
              style: [
                b.container,
                b.containerHorizontal,
                d != null && b.containerMaxWidth(d),
                b.transformOrigin(L, E),
                R === "above" && b.positionAbove,
                R === "below" && b.positionBelow,
                S && b.containerExiting,
              ],
              "data-testid": void 0,
              children: t,
            })
          : s.jsx(o("react-strict-dom").html.div, {
              onContextMenu: v,
              children: s.jsx(r("BaseMenu.react"), {
                testid: void 0,
                minMaxHeight: 360,
                useKeyCommands: !1,
                variant: {
                  xstyleConfig: {
                    container: [
                      b.container,
                      h && d == null && b.containerMaxWidth(_),
                      d != null && b.containerMaxWidth(d),
                      p != null && b.containerMinWidth(p),
                      m != null && b.containerMinHeight(m),
                      c != null && b.containerMaxHeight(c),
                      c != null && b.scrollableAreaWithMaxHeight,
                      b.transformOrigin(L, E),
                      R === "above" && b.positionAbove,
                      R === "below" && b.positionBelow,
                      S && b.containerExiting,
                    ],
                    scrollableArea: b.scrollableArea,
                  },
                },
                children: t,
              }),
            })
      );
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  98,
);
