__d(
  "AdsTargetingRelaxationBAUBaseBehaviour",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getMessageTypeToShow = function () {
          return "unsupported";
        }),
        (t.getTargetingRelaxationConstant = function () {
          return null;
        }),
        (t.isDTE = function () {
          return !1;
        }),
        (t.isDTaaS = function () {
          return !1;
        }),
        (t.isDTEDefaultOptedIn = function () {
          return !1;
        }),
        (t.isDTEDefaultOptedOut = function () {
          return !1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
