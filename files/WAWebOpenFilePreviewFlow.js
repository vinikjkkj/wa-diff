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
    function s(t, n, r) {
      if (n.length !== 0) {
        var a = r != null ? r : {},
          i = a.origin,
          l =
            i === void 0
              ? o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                  .DOCUMENT_PICKER
              : i,
          s = a.onCancel,
          u = a.onComplete,
          c = n.map(e);
        o("WAWebCmd").Cmd.attachMediaDrawer({
          chat: t,
          attachments: c,
          fileOrigin: l,
          onCancel: s,
          onComplete: u,
        });
      }
    }
    function u(e, t, n, o) {
      var a = o != null ? o : {},
        i = a.onCancel,
        l = a.onComplete,
        u = a.origin;
      n.length > 0
        ? s(e, [t], {
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
          })
        : s(e, [t], o);
    }
    ((l.openFilePreviewFlow = s), (l.openFilePreviewFlowMulticast = u));
  },
  98,
);
