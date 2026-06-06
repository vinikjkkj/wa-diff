__d(
  "WAWebDebugFlipper",
  [
    "JSResourceForInteraction",
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
    async function p() {
      var t = await r("JSResourceForInteraction")("js-flipper")
          .__setRef("WAWebDebugFlipper")
          .load(),
        n = t.flipperClient,
        a = !0;
      n.start(m, {
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
      var i = await Promise.all([
          o("WAComms").getComms(),
          r("WASmaxMocksWasm")({
            instantiateWasm: function (n, a) {
              return (
                WebAssembly.instantiateStreaming(
                  self.fetch(
                    o("WAWebBuildConstants").WEB_PUBLIC_PATH +
                      "smax-mocks/smax_mocks_wasm.wasm",
                  ),
                  n,
                )
                  .then(function (e) {
                    a(e.instance);
                  })
                  .catch(function (t) {
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[smax] ",
                          "",
                        ])),
                      r("getErrorSafe")(t),
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
      n.addPlugin(new f(l, s));
    }
    async function _() {
      var e = await r("JSResourceForInteraction")("js-flipper")
          .__setRef("WAWebDebugFlipper")
          .load(),
        t = e.flipperClient;
      t.stop();
    }
    var f = (function () {
        function e(e, t) {
          ((this.backend = null),
            (this.loggerId = null),
            (this.comms = e),
            (this.wasmModule = t));
        }
        var t = e.prototype;
        return (
          (t.getId = function () {
            return "wa-smax";
          }),
          (t.onConnect = async function (t) {
            var e = this,
              n = new (o("WASmaxMockRunnerBackend").SmaxMockRunnerBackend)(
                this.wasmModule,
                function (e, n) {
                  try {
                    t.send(e, JSON.parse(n));
                  } catch (e) {
                    o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[smax] ",
                          "",
                        ])),
                      e,
                    );
                  }
                },
              ),
              a = o("WASmaxMockRunner").SmaxAutomaticMockRunner.fromRunner(
                n.wasmModule,
                n.runnerPointer,
              );
            a.addSyncdKey(new Uint8Array(32));
            var i = await Promise.all([
                o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
                o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(
                  o("WAWebSignalKeyApi").generatePreKeyPair,
                ),
                o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
              ]),
              l = i[0],
              m = i[1],
              p = i[2];
            (l != null && p != null
              ? (await o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
                  m.keyId,
                ),
                a.processPreKeyBundle("alice", {
                  registrationId: l.registrationId,
                  identity: new Uint8Array(l.identityKeyPair.pubKey),
                  preKeys: [
                    {
                      id: m.keyId,
                      data: new Uint8Array(m.keyPair.pubKey),
                      signature: null,
                    },
                  ],
                  signedPreKey: {
                    id: p.keyId,
                    data: new Uint8Array(p.keyPair.pubKey),
                    signature: new Uint8Array(p.signature),
                  },
                  privateIdentity: null,
                }))
              : (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[smax] no signal keys - pre-pairing mode (plaintext only)",
                    ])),
                ),
                t.send("log", {
                  message:
                    "Signal keys not available. Running in pre-pairing mode: plaintext stanza injection works, but encrypted message mocks require pairing first.",
                })),
              a.subscribe(function (t) {
                if (t.type === "Injection") {
                  var n = o("WAWap").decodeStanzaDebug(t.data),
                    a = Promise.resolve(
                      e.comms.handleStanza(
                        n,
                        e.comms.socketId,
                        t.data.byteLength,
                      ),
                    );
                  a.then(function (t) {
                    if (!(t === "CLOSE_SOCKET" || t === "NO_ACK"))
                      return e.comms.castStanza(t);
                  }).catch(function (e) {
                    o("WALogger").ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[smax] ",
                          "",
                        ])),
                      r("getErrorSafe")(e),
                    );
                  });
                }
              }),
              t.receive("rpc", function (e) {
                return n.handleRpc(e);
              }),
              (this.backend = n),
              (this.comms.config.handlers.onBeforeCastStanzaForE2E = function (
                e,
              ) {
                try {
                  var n = o("WAWap").encodeStanza(e);
                  return (a.match(n), []);
                } catch (e) {
                  var i = r("getErrorSafe")(e);
                  (o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[smax] ",
                        "",
                      ])),
                    i,
                  ),
                    t.send("log", { message: i.message }));
                }
              }),
              (this.loggerId = o("WASmaxMockRunner")
                .getSmaxLogEmitter(this.wasmModule)
                .subscribe(function (e) {
                  t.send("log", { message: e });
                })));
          }),
          (t.onDisconnect = function () {
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
          e
        );
      })(),
      g = { enableFlipperConnection: p, disableFlipperConnection: _ };
    l.default = g;
  },
  98,
);
