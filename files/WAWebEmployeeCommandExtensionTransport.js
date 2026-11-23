__d(
  "WAWebEmployeeCommandExtensionTransport",
  ["WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    var e = "jbneipphgmlkbfjleofhfbcnmekklnmm",
      s = "ihmoieleadakeabgjjkmmeccgmkmddgk",
      u = "badbdnpmlpcpdeijdlcdcfnhcjaehljf",
      c = { type: "wa_employee_command_ping", v: 1 },
      d = 300,
      m = 60 * 1e3,
      p = Symbol("timed_out"),
      _ = e,
      f = "idle",
      g = null,
      h = [],
      y = [],
      C = "not_checked";
    function b() {
      f === "idle" && v();
    }
    function v() {
      return (
        g == null &&
          (g = D()
            .then(function (e) {
              var t = e.extensionIds,
                n = e.state,
                r = e.thanksIds,
                o = e.timedOut;
              return ((h = t), (y = r), (C = n), (f = o ? "idle" : "done"), n);
            })
            .finally(function () {
              g = null;
            })),
        g
      );
    }
    function S() {
      return C;
    }
    function R() {
      return f === "idle" && C !== "not_checked";
    }
    function L(e) {
      return I(e) != null;
    }
    async function E(e, t, n) {
      var r = I(e);
      if (r == null) return { ok: !1, error: "disabled" };
      var o = await w(
        r,
        babelHelpers.extends({}, n, {
          type: "wa_employee_command",
          v: 1,
          nonce: t,
          command: e,
        }),
        m,
      );
      return M(e, o);
    }
    function k(t) {
      (t === void 0 && (t = e),
        (_ = t),
        (f = "idle"),
        (g = null),
        (h = []),
        (y = []),
        (C = "not_checked"));
    }
    function I(e) {
      return e === "thanks" ? y[0] : h[0];
    }
    function T() {
      var e = r("WAWebEnvironment").getEnvironment() === "dev" ? [s, u] : [s];
      return _ === "" ? e : [_].concat(e);
    }
    async function D() {
      var e = T(),
        t = await Promise.all(
          e.map(function (e) {
            return w(e, c, d);
          }),
        ),
        n = function (r, o) {
          return e.filter(function (e, n) {
            return r(t[n]) || (t[n] === p && o.includes(e));
          });
        },
        r = n(P, h);
      return {
        extensionIds: r,
        state: r.length > 0 ? "on" : x(t),
        thanksIds: n(N, y),
        timedOut: e.some(function (e, n) {
          return t[n] === p && !r.includes(e);
        }),
      };
    }
    function x(e) {
      return e.some(P)
        ? "on"
        : e.includes(p)
          ? "no_answer"
          : e.some($)
            ? "off"
            : "absent";
    }
    function $(e) {
      return e != null && typeof e == "object";
    }
    function P(e) {
      return (
        e != null &&
        typeof e == "object" &&
        e.ok === !0 &&
        e.v === 1 &&
        e.enabled === !0
      );
    }
    function N(e) {
      return P(e) && e != null && typeof e == "object" && e.thanks === !0;
    }
    function M(e, t) {
      return t === p
        ? { ok: !1, error: "timeout" }
        : t == null || typeof t != "object"
          ? { ok: !1, error: "disabled" }
          : t.ok === !0 && t.command === e && typeof t.ref == "string"
            ? { ok: !0, ref: t.ref }
            : {
                ok: !1,
                error: typeof t.error == "string" ? t.error : "create_error",
              };
    }
    function w(e, t, n) {
      var r = A();
      return r == null
        ? Promise.resolve(null)
        : new Promise(function (o) {
            var a = window.setTimeout(function () {
                return o(p);
              }, n),
              i = function (t) {
                (window.clearTimeout(a), o(t));
              };
            try {
              r.sendMessage(e, t, function (e) {
                return i(r.lastError == null ? e : null);
              });
            } catch (e) {
              i(null);
            }
          });
    }
    function A() {
      var e,
        t = (e = window.chrome) == null ? void 0 : e.runtime;
      return typeof (t == null ? void 0 : t.sendMessage) == "function"
        ? t
        : null;
    }
    ((l.prewarmEmployeeCommandExtension = b),
      (l.refreshEmployeeCommandExtension = v),
      (l.getEmployeeCommandExtensionState = S),
      (l.hasEmployeeCommandExtensionTimedOut = R),
      (l.isEmployeeCommandExtensionReady = L),
      (l.runInEmployeeCommandExtension = E),
      (l.resetEmployeeCommandExtensionForTesting = k));
  },
  98,
);
