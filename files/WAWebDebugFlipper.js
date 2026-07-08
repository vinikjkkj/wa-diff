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
      m,
      p = "WhatsApp Web";
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("js-flipper")
              .__setRef("WAWebDebugFlipper")
              .load(),
            t = e.flipperClient,
            a = !0;
          t.start(p, {
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
          var i = yield (m || (m = n("Promise"))).all([
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
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[smax] ",
                              "",
                            ])),
                          r("getErrorSafe")(e),
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
          t.addPlugin(new y(l, s));
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("js-flipper")
              .__setRef("WAWebDebugFlipper")
              .load(),
            t = e.flipperClient;
          t.stop();
        })),
        h.apply(this, arguments)
      );
    }
    var y = (function () {
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
                var d = yield (m || (m = n("Promise"))).all([
                    o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.getRegistrationInfo(),
                    o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(
                      o("WAWebSignalKeyApi").generatePreKeyPair,
                    ),
                    o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
                  ]),
                  p = d[0],
                  _ = d[1],
                  f = d[2];
                (p != null && f != null
                  ? (yield o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.markKeyAsUploaded(_.keyId),
                    l.processPreKeyBundle("alice", {
                      registrationId: p.registrationId,
                      identity: new Uint8Array(p.identityKeyPair.pubKey),
                      preKeys: [
                        {
                          id: _.keyId,
                          data: new Uint8Array(_.keyPair.pubKey),
                          signature: null,
                        },
                      ],
                      signedPreKey: {
                        id: f.keyId,
                        data: new Uint8Array(f.keyPair.pubKey),
                        signature: new Uint8Array(f.signature),
                      },
                      privateIdentity: null,
                    }))
                  : (o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[smax] no signal keys - pre-pairing mode (plaintext only)",
                        ])),
                    ),
                    t.send("log", {
                      message:
                        "Signal keys not available. Running in pre-pairing mode: plaintext stanza injection works, but encrypted message mocks require pairing first.",
                    })),
                  l.subscribe(function (e) {
                    if (e.type === "Injection") {
                      var t = o("WAWap").decodeStanzaDebug(e.data),
                        i = (m || (m = n("Promise"))).resolve(
                          a.comms.handleStanza(
                            t,
                            a.comms.socketId,
                            e.data.byteLength,
                          ),
                        );
                      i.then(function (e) {
                        if (!(e === "CLOSE_SOCKET" || e === "NO_ACK"))
                          return a.comms.castStanza(e);
                      }).catch(function (e) {
                        o("WALogger").ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[smax] ",
                              "",
                            ])),
                          r("getErrorSafe")(e),
                        );
                      });
                    }
                  }),
                  t.receive("rpc", function (e) {
                    return i.handleRpc(e);
                  }),
                  (this.backend = i),
                  this.comms.setOnBeforeCastStanzaForE2E(function (e) {
                    try {
                      var n = o("WAWap").encodeStanza(e);
                      return (l.match(n), []);
                    } catch (e) {
                      var a = r("getErrorSafe")(e);
                      (o("WALogger").WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
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
                this.comms.setOnBeforeCastStanzaForE2E(void 0));
          }),
          t
        );
      })(),
      C = { enableFlipperConnection: _, disableFlipperConnection: g };
    l.default = C;
  },
  98,
);
