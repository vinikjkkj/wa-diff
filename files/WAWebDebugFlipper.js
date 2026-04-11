__d(
  "WAWebDebugFlipper",
  [
    "JSResourceForInteraction",
    "Promise",
    "ReconnectingWebSocket",
    "WAComms",
    "WALogger",
    "WASmaxMockRunner",
    "WASmaxMockRunnerBackend",
    "WASmaxMocksWasm",
    "WAWap",
    "WAWebBuildConstants",
    "WAWebNoop",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "WhatsApp Web";
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("js-flipper")
              .__setRef("WAWebDebugFlipper")
              .load(),
            t = e.flipperClient,
            a = !0;
          t.start(m, {
            websocketFactory: function (t) {
              var e = new (r("ReconnectingWebSocket"))(t, void 0, {
                reconnectInterval: 2e3,
                timeoutInterval: 1e4,
                automaticOpen: !1,
              });
              return (a && (e.open(!1), (a = !1)), e);
            },
            onError: r("WAWebNoop"),
            reconnectTimeout: 1e4,
          });
          var i = yield (d || (d = n("Promise"))).all([
              o("WAComms").getComms(),
              r("WASmaxMocksWasm")({
                instantiateWasm: function (t, n) {
                  return (
                    WebAssembly.instantiateStreaming(
                      self.fetch(
                        o("WAWebBuildConstants").WEB_PUBLIC_PATH +
                          "smax-mocks/smax_mocks_wasm.wasm",
                      ),
                      t,
                    )
                      .then(function (e) {
                        n(e.instance);
                      })
                      .catch(function (e) {
                        o("WALogger").ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[smax] ",
                              "",
                            ])),
                          e,
                        );
                      }),
                    {}
                  );
                },
              }),
            ]),
            l = i[0],
            s = i[1];
          if (l == null) throw r("err")("[smax] Failed to get comms");
          t.addPlugin(new h(l, s));
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("js-flipper")
              .__setRef("WAWebDebugFlipper")
              .load(),
            t = e.flipperClient;
          t.stop();
        })),
        g.apply(this, arguments)
      );
    }
    var h = (function () {
        function t(e, t) {
          ((this.backend = null),
            (this.loggerId = null),
            (this.comms = e),
            (this.wasmModule = t));
        }
        var a = t.prototype;
        return (
          (a.getId = function () {
            return "wa-smax";
          }),
          (a.onConnect = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = new (o("WASmaxMockRunnerBackend").SmaxMockRunnerBackend)(
                    this.wasmModule,
                    function (n, r) {
                      try {
                        t.send(n, JSON.parse(r));
                      } catch (t) {
                        o("WALogger").ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[smax] ",
                              "",
                            ])),
                          t,
                        );
                      }
                    },
                  ),
                  l = o("WASmaxMockRunner").SmaxAutomaticMockRunner.fromRunner(
                    i.wasmModule,
                    i.runnerPointer,
                  );
                l.addSyncdKey(new Uint8Array(32));
                var c = yield (d || (d = n("Promise"))).all([
                    o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.getRegistrationInfo(),
                    o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(
                      o("WAWebSignalKeyApi").generatePreKeyPair,
                    ),
                    o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
                  ]),
                  m = c[0],
                  p = c[1],
                  _ = c[2];
                if (
                  (yield o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.markKeyAsUploaded(p.keyId),
                  m == null || _ == null)
                )
                  throw r("err")("[smax] Registration info is null");
                (l.processPreKeyBundle("alice", {
                  registrationId: m.registrationId,
                  identity: new Uint8Array(m.identityKeyPair.pubKey),
                  preKeys: [
                    {
                      id: p.keyId,
                      data: new Uint8Array(p.keyPair.pubKey),
                      signature: null,
                    },
                  ],
                  signedPreKey: {
                    id: _.keyId,
                    data: new Uint8Array(_.keyPair.pubKey),
                    signature: new Uint8Array(_.signature),
                  },
                  privateIdentity: null,
                }),
                  l.subscribe(function (e) {
                    if (e.type === "Injection") {
                      var t = o("WAWap").decodeStanzaDebug(e.data),
                        r = (d || (d = n("Promise"))).resolve(
                          a.comms.handleStanza(
                            t,
                            a.comms.socketId,
                            e.data.byteLength,
                          ),
                        );
                      r.then(function (e) {
                        if (!(e === "CLOSE_SOCKET" || e === "NO_ACK"))
                          return a.comms.castStanza(e);
                      }).catch(function (e) {
                        o("WALogger").ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[smax] ",
                              "",
                            ])),
                          e,
                        );
                      });
                    }
                  }),
                  t.receive("rpc", function (e) {
                    return i.handleRpc(e);
                  }),
                  (this.backend = i),
                  (this.comms.config.handlers.onBeforeCastStanzaForE2E =
                    function (e) {
                      try {
                        var n = o("WAWap").encodeStanza(e);
                        return (l.match(n), []);
                      } catch (e) {
                        var a = r("getErrorSafe")(e);
                        (o("WALogger").WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[smax] ",
                              "",
                            ])),
                          a,
                        ),
                          t.send("log", { message: a.message }));
                      }
                    }),
                  (this.loggerId = o("WASmaxMockRunner")
                    .getSmaxLogEmitter(this.wasmModule)
                    .subscribe(function (e) {
                      t.send("log", { message: e });
                    })));
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.onDisconnect = function () {
            this.backend != null &&
              (this.backend.cleanup(), (this.backend = null));
            var e = this.loggerId;
            (e != null &&
              (o("WASmaxMockRunner")
                .getSmaxLogEmitter(this.wasmModule)
                .unsubscribe(e),
              (this.loggerId = null)),
              this.comms != null &&
                (this.comms.config.handlers.onBeforeCastStanzaForE2E = void 0));
          }),
          t
        );
      })(),
      y = { enableFlipperConnection: p, disableFlipperConnection: f };
    l.default = y;
  },
  98,
);
