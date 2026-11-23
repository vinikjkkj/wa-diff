__d(
  "adsMessengerDataModelSetCallPromptMessage",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetCallPromptData",
    "adsMessengerDataModelGetMediaFormat",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsMessengerDataModelGetCallPromptData")(e);
      if ((n == null ? void 0 : n.call_prompt_message) === t) return e;
      var o = null;
      switch (r("adsMessengerDataModelGetMediaFormat")(e)) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          o = r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.CALL_PROMPT_DATA
            .CALL_PROMPT_MESSAGE;
          break;
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          o = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.CALL_PROMPT_DATA
            .CALL_PROMPT_MESSAGE;
          break;
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          o = r("AdsMessengerJSONPaths").VIDEO_FORMAT.MESSAGE.CALL_PROMPT_DATA
            .CALL_PROMPT_MESSAGE;
          break;
        default:
      }
      if (!o) return e;
      var a = r("adsMessengerDataModelClone")(e);
      return (r("setByPath")(a, o, t), a);
    }
    l.default = e;
  },
  98,
);
