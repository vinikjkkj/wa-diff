__d(
  "WAWebMediaPdfDocumentError.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebPdfViewerTestIds",
    "WAWebTPLoggingUtils",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
        textContainer: { maxWidth: "x1j9u4d2", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.filehash,
        a = e.filename,
        i = e.filesize,
        l = e.onDownload,
        d;
      t[0] !== n || t[1] !== i || t[2] !== l
        ? ((d = function (t) {
            (t.stopPropagation(),
              t.preventDefault(),
              o("WAWebTPLoggingUtils").logDownloadDocumentClickEvent(
                "pdf_viewer_error_screen",
                n,
                i,
              ),
              l());
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      t[4] !== a
        ? ((p = u.jsx(r("WDSText.react"), {
            type: "Headline2",
            colorName: "contentDefault",
            maxLines: 2,
            textAlign: "center",
            children: s._(/*BTDS*/ "Failed to open '{filename}'", [
              s._param("filename", a),
            ]),
          })),
          (t[4] = a),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            textAlign: "center",
            children: s._(
              /*BTDS*/ "We couldn't open this file right now. You can download it to view the file instead.",
            ),
          })),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== p
        ? ((f = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            gap: 8,
            xstyle: c.textContainer,
            children: [p, _],
          })),
          (t[7] = p),
          (t[8] = f))
        : (f = t[8]);
      var g;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Download file")), (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] !== m
        ? ((h = u.jsx(r("WDSButton.react"), {
            variant: "filled",
            onPress: m,
            testid: void 0,
            label: g,
          })),
          (t[10] = m),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== f || t[13] !== h
          ? ((y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              testid: void 0,
              align: "center",
              justify: "center",
              gap: 24,
              xstyle: c.container,
              children: [f, h],
            })),
            (t[12] = f),
            (t[13] = h),
            (t[14] = y))
          : (y = t[14]),
        y
      );
    }
    l.default = d;
  },
  226,
);
