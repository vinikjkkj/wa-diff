__d(
  "adsMessengerDataModelSetVideoFormat",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "AdsMessengerVisualEditorCustomerActionType",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetActionType",
    "adsMessengerDataModelGetIceBreakers",
    "adsMessengerDataModelGetQuickReplies",
    "adsMessengerDataModelRemoveAllCTA",
    "adsMessengerDataModelRemoveAllQR",
    "adsMessengerDataModelRemoveIceBreakers",
    "adsMessengerDataModelSetActionType",
    "adsMessengerDataModelSetIceBreakers",
    "adsMessengerDataModelSetQR",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetActionType")(e),
        n = r("adsMessengerDataModelGetQuickReplies")(e),
        o = n || [null],
        a = r("adsMessengerDataModelGetIceBreakers")(e),
        i = r("adsMessengerDataModelClone")(e);
      return (
        r("setByPath")(
          i,
          r("AdsMessengerJSONPaths").MEDIA_TYPE,
          r("AdsMessengerJSONMediaFormatType").VIDEO,
        ),
        r("setByPath")(
          i,
          r("AdsMessengerJSONPaths").VIDEO_FORMAT.MESSAGE.ATTACHMENT.TYPE,
          "video",
        ),
        t === r("AdsMessengerVisualEditorCustomerActionType").QUICK_REPLIES ||
        (n && n.length > 0)
          ? (r("adsMessengerDataModelRemoveIceBreakers")(i),
            r("adsMessengerDataModelSetQR")(
              r("adsMessengerDataModelRemoveAllCTA")(i),
              o,
            ))
          : t ===
                r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS ||
              t ===
                r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS ||
              (a && a.length > 0)
            ? (r("adsMessengerDataModelSetActionType")(i, t),
              r("adsMessengerDataModelSetIceBreakers")(
                r("adsMessengerDataModelRemoveAllQR")(
                  r("adsMessengerDataModelRemoveAllCTA")(i),
                ),
                a,
              ))
            : i
      );
    }
    l.default = e;
  },
  98,
);
