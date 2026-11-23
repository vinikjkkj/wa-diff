__d(
  "AdsNUXTourStepConfigBase",
  ["observeRuntimeType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.__completeAction = null),
          (this.__isCounted = !0),
          (this.__verifyUIState = function (e) {
            return !0;
          }),
          (this.__setupAction = function (e) {}));
      }
      var t = e.prototype;
      return (
        (t.getCompleteAction = function () {
          return r("observeRuntimeType")(
            this.__completeAction,
            "AdsNUXTourStepConfigBase.getCompleteAction.return",
          );
        }),
        (t.getIsCounted = function () {
          return this.__isCounted;
        }),
        (t.__setCompleteAction = function (t) {
          this.__completeAction = t;
        }),
        (t.__setIsCounted = function (t) {
          this.__isCounted = t;
        }),
        (t.__setSetupAction = function (t) {
          this.__setupAction = t;
        }),
        (t.__setVerifyUIState = function (t) {
          this.__verifyUIState = t;
        }),
        (t.getSetupAction = function () {
          return this.__setupAction;
        }),
        (t.getVerifyUIState = function () {
          return this.__verifyUIState;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
