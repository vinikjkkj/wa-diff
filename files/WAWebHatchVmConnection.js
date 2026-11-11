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
      w = !1,
      A = new Set();
    function F() {
      return O().then(function (e) {
        return e.kind === "ready" ? e.api : null;
      });
    }
    function O(e) {
      if ((he(), (e == null ? void 0 : e.aborted) === !0))
        return (_ || (_ = n("Promise"))).resolve(k);
      var t = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      return t != null
        ? (_ || (_ = n("Promise"))).resolve({ kind: "ready", api: t })
        : B(e);
    }
    function B(e) {
      var t,
        r = (t = W()) != null ? t : q();
      return (
        r.waiters++,
        e == null
          ? r.result
          : new (_ || (_ = n("Promise")))(function (t) {
              var n = function () {
                (r.waiters--,
                  r.waiters === 0 &&
                    (r.controller.abort(), x === r && (x = null), U(r)),
                  t(k));
              };
              (e.addEventListener("abort", n, { once: !0 }),
                r.result.then(function (r) {
                  (e.removeEventListener("abort", n), t(r));
                }));
            })
      );
    }
    function W() {
      return x != null && x.generation === $ && !x.controller.signal.aborted
        ? x
        : null;
    }
    function q() {
      var e = new AbortController(),
        t = V(e.signal).finally(function () {
          var e;
          (((e = x) == null ? void 0 : e.result) === t && (x = null), U(n));
        }),
        n = {
          controller: e,
          generation: $,
          result: t,
          waiters: 0,
          wakeRequested: !1,
        };
      return ((x = n), n);
    }
    function U(e) {
      e.wakeRequested &&
        x == null &&
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.dropForcedWake();
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((he(), e.aborted)) return k;
          var t = $,
            a = new AbortController(),
            i = function () {
              return a.abort();
            };
          e.addEventListener("abort", i, { once: !0 });
          var l = Ce(i),
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
                      (t === 1 && X(u),
                      t > 0 && !r("WAWebNetworkStatus").online)
                    ) {
                      var n = u;
                      if (((u = K(u, "offline")), !(yield j(a.signal))))
                        return u;
                      u = n;
                    }
                    if (d()) return u;
                    var o = yield G(a.signal, t + 1);
                    return (
                      (u = o.result),
                      u.kind === "ready"
                        ? (Y(t), u)
                        : d() || !z(u)
                          ? u
                          : (s != null || (s = Q(i)), e(c))
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
                  Se(e),
                )
                .sendLogs("hatch-vm-connect-retry-threw"),
              (m = u));
          } finally {
            (s == null || s(), e.removeEventListener("abort", i), l());
          }
          return m.kind === "ready" ? m : e.aborted ? k : $ === t ? m : T;
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      var r = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (r != null)
        return (_ || (_ = n("Promise"))).resolve({
          failure: null,
          result: { api: r, kind: "ready" },
        });
      var a = Z(t);
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
              result: e != null ? { api: e, kind: "ready" } : J(a.failure),
            }
          );
        },
        function () {
          return (s(), { failure: a.failure, result: I });
        },
      );
    }
    function z(e) {
      return (
        e.kind === "failed" &&
        e.failure === "channel" &&
        e.cause != null &&
        v.has(e.cause)
      );
    }
    function j(e) {
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
    function K(e, t) {
      return e.kind === "failed"
        ? { cause: t, failure: e.failure, kind: "failed" }
        : e;
    }
    function Q(e) {
      var t = self.setTimeout(e, b);
      return function () {
        return self.clearTimeout(t);
      };
    }
    function X(t) {
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
    function Y(e) {
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
    function J(e) {
      var t,
        n = e == null ? void 0 : e.cause,
        r = (t = e == null ? void 0 : e.current) != null ? t : "no_api";
      return n == null
        ? { failure: r, kind: "failed" }
        : { cause: n, failure: r, kind: "failed" };
    }
    function Z(e) {
      if (D == null) {
        var t = {
            attempt: e,
            cause: null,
            credentials: null,
            current: null,
            detail: null,
          },
          n = { waiters: 0 },
          r = ee(t, n).finally(function () {
            var e;
            ((e = D) == null ? void 0 : e.api) === r && (D = null);
          });
        D = { api: r, demand: n, failure: t };
      }
      return D;
    }
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = $;
          P = n;
          var r = yield ae(e, function () {
            return oe(n, t);
          });
          return $ !== n
            ? (P === n && Le(),
              (e.current = "stale_generation"),
              (e.cause = null),
              null)
            : (r == null ? (_e(e), ne(e)) : (M = !0),
              r == null && e.current == null && (e.current = "no_api"),
              r);
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      var t = e.cause,
        n = e.credentials;
      if (n != null && t != null && e.current === "channel" && S.has(t)) {
        var r = x,
          a = re(r, t),
          i = o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(
            n,
            { wake: a },
          );
        a && i && r != null && (r.wakeRequested = !0);
      }
    }
    function re(e, t) {
      return e != null && !e.wakeRequested && v.has(t);
    }
    function oe(e, t) {
      return $ === e && t.waiters > 0;
    }
    function ae(e, t) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (n.kind !== "ok") return ue(e, "credentials", n.detail, n.cause);
          var r = n.credentials;
          e.credentials = r;
          try {
            var a = yield le(r, t);
            if (a === E)
              return ue(
                e,
                "credentials",
                "A known confidential VM answered as standard",
                "cvm_downgrade_refused",
              );
            if (a === L) return ue(e, "aborted", null, null);
            if (a != null) return ue(e, "channel", a.detail, a.cause);
          } catch (t) {
            return ue(e, "threw", t, null);
          }
          return o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchCvmConnect").refuseHatchCvmDowngrade(e);
          return n
            ? E
            : (t() && o("WAWebHatchCvmConnect").recordHatchVmType(e),
              e.confidential === !0 ? ce(e, t) : me(e, t));
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e, t, n, r) {
      return ((e.current = t), (e.cause = r), (e.detail = n), null);
    }
    function ce(e, t) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return L;
          var n = yield o("WAWebHatchCvmConnect").connectHatchConfidentialVm({
            acceptLanguage: r("WAWebL10N").getFullLocale(),
            credentials: e,
            isStillWanted: t,
          });
          return (n == null ? void 0 : n.cause) === "superseded" ? L : n;
        })),
        de.apply(this, arguments)
      );
    }
    function me(e, t) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        pe.apply(this, arguments)
      );
    }
    function _e(e) {
      var t = e.cause,
        n = e.current,
        r = e.detail;
      if (!(n == null || n === "aborted")) {
        var a = fe(),
          i = a.host,
          l = a.navOnline,
          s = a.online,
          d = a.reconnect,
          m = a.visible,
          p = e.attempt,
          _ =
            t == null
              ? o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  d,
                  i,
                )
              : o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  d,
                  i,
                );
        _.devConsole(r).sendLogs("hatch-vm-connect-failed");
      }
    }
    function fe() {
      var e, t;
      return {
        host: ge(),
        navOnline:
          ((e = self.navigator) == null ? void 0 : e.onLine) === !1 ? 0 : 1,
        online: r("WAWebNetworkStatus").online ? 1 : 0,
        reconnect: M ? 1 : 0,
        visible:
          ((t = self.document) == null ? void 0 : t.visibilityState) ===
          "visible"
            ? 1
            : 0,
      };
    }
    function ge() {
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
    function he() {
      w ||
        ((w = !0),
        (N = Re() !== R.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = Re();
          if (e !== R.Unknown) {
            var t = N;
            if (((N = e === R.Linked), t && !N)) {
              ($++,
                Le(),
                o("WAWebHatchCvmSecretPref").clearHatchCvmState(),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(A)) be(n);
            }
          }
        }));
    }
    function ye() {
      return (he(), $);
    }
    function Ce(e) {
      return (
        he(),
        A.add(e),
        function () {
          A.delete(e);
        }
      );
    }
    function be(e) {
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
            Se(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var ve = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function Se(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && ve.has(t) ? t : "Error";
    }
    function Re() {
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
    function Le() {
      ((D = null),
        (x = null),
        (M = !1),
        o("WAWebHatchCvmAttestedVms").clearHatchCvmAttestedVms(),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect());
    }
    ((l.connectHatchVmApi = F),
      (l.connectHatchVmApiWithResult = O),
      (l.getHatchVmAccountGeneration = ye),
      (l.subscribeToHatchVmAccountChange = Ce));
  },
  98,
);
