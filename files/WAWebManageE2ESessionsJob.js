__d(
  "WAWebManageE2ESessionsJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchPrekeysJob",
    "WAWebManagePhoneNumberMappingJob",
    "WAWebProcessKeyBundle",
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
          var t = e.filter(E),
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
      S = { SESSION_CHECK: 50, PROCESS_KEY_BUNDLES: 1 };
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.identityChanged,
            a = r === void 0 ? !1 : r,
            i = t.options,
            l = t.sessionScope,
            y = t.wids;
          ((i == null ? void 0 : i.skipOfflineDeliveryWait) !== !0 &&
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
            E = [],
            I = 0,
            D = 0,
            x = 0,
            $ = [],
            P = [];
          try {
            if (
              (y.forEach(function (e) {
                if (!e.isUserNotPSA()) {
                  I++;
                  return;
                }
                var t = o("WAWebSignalCommonUtils").createSignalAddress(e, l),
                  n = v.get(t);
                n ? R.push(n) : (E.push(e), L.push(t), v.set(t, C.promise));
              }),
              I > 0 &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: ",
                      " skipped (non-user)",
                    ])),
                  y.length,
                  I,
                ),
              E.length > 0)
            ) {
              var N = [];
              if (
                (yield o("WAWebRunInBatches").runInBatches(
                  E,
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield k(e, l);
                        N.push.apply(N, t);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  { batchSize: S.SESSION_CHECK },
                ),
                E.forEach(function (e, t) {
                  N[t] || P.push(e);
                }),
                P.length > 0)
              ) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: fetch prekeys for ",
                      " wids",
                    ])),
                  y.length,
                  P.length,
                );
                var M = yield o("WAWebFetchPrekeysJob").fetchPrekeys(P, a),
                  w = M.errors,
                  A = M.prekeyBundles;
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
                  P.length,
                  A.length,
                  w.length,
                );
                var F = yield T(A, l);
                if (
                  ((x += F.depletedPrekeyCount),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: ",
                        "/",
                        " E2E sessions +",
                      ])),
                    y.length,
                    F.processedPrekeyCount,
                    y.length,
                  ),
                  w.length > 0)
                )
                  throw w[0];
                D = P.length;
              }
            }
            C.resolve();
          } catch (e) {
            if (
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === b &&
              P.every(function (e) {
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
                P.map(function (e) {
                  return e.toString();
                }).join(),
              ),
                ($ = P),
                C.resolve());
            else
              throw (
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: request failed: ",
                      "",
                    ])),
                  y.length,
                  e,
                ),
                C.resolve(e),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
                ),
                e
              );
          } finally {
            L.forEach(function (e) {
              v.delete(e);
            });
          }
          try {
            var O = (yield (h || (h = n("Promise"))).all(R)).find(Boolean);
            if (O) throw O;
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
              E.length - D,
              D,
              R.length,
            ),
            { missedPrekeyCount: D, depletedPrekeyCount: x, deletedDevices: $ }
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
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
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t !== o("WAWebSessionScope").SessionScope.PQ) return $(e, t);
          var n = x(e),
            r = n.defaultPrekeyBundles,
            a = n.pqPrekeyBundles,
            i = yield $(r, o("WAWebSessionScope").SessionScope.DEFAULT),
            l = yield $(a, o("WAWebSessionScope").SessionScope.PQ);
          return {
            depletedPrekeyCount: i.depletedPrekeyCount + l.depletedPrekeyCount,
            processedPrekeyCount:
              i.processedPrekeyCount + l.processedPrekeyCount,
          };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = [],
        n = [];
      return (
        e.forEach(function (e) {
          e.kyberKey != null && E(e.wid) ? n.push(e) : t.push(e);
        }),
        { defaultPrekeyBundles: t, pqPrekeyBundles: n }
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = 0,
            a = 0;
          return (
            yield o("WAWebRunInBatches").runInBatches(
              e,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n,
                      i,
                      l = yield o("WAWebProcessKeyBundle").processKeyBundles(
                        [].concat(e),
                        t,
                      );
                    ((r += (n = l.depletedPrekeyCount) != null ? n : 0),
                      (a += (i = l.processedPrekeyCount) != null ? i : 0));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              { batchSize: S.PROCESS_KEY_BUNDLES },
            ),
            { depletedPrekeyCount: r, processedPrekeyCount: a }
          );
        })),
        P.apply(this, arguments)
      );
    }
    ((l.getSignalSessionWids = y), (l.ensureE2ESessions = R));
  },
  98,
);
