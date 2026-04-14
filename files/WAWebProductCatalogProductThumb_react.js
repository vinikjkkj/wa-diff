__d(
  "WAWebProductCatalogProductThumb.react",
  [
    "WAWebMediaTypes",
    "WAWebStorefrontFilledIcon.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useHoverState",
    "useWAWebModelValues",
    "useWAWebRenderCallbacks",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = ["list", "cart-list"],
      f = {
        mediaCanvas: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          zIndex: "x1vjfegm",
          boxSizing: "x9f619",
          width: "xh8yej3",
          height: "x5yr21d",
          backgroundPosition: "x1xsqp64",
          backgroundSize: "x18d0r48",
          borderStartStartRadius: "x2yqj0j",
          borderStartEndRadius: "x1u1eq46",
          borderEndEndRadius: "x1fxmhz6",
          borderEndStartRadius: "xr2wkf5",
          transitionProperty: "x11xpdln",
          transitionDuration: "xwtrvjq",
          transitionTimingFunction: "x1wwv7g1",
          transform: "x1c071of",
          $$css: !0,
        },
        mediaCanvasClickable: { cursor: "x1ypdohk", $$css: !0 },
        squareThumb: {
          width: "x1useyqa",
          height: "xsdox4t",
          alignSelf: "xamitd3",
          $$css: !0,
        },
        squareThumbMediaCanvas: {
          borderStartStartRadius: "x1p9lm14",
          borderStartEndRadius: "xbmvzin",
          borderEndEndRadius: "x1t5tj8o",
          borderEndStartRadius: "x17do96b",
          boxShadow: "xuh0odg",
          $$css: !0,
        },
        placeholder: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          color: "x7nlr4h",
          backgroundColor: "x16kknjp",
          $$css: !0,
        },
        listWrapper: {
          position: "x1n2onr6",
          marginTop: "x1380le5",
          marginInlineEnd: "x1yh7se0",
          marginBottom: "xefnzgg",
          marginInlineStart: "x1fkuohi",
          $$css: !0,
        },
        cartListWrapper: { position: "x1n2onr6", $$css: !0 },
        cartList: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          height: "xy75621",
          width: "xni59qk",
          $$css: !0,
        },
        list: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          width: "xyygdyd",
          $$css: !0,
        },
        canvasComponent: {
          position: "x1n2onr6",
          width: "xa1il55",
          "::before_display": "xsyprtt",
          "::before_paddingTop": "xkhf6oj",
          "::before_content": "x10tli2e",
          $$css: !0,
        },
        canvasComponentLargeGallerySpacing: {
          width: "x1anfit2",
          marginBottom: "x14owe82",
          $$css: !0,
        },
        viewerFlow: {
          position: "x1n2onr6",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x9whnou",
          minWidth: "xa06r8k",
          maxWidth: "xr6zewm",
          height: "xuzvuw4",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          cursor: "x1ypdohk",
          transitionProperty: "x11xpdln",
          transitionDuration: "x1k2tvsc",
          transitionTimingFunction: "x9lcvmn",
          "::before_content": "xnahlnb",
          $$css: !0,
        },
        viewerFlowHoverInactive: { outline: "x7aqg34", $$css: !0 },
        active: {
          borderTopWidth: "xl8et2f",
          borderInlineEndWidth: "xuc0g9m",
          borderBottomWidth: "x1dmim90",
          borderInlineStartWidth: "xs4xcjr",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          transform: "xd1alts",
          $$css: !0,
        },
      };
    function g(e) {
      var t = e.onClick,
        n = e.theme,
        a = e.xstyle,
        i = o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (s || (s = r("stylex"))).props(
            f.mediaCanvas,
            (n === "squareThumb" || n === "orderSquareThumb") &&
              f.squareThumbMediaCanvas,
            f.placeholder,
            !!t && f.mediaCanvasClickable,
            a,
          ),
          { onClick: t, children: c.jsx(i, { width: 50, height: 50 }) },
        ),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.active,
        l = a.badge,
        u = a.imgRef,
        d = a.onClick,
        h = a.overlayContent,
        y = a.theme,
        C = p(null),
        b = o("useWAWebModelValues").useModelValues(a.mediaData, [
          "mediaStage",
          "mediaBlob",
          "renderableUrl",
          "preview",
        ]),
        v = r("useHoverState")(),
        S = v.isHovered,
        R = v.onMouseEnter,
        L = v.onMouseLeave;
      r("useWAWebRenderCallbacks")({
        onMount: function () {
          u == null || u(C.current);
        },
        onUnmount: function () {
          u == null || u(null);
        },
      });
      var E = b.mediaStage,
        k = b.renderableUrl,
        I = m(
          function () {
            return E === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
              h != null
              ? c.jsx("div", {
                  className:
                    "x10l6tqk x13vifvy x1o0tod xupqr0c x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x1f6kntn x1xcyms6 x2b8uid xtvhhri x47corl x1y1tjmw x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5",
                  children: h,
                })
              : null;
          },
          [E, h],
        ),
        T = m(
          function () {
            return E === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING
              ? null
              : E === o("WAWebMediaTypes").MediaDataStage.PREPARING
                ? c.jsx(g, { xstyle: a.xstyle, onClick: a.onClick, theme: y })
                : c.jsx("div", {
                    className: {
                      0: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5 x11xpdln xwtrvjq x1wwv7g1 x1c071of",
                      2: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x11xpdln xwtrvjq x1wwv7g1 x1c071of x1p9lm14 xbmvzin x1t5tj8o x17do96b xuh0odg",
                      1: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5 x11xpdln xwtrvjq x1wwv7g1 x1c071of x1ypdohk",
                      3: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x11xpdln xwtrvjq x1wwv7g1 x1c071of x1p9lm14 xbmvzin x1t5tj8o x17do96b xuh0odg x1ypdohk",
                    }[
                      ((y === "squareThumb" || y === "orderSquareThumb") << 1) |
                        (!!d << 0)
                    ],
                    style: { backgroundImage: "url(" + k + ")" },
                    onClick: d,
                    ref: C,
                  });
          },
          [E, y, d, k, a.xstyle, a.onClick],
        ),
        D = y != null && _.includes(y),
        x = (s || (s = r("stylex")))(
          !D && [
            f.canvasComponent,
            o("WAWebUISpacing").uiMargin.end8,
            o("WAWebUISpacing").uiMargin.bottom8,
          ],
          y === "largeGallerySpacing" && [
            f.canvasComponentLargeGallerySpacing,
            o("WAWebUISpacing").uiMargin.end0,
          ],
          y === "list" && f.list,
          y === "cart-list" && f.cartList,
          y === "viewerFlow" && [
            f.viewerFlow,
            o("WAWebUISpacing").uiMargin.end8,
            o("WAWebUISpacing").uiMargin.bottom0,
            o("WAWebUISpacing").uiMargin.start0,
          ],
          y === "viewerFlow" && S && i !== !0 && f.viewerFlowHoverInactive,
          y === "squareThumb" && [
            f.squareThumb,
            o("WAWebUISpacing").uiMargin.end12,
            o("WAWebUISpacing").uiMargin.bottom0,
          ],
          y === "orderSquareThumb" && [
            f.squareThumb,
            o("WAWebUISpacing").uiMargin.all0,
          ],
          i === !0 && f.active,
          a.xstyle,
        );
      if (a.large)
        return c.jsx("div", { className: "x1n2onr6 x4pkz1m", children: T });
      var $ = c.jsxs("div", {
        ref: n,
        className: x,
        onMouseEnter: R,
        onMouseLeave: L,
        children: [
          c.jsx("div", {
            className:
              "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl xyiheie xeey69f x8li2gs xc363f1 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd xnje7ou xwtrvjq x1wwv7g1",
          }),
          T,
          I,
          l,
        ],
      });
      return D
        ? c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (s || (s = r("stylex"))).props(
                f.listWrapper,
                y === "cart-list" && [
                  f.cartListWrapper,
                  o("WAWebUISpacing").uiMargin.all16,
                ],
              ),
              { children: $ },
            ),
          )
        : $;
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.ProductThumbPlaceholder = g),
      (l.ProductThumb = h));
  },
  98,
);
