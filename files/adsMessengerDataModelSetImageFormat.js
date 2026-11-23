__d(
  "adsMessengerDataModelSetImageFormat",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "AdsMessengerJSONTemplateType",
    "AdsMessengerVisualEditorCustomerActionType",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetActionType",
    "adsMessengerDataModelGetCTAs",
    "adsMessengerDataModelGetGenericElement",
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
      var t = r("adsMessengerDataModelGetCTAs")(e),
        n = t || [null],
        o = r("adsMessengerDataModelGetQuickReplies")(e),
        a = o || [null],
        i = r("adsMessengerDataModelGetIceBreakers")(e),
        l = r("adsMessengerDataModelClone")(e),
        s = r("adsMessengerDataModelGetGenericElement")(l) || { buttons: [] },
        u = r("adsMessengerDataModelGetActionType")(e);
      return (
        r("setByPath")(
          l,
          r("AdsMessengerJSONPaths").MEDIA_TYPE,
          r("AdsMessengerJSONMediaFormatType").IMAGE,
        ),
        r("setByPath")(
          l,
          r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT.TYPE,
          "template",
        ),
        r("setByPath")(
          l,
          r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
            .TEMPLATE_TYPE,
          r("AdsMessengerJSONTemplateType").GENERIC,
        ),
        r("setByPath")(
          l,
          r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
            .ELEMENTS,
          [s],
        ),
        u === r("AdsMessengerVisualEditorCustomerActionType").QUICK_REPLIES ||
        (o && o.length > 0)
          ? (r("adsMessengerDataModelSetActionType")(
              l,
              r("AdsMessengerVisualEditorCustomerActionType").QUICK_REPLIES,
            ),
            r("adsMessengerDataModelRemoveIceBreakers")(l),
            r("adsMessengerDataModelSetQR")(
              r("adsMessengerDataModelRemoveAllCTA")(l),
              a,
            ))
          : u === r("AdsMessengerVisualEditorCustomerActionType").BUTTONS ||
              (t && t.length > 0)
            ? (r("adsMessengerDataModelSetActionType")(
                l,
                r("AdsMessengerVisualEditorCustomerActionType").BUTTONS,
              ),
              (s.buttons = n),
              r("setByPath")(
                l,
                r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT
                  .PAYLOAD.ELEMENTS,
                [s],
              ),
              r("adsMessengerDataModelRemoveIceBreakers")(l),
              r("adsMessengerDataModelRemoveAllQR")(l))
            : u ===
                  r("AdsMessengerVisualEditorCustomerActionType")
                    .ICE_BREAKERS ||
                u ===
                  r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS ||
                (i && i.length > 0)
              ? (r("adsMessengerDataModelSetActionType")(l, u),
                r("adsMessengerDataModelSetIceBreakers")(
                  r("adsMessengerDataModelRemoveAllQR")(
                    r("adsMessengerDataModelRemoveAllCTA")(l),
                  ),
                  i,
                ))
              : l
      );
    }
    l.default = e;
  },
  98,
);
