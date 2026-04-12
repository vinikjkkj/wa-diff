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
      var t = e.captionInput,
        n = e.documentPageCount,
        a = e.filename,
        i = e.fullPreview,
        l = e.isPasswordProtected,
        d = l === void 0 ? !1 : l,
        m = e.onClose;
      return d === !0
        ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.container,
            align: "center",
            children: [
              u.jsx(r("WAWebFlexItem.react"), {
                xstyle: c.containerElements,
                children: u.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
                  onClose: m,
                  filename: a,
                }),
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
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
                          children: u.jsx(
                            o("WAWebLockIcon.react").LockIcon,
                            {},
                          ),
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
              }),
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: [c.footer, c.containerElements],
                align: "center",
                children: t,
              }),
            ],
          })
        : u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.container,
            align: "center",
            children: [
              u.jsx(r("WAWebFlexItem.react"), {
                xstyle: c.containerElements,
                children: u.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
                  onClose: m,
                  filename: a,
                  pageCount: n,
                }),
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                grow: 1,
                shrink: 1,
                basis: 0,
                align: "center",
                justify: "center",
                xstyle: c.centerArea,
                children: [
                  u.jsx("img", {
                    alt: a,
                    src: i,
                    className:
                      "x193iq5w xmz0i5r x2lwn1j xs83m0k x8jj4xb x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 xyi3aci xwf5gio x1p453bz x1suzm8a xos98db",
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
              }),
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: [c.footer, c.containerElements],
                align: "center",
                children: t,
              }),
            ],
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
