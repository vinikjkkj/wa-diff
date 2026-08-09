__d(
  "MAWMiActOnActThreadReadyInstrumentation",
  [
    "QPLUserFlow",
    "Random",
    "WAHashStringToNumber",
    "isOfflineThreadingId",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAHashStringToNumber").hashStringToNumber(
        e + Math.round(o("Random").random() * 1e4) + 1e4,
      );
    }
    function s(e, t, n, o) {
      r("QPLUserFlow").start(r("qpl")._(1056846543, "1530"), {
        annotations: {
          bool: { is_otid: r("isOfflineThreadingId")(n) },
          string: { apiName: o, description: t },
        },
        instanceKey: e,
      });
    }
    function u(e, t) {
      r("QPLUserFlow").addPoint(r("qpl")._(1056846543, "1530"), t, {
        instanceKey: e,
      });
    }
    function c(e, t) {
      r("QPLUserFlow").addAnnotations(r("qpl")._(1056846543, "1530"), t, {
        instanceKey: e,
      });
    }
    function d(e) {
      r("QPLUserFlow").endSuccess(r("qpl")._(1056846543, "1530"), {
        instanceKey: e,
      });
    }
    function m(e, t) {
      r("QPLUserFlow").endFailure(r("qpl")._(1056846543, "1530"), t, {
        instanceKey: e,
      });
    }
    ((l.getOnActThreadReadyInstanceKey = e),
      (l.startQPL = s),
      (l.addPointQPL = u),
      (l.addAnnotationsQPL = c),
      (l.endSuccessQPL = d),
      (l.endFailureQPL = m));
  },
  98,
);
