__d(
  "WAWebMediaEditorPreviewAudio.react",
  [
    "WAWebAttachMediaDrawerAttachMediaTypeAudio.react",
    "WAWebMediaEditorPreviewHeader.react",
    "WAWebMediaEditorPreviewStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.item,
        i = t.onClose,
        l = a.fullPreview,
        s = a.mimetype,
        c;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (e || (e = r("stylex"))).props(
            o("WAWebMediaEditorPreviewStyles").styles.container,
          )),
          (n[0] = c))
        : (c = n[0]);
      var d;
      n[1] !== i
        ? ((d = u.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
            onClose: i,
          })),
          (n[1] = i),
          (n[2] = d))
        : (d = n[2]);
      var m;
      n[3] !== l || n[4] !== s
        ? ((m = u.jsx(r("WAWebAttachMediaDrawerAttachMediaTypeAudio.react"), {
            mimeType: s,
            url: l,
          })),
          (n[3] = l),
          (n[4] = s),
          (n[5] = m))
        : (m = n[5]);
      var p;
      return (
        n[6] !== d || n[7] !== m
          ? ((p = u.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [d, m] }),
            )),
            (n[6] = d),
            (n[7] = m),
            (n[8] = p))
          : (p = n[8]),
        p
      );
    }
    l.default = c;
  },
  98,
);
