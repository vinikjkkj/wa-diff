__d(
  "WAWebBotReelsPluginLinkPreview.react",
  [
    "WABidi",
    "WAWebBaseShimmerComponents.react",
    "WAWebEmojiText.react",
    "WAWebReelPluginVideoIcon.react",
    "WDSHoverStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        reelPluginPreview: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          height: "xe7z42g",
          position: "x1n2onr6",
          cursor: "x1ypdohk",
          borderTopWidth: "xt8cgyo",
          borderInlineEndWidth: "x128c8uf",
          borderBottomWidth: "x1co6499",
          borderInlineStartWidth: "xc5fred",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          $$css: !0,
        },
      };
    function d(e) {
      return e != null && e !== "" ? o("WABidi").dir(e) : void 0;
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(24),
        a = t.botReelPluginThumbnailUrl,
        i = t.reelProfilePictureUrl,
        l = t.title,
        s;
      n[0] !== l ? ((s = d(l)), (n[0] = l), (n[1] = s)) : (s = n[1]);
      var m = s;
      if (a == null) {
        var p;
        return (
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = u.jsx("div", {
                className:
                  "xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 xe7z42g x1n2onr6 x1ypdohk xt8cgyo x128c8uf x1co6499 xc5fred x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9",
                children: u.jsx(
                  o("WAWebBaseShimmerComponents.react").RectangleShimmer,
                  { height: 300, width: 170 },
                ),
              })),
              (n[2] = p))
            : (p = n[2]),
          p
        );
      }
      var _;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex"))).props(
            c.reelPluginPreview,
            o("WDSHoverStateStyles").WDSHoverStateStyles.genericHover,
          )),
          (n[3] = _))
        : (_ = n[3]);
      var f = t.handleClick,
        g = "data:image/jpeg;base64," + a,
        h;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "xh8yej3 x5yr21d xl1xv1r" }), (n[4] = h))
        : (h = n[4]);
      var y;
      n[5] !== g
        ? ((y = u.jsx(
            "img",
            babelHelpers.extends({ "data-testid": void 0, alt: "", src: g }, h),
          )),
          (n[5] = g),
          (n[6] = y))
        : (y = n[6]);
      var C;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx("div", {
            className:
              "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x18k6ek x47corl x1ja2u2z xbyyjgo",
          })),
          (n[7] = C))
        : (C = n[7]);
      var b;
      n[8] !== i
        ? ((b = {
            0: {
              className:
                "x10l6tqk xfr5jun xrotz4w x1awj2ng x1s688f x7yx35o x78zum5 x6s0dn4 x1vjfegm",
            },
            1: {
              className:
                "x10l6tqk xfr5jun xrotz4w x1awj2ng x1s688f x7yx35o x6s0dn4 x1vjfegm x1lliihq",
            },
          }[(i == null) << 0]),
          (n[8] = i),
          (n[9] = b))
        : (b = n[9]);
      var v;
      n[10] !== i
        ? ((v =
            i != null &&
            u.jsx("img", {
              "data-testid": void 0,
              alt: "",
              src: "data:image/jpeg;base64," + i,
              className:
                "xvy4d1p xxk0z11 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xqf2s3x",
            })),
          (n[10] = i),
          (n[11] = v))
        : (v = n[11]);
      var S;
      n[12] !== l || n[13] !== m
        ? ((S = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: l,
            ellipsify: !0,
            breakWord: !0,
            direction: m,
            testid: void 0,
            multiline: !0,
          })),
          (n[12] = l),
          (n[13] = m),
          (n[14] = S))
        : (S = n[14]);
      var R;
      n[15] !== b || n[16] !== v || n[17] !== S
        ? ((R = u.jsxs(
            "div",
            babelHelpers.extends({}, b, { children: [v, S] }),
          )),
          (n[15] = b),
          (n[16] = v),
          (n[17] = S),
          (n[18] = R))
        : (R = n[18]);
      var L;
      n[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx("div", {
            className: "x10l6tqk xqo3gd xrotz4w x1vjfegm",
            children: u.jsx(
              o("WAWebReelPluginVideoIcon.react").ReelPluginVideoIcon,
              {},
            ),
          })),
          (n[19] = L))
        : (L = n[19]);
      var E;
      return (
        n[20] !== t.handleClick || n[21] !== R || n[22] !== y
          ? ((E = u.jsxs(
              "div",
              babelHelpers.extends({}, _, {
                onClick: f,
                children: [y, C, R, L],
              }),
            )),
            (n[20] = t.handleClick),
            (n[21] = R),
            (n[22] = y),
            (n[23] = E))
          : (E = n[23]),
        E
      );
    }
    l.default = m;
  },
  98,
);
