__d(
  "WAWebBizCtwaAdPreview.react",
  [
    "WABidi",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaThumbnailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFlexBox.react",
    "WAWebFlexItem.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useMemo,
      p = {
        adContainer: {
          borderStartStartRadius: "x1rgw4pv",
          borderStartEndRadius: "x1vjm0to",
          borderEndEndRadius: "xnqoqkk",
          borderEndStartRadius: "x16lu3ki",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1wpzk8y",
          borderInlineEndColor: "xts9ub1",
          borderBottomColor: "xhl97hz",
          borderInlineStartColor: "x16gmtct",
          $$css: !0,
        },
        thumbnail: {
          objectFit: "xl1xv1r",
          width: "xh8yej3",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexShrink: "x2lah0s",
          minHeight: "x16ctwrx",
          $$css: !0,
        },
        container: { width: "x1t0p1hu", $$css: !0 },
        body: {
          marginInlineStart: "x1o1p3th",
          marginInlineEnd: "x1trhqq4",
          $$css: !0,
        },
      },
      _ = 1e3;
    function f(t) {
      var n = o("react-compiler-runtime").c(48),
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
        s = l.automatedGreetingMessage,
        c = l.ctwaContext,
        d = l.onClose,
        m = r("useWAWebUIM")(),
        f;
      if (n[3] !== c) {
        var g;
        ((f =
          (g = c.sourceApp) != null
            ? g
            : o("WAWebBizCtwaAGMUtils").getHostnameLabel(c)),
          (n[3] = c),
          (n[4] = f));
      } else f = n[4];
      var h = f,
        y;
      n[5] !== h
        ? ((y = h != null ? h.charAt(0).toUpperCase() + h.slice(1) : null),
          (n[5] = h),
          (n[6] = y))
        : (y = n[6]);
      var C = y,
        b;
      n[7] !== d || n[8] !== m
        ? ((b = function () {
            (d(), m == null || m.requestDismiss());
          }),
          (n[7] = d),
          (n[8] = m),
          (n[9] = b))
        : (b = n[9]);
      var v = b,
        S;
      n[10] !== C || n[11] !== v
        ? ((S =
            C != null
              ? u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title: o("WAWebBizCtwaAGMUtils").getAdSourceLabel(C),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                  onCancel: v,
                  focusBackOrCancel: !0,
                })
              : null),
          (n[10] = C),
          (n[11] = v),
          (n[12] = S))
        : (S = n[12]);
      var R = S,
        L;
      n[13] !== C
        ? ((L =
            C != null
              ? o("WAWebBizCtwaAGMUtils").getAdImageAlt(C).toString()
              : ""),
          (n[13] = C),
          (n[14] = L))
        : (L = n[14]);
      var E = L,
        k;
      e: {
        if (c.description != null && c.isSuspiciousLink !== !0) {
          var I = c.description,
            T;
          n[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = u.jsx("div", { className: "xso031l x1q0q8m5 xhl97hz" })),
              (n[15] = T))
            : (T = n[15]);
          var D = c.description,
            x;
          n[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = {
                className:
                  "x1cy8zhl xkh2ocl x1y1aw1k xf159sx xwib8y2 xmzvs34 x1mzt3pk x126k92a",
              }),
              (n[16] = x))
            : (x = n[16]);
          var $;
          n[17] !== I
            ? (($ = o("WABidi").dir(I)), (n[17] = I), (n[18] = $))
            : ($ = n[18]);
          var P;
          n[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = r("WAWebL10N").isRTL()), (n[19] = P))
            : (P = n[19]);
          var N = ($ === "rtl") !== P,
            M;
          n[20] !== I
            ? ((M = o("WABidi").dir(I)), (n[20] = I), (n[21] = M))
            : (M = n[21]);
          var w;
          n[22] !== I || n[23] !== N || n[24] !== M
            ? ((w = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: I,
                textLimit: _,
                dirMismatch: N,
                direction: M,
                inferLinesDirection: !0,
              })),
              (n[22] = I),
              (n[23] = N),
              (n[24] = M),
              (n[25] = w))
            : (w = n[25]);
          var A;
          (n[26] !== c.description || n[27] !== w
            ? ((A = u.jsxs(u.Fragment, {
                children: [
                  T,
                  u.jsx(
                    "div",
                    babelHelpers.extends({ title: D }, x, { children: w }),
                  ),
                ],
              })),
              (n[26] = c.description),
              (n[27] = w),
              (n[28] = A))
            : (A = n[28]),
            (k = A));
          break e;
        }
        k = null;
      }
      var F = k,
        O;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = [
            p.container,
            o("WAWebUISpacing").uiPadding.vert48,
            o("WAWebUISpacing").uiPadding.horiz48,
          ]),
          (n[29] = O))
        : (O = n[29]);
      var B;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = [o("WAWebUISpacing").uiPadding.horiz20, p.container]),
          (n[30] = B))
        : (B = n[30]);
      var W = s.from,
        q;
      n[31] !== s
        ? ((q = o("WAWebMsgGetters").getIsSentByMe(s)),
          (n[31] = s),
          (n[32] = q))
        : (q = n[32]);
      var U;
      n[33] !== s.from || n[34] !== c || n[35] !== q || n[36] !== E
        ? ((U = u.jsx(r("WAWebBizCtwaThumbnailImage.react"), {
            context: c,
            xstyle: p.thumbnail,
            alt: E,
            businessWid: W,
            fromMe: q,
          })),
          (n[33] = s.from),
          (n[34] = c),
          (n[35] = q),
          (n[36] = E),
          (n[37] = U))
        : (U = n[37]);
      var V;
      n[38] !== F || n[39] !== U
        ? ((V = u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "padding-no-margin",
            xstyle: O,
            children: u.jsx(r("WAWebFlexItem.react"), {
              justify: "center",
              xstyle: B,
              children: u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                justify: "center",
                xstyle: p.adContainer,
                testid: void 0,
                children: [U, F],
              }),
            }),
          })),
          (n[38] = F),
          (n[39] = U),
          (n[40] = V))
        : (V = n[40]);
      var H;
      n[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = u.jsx(r("WAWebGroupInfoSeparator.react"), {})), (n[41] = H))
        : (H = n[41]);
      var G;
      n[42] !== V
        ? ((G = u.jsxs(r("WAWebDrawerBody.react"), {
            xstyle: p.body,
            children: [V, H],
          })),
          (n[42] = V),
          (n[43] = G))
        : (G = n[43]);
      var z;
      return (
        n[44] !== R || n[45] !== i || n[46] !== G
          ? ((z = u.jsxs(
              r("WAWebDrawer.react"),
              {
                theme: "striped",
                ref: i,
                xstyle: o("WAWebUISpacing").uiPadding.horiz0,
                testid: void 0,
                children: [R, G],
              },
              "ctwa-ad-details-modal",
            )),
            (n[44] = R),
            (n[45] = i),
            (n[46] = G),
            (n[47] = z))
          : (z = n[47]),
        z
      );
    }
    l.default = f;
  },
  98,
);
