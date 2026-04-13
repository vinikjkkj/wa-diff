__d(
  "WAWebGifPanelGifPreview.react",
  [
    "WAAbortError",
    "WAWebChatPreferenceCollection",
    "WAWebNoop",
    "WAWebStarIcon.react",
    "WAWebUA",
    "WAWebUnstyledButton.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = {
        preview: {
          position: "x1n2onr6",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          alignItems: "xuk3077",
          justifyContent: "xl56j7k",
          height: "x129qt2x",
          marginInlineEnd: "x1bz82a1 x1j53mea",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          cursor: "x1ypdohk",
          backgroundColor: "x1280gxy",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "xl8et2f",
          borderInlineEndWidth: "xuc0g9m",
          borderBottomWidth: "x1dmim90",
          borderInlineStartWidth: "xs4xcjr",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          ":focus-visible_borderTopColor": "x1878o1q",
          ":focus-visible_borderInlineEndColor": "xf2y0h5",
          ":focus-visible_borderBottomColor": "xnv9r3m",
          ":focus-visible_borderInlineStartColor": "xo81p9n",
          $$css: !0,
        },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(49),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.gif,
        s = i.onSend,
        c = p(null),
        g = p(null),
        y = _(!1),
        C = y[0],
        b = y[1],
        v = _(!1),
        S = v[0],
        R = v[1],
        L,
        E;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = r("WAWebChatPreferenceCollection").getDefault()),
          (E = ["autoplayAnimatedImages"]),
          (n[0] = L),
          (n[1] = E))
        : ((L = n[0]), (E = n[1]));
      var k = o("useWAWebModelValues").useModelValues(L, E),
        I,
        T;
      (n[2] !== C || n[3] !== k.autoplayAnimatedImages
        ? ((I = function () {
            c.current != null &&
              (k.autoplayAnimatedImages === !1
                ? c.current.pause()
                : C
                  ? c.current.paused &&
                    c.current
                      .play()
                      .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                  : c.current.paused ||
                    (c.current.pause(),
                    c.current && (c.current.currentTime = 0)));
          }),
          (T = [C, k.autoplayAnimatedImages]),
          (n[2] = C),
          (n[3] = k.autoplayAnimatedImages),
          (n[4] = I),
          (n[5] = T))
        : ((I = n[4]), (T = n[5])),
        d(I, T));
      var D;
      n[6] !== C || n[7] !== k.autoplayAnimatedImages || n[8] !== S
        ? ((D = function (t) {
            if (k.autoplayAnimatedImages === !1) {
              (b(!1), R(!0));
              return;
            }
            (C !== t || !S) && (b(t), R(!0));
          }),
          (n[6] = C),
          (n[7] = k.autoplayAnimatedImages),
          (n[8] = S),
          (n[9] = D))
        : (D = n[9]);
      var x = D,
        $ = function () {
          s(l);
        },
        P;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function (t) {
            g.current = t;
          }),
          (n[10] = P))
        : (P = n[10]);
      var N = P,
        M = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            i.onRowActivate == null || i.onRowActivate());
        },
        w = function () {
          i.onRowActivate == null || i.onRowActivate();
        },
        A = h,
        F;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function () {
            return g.current;
          }),
          (n[11] = F))
        : (F = n[11]);
      var O = F,
        B;
      (n[12] !== x
        ? ((B = function () {
            return { setShouldAnimate: x, getElement: O };
          }),
          (n[12] = x),
          (n[13] = B))
        : (B = n[13]),
        m(a, B));
      var W = null;
      if (S)
        if (
          o("WAWebUA").UA.troublesWithLotsOfVideos &&
          !r("isStringNullOrEmpty")(l.nonVideoUrl)
        ) {
          var q;
          n[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" }),
              (n[14] = q))
            : (q = n[14]);
          var U;
          (n[15] !== l.nonVideoUrl || n[16] !== $
            ? ((U = u.jsx(
                "img",
                babelHelpers.extends({}, q, { onClick: $, src: l.nonVideoUrl }),
              )),
              (n[15] = l.nonVideoUrl),
              (n[16] = $),
              (n[17] = U))
            : (U = n[17]),
            (W = U));
        } else {
          var V;
          n[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((V = { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" }),
              (n[18] = V))
            : (V = n[18]);
          var H;
          (n[19] !== C || n[20] !== l.previewUrl || n[21] !== $
            ? ((H = u.jsx(
                "video",
                babelHelpers.extends({}, V, {
                  onClick: $,
                  controls: !1,
                  autoPlay: C,
                  loop: !0,
                  muted: !0,
                  ref: c,
                  src: l.previewUrl,
                }),
              )),
              (n[19] = C),
              (n[20] = l.previewUrl),
              (n[21] = $),
              (n[22] = H))
            : (H = n[22]),
            (W = H));
        }
      var G;
      if (i.isStarred === !0 && i.onUnstarMsg) {
        var z;
        n[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = { className: "x10l6tqk x1ro0b6g xy1j3rs x1rozsjd x17t9dm2" }),
            (n[23] = z))
          : (z = n[23]);
        var j;
        n[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = u.jsx(o("WAWebStarIcon.react").StarIcon, {})), (n[24] = j))
          : (j = n[24]);
        var K;
        (n[25] !== i.onUnstarMsg
          ? ((K = u.jsx(
              "button",
              babelHelpers.extends({}, z, {
                onClick: i.onUnstarMsg,
                children: j,
              }),
            )),
            (n[25] = i.onUnstarMsg),
            (n[26] = K))
          : (K = n[26]),
          (G = K));
      }
      var Q;
      n[27] !== l.accessibilityLabel
        ? ((Q =
            l.accessibilityLabel != null
              ? { "aria-label": l.accessibilityLabel }
              : {}),
          (n[27] = l.accessibilityLabel),
          (n[28] = Q))
        : (Q = n[28]);
      var X = Q,
        Y;
      n[29] !== l.widthStr
        ? ((Y = { width: l.widthStr }), (n[29] = l.widthStr), (n[30] = Y))
        : (Y = n[30]);
      var J;
      n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = "x1iyjqo2 x2lah0s"), (n[31] = J))
        : (J = n[31]);
      var Z;
      n[32] !== l.ratioStr
        ? ((Z = { paddingBottom: l.ratioStr }),
          (n[32] = l.ratioStr),
          (n[33] = Z))
        : (Z = n[33]);
      var ee;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = "x1n2onr6 xh8yej3"), (n[34] = ee))
        : (ee = n[34]);
      var te;
      n[35] !== Z || n[36] !== W
        ? ((te = u.jsx("div", { style: Z, className: ee, children: W })),
          (n[35] = Z),
          (n[36] = W),
          (n[37] = te))
        : (te = n[37]);
      var ne;
      n[38] !== Y || n[39] !== te
        ? ((ne = u.jsx("div", { style: Y, className: J, children: te })),
          (n[38] = Y),
          (n[39] = te),
          (n[40] = ne))
        : (ne = n[40]);
      var re;
      return (
        n[41] !== X ||
        n[42] !== A ||
        n[43] !== M ||
        n[44] !== w ||
        n[45] !== N ||
        n[46] !== G ||
        n[47] !== ne
          ? ((re = u.jsxs(
              r("WAWebUnstyledButton.react"),
              babelHelpers.extends(
                {
                  ref: N,
                  testid: void 0,
                  xstyle: f.preview,
                  tabIndex: -1,
                  onFocus: M,
                  onBlur: A,
                  onMouseEnter: w,
                },
                X,
                { children: [ne, G] },
              ),
            )),
            (n[41] = X),
            (n[42] = A),
            (n[43] = M),
            (n[44] = w),
            (n[45] = N),
            (n[46] = G),
            (n[47] = ne),
            (n[48] = re))
          : (re = n[48]),
        re
      );
    }
    function h(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    var y = g;
    l.GifPreview = y;
  },
  98,
);
