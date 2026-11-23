__d(
  "adsMessengerDataModelSetQRPayload",
  [
    "adsMessengerDataModelGetQRResponseType",
    "adsMessengerDataModelGetQuickReplies",
    "adsMessengerDataModelSetQR",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n.getValue(),
        a = r("adsMessengerDataModelGetQuickReplies")(e) || [],
        i = r("getByPath")(a, [String(t), "title"]),
        l = r("adsMessengerDataModelGetQRResponseType")(e, t);
      return (
        (a[t] = {
          content_type: "text",
          response_type: l,
          payload: o,
          title: i,
        }),
        !i && !o && (a[t] = null),
        r("adsMessengerDataModelSetQR")(e, a)
      );
    }
    l.default = e;
  },
  98,
);
