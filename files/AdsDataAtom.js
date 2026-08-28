__d(
  "AdsDataAtom",
  [
    "invariant",
    "AdsDataAtomDebugger",
    "AdsDataAtomLaminarDebugger",
    "AdsDataAtomPerformanceUtil",
    "AdsInterfacesLoggerUtils",
    "AdsPageTransitionActionFlux",
    "DataAtomBase",
    "ErrorSerializer",
    "Run",
    "cr:10773",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = null,
      u = (function (t) {
        function a() {
          var a,
            i = [r("AdsDataAtomPerformanceUtil")];
          return (
            n("cr:10773") != null &&
              i.push(n("cr:10773").AdsDataAtomTransitionUtil),
            (a = t.call(this, i, e) || this),
            (a.$AdsDataAtom$p_1 = !1),
            (a.$AdsDataAtom$p_2 = null),
            o("Run").onAfterUnload(function () {
              a.dispatch({
                action: { type: o("AdsPageTransitionActionFlux").actionType },
              });
            }),
            a
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.__invokeCallback = function (t, n, a) {
            if (this.__catchErrors)
              try {
                n(a);
              } catch (n) {
                var e = r("getErrorSafe")(n),
                  i = {
                    action_type_on_error: a && a.action && a.action.type,
                    error_type: "FLUX_STORE",
                    payload_on_error: a,
                    store_name: this.__callbacksNames[t],
                  };
                (r("ErrorSerializer").aggregateError(e, { type: "fatal" }),
                  o("AdsInterfacesLoggerUtils").logCriticalException(e, i));
              }
            else n(a);
          }),
          (i.registerBatchingCallback = function (t) {
            (this.$AdsDataAtom$p_2 == null || s(0, 65726),
              (this.$AdsDataAtom$p_2 = t));
          }),
          (i.unregisterBatchingCallback_TEST_ONLY_DO_NO_USE = function () {
            this.$AdsDataAtom$p_2 = null;
          }),
          (i.__genReactBatchCallback = function (n, r) {
            var e = this,
              o = t.prototype.__genReactBatchCallback.call(this, n, r);
            if (this.$AdsDataAtom$p_2 != null && !this.$AdsDataAtom$p_1) {
              var a = this.$AdsDataAtom$p_2;
              return function () {
                ((e.$AdsDataAtom$p_1 = !0), a(o), (e.$AdsDataAtom$p_1 = !1));
              };
            } else return o;
          }),
          a
        );
      })(r("DataAtomBase")),
      c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
