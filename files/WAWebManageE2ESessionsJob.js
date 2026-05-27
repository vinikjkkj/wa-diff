__d(
  "WAWebManageE2ESessionsJob",
  [
    "MetaConfig",
    "Promise",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebBackendWorkerClient",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchPrekeysJob",
    "WAWebManagePhoneNumberMappingJob",
    "WAWebProcessKeyBundle",
    "WAWebProcessKeyBundleInWorker",
    "WAWebRunInBatches",
    "WAWebSignal",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
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
      h,
      y = 406,
      C = new Map(),
      b = { SESSION_CHECK: 50, PROCESS_KEY_BUNDLES: 1 };
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            (r === void 0 && (r = !1),
              (i == null ? void 0 : i.skipOfflineDeliveryWait) !== !0 &&
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
                t.length,
                t
                  .map(function (e) {
                    return e.toString();
                  })
                  .join(),
              ));
            try {
              yield o(
                "WAWebManagePhoneNumberMappingJob",
              ).ensurePhoneNumberToLidMapping(t);
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: ensurePhoneNumberToLidMapping failed: ",
                      "",
                    ])),
                  t.length,
                  e,
                )
                .sendLogs("ensureE2ESessions", { sampling: 0.01 });
            }
            var l = new (o("WAResolvable").Resolvable)(),
              v = [],
              S = [],
              L = 0;
            (t.forEach(function (e) {
              if (!e.isUserNotPSA()) {
                L++;
                return;
              }
              var t = C.get(e);
              t ? v.push(t) : (S.push(e), C.set(e, l.promise));
            }),
              L > 0 &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: ",
                      " skipped (non-user)",
                    ])),
                  t.length,
                  L,
                ));
            var E = 0,
              k = 0,
              I = [],
              T = [];
            try {
              if (S.length > 0) {
                var D = [];
                if (
                  (yield o("WAWebRunInBatches").runInBatches(
                    S,
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t = yield o(
                            "WAWebSignal",
                          ).Session.hasSignalSessions(e, a);
                          D.push.apply(D, t);
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                    { batchSize: b.SESSION_CHECK },
                  ),
                  S.forEach(function (e, t) {
                    D[t] || T.push(e);
                  }),
                  T.length > 0)
                ) {
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: fetch prekeys for ",
                        " wids",
                      ])),
                    t.length,
                    T.length,
                  );
                  var x = yield o("WAWebFetchPrekeysJob").fetchPrekeys(T, r),
                    $ = x.errors,
                    P = x.prekeyBundles;
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: prekeys ",
                        ": got ",
                        ", err ",
                        "",
                      ])),
                    t.length,
                    T.length,
                    P.length,
                    $.length,
                  );
                  var N = 0;
                  if (R()) {
                    var M,
                      w,
                      A = yield o(
                        "WAWebProcessKeyBundleInWorker",
                      ).processKeyBundlesInWorker(P, a);
                    ((k += (M = A.depletedPrekeyCount) != null ? M : 0),
                      (N += (w = A.processedPrekeyCount) != null ? w : 0));
                  } else
                    yield o("WAWebRunInBatches").runInBatches(
                      P,
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var t,
                              n,
                              r = yield o(
                                "WAWebProcessKeyBundle",
                              ).processKeyBundles([].concat(e), a);
                            ((k += (t = r.depletedPrekeyCount) != null ? t : 0),
                              (N +=
                                (n = r.processedPrekeyCount) != null ? n : 0));
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                      { batchSize: b.PROCESS_KEY_BUNDLES },
                    );
                  if (
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "ensureE2ESessions: ",
                          " wids: ",
                          "/",
                          " E2E sessions +",
                        ])),
                      t.length,
                      N,
                      t.length,
                    ),
                    $.length > 0)
                  )
                    throw $[0];
                  E = T.length;
                }
              }
              l.resolve();
            } catch (e) {
              if (
                e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                e.statusCode === y &&
                T.every(function (e) {
                  return (
                    e.device != null &&
                    e.device !== o("WAJids").DEFAULT_DEVICE_ID
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
                  t.length,
                  T.map(function (e) {
                    return e.toString();
                  }).join(),
                ),
                  (I = T),
                  l.resolve());
              else
                throw (
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: request failed: ",
                        "",
                      ])),
                    t.length,
                    e,
                  ),
                  l.resolve(e),
                  o("WAWebAppTracker").AppTracker.stop(
                    o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
                  ),
                  e
                );
            } finally {
              S.forEach(function (e) {
                C.delete(e);
              });
            }
            try {
              var F = (yield (h || (h = n("Promise"))).all(v)).find(Boolean);
              if (F) throw F;
            } catch (e) {
              throw (
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: deduped requests failed: ",
                      "",
                    ])),
                  t.length,
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
                t.length,
                S.length - E,
                E,
                v.length,
              ),
              {
                missedPrekeyCount: E,
                depletedPrekeyCount: k,
                deletedDevices: I,
              }
            );
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R() {
      return (
        o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady() &&
        r("MetaConfig")._("463") === 2
      );
    }
    l.ensureE2ESessions = v;
  },
  98,
);
