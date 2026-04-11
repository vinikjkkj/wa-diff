__d(
  "WAWebOpenCoexCallingFirstTimeModalUtils",
  [
    "Promise",
    "WAWebBizCoexGatingUtils",
    "WAWebCoexCallingConsumerFirstTimeModal.react",
    "WAWebCoexCallingFirstTimeAlertUtils",
    "WAWebCoexCallingSMBFirstTimeModal.react",
    "WAWebContactCollection",
    "WAWebModalManager",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o(
            "WAWebCoexCallingFirstTimeAlertUtils",
          ).shouldShowCoexCallingSMBFirstTimeAlert()
            ? new (e || (e = n("Promise")))(function (e) {
                var t = (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      (yield o(
                        "WAWebCoexCallingFirstTimeAlertUtils",
                      ).markCoexCallingSMBFirstTimeAlertShown(),
                        e(!0));
                    },
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebCoexCallingSMBFirstTimeModal.react"), {
                    onConfirm: t,
                  }),
                );
              })
            : !1;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() ||
            o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage()
          )
            return !1;
          var a = o("WAWebContactCollection").ContactCollection.get(t),
            i = (a == null ? void 0 : a.isHosted) === !0;
          if (!i) return !1;
          var l = t.toString();
          return o(
            "WAWebCoexCallingFirstTimeAlertUtils",
          ).shouldShowCoexCallingConsumerFirstTimeAlert(l, i)
            ? new (e || (e = n("Promise")))(function (e) {
                var t = (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      (yield o(
                        "WAWebCoexCallingFirstTimeAlertUtils",
                      ).markCoexCallingConsumerFirstTimeAlertShownForThread(l),
                        e(!0));
                    },
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebCoexCallingConsumerFirstTimeModal.react"), {
                    onConfirm: t,
                  }),
                );
              })
            : !1;
        })),
        p.apply(this, arguments)
      );
    }
    ((l.maybeShowCoexCallingSMBFirstTimeModal = c),
      (l.maybeShowCoexCallingConsumerFirstTimeModal = m));
  },
  98,
);
