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
    "WAWebSessionScope",
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.identityChanged,
            a = r === void 0 ? !1 : r,
            i = t.options,
            l = t.sessionScope,
            v = t.wids;
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
              v.length,
              v
                .map(function (e) {
                  return e.toString();
                })
                .join(),
            ));
          try {
            yield o(
              "WAWebManagePhoneNumberMappingJob",
            ).ensurePhoneNumberToLidMapping(v);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: ensurePhoneNumberToLidMapping failed: ",
                    "",
                  ])),
                v.length,
                e,
              )
              .sendLogs("ensureE2ESessions", { sampling: 0.01 });
          }
          var S = new (o("WAResolvable").Resolvable)(),
            L = [],
            E = [],
            k = 0;
          (v.forEach(function (e) {
            if (!e.isUserNotPSA()) {
              k++;
              return;
            }
            var t = C.get(e);
            t ? L.push(t) : (E.push(e), C.set(e, S.promise));
          }),
            k > 0 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: ",
                    " skipped (non-user)",
                  ])),
                v.length,
                k,
              ));
          var I = 0,
            T = 0,
            D = [],
            x = [];
          try {
            if (E.length > 0) {
              var $ = [];
              if (
                (yield o("WAWebRunInBatches").runInBatches(
                  E,
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield o(
                          "WAWebSignal",
                        ).Session.hasSignalSessions(e, l);
                        $.push.apply($, t);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  { batchSize: b.SESSION_CHECK },
                ),
                E.forEach(function (e, t) {
                  $[t] || x.push(e);
                }),
                x.length > 0)
              ) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: fetch prekeys for ",
                      " wids",
                    ])),
                  v.length,
                  x.length,
                );
                var P = yield o("WAWebFetchPrekeysJob").fetchPrekeys(x, a),
                  N = P.errors,
                  M = P.prekeyBundles;
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: prekeys ",
                      ": got ",
                      ", err ",
                      "",
                    ])),
                  v.length,
                  x.length,
                  M.length,
                  N.length,
                );
                var w = 0;
                if (R() && l !== o("WAWebSessionScope").SessionScope.PQ) {
                  var A,
                    F,
                    O = yield o(
                      "WAWebProcessKeyBundleInWorker",
                    ).processKeyBundlesInWorker(M, l);
                  ((T += (A = O.depletedPrekeyCount) != null ? A : 0),
                    (w += (F = O.processedPrekeyCount) != null ? F : 0));
                } else
                  yield o("WAWebRunInBatches").runInBatches(
                    M,
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t,
                            n,
                            r = yield o(
                              "WAWebProcessKeyBundle",
                            ).processKeyBundles([].concat(e), l);
                          ((T += (t = r.depletedPrekeyCount) != null ? t : 0),
                            (w +=
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
                    v.length,
                    w,
                    v.length,
                  ),
                  N.length > 0)
                )
                  throw N[0];
                I = x.length;
              }
            }
            S.resolve();
          } catch (e) {
            if (
              e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              e.statusCode === y &&
              x.every(function (e) {
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
                v.length,
                x
                  .map(function (e) {
                    return e.toString();
                  })
                  .join(),
              ),
                (D = x),
                S.resolve());
            else
              throw (
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "ensureE2ESessions: ",
                      " wids: request failed: ",
                      "",
                    ])),
                  v.length,
                  e,
                ),
                S.resolve(e),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.PreKeyProcessing,
                ),
                e
              );
          } finally {
            E.forEach(function (e) {
              C.delete(e);
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
                v.length,
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
              v.length,
              E.length - I,
              I,
              L.length,
            ),
            { missedPrekeyCount: I, depletedPrekeyCount: T, deletedDevices: D }
          );
        })),
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
