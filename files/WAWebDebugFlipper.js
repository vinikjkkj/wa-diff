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
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "WhatsApp Web";
    async function p() {
      r("vulture")("6jqLm3vKBV1Ni81RewBeNys-Xio=");
      var t = await r("JSResourceForInteraction")("js-flipper")
          .__setRef("WAWebDebugFlipper")
          .load(),
        n = t.flipperClient,
        a = !0;
      n.start(m, {
        websocketFactory: function (t) {
          r("vulture")("fgzXzsMHMWjZ3kD9-1zBpcc7UWU=");
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
                r("vulture")("rzVu4j50MIMZRNFcTTZrubnf0tc="),
                WebAssembly.instantiateStreaming(
                  self.fetch(
                    o("WAWebBuildConstants").WEB_PUBLIC_PATH +
                      "smax-mocks/smax_mocks_wasm.wasm",
                  ),
                  n,
                )
                  .then(function (e) {
                    (r("vulture")("GTrOXijM6yHP7rcw8gTflqWxMSk="),
                      a(e.instance));
                  })
                  .catch(function (t) {
                    (r("vulture")("bGSO75_Z9uQSTQL5QAWmlpF3fSM="),
                      o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[smax] ",
                            "",
                          ])),
                        r("getErrorSafe")(t),
                      ));
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
      r("vulture")("FoWYkOACILOrQLVdSX1DAMNedqo=");
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
            r("vulture")("bRVzcgWY_iUT53XV4RfzzljdQ7I="),
            (this.comms = e),
            (this.wasmModule = t));
        }
        var t = e.prototype;
        return (
          (t.getId = function () {
            return (r("vulture")("IsAIkFaGdn7BO4sJJzTkXWS9k5o="), "wa-smax");
          }),
          (t.onConnect = async function (t) {
            var e = this;
            r("vulture")("QUCnRFWuxXQlilbj8bjwqswEFak=");
            var n = new (o("WASmaxMockRunnerBackend").SmaxMockRunnerBackend)(
                this.wasmModule,
                function (e, n) {
                  r("vulture")("XIaDiH18HsEDmdX0ZO-QDb8GgPo=");
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
                if (
                  (r("vulture")("qSTpJJF26QVBybR3mn0x2zP4IMQ="),
                  t.type === "Injection")
                ) {
                  var n = o("WAWap").decodeStanzaDebug(t.data),
                    a = Promise.resolve(
                      e.comms.handleStanza(
                        n,
                        e.comms.socketId,
                        t.data.byteLength,
                      ),
                    );
                  a.then(function (t) {
                    if (
                      (r("vulture")("d6jrsjCB2BED81TMloAg7I00spI="),
                      !(t === "CLOSE_SOCKET" || t === "NO_ACK"))
                    )
                      return e.comms.castStanza(t);
                  }).catch(function (e) {
                    (r("vulture")("dgVRW0GAY8NWOKTkOzou3hWLL0s="),
                      o("WALogger").ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[smax] ",
                            "",
                          ])),
                        r("getErrorSafe")(e),
                      ));
                  });
                }
              }),
              t.receive("rpc", function (e) {
                return (
                  r("vulture")("-P9TIjMumcN6ZhWMCmtzauJk9PI="),
                  n.handleRpc(e)
                );
              }),
              (this.backend = n),
              this.comms.setOnBeforeCastStanza(function (e) {
                r("vulture")("pdYOBoInFMT2qtF5b_JiP9wjw0k=");
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
                  (r("vulture")("Wwu1_fwXtBtE-BGNBDOvgcdKcxU="),
                    t.send("log", { message: e }));
                })));
          }),
          (t.onDisconnect = function () {
            (r("vulture")("z6YQAO_rqbnQW3-ToFvYIOqSeOA="),
              this.backend != null &&
                (this.backend.cleanup(), (this.backend = null)));
            var e = this.loggerId;
            (e != null &&
              (o("WASmaxMockRunner")
                .getSmaxLogEmitter(this.wasmModule)
                .unsubscribe(e),
              (this.loggerId = null)),
              this.comms != null && this.comms.setOnBeforeCastStanza(void 0));
          }),
          e
        );
      })(),
      g = { enableFlipperConnection: p, disableFlipperConnection: _ };
    l.default = g;
  },
  98,
);
