__d(
  "WAWebOpenFilePreviewFlow",
  [
    "WAWebCmd",
    "WAWebFileUtils",
    "WAWebMimeTypes",
    "WAWebSendFilesToChats",
    "WAWebWamEnumMediaPickerOriginType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = o("WAWebFileUtils").getMimeTypeForFilepath(e.name)) != null
            ? t
            : o("WAWebMimeTypes").DOC_MIMES;
      return {
        file: e,
        type: o("WAWebFileUtils").FILETYPE.DOCUMENT,
        filename: e.name,
        mimetype: n,
      };
    }
    function s(t) {
      var n = t.chat,
        r = t.files,
        a = t.options;
      if (r.length !== 0) {
        var i = a != null ? a : {},
          l = i.origin,
          s =
            l === void 0
              ? o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                  .DOCUMENT_PICKER
              : l,
          u = i.onCancel,
          c = i.onComplete,
          d = r.map(e);
        o("WAWebCmd").Cmd.attachMediaDrawer({
          chat: n,
          attachments: d,
          fileOrigin: s,
          onCancel: u,
          onComplete: c,
        });
      }
    }
    function u(e, t, n, o) {
      var a = o != null ? o : {},
        i = a.onCancel,
        l = a.onComplete,
        u = a.origin;
      n.length > 0
        ? s({
            chat: e,
            files: [t],
            options: {
              origin: u,
              onCancel: i,
              onComplete: function (o) {
                (o &&
                  r("WAWebSendFilesToChats")([].concat(n), [t], {
                    batchNotifications: !0,
                    totalChats: n.length + 1,
                  }),
                  l == null || l(o));
              },
            },
          })
        : s({ chat: e, files: [t], options: o });
    }
    ((l.openFilePreviewFlow = s), (l.openFilePreviewFlowMulticast = u));
  },
  98,
);
