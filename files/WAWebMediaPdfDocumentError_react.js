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
      var t = e.filehash,
        n = e.filename,
        a = e.filesize,
        i = e.onDownload,
        l = function (n) {
          (n.stopPropagation(),
            n.preventDefault(),
            o("WAWebTPLoggingUtils").logDownloadDocumentClickEvent(
              "pdf_viewer_error_screen",
              t,
              a,
            ),
            i());
        };
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        testid: void 0,
        align: "center",
        justify: "center",
        gap: 24,
        xstyle: c.container,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            gap: 8,
            xstyle: c.textContainer,
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Headline2",
                colorName: "contentDefault",
                maxLines: 2,
                textAlign: "center",
                children: s._(/*BTDS*/ "Failed to open '{filename}'", [
                  s._param("filename", n),
                ]),
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                textAlign: "center",
                children: s._(
                  /*BTDS*/ "We couldn't open this file right now. You can download it to view the file instead.",
                ),
              }),
            ],
          }),
          u.jsx(r("WDSButton.react"), {
            variant: "filled",
            onPress: l,
            testid: void 0,
            label: s._(/*BTDS*/ "Download file"),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
