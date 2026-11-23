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
      if (!m(e)) return !1;
      var t = e.toString();
      return new Promise(function (e) {
        var n = async function () {
          (await o(
            "WAWebCoexCallingFirstTimeAlertUtils",
          ).markCoexCallingConsumerFirstTimeAlertShownForThread(t),
            e(!0));
        };
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebCoexCallingConsumerFirstTimeModal.react"), {
            onConfirm: n,
          }),
        );
      });
    }
    function d(e) {
      return (
        o(
          "WAWebCoexCallingFirstTimeAlertUtils",
        ).shouldShowCoexCallingSMBFirstTimeAlert() || m(e)
      );
    }
    function m(e) {
      var t;
      if (o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage())
        return !1;
      var n =
        ((t = o("WAWebContactCollection").ContactCollection.get(e)) == null
          ? void 0
          : t.isHosted) === !0;
      return (
        n &&
        o(
          "WAWebCoexCallingFirstTimeAlertUtils",
        ).shouldShowCoexCallingConsumerFirstTimeAlert(e.toString(), n)
      );
    }
    ((l.maybeShowCoexCallingSMBFirstTimeModal = u),
      (l.maybeShowCoexCallingConsumerFirstTimeModal = c),
      (l.willShowCoexCallingFirstTimeModal = d));
  },
  98,
);
