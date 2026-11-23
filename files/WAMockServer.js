__d(
  "WAMockServer",
  [
    "WAComms",
    "WACryptoManager",
    "WAFakeSocket",
    "WAGetKeysForUpload",
    "WAGlobals",
    "WAResolvable",
    "WASmaxMockRunner",
    "WASmaxMocksWasm",
    "WATagsLogger",
    "WAWap",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      y,
      C,
      b,
      v,
      S,
      R = null,
      L = o("WATagsLogger").TAGS(["WAMockServer"]);
    function E() {
      return (R == null && (R = new k()), R);
    }
    var k = (function () {
      function t() {
        ((this.runner = null),
          (this.$1 = new Map()),
          (this.$2 = new (o("WAResolvable").Resolvable)()));
      }
      var n = t.prototype;
      return (
        (n.setVariables = function (n) {
          if (this.runner == null)
            throw r("err")(
              "SMAX runner should be initialized before calling setVariables",
            );
          for (var t of Object.entries(n)) {
            var o = t[0],
              a = t[1];
            if (typeof a == "number") {
              var i,
                l = Math.trunc(a);
              (l !== a &&
                L.DEV(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Cannot pass float values for variables to SMAX for ",
                      "=",
                      "",
                    ])),
                  o,
                  a,
                ),
                (i = this.runner) == null || i.setVariable(o, String(l)));
            } else {
              var s;
              (s = this.runner) == null || s.setVariable(o, a);
            }
          }
        }),
        (n.waitForInit = function () {
          return this.$2.promise;
        }),
        (n.init = async function (t) {
          var e,
            n = this,
            a = t.currentUserAlias,
            i = a === void 0 ? "alice" : a,
            l = t.mocks,
            p = t.wasmUrl,
            _ = t.variables,
            f = _ === void 0 ? {} : _,
            g = Date.now();
          L.LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Mock Server is ready to start initialization: ",
                "",
              ])),
            Date.now() - g,
          );
          var h = await Promise.all([I(p), T(l), D()]),
            y = h[0],
            C = h[1],
            b = h[2];
          L.LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Mock Server resources are loaded: ",
                "",
              ])),
            Date.now() - g,
          );
          var v = new (o("WASmaxMockRunner").SmaxAutomaticMockRunnerBuilder)(
            y,
            Array.from(l.keys()),
            function (e) {
              var t;
              return (t = C.get(e)) != null ? t : "";
            },
          );
          ((this.runner = v.build()),
            this.setVariables(f),
            (e = this.runner) == null || e.processPreKeyBundle(i, b));
          var S = o("WAComms").getComms();
          if (S == null)
            return Promise.reject(
              "Comms should be initialized before the SMAX mock is loaded",
            );
          (S.setSocket(new (o("WAFakeSocket").FakeSocket)()),
            S.setOnBeforeCastStanza(function (e) {
              try {
                var t,
                  a,
                  i = o("WAWap").encodeStanza(e),
                  l =
                    (t = (a = n.runner) == null ? void 0 : a.match(i)) != null
                      ? t
                      : [],
                  s = [];
                for (var u of l)
                  if (u.type === "Injection")
                    s.push(o("WAWap").decodeStanzaDebug(u.data));
                  else if (u.type === "SequenceCompleted") {
                    var m = u.name,
                      p = n.$1.get(m);
                    if (p != null) (p.resolve(), n.$1.delete(m));
                    else {
                      var _ = new (o("WAResolvable").Resolvable)();
                      (_.resolve(), n.$1.set(m, _));
                    }
                    L.LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Sequence/Mock ",
                          " is complete",
                        ])),
                      m,
                    );
                  }
                return s;
              } catch (e) {
                var f = r("getErrorSafe")(e);
                L.DEV(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Error on onBeforeCastStanzaForE2E: ",
                      "",
                    ])),
                  f.toString(),
                );
              }
            }),
            await S.startHandlingRequests(),
            L.LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Mock Server is ready: ",
                  "",
                ])),
              Date.now() - g,
            ),
            this.$2.resolve());
        }),
        (n.runMock = function (t) {
          var e = t.mockName,
            n = t.variables,
            r = n === void 0 ? {} : n,
            a = this.$1.get(e);
          if (a != null) return (this.$1.delete(e), a.promise);
          this.setVariables(r);
          var i = this.runner,
            l = o("WAComms").getComms();
          if (l == null) return Promise.reject("Comms is not inititalized");
          if (i == null) return Promise.reject("UMR is not inititalized");
          var s = new (o("WAResolvable").Resolvable)(),
            u = i.start(e);
          this.$1.set(e, s);
          for (var c of u)
            if (c.type === "Injection") {
              var d = o("WAWap").decodeStanzaDebug(c.data);
              (L.LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Injecting ",
                    " socketId: ",
                    "",
                  ])),
                d.tag,
                l.socketId,
              ),
                l.handleStanza(d, l.socketId, c.data.byteLength));
            } else
              c.type === "SequenceCompleted" &&
                (this.$1.delete(e),
                s.resolve(),
                L.LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Sequence/Mock ",
                      " is complete",
                    ])),
                  e,
                ));
          return s.promise;
        }),
        t
      );
    })();
    async function I(e) {
      var t = Date.now(),
        n = await r("WASmaxMocksWasm")({
          instantiateWasm: function (n, r) {
            return (
              WebAssembly.instantiateStreaming(self.fetch(e), n)
                .then(function (e) {
                  r(e.instance);
                })
                .catch(function (e) {
                  L.DEV(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Error on downloading UMR Wasm: ",
                        "",
                      ])),
                    String(e),
                  );
                }),
              {}
            );
          },
        });
      return (
        o("WASmaxMockRunner")
          .getSmaxLogEmitter(n)
          .subscribe(function (e) {
            L.DEV(
              g || (g = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              e,
            );
          }),
        L.LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "UMR is ready: ",
              "",
            ])),
          Date.now() - t,
        ),
        n
      );
    }
    async function T(e) {
      var t = Date.now(),
        n = new Map(
          await Promise.all(
            Array.from(e.keys()).map(async function (t) {
              var n,
                o = (n = e.get(t)) != null ? n : "",
                a = await self.fetch(o);
              if (!a.ok)
                throw r("err")(
                  `Cannot find mock in path:
` + o,
                );
              return [t, await a.text()];
            }),
          ),
        );
      return (
        L.LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              " Mocks are ready: ",
              "",
            ])),
          Date.now() - t,
        ),
        n
      );
    }
    function D() {
      var e = Date.now();
      return (
        L.LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "Start preparing prekey bundle",
            ])),
        ),
        o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            async function (t) {
              var n = t.cryptoManager;
              L.LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "Prekey bundle is enqueued: ",
                    "",
                  ])),
                Date.now() - e,
              );
              var a = await o("WACryptoManager").generatePreKeys(n, 1);
              if (!a.success) {
                var i, l;
                throw r("err")(
                  "Cannot generate keys: " +
                    a.error +
                    ", " +
                    ((i = (l = a.payload) == null ? void 0 : l.toString()) !=
                    null
                      ? i
                      : ""),
                );
              }
              L.LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "PreKeys are generated: ",
                    "",
                  ])),
                Date.now() - e,
              );
              var s = await o("WAGetKeysForUpload").getKeysForUpload(
                n,
                a.value,
              );
              if (!s.success) {
                var u, c;
                throw r("err")(
                  "Cannot load crypto keys: " +
                    s.error +
                    ", " +
                    ((u = (c = s.payload) == null ? void 0 : c.toString()) !=
                    null
                      ? u
                      : ""),
                );
              }
              L.LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "PreKey bundle is ready: ",
                    "",
                  ])),
                Date.now() - e,
              );
              var d = s.value.preKeys[0];
              return {
                identity: new Uint8Array(n.regInfo.staticKeyPair.publicKey),
                preKeys: [
                  {
                    data: new Uint8Array(d.keyPair.publicKey),
                    id: d.id,
                    signature: null,
                  },
                ],
                privateIdentity: null,
                registrationId: n.regInfo.regId,
                signedPreKey: {
                  data: new Uint8Array(s.value.signedPreKey.keyPair.publicKey),
                  id: s.value.signedPreKey.id,
                  signature: new Uint8Array(s.value.signedPreKey.signature),
                },
              };
            },
            { afterInit: !1, flush: !0, operationType: "generate_prekeys" },
          )
      );
    }
    l.default = E;
  },
  98,
);
