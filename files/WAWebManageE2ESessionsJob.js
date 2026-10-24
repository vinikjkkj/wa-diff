__d(
  "WAWebManageE2ESessionsJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WAWebAeaRollout",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchPrekeysJob",
    "WAWebHandleMsgError",
    "WAWebManagePhoneNumberMappingJob",
    "WAWebProcessKeyBundle",
    "WAWebReleaseToEventLoop",
    "WAWebRunInBatches",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.filter($),
            r = yield (h || (h = n("Promise"))).all([
              o("WAWebSignal").Session.hasSignalSessions(
                e,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              ),
              o("WAWebSignal").Session.hasSignalSessions(
                t,
                o("WAWebSessionScope").SessionScope.PQ,
              ),
            ]),
            a = r[0],
            i = r[1];
          return {
            default: e.filter(function (e, t) {
              return a[t] === !0;
            }),
            pq: t.filter(function (e, t) {
              return i[t] === !0;
            }),
          };
        })),
        C.apply(this, arguments)
      );
    }
    var b = 406,
      v = new Map(),
      S = { SESSION_CHECK: 50 };
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.aeaOptions,
            a = t.identityChanged,
            i = a === void 0 ? !1 : a,
            l = t.options,
            h = t.sessionScope,
            y = t.wids;
          ((l == null ? void 0 : l.skipOfflineDeliveryWait) !== !0 &&
            (yield o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd()),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
            ),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "ensureE2ESessions: ",
                  " wids: ",
                  "",
                ])),
              y.length,
              y
                .map(function (e) {
                  return e.toString();
                })
                .join(),
            ));
          try {
            yield o(
              "WAWebManagePhoneNumberMappingJob",
            ).ensurePhoneNumberToLidMapping(y);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: ensurePhoneNumberToLidMapping failed: ",
                    "",
                  ])),
                y.length,
                e,
              )
              .sendLogs("ensureE2ESessions", { sampling: 0.01 });
          }
          var C = new (o("WAResolvable").Resolvable)(),
            R = [],
            L = [],
            k = [],
            T = [],
            x = 0,
            $ = 0,
            N = 0,
            w = [],
            A = [];
          try {
            if (
              (y.forEach(function (e) {
                var t, n;
                if (!e.isUserNotPSA()) {
                  x++;
                  return;
                }
                var a = o("WAWebSignalCommonUtils").createSignalAddress(e, h),
                  i = o("WAWebAeaRollout").isAeaEnforcementEnabled()
                    ? [
                        a,
                        String(r != null),
                        String(r == null ? void 0 : r.isMonitoredSend),
                        String(
                          (r == null
                            ? void 0
                            : r.isBeforeEnforcedSendDecision) === !0,
                        ),
                        (t =
                          r == null || (n = r.sendRecipient) == null
                            ? void 0
                            : n.toString()) != null
                          ? t
                          : "",
                      ].join(":")
                    : a,
                  l = v.get(i);
                l
                  ? (R.push(l), L.push(e))
                  : (T.push(e), k.push(i), v.set(i, C.promise));
              }),
              x > 0 &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: ",
                      " skipped (non-user)",
                    ])),
                  y.length,
                  x,
                ),
              T.length > 0)
            ) {
              var F = [];
              if (
                (yield o("WAWebRunInBatches").runInBatches(
                  T,
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield P(e, h);
                        F.push.apply(F, t);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  { batchSize: S.SESSION_CHECK },
                ),
                T.forEach(function (e, t) {
                  F[t] || A.push(e);
                }),
                A.length > 0)
              ) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: fetch prekeys for ",
                      " wids",
                    ])),
                  y.length,
                  A.length,
                );
                var O = yield o("WAWebFetchPrekeysJob").fetchPrekeys(
                    A,
                    i,
                    void 0,
                    { pqSupport: h === o("WAWebSessionScope").SessionScope.PQ },
                  ),
                  B = O.errors,
                  W = O.prekeyBundles;
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: prekeys ",
                      ": got ",
                      ", err ",
                      "",
                    ])),
                  y.length,
                  A.length,
                  W.length,
                  B.length,
                );
                var q = yield M(W, h, r);
                if (
                  ((N += q.depletedPrekeyCount),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: ",
                        "/",
                        " E2E sessions +",
                      ])),
                    y.length,
                    q.processedPrekeyCount,
                    y.length,
                  ),
                  q.aeaSkippedPrimaries.length > 0)
                )
                  throw new I(q.aeaSkippedPrimaries, B[0]);
                if (B.length > 0) throw B[0];
                $ = A.length;
              }
            }
            C.resolve();
          } catch (e) {
            if (
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === b &&
              A.every(function (e) {
                return (
                  e.device != null && e.device !== o("WAJids").DEFAULT_DEVICE_ID
                );
              })
            )
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: failed with 406 error code for companion devices: ",
                    "",
                  ])),
                y.length,
                A.map(function (e) {
                  return e.toString();
                }).join(),
              ),
                (w = A),
                C.resolve());
            else {
              (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: request failed: ",
                    "",
                  ])),
                y.length,
                e,
              ),
                C.resolve(e));
              var U = e;
              throw (
                (r == null ? void 0 : r.isBeforeEnforcedSendDecision) === !0 &&
                  o("WAWebAeaRollout").isAeaEnforcementEnabled() &&
                  (D(k, C.promise), (U = yield E(R, L, e))),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
                ),
                U
              );
            }
          } finally {
            D(k, C.promise);
          }
          try {
            var V = yield E(R, L);
            if (V != null) throw V;
          } catch (e) {
            throw (
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: deduped requests failed: ",
                    "",
                  ])),
                y.length,
                e,
              ),
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
              ),
              e
            );
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
            );
          }
          return (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "ensureE2ESessions: ",
                  " wids: ",
                  " existing, ",
                  " req, ",
                  " deduped",
                ])),
              y.length,
              T.length - $,
              $,
              R.length,
            ),
            { missedPrekeyCount: $, depletedPrekeyCount: N, deletedDevices: w }
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a,
            i,
            l = yield (h || (h = n("Promise"))).allSettled(e),
            s = l.map(function (e, n) {
              return T(e.status === "fulfilled" ? e.value : e.reason, t[n]);
            });
          return (a =
            (i = s.find(function (e) {
              return e instanceof o("WAWebHandleMsgError").AeaSendBlockedError;
            })) != null
              ? i
              : r) != null
            ? a
            : s.find(function (e) {
                return e != null;
              });
        })),
        k.apply(this, arguments)
      );
    }
    var I = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this) || this),
          (r.skippedPrimaries = t),
          (r.fetchError = n),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebHandleMsgError").AeaSendBlockedError);
    function T(e, t) {
      return e instanceof I
        ? e.skippedPrimaries.some(function (e) {
            return e.equals(t);
          })
          ? new (o("WAWebHandleMsgError").AeaSendBlockedError)()
          : e.fetchError
        : e;
    }
    function D(e, t) {
      e.forEach(function (e) {
        v.get(e) === t && v.delete(e);
      });
    }
    function x(e, t) {
      return t !== o("WAWebSessionScope").SessionScope.PQ
        ? t
        : e.kyberKey != null && $(e.wid)
          ? o("WAWebSessionScope").SessionScope.PQ
          : o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function $(e) {
      return (
        o("WAWebSignalCommonUtils").createSignalAddress(
          e,
          o("WAWebSessionScope").SessionScope.DEFAULT,
        ) !==
        o("WAWebSignalCommonUtils").createSignalAddress(
          e,
          o("WAWebSessionScope").SessionScope.PQ,
        )
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t !== o("WAWebSessionScope").SessionScope.PQ)
            return o("WAWebSignal").Session.hasSignalSessions(e, t);
          var n = yield y(e),
            r = n.default,
            a = n.pq,
            i = new Set([].concat(r, a));
          return e.map(function (e) {
            return i.has(e);
          });
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = 0,
            a = 0,
            i = [];
          for (var l of e) {
            var s,
              u,
              c,
              d = x(l, t),
              m = yield o("WAWebProcessKeyBundle").processKeyBundles([l], d, n);
            ((r += (s = m.depletedPrekeyCount) != null ? s : 0),
              (a += (u = m.processedPrekeyCount) != null ? u : 0),
              i.push.apply(i, (c = m.aeaSkippedPrimaries) != null ? c : []),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          }
          return {
            depletedPrekeyCount: r,
            processedPrekeyCount: a,
            aeaSkippedPrimaries: i,
          };
        })),
        w.apply(this, arguments)
      );
    }
    ((l.getSignalSessionWids = y),
      (l.ensureE2ESessions = R),
      (l.getPrekeyBundleSessionScope = x));
  },
  98,
);
