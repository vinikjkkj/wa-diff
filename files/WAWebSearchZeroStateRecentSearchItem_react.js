__d(
  "WAWebSearchZeroStateRecentSearchItem.react",
  [
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebParticipantListUtils",
    "WAWebPrivacyBlurWrapper.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          rowGap: "x1qvou4u",
          width: "xh8yej3",
          maxWidth: "xazcve0",
          cursor: "x1ypdohk",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          backgroundColor: "xjbqb8w",
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        avatarImage: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(29),
        a = t.chat,
        i = t.onClick,
        l = t.onFocus,
        s = t.ref,
        c = t.tabIndex,
        d = p(null),
        f;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            return {
              focus: function () {
                var e;
                (e = d.current) == null || e.focus({ focusVisible: !0 });
              },
            };
          }),
          (n[0] = f))
        : (f = n[0]),
        m(s, f));
      var g;
      n[1] !== i
        ? ((g = function (t) {
            (t.preventDefault(), i());
          }),
          (n[1] = i),
          (n[2] = g))
        : (g = n[2]);
      var h = g,
        y;
      n[3] !== i
        ? ((y = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), i());
          }),
          (n[3] = i),
          (n[4] = y))
        : (y = n[4]);
      var C = y,
        b = a.contact,
        v = a.groupMetadata,
        S;
      if ((v == null ? void 0 : v.isUnnamed) === !0) {
        var R;
        (n[5] !== v
          ? ((R = o(
              "WAWebParticipantListUtils",
            ).calculateUnnamedGroupFullParticipantsList(v, !0)),
            (n[5] = v),
            (n[6] = R))
          : (R = n[6]),
          (S = R));
      } else if (b != null) {
        var L;
        (n[7] !== b
          ? ((L = o("WAWebFrontendContactGetters").getFormattedName(b)),
            (n[7] = b),
            (n[8] = L))
          : (L = n[8]),
          (S = L));
      } else {
        var E;
        S = (E = a.name) != null ? E : "";
      }
      var k;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = (e || (e = r("stylex"))).props(
            _.container,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          (n[9] = k))
        : (k = n[9]);
      var I;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "xh8yej3 x1nb3phe x1plog1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 x1n2onr6",
          }),
          (n[10] = I))
        : (I = n[10]);
      var T;
      n[11] !== a.id
        ? ((T = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            customDimensionsStyle: !0,
            id: a.id,
            loadPicture: !0,
            size: 48,
            waitIdle: !1,
            xstyle: _.avatarImage,
          })),
          (n[11] = a.id),
          (n[12] = T))
        : (T = n[12]);
      var D;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx("div", {
            className:
              "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1c9tyrk xeusxvb x1pahc9y x1ertn4p xt8cgyo x128c8uf x1co6499 xc5fred x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x47corl",
          })),
          (n[13] = D))
        : (D = n[13]);
      var x;
      n[14] !== T
        ? ((x = u.jsxs(
            "div",
            babelHelpers.extends({}, I, { children: [T, D] }),
          )),
          (n[14] = T),
          (n[15] = x))
        : (x = n[15]);
      var $;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = {
            className:
              "x1pg5gke x1d3mw78 xhslqc4 x2b8uid xh8yej3 xazcve0 x6ikm8r x10wlt62 x104kibb x1h7i4cw x1ua5tub x13faqbe x21xpn4",
          }),
          (n[16] = $))
        : ($ = n[16]);
      var P;
      n[17] !== S
        ? ((P = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: S,
          })),
          (n[17] = S),
          (n[18] = P))
        : (P = n[18]);
      var N;
      n[19] !== S || n[20] !== P
        ? ((N = u.jsx(
            "span",
            babelHelpers.extends({}, $, { title: S, children: P }),
          )),
          (n[19] = S),
          (n[20] = P),
          (n[21] = N))
        : (N = n[21]);
      var M;
      return (
        n[22] !== C ||
        n[23] !== h ||
        n[24] !== l ||
        n[25] !== N ||
        n[26] !== x ||
        n[27] !== c
          ? ((M = u.jsx(r("WAWebPrivacyBlurWrapper.react"), {
              containerRef: d,
              children: u.jsxs(
                "button",
                babelHelpers.extends({}, k, {
                  ref: d,
                  onMouseDown: h,
                  onKeyDown: C,
                  onFocus: l,
                  tabIndex: c,
                  "data-testid": void 0,
                  children: [x, N],
                }),
              ),
            })),
            (n[22] = C),
            (n[23] = h),
            (n[24] = l),
            (n[25] = N),
            (n[26] = x),
            (n[27] = c),
            (n[28] = M))
          : (M = n[28]),
        M
      );
    }
    l.default = f;
  },
  98,
);
