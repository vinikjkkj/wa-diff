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
      I = {
        abandoned: [
          { maxAttempts: 1 / 0, reason: "hatch-vm-connect-cycle-abandoned" },
        ],
        exhausted: [
          { maxAttempts: 2, reason: "hatch-vm-connect-cycle-exhausted-a1-2" },
          { maxAttempts: 5, reason: "hatch-vm-connect-cycle-exhausted-a3-5" },
          {
            maxAttempts: 1 / 0,
            reason: "hatch-vm-connect-cycle-exhausted-a6p",
          },
        ],
        failed: [
          { maxAttempts: 1 / 0, reason: "hatch-vm-connect-cycle-failed" },
        ],
        recovered: [
          { maxAttempts: 2, reason: "hatch-vm-connect-cycle-recovered-a2" },
          { maxAttempts: 3, reason: "hatch-vm-connect-cycle-recovered-a3" },
          {
            maxAttempts: 1 / 0,
            reason: "hatch-vm-connect-cycle-recovered-a4p",
          },
        ],
        stale: [{ maxAttempts: 1 / 0, reason: "hatch-vm-connect-cycle-stale" }],
      },
      T = new Set(["aborted", "stale_generation"]),
      D = "abandoned",
      x = "downgrade_refused",
      $ = { failure: "aborted", kind: "failed" },
      P = { failure: "threw", kind: "failed" },
      N = { failure: "stale_generation", kind: "failed" },
      M = { cause: "not_running", failure: "credentials", kind: "failed" },
      w = null,
      A = null,
      F = 0,
      O = 0,
      B = !1,
      W = !1,
      q = !1,
      U = new Set();
    function V() {
      return H().then(function (e) {
        return e.kind === "ready" ? e.api : null;
      });
    }
    function H(e) {
      if ((Te(), (e == null ? void 0 : e.aborted) === !0))
        return (f || (f = n("Promise"))).resolve($);
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      return t != null
        ? (f || (f = n("Promise"))).resolve({ kind: "ready", api: t })
        : G(e);
    }
    function G(e) {
      var t,
        r = (t = z()) != null ? t : j();
      return (
        r.waiters++,
        e == null
          ? r.result
          : new (f || (f = n("Promise")))(function (t) {
              var n = function () {
                (r.waiters--,
                  r.waiters === 0 &&
                    (r.controller.abort(), A === r && (A = null), K(r)),
                  t($));
              };
              (e.addEventListener("abort", n, { once: !0 }),
                r.result.then(function (r) {
                  (e.removeEventListener("abort", n), t(r));
                }));
            })
      );
    }
    function z() {
      return A != null && A.generation === F && !A.controller.signal.aborted
        ? A
        : null;
    }
    function j() {
      var e = new AbortController(),
        t = Q(e.signal).finally(function () {
          var e;
          (((e = A) == null ? void 0 : e.result) === t && (A = null), K(n));
        }),
        n = {
          controller: e,
          generation: F,
          result: t,
          waiters: 0,
          wakeRequested: !1,
        };
      return ((A = n), n);
    }
    function K(e) {
      e.wakeRequested &&
        A == null &&
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.dropForcedWake();
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((Te(), e.aborted)) return $;
          var t = F,
            a = new AbortController(),
            i = function () {
              return a.abort();
            };
          e.addEventListener("abort", i, { once: !0 });
          var l = xe(i),
            s = null,
            u = $,
            c = !1,
            d = r("err")("Muse VM channel refused"),
            m = function () {
              return a.signal.aborted || F !== t;
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
                      (t === 1 && ne(u),
                      t > 0 && !r("WAWebNetworkStatus").online)
                    ) {
                      var o = u;
                      if (((u = ee(u, "offline")), !(yield Z(a.signal))))
                        return u;
                      u = o;
                    }
                    if (m()) return u;
                    p.attempts = t + 1;
                    var l = yield Y(a.signal, t + 1);
                    if ((oe(p, l.result), (u = l.result), u.kind === "ready"))
                      return (re(t), u);
                    if (
                      ((c =
                        c ||
                        ((n = l.failure) == null ? void 0 : n.slowWake) === !0),
                      m() || !J(u, { failCount: t, slowWake: c }))
                    )
                      return u;
                    if (s == null || (c && !s.slow)) {
                      var _;
                      ((_ = s) == null || _.clear(),
                        (s = { clear: te(i, c ? R : v), slow: c }));
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
                  Ne(e),
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
            ae(p, { answer: f, isAbandoned: e.aborted, isStale: F !== t }),
            f.kind === "ready"
              ? f
              : e.aborted
                ? $
                : F !== t
                  ? N
                  : c && J(f, { failCount: 0, slowWake: c })
                    ? M
                    : f
          );
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      var r = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (r != null)
        return (f || (f = n("Promise"))).resolve({
          failure: null,
          result: { api: r, kind: "ready" },
        });
      var a = ce(t);
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
              result: e != null ? { api: e, kind: "ready" } : ue(a.failure),
            }
          );
        },
        function () {
          return (s(), { failure: a.failure, result: P });
        },
      );
    }
    function J(e, t) {
      var n = t.failCount,
        r = t.slowWake;
      return e.kind !== "failed" || e.failure !== "channel" || e.cause == null
        ? !1
        : (r || n < g) && L.has(e.cause);
    }
    function Z(e) {
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
    function ee(e, t) {
      return e.kind === "failed"
        ? { cause: t, failure: e.failure, kind: "failed" }
        : e;
    }
    function te(e, t) {
      var n = self.setTimeout(e, t);
      return function () {
        return self.clearTimeout(n);
      };
    }
    function ne(t) {
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
    function re(e) {
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
    function oe(e, t) {
      if (t.kind === "failed" && !T.has(t.failure)) {
        var n;
        e.lastFailureCause = (n = t.cause) != null ? n : t.failure;
      }
    }
    function ae(e, t) {
      try {
        var n = ie(e, t);
        if (n == null) return;
        var r = e.attempts,
          a = le(e, t.answer);
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
          .sendLogs(se(n, r));
      } catch (e) {}
    }
    function ie(e, t) {
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
              : J(n, { failCount: 0, slowWake: !1 }) || n.cause === "offline"
                ? "exhausted"
                : "failed";
    }
    function le(e, t) {
      var n;
      if (t.kind === "failed" && !T.has(t.failure)) {
        var r;
        return (r = t.cause) != null ? r : t.failure;
      }
      return (n = e.lastFailureCause) != null ? n : "none";
    }
    function se(e, t) {
      var n,
        r = I[e],
        o =
          (n = r.find(function (e) {
            var n = e.maxAttempts;
            return t <= n;
          })) != null
            ? n
            : r[r.length - 1];
      return o.reason;
    }
    function ue(e) {
      var t,
        n = e == null ? void 0 : e.cause,
        r = (t = e == null ? void 0 : e.current) != null ? t : "no_api";
      return n == null
        ? { failure: r, kind: "failed" }
        : { cause: n, failure: r, kind: "failed" };
    }
    function ce(e) {
      if (w == null) {
        var t = {
            attempt: e,
            cause: null,
            credentials: null,
            current: null,
            detail: null,
            slowWake: !1,
          },
          n = { waiters: 0 },
          r = de(t, n).finally(function () {
            var e;
            ((e = w) == null ? void 0 : e.api) === r && (w = null);
          });
        w = { api: r, demand: n, failure: t };
      }
      return w;
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = F;
          O = n;
          var r = yield ge(e, function () {
            return fe(n, t);
          });
          return F !== n
            ? (O === n && we(),
              (e.current = "stale_generation"),
              (e.cause = null),
              null)
            : (r == null ? (Ee(e), pe(e)) : (W = !0),
              r == null && e.current == null && (e.current = "no_api"),
              r);
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e) {
      var t = e.cause,
        n = e.credentials;
      if (n != null && t != null && e.current === "channel" && E.has(t)) {
        var r = A,
          a = _e(r, t),
          i = o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(
            n,
            { wake: a },
          );
        a && i && r != null && (r.wakeRequested = !0);
      }
    }
    function _e(e, t) {
      return e != null && !e.wakeRequested && L.has(t);
    }
    function fe(e, t) {
      return F === e && t.waiters > 0;
    }
    function ge(e, t) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (n.kind !== "ok") return be(e, "credentials", n.detail, n.cause);
          var r = n.credentials;
          ((e.credentials = r), (e.slowWake = n.slowWake === !0));
          try {
            var a = yield ye(r, t);
            if (a === x)
              return be(
                e,
                "credentials",
                "A known confidential VM answered as standard",
                "cvm_downgrade_refused",
              );
            if (a === D) return be(e, "aborted", null, null);
            if (a != null) return be(e, "channel", a.detail, a.cause);
          } catch (t) {
            return be(e, "threw", t, null);
          }
          return (
            o(
              "WAWebHatchVmCredentials",
            ).waWebHatchVmCredentials.markVmConnected(r),
            o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi()
          );
        })),
        he.apply(this, arguments)
      );
    }
    function ye(e, t) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchCvmConnect").refuseHatchCvmDowngrade(e);
          return n
            ? x
            : (t() && o("WAWebHatchCvmConnect").recordHatchVmType(e),
              e.confidential === !0 ? ve(e, t) : Re(e, t));
        })),
        Ce.apply(this, arguments)
      );
    }
    function be(e, t, n, r) {
      return ((e.current = t), (e.cause = r), (e.detail = n), null);
    }
    function ve(e, t) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return D;
          var n = yield o("WAWebHatchCvmConnect").connectHatchConfidentialVm({
            acceptLanguage: r("WAWebL10N").getFullLocale(),
            credentials: e,
            isStillWanted: t,
          });
          return (n == null ? void 0 : n.cause) === "superseded" ? D : n;
        })),
        Se.apply(this, arguments)
      );
    }
    function Re(e, t) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return D;
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
        Le.apply(this, arguments)
      );
    }
    function Ee(e) {
      var t = e.cause,
        n = e.current,
        r = e.detail;
      if (!(n == null || n === "aborted")) {
        var a = ke(),
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
    function ke() {
      var e, t;
      return {
        host: Ie(),
        navOnline:
          ((e = self.navigator) == null ? void 0 : e.onLine) === !1 ? 0 : 1,
        online: r("WAWebNetworkStatus").online ? 1 : 0,
        reconnect: W ? 1 : 0,
        visible:
          ((t = self.document) == null ? void 0 : t.visibilityState) ===
          "visible"
            ? 1
            : 0,
      };
    }
    function Ie() {
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
    function Te() {
      q ||
        ((q = !0),
        (B = Me() !== k.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = Me();
          if (e !== k.Unknown) {
            var t = B;
            if (((B = e === k.Linked), t && !B)) {
              (F++,
                we(),
                o("WAWebHatchCvmSecretPref").clearHatchCvmState(),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(U)) $e(n);
            }
          }
        }));
    }
    function De() {
      return (Te(), F);
    }
    function xe(e) {
      return (
        Te(),
        U.add(e),
        function () {
          U.delete(e);
        }
      );
    }
    function $e(e) {
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
            Ne(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var Pe = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function Ne(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && Pe.has(t) ? t : "Error";
    }
    function Me() {
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
    function we() {
      ((w = null),
        (A = null),
        (W = !1),
        o("WAWebHatchCvmAttestedVms").clearHatchCvmAttestedVms(),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect());
    }
    ((l.connectHatchVmApi = V),
      (l.connectHatchVmApiWithResult = H),
      (l.getHatchVmAccountGeneration = De),
      (l.subscribeToHatchVmAccountChange = xe));
  },
  98,
);
