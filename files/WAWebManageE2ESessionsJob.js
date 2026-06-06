__d(
  "WAWebManageE2ESessionsJob",
  [
    "MetaConfig",
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
      h = 406,
      y = new Map(),
      C = { SESSION_CHECK: 50, PROCESS_KEY_BUNDLES: 1 };
    async function b(t, n, r, a) {
      (n === void 0 && (n = !1),
        (a == null ? void 0 : a.skipOfflineDeliveryWait) !== !0 &&
          (await o(
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
        await o(
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
        b = [],
        S = 0;
      (t.forEach(function (e) {
        if (!e.isUserNotPSA()) {
          S++;
          return;
        }
        var t = y.get(e);
        t ? l.push(t) : (b.push(e), y.set(e, i.promise));
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
      var R = 0,
        L = 0,
        E = [],
        k = [];
      try {
        if (b.length > 0) {
          var I = [];
          if (
            (await o("WAWebRunInBatches").runInBatches(
              b,
              async function (e) {
                var t = await o("WAWebSignal").Session.hasSignalSessions(e, r);
                I.push.apply(I, t);
              },
              { batchSize: C.SESSION_CHECK },
            ),
            b.forEach(function (e, t) {
              I[t] || k.push(e);
            }),
            k.length > 0)
          ) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "ensureE2ESessions: ",
                  " wids: fetch prekeys for ",
                  " wids",
                ])),
              t.length,
              k.length,
            );
            var T = await o("WAWebFetchPrekeysJob").fetchPrekeys(k, n),
              D = T.errors,
              x = T.prekeyBundles;
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
              k.length,
              x.length,
              D.length,
            );
            var $ = 0;
            if (v()) {
              var P,
                N,
                M = await o(
                  "WAWebProcessKeyBundleInWorker",
                ).processKeyBundlesInWorker(x, r);
              ((L += (P = M.depletedPrekeyCount) != null ? P : 0),
                ($ += (N = M.processedPrekeyCount) != null ? N : 0));
            } else
              await o("WAWebRunInBatches").runInBatches(
                x,
                async function (e) {
                  var t,
                    n,
                    a = await o("WAWebProcessKeyBundle").processKeyBundles(
                      [].concat(e),
                      r,
                    );
                  ((L += (t = a.depletedPrekeyCount) != null ? t : 0),
                    ($ += (n = a.processedPrekeyCount) != null ? n : 0));
                },
                { batchSize: C.PROCESS_KEY_BUNDLES },
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
                $,
                t.length,
              ),
              D.length > 0)
            )
              throw D[0];
            R = k.length;
          }
        }
        i.resolve();
      } catch (e) {
        if (
          e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
          e.statusCode === h &&
          k.every(function (e) {
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
            k
              .map(function (e) {
                return e.toString();
              })
              .join(),
          ),
            (E = k),
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
        b.forEach(function (e) {
          y.delete(e);
        });
      }
      try {
        var w = (await Promise.all(l)).find(Boolean);
        if (w) throw w;
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
          b.length - R,
          R,
          l.length,
        ),
        { missedPrekeyCount: R, depletedPrekeyCount: L, deletedDevices: E }
      );
    }
    function v() {
      return (
        o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady() &&
        r("MetaConfig")._("463") === 2
      );
    }
    l.ensureE2ESessions = b;
  },
  98,
);
