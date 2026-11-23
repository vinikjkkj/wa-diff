__d(
  "adsMessengerDataModelAddButtonTemplate",
  [
    "AdsMessengerJSONPaths",
    "AdsMessengerJSONTemplateType",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetWelcomeMessage",
    "adsMessengerDataModelIsTextWithQR",
    "deleteByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      type: "template",
      payload: {
        template_type: r("AdsMessengerJSONTemplateType").BUTTON,
        buttons: [null],
      },
    };
    function s(t) {
      if (!r("adsMessengerDataModelIsTextWithQR")(t)) return t;
      var n = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.SECOND_TEXT,
        o = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT,
        a = r("adsMessengerDataModelClone")(t);
      r("setByPath")(a, o.path, e);
      var i = r("adsMessengerDataModelGetWelcomeMessage")(t);
      return (
        r("setByPath")(
          a,
          r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
            .TEXT,
          i,
        ),
        r("deleteByPath")(
          a,
          r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.TEXT,
        ),
        r("deleteByPath")(a, n),
        a
      );
    }
    l.default = s;
  },
  98,
);
