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
      S = new Map(),
      R = n("$InternalEnum").Mirrored(["Linked", "Unlinked", "Unknown"]),
      L = "abandoned",
      E = { failure: "aborted", kind: "failed" },
      k = { failure: "threw", kind: "failed" },
      I = { failure: "stale_generation", kind: "failed" },
      T = null,
      D = 0,
      x = 0,
      $ = !1,
      P = !1,
      N = new Set();
    function M() {
      ne();
      var e = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (e != null) return (_ || (_ = n("Promise"))).resolve(e);
      var t = z();
      return ((t.demand.unabortable = !0), t.api);
    }
    function w(e) {
      if (e != null) return A(e);
      var t = M(),
        n = T;
      return t.then(function (e) {
        return e != null
          ? { kind: "ready", api: e }
          : G(n == null ? void 0 : n.failure);
      });
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((ne(), e.aborted)) return E;
          var t = D,
            a = new AbortController(),
            i = function () {
              return a.abort();
            };
          e.addEventListener("abort", i, { once: !0 });
          var l = oe(i),
            s = null,
            u = E,
            c = r("err")("Muse VM channel refused"),
            d = function () {
              return a.signal.aborted || D !== t;
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
                      (t === 1 && V(u),
                      t > 0 && !r("WAWebNetworkStatus").online)
                    ) {
                      var l = u;
                      if (((u = q(u, "offline")), !(yield W(a.signal))))
                        return u;
                      u = l;
                    }
                    if (d()) return u;
                    var m = yield O(a.signal);
                    if (((u = m.result), u.kind === "ready")) return (H(t), u);
                    if (d() || !B(u)) return u;
                    s != null || (s = U(i));
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
                  le(e),
                )
                .sendLogs("hatch-vm-connect-retry-threw"),
              (m = u));
          } finally {
            (s == null || s(), e.removeEventListener("abort", i), l());
          }
          return m.kind === "ready" ? m : e.aborted ? E : D === t ? m : I;
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (t != null)
        return (_ || (_ = n("Promise"))).resolve({
          failure: null,
          result: { api: t, kind: "ready" },
        });
      var r = z();
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
              result: e != null ? { api: e, kind: "ready" } : G(r.failure),
            }
          );
        },
        function () {
          return (l(), { failure: r.failure, result: k });
        },
      );
    }
    function B(e) {
      return (
        e.kind === "failed" &&
        e.failure === "channel" &&
        e.cause != null &&
        v.has(e.cause)
      );
    }
    function W(e) {
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
    function q(e, t) {
      return e.kind === "failed"
        ? { cause: t, failure: e.failure, kind: "failed" }
        : e;
    }
    function U(e) {
      var t = self.setTimeout(e, b);
      return function () {
        return self.clearTimeout(t);
      };
    }
    function V(t) {
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
    function H(e) {
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
    function G(e) {
      var t,
        n = e == null ? void 0 : e.cause,
        r = (t = e == null ? void 0 : e.current) != null ? t : "no_api";
      return n == null
        ? { failure: r, kind: "failed" }
        : { cause: n, failure: r, kind: "failed" };
    }
    function z() {
      if (T == null) {
        var e = { cause: null, credentials: null, current: null, detail: null },
          t = { unabortable: !1, waiters: 0 },
          n = j(e, t).finally(function () {
            var e;
            ((e = T) == null ? void 0 : e.api) === n && (T = null);
          });
        T = { api: n, demand: t, failure: e };
      }
      return T;
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = D;
          x = n;
          var r = yield X(e, function () {
            return Q(n, t);
          });
          return D !== n
            ? (x === n && ue(),
              (e.current = "stale_generation"),
              (e.cause = null),
              null)
            : (r == null && te(e),
              r == null && e.current == null && (e.current = "no_api"),
              r);
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return D === e && (t.unabortable || t.waiters > 0);
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (n.kind !== "ok") return J(e, "credentials", n.detail, n.cause);
          e.credentials = n.credentials;
          try {
            var r = yield Z(n.credentials, t);
            if (r === L) return J(e, "aborted", null, null);
            if (r != null) return J(e, "channel", r.detail, r.cause);
          } catch (t) {
            return J(e, "threw", t, null);
          }
          return o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n, r) {
      return ((e.current = t), (e.cause = r), (e.detail = n), null);
    }
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return L;
          var n = r("WAWebL10N").getFullLocale(),
            a = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
              acceptLanguage: n,
              credentials: e,
              trustedFingerprint: S.get(e.vmId),
            });
          if (a.kind !== "NeedsTrust")
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
            })(a);
          if (!t()) return L;
          var i = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
            acceptLanguage: n,
            credentials: e,
            trustedFingerprint: a.fingerprint,
          });
          return (
            i.kind === "Ready" && S.set(e.vmId, a.fingerprint),
            (function (e) {
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
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "NeedsTrust"
              )
                return {
                  cause: "unexpected_trust",
                  detail: "Peer asked for trust after pinning",
                };
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(i)
          );
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
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
    function ne() {
      P ||
        ((P = !0),
        ($ = se() !== R.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = se();
          if (e !== R.Unknown) {
            var t = $;
            if ((($ = e === R.Linked), t && !$)) {
              (D++,
                ue(),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(N)) ae(n);
            }
          }
        }));
    }
    function re() {
      return (ne(), D);
    }
    function oe(e) {
      return (
        ne(),
        N.add(e),
        function () {
          N.delete(e);
        }
      );
    }
    function ae(e) {
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
            le(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var ie = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function le(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && ie.has(t) ? t : "Error";
    }
    function se() {
      return (function (e) {
        if (e === "linked") return R.Linked;
        if (e === "unlinked") return R.Unlinked;
        if (e == null) return R.Unknown;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState(),
      );
    }
    function ue() {
      ((T = null),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect(),
        S.clear());
    }
    ((l.connectHatchVmApi = M),
      (l.connectHatchVmApiWithResult = w),
      (l.getHatchVmAccountGeneration = re),
      (l.subscribeToHatchVmAccountChange = oe));
  },
  98,
);
