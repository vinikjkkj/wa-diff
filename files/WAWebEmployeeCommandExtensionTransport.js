__d(
  "WAWebEmployeeCommandExtensionTransport",
  ["Promise", "WAWebEnvironment", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "jbneipphgmlkbfjleofhfbcnmekklnmm",
      u = "ihmoieleadakeabgjjkmmeccgmkmddgk",
      c = "badbdnpmlpcpdeijdlcdcfnhcjaehljf",
      d = { type: "wa_employee_command_ping", v: 1 },
      m = 300,
      p = 60 * 1e3,
      _ = Symbol("timed_out"),
      f = s,
      g = "idle",
      h = [],
      y = "not_checked";
    function C() {
      g === "idle" &&
        ((g = "running"),
        I().then(function (e) {
          var t = e.extensionIds,
            n = e.state,
            r = e.timedOut;
          ((h = t), (y = n), (g = r && E("thanks") == null ? "idle" : "done"));
        }));
    }
    function b() {
      return y;
    }
    function v(e) {
      return E(e) != null;
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = E(e);
          if (r == null) return { ok: !1, error: "disabled" };
          var o = yield N(
            r,
            babelHelpers.extends({}, n, {
              type: "wa_employee_command",
              v: 1,
              nonce: t,
              command: e,
            }),
            p,
          );
          return P(e, o);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      (e === void 0 && (e = s),
        (f = e),
        (g = "idle"),
        (h = []),
        (y = "not_checked"));
    }
    function E(e) {
      return h.find(function (t) {
        return e !== "thanks" || t !== f;
      });
    }
    function k() {
      var e = r("WAWebEnvironment").getEnvironment() === "prod" ? [u] : [u, c];
      return f === "" ? e : [f].concat(e);
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = k(),
            r = yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                return N(e, d, m);
              }),
            );
          return {
            extensionIds: t.filter(function (e, t) {
              return $(r[t]);
            }),
            state: D(r),
            timedOut: r.includes(_),
          };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return e.some($)
        ? "on"
        : e.includes(_)
          ? "no_answer"
          : e.some(x)
            ? "off"
            : "absent";
    }
    function x(e) {
      return e != null && typeof e == "object";
    }
    function $(e) {
      return (
        e != null &&
        typeof e == "object" &&
        e.ok === !0 &&
        e.v === 1 &&
        e.enabled === !0
      );
    }
    function P(e, t) {
      return t === _
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
    function N(t, r, o) {
      var a = M();
      return a == null
        ? (e || (e = n("Promise"))).resolve(null)
        : new (e || (e = n("Promise")))(function (e) {
            var n = window.setTimeout(function () {
                return e(_);
              }, o),
              i = function (r) {
                (window.clearTimeout(n), e(r));
              };
            try {
              a.sendMessage(t, r, function (e) {
                return i(a.lastError == null ? e : null);
              });
            } catch (e) {
              i(null);
            }
          });
    }
    function M() {
      var e,
        t = (e = window.chrome) == null ? void 0 : e.runtime;
      return typeof (t == null ? void 0 : t.sendMessage) == "function"
        ? t
        : null;
    }
    ((l.prewarmEmployeeCommandExtension = C),
      (l.getEmployeeCommandExtensionState = b),
      (l.isEmployeeCommandExtensionReady = v),
      (l.runInEmployeeCommandExtension = S),
      (l.resetEmployeeCommandExtensionForTesting = L));
  },
  98,
);
