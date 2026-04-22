__d(
  "WAWebHasBlockingCallState",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = r("WAWebCallCollection").activeCall,
        n = r("WAWebCallCollection").lastActiveCall;
      if (t != null) return !0;
      var a =
        (n == null ? void 0 : n.shouldShowPostCallSurvey) === !0 &&
        n.postCallSurveyInteracted !== !0;
      if (a) {
        var i = o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow();
        return i
          ? (o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).isPopoutWindowAlive() ||
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hasBlockingCallState: popout flag stale (window dead), clearing survey",
                  ])),
              ),
              n != null && (n.shouldShowPostCallSurvey = !1)),
            !1)
          : !0;
      }
      return !1;
    }
    l.default = s;
  },
  98,
);
