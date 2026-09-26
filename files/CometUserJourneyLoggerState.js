__d(
  "CometUserJourneyLoggerState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 6e5,
      l = new Map();
    function s(e, t) {
      return e + ":" + t;
    }
    function u(e, t) {
      return l.get(s(e, t));
    }
    function c(t, n, r) {
      var o = s(t, n),
        a = window.setTimeout(function () {
          r(t, n);
        }, e),
        i = {
          useCaseID: t,
          key: n,
          startTime: Date.now(),
          points: {},
          flowAnnotations: {},
          flowAnnotationsInt: {},
          flowAnnotationsDouble: {},
          flowAnnotationsBool: {},
          pointAnnotations: {},
          pointAnnotationsInt: {},
          pointAnnotationsDouble: {},
          pointAnnotationsBool: {},
          journeyCodes: null,
          timeoutID: a,
        };
      return (l.set(o, i), i);
    }
    function d(e, t) {
      var n = s(e, t),
        r = l.get(n);
      return (r != null && (window.clearTimeout(r.timeoutID), l.delete(n)), r);
    }
    function m() {
      return Array.from(l.values());
    }
    function p(e, t) {
      e.points[t] = Date.now();
    }
    function _(e, t, n) {
      e.flowAnnotations[t] = n;
    }
    function f(e, t, n) {
      e.flowAnnotationsInt[t] = n;
    }
    function g(e, t, n) {
      e.flowAnnotationsDouble[t] = n;
    }
    function h(e, t, n) {
      e.flowAnnotationsBool[t] = n;
    }
    function y(e, t, n, r) {
      (e.pointAnnotations[t] == null && (e.pointAnnotations[t] = {}),
        (e.pointAnnotations[t][n] = r));
    }
    function C(e, t, n, r) {
      (e.pointAnnotationsInt[t] == null && (e.pointAnnotationsInt[t] = {}),
        (e.pointAnnotationsInt[t][n] = r));
    }
    function b(e, t, n, r) {
      (e.pointAnnotationsDouble[t] == null &&
        (e.pointAnnotationsDouble[t] = {}),
        (e.pointAnnotationsDouble[t][n] = r));
    }
    function v(e, t, n, r) {
      (e.pointAnnotationsBool[t] == null && (e.pointAnnotationsBool[t] = {}),
        (e.pointAnnotationsBool[t][n] = r));
    }
    function S(e, t) {
      e.journeyCodes = t;
    }
    var R = {
      getJourney: u,
      createJourney: c,
      removeJourney: d,
      getAllActiveJourneys: m,
      addPoint: p,
      addAnnotation: _,
      addAnnotationInt: f,
      addAnnotationDouble: g,
      addAnnotationBool: h,
      addPointAnnotation: y,
      addPointAnnotationInt: C,
      addPointAnnotationDouble: b,
      addPointAnnotationBool: v,
      setJourneyCodes: S,
    };
    i.default = R;
  },
  66,
);
