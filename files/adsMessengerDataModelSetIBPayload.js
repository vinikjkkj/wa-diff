__d(
  "adsMessengerDataModelSetIBPayload",
  ["adsMessengerDataModelGetIceBreaker", "adsMessengerDataModelSetIceBreaker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("adsMessengerDataModelGetIceBreaker")(e, t);
      return r("adsMessengerDataModelSetIceBreaker")(
        e,
        t,
        babelHelpers.extends({}, o, { payload: n }),
      );
    }
    l.default = e;
  },
  98,
);
