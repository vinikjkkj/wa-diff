__d(
  "adsMessengerDataModelAddQuickReply",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetMediaFormat",
    "adsMessengerDataModelGetQuickReplies",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetQuickReplies")(e) || [];
      t.push(null);
      var n = r("adsMessengerDataModelGetMediaFormat")(e);
      switch (n) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          var o = r("adsMessengerDataModelClone")(e);
          return (
            r("setByPath")(
              o,
              r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.QUICK_REPLIES,
              t,
            ),
            o
          );
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          var a = r("adsMessengerDataModelClone")(e);
          return (
            r("setByPath")(
              a,
              r("AdsMessengerJSONPaths").VIDEO_FORMAT.MESSAGE.QUICK_REPLIES,
              t,
            ),
            a
          );
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          var i = r("adsMessengerDataModelClone")(e);
          return (
            r("setByPath")(
              i,
              r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.QUICK_REPLIES,
              t,
            ),
            i
          );
        default:
          return e;
      }
    }
    l.default = e;
  },
  98,
);
