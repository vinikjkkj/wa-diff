__d(
  "adsMessengerDataModelSwitchToButtons",
  [
    "AdsMessengerVisualEditorCustomerActionType",
    "adsMessengerDataModelAddButtonTemplate",
    "adsMessengerDataModelAddCTA",
    "adsMessengerDataModelIsTextWithQR",
    "adsMessengerDataModelRemoveAllQR",
    "adsMessengerDataModelRemoveIceBreakers",
    "adsMessengerDataModelSetActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        r("adsMessengerDataModelSetActionType")(
          e,
          r("AdsMessengerVisualEditorCustomerActionType").BUTTONS,
        ),
        r("adsMessengerDataModelRemoveIceBreakers")(e),
        r("adsMessengerDataModelIsTextWithQR")(e)
          ? r("adsMessengerDataModelRemoveAllQR")(
              r("adsMessengerDataModelAddButtonTemplate")(e),
            )
          : r("adsMessengerDataModelRemoveAllQR")(
              r("adsMessengerDataModelAddCTA")(e),
            )
      );
    }
    l.default = e;
  },
  98,
);
