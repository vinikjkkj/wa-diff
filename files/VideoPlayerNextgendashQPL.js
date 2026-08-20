__d(
  "VideoPlayerNextgendashQPL",
  ["emptyFunction", "nextgendasherr", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return e == null
        ? {}
        : {
            string: {
              error: o(
                "nextgendasherr",
              ).reduceCardinalityOfNextgendashErrorName(e.name),
              errorMessageFormat: e.messageFormat,
            },
            string_array: { errorMessageParams: e.messageParams },
          };
    }
    var c = [
      "bool",
      "bool_array",
      "double",
      "double_array",
      "int",
      "int_array",
      "string",
      "string_array",
    ];
    function d(e, t) {
      return e == null ? t : t == null ? e : babelHelpers.extends({}, e, t);
    }
    function m() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.filter(Boolean);
      if (r.length !== 0) {
        for (var o = {}, a = 0; a < r.length; ++a) {
          var i = r[a];
          if (i != null)
            for (var l = 0; l < c.length; ++l) {
              var s = c[l];
              e: {
                if (s === "bool") {
                  var u = d(o.bool, i.bool);
                  u != null && (o.bool = u);
                  break e;
                }
                if (s === "bool_array") {
                  var m = d(o.bool_array, i.bool_array);
                  m != null && (o.bool_array = m);
                  break e;
                }
                if (s === "double") {
                  var p = d(o.double, i.double);
                  p != null && (o.double = p);
                  break e;
                }
                if (s === "double_array") {
                  var _ = d(o.double_array, i.double_array);
                  _ != null && (o.double_array = _);
                  break e;
                }
                if (s === "int") {
                  var f = d(o.int, i.int);
                  f != null && (o.int = f);
                  break e;
                }
                if (s === "int_array") {
                  var g = d(o.int_array, i.int_array);
                  g != null && (o.int_array = g);
                  break e;
                }
                if (s === "string") {
                  var h = d(o.string, i.string);
                  h != null && (o.string = h);
                  break e;
                }
                if (s === "string_array") {
                  var y = d(o.string_array, i.string_array);
                  y != null && (o.string_array = y);
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    s,
                );
              }
            }
        }
        return o;
      }
    }
    var p = 0;
    function _(e, t) {
      return e + "." + (t != null ? t : "");
    }
    function f(e) {
      var t = e.loggingState.metadata.nextgendashInstanceIndex;
      t == null &&
        (++p,
        (t = Number.MAX_SAFE_INTEGER - p),
        e.logging.log(e, {
          error: o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashQPLStartPlayingWithFallbackInstanceKey",
            "START_PLAYING QPL API created with fallback instance key (%s).",
            t,
          ),
          type: "generic_error_as_warning",
        }));
      var n = y(e, "START_PLAYING", t);
      return n;
    }
    var g = new Map(),
      h = {
        endWithAbort: (s = r("emptyFunction")),
        endWithError: s,
        endWithSuccess: s,
        point: s,
        start: s,
        subspan: s.thatReturns(s),
      };
    function y(t, n, a) {
      var i,
        l = _(n, a),
        s = g.get(l);
      if (s != null) return s;
      var c = !1,
        d = !1,
        p = new Map(),
        f = new Set(),
        y =
          "nextgendash:" +
          ((i = t.loggingState.metadata.playerInstanceKey) != null ? i : a),
        C = y + ":start",
        v = y + ":end";
      function S(e) {
        return e != null ? e : b(t);
      }
      function R(o) {
        if (!(c || d)) {
          ((c = !0),
            t.logging.log(t, {
              qplCall: {
                event: n,
                instanceKey: a,
                method: "markerStart",
                timestamp: S(o),
              },
              type: "qpl_call",
            }),
            t.config.isInWorkerType == null &&
              t.logging.log(t, {
                qplCall: {
                  annotations: {
                    int: {
                      clientRev: t.loggingState.metadata.clientRev,
                      cometEnv: t.loggingState.metadata.cometEnv,
                      dev: void 0,
                      nextgendashInstanceIndex:
                        t.loggingState.metadata.nextgendashInstanceIndex,
                    },
                    string: {
                      playerInstanceKey:
                        t.loggingState.metadata.playerInstanceKey,
                      playerSubOrigin: t.loggingState.metadata.playerSubOrigin,
                      videoFBID: t.loggingState.metadata.videoFBID,
                    },
                  },
                  event: n,
                  instanceKey: a,
                  method: "markerAnnotate",
                },
                type: "qpl_call",
              }));
          try {
            (e || (e = r("performance"))).mark(C);
          } catch (e) {}
        }
      }
      function L(e) {
        t.config.isInWorkerType == null ? R(e) : d || (c = !0);
      }
      function E() {
        return t.config.qplMarkersEnded.includes(l) ? (k(), !0) : !1;
      }
      function k() {
        ((d = !0), p.clear(), f.clear(), g.set(l, h));
      }
      var I = /(_(?:(?:start)|(?:begin)|(?:finish)|(?:end)|(?:success)))$/;
      function T(e, t) {
        var n = e + ":" + t,
          r = t,
          o = p.get(n);
        if (o != null) {
          ((I.lastIndex = 0),
            (r = r.replace(I, "_" + o + "$1")),
            r === t && (r = t + "_" + o));
          var a = 5;
          (o > a && (r = t + "_" + a + "_more"), (o += 1));
        } else o = 1;
        return (p.set(n, o), r);
      }
      function D(o, i, l) {
        if (!(d || E())) {
          (Array.from(f)
            .reverse()
            .forEach(function (e) {
              e({ bool: { markerEnd: !0 } });
            }),
            i != null &&
              t.logging.log(t, {
                qplCall: {
                  annotations: i,
                  event: n,
                  instanceKey: a,
                  method: "markerAnnotate",
                },
                type: "qpl_call",
              }),
            t.logging.log(t, {
              qplCall: {
                action: o != null ? o : "END",
                event: n,
                instanceKey: a,
                method: "markerEnd",
                timestamp: S(l),
              },
              type: "qpl_call",
            }));
          try {
            ((e || (e = r("performance"))).mark(v), e.measure(y, C, v));
          } catch (e) {}
          k();
        }
      }
      function x(e, t) {
        D("SUCCESS", e, t);
      }
      function $(e, t) {
        D("ABORTED", e, t);
      }
      function P(e, t, n) {
        D("FAIL", m(u(e), t), n);
      }
      function N(o, i, l) {
        t.logging.log(t, {
          qplCall: {
            annotations: i,
            event: n,
            instanceKey: a,
            method: "markerPoint",
            point: o,
            timestamp: S(l),
          },
          type: "qpl_call",
        });
        try {
          (e || (e = r("performance"))).mark(y + ":" + o);
        } catch (e) {}
      }
      function M(e, n, r) {
        var a;
        if (!(d || E())) {
          I.lastIndex = 0;
          var i = (a = I.exec(e)) != null ? a : [],
            l = i[1];
          if (l != null)
            throw o("nextgendasherr").nextgendasherr(
              t,
              "VideoPlayerNextgendashQPLUseSubspanAPI",
              'QPL point "' + e + '" suffix "' + l + '" reserved for subspans.',
            );
          var s = S(r);
          (L(s), N(T("point", e), n, s));
        }
      }
      function w(t, n, o) {
        if (d || E()) return r("emptyFunction");
        var a = S(o);
        L(a);
        var i = T("subspan", t + "_start");
        N(i, n, a);
        var l = !1,
          s = function (o, a) {
            if ((f.delete(s), !(!c || d || l || E()))) {
              N(i.replace(/_start$/, "_end"), m(n, o), S(a));
              try {
                (e || (e = r("performance"))).measure(
                  y + ":" + i.replace(/_start$/, ""),
                  y + ":" + i,
                  y + ":" + i.replace(/_start$/, "_end"),
                );
              } catch (e) {}
              l = !0;
            }
          };
        return (f.add(s), s);
      }
      var A = {
        endWithAbort: $,
        endWithError: P,
        endWithSuccess: x,
        point: M,
        start: R,
        subspan: w,
      };
      return (g.set(l, A), A);
    }
    function C(e, t) {
      return e.host.clockPerfOriginMs + t.perfMs;
    }
    function b(e) {
      return e.host.clockPerfOriginMs + e.host.clock().perfMs;
    }
    ((l.qplAnnotationsForError = u),
      (l.qplAnnotationsMerge = m),
      (l.qplCacheKey = _),
      (l.qplStartPlayingApi = f),
      (l.qplEventApi = y),
      (l.qplTimestampFromClockstamp = C),
      (l.qplTimestampFromNow = b));
  },
  98,
);
