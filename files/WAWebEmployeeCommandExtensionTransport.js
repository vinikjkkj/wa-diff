__d(
  "WAWebEmployeeCommandExtensionTransport",
  ["Promise", "WAWebEnvironment", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "ihmoieleadakeabgjjkmmeccgmkmddgk",
      u = "badbdnpmlpcpdeijdlcdcfnhcjaehljf",
      c = { type: "wa_employee_command_ping", v: 1 },
      d = 300,
      m = 60 * 1e3,
      p = Symbol("timed_out"),
      _ = "idle",
      f = null,
      g = "not_checked";
    function h() {
      _ === "idle" &&
        ((_ = "running"),
        R().then(function (e) {
          var t = e.extensionId,
            n = e.state,
            r = e.timedOut;
          ((f = t), (g = n), (_ = t == null && r ? "idle" : "done"));
        }));
    }
    function y() {
      return g;
    }
    function C(e) {
      return f != null;
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = f;
          if (r == null || !C(e)) return { ok: !1, error: "disabled" };
          var o = yield D(
            r,
            babelHelpers.extends({}, n, {
              type: "wa_employee_command",
              v: 1,
              nonce: t,
              command: e,
            }),
            m,
          );
          return T(e, o);
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      ((_ = "idle"), (f = null), (g = "not_checked"));
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t =
              r("WAWebEnvironment").getEnvironment() === "prod" ? [s] : [s, u],
            o = yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                return D(e, c, d);
              }),
            ),
            a = o.findIndex(I);
          return {
            extensionId: a === -1 ? null : t[a],
            state: E(o),
            timedOut: o.includes(p),
          };
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return e.some(I)
        ? "on"
        : e.includes(p)
          ? "no_answer"
          : e.some(k)
            ? "off"
            : "absent";
    }
    function k(e) {
      return e != null && typeof e == "object";
    }
    function I(e) {
      return (
        e != null &&
        typeof e == "object" &&
        e.ok === !0 &&
        e.v === 1 &&
        e.enabled === !0
      );
    }
    function T(e, t) {
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
    function D(t, r, o) {
      var a = x();
      return a == null
        ? (e || (e = n("Promise"))).resolve(null)
        : new (e || (e = n("Promise")))(function (e) {
            var n = window.setTimeout(function () {
                return e(p);
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
    function x() {
      var e,
        t = (e = window.chrome) == null ? void 0 : e.runtime;
      return typeof (t == null ? void 0 : t.sendMessage) == "function"
        ? t
        : null;
    }
    ((l.prewarmEmployeeCommandExtension = h),
      (l.getEmployeeCommandExtensionState = y),
      (l.isEmployeeCommandExtensionReady = C),
      (l.runInEmployeeCommandExtension = b),
      (l.resetEmployeeCommandExtensionForTesting = S));
  },
  98,
);
