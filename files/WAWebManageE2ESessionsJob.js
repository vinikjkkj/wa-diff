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
          var t = e.filter(k),
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
            y = t.sessionScope,
            C = t.wids;
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
              C.length,
              C.map(function (e) {
                return e.toString();
              }).join(),
            ));
          try {
            yield o(
              "WAWebManagePhoneNumberMappingJob",
            ).ensurePhoneNumberToLidMapping(C);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: ensurePhoneNumberToLidMapping failed: ",
                    "",
                  ])),
                C.length,
                e,
              )
              .sendLogs("ensureE2ESessions", { sampling: 0.01 });
          }
          var R = new (o("WAResolvable").Resolvable)(),
            L = [],
            E = [],
            k = [],
            T = 0,
            x = 0,
            $ = 0,
            P = [],
            N = [];
          try {
            if (
              (C.forEach(function (e) {
                var t;
                if (!e.isUserNotPSA()) {
                  T++;
                  return;
                }
                var n = o("WAWebSignalCommonUtils").createSignalAddress(e, y),
                  a =
                    (r == null ? void 0 : r.isSendTimeFetch) === !0 &&
                    o("WAWebAeaRollout").isAeaEnforcementEnabled(),
                  i = a ? n + ":send" : n,
                  l = (t = v.get(n)) != null ? t : v.get(i);
                l ? L.push(l) : (k.push(e), E.push(i), v.set(i, R.promise));
              }),
              T > 0 &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: ",
                      " skipped (non-user)",
                    ])),
                  C.length,
                  T,
                ),
              k.length > 0)
            ) {
              var M = [];
              if (
                (yield o("WAWebRunInBatches").runInBatches(
                  k,
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield I(e, y);
                        M.push.apply(M, t);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  { batchSize: S.SESSION_CHECK },
                ),
                k.forEach(function (e, t) {
                  M[t] || N.push(e);
                }),
                N.length > 0)
              ) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: fetch prekeys for ",
                      " wids",
                    ])),
                  C.length,
                  N.length,
                );
                var w = yield o("WAWebFetchPrekeysJob").fetchPrekeys(N, i),
                  A = w.errors,
                  F = w.prekeyBundles;
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: prekeys ",
                      ": got ",
                      ", err ",
                      "",
                    ])),
                  C.length,
                  N.length,
                  F.length,
                  A.length,
                );
                var O = yield D(F, y, r);
                if (
                  (($ += O.depletedPrekeyCount),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: ",
                        "/",
                        " E2E sessions +",
                      ])),
                    C.length,
                    O.processedPrekeyCount,
                    C.length,
                  ),
                  A.length > 0)
                )
                  throw A[0];
                x = N.length;
              }
            }
            R.resolve();
          } catch (e) {
            if (
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === b &&
              N.every(function (e) {
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
                C.length,
                N.map(function (e) {
                  return e.toString();
                }).join(),
              ),
                (P = N),
                R.resolve());
            else
              throw (
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: request failed: ",
                      "",
                    ])),
                  C.length,
                  e,
                ),
                R.resolve(e),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
                ),
                e
              );
          } finally {
            E.forEach(function (e) {
              v.delete(e);
            });
          }
          try {
            var B = (yield (h || (h = n("Promise"))).all(L)).find(Boolean);
            if (B) throw B;
          } catch (e) {
            throw (
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: deduped requests failed: ",
                    "",
                  ])),
                C.length,
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
              C.length,
              k.length - x,
              x,
              L.length,
            ),
            { missedPrekeyCount: x, depletedPrekeyCount: $, deletedDevices: P }
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return t !== o("WAWebSessionScope").SessionScope.PQ
        ? t
        : e.kyberKey != null && k(e.wid)
          ? o("WAWebSessionScope").SessionScope.PQ
          : o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function k(e) {
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
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = 0,
            a = 0;
          for (var i of e) {
            var l,
              s,
              u = E(i, t),
              c = yield o("WAWebProcessKeyBundle").processKeyBundles([i], u, n);
            ((r += (l = c.depletedPrekeyCount) != null ? l : 0),
              (a += (s = c.processedPrekeyCount) != null ? s : 0),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop());
          }
          return { depletedPrekeyCount: r, processedPrekeyCount: a };
        })),
        x.apply(this, arguments)
      );
    }
    ((l.getSignalSessionWids = y),
      (l.ensureE2ESessions = R),
      (l.getPrekeyBundleSessionScope = E));
  },
  98,
);
