__d(
  "CometUserJourneyLogger",
  [
    "CometUserJourneyLoggerState",
    "CometUserJourneyLoggerUnload",
    "FbUserJourneyLoggingFalcoEvent",
    "UJLCometConfig",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = null,
      c = null,
      d = null,
      m = !1;
    function p() {
      if (e == null)
        try {
          var t,
            r = n("UJLCometConfig");
          e = (t = r.enabledUseCases) != null ? t : {};
        } catch (t) {
          e = {};
        }
      return e;
    }
    function _() {
      if (s == null)
        try {
          var e,
            t = n("UJLCometConfig");
          s = (e = t.autoStartUseCases) != null ? e : [];
        } catch (e) {
          s = [];
        }
      return s;
    }
    function f() {
      if (u == null)
        try {
          var e,
            t = n("UJLCometConfig");
          u = (e = t.autoEndUseCases) != null ? e : [];
        } catch (e) {
          u = [];
        }
      return u;
    }
    function g() {
      if (c == null)
        try {
          var e,
            t = n("UJLCometConfig"),
            r = (e = t.subscribedPoints) != null ? e : {},
            o = {};
          for (var a in r) o[a] = new Set(r[a]);
          c = o;
        } catch (e) {
          c = {};
        }
      return c;
    }
    function h(e, t) {
      var n = g(),
        r = n[e];
      return r == null ? !0 : r.has(t);
    }
    function y() {
      if (d == null)
        try {
          var e,
            t = n("UJLCometConfig");
          d = new Set((e = t.organicUseCases) != null ? e : []);
        } catch (e) {
          d = new Set();
        }
      return d;
    }
    function C(e) {
      return y().has(e);
    }
    function b(e) {
      if (!r("gkx")("21877")) return !1;
      var t = p();
      return t[e] != null;
    }
    function v() {
      if (document !== void 0) {
        var e =
          document.visibilityState === "hidden" ? "tab_hidden" : "tab_returned";
        H(e);
      }
    }
    function S() {
      m ||
        ((m = !0),
        o("CometUserJourneyLoggerUnload").registerUnloadHandler(E),
        document !== void 0 &&
          document.addEventListener("visibilitychange", v));
    }
    function R(e, t, n) {
      var o = r("CometUserJourneyLoggerState").removeJourney(e, t);
      if (o != null) {
        var a = Date.now(),
          i = {};
        for (var l in o.points) i[l] = String(o.points[l]);
        var s = {};
        for (var u in o.flowAnnotationsInt)
          s[u] = String(o.flowAnnotationsInt[u]);
        var c = {};
        for (var d in o.pointAnnotationsInt) {
          var m = {},
            p = o.pointAnnotationsInt[d];
          for (var _ in p) m[_] = String(p[_]);
          c[d] = m;
        }
        r("FbUserJourneyLoggingFalcoEvent").logImmediately(function () {
          return {
            use_case: o.useCaseID,
            start_time: String(o.startTime),
            end_time: String(a),
            end_reason: n,
            points: i,
            flow_annotations: o.flowAnnotations,
            flow_annotations_int: s,
            flow_annotations_double: o.flowAnnotationsDouble,
            flow_annotations_bool: o.flowAnnotationsBool,
            point_annotations: o.pointAnnotations,
            point_annotations_int: c,
            point_annotations_double: o.pointAnnotationsDouble,
            point_annotations_bool: o.pointAnnotationsBool,
            journey_codes: o.journeyCodes,
            tracking_codes: o.journeyCodes,
          };
        });
      }
    }
    function L(e, t) {
      R(e, t, "ttl_expired");
    }
    function E() {
      var e = r("CometUserJourneyLoggerState").getAllActiveJourneys();
      for (var t of e) R(t.useCaseID, t.key, "navigation");
    }
    function k(e) {
      try {
        var t,
          n,
          r = JSON.parse(e);
        return (t = (n = r.ei) != null ? n : r.ad_client_token) != null
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    function I(e, t) {
      b(e) && (S(), r("CometUserJourneyLoggerState").createJourney(e, t, L));
    }
    function T(e, t) {
      var n = k(t),
        o = n != null ? n : t;
      I(e, o);
      var a = r("CometUserJourneyLoggerState").getJourney(e, o);
      a != null && r("CometUserJourneyLoggerState").setJourneyCodes(a, t);
    }
    function D(e, t, n) {
      var o = r("CometUserJourneyLoggerState").getJourney(e, t);
      o != null && r("CometUserJourneyLoggerState").setJourneyCodes(o, n);
    }
    function x(e, t, n) {
      var o = r("CometUserJourneyLoggerState").getJourney(e, t);
      if (o != null) {
        var a = o.journeyCodes != null ? JSON.parse(o.journeyCodes) : {};
        ((a.ei = n),
          r("CometUserJourneyLoggerState").setJourneyCodes(
            o,
            JSON.stringify(a),
          ));
      }
    }
    function $(e, t) {
      R(e, t, "success");
    }
    function P(e, t, n, r) {
      R(e, t, "failure");
    }
    function N(e, t, n) {
      R(e, t, "cancel");
    }
    function M(e, t, n) {
      var o = r("CometUserJourneyLoggerState").getJourney(e, t);
      o != null && r("CometUserJourneyLoggerState").addPoint(o, n);
    }
    function w(e, t, n, o) {
      var a = r("CometUserJourneyLoggerState").getJourney(e, t);
      a != null && r("CometUserJourneyLoggerState").addAnnotation(a, n, o);
    }
    function A(e, t, n, o) {
      var a = r("CometUserJourneyLoggerState").getJourney(e, t);
      a != null && r("CometUserJourneyLoggerState").addAnnotationInt(a, n, o);
    }
    function F(e, t, n, o) {
      var a = r("CometUserJourneyLoggerState").getJourney(e, t);
      a != null &&
        r("CometUserJourneyLoggerState").addAnnotationDouble(a, n, o);
    }
    function O(e, t, n, o) {
      var a = r("CometUserJourneyLoggerState").getJourney(e, t);
      a != null && r("CometUserJourneyLoggerState").addAnnotationBool(a, n, o);
    }
    function B(e, t, n, o, a) {
      var i = r("CometUserJourneyLoggerState").getJourney(e, t);
      i != null &&
        r("CometUserJourneyLoggerState").addPointAnnotation(i, n, o, a);
    }
    function W(e, t, n, o, a) {
      var i = r("CometUserJourneyLoggerState").getJourney(e, t);
      i != null &&
        r("CometUserJourneyLoggerState").addPointAnnotationInt(i, n, o, a);
    }
    function q(e, t, n, o, a) {
      var i = r("CometUserJourneyLoggerState").getJourney(e, t);
      i != null &&
        r("CometUserJourneyLoggerState").addPointAnnotationDouble(i, n, o, a);
    }
    function U(e, t, n, o, a) {
      var i = r("CometUserJourneyLoggerState").getJourney(e, t);
      i != null &&
        r("CometUserJourneyLoggerState").addPointAnnotationBool(i, n, o, a);
    }
    function V(e, t, n) {
      return !(!h(e, t) || (n === !1 && !C(e)));
    }
    function H(e, t) {
      var n = r("CometUserJourneyLoggerState").getAllActiveJourneys();
      for (var o of n)
        V(o.useCaseID, e, t) && r("CometUserJourneyLoggerState").addPoint(o, e);
    }
    function G(e, t, n, o) {
      var a = r("CometUserJourneyLoggerState").getAllActiveJourneys();
      for (var i of a)
        V(i.useCaseID, e, o) &&
          r("CometUserJourneyLoggerState").addPointAnnotationInt(i, e, t, n);
    }
    function z(e) {
      var t = _();
      for (var n of t) I(n, e);
    }
    function j(e) {
      var t = _();
      for (var n of t) T(n, e);
    }
    function K(e) {
      var t = f();
      for (var n of t) $(n, e);
    }
    function Q(e) {
      var t = f(),
        n = k(e),
        r = n != null ? n : e;
      for (var o of t) $(o, r);
    }
    var X = {
      journeyStart: I,
      journeyStartWithTrackingCode: T,
      setTrackingCode: D,
      setAdClientToken: x,
      journeyEndSuccess: $,
      journeyEndFailure: P,
      journeyEndCancel: N,
      addPoint: M,
      addAnnotationString: w,
      addAnnotationInt: A,
      addAnnotationDouble: F,
      addAnnotationBool: O,
      addPointAnnotationString: B,
      addPointAnnotationInt: W,
      addPointAnnotationDouble: q,
      addPointAnnotationBool: U,
      journeyPublishStart: z,
      journeyPublishStartWithTrackingCode: j,
      journeyPublishEnd: K,
      journeyPublishEndWithTrackingCode: Q,
      journeyPublishPoint: H,
      journeyPublishPointAnnotationInt: G,
    };
    l.default = X;
  },
  98,
);
