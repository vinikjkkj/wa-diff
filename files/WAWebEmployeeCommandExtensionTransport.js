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
      C = [],
      b = "not_checked";
    function v() {
      g === "idle" && S();
    }
    function S() {
      return (
        h == null &&
          (h = x()
            .then(function (e) {
              var t = e.extensionIds,
                n = e.state,
                r = e.thanksIds,
                o = e.timedOut;
              return ((y = t), (C = r), (b = n), (g = o ? "idle" : "done"), n);
            })
            .finally(function () {
              h = null;
            })),
        h
      );
    }
    function R() {
      return b;
    }
    function L(e) {
      return T(e) != null;
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = T(e);
          if (r == null) return { ok: !1, error: "disabled" };
          var o = yield F(
            r,
            babelHelpers.extends({}, n, {
              type: "wa_employee_command",
              v: 1,
              nonce: t,
              command: e,
            }),
            p,
          );
          return A(e, o);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      (e === void 0 && (e = s),
        (f = e),
        (g = "idle"),
        (h = null),
        (y = []),
        (C = []),
        (b = "not_checked"));
    }
    function T(e) {
      return e === "thanks" ? C[0] : y[0];
    }
    function D() {
      var e = r("WAWebEnvironment").getEnvironment() === "prod" ? [u] : [u, c];
      return f === "" ? e : [f].concat(e);
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = D(),
            r = yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                return F(e, d, m);
              }),
            ),
            o = function (n, o) {
              return t.filter(function (e, t) {
                return n(r[t]) || (r[t] === _ && o.includes(e));
              });
            },
            a = o(M, y);
          return {
            extensionIds: a,
            state: a.length > 0 ? "on" : P(r),
            thanksIds: o(w, C),
            timedOut: t.some(function (e, t) {
              return r[t] === _ && !a.includes(e);
            }),
          };
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return e.some(M)
        ? "on"
        : e.includes(_)
          ? "no_answer"
          : e.some(N)
            ? "off"
            : "absent";
    }
    function N(e) {
      return e != null && typeof e == "object";
    }
    function M(e) {
      return (
        e != null &&
        typeof e == "object" &&
        e.ok === !0 &&
        e.v === 1 &&
        e.enabled === !0
      );
    }
    function w(e) {
      return M(e) && e != null && typeof e == "object" && e.thanks === !0;
    }
    function A(e, t) {
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
    function F(t, r, o) {
      var a = O();
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
    function O() {
      var e,
        t = (e = window.chrome) == null ? void 0 : e.runtime;
      return typeof (t == null ? void 0 : t.sendMessage) == "function"
        ? t
        : null;
    }
    ((l.prewarmEmployeeCommandExtension = v),
      (l.refreshEmployeeCommandExtension = S),
      (l.getEmployeeCommandExtensionState = R),
      (l.isEmployeeCommandExtensionReady = L),
      (l.runInEmployeeCommandExtension = E),
      (l.resetEmployeeCommandExtensionForTesting = I));
  },
  98,
);
