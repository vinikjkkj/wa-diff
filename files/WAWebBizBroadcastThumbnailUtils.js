__d(
  "WAWebBizBroadcastThumbnailUtils",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.attachmentData;
      return e.statusSource === "PRO" &&
        (t == null ? void 0 : t.mediaType) === o("WAWebMsgType").MSG_TYPE.VIDEO
        ? null
        : t == null
          ? void 0
          : t.previewUrl;
    }
    l.getBroadcastThumbnailUrl = e;
  },
  98,
);
