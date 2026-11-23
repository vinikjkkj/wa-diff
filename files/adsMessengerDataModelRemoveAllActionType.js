__d(
  "adsMessengerDataModelRemoveAllActionType",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerVisualEditorCustomerActionType",
    "adsMessengerDataModelGetMediaFormat",
    "adsMessengerDataModelRemoveAllCTA",
    "adsMessengerDataModelRemoveAllQR",
    "adsMessengerDataModelRemoveButtonTemplate",
    "adsMessengerDataModelRemoveIceBreakers",
    "adsMessengerDataModelSetActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("adsMessengerDataModelSetActionType")(
        e,
        r("AdsMessengerVisualEditorCustomerActionType").NONE,
      );
      var t = r("adsMessengerDataModelGetMediaFormat")(e);
      return (
        r("adsMessengerDataModelRemoveIceBreakers")(e),
        t !== r("AdsMessengerJSONMediaFormatType").VIDEO
          ? r("adsMessengerDataModelRemoveAllQR")(
              r("adsMessengerDataModelRemoveButtonTemplate")(e),
            )
          : r("adsMessengerDataModelRemoveAllQR")(
              r("adsMessengerDataModelRemoveAllCTA")(e),
            )
      );
    }
    l.default = e;
  },
  98,
);
