__d(
  "adsMessengerDataModelSwitchQuickRepliesToIceBreakers",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerVisualEditorCustomerActionType",
    "adsMessengerDataModelConvertQuickRepliesToIceBreakers",
    "adsMessengerDataModelGetIceBreakerPath",
    "adsMessengerDataModelGetMediaFormat",
    "adsMessengerDataModelGetQuickReplies",
    "adsMessengerDataModelRemoveAllCTA",
    "adsMessengerDataModelRemoveAllQR",
    "adsMessengerDataModelRemoveAutofillMessage",
    "adsMessengerDataModelRemoveButtonTemplate",
    "adsMessengerDataModelRemoveWhatsAppFlow",
    "adsMessengerDataModelSetActionType",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetQuickReplies")(e);
      r("adsMessengerDataModelSetActionType")(
        e,
        r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS,
      );
      var n = r("adsMessengerDataModelConvertQuickRepliesToIceBreakers")(t),
        o = r("adsMessengerDataModelGetIceBreakerPath")(e);
      if (o) {
        r("setByPath")(e, o, n);
        var a = r("adsMessengerDataModelGetMediaFormat")(e),
          i = e;
        return (
          a === r("AdsMessengerJSONMediaFormatType").IMAGE
            ? (i = r("adsMessengerDataModelRemoveAllCTA")(e))
            : (i = r("adsMessengerDataModelRemoveButtonTemplate")(e)),
          r("adsMessengerDataModelRemoveWhatsAppFlow")(
            r("adsMessengerDataModelRemoveAutofillMessage")(
              r("adsMessengerDataModelRemoveAllQR")(i),
            ),
          )
        );
      }
      return e;
    }
    l.default = e;
  },
  98,
);
