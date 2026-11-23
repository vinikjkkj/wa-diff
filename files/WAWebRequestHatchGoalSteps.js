__d(
  "WAWebRequestHatchGoalSteps",
  [
    "WALogger",
    "WAWebHatchGoalSteps",
    "WAWebHatchVmConnection",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 50,
      c = 50,
      d = 3e4;
    async function m(t, n) {
      var r = await _(function (e) {
          return e.activityGoalSteps(t, u, n, { timeoutMs: d });
        }),
        a =
          (r == null ? void 0 : r.kind) === "Ok"
            ? o("WAWebHatchGoalSteps").decodeHatchGoalStepsPage(r.value)
            : null;
      return (
        a == null &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-activity/read-goal-steps-failed reason=",
                  "",
                ])),
              f(r),
            )
            .sendLogs("hatch-activity-read-goal-steps-failed"),
        a
      );
    }
    async function p(e, t) {
      for (
        var n = "",
          r = 0,
          a = async function () {
            var a = r,
              i = await _(function (n) {
                return n.activityGoalStepReport(e, t, a, { timeoutMs: d });
              }),
              l =
                (i == null ? void 0 : i.kind) === "Ok"
                  ? o("WAWebHatchGoalSteps").decodeHatchGoalStepReport(i.value)
                  : null;
            if (l == null)
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-activity/read-goal-step-report-failed reason=",
                        "",
                      ])),
                    f(i),
                  )
                  .sendLogs("hatch-activity-read-goal-step-report-failed"),
                { v: null }
              );
            ((n += l.text),
              (r =
                l.nextOffset != null && l.nextOffset > a
                  ? l.nextOffset
                  : null));
          },
          i,
          l = 0;
        r != null && l < c;
        l++
      )
        if (((i = await a()), i)) return i.v;
      return { text: n, truncated: r != null };
    }
    async function _(e) {
      var t = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (t == null) return null;
      var n = await e(t);
      return n.kind === "Failure" ? e(t) : n;
    }
    function f(e) {
      return (function (e) {
        if (e == null) return "session";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected" &&
          "statusCode" in e
        ) {
          var t = e.statusCode;
          if (t != null) return "http." + t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected"
        )
          return "rejected";
        if (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "Unreadable") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "Ok")
        )
          return "malformedResponse";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Failure"
        )
          return "transport";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    ((l.requestHatchGoalStepsPage = m), (l.requestHatchGoalStepReport = p));
  },
  98,
);
