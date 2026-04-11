__d(
  "InteractionTracingUserTimingUtils",
  ["TraceGroupConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i = e.UserTimingUtils;
      if (!(i == null || r.enableUserTimings !== !0)) {
        var l = t.traceId.slice(0, 3),
          f =
            o("TraceGroupConstants").COMET_PERFORMANCE_TRACE_GROUP +
            " - " +
            n +
            "(#id=" +
            a +
            ")";
        (s(i, t, n, l, f),
          u(i, t, l, r, f),
          c(i, t, l, r, f),
          d(i, t, l, f),
          m(i, t, l, f),
          p(i, t, l, r, f),
          _(i, t, l, f));
      }
    }
    function s(e, t, n, r, o) {
      if (
        (t.completed != null &&
          e.measureModern(
            "Interaction(" + n + ")[" + r + "]",
            { end: t.completed, start: t.start },
            "Interaction Timeline",
            o,
          ),
        t.markerPoints.visuallyComplete &&
          e.measureModern(
            "VisuallyComplete(" + n + ")[" + r + "]",
            { end: t.markerPoints.visuallyComplete.timestamp, start: t.start },
            "Interaction Timeline",
            o,
          ),
        t.markerPoints.vcWithoutImage &&
          e.measureModern(
            "VCWithoutImage(" + n + ")[" + r + "]",
            { end: t.markerPoints.vcWithoutImage.timestamp, start: t.start },
            "Interaction Timeline",
            o,
          ),
        t.markerPoints.heroTrace_start &&
          e.measureModern(
            "HeroTraceStart[" + r + "]",
            { end: t.markerPoints.heroTrace_start.timestamp, start: t.start },
            "Interaction Timeline",
            o,
          ),
        t.markerPoints.heroTrace_end)
      ) {
        var a = t.markerPoints.heroTrace_end.timestamp;
        e.measureModern(
          "HeroTraceEnd[" + r + "]",
          { end: a, start: t.start },
          "Interaction Timeline",
          o,
        );
      }
    }
    function u(e, t, n, r, o) {
      r.enableUserTimingsVerbose !== !0 ||
        !t.vcStateLog ||
        t.vcStateLog.forEach(function (t, r) {
          var a = t[0],
            i = t[1];
          e.measureModern(
            r + "[" + n + "]",
            { end: i, start: a },
            "VC Tracker State",
            o,
          );
        });
    }
    function c(e, t, n, r, o) {
      r.enableUserTimingsVerbose !== !0 ||
        !t.vcMutationLog ||
        t.vcMutationLog.forEach(function (t) {
          var r,
            a = (r = t.finalState) != null ? r : "",
            i =
              t.mutationType +
              "/finalState=" +
              a +
              "/id=" +
              t.veid +
              "[" +
              n +
              "]",
            l = [];
          for (var s of Object.entries(t)) {
            var u = s[0],
              c = s[1];
            c != null && l.push([u, String(JSON.stringify(c))]);
          }
          e.measureModern(i, {
            detail: {
              devtools: {
                dataType: "track-entry",
                properties: l,
                track: "VC DOM Mutation",
                trackGroup: o,
              },
            },
            end: t.paintTime,
            start: t.mutationTime,
          });
        });
    }
    function d(e, t, n, r) {
      var o = function (a) {
        var o = t.reactRender[a];
        o.forEach(function (t, o) {
          var i =
            String.fromCodePoint(9883) +
            " " +
            a +
            "[" +
            t.phase +
            "]#" +
            o +
            "[" +
            n +
            "]";
          e.measureModern(i, { end: t.end, start: t.start }, "React Render", r);
        });
      };
      for (var a in t.reactRender) o(a);
    }
    function m(e, t, n, r) {
      for (var o in t.payloadTimings) {
        var a = t.payloadTimings[o],
          i = a.payloadType + ":" + o + "[" + n + "]";
        e.measureModern(i, { end: a.end, start: a.start }, "Payload Timing", r);
      }
    }
    function p(e, t, n, r, o) {
      if (r.enableUserTimingsVerbose === !0) {
        var a = new Set([
            "RelayFlush",
            "HeroRendering",
            "ReactRender",
            "VC",
            "VCWithoutImage",
            "Error",
          ]),
          i = function (i) {
            var r = t.subSpans[i],
              l = null,
              s = null;
            r.forEach(function (t, r) {
              var u;
              if (t.type === "HeroTracing") {
                var c = (u = t.data) == null ? void 0 : u.spanType,
                  d = typeof c == "string" ? c : "HeroTracing";
                if (a.has(d)) {
                  var m = d === "VC" || d === "VCWithoutImage" ? "Pagelet" : d,
                    p = t.start;
                  l !== null && s !== null && t.start === l && (p = s);
                  var _ = i + "[" + m + "]#" + r + "[" + n + "]";
                  (e.measureModern(
                    _,
                    { end: t.end, start: p },
                    "HeroTracing",
                    o,
                  ),
                    (l = t.start),
                    (s = t.end));
                }
              }
            });
          };
        for (var l in t.subSpans) i(l);
      }
    }
    function _(e, t, n, r) {
      for (var o in t.placeholderMap) {
        var a = t.placeholderMap[o];
        a.forEach(function (t, o) {
          var a, i;
          if (t.endTime != null) {
            var l = (a = t.description) != null ? a : "unknown",
              s = (i = t.spanType) != null ? i : "unknown",
              u = l + "[" + s + "]#" + o + "[" + n + "]";
            e.measureModern(
              u,
              { end: t.endTime, start: t.startTime },
              "Placeholders",
              r,
            );
          }
        });
      }
    }
    l.markInteraction = e;
  },
  98,
);
