__d(
  "AdsDisapprovedSubCompsHighLightUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.checkIfCompInfoMapShowsSurvey = function (t) {
            var e = !1;
            return (
              t.forEach(function (t) {
                t.showHelpfulnessSurvey && (e = !0);
              }),
              e
            );
          }),
          e
        );
      })(),
      l = new e();
    i.default = l;
  },
  66,
);
