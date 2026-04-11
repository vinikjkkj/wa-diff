__d(
  "FDSIcon.react",
  [
    "fbt",
    "BaseIsDecorativeContext",
    "CometImage.react",
    "CometSVGIcon.react",
    "FDSPressable.react",
    "IconSource",
    "ImageIconSource",
    "SVGIcon",
    "SVGIconSource",
    "TintableIconSource",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u = [
        "alt",
        "color",
        "disabled",
        "disableOverlay_DEPRECATED",
        "draggable",
        "focusable",
        "hideHoverOverlay",
        "icon",
        "isDecorative",
        "linkProps",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressIn",
        "onPressOut",
        "size",
        "testid",
        "testOnly_pressed",
        "xstyle",
      ],
      c,
      d = c || (c = o("react")),
      m = c.useMemo,
      p = {
        button: {
          appearance: "xjyslct",
          backgroundColor: "xjbqb8w",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          display: "x3nfvp2",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          position: "x1n2onr6",
          verticalAlign: "x3ajldb",
          "::after_borderStartStartRadius": "xrw4ojt",
          "::after_borderStartEndRadius": "xg6frx5",
          "::after_borderEndEndRadius": "xw872ko",
          "::after_borderEndStartRadius": "xhgbb2x",
          "::after_bottom": "x1xhcax0",
          "::after_content": "x1s928wv",
          "::after_insetInlineEnd": "x1o8326s",
          "::after_insetInlineStart": "x56lyyc",
          "::after_left": null,
          "::after_right": null,
          "::after_position": "x1j6awrg",
          "::after_top": "x1tfg27r",
          "::after_zIndex": "xitxdhh",
          $$css: !0,
        },
        image: { verticalAlign: "x1b0d499", $$css: !0 },
        pressed: { transform: "x1n5d1j9", $$css: !0 },
      };
    function _(e) {
      if (
        e instanceof r("TintableIconSource") ||
        e instanceof r("ImageIconSource") ||
        e instanceof r("IconSource")
      )
        return e;
      if (
        typeof e == "object" &&
        typeof e != "function" &&
        e != null &&
        e.$$typeof === "fb.tintableiconsource"
      ) {
        var t = e;
        return new (r("TintableIconSource"))(t.domain, t.src, t.size);
      }
      if (
        typeof e == "object" &&
        typeof e != "function" &&
        e != null &&
        e.$$typeof === "fb.iconsource"
      ) {
        var n = e;
        return new (r("IconSource"))(n.domain, n.src, n.size);
      }
      if (
        typeof e == "object" &&
        typeof e != "function" &&
        e != null &&
        e.$$typeof === "fb.imageiconsource"
      ) {
        var o = e;
        return new (r("ImageIconSource"))(
          o.src,
          o.width,
          o.height,
          o.resizeStrategy,
        );
      }
      return e;
    }
    function f(t) {
      "use no forget";
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.alt,
        c = l === void 0 ? "" : l,
        f = i.color,
        y = f === void 0 ? "primary" : f,
        C = i.disabled,
        b = C === void 0 ? !1 : C,
        v = i.disableOverlay_DEPRECATED,
        S = v === void 0 ? !1 : v,
        R = i.draggable,
        L = i.focusable,
        E = i.hideHoverOverlay,
        k = E === void 0 ? !1 : E,
        I = i.icon,
        T = i.isDecorative,
        D = T === void 0 ? !1 : T,
        x = i.linkProps,
        $ = i.onHoverIn,
        P = i.onHoverOut,
        N = i.onPress,
        M = i.onPressIn,
        w = i.onPressOut,
        A = i.size,
        F = i.testid,
        O = i.testOnly_pressed,
        B = O === void 0 ? !1 : O,
        W = i.xstyle,
        q = babelHelpers.objectWithoutPropertiesLoose(i, u),
        U = _(I),
        V = A != null ? A : 8,
        H = N == null ? F : void 0,
        G = i.disabled === !0 ? "disabled" : y,
        z = N != null || x != null,
        j = q["aria-label"],
        K = m(
          function () {
            return !z && (typeof j == "string" || s.isFbtInstance(j))
              ? j
              : D
                ? ""
                : c;
          },
          [j, D, z, c],
        ),
        Q = z ? void 0 : a,
        X =
          U instanceof r("TintableIconSource")
            ? d.jsx(r("CometImage.react"), {
                alt: K,
                draggable: R,
                ref: Q,
                src: U.src,
                testid: void 0,
                xstyle: [p.image, G !== "black" && h[g(G)], W],
              })
            : U instanceof r("ImageIconSource")
              ? d.jsx(r("CometImage.react"), {
                  alt: K,
                  draggable: i.draggable,
                  height: U.height,
                  objectFit: U.resizeStrategy === "contain" ? "fill" : "cover",
                  ref: Q,
                  src: U.src,
                  testid: void 0,
                  width: U.width,
                  xstyle: [p.image, W],
                })
              : U instanceof r("IconSource")
                ? d.jsx(r("CometImage.react"), {
                    alt: K,
                    draggable: i.draggable,
                    height: U.size,
                    ref: Q,
                    src: U.src,
                    width: U.size,
                    xstyle: [p.image, W],
                  })
                : U instanceof r("SVGIconSource")
                  ? d.jsx(r("CometImage.react"), {
                      alt: K,
                      draggable: R,
                      height: V,
                      ref: Q,
                      src: U.src,
                      width: V,
                      xstyle: [p.image, G !== "black" && h[g(G)], W],
                    })
                  : U instanceof o("SVGIcon").LegacySVGIcon
                    ? d.jsx(U.component, {
                        alt: K,
                        color: G,
                        "data-testid": void 0,
                        size: V,
                      })
                    : U instanceof o("SVGIcon").SVGIcon
                      ? d.jsx(r("CometSVGIcon.react"), {
                          alt: K,
                          color: G,
                          component: U.component,
                          "data-testid": void 0,
                          size: V,
                        })
                      : U instanceof o("SVGIcon").EmojiIcon
                        ? d.jsx(U.component, {
                            emoji: U.codepoints,
                            size: V === 112 ? 128 : V,
                          })
                        : d.jsx(r("CometSVGIcon.react"), {
                            alt: K,
                            color: G,
                            component: U,
                            "data-testid": void 0,
                            size:
                              (n =
                                A != null ? A : U == null ? void 0 : U._size) !=
                              null
                                ? n
                                : V,
                          }),
        Y = D
          ? d.jsx(r("BaseIsDecorativeContext").Provider, {
              value: !0,
              children: X,
            })
          : X;
      return z
        ? d.jsx(
            r("FDSPressable.react"),
            babelHelpers.extends({}, q, {
              disabled: b,
              focusable: L,
              hideHoverOverlay: k,
              linkProps: x,
              onHoverIn: $,
              onHoverOut: P,
              onPress: N,
              onPressIn: M,
              onPressOut: w,
              overlayDisabled: S,
              overlayOffset: 8,
              overlayRadius: "50%",
              ref: a,
              testOnly_pressed: B,
              testid: void 0,
              xstyle: function (t) {
                var e = t.pressed;
                return [p.button, e && p.pressed];
              },
              children: Y,
            }),
          )
        : Y;
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      switch (e) {
        case "positive":
          return "positive";
        case "negative":
          return "negative";
        case "disabled":
          return "disabled";
        case "highlight":
          return "accent";
        case "secondary":
          return "secondary";
        case "secondaryButtonIconOnMedia":
          return "secondaryButtonIconOnMedia";
        case "placeholder":
          return "placeholder";
        case "tertiary":
          return "placeholder";
        case "white":
          return "white";
        case "primary":
          return "primary";
        case "warning":
          return "warning";
        case "blueLink":
          return "blueLink";
        case "primaryAccent":
          return "primaryAccent";
        case "primaryDeemphasizedButtonIcon":
          return "primaryDeemphasizedButtonIcon";
        default:
          return "black";
      }
    }
    var h = {
      accent: { filter: "xi3auck", $$css: !0 },
      black: { filter: "xfdhc5e", $$css: !0 },
      blueLink: { filter: "x1vv9jnp", $$css: !0 },
      disabled: { filter: "xmgbrsx", $$css: !0 },
      negative: { filter: "x1d2xfc3", $$css: !0 },
      placeholder: { filter: "xuo83w3", $$css: !0 },
      positive: { filter: "x1hq76kk", $$css: !0 },
      primary: { filter: "xep6ejk", $$css: !0 },
      primaryAccent: { filter: "xq8hly8", $$css: !0 },
      primaryDeemphasizedButtonIcon: { filter: "xqhahu9", $$css: !0 },
      secondary: { filter: "x1d69dk1", $$css: !0 },
      secondaryButtonIconOnMedia: { filter: "xfrwr0o", $$css: !0 },
      warning: { filter: "xgzi2j0", $$css: !0 },
      white: { filter: "xaj1gnb", $$css: !0 },
    };
    l.default = f;
  },
  98,
);
