__d(
  "adsMessengerDataModelSetTextFormat",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "AdsMessengerVisualEditorCustomerActionType",
    "adsMessengerDataModelAddButtonTemplate",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetActionType",
    "adsMessengerDataModelGetCTAs",
    "adsMessengerDataModelGetIceBreakers",
    "adsMessengerDataModelGetQuickReplies",
    "adsMessengerDataModelIsTextWithQR",
    "adsMessengerDataModelRemoveAllQR",
    "adsMessengerDataModelRemoveButtonTemplate",
    "adsMessengerDataModelRemoveIceBreakers",
    "adsMessengerDataModelSetActionType",
    "adsMessengerDataModelSetIceBreakers",
    "adsMessengerDataModelSetQR",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetCTAs")(e),
        n = t || [null],
        o = r("adsMessengerDataModelGetQuickReplies")(e),
        a = o || [null],
        i = r("adsMessengerDataModelGetIceBreakers")(e),
        l = r("adsMessengerDataModelClone")(e);
      r("setByPath")(
        l,
        r("AdsMessengerJSONPaths").MEDIA_TYPE,
        r("AdsMessengerJSONMediaFormatType").TEXT,
      );
      var s = r("adsMessengerDataModelGetActionType")(e);
      if (
        s === r("AdsMessengerVisualEditorCustomerActionType").QUICK_REPLIES ||
        o
      )
        return (
          (l = r("adsMessengerDataModelRemoveButtonTemplate")(l)),
          r("adsMessengerDataModelRemoveIceBreakers")(l),
          r("adsMessengerDataModelSetActionType")(l, s),
          r("adsMessengerDataModelSetQR")(l, a)
        );
      if (
        s === r("AdsMessengerVisualEditorCustomerActionType").BUTTONS ||
        (t && t.length)
      )
        (r("adsMessengerDataModelIsTextWithQR")(l) &&
          ((l = r("adsMessengerDataModelRemoveAllQR")(
            r("adsMessengerDataModelAddButtonTemplate")(l),
          )),
          r("adsMessengerDataModelRemoveIceBreakers")(l)),
          r("adsMessengerDataModelSetActionType")(l, s),
          r("setByPath")(
            l,
            r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
              .ELEMENT_BUTTONS,
            n,
          ));
      else if (
        s === r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS ||
        s === r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS ||
        (i && i.length > 0)
      )
        return (
          r("adsMessengerDataModelSetActionType")(l, s),
          r("adsMessengerDataModelSetIceBreakers")(
            r("adsMessengerDataModelRemoveAllQR")(
              r("adsMessengerDataModelRemoveButtonTemplate")(l),
            ),
            i,
          )
        );
      return l;
    }
    l.default = e;
  },
  98,
);
