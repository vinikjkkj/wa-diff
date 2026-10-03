__d(
  "MAWMIC",
  ["Promise", "cr:34940"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      n("cr:34940") == null || n("cr:34940").fail(e, t);
    }
    function u(e, t) {
      n("cr:34940") == null || n("cr:34940").cancel(e, t);
    }
    function c(e, t) {
      n("cr:34940") == null || n("cr:34940").addPoint(e, t);
    }
    function d(e, t) {
      n("cr:34940") == null || n("cr:34940").addBoolAnnotation(e, t);
    }
    function m(e, t) {
      n("cr:34940") == null || n("cr:34940").addIntAnnotation(e, t);
    }
    function p(e, t) {
      n("cr:34940") == null || n("cr:34940").addStringAnnotation(e, t);
    }
    function _(e, t) {
      n("cr:34940") == null || n("cr:34940").addStringArrayAnnotation(e, t);
    }
    function f(e, t) {
      n("cr:34940") == null || n("cr:34940").addIntArrayAnnotation(e, t);
    }
    function g() {
      return (
        (n("cr:34940") == null ? void 0 : n("cr:34940").duringMIC()) === !0
      );
    }
    function h() {
      var e =
        n("cr:34940") == null
          ? void 0
          : n("cr:34940").getRemainingRequiredEvents();
      return e != null ? Array.from(e).sort() : [];
    }
    function y() {
      var e;
      return (e =
        n("cr:34940") == null ? void 0 : n("cr:34940").endReasonMIC()) != null
        ? e
        : "end_reason_not_available";
    }
    function C() {
      n("cr:34940") == null || n("cr:34940").onConnectToExistingWorker();
    }
    function b() {
      n("cr:34940") == null || n("cr:34940").startMAWMICFlow();
    }
    function v() {
      var t;
      return (t = n("cr:34940") == null ? void 0 : n("cr:34940").getState()) !=
        null
        ? t
        : (e || (e = n("Promise"))).resolve(void 0);
    }
    ((l.fail = s),
      (l.cancel = u),
      (l.addPoint = c),
      (l.addBoolAnnotation = d),
      (l.addIntAnnotation = m),
      (l.addStringAnnotation = p),
      (l.addStringArrayAnnotation = _),
      (l.addIntArrayAnnotation = f),
      (l.duringMIC = g),
      (l.getRemainingRequiredEvents = h),
      (l.endReasonMIC = y),
      (l.onConnectToExistingWorker = C),
      (l.startMAWMICFlow = b),
      (l.getState = v));
  },
  98,
);
