__d(
  "WAWebBizBroadcastsMessageSectionDocumentPreview.react",
  [
    "WAWebBizBroadcastMessageAttachmentSection.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebFlex.react",
    "WAWebMediaEditorPreviewFile.react",
    "WAWebMediaEditorPreviewPdf.react",
    "WAWebMimeTypes",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        documentModalContainer: {
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          height: "x1097qzo",
          insetInlineStart: "xbudbmw",
          left: null,
          right: null,
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x11lhmoz",
          width: "x1lh4fz6",
          zIndex: "xbpklzw",
          $$css: !0,
        },
        documentModalFooter: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexBasis: "x1helyrv",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          justifyContent: "x13a6bvl",
          marginInlineEnd: "x7vsco6",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.onClose,
        n = e.onRemoveMedia,
        a = e.selectedDocumentData;
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: u.documentModalContainer,
        children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
          grow: 1,
          className:
            "x1280gxy x1vb5itz x1t7ytsu xpilrb4 xhslqc4 x1r8uery x1iyjqo2 xs83m0k x5yr21d x1bifzbx x1htk8sl xh8yej3",
          align: "stretch",
          children: [
            o("WAWebMimeTypes").previewType(a.mimetype) === "pdf"
              ? s.jsx(r("WAWebMediaEditorPreviewPdf.react"), {
                  captionInput: o(
                    "WAWebBizBroadcastMessageAttachmentSection.react",
                  ).renderEmptyCaptionInput(),
                  documentPageCount: a.pageCount,
                  fileSize: a.fileSize,
                  filename: a.fileName,
                  fileExt: a.fileExt,
                  fullPreview: a.previewUrl,
                  fullPreviewSize: a.previewSize,
                  mimetype: a.mimetype,
                  onClose: t,
                })
              : s.jsx(r("WAWebMediaEditorPreviewFile.react"), {
                  mimeType: a.mimetype,
                  filesize: a.fileSize,
                  filename: a.fileName,
                  fileExt: a.fileExt,
                  onClose: t,
                  captionInput: o(
                    "WAWebBizBroadcastMessageAttachmentSection.react",
                  ).renderEmptyCaptionInput(),
                }),
            s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: u.documentModalFooter,
              children: s.jsx(r("WDSButton.react"), {
                variant: "outline",
                size: "medium",
                type: "destructive",
                label: o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getDocumentPreviewRemoveDocumentLabel(),
                onPress: function () {
                  (n(), t());
                },
              }),
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
