__d(
  "WAWebProcessKeyBundleInWorker",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "WABinary",
    "WALogger",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebBackendWorkerClient",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibraryDbCallbacksApi",
    "WAWebProcessKeyBundle",
    "WAWebReleaseToEventLoop",
    "WAWebSessionScope",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("TaskScheduler").taskScheduler(
        "signal",
        { concurrency: 1 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    async function f(t, n) {
      var r = 0,
        a = o("WAWebProcessKeyBundle").splitKeyBundles(t),
        i = a.companionBundle,
        l = a.depletedPrekeyCount,
        f = a.primaryBundle;
      await o("WAWebProcessKeyBundle").warmUpIdentityCache([].concat(f, i));
      var g = o("WAWebABProps").getABPropConfigValue(
          "wmi_worker_scheduler_web",
        ),
        y = [].concat(f),
        C = async function (n) {
          var t = n.deviceIdentity,
            r = n.identity,
            a = n.wid;
          if (!t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "processKeyBundlesInWorker: missing device-identity ",
                    "",
                  ])),
                a,
              )
              .sendLogs("createSignalSession-fail");
            return;
          }
          try {
            var i = await o("WAWebAdvSignatureApi").validateADVwithIdentityKey(
              a,
              t,
              r,
            );
            if (!i) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundlesInWorker: invalid identityKey for ",
                      "",
                    ])),
                  a,
                )
                .sendLogs("createSignalSession-fail");
              return;
            }
            y.push(n);
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "processKeyBundlesInWorker: ADV validation failed for ",
                    ": ",
                    "",
                  ])),
                a,
                e,
              )
              .sendLogs("createSignalSession-fail");
          }
        };
      if (g) for (var b of i) (await C(b), await _.yield());
      else {
        var v = h();
        for (var S of i) (await C(S), await v());
      }
      var R = [],
        L = [];
      for (var E of y)
        try {
          var k = new Uint8Array(
              o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                new (o("WABinary").Binary)(E.identity).readBuffer(),
              ),
            ),
            I = new Uint8Array(
              o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                new (o("WABinary").Binary)(E.skey.pubkey).readBuffer(),
              ),
            ),
            T = new Uint8Array(
              new (o("WABinary").Binary)(E.skey.signature).readBuffer(),
            ),
            D =
              E.key != null
                ? {
                    id: E.key.id,
                    publicKey: new Uint8Array(
                      o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                        new (o("WABinary").Binary)(E.key.pubkey).readBuffer(),
                      ),
                    ),
                  }
                : null;
          (R.push({
            identity: k,
            oneTimeKey: D,
            regId: E.regId,
            signedKey: { id: E.skey.id, publicKey: I, signature: T },
          }),
            L.push(E));
        } catch (e) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundlesInWorker: key conversion failed for ",
                  ": ",
                  "",
                ])),
              E.wid,
              e,
            )
            .sendLogs("createSignalSession-fail");
        }
      var x = await o("WAWebCryptoLibraryDbCallbacksApi")
        .getCryptoDbCallbacks()
        .getRegistrationInfo();
      if (x == null)
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundlesInWorker: no registration info available",
                ])),
            )
            .sendLogs("createSignalSession-fail"),
          { depletedPrekeyCount: l, processedPrekeyCount: r }
        );
      var $ = await o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
        P = await $.sendAndReceive(
          "prekeyProcessing",
          "createOutgoingSessionBatch",
          {
            regInfo: x,
            sessions: R,
            shouldYield: o("WAWebABProps").getABPropConfigValue(
              "web_anr_async_msg_send_handler",
            ),
            useScheduler: o("WAWebABProps").getABPropConfigValue(
              "wmi_worker_scheduler_web",
            ),
          },
        ),
        N = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks(),
        M =
          n === o("WAWebSessionScope").SessionScope.STATUS
            ? N.handleNewSessionStatusScope
            : N.handleNewSession,
        w = async function (t) {
          var e = P[t],
            n = L[t];
          if (e.success)
            try {
              var a = e.session;
              (await M(
                o("WAWebWidToJid").widToDeviceJid(n.wid),
                a,
                a.remote.pubKey,
              ),
                r++);
            } catch (e) {
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundlesInWorker: session persist failed for ",
                      ": ",
                      "",
                    ])),
                  n.wid,
                  e,
                )
                .sendLogs("createSignalSession-fail");
            }
          else
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "processKeyBundlesInWorker: session creation failed for ",
                    ": ",
                    "",
                  ])),
                n.wid,
                e.error,
              )
              .sendLogs("createSignalSession-fail");
        };
      if (g) for (var A = 0; A < P.length; A++) (await w(A), await _.yield());
      else for (var F = h(), O = 0; O < P.length; O++) (await w(O), await F());
      return { depletedPrekeyCount: l, processedPrekeyCount: r };
    }
    var g = 100;
    function h() {
      var e = self.performance.now();
      return async function () {
        self.performance.now() - e > g &&
          (await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
          (e = self.performance.now()));
      };
    }
    l.processKeyBundlesInWorker = f;
  },
  98,
);
