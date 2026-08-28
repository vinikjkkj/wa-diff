__d(
  "SynchronousProfiler",
  [
    "CometDevToolsLightspeedStoredProcedureStoredProfilingTypes.flow",
    "FBLogger",
    "LSDatascriptRuntimeTypes",
    "cr:1088",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      o("LSDatascriptRuntimeTypes").TopLevelCallOrigin.BROKER,
      o("LSDatascriptRuntimeTypes").TopLevelCallOrigin.UI,
    ];
    function s(t, a, i) {
      var l = [],
        s = a != null ? a : void 0,
        u = t;
      function d() {
        if (l.length) return l[l.length - 1];
      }
      function m() {
        var e = s;
        return ((s = void 0), e);
      }
      function p() {
        var e = d();
        return e ? [].concat(e.sequence, [e.calls.length + 1]) : [++u];
      }
      return {
        captureStack: function () {
          return [].concat(l);
        },
        endCall: function (o) {
          var t = l.pop();
          if (!t) {
            r("FBLogger")("messenger_web").warn(
              "LS profiling stack is corrupted (extra endCall).",
            );
            return;
          }
          ((t.endTime = Date.now()),
            t.uid !== o &&
              r("FBLogger")("messenger_web").warn(
                "LS profiling stack is corrupted (out of order).",
              ),
            !d() &&
              e.includes(t.type) &&
              (n("cr:1088") == null ||
                n("cr:1088").recordStoredProcedureCall(t)));
        },
        startCall: function (t, n, r, a) {
          a === void 0 &&
            (a = o(
              "CometDevToolsLightspeedStoredProcedureStoredProfilingTypes.flow",
            ).InternalCallType.SPROC);
          var e = d(),
            s = c(t),
            u = {
              args: n,
              calls: [],
              endTime: -1,
              name:
                a ===
                o(
                  "CometDevToolsLightspeedStoredProcedureStoredProfilingTypes.flow",
                ).InternalCallType.SPROC
                  ? s
                  : "<native op> " + s,
              opType: a,
              params: m(),
              sequence: p(),
              startTime: Date.now(),
              tablesTouched: {},
              type: i,
              uid: r,
            };
          (l.push(u), e && e.calls.push(u));
        },
        touchTable: function (t) {
          var e = d();
          if (e) {
            var n;
            e.tablesTouched[t] = ((n = e.tablesTouched[t]) != null ? n : 0) + 1;
          }
        },
      };
    }
    var u = "__sproc_name__";
    function c(e) {
      if (e != null) {
        if (typeof e == "string") return e;
        if (typeof e == "function") {
          if (
            Object.prototype.hasOwnProperty.call(e, u) &&
            typeof e[u] == "string"
          )
            return e[u];
          if (
            Object.prototype.hasOwnProperty.call(e, "name") &&
            typeof e.name == "string"
          )
            return e.name;
        }
      }
      return "Unknown";
    }
    ((l.buildProfiler = s), (l.getNameFromSproc = c));
  },
  98,
);
