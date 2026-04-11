__d(
  "WAWebProcessKeyBundleInWorker",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "WABinary",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebBackendWorkerClient",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibraryDbCallbacksApi",
    "WAWebProcessKeyBundle",
    "WAWebSessionScope",
    "WAWebWidToJid",
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
      _ = o("TaskScheduler").taskScheduler(
        "signal",
        { concurrency: 1 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = 0,
            i = o("WAWebProcessKeyBundle").splitKeyBundles(t),
            l = i.companionBundle,
            f = i.depletedPrekeyCount,
            g = i.primaryBundle;
          yield o("WAWebProcessKeyBundle").warmUpIdentityCache([].concat(g, l));
          var h = o("WAWebABProps").getABPropConfigValue(
              "wmi_worker_scheduler_web",
            ),
            C = [].concat(g),
            b = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = t.deviceIdentity,
                    r = t.identity,
                    a = t.wid;
                  if (!n) {
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
                    var i = yield o(
                      "WAWebAdvSignatureApi",
                    ).validateADVwithIdentityKey(a, n, r);
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
                    C.push(t);
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
                },
              );
              return function (n) {
                return t.apply(this, arguments);
              };
            })();
          if (h) for (var v of l) (yield b(v), yield _.yield());
          else {
            var S = y();
            for (var R of l) (yield b(R), yield S());
          }
          var L = [],
            E = [];
          for (var k of C)
            try {
              var I = new Uint8Array(
                  o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                    new (o("WABinary").Binary)(k.identity).readBuffer(),
                  ),
                ),
                T = new Uint8Array(
                  o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                    new (o("WABinary").Binary)(k.skey.pubkey).readBuffer(),
                  ),
                ),
                D = new Uint8Array(
                  new (o("WABinary").Binary)(k.skey.signature).readBuffer(),
                ),
                x =
                  k.key != null
                    ? {
                        id: k.key.id,
                        publicKey: new Uint8Array(
                          o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                            new (o("WABinary").Binary)(
                              k.key.pubkey,
                            ).readBuffer(),
                          ),
                        ),
                      }
                    : null;
              (L.push({
                identity: I,
                oneTimeKey: x,
                regId: k.regId,
                signedKey: { id: k.skey.id, publicKey: T, signature: D },
              }),
                E.push(k));
            } catch (e) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundlesInWorker: key conversion failed for ",
                      ": ",
                      "",
                    ])),
                  k.wid,
                  e,
                )
                .sendLogs("createSignalSession-fail");
            }
          var $ = yield o("WAWebCryptoLibraryDbCallbacksApi")
            .getCryptoDbCallbacks()
            .getRegistrationInfo();
          if ($ == null)
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundlesInWorker: no registration info available",
                    ])),
                )
                .sendLogs("createSignalSession-fail"),
              { depletedPrekeyCount: f, processedPrekeyCount: a }
            );
          var P = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
            N = yield P.sendAndReceive(
              "prekeyProcessing",
              "createOutgoingSessionBatch",
              {
                regInfo: $,
                sessions: L,
                shouldYield: o("WAWebABProps").getABPropConfigValue(
                  "web_anr_async_msg_send_handler",
                ),
                useScheduler: o("WAWebABProps").getABPropConfigValue(
                  "wmi_worker_scheduler_web",
                ),
              },
            ),
            M = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks(),
            w =
              r === o("WAWebSessionScope").SessionScope.STATUS
                ? M.handleNewSessionStatusScope
                : M.handleNewSession,
            A = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = N[e],
                    n = E[e];
                  if (t.success)
                    try {
                      var r = t.session;
                      (yield w(
                        o("WAWebWidToJid").widToDeviceJid(n.wid),
                        r,
                        r.remote.pubKey,
                      ),
                        a++);
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
                        t.error,
                      )
                      .sendLogs("createSignalSession-fail");
                },
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          if (h)
            for (var F = 0; F < N.length; F++) (yield A(F), yield _.yield());
          else
            for (var O = y(), B = 0; B < N.length; B++) (yield A(B), yield O());
          return { depletedPrekeyCount: f, processedPrekeyCount: a };
        })),
        g.apply(this, arguments)
      );
    }
    var h = 100;
    function y() {
      var e = self.performance.now();
      return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        self.performance.now() - e > h &&
          (yield o("WAPromiseDelays").releaseToEventLoop(),
          (e = self.performance.now()));
      });
    }
    l.processKeyBundlesInWorker = f;
  },
  98,
);
