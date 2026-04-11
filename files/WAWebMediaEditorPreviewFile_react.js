__d(
  "WAWebMediaEditorPreviewFile.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebL10nFilesize",
    "WAWebMediaEditorPreviewHeader.react",
    "WAWebMediaEditorPreviewStyles",
    "WAWebPreviewAudioIcon.react",
    "WAWebPreviewCompressedIcon.react",
    "WAWebPreviewDocIcon.react",
    "WAWebPreviewGenericIcon.react",
    "WAWebPreviewSheetIcon.react",
    "WAWebPreviewSlidesIcon.react",
    "WAWebPreviewTxtIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { body: { flexGrow: "x1iyjqo2", width: "xh8yej3", $$css: !0 } };
    function m(e) {
      switch (e) {
        case "text/plain":
          return c.jsx(o("WAWebPreviewTxtIcon.react").PreviewTxtIcon, {});
        case "text/rtf":
        case "application/msword":
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          return c.jsx(o("WAWebPreviewDocIcon.react").PreviewDocIcon, {});
        case "text/csv":
        case "application/vnd.ms-excel":
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          return c.jsx(o("WAWebPreviewSheetIcon.react").PreviewSheetIcon, {});
        case "application/vnd.ms-powerpoint":
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          return c.jsx(o("WAWebPreviewSlidesIcon.react").PreviewSlidesIcon, {});
        case "audio/aac":
        case "audio/mp4":
        case "audio/amr":
        case "audio/mpeg":
        case "audio/ogg; codecs=opus":
        case "audio/wav":
          return c.jsx(o("WAWebPreviewAudioIcon.react").PreviewAudioIcon, {});
        case "application/zip":
          return c.jsx(
            o("WAWebPreviewCompressedIcon.react").PreviewCompressedIcon,
            {},
          );
        default:
          return c.jsx(
            o("WAWebPreviewGenericIcon.react").PreviewGenericIcon,
            {},
          );
      }
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(29),
        a = t.captionInput,
        i = t.fileExt,
        l = t.filename,
        u = t.filesize,
        p = t.mimeType,
        _ = t.onClose,
        f;
      n[0] !== u
        ? ((f = u != null ? o("WAWebL10nFilesize").getL10nFilesize(u) : ""),
          (n[0] = u),
          (n[1] = f))
        : (f = n[1]);
      var g = f,
        h;
      n[2] !== p ? ((h = m(p)), (n[2] = p), (n[3] = h)) : (h = n[3]);
      var y = h,
        C;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = {
            className:
              "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xbktkl8 x16ovd2e xvtqlqk x12xbjc7 xdx6fka",
          }),
          (n[4] = C))
        : (C = n[4]);
      var b;
      n[5] !== a
        ? ((b = c.jsx("div", babelHelpers.extends({}, C, { children: a }))),
          (n[5] = a),
          (n[6] = b))
        : (b = n[6]);
      var v = b,
        S;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (e || (e = r("stylex"))).props(
            o("WAWebMediaEditorPreviewStyles").styles.container,
          )),
          (n[7] = S))
        : (S = n[7]);
      var R;
      n[8] !== l || n[9] !== _
        ? ((R = c.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
            onClose: _,
            filename: l,
          })),
          (n[8] = l),
          (n[9] = _),
          (n[10] = R))
        : (R = n[10]);
      var L;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((L =
            "x9f619 x13crsa5 x1hqvyuz x1rxj1xn x1tvm86q x1mkayr0 x1q7yeco x16qb05n xi7iut8 x1dm3dyd x1pv694p"),
          (n[11] = L))
        : (L = n[11]);
      var E;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "xdqhqc9" }), (n[12] = E))
        : (E = n[12]);
      var k;
      n[13] !== y
        ? ((k = c.jsx("div", babelHelpers.extends({}, E, { children: y }))),
          (n[13] = y),
          (n[14] = k))
        : (k = n[14]);
      var I, T;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = c.jsx("div", {
            className: "x1anpbxc x14z9mp xyorhqc x1lziwak xngnso2",
            children: s._(/*BTDS*/ "No preview available"),
          })),
          (T = { className: "x1f6kntn" }),
          (n[15] = I),
          (n[16] = T))
        : ((I = n[15]), (T = n[16]));
      var D;
      n[17] !== i
        ? ((D = i != null && i !== "" ? " - " + i.toUpperCase() : null),
          (n[17] = i),
          (n[18] = D))
        : (D = n[18]);
      var x;
      n[19] !== g || n[20] !== D
        ? ((x = c.jsxs(
            "div",
            babelHelpers.extends({}, T, { children: [g, D] }),
          )),
          (n[19] = g),
          (n[20] = D),
          (n[21] = x))
        : (x = n[21]);
      var $;
      n[22] !== x || n[23] !== k
        ? (($ = c.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.body,
            align: "center",
            justify: "center",
            children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
              className: L,
              align: "center",
              justify: "center",
              children: [k, I, x],
            }),
          })),
          (n[22] = x),
          (n[23] = k),
          (n[24] = $))
        : ($ = n[24]);
      var P;
      return (
        n[25] !== v || n[26] !== $ || n[27] !== R
          ? ((P = c.jsxs(
              "div",
              babelHelpers.extends({}, S, { children: [R, $, v] }),
            )),
            (n[25] = v),
            (n[26] = $),
            (n[27] = R),
            (n[28] = P))
          : (P = n[28]),
        P
      );
    }
    l.default = p;
  },
  226,
);
