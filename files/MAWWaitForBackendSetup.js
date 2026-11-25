__d(
  "MAWWaitForBackendSetup",
  [
    "ErrorSerializer",
    "MAWInitError",
    "MAWSetupWorkerAuxStateForLogging",
    "Promise",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new (e || (e = n("Promise")))(function (e, t) {
        ((s = e), (u = t));
      }),
      d = !1,
      m = !1,
      p = !1,
      _ = !1,
      f = null,
      g = s,
      h = u;
    function y(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        c.then(e).catch(function (e) {
          var a =
              t + " rejected because backend setup failed: " + e.message + ".",
            i = e instanceof o("MAWInitError").MAWInitError ? e.error : null;
          (i != null &&
            (a = a.concat(
              " More error detail: " +
                r("ErrorSerializer").toReadableMessage(i),
            )),
            n(r("err")(a)));
        });
      });
    }
    function C(e, t) {
      r("promiseDone")(
        y(t).then(function () {
          e();
        }),
      );
    }
    function b() {
      _ &&
        ((c = new (e || (e = n("Promise")))(function (e, t) {
          ((s = e), (u = t));
        })),
        (_ = !1),
        (d = !1),
        (g = s),
        (h = u),
        (m = !0),
        (p = !1));
    }
    function v(e) {
      ((d = !0), (_ = !0), (p = !1), g == null || g(e));
    }
    function S(e) {
      ((d = !1), (_ = !0), (p = !1), h == null || h(e));
    }
    function R() {
      return d;
    }
    function L() {
      return _;
    }
    function E() {
      return m;
    }
    function k(e) {
      (e != null &&
        f !== e &&
        o("MAWSetupWorkerAuxStateForLogging").resetWorkerCreationTime(),
        (f = e));
    }
    function I() {
      return f;
    }
    function T() {
      p = !0;
    }
    function D() {
      return p;
    }
    ((l.waitForBackendSetup = y),
      (l.runAfterBackendSetup = C),
      (l.resetBackendSetup = b),
      (l.resolveBackendSetup = v),
      (l.rejectBackendSetup = S),
      (l.isBackendSetupSuccessful = R),
      (l.isBackendSetupSettled = L),
      (l.wasBackendSetupReset = E),
      (l.setCurrentWorker = k),
      (l.getCurrentWorkerID = I),
      (l.markBackendSetupStarted = T),
      (l.isBackendSetupInProgress = D));
  },
  98,
);
