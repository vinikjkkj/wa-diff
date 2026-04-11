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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(21),
        n = e.documentData,
        a = n.fileExt,
        i = n.fileName,
        l = n.mimetype,
        c = n.previewUrl,
        d = l === "application/pdf",
        m;
      t[0] !== d || t[1] !== c
        ? ((m =
            d &&
            s.jsx("img", {
              className: "x4mnvg2 x1uuy6ko xaejkm2 x1lliihq xl1xv1r x8ozjh4",
              src: c,
              alt: "",
            })),
          (t[0] = d),
          (t[1] = c),
          (t[2] = m))
        : (m = t[2]);
      var p = a != null ? a : "",
        _;
      t[3] !== l || t[4] !== p
        ? ((_ = s.jsx(r("WAWebDocumentFileIcon"), {
            width: 20,
            mimeType: l,
            ext: p,
          })),
          (t[3] = l),
          (t[4] = p),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "xs83m0k xeuugli x6ikm8r x10wlt62" }), (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] !== i
        ? ((g = s.jsx(
            "div",
            babelHelpers.extends({}, f, {
              children: s.jsx(r("WDSText.react"), {
                maxLines: 1,
                colorName: "contentDefault",
                type: "Body2Emphasized",
                children: i,
              }),
            }),
          )),
          (t[7] = i),
          (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== _ || t[10] !== g
        ? ((h = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 8,
            xstyle: u.fileNameRow,
            children: [_, g],
          })),
          (t[9] = _),
          (t[10] = g),
          (t[11] = h))
        : (h = t[11]);
      var y;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [u.text, r("WAWebL10N").isRTL() && u.textRTL]), (t[12] = y))
        : (y = t[12]);
      var C;
      t[13] !== n
        ? ((C = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: y,
            grow: 1,
            children: s.jsx(
              r("WAWebBizBroadcastsDocumentPreviewMetadata.react"),
              { documentData: n },
            ),
          })),
          (t[13] = n),
          (t[14] = C))
        : (C = t[14]);
      var b;
      t[15] !== h || t[16] !== C
        ? ((b = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.wrapper,
            children: [h, C],
          })),
          (t[15] = h),
          (t[16] = C),
          (t[17] = b))
        : (b = t[17]);
      var v;
      return (
        t[18] !== m || t[19] !== b
          ? ((v = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: u.documentContainer,
              children: [m, b],
            })),
            (t[18] = m),
            (t[19] = b),
            (t[20] = v))
          : (v = t[20]),
        v
      );
    }
    l.default = c;
  },
  98,
);
