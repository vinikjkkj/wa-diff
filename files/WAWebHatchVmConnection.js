__d(
  "WAWebHatchVmConnection",
  [
    "$InternalEnum",
    "Promise",
    "WAAbortError",
    "WAExponentialBackoff",
    "WALogger",
    "WAWebHatchCvmAttestedVms",
    "WAWebHatchCvmConnect",
    "WAWebHatchCvmSecretPref",
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
      f = 5,
      g = 2,
      h = 0.1,
      y = 2e3,
      C = 3e4,
      b = 6e4,
      v = new Set(["handshake_timeout", "unreachable", "ws_dropped"]),
      S = new Set([
        "attestation_rejected",
        "handshake_failed",
        "handshake_timeout",
        "unreachable",
        "ws_dropped",
      ]),
      R = n("$InternalEnum").Mirrored(["Linked", "Unlinked", "Unknown"]),
      L = "abandoned",
      E = "downgrade_refused",
      k = { failure: "aborted", kind: "failed" },
      I = { failure: "threw", kind: "failed" },
      T = { failure: "stale_generation", kind: "failed" },
      D = null,
      x = null,
      $ = 0,
      P = 0,
      N = !1,
      M = !1,
      w = new Set();
    function A() {
      return F().then(function (e) {
        return e.kind === "ready" ? e.api : null;
      });
    }
    function F(e) {
      if ((me(), (e == null ? void 0 : e.aborted) === !0))
        return (_ || (_ = n("Promise"))).resolve(k);
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      return t != null
        ? (_ || (_ = n("Promise"))).resolve({ kind: "ready", api: t })
        : O(e);
    }
    function O(e) {
      var t,
        r = (t = B()) != null ? t : W();
      return (
        r.waiters++,
        e == null
          ? r.result
          : new (_ || (_ = n("Promise")))(function (t) {
              var n = function () {
                (r.waiters--,
                  r.waiters === 0 &&
                    (r.controller.abort(), x === r && (x = null)),
                  t(k));
              };
              (e.addEventListener("abort", n, { once: !0 }),
                r.result.then(function (r) {
                  (e.removeEventListener("abort", n), t(r));
                }));
            })
      );
    }
    function B() {
      return x != null && x.generation === $ && !x.controller.signal.aborted
        ? x
        : null;
    }
    function W() {
      var e = new AbortController(),
        t = q(e.signal).finally(function () {
          var e;
          ((e = x) == null ? void 0 : e.result) === t && (x = null);
        }),
        n = { controller: e, generation: $, result: t, waiters: 0 };
      return ((x = n), n);
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((me(), e.aborted)) return k;
          var t = $,
            a = new AbortController(),
            i = function () {
              return a.abort();
            };
          e.addEventListener("abort", i, { once: !0 });
          var l = _e(i),
            s = null,
            u = k,
            c = r("err")("Muse VM channel refused"),
            d = function () {
              return a.signal.aborted || $ !== t;
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
                    if (
                      (t === 1 && K(u),
                      t > 0 && !r("WAWebNetworkStatus").online)
                    ) {
                      var n = u;
                      if (((u = z(u, "offline")), !(yield G(a.signal))))
                        return u;
                      u = n;
                    }
                    if (d()) return u;
                    var o = yield V(a.signal);
                    return (
                      (u = o.result),
                      u.kind === "ready"
                        ? (Q(t), u)
                        : d() || !H(u)
                          ? u
                          : (s != null || (s = j(i)), e(c))
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
                  he(e),
                )
                .sendLogs("hatch-vm-connect-retry-threw"),
              (m = u));
          } finally {
            (s == null || s(), e.removeEventListener("abort", i), l());
          }
          return m.kind === "ready" ? m : e.aborted ? k : $ === t ? m : T;
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (t != null)
        return (_ || (_ = n("Promise"))).resolve({
          failure: null,
          result: { api: t, kind: "ready" },
        });
      var r = Y();
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
              result: e != null ? { api: e, kind: "ready" } : X(r.failure),
            }
          );
        },
        function () {
          return (l(), { failure: r.failure, result: I });
        },
      );
    }
    function H(e) {
      return (
        e.kind === "failed" &&
        e.failure === "channel" &&
        e.cause != null &&
        v.has(e.cause)
      );
    }
    function G(e) {
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
    function z(e, t) {
      return e.kind === "failed"
        ? { cause: t, failure: e.failure, kind: "failed" }
        : e;
    }
    function j(e) {
      var t = self.setTimeout(e, b);
      return function () {
        return self.clearTimeout(t);
      };
    }
    function K(t) {
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
    function Q(e) {
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
    function X(e) {
      var t,
        n = e == null ? void 0 : e.cause,
        r = (t = e == null ? void 0 : e.current) != null ? t : "no_api";
      return n == null
        ? { failure: r, kind: "failed" }
        : { cause: n, failure: r, kind: "failed" };
    }
    function Y() {
      if (D == null) {
        var e = { cause: null, credentials: null, current: null, detail: null },
          t = { waiters: 0 },
          n = J(e, t).finally(function () {
            var e;
            ((e = D) == null ? void 0 : e.api) === n && (D = null);
          });
        D = { api: n, demand: t, failure: e };
      }
      return D;
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = $;
          P = n;
          var r = yield ne(e, function () {
            return te(n, t);
          });
          return $ !== n
            ? (P === n && Ce(),
              (e.current = "stale_generation"),
              (e.cause = null),
              null)
            : (r == null && (de(e), ee(e)),
              r == null && e.current == null && (e.current = "no_api"),
              r);
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      var t = e.cause,
        n = e.credentials;
      n != null &&
        t != null &&
        e.current === "channel" &&
        S.has(t) &&
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(n);
    }
    function te(e, t) {
      return $ === e && t.waiters > 0;
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (n.kind !== "ok") return ie(e, "credentials", n.detail, n.cause);
          var r = n.credentials;
          e.credentials = r;
          try {
            var a = yield oe(r, t);
            if (a === E)
              return ie(
                e,
                "credentials",
                "A known confidential VM answered as standard",
                "cvm_downgrade_refused",
              );
            if (a === L) return ie(e, "aborted", null, null);
            if (a != null) return ie(e, "channel", a.detail, a.cause);
          } catch (t) {
            return ie(e, "threw", t, null);
          }
          return o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchCvmConnect").refuseHatchCvmDowngrade(e);
          return n
            ? E
            : (t() && o("WAWebHatchCvmConnect").recordHatchVmType(e),
              e.confidential === !0 ? le(e, t) : ue(e, t));
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, n, r) {
      return ((e.current = t), (e.cause = r), (e.detail = n), null);
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return L;
          var n = yield o("WAWebHatchCvmConnect").connectHatchConfidentialVm({
            acceptLanguage: r("WAWebL10N").getFullLocale(),
            credentials: e,
            isStillWanted: t,
          });
          return (n == null ? void 0 : n.cause) === "superseded" ? L : n;
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return L;
          o("WAWebHatchCvmConnect").reportHatchStandardDialWithStoredCvmKey();
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
        ce.apply(this, arguments)
      );
    }
    function de(e) {
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
    function me() {
      M ||
        ((M = !0),
        (N = ye() !== R.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = ye();
          if (e !== R.Unknown) {
            var t = N;
            if (((N = e === R.Linked), t && !N)) {
              ($++,
                Ce(),
                o("WAWebHatchCvmSecretPref").clearHatchCvmState(),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(w)) fe(n);
            }
          }
        }));
    }
    function pe() {
      return (me(), $);
    }
    function _e(e) {
      return (
        me(),
        w.add(e),
        function () {
          w.delete(e);
        }
      );
    }
    function fe(e) {
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
            he(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var ge = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function he(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && ge.has(t) ? t : "Error";
    }
    function ye() {
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
    function Ce() {
      ((D = null),
        (x = null),
        o("WAWebHatchCvmAttestedVms").clearHatchCvmAttestedVms(),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect());
    }
    ((l.connectHatchVmApi = A),
      (l.connectHatchVmApiWithResult = F),
      (l.getHatchVmAccountGeneration = pe),
      (l.subscribeToHatchVmAccountChange = _e));
  },
  98,
);
