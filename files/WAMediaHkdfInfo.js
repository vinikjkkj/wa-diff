__d(
  "WAMediaHkdfInfo",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "document":
          return "WhatsApp Document Keys";
        case "image":
        case "sticker":
        case "xma-image":
          return "WhatsApp Image Keys";
        case "video":
        case "gif":
          return "WhatsApp Video Keys";
        case "audio":
        case "ptt":
          return "WhatsApp Audio Keys";
        case "md-app-state":
          return "WhatsApp App State Keys";
        case "md-msg-hist":
          return "WhatsApp History Keys";
        default:
          throw r("err")("getMediaHkdfInfo: unexpected media type " + e);
      }
    }
    function s() {
      return "Messenger Preview Keys";
    }
    ((l.getMediaHkdfInfo = e), (l.getPreviewMediaHkdfInfo = s));
  },
  98,
);
