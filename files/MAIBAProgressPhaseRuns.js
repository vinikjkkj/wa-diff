__d(
  "MAIBAProgressPhaseRuns",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t != null) {
        var n = e[t];
        n != null &&
          n.isCompleted !== !0 &&
          (e[t] = babelHelpers.extends({}, n, { isCompleted: !0 }));
      }
    }
    function s(t, n) {
      var r = [],
        o = null,
        a = null;
      for (var i of t) {
        var l,
          s =
            i.isRenderedByToolCall === !0 && (l = i.progressPhase) != null
              ? l
              : null;
        if (s == null) {
          (e(r, a), (o = null), (a = null), r.push(i));
          continue;
        }
        if (s === o && a != null) {
          var u = r[a];
          r[a] = babelHelpers.extends({}, i, { toolCallId: u.toolCallId });
          continue;
        }
        (e(r, a), (o = s), (a = r.length), r.push(i));
      }
      return ((n === "LLM_DONE" || n === "OVERALL_DONE") && e(r, a), r);
    }
    l.default = s;
  },
  98,
);
