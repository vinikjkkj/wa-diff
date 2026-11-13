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
          (h = $()
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
    function L() {
      return g === "idle" && b !== "not_checked";
    }
    function E(e) {
      return D(e) != null;
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = D(e);
          if (r == null) return { ok: !1, error: "disabled" };
          var o = yield O(
            r,
            babelHelpers.extends({}, n, {
              type: "wa_employee_command",
              v: 1,
              nonce: t,
              command: e,
            }),
            p,
          );
          return F(e, o);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      (e === void 0 && (e = s),
        (f = e),
        (g = "idle"),
        (h = null),
        (y = []),
        (C = []),
        (b = "not_checked"));
    }
    function D(e) {
      return e === "thanks" ? C[0] : y[0];
    }
    function x() {
      var e = r("WAWebEnvironment").getEnvironment() === "dev" ? [u, c] : [u];
      return f === "" ? e : [f].concat(e);
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = x(),
            r = yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                return O(e, d, m);
              }),
            ),
            o = function (n, o) {
              return t.filter(function (e, t) {
                return n(r[t]) || (r[t] === _ && o.includes(e));
              });
            },
            a = o(w, y);
          return {
            extensionIds: a,
            state: a.length > 0 ? "on" : N(r),
            thanksIds: o(A, C),
            timedOut: t.some(function (e, t) {
              return r[t] === _ && !a.includes(e);
            }),
          };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return e.some(w)
        ? "on"
        : e.includes(_)
          ? "no_answer"
          : e.some(M)
            ? "off"
            : "absent";
    }
    function M(e) {
      return e != null && typeof e == "object";
    }
    function w(e) {
      return (
        e != null &&
        typeof e == "object" &&
        e.ok === !0 &&
        e.v === 1 &&
        e.enabled === !0
      );
    }
    function A(e) {
      return w(e) && e != null && typeof e == "object" && e.thanks === !0;
    }
    function F(e, t) {
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
    function O(t, r, o) {
      var a = B();
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
    function B() {
      var e,
        t = (e = window.chrome) == null ? void 0 : e.runtime;
      return typeof (t == null ? void 0 : t.sendMessage) == "function"
        ? t
        : null;
    }
    ((l.prewarmEmployeeCommandExtension = v),
      (l.refreshEmployeeCommandExtension = S),
      (l.getEmployeeCommandExtensionState = R),
      (l.hasEmployeeCommandExtensionTimedOut = L),
      (l.isEmployeeCommandExtensionReady = E),
      (l.runInEmployeeCommandExtension = k),
      (l.resetEmployeeCommandExtensionForTesting = T));
  },
  98,
);
