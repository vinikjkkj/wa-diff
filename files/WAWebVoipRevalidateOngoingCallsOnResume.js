__d(
  "WAWebVoipRevalidateOngoingCallsOnResume",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebVoipCheckOngoingCalls",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = !1,
      c = !1;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(u || c) &&
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited() &&
            o("WAWebCmd").Cmd.isOfflineDeliveryEnd
          ) {
            ((u = !0), (c = !0));
            try {
              yield o("WAWebVoipCheckOngoingCalls").checkOngoingCalls();
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[RevalidateOngoingCallsOnResume] run failed: ",
                      "",
                    ])),
                  t,
                )
                .tags("nexus-voip")
                .sendLogs("revalidate-on-resume-run-failed");
            } finally {
              c = !1;
            }
            d();
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      s ||
        ((s = !0),
        o("WAWebCmd").Cmd.on(
          "offline_delivery_state_reset_from_bridge",
          function () {
            u = !1;
          },
        ),
        o("WAWebCmd").Cmd.on("offline_delivery_end_from_bridge", function () {
          d();
        }),
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on(
          "voipInitSuccess",
          function () {
            d();
          },
        ),
        d());
    }
    l.initRevalidateOngoingCallsOnResume = p;
  },
  98,
);
