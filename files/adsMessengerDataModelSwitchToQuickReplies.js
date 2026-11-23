__d(
  "adsMessengerDataModelSwitchToQuickReplies",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerVisualEditorCustomerActionType",
    "adsMessengerDataModelGetMediaFormat",
    "adsMessengerDataModelRemoveAllCTA",
    "adsMessengerDataModelRemoveButtonTemplate",
    "adsMessengerDataModelRemoveIceBreakers",
    "adsMessengerDataModelSetActionType",
    "adsMessengerDataModelSetQR",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("adsMessengerDataModelSetActionType")(
        e,
        r("AdsMessengerVisualEditorCustomerActionType").QUICK_REPLIES,
      );
      var n = r("adsMessengerDataModelGetMediaFormat")(e);
      return (
        r("adsMessengerDataModelRemoveIceBreakers")(e),
        n !== r("AdsMessengerJSONMediaFormatType").VIDEO
          ? r("adsMessengerDataModelSetQR")(
              r("adsMessengerDataModelRemoveButtonTemplate")(e),
              t || [],
            )
          : r("adsMessengerDataModelSetQR")(
              r("adsMessengerDataModelRemoveAllCTA")(e),
              t || [],
            )
      );
    }
    l.default = e;
  },
  98,
);
