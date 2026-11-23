__d(
  "adsMessengerDataModelSetQRTitle",
  [
    "AdsMessengerVisualEditorQRResponseType",
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
        i = r("adsMessengerDataModelGetQRResponseType")(e, t),
        l = i === r("AdsMessengerVisualEditorQRResponseType").BOT,
        s = r("getByPath")(a, [String(t), "payload"]),
        u = r("getByPath")(a, [String(t), "response"]);
      return (
        i === r("AdsMessengerVisualEditorQRResponseType").NONE
          ? (a[t] = { content_type: "text", response_type: i, title: o })
          : (a[t] = l
              ? { content_type: "text", response_type: i, title: o, payload: s }
              : {
                  content_type: "text",
                  response_type: i,
                  title: o,
                  response: u,
                }),
        !o && !(s || u) && (a[t] = null),
        r("adsMessengerDataModelSetQR")(e, a)
      );
    }
    l.default = e;
  },
  98,
);
