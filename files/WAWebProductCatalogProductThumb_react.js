__d(
  "WAWebProductCatalogProductThumb.react",
  [
    "WAWebMediaTypes",
    "WAWebStorefrontFilledIcon.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(8),
        n = e.onClick,
        a = e.theme,
        i = e.xstyle,
        l;
      t[0] !== n || t[1] !== a || t[2] !== i
        ? ((l = (s || (s = r("stylex"))).props(
            f.mediaCanvas,
            (a === "squareThumb" || a === "orderSquareThumb") &&
              f.squareThumbMediaCanvas,
            f.placeholder,
            !!n && f.mediaCanvasClickable,
            i,
          )),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var u;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = c.jsx(
            o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon,
            { width: 50, height: 50 },
          )),
          (t[4] = u))
        : (u = t[4]);
      var d;
      return (
        t[5] !== n || t[6] !== l
          ? ((d = c.jsx(
              "div",
              babelHelpers.extends({}, l, { onClick: n, children: u }),
            )),
            (t[5] = n),
            (t[6] = l),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function h(t) {
      var n = o("react-compiler-runtime").c(47),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.active,
        d = l.badge,
        m = l.imgRef,
        h = l.onClick,
        y = l.overlayContent,
        C = l.theme,
        b = p(null),
        v;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["mediaStage", "mediaBlob", "renderableUrl", "preview"]),
          (n[3] = v))
        : (v = n[3]);
      var S = o("useWAWebModelValues").useModelValues(a.mediaData, v),
        R = r("useHoverState")(),
        L = R.isHovered,
        E = R.onMouseEnter,
        k = R.onMouseLeave,
        I;
      (n[4] !== m
        ? ((I = {
            onMount: function () {
              m == null || m(b.current);
            },
            onUnmount: function () {
              m == null || m(null);
            },
          }),
          (n[4] = m),
          (n[5] = I))
        : (I = n[5]),
        r("useWAWebRenderCallbacks")(I));
      var T = S.mediaStage,
        D = S.renderableUrl,
        x;
      e: {
        if (T === o("WAWebMediaTypes").MediaDataStage.RESOLVED && y != null) {
          var $;
          n[6] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = {
                className:
                  "x10l6tqk x13vifvy x1o0tod xupqr0c x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x1f6kntn x1xcyms6 x2b8uid xtvhhri x47corl x1y1tjmw x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5",
              }),
              (n[6] = $))
            : ($ = n[6]);
          var P;
          (n[7] !== y
            ? ((P = c.jsx("div", babelHelpers.extends({}, $, { children: y }))),
              (n[7] = y),
              (n[8] = P))
            : (P = n[8]),
            (x = P));
          break e;
        }
        x = null;
      }
      var N = x,
        M;
      e: {
        if (T === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING) {
          M = null;
          break e;
        }
        if (T === o("WAWebMediaTypes").MediaDataStage.PREPARING) {
          var w;
          (n[9] !== a.onClick || n[10] !== a.xstyle || n[11] !== C
            ? ((w = c.jsx(g, {
                xstyle: a.xstyle,
                onClick: a.onClick,
                theme: C,
              })),
              (n[9] = a.onClick),
              (n[10] = a.xstyle),
              (n[11] = C),
              (n[12] = w))
            : (w = n[12]),
            (M = w));
          break e;
        }
        var A;
        n[13] !== h || n[14] !== C
          ? ((A = {
              0: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5 x11xpdln xwtrvjq x1wwv7g1 x1c071of",
              2: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x11xpdln xwtrvjq x1wwv7g1 x1c071of x1p9lm14 xbmvzin x1t5tj8o x17do96b xuh0odg",
              1: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x2yqj0j x1u1eq46 x1fxmhz6 xr2wkf5 x11xpdln xwtrvjq x1wwv7g1 x1c071of x1ypdohk",
              3: "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 xh8yej3 x5yr21d x1xsqp64 x18d0r48 x11xpdln xwtrvjq x1wwv7g1 x1c071of x1p9lm14 xbmvzin x1t5tj8o x17do96b xuh0odg x1ypdohk",
            }[
              ((C === "squareThumb" || C === "orderSquareThumb") << 1) |
                (!!h << 0)
            ]),
            (n[13] = h),
            (n[14] = C),
            (n[15] = A))
          : (A = n[15]);
        var F = "url(" + D + ")",
          O;
        n[16] !== F
          ? ((O = { backgroundImage: F }), (n[16] = F), (n[17] = O))
          : (O = n[17]);
        var B;
        (n[18] !== h || n[19] !== A || n[20] !== O
          ? ((B = c.jsx("div", { className: A, style: O, onClick: h, ref: b })),
            (n[18] = h),
            (n[19] = A),
            (n[20] = O),
            (n[21] = B))
          : (B = n[21]),
          (M = B));
      }
      var W = M,
        q;
      n[22] !== C
        ? ((q = C != null && _.includes(C)), (n[22] = C), (n[23] = q))
        : (q = n[23]);
      var U = q,
        V;
      n[24] !== u ||
      n[25] !== L ||
      n[26] !== U ||
      n[27] !== a.xstyle ||
      n[28] !== C
        ? ((V = (s || (s = r("stylex")))(
            !U && [
              f.canvasComponent,
              o("WAWebUISpacing").uiMargin.end8,
              o("WAWebUISpacing").uiMargin.bottom8,
            ],
            C === "largeGallerySpacing" && [
              f.canvasComponentLargeGallerySpacing,
              o("WAWebUISpacing").uiMargin.end0,
            ],
            C === "list" && f.list,
            C === "cart-list" && f.cartList,
            C === "viewerFlow" && [
              f.viewerFlow,
              o("WAWebUISpacing").uiMargin.end8,
              o("WAWebUISpacing").uiMargin.bottom0,
              o("WAWebUISpacing").uiMargin.start0,
            ],
            C === "viewerFlow" && L && u !== !0 && f.viewerFlowHoverInactive,
            C === "squareThumb" && [
              f.squareThumb,
              o("WAWebUISpacing").uiMargin.end12,
              o("WAWebUISpacing").uiMargin.bottom0,
            ],
            C === "orderSquareThumb" && [
              f.squareThumb,
              o("WAWebUISpacing").uiMargin.all0,
            ],
            u === !0 && f.active,
            a.xstyle,
          )),
          (n[24] = u),
          (n[25] = L),
          (n[26] = U),
          (n[27] = a.xstyle),
          (n[28] = C),
          (n[29] = V))
        : (V = n[29]);
      var H = V;
      if (a.large) {
        var G;
        n[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = { className: "x1n2onr6 x4pkz1m" }), (n[30] = G))
          : (G = n[30]);
        var z;
        return (
          n[31] !== W
            ? ((z = c.jsx("div", babelHelpers.extends({}, G, { children: W }))),
              (n[31] = W),
              (n[32] = z))
            : (z = n[32]),
          z
        );
      }
      var j;
      n[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = c.jsx("div", {
            className:
              "x10l6tqk x13vifvy x1o0tod xhtitgo x9f619 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl xyiheie xeey69f x8li2gs xc363f1 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd xnje7ou xwtrvjq x1wwv7g1",
          })),
          (n[33] = j))
        : (j = n[33]);
      var K;
      n[34] !== d ||
      n[35] !== H ||
      n[36] !== W ||
      n[37] !== E ||
      n[38] !== k ||
      n[39] !== N ||
      n[40] !== i
        ? ((K = c.jsxs("div", {
            ref: i,
            className: H,
            onMouseEnter: E,
            onMouseLeave: k,
            children: [j, W, N, d],
          })),
          (n[34] = d),
          (n[35] = H),
          (n[36] = W),
          (n[37] = E),
          (n[38] = k),
          (n[39] = N),
          (n[40] = i),
          (n[41] = K))
        : (K = n[41]);
      var Q = K;
      if (U) {
        var X;
        n[42] !== C
          ? ((X = (s || (s = r("stylex"))).props(
              f.listWrapper,
              C === "cart-list" && [
                f.cartListWrapper,
                o("WAWebUISpacing").uiMargin.all16,
              ],
            )),
            (n[42] = C),
            (n[43] = X))
          : (X = n[43]);
        var Y;
        return (
          n[44] !== X || n[45] !== Q
            ? ((Y = c.jsx("div", babelHelpers.extends({}, X, { children: Q }))),
              (n[44] = X),
              (n[45] = Q),
              (n[46] = Y))
            : (Y = n[46]),
          Y
        );
      }
      return Q;
    }
    ((l.ProductThumbPlaceholder = g), (l.ProductThumb = h));
  },
  98,
);
