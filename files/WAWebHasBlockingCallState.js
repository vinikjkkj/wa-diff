__d(
  "WAWebHasBlockingCallState",
  ["WAWebCallCollection", "WAWebVoipUiPopoutWindowPortalContainer.react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("WAWebCallCollection").activeCall,
        t = r("WAWebCallCollection").lastActiveCall;
      if (e != null) return !0;
      var n =
        (t == null ? void 0 : t.shouldShowPostCallSurvey) === !0 &&
        t.postCallSurveyInteracted !== !0;
      if (n) {
        var a = o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow();
        return !a;
      }
      return !1;
    }
    l.default = e;
  },
  98,
);
