__d(
  "WAWebBotPostCard.react",
  [
    "WAWebBotCardImageUtils",
    "WAWebExternalLink.react",
    "WAWebImg.react",
    "WAWebPsaVerifiedBlueIcon.react",
    "WDSFlex.stylex",
    "WDSIconWdsIcLogoFacebook.react",
    "WDSIconWdsIcLogoInstagram.react",
    "WDSIconWdsIcLogoThreads.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSText.react",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = 300,
      d = 40,
      m = 300,
      p = 24,
      _ = 12,
      f = 16,
      g = 24,
      h = 20,
      y = 3,
      C = 10,
      b = {
        withImage: {
          usernameType: "Body2Emphasized",
          usernameColor: "persistentAlwaysWhite",
          captionColor: "persistentAlwaysWhite",
          captionMaxLines: y,
          sourceAppIconStyle: "footerSourceAppIconOnImage",
        },
        withoutImage: {
          usernameType: "Body2",
          usernameColor: "contentDefault",
          captionColor: "contentDefault",
          captionMaxLines: C,
          sourceAppIconStyle: "footerSourceAppIcon",
        },
      },
      v = { height: p, width: p },
      S = {
        content: {
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
        footerSourceAppIcon: {
          color: "x14ug900",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        footerSourceAppIconOnImage: {
          color: "x17t9dm2",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
      };
    function R(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.sourceApp,
        a = e.xstyle,
        i = n != null ? String(n) : null;
      if (i === "INSTAGRAM") {
        var l;
        return (
          t[0] !== a
            ? ((l = u.jsx(
                r("WDSIconWdsIcLogoInstagram.react"),
                babelHelpers.extends({}, v, { iconXstyle: a }),
              )),
              (t[0] = a),
              (t[1] = l))
            : (l = t[1]),
          l
        );
      }
      if (i === "FACEBOOK") {
        var s;
        return (
          t[2] !== a
            ? ((s = u.jsx(
                r("WDSIconWdsIcLogoFacebook.react"),
                babelHelpers.extends({}, v, { iconXstyle: a }),
              )),
              (t[2] = a),
              (t[3] = s))
            : (s = t[3]),
          s
        );
      }
      if (i === "THREADS") {
        var c;
        return (
          t[4] !== a
            ? ((c = u.jsx(
                r("WDSIconWdsIcLogoThreads.react"),
                babelHelpers.extends({}, v, { iconXstyle: a }),
              )),
              (t[4] = a),
              (t[5] = c))
            : (c = t[5]),
          c
        );
      }
      return null;
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.caption,
        a = e.colorName,
        i = e.maxLines;
      if (!r("isStringNotNullAndNotWhitespaceOnly")(n)) return null;
      var l;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: a,
              maxLines: i,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.hasImage;
      if (n) {
        var a;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { className: "x17t9dm2 x78zum5" }), (t[0] = a))
          : (a = t[0]);
        var i;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = u.jsx(
                "span",
                babelHelpers.extends({}, a, {
                  children: u.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                    height: _,
                    width: _,
                    viewBox: { x: 0, y: 0, width: g, height: g },
                  }),
                }),
              )),
              (t[1] = i))
            : (i = t[1]),
          i
        );
      }
      var l;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsx(
              o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
              {
                height: f,
                width: f,
                viewBox: { x: 0, y: 0, width: h, height: h },
              },
            )),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.hasImage,
        a = e.isVerified,
        i = e.profilePicDataUrl,
        l = e.username,
        s = e.variantConfig,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x6s0dn4 x1s70e7g x78zum5 x1q0g3np x2lah0s x1xrf6ya xde1mab xscbp6u x1iw51ew x1n2onr6 x1vjfegm",
          }),
          (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] !== n
        ? ((d =
            n &&
            u.jsx("div", {
              className:
                "x12hflea x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy x1ja2u2z",
            })),
          (t[1] = n),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== i || t[4] !== l
        ? ((m =
            i != null &&
            u.jsx(r("WAWebImg.react"), {
              alt: l,
              src: o("WAWebBotCardImageUtils").toJpegDataUrl(i),
              className:
                "x1c7u0tx x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x1vqgdyp xl1xv1r x1n2onr6 x100vrsf x1vjfegm",
            })),
          (t[3] = i),
          (t[4] = l),
          (t[5] = m))
        : (m = t[5]);
      var p, _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            className:
              "x78zum5 xdt5ytf x1iyjqo2 xeuugli x1n2onr6 x1b73lln x1vjfegm",
          }),
          (_ = { className: "x6s0dn4 x1trrmfo x78zum5" }),
          (t[6] = p),
          (t[7] = _))
        : ((p = t[6]), (_ = t[7]));
      var f;
      t[8] !== l || t[9] !== s.usernameColor || t[10] !== s.usernameType
        ? ((f = u.jsx(r("WDSText.react"), {
            type: s.usernameType,
            colorName: s.usernameColor,
            maxLines: 1,
            children: l,
          })),
          (t[8] = l),
          (t[9] = s.usernameColor),
          (t[10] = s.usernameType),
          (t[11] = f))
        : (f = t[11]);
      var g;
      t[12] !== n || t[13] !== a
        ? ((g = a === !0 && u.jsx(E, { hasImage: n })),
          (t[12] = n),
          (t[13] = a),
          (t[14] = g))
        : (g = t[14]);
      var h;
      t[15] !== f || t[16] !== g
        ? ((h = u.jsx(
            "div",
            babelHelpers.extends({}, p, {
              children: u.jsxs(
                "div",
                babelHelpers.extends({}, _, { children: [f, g] }),
              ),
            }),
          )),
          (t[15] = f),
          (t[16] = g),
          (t[17] = h))
        : (h = t[17]);
      var y;
      return (
        t[18] !== d || t[19] !== m || t[20] !== h
          ? ((y = u.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [d, m, h] }),
            )),
            (t[18] = d),
            (t[19] = m),
            (t[20] = h),
            (t[21] = y))
          : (y = t[21]),
        y
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.hasImage,
        r = e.postCaption,
        a = e.sourceApp,
        i = e.variantConfig,
        l =
          i.sourceAppIconStyle === "footerSourceAppIconOnImage"
            ? S.footerSourceAppIconOnImage
            : S.footerSourceAppIcon,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = {
            className:
              "x78zum5 xdt5ytf x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1n2onr6 x1qvou4u x1vjfegm",
          }),
          (t[0] = s))
        : (s = t[0]);
      var c;
      t[1] !== n
        ? ((c =
            n &&
            u.jsx("div", {
              className:
                "x1ue4b2t x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy x1ja2u2z",
            })),
          (t[1] = n),
          (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] !== r || t[4] !== i.captionColor || t[5] !== i.captionMaxLines
        ? ((d = u.jsx(L, {
            caption: r,
            colorName: i.captionColor,
            maxLines: i.captionMaxLines,
          })),
          (t[3] = r),
          (t[4] = i.captionColor),
          (t[5] = i.captionMaxLines),
          (t[6] = d))
        : (d = t[6]);
      var m;
      t[7] !== l || t[8] !== a
        ? ((m = a != null && u.jsx(R, { sourceApp: a, xstyle: l })),
          (t[7] = l),
          (t[8] = a),
          (t[9] = m))
        : (m = t[9]);
      var p;
      return (
        t[10] !== c || t[11] !== d || t[12] !== m
          ? ((p = u.jsxs(
              "div",
              babelHelpers.extends({}, s, { children: [c, d, m] }),
            )),
            (t[10] = c),
            (t[11] = d),
            (t[12] = m),
            (t[13] = p))
          : (p = t[13]),
        p
      );
    }
    function T(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.postCaption,
        i = t.variantConfig,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            o("WDSFlex.stylex").wdsFlex.alignStart,
            o("WDSFlex.stylex").wdsFlex.justifyStart,
            S.content,
          )),
          (n[0] = l))
        : (l = n[0]);
      var s;
      return (
        n[1] !== a || n[2] !== i.captionColor || n[3] !== i.captionMaxLines
          ? ((s = u.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: u.jsx(L, {
                  caption: a,
                  colorName: i.captionColor,
                  maxLines: i.captionMaxLines,
                }),
              }),
            )),
            (n[1] = a),
            (n[2] = i.captionColor),
            (n[3] = i.captionMaxLines),
            (n[4] = s))
          : (s = n[4]),
        s
      );
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.isVerified,
        a = e.postCaption,
        i = e.postUrl,
        l = e.profilePictureUrl,
        s = e.sourceApp,
        m = e.thumbnailUrl,
        p = e.username,
        _;
      t[0] !== m
        ? ((_ = { imageUrl: m, width: c, height: c }), (t[0] = m), (t[1] = _))
        : (_ = t[1]);
      var f = o("WAWebBotCardImageUtils").useResizedImage(_),
        g;
      t[2] !== l
        ? ((g = { imageUrl: l, width: d, height: d }), (t[2] = l), (t[3] = g))
        : (g = t[3]);
      var h = o("WAWebBotCardImageUtils").useResizedImage(g),
        y;
      t[4] !== m
        ? ((y = r("isStringNotNullAndNotWhitespaceOnly")(m)),
          (t[4] = m),
          (t[5] = y))
        : (y = t[5]);
      var C = y,
        v = C ? b.withImage : b.withoutImage,
        S;
      t[6] !== i
        ? ((S = function () {
            o("WAWebExternalLink.react").openExternalLink(i);
          }),
          (t[6] = i),
          (t[7] = S))
        : (S = t[7]);
      var R = S,
        L;
      t[8] !== C
        ? ((L = {
            0: {
              className:
                "xlr9sxt xvvg52n xwd4zgb xq8v1ta x1ypdohk x78zum5 xdt5ytf x1qughib x6ikm8r x10wlt62 x1n2onr6 x1hl2dhg xdzyupr x1plog1",
            },
            1: {
              className:
                "xlr9sxt xvvg52n xwd4zgb xq8v1ta x1ypdohk x78zum5 xdt5ytf x1qughib x6ikm8r x10wlt62 x1n2onr6 x1hl2dhg xdzyupr x1plog1 xx42vgk xbogo7e x120ee7l x1vb5itz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4",
            },
          }[!C << 0]),
          (t[8] = C),
          (t[9] = L))
        : (L = t[9]);
      var E;
      t[10] !== C || t[11] !== f
        ? ((E =
            C &&
            f != null &&
            u.jsx(r("WAWebImg.react"), {
              alt: "",
              src: o("WAWebBotCardImageUtils").toJpegDataUrl(f),
              className:
                "x5yr21d x1o0tod xl1xv1r x10l6tqk x13vifvy xh8yej3 x1ja2u2z",
            })),
          (t[10] = C),
          (t[11] = f),
          (t[12] = E))
        : (E = t[12]);
      var D;
      t[13] !== C || t[14] !== n || t[15] !== h || t[16] !== p || t[17] !== v
        ? ((D = u.jsx(k, {
            hasImage: C,
            isVerified: n,
            profilePicDataUrl: h,
            username: p,
            variantConfig: v,
          })),
          (t[13] = C),
          (t[14] = n),
          (t[15] = h),
          (t[16] = p),
          (t[17] = v),
          (t[18] = D))
        : (D = t[18]);
      var x;
      t[19] !== C || t[20] !== a || t[21] !== s || t[22] !== v
        ? ((x = C
            ? u.jsx(I, {
                hasImage: C,
                postCaption: a,
                sourceApp: s,
                variantConfig: v,
              })
            : u.jsxs(u.Fragment, {
                children: [
                  u.jsx(T, { postCaption: a, variantConfig: v }),
                  s != null &&
                    u.jsx(I, {
                      hasImage: C,
                      postCaption: null,
                      sourceApp: s,
                      variantConfig: v,
                    }),
                ],
              })),
          (t[19] = C),
          (t[20] = a),
          (t[21] = s),
          (t[22] = v),
          (t[23] = x))
        : (x = t[23]);
      var $;
      return (
        t[24] !== R || t[25] !== L || t[26] !== E || t[27] !== D || t[28] !== x
          ? (($ = u.jsxs(
              "div",
              babelHelpers.extends({ onClick: R }, L, { children: [E, D, x] }),
            )),
            (t[24] = R),
            (t[25] = L),
            (t[26] = E),
            (t[27] = D),
            (t[28] = x),
            (t[29] = $))
          : ($ = t[29]),
        $
      );
    }
    l.default = D;
  },
  98,
);
