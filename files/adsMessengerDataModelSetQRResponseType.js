__d(
  "adsMessengerDataModelSetQRResponseType",
  [
    "adsMessengerDataModelGetQuickReplies",
    "adsMessengerDataModelSetQR",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("adsMessengerDataModelGetQuickReplies")(e) || [],
        a = r("getByPath")(o, [String(t), "title"]);
      return (
        (o[t] = { content_type: "text", response_type: n, title: a }),
        r("adsMessengerDataModelSetQR")(e, o)
      );
    }
    l.default = e;
  },
  98,
);
