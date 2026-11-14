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
    "WAWebWamPlatform",
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
      f,
      g = 5,
      h = 2,
      y = 0.1,
      C = 2e3,
      b = 3e4,
      v = 6e4,
      S = 8,
      R = 135e3,
      L = new Set(["handshake_timeout", "unreachable", "ws_dropped"]),
      E = new Set([
        "attestation_rejected",
        "handshake_failed",
        "handshake_timeout",
        "unreachable",
        "ws_dropped",
      ]),
      k = n("$InternalEnum").Mirrored(["Linked", "Unlinked", "Unknown"]),
      I = new Set(["aborted", "stale_generation"]),
      T = "abandoned",
      D = "downgrade_refused",
      x = { failure: "aborted", kind: "failed" },
      $ = { failure: "threw", kind: "failed" },
      P = { failure: "stale_generation", kind: "failed" },
      N = { cause: "not_running", failure: "credentials", kind: "failed" },
      M = null,
      w = null,
      A = 0,
      F = 0,
      O = !1,
      B = !1,
      W = !1,
      q = new Set();
    function U() {
      return V().then(function (e) {
        return e.kind === "ready" ? e.api : null;
      });
    }
    function V(e) {
      if ((ke(), (e == null ? void 0 : e.aborted) === !0))
        return (f || (f = n("Promise"))).resolve(x);
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      return t != null
        ? (f || (f = n("Promise"))).resolve({ kind: "ready", api: t })
        : H(e);
    }
    function H(e) {
      var t,
        r = (t = G()) != null ? t : z();
      return (
        r.waiters++,
        e == null
          ? r.result
          : new (f || (f = n("Promise")))(function (t) {
              var n = function () {
                (r.waiters--,
                  r.waiters === 0 &&
                    (r.controller.abort(), w === r && (w = null), j(r)),
                  t(x));
              };
              (e.addEventListener("abort", n, { once: !0 }),
                r.result.then(function (r) {
                  (e.removeEventListener("abort", n), t(r));
                }));
            })
      );
    }
    function G() {
      return w != null && w.generation === A && !w.controller.signal.aborted
        ? w
        : null;
    }
    function z() {
      var e = new AbortController(),
        t = K(e.signal).finally(function () {
          var e;
          (((e = w) == null ? void 0 : e.result) === t && (w = null), j(n));
        }),
        n = {
          controller: e,
          generation: A,
          result: t,
          waiters: 0,
          wakeRequested: !1,
        };
      return ((w = n), n);
    }
    function j(e) {
      e.wakeRequested &&
        w == null &&
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.dropForcedWake();
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((ke(), e.aborted)) return x;
          var t = A,
            a = new AbortController(),
            i = function () {
              return a.abort();
            };
          e.addEventListener("abort", i, { once: !0 });
          var l = Te(i),
            s = null,
            u = x,
            c = !1,
            d = r("err")("Muse VM channel refused"),
            m = function () {
              return a.signal.aborted || A !== t;
            },
            p = { attempts: 0, lastFailureCause: null },
            f;
          try {
            f = yield o("WAExponentialBackoff").exponentialBackoff(
              {
                factor: h,
                jitter: y,
                maxTimeout: b,
                minTimeout: C,
                retries: S,
                signal: a.signal,
                timeoutIncludesTaskDuration: !1,
              },
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    var n;
                    if (
                      (t === 1 && te(u),
                      t > 0 && !r("WAWebNetworkStatus").online)
                    ) {
                      var o = u;
                      if (((u = Z(u, "offline")), !(yield J(a.signal))))
                        return u;
                      u = o;
                    }
                    if (m()) return u;
                    p.attempts = t + 1;
                    var l = yield X(a.signal, t + 1);
                    if ((re(p, l.result), (u = l.result), u.kind === "ready"))
                      return (ne(t), u);
                    if (
                      ((c =
                        c ||
                        ((n = l.failure) == null ? void 0 : n.slowWake) === !0),
                      m() || !Y(u, { failCount: t, slowWake: c }))
                    )
                      return u;
                    if (s == null || (c && !s.slow)) {
                      var _;
                      ((_ = s) == null || _.clear(),
                        (s = { clear: ee(i, c ? R : v), slow: c }));
                    }
                    return e(d);
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          } catch (e) {
            (e !== d &&
              !(e instanceof o("WAAbortError").AbortError) &&
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: connect retry threw name=",
                      "",
                    ])),
                  $e(e),
                )
                .sendLogs("hatch-vm-connect-retry-threw"),
              (f = u));
          } finally {
            var g;
            ((g = s) == null || g.clear(),
              e.removeEventListener("abort", i),
              l());
          }
          return (
            oe(p, { answer: f, isAbandoned: e.aborted, isStale: A !== t }),
            f.kind === "ready"
              ? f
              : e.aborted
                ? x
                : A !== t
                  ? P
                  : c && Y(f, { failCount: 0, slowWake: c })
                    ? N
                    : f
          );
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      var r = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (r != null)
        return (f || (f = n("Promise"))).resolve({
          failure: null,
          result: { api: r, kind: "ready" },
        });
      var a = se(t);
      a.demand.waiters++;
      var i = !0,
        l = function () {
          i && ((i = !1), a.demand.waiters--);
        };
      e.addEventListener("abort", l, { once: !0 });
      var s = function () {
        (l(), e.removeEventListener("abort", l));
      };
      return a.api.then(
        function (e) {
          return (
            s(),
            {
              failure: a.failure,
              result: e != null ? { api: e, kind: "ready" } : le(a.failure),
            }
          );
        },
        function () {
          return (s(), { failure: a.failure, result: $ });
        },
      );
    }
    function Y(e, t) {
      var n = t.failCount,
        r = t.slowWake;
      return e.kind !== "failed" || e.failure !== "channel" || e.cause == null
        ? !1
        : (r || n < g) && L.has(e.cause);
    }
    function J(e) {
      return new (f || (f = n("Promise")))(function (t) {
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
    function Z(e, t) {
      return e.kind === "failed"
        ? { cause: t, failure: e.failure, kind: "failed" }
        : e;
    }
    function ee(e, t) {
      var n = self.setTimeout(e, t);
      return function () {
        return self.clearTimeout(n);
      };
    }
    function te(t) {
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
    function ne(e) {
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
    function re(e, t) {
      if (t.kind === "failed" && !I.has(t.failure)) {
        var n;
        e.lastFailureCause = (n = t.cause) != null ? n : t.failure;
      }
    }
    function oe(e, t) {
      try {
        var n = ae(e, t);
        if (n == null) return;
        var r = e.attempts,
          a = ie(e, t.answer);
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: connect cycle result=",
                " attempts=",
                " cause=",
                "",
              ])),
            n,
            r,
            a,
          )
          .sendLogs("hatch-vm-connect-cycle");
      } catch (e) {}
    }
    function ae(e, t) {
      var n = t.answer,
        r = t.isAbandoned,
        o = t.isStale;
      return e.lastFailureCause == null
        ? null
        : n.kind === "ready"
          ? "recovered"
          : r
            ? "abandoned"
            : o
              ? "stale"
              : Y(n, { failCount: 0, slowWake: !1 }) || n.cause === "offline"
                ? "exhausted"
                : "failed";
    }
    function ie(e, t) {
      var n;
      if (t.kind === "failed" && !I.has(t.failure)) {
        var r;
        return (r = t.cause) != null ? r : t.failure;
      }
      return (n = e.lastFailureCause) != null ? n : "none";
    }
    function le(e) {
      var t,
        n = e == null ? void 0 : e.cause,
        r = (t = e == null ? void 0 : e.current) != null ? t : "no_api";
      return n == null
        ? { failure: r, kind: "failed" }
        : { cause: n, failure: r, kind: "failed" };
    }
    function se(e) {
      if (M == null) {
        var t = {
            attempt: e,
            cause: null,
            credentials: null,
            current: null,
            detail: null,
            slowWake: !1,
          },
          n = { waiters: 0 },
          r = ue(t, n).finally(function () {
            var e;
            ((e = M) == null ? void 0 : e.api) === r && (M = null);
          });
        M = { api: r, demand: n, failure: t };
      }
      return M;
    }
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = A;
          F = n;
          var r = yield _e(e, function () {
            return pe(n, t);
          });
          return A !== n
            ? (F === n && Ne(),
              (e.current = "stale_generation"),
              (e.cause = null),
              null)
            : (r == null ? (Re(e), de(e)) : (B = !0),
              r == null && e.current == null && (e.current = "no_api"),
              r);
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e) {
      var t = e.cause,
        n = e.credentials;
      if (n != null && t != null && e.current === "channel" && E.has(t)) {
        var r = w,
          a = me(r, t),
          i = o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(
            n,
            { wake: a },
          );
        a && i && r != null && (r.wakeRequested = !0);
      }
    }
    function me(e, t) {
      return e != null && !e.wakeRequested && L.has(t);
    }
    function pe(e, t) {
      return A === e && t.waiters > 0;
    }
    function _e(e, t) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (n.kind !== "ok") return ye(e, "credentials", n.detail, n.cause);
          var r = n.credentials;
          ((e.credentials = r), (e.slowWake = n.slowWake === !0));
          try {
            var a = yield ge(r, t);
            if (a === D)
              return ye(
                e,
                "credentials",
                "A known confidential VM answered as standard",
                "cvm_downgrade_refused",
              );
            if (a === T) return ye(e, "aborted", null, null);
            if (a != null) return ye(e, "channel", a.detail, a.cause);
          } catch (t) {
            return ye(e, "threw", t, null);
          }
          return (
            o(
              "WAWebHatchVmCredentials",
            ).waWebHatchVmCredentials.markVmConnected(r),
            o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi()
          );
        })),
        fe.apply(this, arguments)
      );
    }
    function ge(e, t) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchCvmConnect").refuseHatchCvmDowngrade(e);
          return n
            ? D
            : (t() && o("WAWebHatchCvmConnect").recordHatchVmType(e),
              e.confidential === !0 ? Ce(e, t) : ve(e, t));
        })),
        he.apply(this, arguments)
      );
    }
    function ye(e, t, n, r) {
      return ((e.current = t), (e.cause = r), (e.detail = n), null);
    }
    function Ce(e, t) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return T;
          var n = yield o("WAWebHatchCvmConnect").connectHatchConfidentialVm({
            acceptLanguage: r("WAWebL10N").getFullLocale(),
            credentials: e,
            isStillWanted: t,
          });
          return (n == null ? void 0 : n.cause) === "superseded" ? T : n;
        })),
        be.apply(this, arguments)
      );
    }
    function ve(e, t) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return T;
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
        Se.apply(this, arguments)
      );
    }
    function Re(e) {
      var t = e.cause,
        n = e.current,
        r = e.detail;
      if (!(n == null || n === "aborted")) {
        var a = Le(),
          i = a.host,
          l = a.navOnline,
          s = a.online,
          u = a.reconnect,
          m = a.visible,
          p = e.attempt,
          _ =
            t == null
              ? o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: connect failed reason=",
                      " attempt=",
                      " online=",
                      " nav_online=",
                      " visible=",
                      " reconnect=",
                      " host=",
                      "",
                    ])),
                  n,
                  p,
                  s,
                  l,
                  m,
                  u,
                  i,
                )
              : o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: connect failed reason=",
                      " cause=",
                      " attempt=",
                      " online=",
                      " nav_online=",
                      " visible=",
                      " reconnect=",
                      " host=",
                      "",
                    ])),
                  n,
                  t,
                  p,
                  s,
                  l,
                  m,
                  u,
                  i,
                );
        _.devConsole(r).sendLogs("hatch-vm-connect-failed");
      }
    }
    function Le() {
      var e, t;
      return {
        host: Ee(),
        navOnline:
          ((e = self.navigator) == null ? void 0 : e.onLine) === !1 ? 0 : 1,
        online: r("WAWebNetworkStatus").online ? 1 : 0,
        reconnect: B ? 1 : 0,
        visible:
          ((t = self.document) == null ? void 0 : t.visibilityState) ===
          "visible"
            ? 1
            : 0,
      };
    }
    function Ee() {
      try {
        return (function (e) {
          return e === "WEB"
            ? "web"
            : e === "PWA"
              ? "pwa"
              : e === "WIN_HYBRID"
                ? "win_hybrid"
                : "other";
        })(o("WAWebWamPlatform").getWamPlatform());
      } catch (e) {
        return "other";
      }
    }
    function ke() {
      W ||
        ((W = !0),
        (O = Pe() !== k.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = Pe();
          if (e !== k.Unknown) {
            var t = O;
            if (((O = e === k.Linked), t && !O)) {
              (A++,
                Ne(),
                o("WAWebHatchCvmSecretPref").clearHatchCvmState(),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(q)) De(n);
            }
          }
        }));
    }
    function Ie() {
      return (ke(), A);
    }
    function Te(e) {
      return (
        ke(),
        q.add(e),
        function () {
          q.delete(e);
        }
      );
    }
    function De(e) {
      try {
        e();
      } catch (e) {
        o("WALogger")
          .WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: an account change listener failed name=",
                "",
              ])),
            $e(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var xe = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function $e(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && xe.has(t) ? t : "Error";
    }
    function Pe() {
      return (function (e) {
        if (e === "linked") return k.Linked;
        if (e === "unlinked") return k.Unlinked;
        if (e == null) return k.Unknown;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState(),
      );
    }
    function Ne() {
      ((M = null),
        (w = null),
        (B = !1),
        o("WAWebHatchCvmAttestedVms").clearHatchCvmAttestedVms(),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect());
    }
    ((l.connectHatchVmApi = U),
      (l.connectHatchVmApiWithResult = V),
      (l.getHatchVmAccountGeneration = Ie),
      (l.subscribeToHatchVmAccountChange = Te));
  },
  98,
);
