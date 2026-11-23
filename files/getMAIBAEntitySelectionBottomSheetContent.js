__d(
  "getMAIBAEntitySelectionBottomSheetContent",
  [
    "invariant",
    "I64",
    "MAIBAEntitySelectionContent.react",
    "MWLSThread",
    "react",
    "useAdsOsmipChatSendMessagePromise",
    "validateMAIBAEntitySelectionParams",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e || (e = o("react"));
    function d(e) {
      var t = e.onHide,
        n = e.params,
        a = e.thread_id;
      r("vulture")("NSLhL3FSN3dktS6ZgMPNqsYnqh0=");
      var i = o("MWLSThread").useThread((u || (u = o("I64"))).of_string(a));
      i != null || s(0, 91235);
      var l = r("useAdsOsmipChatSendMessagePromise")(i);
      return c.jsx(
        r("MAIBAEntitySelectionContent.react"),
        babelHelpers.extends({}, n, {
          onHide: t,
          sendMessage: function (t, n) {
            return l(
              { messageText: t, platformToken: n != null ? n : "" },
              "postback_reply",
            );
          },
          showEntityImage: !1,
        }),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = function (t, n) {
        var e = r("validateMAIBAEntitySelectionParams")(t);
        return {
          content: c.jsx(d, { onHide: n, params: e, thread_id: e.thread_id }),
          footer: null,
          title: e.title,
        };
      },
      p = m;
    l.default = p;
  },
  98,
);
