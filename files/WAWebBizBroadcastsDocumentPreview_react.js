__d(
  "WAWebBizBroadcastsDocumentPreview.react",
  [
    "WAWebBizBroadcastsDocumentPreviewMetadata.react",
    "WAWebDocumentFileIcon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebL10N",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        documentContainer: {
          alignItems: "x1qjc9v5",
          backgroundColor: "x1bu39yj",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          marginTop: "xav9cv8",
          marginInlineEnd: "x7g7pl8",
          marginBottom: "x4tpdpg",
          marginInlineStart: "x1wbi8v6",
          $$css: !0,
        },
        fileNameRow: {
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          width: "xh8yej3",
          $$css: !0,
        },
        text: { paddingTop: "x1gxa6cn", $$css: !0 },
        textRTL: { textAlign: "xp4054r", $$css: !0 },
        wrapper: {
          minWidth: "xeuugli",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.documentData,
        n = t.fileExt,
        a = t.fileName,
        i = t.mimetype,
        l = t.previewUrl,
        c = i === "application/pdf";
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: u.documentContainer,
        children: [
          c &&
            s.jsx("img", {
              className: "x4mnvg2 x1uuy6ko xaejkm2 x1lliihq xl1xv1r x8ozjh4",
              src: l,
              alt: "",
            }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.wrapper,
            children: [
              s.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 8,
                xstyle: u.fileNameRow,
                children: [
                  s.jsx(r("WAWebDocumentFileIcon"), {
                    width: 20,
                    mimeType: i,
                    ext: n != null ? n : "",
                  }),
                  s.jsx("div", {
                    className: "xs83m0k xeuugli x6ikm8r x10wlt62",
                    children: s.jsx(r("WDSText.react"), {
                      maxLines: 1,
                      colorName: "contentDefault",
                      type: "Body2Emphasized",
                      children: a,
                    }),
                  }),
                ],
              }),
              s.jsx(r("WAWebFlexItem.react"), {
                xstyle: [u.text, r("WAWebL10N").isRTL() && u.textRTL],
                grow: 1,
                children: s.jsx(
                  r("WAWebBizBroadcastsDocumentPreviewMetadata.react"),
                  { documentData: t },
                ),
              }),
            ],
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
