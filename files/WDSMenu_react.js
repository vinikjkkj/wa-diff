__d(
  "WDSMenu.react",
  ["BaseMenu.react", "WDSMenuContext", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = r("react")),
      c = (e || (e = o("react"))).useContext,
      d = "x1wwg65c-B",
      m = "x1vm5b0x-B",
      p = "x1xe9l1o-B",
      _ = "x1jn504y-B",
      f = 260,
      g = { maxWidth: "xf68679", $$css: !0 },
      h = { minWidth: "xkj4a21", $$css: !0 },
      y = { minHeight: "x82snj4", $$css: !0 },
      C = { maxHeight: "x1jols5v", $$css: !0 },
      b = { transformOrigin: "xf6vlc6", $$css: !0 },
      v = {
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
            g,
            {
              "--x-maxWidth": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        containerMinWidth: function (t) {
          return [
            h,
            {
              "--x-minWidth": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        containerMinHeight: function (t) {
          return [
            y,
            {
              "--x-minHeight": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        containerMaxHeight: function (t) {
          return [
            C,
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
            b,
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
      S = function (t) {
        (t.preventDefault(), t.stopPropagation());
      };
    function R(e) {
      var t = e.children,
        n = e.isContainer,
        a = n === void 0 ? !1 : n,
        i = e.isHorizontalMenu,
        l = i === void 0 ? !1 : i,
        s = e.maxHeight,
        d = e.maxWidth,
        m = e.minHeight,
        p = e.minWidth,
        _ = e.testid,
        g = e.useMaxWidth,
        h = g === void 0 ? !0 : g,
        y = c(o("WDSMenuContext").WDSMenuAnimationContext),
        C = y.align,
        b = y.isClosing,
        R = y.position,
        L = "center";
      C === "start" ? (L = "left") : C === "end" && (L = "right");
      var E = "center";
      return (
        R === "above" ? (E = "bottom") : R === "below" && (E = "top"),
        l
          ? u.jsx(o("react-strict-dom").html.div, {
              onContextMenu: S,
              role: "menu",
              style: [
                v.container,
                v.containerHorizontal,
                d != null && v.containerMaxWidth(d),
                v.transformOrigin(L, E),
                R === "above" && v.positionAbove,
                R === "below" && v.positionBelow,
                b && v.containerExiting,
              ],
              "data-testid": void 0,
              children: t,
            })
          : u.jsx(o("react-strict-dom").html.div, {
              onContextMenu: S,
              children: u.jsx(r("BaseMenu.react"), {
                testid: void 0,
                minMaxHeight: 360,
                useKeyCommands: !1,
                variant: {
                  xstyleConfig: {
                    container: [
                      v.container,
                      h && d == null && v.containerMaxWidth(f),
                      d != null && v.containerMaxWidth(d),
                      p != null && v.containerMinWidth(p),
                      m != null && v.containerMinHeight(m),
                      s != null && v.containerMaxHeight(s),
                      s != null && v.scrollableAreaWithMaxHeight,
                      v.transformOrigin(L, E),
                      R === "above" && v.positionAbove,
                      R === "below" && v.positionBelow,
                      b && v.containerExiting,
                    ],
                    scrollableArea: v.scrollableArea,
                  },
                },
                children: t,
              }),
            })
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  98,
);
