__d(
  "WAWebMediaEditorPreviewAudio.react",
  [
    "WAWebAttachMediaDrawerAttachMediaTypeAudio.react",
    "WAWebMediaEditorPreviewHeader.react",
    "WAWebMediaEditorPreviewStyles",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.item,
        a = t.onClose,
        i = n.fullPreview,
        l = n.mimetype;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WAWebMediaEditorPreviewStyles").styles.container,
          ),
          {
            children: [
              u.jsx(r("WAWebMediaEditorPreviewHeader.react"), { onClose: a }),
              u.jsx(r("WAWebAttachMediaDrawerAttachMediaTypeAudio.react"), {
                mimeType: l,
                url: i,
              }),
            ],
          },
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
