__d(
  "useWAWebVoipPostCallSurvey",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebPipController",
    "WAWebVoipActivityTracker",
    "WAWebVoipEventConstants",
    "WAWebVoipSendFieldstatsAction",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiManager",
    "WAWebVoipWebBridgeApi",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState,
      h = 15e3;
    function y(t) {
      var n = t.isCallActiveInPopoutWindow,
        a = t.isCallOutgoing,
        i = t.isCallRinging,
        l = t.isContextInPopoutWindow,
        d = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents
              .SHOULD_SHOW_POST_CALL_SURVEY,
          ),
          function () {
            var e;
            return (
              ((e = r("WAWebCallCollection").lastActiveCall) == null
                ? void 0
                : e.shouldShowPostCallSurvey) === !0
            );
          },
        ),
        m = g(!1),
        y = m[0],
        C = m[1],
        b = g(!1),
        v = b[0],
        S = b[1],
        R = p(function (t, n) {
          (C(!0),
            S(!1),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .POST_CALL_SURVEY_DISMISSED,
            ),
            (t != null ? t : 0) > 0
              ? (o("WAWebVoipSendFieldstatsAction").sendStoredFieldstatsAction(
                  t,
                ),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Survey submitted with rating: ",
                      "",
                    ])),
                  t,
                ))
              : (o(
                  "WAWebVoipSendFieldstatsAction",
                ).sendStoredFieldstatsAction(),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Survey dismissed",
                    ])),
                )),
            r("WAWebCallCollection").lastActiveCall != null &&
              ((r(
                "WAWebCallCollection",
              ).lastActiveCall.postCallSurveyInteracted = !0),
              (r(
                "WAWebCallCollection",
              ).lastActiveCall.shouldShowPostCallSurvey = !1)),
            n !== !0 &&
              (r("WAWebPipController").closePiP(),
              o("WAWebVoipUiManager").closeVoipUiPopoutWindow({
                callEnded: !0,
                surveyInteracted: !0,
              }),
              o(
                "WAWebVoipUiDocPipPortalContainer.react",
              ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
                surveyInteracted: !0,
              })));
        }, []),
        L = p(
          function (e) {
            R(e);
          },
          [R],
        ),
        E = p(function () {
          S(!0);
        }, []);
      (_(
        function () {
          if (d && !y && !v) {
            var e = window.setTimeout(function () {
              R();
            }, h);
            return function () {
              window.clearTimeout(e);
            };
          }
        },
        [d, y, v, R],
      ),
        _(
          function () {
            if (d && !y) {
              var e = function (t) {
                t.key === "Escape" && R();
              };
              return (
                document.addEventListener("keydown", e),
                function () {
                  document.removeEventListener("keydown", e);
                }
              );
            }
          },
          [d, y, R],
        ),
        _(
          function () {
            (i || a) &&
              d &&
              !y &&
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Auto-dismissing post-call survey due to ",
                    " call",
                  ])),
                i ? "incoming" : "outgoing",
              ),
              R(void 0, !0));
          },
          [i, a, d, y, R],
        ));
      var k = f(!1);
      return (
        _(
          function () {
            (d &&
              n &&
              !l &&
              !k.current &&
              ((k.current = !0), r("WAWebPipController").closePiP()),
              d || (k.current = !1));
          },
          [d, n, l],
        ),
        _(
          function () {
            (!d && y && (C(!1), S(!1)),
              d &&
                !y &&
                (S(!1),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .POST_CALL_SURVEY_SHOWN,
                ),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Recording survey shown for interval tracking",
                    ])),
                ),
                o("WAWebVoipWebBridgeApi").recordSurveyShown()));
          },
          [d, y],
        ),
        {
          shouldShowPostCallSurvey: d,
          isSurveyDismissed: y,
          hasSurveyInteraction: v,
          handleSurveyDismiss: R,
          handleSurveySubmit: L,
          onSurveyInteract: E,
        }
      );
    }
    l.default = y;
  },
  98,
);
