__d(
  "WAWebHatchVmConnection",
  [
    "$InternalEnum",
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
      k = new Set([
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
      I = n("$InternalEnum").Mirrored(["Linked", "Unlinked", "Unknown"]),
      T = {
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
      D = new Set(["aborted", "stale_generation"]),
      x = "abandoned",
      $ = "downgrade_refused",
      P = { failure: "aborted", kind: "failed" },
      N = { failure: "threw", kind: "failed" },
      M = { failure: "stale_generation", kind: "failed" },
      w = { cause: "not_running", failure: "credentials", kind: "failed" },
      A = new Set([
        "handshake_timeout",
        "offline",
        "unreachable",
        "ws_dropped",
      ]),
      F = null,
      O = null,
      B = null,
      W = 0,
      q = 0,
      U = !1,
      V = !1,
      H = !1,
      G = new Set(),
      z = new Set(),
      j = {
        dial: te,
        hasSession: function () {
          return (
            o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi() != null
          );
        },
        isConnecting: re,
      },
      K = !1;
    function Q() {
      return X().then(function (e) {
        return e.kind === "ready" ? e.api : null;
      });
    }
    function X(e) {
      if ((Oe(), (e == null ? void 0 : e.aborted) === !0))
        return Promise.resolve(P);
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      return t != null ? Promise.resolve({ kind: "ready", api: t }) : Y(e);
    }
    function Y(e) {
      var t,
        n = (t = J()) != null ? t : Z(!1);
      return (
        n.waiters++,
        e == null
          ? n.result
          : new Promise(function (t) {
              var r = function () {
                (n.waiters--,
                  n.waiters === 0 &&
                    (n.controller.abort(), O === n && (O = null), ee(n)),
                  t(P));
              };
              (e.addEventListener("abort", r, { once: !0 }),
                n.result.then(function (n) {
                  (e.removeEventListener("abort", r), t(n));
                }));
            })
      );
    }
    function J() {
      return O != null &&
        O.generation === W &&
        !O.singleAttempt &&
        !O.controller.signal.aborted
        ? O
        : null;
    }
    function Z(e, t) {
      t === void 0 && (t = null);
      var n = new AbortController(),
        r = null,
        o = ie(n.signal, e, function (e) {
          r = e;
        }).finally(function () {
          var e, i;
          (((e = O) == null ? void 0 : e.result) === o && (O = null),
            ((i = B) == null ? void 0 : i.controller) === n && (B = null),
            ee(a),
            (a.stoppedIneligible = r !== "ready" && t != null && !ne(t)),
            !a.stoppedIneligible && a.generation === W && ye(r));
        }),
        a = {
          controller: n,
          generation: W,
          result: o,
          singleAttempt: e,
          stoppedIneligible: !1,
          waiters: 0,
          wakeRequested: !1,
        };
      return ((O = a), a);
    }
    function ee(e) {
      e.wakeRequested &&
        O == null &&
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.dropForcedWake();
    }
    function te(e) {
      if (
        (Oe(),
        o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi() != null)
      )
        return Promise.resolve("recovered");
      if (re() || B != null) return Promise.resolve("stopped");
      var t = Z(!0, e);
      return (
        t.waiters++,
        (B = { controller: t.controller, generation: W, isEligible: e }),
        t.result.then(function (e) {
          return t.stoppedIneligible ? "stopped" : oe(e);
        })
      );
    }
    function ne(e) {
      try {
        return e();
      } catch (e) {
        return !1;
      }
    }
    function re() {
      return O != null || F != null;
    }
    function oe(e) {
      return e.kind === "ready"
        ? "recovered"
        : D.has(e.failure)
          ? "stopped"
          : "exhausted";
    }
    function ae() {
      var e = B;
      e != null && !ne(e.isEligible) && ((B = null), e.controller.abort());
    }
    async function ie(t, n, a) {
      if ((Oe(), he(), t.aborted)) return P;
      var i = W,
        l = new AbortController(),
        s = function () {
          return l.abort();
        };
      t.addEventListener("abort", s, { once: !0 });
      var u = We(s),
        c = null,
        d = P,
        m = !1,
        p = r("err")("Muse VM channel refused"),
        _ = function () {
          return l.signal.aborted || W !== i;
        },
        f = { attempts: 0, lastFailureCause: null },
        g = function (t, r) {
          return !n && se(t, { failCount: r, slowWake: m });
        },
        L;
      try {
        L = await o("WAExponentialBackoff").exponentialBackoff(
          {
            factor: h,
            jitter: y,
            maxTimeout: b,
            minTimeout: C,
            retries: S,
            signal: l.signal,
            timeoutIncludesTaskDuration: !1,
          },
          async function (e, t) {
            var n;
            if ((t === 1 && me(d), t > 0 && !r("WAWebNetworkStatus").online)) {
              var o = d;
              if (((d = ce(d, "offline")), !(await ue(l.signal)))) return d;
              d = o;
            }
            if (_()) return d;
            f.attempts = t + 1;
            var a = await le(l.signal, t + 1);
            if ((_e(f, a.result), (d = a.result), d.kind === "ready"))
              return (pe(t), d);
            if (
              ((m =
                m || ((n = a.failure) == null ? void 0 : n.slowWake) === !0),
              _() || !g(d, t))
            )
              return d;
            if (c == null || (m && !c.slow)) {
              var i;
              ((i = c) == null || i.clear(),
                (c = { clear: de(s, m ? R : v), slow: m }));
            }
            return e(p);
          },
        );
      } catch (t) {
        (t !== p &&
          !(t instanceof o("WAAbortError").AbortError) &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-vm: connect retry threw name=",
                  "",
                ])),
              Ve(t),
            )
            .sendLogs("hatch-vm-connect-retry-threw"),
          (L = d));
      } finally {
        var E;
        ((E = c) == null || E.clear(), t.removeEventListener("abort", s), u());
      }
      var k = { answer: L, isAbandoned: t.aborted, isStale: W !== i };
      return (
        n || fe(f, k),
        a(Ce(f, k)),
        L.kind === "ready"
          ? L
          : t.aborted
            ? P
            : W !== i
              ? M
              : m && se(L, { failCount: 0, slowWake: m })
                ? w
                : L
      );
    }
    function le(e, t) {
      var n = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (n != null)
        return Promise.resolve({
          failure: null,
          result: { api: n, kind: "ready" },
        });
      var r = Ee(t);
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
              result: e != null ? { api: e, kind: "ready" } : Le(r.failure),
            }
          );
        },
        function () {
          return (l(), { failure: r.failure, result: N });
        },
      );
    }
    function se(e, t) {
      var n = t.failCount,
        r = t.slowWake;
      return e.kind !== "failed" || e.failure !== "channel" || e.cause == null
        ? !1
        : (r || n < g) && L.has(e.cause);
    }
    function ue(e) {
      return new Promise(function (t) {
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
    function ce(e, t) {
      return e.kind === "failed"
        ? { cause: t, failure: e.failure, kind: "failed" }
        : e;
    }
    function de(e, t) {
      var n = self.setTimeout(e, t);
      return function () {
        return self.clearTimeout(n);
      };
    }
    function me(e) {
      var t = e.kind === "failed" ? e.cause : null;
      o("WALogger")
        .LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-vm: connect retrying cause=",
              "",
            ])),
          String(t),
        )
        .sendLogs("hatch-vm-connect-retried");
    }
    function pe(e) {
      e > 0 &&
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: connect recovered attempts=",
                "",
              ])),
            e + 1,
          )
          .sendLogs("hatch-vm-connect-recovered");
    }
    function _e(e, t) {
      if (t.kind === "failed" && !D.has(t.failure)) {
        var n;
        e.lastFailureCause = (n = t.cause) != null ? n : t.failure;
      }
    }
    function fe(e, t) {
      try {
        var n = ve(e, t);
        if (n == null) return;
        var r = e.attempts,
          a = Se(e, t.answer);
        o("WALogger")
          .LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: connect cycle result=",
                " attempts=",
                " cause=",
                "",
              ])),
            n,
            r,
            a,
          )
          .sendLogs(Re(n, r));
      } catch (e) {}
    }
    function ge(e) {
      return (
        z.add(e),
        function () {
          z.delete(e);
        }
      );
    }
    function he() {
      K ||
        ((K = !0),
        ge(function (e) {
          return o("WAWebHatchVmBackgroundRedial").noteHatchVmCycleEnd(e, j);
        }));
    }
    function ye(e) {
      if (e != null)
        for (var t of Array.from(z))
          try {
            t(e);
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-vm: a cycle end listener failed name=",
                    "",
                  ])),
                Ve(e),
              )
              .sendLogs("hatch-vm-cycle-end-listener-failed");
          }
    }
    function Ce(e, t) {
      return t.isStale
        ? null
        : (function (n) {
            return n === "recovered"
              ? "ready"
              : n === "exhausted" ||
                  (n === "abandoned" && A.has(Se(e, t.answer)))
                ? "retryable"
                : n === "failed"
                  ? be(t.answer)
                    ? "final"
                    : "other"
                  : t.answer.kind === "ready"
                    ? "ready"
                    : "other";
          })(ve(e, t));
    }
    function be(e) {
      return e.kind === "failed" && k.has(e.cause);
    }
    function ve(e, t) {
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
              : se(n, { failCount: 0, slowWake: !1 }) || n.cause === "offline"
                ? "exhausted"
                : "failed";
    }
    function Se(e, t) {
      var n;
      if (t.kind === "failed" && !D.has(t.failure)) {
        var r;
        return (r = t.cause) != null ? r : t.failure;
      }
      return (n = e.lastFailureCause) != null ? n : "none";
    }
    function Re(e, t) {
      var n,
        r = T[e],
        o =
          (n = r.find(function (e) {
            var n = e.maxAttempts;
            return t <= n;
          })) != null
            ? n
            : r[r.length - 1];
      return o.reason;
    }
    function Le(e) {
      var t,
        n = e == null ? void 0 : e.cause,
        r = (t = e == null ? void 0 : e.current) != null ? t : "no_api";
      return n == null
        ? { failure: r, kind: "failed" }
        : { cause: n, failure: r, kind: "failed" };
    }
    function Ee(e) {
      if (F == null) {
        var t = {
            attempt: e,
            cause: null,
            credentials: null,
            current: null,
            detail: null,
            slowWake: !1,
          },
          n = { waiters: 0 },
          r = ke(t, n).finally(function () {
            var e;
            ((e = F) == null ? void 0 : e.api) === r && (F = null);
          });
        F = { api: r, demand: n, failure: t };
      }
      return F;
    }
    async function ke(e, t) {
      var n = W;
      q = n;
      var r = await xe(e, function () {
        return (ae(), De(n, t));
      });
      return W !== n
        ? (q === n && Ge(),
          (e.current = "stale_generation"),
          (e.cause = null),
          null)
        : (r == null ? (we(e), Ie(e)) : (V = !0),
          r == null && e.current == null && (e.current = "no_api"),
          r);
    }
    function Ie(e) {
      var t = e.cause,
        n = e.credentials;
      if (n != null && t != null && e.current === "channel" && E.has(t)) {
        var r = O,
          a = Te(r, t),
          i = o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(
            n,
            { wake: a },
          );
        a && i && r != null && (r.wakeRequested = !0);
      }
    }
    function Te(e, t) {
      return e != null && !e.singleAttempt && !e.wakeRequested && L.has(t);
    }
    function De(e, t) {
      return W === e && t.waiters > 0;
    }
    async function xe(e, t) {
      var n = await o(
        "WAWebHatchVmCredentials",
      ).waWebHatchVmCredentials.resolve();
      if (n.kind !== "ok") return Pe(e, "credentials", n.detail, n.cause);
      var r = n.credentials;
      ((e.credentials = r), (e.slowWake = n.slowWake === !0));
      try {
        var a = await $e(r, t);
        if (a === $)
          return Pe(
            e,
            "credentials",
            "A known confidential VM answered as standard",
            "cvm_downgrade_refused",
          );
        if (a === x) return Pe(e, "aborted", null, null);
        if (a != null) return Pe(e, "channel", a.detail, a.cause);
      } catch (t) {
        return Pe(e, "threw", t, null);
      }
      return (
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.markVmConnected(r),
        o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi()
      );
    }
    async function $e(e, t) {
      var n = await o("WAWebHatchCvmConnect").refuseHatchCvmDowngrade(e);
      return n
        ? $
        : (t() && o("WAWebHatchCvmConnect").recordHatchVmType(e),
          e.confidential === !0 ? Ne(e, t) : Me(e, t));
    }
    function Pe(e, t, n, r) {
      return ((e.current = t), (e.cause = r), (e.detail = n), null);
    }
    async function Ne(e, t) {
      if (!t()) return x;
      var n = await o("WAWebHatchCvmConnect").connectHatchConfidentialVm({
        acceptLanguage: r("WAWebL10N").getFullLocale(),
        credentials: e,
        isStillWanted: t,
      });
      return (n == null ? void 0 : n.cause) === "superseded" ? x : n;
    }
    async function Me(e, t) {
      if (!t()) return x;
      o("WAWebHatchCvmConnect").reportHatchStandardDialWithStoredCvmKey();
      var n = await o("WAWebHatchVmSession").waWebHatchVmSession.connect({
        acceptLanguage: r("WAWebL10N").getFullLocale(),
        credentials: e,
      });
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Ready"
        )
          return null;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
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
    }
    function we(e) {
      var t = e.cause,
        n = e.current,
        r = e.detail;
      if (!(n == null || n === "aborted")) {
        var a = Ae(),
          i = a.host,
          l = a.navOnline,
          s = a.online,
          u = a.reconnect,
          c = a.visible,
          d = e.attempt,
          _ =
            t == null
              ? o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  d,
                  s,
                  l,
                  c,
                  u,
                  i,
                )
              : o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  d,
                  s,
                  l,
                  c,
                  u,
                  i,
                );
        _.devConsole(r).sendLogs("hatch-vm-connect-failed");
      }
    }
    function Ae() {
      var e, t;
      return {
        host: Fe(),
        navOnline:
          ((e = self.navigator) == null ? void 0 : e.onLine) === !1 ? 0 : 1,
        online: r("WAWebNetworkStatus").online ? 1 : 0,
        reconnect: V ? 1 : 0,
        visible:
          ((t = self.document) == null ? void 0 : t.visibilityState) ===
          "visible"
            ? 1
            : 0,
      };
    }
    function Fe() {
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
    function Oe() {
      H ||
        ((H = !0),
        (U = He() !== I.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = He();
          if (e !== I.Unknown) {
            var t = U;
            if (((U = e === I.Linked), t && !U)) {
              (W++,
                o("WAWebHatchVmBackgroundRedial").stopHatchVmBackgroundRedial(),
                Ge(),
                o("WAWebHatchCvmSecretPref").clearHatchCvmState(),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(G)) qe(n);
            }
          }
        }));
    }
    function Be() {
      return (Oe(), W);
    }
    function We(e) {
      return (
        Oe(),
        G.add(e),
        function () {
          G.delete(e);
        }
      );
    }
    function qe(e) {
      try {
        e();
      } catch (e) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: an account change listener failed name=",
                "",
              ])),
            Ve(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var Ue = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function Ve(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && Ue.has(t) ? t : "Error";
    }
    function He() {
      return (function (e) {
        if (e === "linked") return I.Linked;
        if (e === "unlinked") return I.Unlinked;
        if (e == null) return I.Unknown;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState(),
      );
    }
    function Ge() {
      ((F = null), (O = null));
      var e = B;
      (e != null && e.generation !== W && ((B = null), e.controller.abort()),
        (V = !1),
        o("WAWebHatchCvmAttestedVms").clearHatchCvmAttestedVms(),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect());
    }
    ((l.connectHatchVmApi = Q),
      (l.connectHatchVmApiWithResult = X),
      (l.redialHatchVmOnce = te),
      (l.isHatchVmConnecting = re),
      (l.subscribeToHatchVmCycleEnd = ge),
      (l.getHatchVmAccountGeneration = Be),
      (l.subscribeToHatchVmAccountChange = We));
  },
  98,
);
