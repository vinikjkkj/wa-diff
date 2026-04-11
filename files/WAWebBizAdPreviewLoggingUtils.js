__d(
  "WAWebBizAdPreviewLoggingUtils",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || e.length === 0) return "None";
      for (var t of e)
        if (typeof t != "string") {
          var n = t.get("type");
          if (n === o("WAWebMsgType").MSG_TYPE.VIDEO) return "video";
        }
      return "image";
    }
    l.determineMediaType = e;
  },
  98,
);
