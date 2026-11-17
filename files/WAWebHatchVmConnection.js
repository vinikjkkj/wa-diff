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
    "WAWebHatchVmBackgroundRedial",
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
      g,
      h = 5,
      y = 2,
      C = 0.1,
      b = 2e3,
      v = 3e4,
      S = 6e4,
      R = 8,
      L = 135e3,
      E = new Set(["handshake_timeout", "unreachable", "ws_dropped"]),
      k = new Set([
        "attestation_rejected",
        "handshake_failed",
        "handshake_timeout",
        "unreachable",
        "ws_dropped",
      ]),
      I = new Set([
        "attestation_rejected",
        "channel_not_linked",
        "closed",
        "cvm_account",
        "cvm_downgrade_refused",
        "cvm_enrollment_required",
        "cvm_key_not_found",
        "cvm_key_rejected",
        "cvm_vm_id_mismatch",
        "forbidden",
        "handshake_failed",
        "no_vm",
        "setup_failed",
        "unauthorized",
        "unsupported_vm_type",
        "vm_state",
      ]),
      T = n("$InternalEnum").Mirrored(["Linked", "Unlinked", "Unknown"]),
      D = {
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
      x = new Set(["aborted", "stale_generation"]),
      $ = "abandoned",
      P = "downgrade_refused",
      N = { failure: "aborted", kind: "failed" },
      M = { failure: "threw", kind: "failed" },
      w = { failure: "stale_generation", kind: "failed" },
      A = { cause: "not_running", failure: "credentials", kind: "failed" },
      F = new Set([
        "handshake_timeout",
        "offline",
        "unreachable",
        "ws_dropped",
      ]),
      O = null,
      B = null,
      W = null,
      q = 0,
      U = 0,
      V = !1,
      H = !1,
      G = !1,
      z = new Set(),
      j = new Set(),
      K = {
        dial: ne,
        hasSession: function () {
          return (
            o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi() != null
          );
        },
        isConnecting: oe,
      },
      Q = !1;
    function X() {
      return Y().then(function (e) {
        return e.kind === "ready" ? e.api : null;
      });
    }
    function Y(e) {
      if ((Ge(), (e == null ? void 0 : e.aborted) === !0))
        return (g || (g = n("Promise"))).resolve(N);
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      return t != null
        ? (g || (g = n("Promise"))).resolve({ kind: "ready", api: t })
        : J(e);
    }
    function J(e) {
      var t,
        r = (t = Z()) != null ? t : ee(!1);
      return (
        r.waiters++,
        e == null
          ? r.result
          : new (g || (g = n("Promise")))(function (t) {
              var n = function () {
                (r.waiters--,
                  r.waiters === 0 &&
                    (r.controller.abort(), B === r && (B = null), te(r)),
                  t(N));
              };
              (e.addEventListener("abort", n, { once: !0 }),
                r.result.then(function (r) {
                  (e.removeEventListener("abort", n), t(r));
                }));
            })
      );
    }
    function Z() {
      return B != null &&
        B.generation === q &&
        !B.singleAttempt &&
        !B.controller.signal.aborted
        ? B
        : null;
    }
    function ee(e, t) {
      t === void 0 && (t = null);
      var n = new AbortController(),
        r = null,
        o = le(n.signal, e, function (e) {
          r = e;
        }).finally(function () {
          var e, i;
          (((e = B) == null ? void 0 : e.result) === o && (B = null),
            ((i = W) == null ? void 0 : i.controller) === n && (W = null),
            te(a),
            (a.stoppedIneligible = r !== "ready" && t != null && !re(t)),
            !a.stoppedIneligible && a.generation === q && be(r));
        }),
        a = {
          controller: n,
          generation: q,
          result: o,
          singleAttempt: e,
          stoppedIneligible: !1,
          waiters: 0,
          wakeRequested: !1,
        };
      return ((B = a), a);
    }
    function te(e) {
      e.wakeRequested &&
        B == null &&
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.dropForcedWake();
    }
    function ne(e) {
      if (
        (Ge(),
        o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi() != null)
      )
        return (g || (g = n("Promise"))).resolve("recovered");
      if (oe() || W != null)
        return (g || (g = n("Promise"))).resolve("stopped");
      var t = ee(!0, e);
      return (
        t.waiters++,
        (W = { controller: t.controller, generation: q, isEligible: e }),
        t.result.then(function (e) {
          return t.stoppedIneligible ? "stopped" : ae(e);
        })
      );
    }
    function re(e) {
      try {
        return e();
      } catch (e) {
        return !1;
      }
    }
    function oe() {
      return B != null || O != null;
    }
    function ae(e) {
      return e.kind === "ready"
        ? "recovered"
        : x.has(e.failure)
          ? "stopped"
          : "exhausted";
    }
    function ie() {
      var e = W;
      e != null && !re(e.isEligible) && ((W = null), e.controller.abort());
    }
    function le(e, t, n) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            if ((Ge(), Ce(), e.aborted)) return N;
            var i = q,
              l = new AbortController(),
              s = function () {
                return l.abort();
              };
            e.addEventListener("abort", s, { once: !0 });
            var u = je(s),
              c = null,
              d = N,
              m = !1,
              p = r("err")("Muse VM channel refused"),
              _ = function () {
                return l.signal.aborted || q !== i;
              },
              g = { attempts: 0, lastFailureCause: null },
              h = function (n, r) {
                return !t && ce(n, { failCount: r, slowWake: m });
              },
              E;
            try {
              E = yield o("WAExponentialBackoff").exponentialBackoff(
                {
                  factor: y,
                  jitter: C,
                  maxTimeout: v,
                  minTimeout: b,
                  retries: R,
                  signal: l.signal,
                  timeoutIncludesTaskDuration: !1,
                },
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, t) {
                      var n;
                      if (
                        (t === 1 && _e(d),
                        t > 0 && !r("WAWebNetworkStatus").online)
                      ) {
                        var o = d;
                        if (((d = me(d, "offline")), !(yield de(l.signal))))
                          return d;
                        d = o;
                      }
                      if (_()) return d;
                      g.attempts = t + 1;
                      var a = yield ue(l.signal, t + 1);
                      if ((ge(g, a.result), (d = a.result), d.kind === "ready"))
                        return (fe(t), d);
                      if (
                        ((m =
                          m ||
                          ((n = a.failure) == null ? void 0 : n.slowWake) ===
                            !0),
                        _() || !h(d, t))
                      )
                        return d;
                      if (c == null || (m && !c.slow)) {
                        var i;
                        ((i = c) == null || i.clear(),
                          (c = { clear: pe(s, m ? L : S), slow: m }));
                      }
                      return e(p);
                    },
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            } catch (e) {
              (e !== p &&
                !(e instanceof o("WAAbortError").AbortError) &&
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-vm: connect retry threw name=",
                        "",
                      ])),
                    Xe(e),
                  )
                  .sendLogs("hatch-vm-connect-retry-threw"),
                (E = d));
            } finally {
              var k;
              ((k = c) == null || k.clear(),
                e.removeEventListener("abort", s),
                u());
            }
            var I = { answer: E, isAbandoned: e.aborted, isStale: q !== i };
            return (
              t || he(g, I),
              a(ve(g, I)),
              E.kind === "ready"
                ? E
                : e.aborted
                  ? N
                  : q !== i
                    ? w
                    : m && ce(E, { failCount: 0, slowWake: m })
                      ? A
                      : E
            );
          },
        )),
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      var r = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (r != null)
        return (g || (g = n("Promise"))).resolve({
          failure: null,
          result: { api: r, kind: "ready" },
        });
      var a = Ie(t);
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
              result: e != null ? { api: e, kind: "ready" } : ke(a.failure),
            }
          );
        },
        function () {
          return (s(), { failure: a.failure, result: M });
        },
      );
    }
    function ce(e, t) {
      var n = t.failCount,
        r = t.slowWake;
      return e.kind !== "failed" || e.failure !== "channel" || e.cause == null
        ? !1
        : (r || n < h) && E.has(e.cause);
    }
    function de(e) {
      return new (g || (g = n("Promise")))(function (t) {
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
    function me(e, t) {
      return e.kind === "failed"
        ? { cause: t, failure: e.failure, kind: "failed" }
        : e;
    }
    function pe(e, t) {
      var n = self.setTimeout(e, t);
      return function () {
        return self.clearTimeout(n);
      };
    }
    function _e(t) {
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
    function fe(e) {
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
    function ge(e, t) {
      if (t.kind === "failed" && !x.has(t.failure)) {
        var n;
        e.lastFailureCause = (n = t.cause) != null ? n : t.failure;
      }
    }
    function he(e, t) {
      try {
        var n = Re(e, t);
        if (n == null) return;
        var r = e.attempts,
          a = Le(e, t.answer);
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
          .sendLogs(Ee(n, r));
      } catch (e) {}
    }
    function ye(e) {
      return (
        j.add(e),
        function () {
          j.delete(e);
        }
      );
    }
    function Ce() {
      Q ||
        ((Q = !0),
        ye(function (e) {
          return o("WAWebHatchVmBackgroundRedial").noteHatchVmCycleEnd(e, K);
        }));
    }
    function be(e) {
      if (e != null)
        for (var t of Array.from(j))
          try {
            t(e);
          } catch (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-vm: a cycle end listener failed name=",
                    "",
                  ])),
                Xe(e),
              )
              .sendLogs("hatch-vm-cycle-end-listener-failed");
          }
    }
    function ve(e, t) {
      return t.isStale
        ? null
        : (function (n) {
            return n === "recovered"
              ? "ready"
              : n === "exhausted" ||
                  (n === "abandoned" && F.has(Le(e, t.answer)))
                ? "retryable"
                : n === "failed"
                  ? Se(t.answer)
                    ? "final"
                    : "other"
                  : t.answer.kind === "ready"
                    ? "ready"
                    : "other";
          })(Re(e, t));
    }
    function Se(e) {
      return e.kind === "failed" && I.has(e.cause);
    }
    function Re(e, t) {
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
              : ce(n, { failCount: 0, slowWake: !1 }) || n.cause === "offline"
                ? "exhausted"
                : "failed";
    }
    function Le(e, t) {
      var n;
      if (t.kind === "failed" && !x.has(t.failure)) {
        var r;
        return (r = t.cause) != null ? r : t.failure;
      }
      return (n = e.lastFailureCause) != null ? n : "none";
    }
    function Ee(e, t) {
      var n,
        r = D[e],
        o =
          (n = r.find(function (e) {
            var n = e.maxAttempts;
            return t <= n;
          })) != null
            ? n
            : r[r.length - 1];
      return o.reason;
    }
    function ke(e) {
      var t,
        n = e == null ? void 0 : e.cause,
        r = (t = e == null ? void 0 : e.current) != null ? t : "no_api";
      return n == null
        ? { failure: r, kind: "failed" }
        : { cause: n, failure: r, kind: "failed" };
    }
    function Ie(e) {
      if (O == null) {
        var t = {
            attempt: e,
            cause: null,
            credentials: null,
            current: null,
            detail: null,
            slowWake: !1,
          },
          n = { waiters: 0 },
          r = Te(t, n).finally(function () {
            var e;
            ((e = O) == null ? void 0 : e.api) === r && (O = null);
          });
        O = { api: r, demand: n, failure: t };
      }
      return O;
    }
    function Te(e, t) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = q;
          U = n;
          var r = yield Ne(e, function () {
            return (ie(), Pe(n, t));
          });
          return q !== n
            ? (U === n && Je(),
              (e.current = "stale_generation"),
              (e.cause = null),
              null)
            : (r == null ? (Ue(e), xe(e)) : (H = !0),
              r == null && e.current == null && (e.current = "no_api"),
              r);
        })),
        De.apply(this, arguments)
      );
    }
    function xe(e) {
      var t = e.cause,
        n = e.credentials;
      if (n != null && t != null && e.current === "channel" && k.has(t)) {
        var r = B,
          a = $e(r, t),
          i = o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(
            n,
            { wake: a },
          );
        a && i && r != null && (r.wakeRequested = !0);
      }
    }
    function $e(e, t) {
      return e != null && !e.singleAttempt && !e.wakeRequested && E.has(t);
    }
    function Pe(e, t) {
      return q === e && t.waiters > 0;
    }
    function Ne(e, t) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (n.kind !== "ok") return Fe(e, "credentials", n.detail, n.cause);
          var r = n.credentials;
          ((e.credentials = r), (e.slowWake = n.slowWake === !0));
          try {
            var a = yield we(r, t);
            if (a === P)
              return Fe(
                e,
                "credentials",
                "A known confidential VM answered as standard",
                "cvm_downgrade_refused",
              );
            if (a === $) return Fe(e, "aborted", null, null);
            if (a != null) return Fe(e, "channel", a.detail, a.cause);
          } catch (t) {
            return Fe(e, "threw", t, null);
          }
          return (
            o(
              "WAWebHatchVmCredentials",
            ).waWebHatchVmCredentials.markVmConnected(r),
            o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi()
          );
        })),
        Me.apply(this, arguments)
      );
    }
    function we(e, t) {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchCvmConnect").refuseHatchCvmDowngrade(e);
          return n
            ? P
            : (t() && o("WAWebHatchCvmConnect").recordHatchVmType(e),
              e.confidential === !0 ? Oe(e, t) : We(e, t));
        })),
        Ae.apply(this, arguments)
      );
    }
    function Fe(e, t, n, r) {
      return ((e.current = t), (e.cause = r), (e.detail = n), null);
    }
    function Oe(e, t) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return $;
          var n = yield o("WAWebHatchCvmConnect").connectHatchConfidentialVm({
            acceptLanguage: r("WAWebL10N").getFullLocale(),
            credentials: e,
            isStillWanted: t,
          });
          return (n == null ? void 0 : n.cause) === "superseded" ? $ : n;
        })),
        Be.apply(this, arguments)
      );
    }
    function We(e, t) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return $;
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
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      var t = e.cause,
        n = e.current,
        r = e.detail;
      if (!(n == null || n === "aborted")) {
        var a = Ve(),
          i = a.host,
          l = a.navOnline,
          s = a.online,
          u = a.reconnect,
          c = a.visible,
          p = e.attempt,
          _ =
            t == null
              ? o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  c,
                  u,
                  i,
                )
              : o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  c,
                  u,
                  i,
                );
        _.devConsole(r).sendLogs("hatch-vm-connect-failed");
      }
    }
    function Ve() {
      var e, t;
      return {
        host: He(),
        navOnline:
          ((e = self.navigator) == null ? void 0 : e.onLine) === !1 ? 0 : 1,
        online: r("WAWebNetworkStatus").online ? 1 : 0,
        reconnect: H ? 1 : 0,
        visible:
          ((t = self.document) == null ? void 0 : t.visibilityState) ===
          "visible"
            ? 1
            : 0,
      };
    }
    function He() {
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
    function Ge() {
      G ||
        ((G = !0),
        (V = Ye() !== T.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = Ye();
          if (e !== T.Unknown) {
            var t = V;
            if (((V = e === T.Linked), t && !V)) {
              (q++,
                o("WAWebHatchVmBackgroundRedial").stopHatchVmBackgroundRedial(),
                Je(),
                o("WAWebHatchCvmSecretPref").clearHatchCvmState(),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(z)) Ke(n);
            }
          }
        }));
    }
    function ze() {
      return (Ge(), q);
    }
    function je(e) {
      return (
        Ge(),
        z.add(e),
        function () {
          z.delete(e);
        }
      );
    }
    function Ke(e) {
      try {
        e();
      } catch (e) {
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: an account change listener failed name=",
                "",
              ])),
            Xe(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var Qe = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function Xe(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && Qe.has(t) ? t : "Error";
    }
    function Ye() {
      return (function (e) {
        if (e === "linked") return T.Linked;
        if (e === "unlinked") return T.Unlinked;
        if (e == null) return T.Unknown;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState(),
      );
    }
    function Je() {
      ((O = null), (B = null));
      var e = W;
      (e != null && e.generation !== q && ((W = null), e.controller.abort()),
        (H = !1),
        o("WAWebHatchCvmAttestedVms").clearHatchCvmAttestedVms(),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect());
    }
    ((l.connectHatchVmApi = X),
      (l.connectHatchVmApiWithResult = Y),
      (l.redialHatchVmOnce = ne),
      (l.isHatchVmConnecting = oe),
      (l.subscribeToHatchVmCycleEnd = ye),
      (l.getHatchVmAccountGeneration = ze),
      (l.subscribeToHatchVmAccountChange = je));
  },
  98,
);
