__d(
  "WAWebDocumentFileIconContained.react",
  [
    "WAWebBox.react",
    "WAWebDocumentFileIcon",
    "react",
    "useWAWebDocumentMediaType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        box: {
          width: "x1useyqa",
          height: "xsdox4t",
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          borderTopColor: "x1ekq09l",
          borderInlineEndColor: "xlmuga0",
          borderBottomColor: "x54tcbp",
          borderInlineStartColor: "xlzwp1d",
          borderTopWidth: "xt8cgyo",
          borderInlineEndWidth: "x128c8uf",
          borderBottomWidth: "x1co6499",
          borderInlineStartWidth: "xc5fred",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          alignContent: "xc26acl",
          justifyItems: "x1o2pa38",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        word: { backgroundColor: "x1u08d89", $$css: !0 },
        genericDoc: { backgroundColor: "xn89ywa", $$css: !0 },
        excel: { backgroundColor: "x86yrfc", $$css: !0 },
        genericSpreadsheet: { backgroundColor: "x57541y", $$css: !0 },
        powerpoint: { backgroundColor: "xr0cwbp", $$css: !0 },
        genericPresentation: { backgroundColor: "xj4w6uv", $$css: !0 },
        pdf: { backgroundColor: "x1hu6okh", $$css: !0 },
        flex: { display: "x78zum5", $$css: !0 },
      },
      c = {
        "application/msword": u.word,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          u.genericDoc,
        "text/rtf": u.genericDoc,
        "text/plain": u.genericDoc,
        "application/pdf": u.pdf,
        "application/vnd.ms-excel": u.excel,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          u.genericSpreadsheet,
        "text/csv": u.genericSpreadsheet,
        "application/vnd.ms-powerpoint": u.powerpoint,
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          u.genericPresentation,
        "application/x-iwork-keynote-sffkey": u.genericPresentation,
      };
    function d(e) {
      var t,
        n,
        o,
        a = e.mediaData,
        i = r("useWAWebDocumentMediaType")({
          mimetype: a.mimetype,
          filename: a.filename,
        }),
        l = c[(t = i.mime) != null ? t : ""];
      return s.jsx(r("WAWebBox.react"), {
        xstyle: [u.box, l],
        children: s.jsx(r("WAWebDocumentFileIcon"), {
          fontSize: 6,
          width: 20,
          height: 20,
          xstyle: u.flex,
          mimeType: (n = i.mime) != null ? n : "",
          ext: (o = i.ext) != null ? o : "",
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
