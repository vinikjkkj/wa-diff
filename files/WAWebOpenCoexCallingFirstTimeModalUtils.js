__d(
  "WAWebOpenCoexCallingFirstTimeModalUtils",
  [
    "Promise",
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
          if (!f(t)) return !1;
          var a = t.toString();
          return new (e || (e = n("Promise")))(function (e) {
            var t = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (yield o(
                    "WAWebCoexCallingFirstTimeAlertUtils",
                  ).markCoexCallingConsumerFirstTimeAlertShownForThread(a),
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
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return (
        o(
          "WAWebCoexCallingFirstTimeAlertUtils",
        ).shouldShowCoexCallingSMBFirstTimeAlert() || f(e)
      );
    }
    function f(e) {
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
    ((l.maybeShowCoexCallingSMBFirstTimeModal = c),
      (l.maybeShowCoexCallingConsumerFirstTimeModal = m),
      (l.willShowCoexCallingFirstTimeModal = _));
  },
  98,
);
