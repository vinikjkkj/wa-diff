__d(
  "WAWebStatusThumbnailForUpdatesTab.react",
  [
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebFrontendStatusGetters",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebStatusGatingUtils",
    "WAWebStatusImageRing.react",
    "WAWebStatusThumbnailComponents.react",
    "WDSFocusStateStyles",
    "WDSVars.stylex",
    "gkx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebIsKeyboardUser",
    "useWAWebStaticButtonA11y",
    "useWAWebStatusValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = 33,
      m = 36,
      p = {
        container: {
          position: "x1n2onr6",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
        thumbSizeLarge: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
        marginTop2: { marginTop: "xfl633f", $$css: !0 },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(36),
        a = t.ariaLabel,
        i = t.id,
        l = t.msg,
        s = t.tabIndex,
        c;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [o("WAWebFrontendStatusGetters").getLastStatus]), (n[0] = c))
        : (c = n[0]);
      var _ = o("useWAWebStatusValues").useStatusValues(i, c),
        f = _[0],
        g;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [o("WAWebContactGetters").getStatusMute]), (n[1] = g))
        : (g = n[1]);
      var h = o("useWAWebContactValues").useContactValues(t.contact.id, g),
        y = h[0],
        C = r("useWAWebIsKeyboardUser")(),
        b = C.isKeyboardUser,
        v = r("useWAWebStaticButtonA11y")(t.onClick),
        S = v[0],
        R = v[1],
        L = l != null ? l : f,
        E;
      e: {
        if (
          !o(
            "WAWebStatusGatingUtils",
          ).isStatusCloseFriendsViewerSideEnabled() ||
          f == null
        ) {
          E = null;
          break e;
        }
        if (f.statusAudienceMetadata != null) {
          E = o("WDSVars.stylex").WDSBaseColor.plum400;
          break e;
        }
        E = null;
      }
      var k = E,
        I;
      n[2] !== L
        ? ((I = function () {
            if (!r("gkx")("26258") && L) {
              var e = o("WAWebStateUtils").unproxy(L);
              window.msg = e;
            }
          }),
          (n[2] = L),
          (n[3] = I))
        : (I = n[3]);
      var T = I,
        D = p.thumbSizeLarge,
        x;
      n[4] !== L
        ? ((x = L ? o("WAWebMsgGetters").getSender(L) : null),
          (n[4] = L),
          (n[5] = x))
        : (x = n[5]);
      var $ = x,
        P;
      n[6] !== $
        ? ((P = $
            ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: $,
                theme: "status",
              })
            : null),
          (n[6] = $),
          (n[7] = P))
        : (P = n[7]);
      var N = P,
        M;
      n[8] !== b
        ? ((M = (e || (e = r("stylex")))(
            p.container,
            D,
            p.marginTop2,
            b && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          (n[8] = b),
          (n[9] = M))
        : (M = n[9]);
      var w = t.role || "",
        A = r("gkx")("26258") ? null : T,
        F;
      n[10] !== t
        ? ((F = function (n) {
            (t.onClick == null || t.onClick(),
              n.stopPropagation(),
              n.preventDefault());
          }),
          (n[10] = t),
          (n[11] = F))
        : (F = n[11]);
      var O;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = {
            className:
              "x1n2onr6 x5yr21d xh8yej3 xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62",
          }),
          (n[12] = O))
        : (O = n[12]);
      var B;
      n[13] !== L || n[14] !== N
        ? ((B = u.jsx(
            o("WAWebStatusThumbnailComponents.react").StatusMsgThumbnail,
            { msg: L, thumbnailPlaceholder: N, size: "large" },
          )),
          (n[13] = L),
          (n[14] = N),
          (n[15] = B))
        : (B = n[15]);
      var W, q;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx("div", {
            className:
              "x10l6tqk x13vifvy x1o0tod xtijo5x xng8ra xgy62qu x12xzxwr xyi3aci xwf5gio x47corl",
          })),
          (q = u.jsx("div", {
            className:
              "x10l6tqk x1ey2m1c x1o0tod xtijo5x xng8ra x12vmko1 x12xzxwr x1suzm8a x1p453bz x47corl",
          })),
          (n[16] = W),
          (n[17] = q))
        : ((W = n[16]), (q = n[17]));
      var U;
      n[18] !== B
        ? ((U = u.jsxs(
            "div",
            babelHelpers.extends({}, O, { children: [B, W, q] }),
          )),
          (n[18] = B),
          (n[19] = U))
        : (U = n[19]);
      var V;
      n[20] !== k || n[21] !== i || n[22] !== $ || n[23] !== y
        ? ((V =
            !y &&
            $ != null &&
            u.jsxs("div", {
              className:
                "x10l6tqk x1atx4j1 xrr41r3 x1oy9qf3 x14qfxbe xc9qbxq x78zum5 x6s0dn4 xl56j7k",
              children: [
                u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
                  id: i,
                  size: m,
                  breakRing: !1,
                  theme: o("WAWebStatusImageRing.react").RingTheme.UpdatesTab,
                  customUnreadRingColor: k,
                }),
                u.jsx("div", {
                  className:
                    "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 x1npj6m0 xojvqvm",
                  children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: $,
                    theme: "status",
                    size: d,
                  }),
                }),
              ],
            })),
          (n[20] = k),
          (n[21] = i),
          (n[22] = $),
          (n[23] = y),
          (n[24] = V))
        : (V = n[24]);
      var H;
      return (
        n[25] !== a ||
        n[26] !== R ||
        n[27] !== S ||
        n[28] !== U ||
        n[29] !== V ||
        n[30] !== M ||
        n[31] !== w ||
        n[32] !== A ||
        n[33] !== F ||
        n[34] !== s
          ? ((H = u.jsxs(
              "div",
              babelHelpers.extends({ ref: S }, R, {
                tabIndex: s,
                className: M,
                "aria-label": a,
                role: w,
                onContextMenu: A,
                onClickCapture: F,
                "data-testid": void 0,
                children: [U, V],
              }),
            )),
            (n[25] = a),
            (n[26] = R),
            (n[27] = S),
            (n[28] = U),
            (n[29] = V),
            (n[30] = M),
            (n[31] = w),
            (n[32] = A),
            (n[33] = F),
            (n[34] = s),
            (n[35] = H))
          : (H = n[35]),
        H
      );
    }
    l.default = _;
  },
  98,
);
