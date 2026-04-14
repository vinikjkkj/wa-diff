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
      var n = t.captionInput,
        a = t.fileExt,
        i = t.filename,
        l = t.filesize,
        u = t.mimeType,
        p = t.onClose,
        _ = l != null ? o("WAWebL10nFilesize").getL10nFilesize(l) : "",
        f = m(u),
        g = c.jsx("div", {
          className:
            "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xbktkl8 x16ovd2e xvtqlqk x12xbjc7 xdx6fka",
          children: n,
        });
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WAWebMediaEditorPreviewStyles").styles.container,
          ),
          {
            children: [
              c.jsx(r("WAWebMediaEditorPreviewHeader.react"), {
                onClose: p,
                filename: i,
              }),
              c.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: d.body,
                align: "center",
                justify: "center",
                children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  className:
                    "x9f619 x13crsa5 x1hqvyuz x1rxj1xn x1tvm86q x1mkayr0 x1q7yeco x16qb05n xi7iut8 x1dm3dyd x1pv694p",
                  align: "center",
                  justify: "center",
                  children: [
                    c.jsx("div", { className: "xdqhqc9", children: f }),
                    c.jsx("div", {
                      className: "x1anpbxc x14z9mp xyorhqc x1lziwak xngnso2",
                      children: s._(/*BTDS*/ "No preview available"),
                    }),
                    c.jsxs("div", {
                      className: "x1f6kntn",
                      children: [
                        _,
                        a != null && a !== "" ? " - " + a.toUpperCase() : null,
                      ],
                    }),
                  ],
                }),
              }),
              g,
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
