__d(
  "WAWebHatchVmConnection",
  [
    "$InternalEnum",
    "Promise",
    "WAAbortError",
    "WAExponentialBackoff",
    "WALogger",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmCredentials",
    "WAWebHatchVmSession",
    "WAWebL10N",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 3,
      g = 2,
      h = 0.1,
      y = 2e3,
      C = 3e4,
      b = 3e4,
      v = new Set(["handshake_timeout", "unreachable", "ws_dropped"]),
      S = n("$InternalEnum").Mirrored(["Linked", "Unlinked", "Unknown"]),
      R = "abandoned",
      L = { failure: "aborted", kind: "failed" },
      E = { failure: "threw", kind: "failed" },
      k = { failure: "stale_generation", kind: "failed" },
      I = null,
      T = 0,
      D = 0,
      x = !1,
      $ = !1,
      P = new Set();
    function N() {
      te();
      var e = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (e != null) return (_ || (_ = n("Promise"))).resolve(e);
      var t = G();
      return ((t.demand.unabortable = !0), t.api);
    }
    function M(e) {
      if (e != null) return w(e);
      var t = N(),
        n = I;
      return t.then(function (e) {
        return e != null
          ? { kind: "ready", api: e }
          : H(n == null ? void 0 : n.failure);
      });
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((te(), e.aborted)) return L;
          var t = T,
            a = new AbortController(),
            i = function () {
              return a.abort();
            };
          e.addEventListener("abort", i, { once: !0 });
          var l = re(i),
            s = null,
            u = L,
            c = r("err")("Muse VM channel refused"),
            d = function () {
              return a.signal.aborted || T !== t;
            },
            m;
          try {
            m = yield o("WAExponentialBackoff").exponentialBackoff(
              {
                factor: g,
                jitter: h,
                maxTimeout: C,
                minTimeout: y,
                retries: f,
                signal: a.signal,
                timeoutIncludesTaskDuration: !1,
              },
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    var n;
                    if (
                      (t === 1 && U(u),
                      t > 0 && !r("WAWebNetworkStatus").online)
                    ) {
                      var l = u;
                      if (((u = W(u, "offline")), !(yield B(a.signal))))
                        return u;
                      u = l;
                    }
                    if (d()) return u;
                    var m = yield F(a.signal);
                    if (((u = m.result), u.kind === "ready")) return (V(t), u);
                    if (d() || !O(u)) return u;
                    s != null || (s = q(i));
                    var p = (n = m.failure) == null ? void 0 : n.credentials;
                    return (
                      p != null &&
                        o(
                          "WAWebHatchVmCredentials",
                        ).waWebHatchVmCredentials.refreshVm(p),
                      e(c)
                    );
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          } catch (e) {
            (e !== c &&
              !(e instanceof o("WAAbortError").AbortError) &&
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: connect retry threw name=",
                      "",
                    ])),
                  ie(e),
                )
                .sendLogs("hatch-vm-connect-retry-threw"),
              (m = u));
          } finally {
            (s == null || s(), e.removeEventListener("abort", i), l());
          }
          return m.kind === "ready" ? m : e.aborted ? L : T === t ? m : k;
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (t != null)
        return (_ || (_ = n("Promise"))).resolve({
          failure: null,
          result: { api: t, kind: "ready" },
        });
      var r = G();
      r.demand.waiters++;
      var a = !0,
        i = function () {
          a && ((a = !1), r.demand.waiters--);
        };
      e.addEventListener("abort", i, { once: !0 });
      var l = function () {
        (i(), e.removeEventListener("abort", i));
      };
      return r.api.then(
        function (e) {
          return (
            l(),
            {
              failure: r.failure,
              result: e != null ? { api: e, kind: "ready" } : H(r.failure),
            }
          );
        },
        function () {
          return (l(), { failure: r.failure, result: E });
        },
      );
    }
    function O(e) {
      return (
        e.kind === "failed" &&
        e.failure === "channel" &&
        e.cause != null &&
        v.has(e.cause)
      );
    }
    function B(e) {
      return new (_ || (_ = n("Promise")))(function (t) {
        if (e.aborted) {
          t(!1);
          return;
        }
        var n = function () {
          return t(!1);
        };
        e.addEventListener("abort", n, { once: !0 });
        var o = function () {
          (e.removeEventListener("abort", n), t(!e.aborted));
        };
        r("WAWebNetworkStatus").waitIfOffline().then(o, o);
      });
    }
    function W(e, t) {
      return e.kind === "failed"
        ? { cause: t, failure: e.failure, kind: "failed" }
        : e;
    }
    function q(e) {
      var t = self.setTimeout(e, b);
      return function () {
        return self.clearTimeout(t);
      };
    }
    function U(t) {
      var n = t.kind === "failed" ? t.cause : null;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-vm: connect retrying cause=",
              "",
            ])),
          String(n),
        )
        .sendLogs("hatch-vm-connect-retried");
    }
    function V(e) {
      e > 0 &&
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: connect recovered attempts=",
                "",
              ])),
            e + 1,
          )
          .sendLogs("hatch-vm-connect-recovered");
    }
    function H(e) {
      var t,
        n = e == null ? void 0 : e.cause,
        r = (t = e == null ? void 0 : e.current) != null ? t : "no_api";
      return n == null
        ? { failure: r, kind: "failed" }
        : { cause: n, failure: r, kind: "failed" };
    }
    function G() {
      if (I == null) {
        var e = { cause: null, credentials: null, current: null, detail: null },
          t = { unabortable: !1, waiters: 0 },
          n = z(e, t).finally(function () {
            var e;
            ((e = I) == null ? void 0 : e.api) === n && (I = null);
          });
        I = { api: n, demand: t, failure: e };
      }
      return I;
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = T;
          D = n;
          var r = yield Q(e, function () {
            return K(n, t);
          });
          return T !== n
            ? (D === n && se(),
              (e.current = "stale_generation"),
              (e.cause = null),
              null)
            : (r == null && ee(e),
              r == null && e.current == null && (e.current = "no_api"),
              r);
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return T === e && (t.unabortable || t.waiters > 0);
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (n.kind !== "ok") return Y(e, "credentials", n.detail, n.cause);
          e.credentials = n.credentials;
          try {
            var r = yield J(n.credentials, t);
            if (r === R) return Y(e, "aborted", null, null);
            if (r != null) return Y(e, "channel", r.detail, r.cause);
          } catch (t) {
            return Y(e, "threw", t, null);
          }
          return o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n, r) {
      return ((e.current = t), (e.cause = r), (e.detail = n), null);
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return R;
          var n = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
            acceptLanguage: r("WAWebL10N").getFullLocale(),
            credentials: e,
          });
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "Ready"
            )
              return null;
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "Failure" &&
              "cause" in e &&
              "detail" in e
            ) {
              var t = e.cause,
                n = e.detail;
              return { cause: t, detail: n };
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(n);
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      var t = e.cause,
        n = e.current,
        r = e.detail;
      if (!(n == null || n === "aborted")) {
        var a =
          t == null
            ? o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-vm: connect failed reason=",
                    "",
                  ])),
                n,
              )
            : o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-vm: connect failed reason=",
                    " cause=",
                    "",
                  ])),
                n,
                t,
              );
        a.devConsole(r).sendLogs("hatch-vm-connect-failed");
      }
    }
    function te() {
      $ ||
        (($ = !0),
        (x = le() !== S.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = le();
          if (e !== S.Unknown) {
            var t = x;
            if (((x = e === S.Linked), t && !x)) {
              (T++,
                se(),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(P)) oe(n);
            }
          }
        }));
    }
    function ne() {
      return (te(), T);
    }
    function re(e) {
      return (
        te(),
        P.add(e),
        function () {
          P.delete(e);
        }
      );
    }
    function oe(e) {
      try {
        e();
      } catch (e) {
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: an account change listener failed name=",
                "",
              ])),
            ie(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var ae = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function ie(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && ae.has(t) ? t : "Error";
    }
    function le() {
      return (function (e) {
        if (e === "linked") return S.Linked;
        if (e === "unlinked") return S.Unlinked;
        if (e == null) return S.Unknown;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState(),
      );
    }
    function se() {
      ((I = null),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect());
    }
    ((l.connectHatchVmApi = N),
      (l.connectHatchVmApiWithResult = M),
      (l.getHatchVmAccountGeneration = ne),
      (l.subscribeToHatchVmAccountChange = re));
  },
  98,
);
