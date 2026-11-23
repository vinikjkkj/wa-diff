__d(
  "WAWebDeleteHatchScheduledTask",
  [
    "WALogger",
    "WAWebHatchPermissionsFailureReason",
    "WAWebHatchScheduledTasksStream",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNetworkStatus",
    "WAWebReadHatchScheduledTasks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = 403,
      c = 404;
    async function d(e) {
      var t = e.generation,
        n = e.signal,
        a = e.taskId;
      if (o("WAWebHatchVmTransport").JarvisPaths.SCHEDULED_TASK(a) == null)
        return h(_("generic"), "invalid_id");
      if (!r("WAWebNetworkStatus").online) return h("offline", "offline");
      var i = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(n);
      if (i.kind !== "ready")
        return (function (e) {
          if (e === "offline") return h("offline", "offline");
          if (e === "cancelled") return "cancelled";
          if (e === "session") return h(_("generic"), "session");
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(
          o("WAWebReadHatchScheduledTasks").classifyHatchVmConnectFailure(
            i.failure,
            i.cause,
          ),
        );
      if (
        n.aborted ||
        o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t
      )
        return "cancelled";
      var l = await i.api.deleteScheduledTask(a, { timeoutMs: s });
      return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t
        ? "stale"
        : m(l, a, t);
    }
    function m(e, t, n) {
      return e.kind === "Ok" || p(e, c)
        ? (o("WAWebHatchScheduledTasksStream").forgetHatchScheduledTask(t, n),
          "deleted")
        : p(e, u)
          ? h("forbidden", "forbidden")
          : h(_(f(e)), y(e));
    }
    function p(e, t) {
      return e.kind === "Rejected" && e.statusCode === t;
    }
    function _(e) {
      return { failureReason: e, kind: "failed" };
    }
    function f(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected" &&
          "statusCode" in e
        ) {
          var t = e.statusCode;
          if (g(t))
            return o(
              "WAWebHatchPermissionsFailureReason",
            ).hatchPermissionsHttpFailureReason(t);
        }
        return ((typeof e == "object" && e !== null) ||
          typeof e == "function") &&
          e.kind === "Failure" &&
          e.reason === "TIMEOUT"
          ? "timeout"
          : ((typeof e == "object" && e !== null) || typeof e == "function") &&
              e.kind === "Failure" &&
              (e.reason === "NO_CHANNEL" || e.reason === "TRANSPORT")
            ? "offline"
            : "generic";
      })(e);
    }
    function g(e) {
      return e != null && (e < 200 || e >= 300);
    }
    function h(t, n) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-scheduled-tasks/delete-failed reason=",
                "",
              ])),
            n,
          )
          .sendLogs("hatch-scheduled-tasks-delete-failed"),
        t
      );
    }
    function y(e) {
      return (function (e) {
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
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Unreadable"
        )
          return "malformedResponse";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Failure"
        )
          return "transport";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Ok"
        )
          return "none";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    l.deleteHatchScheduledTask = d;
  },
  98,
);
