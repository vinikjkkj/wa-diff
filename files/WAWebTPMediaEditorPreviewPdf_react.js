__d(
  "WAWebTPMediaEditorPreviewPdf.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLockIcon.react",
    "WAWebMediaEditorPreviewHeader.react",
    "WAWebPdfViewerTestIds",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPoweredByLoadable",
    "WDSText.react",
    "justknobx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          position: "x1n2onr6",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          height: "x5yr21d",
          $$css: !0,
        },
        containerElements: { width: "xh8yej3", $$css: !0 },
        footer: {
          position: "x1n2onr6",
          minHeight: "xbktkl8",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
        centerArea: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          width: "xh8yej3",
          paddingTop: "x1h678fw",
          paddingInlineEnd: "xcldk2z",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "x1phvje8",
          boxSizing: "x9f619",
          $$css: !0,
        },
        passwordProtectedContainer: {
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
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          boxSizing: "x9f619",
          width: "xafpxmx",
          height: "xu3xrit",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.captionInput,
        a = e.documentPageCount,
        i = e.filename,
        l = e.fullPreview,
        d = e.isPasswordProtected,
        m = e.onClose,
        p = d === void 0 ? !1 : d;
      if (p === !0) {
        var _;
        t[0] !== i || t[1] !== m
          ? ((_ = u.jsx(r("WAWebFlexItem.react"), {
              xstyle: c.containerElements,
              children: u.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
                onClose: m,
                filename: i,
              }),
            })),
            (t[0] = i),
            (t[1] = m),
            (t[2] = _))
          : (_ = t[2]);
        var f;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              grow: 1,
              shrink: 1,
              basis: 0,
              align: "center",
              justify: "center",
              children: [
                r("justknobx")._("4390") &&
                  o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPThumbnailAttributionEnabled() &&
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: c.passwordProtectedContainer,
                    align: "center",
                    justify: "center",
                    children: [
                      u.jsx("div", {
                        "data-testid": void 0,
                        className: "x18cpw0e xefnzgg",
                        children: u.jsx(o("WAWebLockIcon.react").LockIcon, {}),
                      }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDisabled",
                        children: s._(/*BTDS*/ "Password protected"),
                      }),
                    ],
                  }),
                r("justknobx")._("2389") &&
                  o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPThumbnailAttributionEnabled() &&
                  u.jsx("div", {
                    className: "x1de0gy xdqhqc9 x2lah0s",
                    children: u.jsx(r("WAWebTPPoweredByLoadable"), {
                      persistent: !0,
                      position: "center",
                    }),
                  }),
              ],
            })),
            (t[3] = f))
          : (f = t[3]);
        var g;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = [c.footer, c.containerElements]), (t[4] = g))
          : (g = t[4]);
        var h;
        t[5] !== n
          ? ((h = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: g,
              align: "center",
              children: n,
            })),
            (t[5] = n),
            (t[6] = h))
          : (h = t[6]);
        var y;
        return (
          t[7] !== _ || t[8] !== h
            ? ((y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: c.container,
                align: "center",
                children: [_, f, h],
              })),
              (t[7] = _),
              (t[8] = h),
              (t[9] = y))
            : (y = t[9]),
          y
        );
      }
      var C;
      t[10] !== a || t[11] !== i || t[12] !== m
        ? ((C = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.containerElements,
            children: u.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
              onClose: m,
              filename: i,
              pageCount: a,
            }),
          })),
          (t[10] = a),
          (t[11] = i),
          (t[12] = m),
          (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            className:
              "x193iq5w xmz0i5r x2lwn1j xs83m0k x8jj4xb x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xyi3aci xwf5gio x1p453bz x1suzm8a xos98db",
          }),
          (t[14] = b))
        : (b = t[14]);
      var v;
      t[15] !== i || t[16] !== l
        ? ((v = u.jsx("img", babelHelpers.extends({ alt: i, src: l }, b))),
          (t[15] = i),
          (t[16] = l),
          (t[17] = v))
        : (v = t[17]);
      var S;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((S =
            r("justknobx")._("2389") &&
            o(
              "WAWebTPPdfViewerGatingUtils",
            ).isWebTPThumbnailAttributionEnabled() &&
            u.jsx("div", {
              className: "x1de0gy xdqhqc9 x2lah0s",
              children: u.jsx(r("WAWebTPPoweredByLoadable"), {
                persistent: !0,
                position: "center",
              }),
            })),
          (t[18] = S))
        : (S = t[18]);
      var R;
      t[19] !== v
        ? ((R = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            shrink: 1,
            basis: 0,
            align: "center",
            justify: "center",
            xstyle: c.centerArea,
            children: [v, S],
          })),
          (t[19] = v),
          (t[20] = R))
        : (R = t[20]);
      var L;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [c.footer, c.containerElements]), (t[21] = L))
        : (L = t[21]);
      var E;
      t[22] !== n
        ? ((E = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: L,
            align: "center",
            children: n,
          })),
          (t[22] = n),
          (t[23] = E))
        : (E = t[23]);
      var k;
      return (
        t[24] !== C || t[25] !== R || t[26] !== E
          ? ((k = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: c.container,
              align: "center",
              children: [C, R, E],
            })),
            (t[24] = C),
            (t[25] = R),
            (t[26] = E),
            (t[27] = k))
          : (k = t[27]),
        k
      );
    }
    l.default = d;
  },
  226,
);
