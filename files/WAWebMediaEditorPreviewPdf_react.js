__d(
  "WAWebMediaEditorPreviewPdf.react",
  [
    "WAWebAttachMediaDrawerAttachMediaTypePdf.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebMediaEditorPreviewFile.react",
    "WAWebMediaEditorPreviewHeader.react",
    "WAWebTPPdfViewerGatingUtils",
    "cr:35231",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
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
          marginTop: "x98l61r",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(31),
        a = e.captionInput,
        i = e.documentPageCount,
        l = e.fileExt,
        c = e.filename,
        d = e.fileSize,
        m = e.fullPreview,
        p = e.fullPreviewSize,
        _ = e.isPasswordProtected,
        f = e.mimetype,
        g = e.onClose,
        h = _ === void 0 ? !1 : _,
        y = i > 0,
        C =
          n("cr:35231") != null &&
          o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled();
      if (
        C &&
        (y ||
          (h === !0 &&
            o(
              "WAWebTPPdfViewerGatingUtils",
            ).isWebTPThumbnailAttributionEnabled())) &&
        n("cr:35231") != null
      ) {
        var b;
        return (
          t[0] !== a ||
          t[1] !== i ||
          t[2] !== c ||
          t[3] !== m ||
          t[4] !== h ||
          t[5] !== g
            ? ((b = s.jsx(n("cr:35231"), {
                captionInput: a,
                documentPageCount: i,
                filename: c,
                fullPreview: m,
                isPasswordProtected: h,
                onClose: g,
              })),
              (t[0] = a),
              (t[1] = i),
              (t[2] = c),
              (t[3] = m),
              (t[4] = h),
              (t[5] = g),
              (t[6] = b))
            : (b = t[6]),
          b
        );
      }
      if (!y) {
        var v;
        return (
          t[7] !== a ||
          t[8] !== l ||
          t[9] !== d ||
          t[10] !== c ||
          t[11] !== f ||
          t[12] !== g
            ? ((v = s.jsx(r("WAWebMediaEditorPreviewFile.react"), {
                mimeType: f,
                filesize: d,
                filename: c,
                fileExt: l,
                onClose: g,
                captionInput: a,
              })),
              (t[7] = a),
              (t[8] = l),
              (t[9] = d),
              (t[10] = c),
              (t[11] = f),
              (t[12] = g),
              (t[13] = v))
            : (v = t[13]),
          v
        );
      }
      var S;
      t[14] !== i || t[15] !== c || t[16] !== g
        ? ((S = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: u.containerElements,
            children: s.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
              onClose: g,
              filename: c,
              pageCount: i,
            }),
          })),
          (t[14] = i),
          (t[15] = c),
          (t[16] = g),
          (t[17] = S))
        : (S = t[17]);
      var R;
      t[18] !== i || t[19] !== c || t[20] !== m || t[21] !== p || t[22] !== f
        ? ((R = s.jsx(r("WAWebAttachMediaDrawerAttachMediaTypePdf.react"), {
            fullPreview: m,
            fullPreviewSize: p,
            pageCount: i,
            showPageCount: !1,
            showBorder: !0,
            mimeType: f,
            filename: c,
          })),
          (t[18] = i),
          (t[19] = c),
          (t[20] = m),
          (t[21] = p),
          (t[22] = f),
          (t[23] = R))
        : (R = t[23]);
      var L;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [u.footer, u.containerElements]), (t[24] = L))
        : (L = t[24]);
      var E;
      t[25] !== a
        ? ((E = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: L,
            align: "center",
            children: a,
          })),
          (t[25] = a),
          (t[26] = E))
        : (E = t[26]);
      var k;
      return (
        t[27] !== S || t[28] !== R || t[29] !== E
          ? ((k = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: u.container,
              justify: "all",
              align: "center",
              children: [S, R, E],
            })),
            (t[27] = S),
            (t[28] = R),
            (t[29] = E),
            (t[30] = k))
          : (k = t[30]),
        k
      );
    }
    l.default = c;
  },
  98,
);
