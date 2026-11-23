__d(
  "WAWebHatchAgentReset",
  [
    "WAWebHatchDataControls",
    "WAWebHatchJsonReaders",
    "WAWebHatchLogging",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 25e3,
      s = 404,
      u = { kind: "account_changed" },
      c = { kind: "confirmed" },
      d = { kind: "unconfirmed" },
      m = { kind: "unsupported" },
      p = { kind: "failed", reason: "generic" },
      _ = { kind: "failed", reason: "offline" },
      f = null;
    function g() {
      var e = o("WAWebHatchVmConnection").getHatchVmAccountGeneration();
      if (f != null && f.generation === e) return f.promise;
      var t = h(e)
        .then(S, R)
        .finally(function () {
          var e;
          ((e = f) == null ? void 0 : e.promise) === t && (f = null);
        });
      return ((f = { generation: e, promise: t }), t);
    }
    async function h(t) {
      var n = await o("WAWebHatchDataControls").isHatchOffline();
      if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
        return u;
      if (n) return _;
      var r = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
        return u;
      if (r == null) return y(t);
      var a = await r.exchange(
        "POST",
        o("WAWebHatchVmTransport").JarvisPaths.AGENT_RESET,
        { timeoutMs: e },
      );
      return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t
        ? u
        : C(a, t);
    }
    async function y(e) {
      var t = await o("WAWebHatchDataControls").isHatchOffline();
      return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
        ? u
        : t
          ? _
          : p;
    }
    async function C(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "response" &&
          "body" in e &&
          "statusCode" in e
        ) {
          var n = e.body,
            r = e.statusCode;
          return b(r, n);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "failure" &&
          e.reason === "NO_CHANNEL"
        )
          return y(t);
        if (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "failure") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "rejected") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "unreadable")
        )
          return d;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function b(e, t) {
      return e >= 200 && e < 300
        ? v(t)
          ? c
          : d
        : e === s
          ? m
          : e >= 400 && e < 500
            ? p
            : d;
    }
    function v(e) {
      try {
        return (
          o("WAWebHatchJsonReaders").readBool(
            JSON.parse(new TextDecoder().decode(e)),
            "ok",
          ) === !0
        );
      } catch (e) {
        return !1;
      }
    }
    function S(e) {
      var t = (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "confirmed"
        )
          return { action: "agent_reset_success" };
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "failed" &&
          "reason" in e
        ) {
          var t = e.reason;
          return { action: "agent_reset_error", failureReason: t };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unconfirmed"
        )
          return { action: "agent_reset_error", failureReason: "unconfirmed" };
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unsupported"
        )
          return { action: "agent_reset_error", failureReason: "unsupported" };
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "account_changed"
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
      return (t != null && o("WAWebHatchLogging").logHatchDataControls(t), e);
    }
    function R(e) {
      throw (
        o("WAWebHatchLogging").logHatchDataControls({
          action: "agent_reset_error",
          failureReason: "generic",
        }),
        e
      );
    }
    l.resetHatchAgent = g;
  },
  98,
);
