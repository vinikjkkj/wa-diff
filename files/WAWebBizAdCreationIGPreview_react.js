__d(
  "WAWebBizAdCreationIGPreview.react",
  [
    "fbt",
    "BizKitNMEMV4BVerifiedBadge.react",
    "FBNucleusBookmarkOutline24Icon.react",
    "FBNucleusCommentOutline24Icon.react",
    "FBNucleusHeartOutline24Icon.react",
    "FBNucleusSendOutline24Icon.react",
    "WAWebBizAdCreationIGCarouselDotIndicator.react",
    "WAWebBizAdCreationIGPreviewMedia.react",
    "WAWebCallMenuIcon.react",
    "WAWebChevronIcon.react",
    "WAWebDivider.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = 300,
      m = {
        header: { columnGap: "x1s70e7g", $$css: !0 },
        headerContent: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          rowGap: "xm83of2",
          $$css: !0,
        },
        icon: { color: "xhslqc4", $$css: !0 },
        ctaRow: {
          alignItems: "x6s0dn4",
          columnGap: "x1s70e7g",
          justifyContent: "x1qughib",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "x1nzty39",
          $$css: !0,
        },
        chevronIcon: { color: "x14ug900", $$css: !0 },
        interactionButtonsRow: {
          justifyContent: "x1qughib",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        interactionButtonsRowMultiMedia: { paddingTop: "xexx8yu", $$css: !0 },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.businessName,
        a = e.isVerified,
        i = e.profilePictureUrl,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x1xrf6ya xde1mab xscbp6u x1iw51ew" }), (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x2lah0s" }), (t[1] = c))
        : (c = t[1]);
      var d;
      t[2] !== n || t[3] !== i
        ? ((d = u.jsx(
            "div",
            babelHelpers.extends({}, c, {
              children:
                i != null
                  ? u.jsx("img", {
                      className:
                        "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp x100vrsf xl1xv1r",
                      src: i,
                      alt: n,
                    })
                  : u.jsx("div", {
                      className:
                        "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vqgdyp x100vrsf x4wrhlh",
                    }),
            }),
          )),
          (t[2] = n),
          (t[3] = i),
          (t[4] = d))
        : (d = t[4]);
      var p;
      t[5] !== n
        ? ((p = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDefault",
            children: n,
          })),
          (t[5] = n),
          (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== a
        ? ((_ =
            a === !0 &&
            u.jsx(
              o("BizKitNMEMV4BVerifiedBadge.react").BizKitNMEMV4BVerifiedBadge,
              { size: "small", verified: !0 },
            )),
          (t[7] = a),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      t[9] !== p || t[10] !== _
        ? ((f = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 4,
            children: [p, _],
          })),
          (t[9] = p),
          (t[10] = _),
          (t[11] = f))
        : (f = t[11]);
      var g;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "Sponsored"),
          })),
          (t[12] = g))
        : (g = t[12]);
      var h;
      t[13] !== f
        ? ((h = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: m.headerContent,
            align: "start",
            children: [f, g],
          })),
          (t[13] = f),
          (t[14] = h))
        : (h = t[14]);
      var y;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebCallMenuIcon.react").CallMenuIcon, {
            height: 24,
            width: 24,
            iconXstyle: m.icon,
          })),
          (t[15] = y))
        : (y = t[15]);
      var C;
      return (
        t[16] !== d || t[17] !== h
          ? ((C = u.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: m.header,
                  align: "start",
                  children: [d, h, y],
                }),
              }),
            )),
            (t[16] = d),
            (t[17] = h),
            (t[18] = C))
          : (C = t[18]),
        C
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: m.ctaRow,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Send WhatsApp Message"),
                }),
                u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                  height: 20,
                  width: 20,
                  directional: !0,
                  xstyle: m.chevronIcon,
                }),
              ],
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.hasCarousel,
        a = e.medias,
        i = n || (a != null && a.length > 1),
        l = i && m.interactionButtonsRowMultiMedia,
        s;
      t[0] !== l
        ? ((s = [m.interactionButtonsRow, l]), (t[0] = l), (t[1] = s))
        : (s = t[1]);
      var c, d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 20,
            align: "center",
            children: [
              u.jsx("div", {
                className: "x78zum5 x6s0dn4 xl56j7k x1552e4s",
                children: u.jsx(r("FBNucleusHeartOutline24Icon.react"), {}),
              }),
              u.jsx("div", {
                className: "x78zum5 x6s0dn4 xl56j7k x1552e4s",
                children: u.jsx(r("FBNucleusCommentOutline24Icon.react"), {}),
              }),
              u.jsx("div", {
                className: "x78zum5 x6s0dn4 xl56j7k x1552e4s",
                children: u.jsx(r("FBNucleusSendOutline24Icon.react"), {}),
              }),
            ],
          })),
          (d = u.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k x1552e4s",
            children: u.jsx(r("FBNucleusBookmarkOutline24Icon.react"), {}),
          })),
          (t[2] = c),
          (t[3] = d))
        : ((c = t[2]), (d = t[3]));
      var p;
      return (
        t[4] !== s
          ? ((p = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: s,
              children: [c, d],
            })),
            (t[4] = s),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.businessName,
        a = e.description,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "xscbp6u x1iw51ew xde1mab xexx8yu" }), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDefault",
            children: n,
          })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== a || t[4] !== l
          ? ((s = u.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: u.jsxs(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  children: [l, " ", a],
                }),
              }),
            )),
            (t[3] = a),
            (t[4] = l),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function h(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(29),
        i = c(0),
        l = i[0],
        s = i[1],
        d = e.medias != null && e.medias.length > 1,
        m = (t = (n = e.medias) == null ? void 0 : n.length) != null ? t : 0,
        h;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            className:
              "x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta xdqjdmj xvc5jky x11t971q xdzyupr",
          }),
          (a[0] = h))
        : (h = a[0]);
      var y;
      a[1] !== e.businessName ||
      a[2] !== e.isVerified ||
      a[3] !== e.profilePictureUrl
        ? ((y = u.jsx(p, {
            businessName: e.businessName,
            isVerified: e.isVerified,
            profilePictureUrl: e.profilePictureUrl,
          })),
          (a[1] = e.businessName),
          (a[2] = e.isVerified),
          (a[3] = e.profilePictureUrl),
          (a[4] = y))
        : (y = a[4]);
      var C;
      a[5] !== l ||
      a[6] !== e.medias ||
      a[7] !== e.thumbnailUrl ||
      a[8] !== e.videoPosterUrl ||
      a[9] !== e.videoUrl
        ? ((C = u.jsx(
            o("WAWebBizAdCreationIGPreviewMedia.react").MediaPreviewRow,
            {
              currentIndex: l,
              medias: e.medias,
              setCurrentIndex: s,
              thumbnailUrl: e.thumbnailUrl,
              videoUrl: e.videoUrl,
              videoPosterUrl: e.videoPosterUrl,
            },
          )),
          (a[5] = l),
          (a[6] = e.medias),
          (a[7] = e.thumbnailUrl),
          (a[8] = e.videoPosterUrl),
          (a[9] = e.videoUrl),
          (a[10] = C))
        : (C = a[10]);
      var b, v;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(_, {})),
          (v = u.jsx(r("WAWebDivider.react"), { direction: "horizontal" })),
          (a[11] = b),
          (a[12] = v))
        : ((b = a[11]), (v = a[12]));
      var S;
      a[13] !== m || a[14] !== l || a[15] !== d
        ? ((S =
            d &&
            m > 1 &&
            u.jsx(r("WAWebBizAdCreationIGCarouselDotIndicator.react"), {
              currentIndex: l,
              totalCount: m,
            })),
          (a[13] = m),
          (a[14] = l),
          (a[15] = d),
          (a[16] = S))
        : (S = a[16]);
      var R;
      a[17] !== d || a[18] !== e.medias
        ? ((R = u.jsx(f, { hasCarousel: d, medias: e.medias })),
          (a[17] = d),
          (a[18] = e.medias),
          (a[19] = R))
        : (R = a[19]);
      var L;
      a[20] !== e.businessName || a[21] !== e.description
        ? ((L = u.jsx(g, {
            businessName: e.businessName,
            description: e.description,
          })),
          (a[20] = e.businessName),
          (a[21] = e.description),
          (a[22] = L))
        : (L = a[22]);
      var E;
      return (
        a[23] !== y || a[24] !== C || a[25] !== S || a[26] !== R || a[27] !== L
          ? ((E = u.jsxs(
              "div",
              babelHelpers.extends({}, h, { children: [y, C, b, v, S, R, L] }),
            )),
            (a[23] = y),
            (a[24] = C),
            (a[25] = S),
            (a[26] = R),
            (a[27] = L),
            (a[28] = E))
          : (E = a[28]),
        E
      );
    }
    l.default = h;
  },
  226,
);
