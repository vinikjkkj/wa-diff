__d(
  "WAWebOpenCoexCallingFirstTimeModalUtils",
  [
    "WAWebCoexCallingConsumerFirstTimeModal.react",
    "WAWebCoexCallingFirstTimeAlertUtils",
    "WAWebCoexCallingSMBFirstTimeModal.react",
    "WAWebContactCollection",
    "WAWebModalManager",
    "WAWebUserPrefsMultiDevice",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    async function u() {
      return o(
        "WAWebCoexCallingFirstTimeAlertUtils",
      ).shouldShowCoexCallingSMBFirstTimeAlert()
        ? new Promise(function (e) {
            var t = async function () {
              (await o(
                "WAWebCoexCallingFirstTimeAlertUtils",
              ).markCoexCallingSMBFirstTimeAlertShown(),
                e(!0));
            };
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebCoexCallingSMBFirstTimeModal.react"), {
                onConfirm: t,
              }),
            );
          })
        : !1;
    }
    async function c(e) {
      if (o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage())
        return !1;
      var t = o("WAWebContactCollection").ContactCollection.get(e),
        n = (t == null ? void 0 : t.isHosted) === !0;
      if (!n) return !1;
      var a = e.toString();
      return o(
        "WAWebCoexCallingFirstTimeAlertUtils",
      ).shouldShowCoexCallingConsumerFirstTimeAlert(a, n)
        ? new Promise(function (e) {
            var t = async function () {
              (await o(
                "WAWebCoexCallingFirstTimeAlertUtils",
              ).markCoexCallingConsumerFirstTimeAlertShownForThread(a),
                e(!0));
            };
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebCoexCallingConsumerFirstTimeModal.react"), {
                onConfirm: t,
              }),
            );
          })
        : !1;
    }
    ((l.maybeShowCoexCallingSMBFirstTimeModal = u),
      (l.maybeShowCoexCallingConsumerFirstTimeModal = c));
  },
  98,
);
