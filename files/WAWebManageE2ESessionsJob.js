__d(
  "WAWebManageE2ESessionsJob",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebABPropsCache",
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
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          (r === void 0 && (r = !1),
            yield o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
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
          var i = new (o("WAResolvable").Resolvable)(),
            l = [],
            v = [],
            S = 0;
          (t.forEach(function (e) {
            if (!e.isUserNotPSA()) {
              S++;
              return;
            }
            var t = C.get(e);
            t ? l.push(t) : (v.push(e), C.set(e, i.promise));
          }),
            S > 0 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: ",
                    " skipped (non-user)",
                  ])),
                t.length,
                S,
              ));
          var L = 0,
            E = 0,
            k = [],
            I = [];
          try {
            if (v.length > 0) {
              var T = [];
              if (
                (yield o("WAWebRunInBatches").runInBatches(
                  v,
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield o(
                          "WAWebSignal",
                        ).Session.hasSignalSessions(e, a);
                        T.push.apply(T, t);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  { batchSize: b.SESSION_CHECK },
                ),
                v.forEach(function (e, t) {
                  T[t] || I.push(e);
                }),
                I.length > 0)
              ) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: fetch prekeys for ",
                      " wids",
                    ])),
                  t.length,
                  I.length,
                );
                var D = yield o("WAWebFetchPrekeysJob").fetchPrekeys(I, r),
                  x = D.errors,
                  $ = D.prekeyBundles;
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
                  I.length,
                  $.length,
                  x.length,
                );
                var P = 0;
                if (R()) {
                  var N,
                    M,
                    w = yield o(
                      "WAWebProcessKeyBundleInWorker",
                    ).processKeyBundlesInWorker($, a);
                  ((E += (N = w.depletedPrekeyCount) != null ? N : 0),
                    (P += (M = w.processedPrekeyCount) != null ? M : 0));
                } else
                  yield o("WAWebRunInBatches").runInBatches(
                    $,
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t,
                            n,
                            r = yield o(
                              "WAWebProcessKeyBundle",
                            ).processKeyBundles([].concat(e), a);
                          ((E += (t = r.depletedPrekeyCount) != null ? t : 0),
                            (P +=
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
                    P,
                    t.length,
                  ),
                  x.length > 0)
                )
                  throw x[0];
                L = I.length;
              }
            }
            i.resolve();
          } catch (e) {
            if (
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === y &&
              I.every(function (e) {
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
                t.length,
                I.map(function (e) {
                  return e.toString();
                }).join(),
              ),
                (k = I),
                i.resolve());
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
                i.resolve(e),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
                ),
                e
              );
          } finally {
            v.forEach(function (e) {
              C.delete(e);
            });
          }
          try {
            var A = (yield (h || (h = n("Promise"))).all(l)).find(Boolean);
            if (A) throw A;
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
              v.length - L,
              L,
              l.length,
            ),
            { missedPrekeyCount: L, depletedPrekeyCount: E, deletedDevices: k }
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return (
        o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady() &&
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_worker_prekey_processing_enabled",
        ) === !0
      );
    }
    l.ensureE2ESessions = v;
  },
  98,
);
