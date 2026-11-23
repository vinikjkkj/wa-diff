__d(
  "adsMessengerDataModelSetIBResponseType",
  [
    "adsMessengerBotPayloadForResponseType",
    "adsMessengerDataModelGetIceBreaker",
    "adsMessengerDataModelSetIceBreaker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("adsMessengerDataModelGetIceBreaker")(e, t);
      return r("adsMessengerDataModelSetIceBreaker")(
        e,
        t,
        babelHelpers.extends({}, o, {
          payload: r("adsMessengerBotPayloadForResponseType")(n, o.payload),
          response_type: n,
        }),
      );
    }
    l.default = e;
  },
  98,
);
