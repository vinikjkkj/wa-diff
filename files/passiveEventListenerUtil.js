__d(
  "passiveEventListenerUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !1;
    try {
      var l = Object.defineProperty({}, "passive", {
        get: function () {
          e = !0;
        },
      });
      window.addEventListener("test", null, l);
    } catch (e) {}
    var s = e;
    function u(e) {
      return s || typeof e == "boolean" ? e : e.capture || !1;
    }
    ((i.isPassiveEventListenerSupported = s), (i.makeEventOptions = u));
  },
  66,
);
