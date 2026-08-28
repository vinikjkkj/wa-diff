__d(
  "MWChatStateV2IsOpen",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return (
        e === void 0 && (e = void 0),
        t.openWatermark >
          Math.max.apply(
            Math,
            [
              t.closeWatermark,
              t.minimizeWatermark,
              t.clientForcedMinimizeWatermark,
            ].concat(typeof e == "number" ? e : []),
          )
      );
    }
    i.isOpen = e;
  },
  66,
);
