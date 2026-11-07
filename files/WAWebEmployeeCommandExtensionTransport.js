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
      h = null,
      y = [],
      C = "not_checked";
    function b() {
      g === "idle" && v();
    }
    function v() {
      return (
        h == null &&
          (h = D()
            .then(function (e) {
              var t = e.extensionIds,
                n = e.state,
                r = e.timedOut;
              return (
                (y = t),
                (C = n),
                (g = r && I("thanks") == null ? "idle" : "done"),
                n
              );
            })
            .finally(function () {
              h = null;
            })),
        h
      );
    }
    function S() {
      return C;
    }
    function R(e) {
      return I(e) != null;
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = I(e);
          if (r == null) return { ok: !1, error: "disabled" };
          var o = yield w(
            r,
            babelHelpers.extends({}, n, {
              type: "wa_employee_command",
              v: 1,
              nonce: t,
              command: e,
            }),
            p,
          );
          return M(e, o);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      (e === void 0 && (e = s),
        (f = e),
        (g = "idle"),
        (h = null),
        (y = []),
        (C = "not_checked"));
    }
    function I(e) {
      return y.find(function (t) {
        return e !== "thanks" || t !== f;
      });
    }
    function T() {
      var e = r("WAWebEnvironment").getEnvironment() === "prod" ? [u] : [u, c];
      return f === "" ? e : [f].concat(e);
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = T(),
            r = yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                return w(e, d, m);
              }),
            ),
            o = t.filter(function (e, t) {
              return N(r[t]) || (r[t] === _ && y.includes(e));
            });
          return {
            extensionIds: o,
            state: o.length > 0 ? "on" : $(r),
            timedOut: r.includes(_),
          };
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return e.some(N)
        ? "on"
        : e.includes(_)
          ? "no_answer"
          : e.some(P)
            ? "off"
            : "absent";
    }
    function P(e) {
      return e != null && typeof e == "object";
    }
    function N(e) {
      return (
        e != null &&
        typeof e == "object" &&
        e.ok === !0 &&
        e.v === 1 &&
        e.enabled === !0
      );
    }
    function M(e, t) {
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
    function w(t, r, o) {
      var a = A();
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
      (l.isEmployeeCommandExtensionReady = R),
      (l.runInEmployeeCommandExtension = L),
      (l.resetEmployeeCommandExtensionForTesting = k));
  },
  98,
);
