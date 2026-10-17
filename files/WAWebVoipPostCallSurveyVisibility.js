__d(
  "WAWebVoipPostCallSurveyVisibility",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0;
    function l() {
      return e > 0;
    }
    function s() {
      e++;
      var t = !1;
      return function () {
        t || ((t = !0), e--);
      };
    }
    ((i.getIsPostCallSurveyVisible = l), (i.markPostCallSurveyVisible = s));
  },
  66,
);
