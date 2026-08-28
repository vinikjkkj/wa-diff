__d(
  "AdsVideoToastCardsUploadStartReducerPlugin",
  ["AdsUEditorHostIDs", "AdsVideoUploadStatus", "AdsVideoUploadToastCardUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e, a;
          if (
            n.editingVideo === !0 &&
            n.hostID === r("AdsUEditorHostIDs").CREATION
          )
            return t;
          var i =
            (e = n.context) == null ? void 0 : e.videoBackgroundUploadInfo;
          return (
            (i =
              i != null
                ? i
                : n.isUVF === !0
                  ? (a = n.context) == null
                    ? void 0
                    : a.videoUploadInfo
                  : null),
            t.length === 0
              ? o("AdsVideoUploadToastCardUtils").createToastCard(
                  t,
                  "progress",
                  n.title != null && n.title !== "" ? n.title : null,
                  null,
                  i,
                  0,
                  r("AdsVideoUploadStatus").UPLOADING,
                )
              : t
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
