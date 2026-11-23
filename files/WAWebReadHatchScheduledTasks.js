__d(
  "WAWebReadHatchScheduledTasks",
  [
    "WALogger",
    "WAWebHatchScheduledTasksDecoder",
    "WAWebHatchVmConnection",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = { kind: "failed" },
      c = { kind: "offline" };
    async function d(e) {
      var t = await m(e, {
        decode: o("WAWebHatchScheduledTasksDecoder").decodeHatchScheduledTasks,
        decodeFailedReason: "noList",
        reportFailure: f,
        request: function (t) {
          return t.scheduledTasks({ timeoutMs: s });
        },
      });
      return t.kind === "ok"
        ? { generation: t.generation, kind: "ok", tasks: t.value }
        : t;
    }
    async function m(e, t) {
      if (!r("WAWebNetworkStatus").online)
        return (t.reportFailure("offline"), c);
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        a = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(e);
      if (a.kind !== "ready") {
        var i = p(a.failure, a.cause);
        return (
          i !== "cancelled" && t.reportFailure(i),
          i === "offline" ? c : u
        );
      }
      var l = await _(function () {
        return t.request(a.api);
      });
      if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== n)
        return u;
      var s = l.kind === "Ok" ? t.decode(l.value) : null;
      return s == null
        ? (t.reportFailure(g(l, t.decodeFailedReason)), u)
        : { generation: n, kind: "ok", value: s };
    }
    function p(e, t) {
      return t === "offline"
        ? "offline"
        : e === "aborted" || e === "stale_generation"
          ? "cancelled"
          : "session";
    }
    async function _(e) {
      var t = await e();
      return t.kind === "Failure" && t.reason !== "TIMEOUT" ? e() : t;
    }
    function f(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-scheduled-tasks/read-failed reason=",
              "",
            ])),
          t,
        )
        .sendLogs("hatch-scheduled-tasks-read-failed");
    }
    function g(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Ok"
        )
          return t;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected" &&
          "statusCode" in e
        ) {
          var n = e.statusCode;
          if (n != null) return "http." + n;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected"
        )
          return "rejected";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Unreadable"
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
    ((l.READ_TIMEOUT_MS = s),
      (l.readHatchScheduledTasks = d),
      (l.readFromHatchVm = m),
      (l.classifyHatchVmConnectFailure = p));
  },
  98,
);
