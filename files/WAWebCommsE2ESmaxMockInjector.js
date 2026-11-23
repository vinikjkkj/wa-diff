__d(
  "WAWebCommsE2ESmaxMockInjector",
  [
    "invariant",
    "WAComms",
    "WACustomError",
    "WASmaxMockRunner",
    "WASmaxMocksWasm",
    "WAWap",
    "WAWebBuildConstants",
    "WAWebProcessKeyBundle",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 50,
      u = null,
      c = (function () {
        function t() {
          ((this.runner = null),
            (this.$1 = !1),
            (this.$2 = 0),
            (this.$3 = new Set()),
            (this.$4 = 0),
            (this.$5 = []),
            (this.$6 = 0));
        }
        var n = t.prototype;
        return (
          (n.init = async function (t) {
            var e = this,
              n = t.mockFilePaths,
              a = n === void 0 ? [] : n,
              i = t.mockContents,
              l = i === void 0 ? {} : i,
              u = t.variables,
              c = u === void 0 ? {} : u,
              m = t.responseMap,
              p = m === void 0 ? {} : m,
              _ = t.deviceJid,
              h = _ === void 0 ? "16005551839:1@s.whatsapp.net" : _,
              y = t.syncdKey,
              C = y === void 0 ? new Uint8Array(32) : y,
              b = t.platformIdentityName,
              v = b === void 0 ? "alice" : b,
              S = t.contacts,
              R = S === void 0 ? [] : S,
              L = o("WAComms").getComms();
            (L instanceof o("WAComms").Comms || s(0, 191555),
              a.length > 0 || Object.keys(l).length > 0 || s(0, 167687));
            var E = await Promise.all([
                g(a, l),
                f(),
                o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
                o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(
                  o("WAWebSignalKeyApi").generatePreKeyPair,
                ),
                o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
              ]),
              k = E[0],
              I = E[1],
              T = E[2],
              D = E[3],
              x = E[4];
            if (T == null || x == null)
              throw r("err")("Missing platform prekey information");
            var $ = new (o("WASmaxMockRunner").SmaxAutomaticMockRunnerBuilder)(
              I,
              Object.keys(k),
              function (e) {
                return k[e];
              },
            );
            $.addDeviceJid(h);
            for (var P of Object.entries(p)) {
              var N = P[0],
                M = P[1];
              $.addResponseMapping(N, M);
            }
            var w = $.build(),
              A = this.runner,
              F = { hook: null };
            return (
              (this.runner = w),
              await d(
                async function () {
                  (e.setVariables(c),
                    w.addSyncdKey(C),
                    w.processPreKeyBundle(v, {
                      registrationId: T.registrationId,
                      identity: new Uint8Array(T.identityKeyPair.pubKey),
                      preKeys: [
                        {
                          id: D.keyId,
                          data: new Uint8Array(D.keyPair.pubKey),
                          signature: null,
                        },
                      ],
                      signedPreKey: {
                        id: x.keyId,
                        data: new Uint8Array(x.keyPair.pubKey),
                        signature: new Uint8Array(x.signature),
                      },
                      privateIdentity: null,
                    }),
                    await Promise.all([
                      o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
                        D.keyId,
                      ),
                      e.$7(R),
                    ]));
                  var t = function (n) {
                    try {
                      var t = o("WAWap").encodeStanza(n);
                      return (e.$8(w.match(t)), []);
                    } catch (t) {
                      e.$9("onBeforeCastStanza", t);
                    }
                  };
                  ((F.hook = {
                    comms: L,
                    hook: t,
                    previousHook: L.config.handlers.onBeforeCastStanza,
                  }),
                    L.setOnBeforeCastStanza(t));
                  var n = e.$6;
                  w.subscribe(function (t) {
                    if ((e.$8([t]), t.type === "Injection")) {
                      var r = o("WAWap").decodeStanzaDebug(t.data);
                      e.$2++;
                      var a = Promise.resolve(
                        L.handleStanza(r, L.socketId, t.data.byteLength),
                      )
                        .then(function (t) {
                          if (
                            !(t === "CLOSE_SOCKET" || t === "NO_ACK") &&
                            !(n !== e.$6 || e.runner == null)
                          )
                            return L.castStanza(t);
                        })
                        .catch(function (t) {
                          n === e.$6 && (e.$4++, e.$9("handleStanza", t));
                        })
                        .then(function () {
                          e.$3.delete(a);
                        });
                      e.$3.add(a);
                    }
                  });
                },
                function () {
                  return e.$10(w, A, F.hook);
                },
              ),
              this
            );
          }),
          (n.$10 = function (t, n, r) {
            var e = [];
            try {
              (p(e, function () {
                return m(r);
              }),
                p(e, function () {
                  return t.cleanup();
                }));
            } finally {
              this.runner === t && (this.runner = n);
            }
            return e;
          }),
          (n.$9 = function (t, n) {
            var e = n instanceof Error ? n.message : String(n);
            this.$5.push(t + ": " + e);
          }),
          (n.$8 = function (t) {
            for (var e of t) e.type === "SequenceCompleted" && (this.$1 = !0);
          }),
          (n.receiveServerStanzaXml = async function (t) {
            var e = o("WAComms").getComms();
            e != null || s(0, 164682);
            var n = await f(),
              a = o("WASmaxMockRunner").XmlToWAP(n, t),
              i = o("WAWap").decodeStanzaDebug(a);
            if (y(i))
              throw r("err")(
                "cannot inject an E2EE stanza (<enc>) from XML: it needs a real Signal session, so it must go through `runMock`. Via the CLI, `receive-stanza --xml` routes <enc> there automatically -- reaching this from the CLI means the payload was not recognised as E2EE",
              );
            var l = await e.handleStanza(i, e.socketId, a.byteLength);
            if (l === "CLOSE_SOCKET")
              throw r("err")(
                "injected stanza caused the client to tear down its socket",
              );
            return l === "NO_ACK" ? null : l.tag;
          }),
          (n.start = function (t) {
            try {
              this.$11(t);
            } catch (e) {
              this.$9("start", e);
            }
          }),
          (n.runSequence = async function (t, n) {
            (await Promise.all(this.$3),
              (this.$1 = !1),
              (this.$2 = 0),
              this.$3.clear(),
              (this.$4 = 0),
              (this.$5 = []));
            var e = { sequence: t, diagnostics: this.$5 },
              r = Date.now() + n;
            try {
              this.$11(t);
              var o = await this.$12(r);
              return o === "delivered"
                ? babelHelpers.extends({ ok: !0 }, e)
                : babelHelpers.extends({ ok: !1 }, e, {
                    error: this.$13(o, t, n),
                  });
            } catch (t) {
              return babelHelpers.extends({ ok: !1 }, e, {
                error: t instanceof Error ? t.message : String(t),
              });
            }
          }),
          (n.$11 = function (t) {
            var e = o("WAComms").getComms(),
              n = this.runner;
            (e != null || s(0, 72330),
              n != null || s(0, 72331),
              this.$8(n.start(t)));
          }),
          (n.runMock = async function (t, n, r) {
            var e, a;
            (this.$6++,
              (this.$1 = !1),
              (this.$2 = 0),
              this.$3.clear(),
              (this.$4 = 0),
              (this.$5 = []));
            var i = {
              mocks: [].concat(
                (e = t.mockFilePaths) != null ? e : [],
                Object.keys((a = t.mockContents) != null ? a : {}),
              ),
              sequence: n,
              diagnostics: this.$5,
            };
            if (o("WAComms").getComms() == null)
              return babelHelpers.extends({ ok: !1 }, i, {
                error:
                  "getComms() returned null; web client comms not initialized (log in first)",
              });
            var l = Date.now() + r;
            try {
              (this.runner != null && this.end(!0),
                await this.init(t),
                this.$11(n));
              var s = await this.$12(l);
              return s === "delivered"
                ? babelHelpers.extends({ ok: !0 }, i)
                : babelHelpers.extends({ ok: !1 }, i, {
                    error: this.$13(s, n, r),
                  });
            } catch (e) {
              return babelHelpers.extends({ ok: !1 }, i, {
                error: e instanceof Error ? e.message : String(e),
              });
            } finally {
              if (this.runner != null)
                try {
                  this.end(!0);
                } catch (e) {
                  this.$9("end", e);
                }
            }
          }),
          (n.$12 = function (n) {
            var t = this,
              r = function () {
                return t.$1 && t.$3.size === 0
                  ? t.$2 === 0
                    ? "no-injections"
                    : t.$4 > 0
                      ? "delivery-failed"
                      : "delivered"
                  : Date.now() >= n
                    ? "timeout"
                    : null;
              };
            return new Promise(function (t) {
              var n = r();
              if (n != null) {
                t(n);
                return;
              }
              var o = window.setInterval(function () {
                var e = r();
                e != null && (window.clearInterval(o), t(e));
              }, e);
            });
          }),
          (n.$13 = function (t, n, r) {
            return t === "no-injections"
              ? "sequence '" +
                  n +
                  "' completed without injecting a stanza; check the sequence name and that its <request> is an inbound stanza"
              : t === "delivery-failed"
                ? "sequence '" +
                  n +
                  "' injected " +
                  this.$2 +
                  " stanza(s) but " +
                  this.$4 +
                  " failed in the client's receive pipeline; see diagnostics"
                : "sequence '" +
                  n +
                  "' did not complete within " +
                  r +
                  "ms of setup + delivery (completed=" +
                  String(this.$1) +
                  ", injected=" +
                  this.$2 +
                  ", in flight=" +
                  this.$3.size +
                  ")";
          }),
          (n.setVariables = function (t) {
            var e = this.runner;
            e != null || s(0, 72332);
            for (var n of Object.entries(t)) {
              var r = n[0],
                o = n[1];
              if (typeof o == "number") {
                var a = Math.trunc(o);
                (a !== o && "" + r + o, e.setVariable(r, String(a)));
              } else e.setVariable(r, o);
            }
          }),
          (n.end = function (t) {
            t === void 0 && (t = !1);
            var e = this.runner;
            e != null || s(0, 72333);
            var n = [];
            try {
              (p(n, function () {
                t || e.complete();
              }),
                p(n, function () {
                  var e;
                  return (e = o("WAComms").getComms()) == null
                    ? void 0
                    : e.setOnBeforeCastStanza(void 0);
                }),
                p(n, function () {
                  return e.cleanup();
                }));
            } finally {
              this.runner = null;
            }
            _(n);
          }),
          (n.$7 = async function (t) {
            var e = this.runner;
            (e != null || s(0, 72331),
              await Promise.all(
                t.map(async function (t) {
                  var n = t.jid,
                    a = t.name,
                    i = e.getPreKeyBundleForIdentity(a, 1),
                    l = i.identity,
                    s = i.preKeys,
                    u = i.registrationId,
                    c = i.signedPreKey;
                  try {
                    await o("WAWebProcessKeyBundle").processKeyBundles([
                      {
                        deviceIdentity: null,
                        identity: l,
                        key: { id: s[0].id, pubkey: s[0].data },
                        regId: u,
                        skey: {
                          id: c.id,
                          pubkey: c.data,
                          signature: r("nullthrows")(c.signature),
                        },
                        wid: o("WAWebWidFactory").createDeviceWidOrThrow(n),
                      },
                    ]);
                  } catch (e) {}
                }),
              ));
          }),
          t
        );
      })();
    async function d(e, t) {
      try {
        await e();
      } catch (e) {
        var n = [e];
        (p(n, function () {
          n.push.apply(n, t());
        }),
          _(n));
      }
    }
    function m(e) {
      e != null &&
        e.comms.config.handlers.onBeforeCastStanza === e.hook &&
        e.comms.setOnBeforeCastStanza(e.previousHook);
    }
    function p(e, t) {
      try {
        t();
      } catch (t) {
        e.push(t);
      }
    }
    function _(e) {
      if (e.length === 1) throw e[0];
      if (e.length > 1) {
        var t = new (o("WACustomError").AggregateError)(
          e.map(function (e) {
            return r("getErrorSafe")(e);
          }),
          "SMAX completion and cleanup failed",
        );
        throw (t.stack, t);
      }
    }
    async function f() {
      return (
        u != null ||
          ((u = await r("WASmaxMocksWasm")({
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
                  .catch(function (e) {}),
                {}
              );
            },
          })),
          o("WASmaxMockRunner")
            .getSmaxLogEmitter(u)
            .subscribe(function (e) {})),
        u
      );
    }
    async function g(e, t) {
      for (
        var n = await Promise.all(e.map(h)), r = {}, o = 0;
        o < e.length;
        ++o
      )
        r[e[o]] = n[o];
      return babelHelpers.extends({}, r, t);
    }
    async function h(e) {
      e.endsWith(".xml") || s(0, 72334);
      var t = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "smax-mocks/" + e,
        n = await self.fetch(t);
      if (!n.ok)
        throw r("err")(
          `Cannot find mock in path:
` + t,
        );
      return n.text();
    }
    function y(e) {
      return (
        Array.isArray(e.content) &&
        e.content.some(function (e) {
          return (e == null ? void 0 : e.tag) === "enc";
        })
      );
    }
    var C = new c(),
      b = C;
    l.default = b;
  },
  98,
);
