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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        n = e.onClose,
        a = e.onRemoveMedia,
        i = e.selectedDocumentData,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l =
            "x1280gxy x1vb5itz x1t7ytsu xpilrb4 xhslqc4 x1r8uery x1iyjqo2 xs83m0k x5yr21d x1bifzbx x1htk8sl xh8yej3"),
          (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] !== n ||
      t[2] !== i.fileExt ||
      t[3] !== i.fileName ||
      t[4] !== i.fileSize ||
      t[5] !== i.mimetype ||
      t[6] !== i.pageCount ||
      t[7] !== i.previewSize ||
      t[8] !== i.previewUrl
        ? ((c =
            o("WAWebMimeTypes").previewType(i.mimetype) === "pdf"
              ? s.jsx(r("WAWebMediaEditorPreviewPdf.react"), {
                  captionInput: o(
                    "WAWebBizBroadcastMessageAttachmentSection.react",
                  ).renderEmptyCaptionInput(),
                  documentPageCount: i.pageCount,
                  fileSize: i.fileSize,
                  filename: i.fileName,
                  fileExt: i.fileExt,
                  fullPreview: i.previewUrl,
                  fullPreviewSize: i.previewSize,
                  mimetype: i.mimetype,
                  onClose: n,
                })
              : s.jsx(r("WAWebMediaEditorPreviewFile.react"), {
                  mimeType: i.mimetype,
                  filesize: i.fileSize,
                  filename: i.fileName,
                  fileExt: i.fileExt,
                  onClose: n,
                  captionInput: o(
                    "WAWebBizBroadcastMessageAttachmentSection.react",
                  ).renderEmptyCaptionInput(),
                })),
          (t[1] = n),
          (t[2] = i.fileExt),
          (t[3] = i.fileName),
          (t[4] = i.fileSize),
          (t[5] = i.mimetype),
          (t[6] = i.pageCount),
          (t[7] = i.previewSize),
          (t[8] = i.previewUrl),
          (t[9] = c))
        : (c = t[9]);
      var d;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getDocumentPreviewRemoveDocumentLabel()),
          (t[10] = d))
        : (d = t[10]);
      var m;
      t[11] !== n || t[12] !== a
        ? ((m = s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: u.documentModalFooter,
            children: s.jsx(r("WDSButton.react"), {
              variant: "outline",
              size: "medium",
              type: "destructive",
              label: d,
              onPress: function () {
                (a(), n());
              },
            }),
          })),
          (t[11] = n),
          (t[12] = a),
          (t[13] = m))
        : (m = t[13]);
      var p;
      return (
        t[14] !== c || t[15] !== m
          ? ((p = s.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: u.documentModalContainer,
              children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
                grow: 1,
                className: l,
                align: "stretch",
                children: [c, m],
              }),
            })),
            (t[14] = c),
            (t[15] = m),
            (t[16] = p))
          : (p = t[16]),
        p
      );
    }
    l.default = c;
  },
  98,
);
