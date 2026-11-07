__d(
  "WAWebHatchAgentReset",
  [
    "WAWebHatchDataControls",
    "WAWebHatchJsonReaders",
    "WAWebHatchLogging",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
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
        .then(E, k)
        .finally(function () {
          var e;
          ((e = f) == null ? void 0 : e.promise) === t && (f = null);
        });
      return ((f = { generation: e, promise: t }), t);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebHatchDataControls").isHatchOffline();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return u;
          if (n) return _;
          var r = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return u;
          if (r == null) return C(t);
          var a = yield r.exchange(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.AGENT_RESET,
            { timeoutMs: e },
          );
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t
            ? u
            : v(a, t);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchDataControls").isHatchOffline();
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
            ? u
            : t
              ? _
              : p;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "response" &&
              "body" in e &&
              "statusCode" in e
            ) {
              var n = e.body,
                r = e.statusCode;
              return R(r, n);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "failure" &&
              e.reason === "NO_CHANNEL"
            )
              return C(t);
            if (
              (((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
                e.kind === "failure") ||
              (((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
                e.kind === "rejected") ||
              (((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
                e.kind === "unreadable")
            )
              return d;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return e >= 200 && e < 300
        ? L(t)
          ? c
          : d
        : e === s
          ? m
          : e >= 400 && e < 500
            ? p
            : d;
    }
    function L(e) {
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
    function E(e) {
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
    function k(e) {
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
