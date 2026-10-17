__d(
  "openWAWebBizBroadcastVerifyOnPhoneModal",
  [
    "WALogger",
    "WAWebBizBroadcastVerifyOnPhoneModalLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
    "WAWebWamEnumBbTierType",
    "getErrorSafe",
    "react",
    "useWAWebBizBroadcastProEligibilityState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t, n, a) {
      o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.advancedToolsToggleClicked(
        n,
        t,
        a,
        o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO,
      );
      var i = !1,
        l = function () {
          i ||
            ((i = !0),
            o("WAWebModalManager").ModalManager.off("close_modal", l),
            o("WAWebModalManager").closeModalManager(),
            o("useWAWebBizBroadcastProEligibilityState")
              .forceRefreshWAWebBizBroadcastProEligibility({
                bypassThrottle: !0,
              })
              .catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to refresh BB Pro eligibility after closing phone handoff",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("bb-pro-settings-eligibility-refresh-error");
              }));
        };
      (o("WAWebModalManager").ModalManager.open(
        u.jsx(
          o("WAWebBizBroadcastVerifyOnPhoneModalLoadable")
            .WAWebBizBroadcastVerifyOnPhoneModalLoadable,
          { entryPoint: n, onClose: l, settingsAction: t },
        ),
      ),
        o("WAWebModalManager").ModalManager.on("close_modal", l));
    }
    l.default = c;
  },
  98,
);
