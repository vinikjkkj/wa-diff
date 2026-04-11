__d(
  "WASmaxMockRunner",
  ["$InternalEnum", "WASmaxMockRunnerUtils", "WASmaxWasmMemoryManagement"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        Timestamp: 0,
        TimestampSecondsAgo: 1,
        RandomId: 2,
        UserJID: 3,
        DeviceJID: 4,
        PrimaryDeviceJID: 5,
        UserPhone: 6,
        RegistrationId: 7,
        IdentityKeyPublic: 8,
        IdentityKeyPrivate: 9,
        PreKeyPublic: 10,
        PreKeyPrivate: 11,
        SignedPreKeyPublic: 12,
        SignedPreKeyPrivate: 13,
        SignedPreKeySignature: 14,
        BigEndian: 15,
      }),
      s = (function () {
        function e(e, t, n, r) {
          var a = this;
          ((this.wasmModule = o(
            "WASmaxWasmMemoryManagement",
          ).enableWasmMemoryManagement(e)),
            this.wasmModule.enterStackFrame(),
            (this.builderPointer = this.wasmModule.ccall(r, "number", [], [])));
          var i = this._createFileRepo(n);
          o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (e) {
            a.wasmModule.ccall(
              "SmaxRunnerBuilderAddFileRepo",
              null,
              ["number", "number", "number"],
              [a.builderPointer, i, e],
            );
          });
          var l = function (t) {
            o("WASmaxMockRunnerUtils").withError(a.wasmModule, function (e) {
              a.wasmModule.ccall(
                "SmaxRunnerBuilderAddMockFile",
                null,
                ["number", "string", "number"],
                [a.builderPointer, t, e],
              );
            });
          };
          for (var s of t) l(s);
        }
        var t = e.prototype;
        return (
          (t._createFileRepo = function (t) {
            var e = this,
              n = function (r, a, i, l) {
                var n = e.wasmModule.UTF8ToString(a);
                try {
                  var s = t(n),
                    u = new TextEncoder().encode(s),
                    c = o("WASmaxWasmMemoryManagement").unsafe(
                      e.wasmModule,
                      function (t) {
                        return o(
                          "WASmaxMockRunnerUtils",
                        ).copyByteArrayToWasmMemory(e.wasmModule, u);
                      },
                    );
                  return (
                    e.wasmModule.setValue(l, u.length, "*"),
                    e.wasmModule.setValue(i, c, "*"),
                    0
                  );
                } catch (t) {
                  (e.wasmModule.setValue(l, 0, "*"),
                    e.wasmModule.setValue(i, 0, "*"));
                }
              },
              r = function (n, r, a) {
                o("WASmaxWasmMemoryManagement").unsafe(
                  e.wasmModule,
                  function (e) {
                    e._free(r);
                  },
                );
              },
              a = this.wasmModule.addFunction(n, "iiiii"),
              i = this.wasmModule.addFunction(r, "viii"),
              l = this.wasmModule._malloc(16);
            return (
              this.wasmModule.setValue(l, 0, "*"),
              this.wasmModule.setValue(l + 4, a, "*"),
              this.wasmModule.setValue(l + 8, i, "*"),
              this.wasmModule.setValue(l + 12, 0, "*"),
              l
            );
          }),
          (t.setDictionaryVersion = function (t) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (n) {
              e.wasmModule.ccall(
                "SmaxRunnerBuilderSetDictionaryVersion",
                null,
                ["number", "number", "number"],
                [e.builderPointer, t, n],
              );
            });
          }),
          (t.addVariable = function (t, n) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (r) {
              e.wasmModule.ccall(
                "SmaxRunnerBuilderAddVariable",
                null,
                ["number", "string", "string", "number"],
                [e.builderPointer, t, n, r],
              );
            });
          }),
          (t.addResponseMapping = function (t, n) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (r) {
              e.wasmModule.ccall(
                "SmaxRunnerBuilderAddResponseMapping",
                null,
                ["number", "string", "string", "number"],
                [e.builderPointer, t, n, r],
              );
            });
          }),
          (t.addDeviceJid = function (t) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (n) {
              e.wasmModule.ccall(
                "SmaxRunnerBuilderAddDeviceJid",
                null,
                ["number", "string", "number"],
                [e.builderPointer, t, n],
              );
            });
          }),
          (t.addDefaultIdentityName = function (t) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (n) {
              e.wasmModule.ccall(
                "SmaxRunnerBuilderAddDefaultIdentityName",
                null,
                ["number", "string", "number"],
                [e.builderPointer, t, n],
              );
            });
          }),
          e
        );
      })(),
      u = (function () {
        function e(e, t) {
          (t === void 0 && (t = 0),
            (this.wasmModule = e),
            (this.runnerPointer = t));
        }
        var t = e.prototype;
        return (
          (t.addSyncdKey = function (t) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (n) {
              var r = o("WASmaxMockRunnerUtils").copyByteArrayToWasmMemory(
                e.wasmModule,
                t,
              );
              e.wasmModule.ccall(
                "SmaxMockRunnerAddSyncdKey",
                null,
                ["number", "number", "number", "number", "number", "number"],
                [e.runnerPointer, 0, 0, r, t.length, n],
              );
            });
          }),
          (t.setVariable = function (t, n) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (r) {
              e.wasmModule.ccall(
                "SmaxMockRunnerSetVariable",
                null,
                ["number", "string", "string", "number"],
                [e.runnerPointer, t, n, r],
              );
            });
          }),
          (t.setDefaultIdentityName = function (t) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (n) {
              e.wasmModule.ccall(
                "SmaxMockRunnerSetDefaultIdentityName",
                null,
                ["number", "string", "number"],
                [e.runnerPointer, t, n],
              );
            });
          }),
          (t.processPreKeyBundle = function (t, n) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (r) {
              var a = o("WASmaxMockRunnerUtils").makePreKeyBundle(
                  e.wasmModule,
                  n,
                ),
                i = a.identityPtr,
                l = a.privateIdentityPtr,
                s = a.registrationId,
                u = a.preKeysPtr,
                c = a.preKeysLength,
                d = a.signedPreKeyPtr;
              e.wasmModule.ccall(
                "SmaxMockRunnerProcessPreKeyBundle",
                null,
                [
                  "number",
                  "string",
                  "number",
                  "number",
                  "number",
                  "number",
                  "number",
                  "number",
                  "number",
                ],
                [e.runnerPointer, t, i, l, s, u, c, d, r],
              );
            });
          }),
          (t.getPreKeyBundleForIdentity = function (t, n) {
            var e = this;
            return (
              n === void 0 && (n = 1),
              o("WASmaxMockRunnerUtils").withError(
                this.wasmModule,
                function (r) {
                  var a = o("WASmaxMockRunnerUtils").makePointer(e.wasmModule);
                  return (
                    e.wasmModule.ccall(
                      "SmaxMockRunnerGetPreKeyBundleForIdentity",
                      null,
                      ["number", "string", "number", "number", "number"],
                      [e.runnerPointer, t, n, a, r],
                    ),
                    o("WASmaxMockRunnerUtils").copyPreKeyBundle(
                      e.wasmModule,
                      e.wasmModule.getValue(a, "*"),
                    )
                  );
                },
              )
            );
          }),
          (t.overrideFunction = function (t, n) {
            var e = this,
              r = function (r, a, i) {
                for (var t = [], l = 0; l < i; l++) {
                  var s = e.wasmModule.getValue(a + l * 4, "i32"),
                    u = e.wasmModule.UTF8ToString(s);
                  t.push(u);
                }
                var c = n(t),
                  d = e.wasmModule.lengthBytesUTF8(c) + 1,
                  m = o("WASmaxWasmMemoryManagement").unsafe(
                    e.wasmModule,
                    function (e) {
                      return e._malloc(d);
                    },
                  );
                return (e.wasmModule.stringToUTF8(c, m, d), m);
              },
              a = function (n, r) {
                o("WASmaxWasmMemoryManagement").unsafe(
                  e.wasmModule,
                  function (e) {
                    return e._free(r);
                  },
                );
              },
              i = this.wasmModule.addFunction(r, "iiii"),
              l = this.wasmModule.addFunction(a, "vii");
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (n) {
              var r = e.wasmModule._malloc(16);
              (e.wasmModule.setValue(r, 0, "*"),
                e.wasmModule.setValue(r + 4, i, "*"),
                e.wasmModule.setValue(r + 8, l, "*"),
                e.wasmModule.setValue(r + 12, 0, "*"),
                e.wasmModule.ccall(
                  "SmaxMockRunnerOverrideFunction",
                  null,
                  ["number", "number", "number", "number"],
                  [e.runnerPointer, t, r, n],
                ));
            });
          }),
          (t.match = function (t) {
            var e = this,
              n,
              r = (n = o("WASmaxMockRunnerUtils")).makePointer(this.wasmModule),
              a = n.copyByteArrayToWasmMemory(this.wasmModule, t);
            return (
              n.withError(this.wasmModule, function (n) {
                e.wasmModule.ccall(
                  "SmaxMockRunnerMatchStanza",
                  null,
                  ["number", "number", "number", "number", "number"],
                  [e.runnerPointer, a, t.length, r, n],
                );
              }),
              n.convertEvents(this.wasmModule, r)
            );
          }),
          (t.subscribe = function (t) {
            var e = this,
              n = this.wasmModule._malloc(12),
              r = o("WASmaxMockRunnerUtils").makePointer(this.wasmModule),
              a = this.wasmModule.addFunction(function (n, r, a) {
                var i = o("WASmaxMockRunnerUtils").EventType.cast(r);
                if (i == null) throw new Error("Unrecognized event type " + r);
                switch (i) {
                  case o("WASmaxMockRunnerUtils").EventType.Injection:
                    return t(
                      o("WASmaxMockRunnerUtils").getInjectionEvent(
                        e.wasmModule,
                        a,
                      ),
                    );
                  case o("WASmaxMockRunnerUtils").EventType.InjectionToServer:
                    return;
                  case o("WASmaxMockRunnerUtils").EventType.MockRequestMatched:
                    return t(
                      o("WASmaxMockRunnerUtils").getMockRequestMatchedEvent(
                        e.wasmModule,
                        a,
                      ),
                    );
                  case o("WASmaxMockRunnerUtils").EventType.MockCompleted:
                    return t(
                      o("WASmaxMockRunnerUtils").getMockCompletedEvent(
                        e.wasmModule,
                        a,
                      ),
                    );
                  case o("WASmaxMockRunnerUtils").EventType.SequenceCompleted:
                    return t(
                      o("WASmaxMockRunnerUtils").getSequenceCompletedEvent(
                        e.wasmModule,
                        a,
                      ),
                    );
                }
              }, "viii");
            return (
              this.wasmModule.setValue(n, 0, "*"),
              this.wasmModule.setValue(n + 4, a, "*"),
              this.wasmModule.setValue(n + 8, 0, "*"),
              o("WASmaxMockRunnerUtils").withError(
                this.wasmModule,
                function (t) {
                  e.wasmModule.ccall(
                    "SmaxMockRunnerRegisterListener",
                    null,
                    ["number", "number", "number", "number"],
                    [e.runnerPointer, n, r, t],
                  );
                },
              ),
              this.wasmModule.getValue(r, "*")
            );
          }),
          (t.unsubscribe = function (t) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (n) {
              e.wasmModule.ccall(
                "SmaxMockRunnerDeregisterListener",
                null,
                ["number", "number", "number", "number"],
                [e.runnerPointer, t, 0, n],
              );
            });
          }),
          (t.complete = function () {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (t) {
              e.wasmModule.ccall(
                "SmaxMockRunnerComplete",
                null,
                ["number", "number"],
                [e.runnerPointer, t],
              );
            });
          }),
          (t.cleanup = function () {
            (this.wasmModule.ccall(
              "SmaxMockRunnerFree",
              null,
              ["number"],
              [this.runnerPointer],
            ),
              this.wasmModule.exitStackFrame(),
              this.wasmModule.ensureNoMemoryLeaks());
          }),
          e
        );
      })(),
      c = (function (e) {
        function t(t, n, r) {
          return (
            e.call(this, t, n, r, "SmaxAutomaticRunnerBuilderCreate") || this
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.build = function () {
            var e = this;
            return o("WASmaxMockRunnerUtils").withError(
              this.wasmModule,
              function (t) {
                var n = o("WASmaxMockRunnerUtils").makePointer(e.wasmModule),
                  r = new p(e.wasmModule);
                return (
                  e.wasmModule.ccall(
                    "SmaxRunnerBuilderBuild",
                    null,
                    ["number", "number", "number"],
                    [e.builderPointer, n, t],
                  ),
                  (r.runnerPointer = e.wasmModule.getValue(n, "i32")),
                  r
                );
              },
            );
          }),
          t
        );
      })(s),
      d = (function (e) {
        function t(t, n, r) {
          return e.call(this, t, n, r, "SmaxManualRunnerBuilderCreate") || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.build = function () {
            var e = this;
            return o("WASmaxMockRunnerUtils").withError(
              this.wasmModule,
              function (t) {
                var n = o("WASmaxMockRunnerUtils").makePointer(e.wasmModule),
                  r = new m(e.wasmModule);
                return (
                  e.wasmModule.ccall(
                    "SmaxRunnerBuilderBuild",
                    null,
                    ["number", "number", "number"],
                    [e.builderPointer, n, t],
                  ),
                  (r.runnerPointer = e.wasmModule.getValue(n, "i32")),
                  r
                );
              },
            );
          }),
          t
        );
      })(s),
      m = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.start = function (t) {
            var e = this;
            o("WASmaxMockRunnerUtils").withError(this.wasmModule, function (n) {
              e.wasmModule.ccall(
                "SmaxManualMockRunnerStart",
                null,
                ["number", "string", "number", "number"],
                [e.runnerPointer, t, n],
              );
            });
          }),
          (n.next = function () {
            var e = this,
              t = o("WASmaxMockRunnerUtils").makePointer(this.wasmModule);
            return (
              o("WASmaxMockRunnerUtils").withError(
                this.wasmModule,
                function (n) {
                  e.wasmModule.ccall(
                    "SmaxManualMockRunnerNext",
                    null,
                    ["number", "number", "number"],
                    [e.runnerPointer, t, n],
                  );
                },
              ),
              o("WASmaxMockRunnerUtils").convertEvents(this.wasmModule, t)
            );
          }),
          t
        );
      })(u),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.fromRunner = function (n, r) {
            return new t(n, r);
          }));
        var n = t.prototype;
        return (
          (n.start = function (t) {
            var e = this,
              n = o("WASmaxMockRunnerUtils").makePointer(this.wasmModule);
            return (
              o("WASmaxMockRunnerUtils").withError(
                this.wasmModule,
                function (r) {
                  e.wasmModule.ccall(
                    "SmaxAutomaticMockRunnerStart",
                    null,
                    ["number", "string", "number", "number"],
                    [e.runnerPointer, t, n, r],
                  );
                },
              ),
              o("WASmaxMockRunnerUtils").convertEvents(this.wasmModule, n)
            );
          }),
          (n.send = function (t) {
            var e = this,
              n = o("WASmaxMockRunnerUtils").makePointer(this.wasmModule);
            return (
              o("WASmaxMockRunnerUtils").withError(
                this.wasmModule,
                function (r) {
                  e.wasmModule.ccall(
                    "SmaxAutomaticMockRunnerSend",
                    null,
                    ["number", "string", "number", "number"],
                    [e.runnerPointer, t, n, r],
                  );
                },
              ),
              o("WASmaxMockRunnerUtils").convertEvents(this.wasmModule, n)
            );
          }),
          t
        );
      })(u);
    function _(e, t, n) {
      n === void 0 && (n = 3);
      var r = o("WASmaxWasmMemoryManagement").enableWasmMemoryManagement(e);
      return o("WASmaxWasmMemoryManagement").withScopedAllocation(
        r,
        function () {
          var e = o("WASmaxMockRunnerUtils").copyByteArrayToWasmMemory(r, t),
            a = o("WASmaxMockRunnerUtils").makePointer(r),
            i = o("WASmaxMockRunnerUtils").withError(r, function (o) {
              return (
                r.ccall(
                  "SmaxVisualizeStanza",
                  "number",
                  ["number", "number", "number", "number", "number"],
                  [e, t.length, a, n, o],
                ),
                a
              );
            }),
            l = r.getValue(i, "i32"),
            s = r.UTF8ToString(l);
          return (
            r.ccall("SmaxVisualizedStanzaFree", null, ["number"], [l]),
            s
          );
        },
      );
    }
    function f(e, t, n) {
      var r = o("WASmaxWasmMemoryManagement").enableWasmMemoryManagement(e);
      return o("WASmaxWasmMemoryManagement").withScopedAllocation(
        r,
        function () {
          var e = o("WASmaxMockRunnerUtils").copyByteArrayToWasmMemory(r, t),
            a = o("WASmaxMockRunnerUtils").makePointer(r),
            i = o("WASmaxMockRunnerUtils").withError(r, function (o) {
              return (
                r.ccall(
                  "SmaxVisualizeProto",
                  "number",
                  ["number", "number", "string", "number", "number"],
                  [e, t.length, n, a, o],
                ),
                a
              );
            }),
            l = r.getValue(i, "i32"),
            s = r.UTF8ToString(l);
          return (r.ccall("SmaxVisualizedProtoFree", null, ["number"], [l]), s);
        },
      );
    }
    function g(e) {
      e.ccall("SmaxDisableLocationReporting", null, [], []);
    }
    function h(e, t) {
      var n = {
          "convert.xml":
            '<smax xmlns:smax=\'http://whatsapp.net/smax\'>\n        <mock name="Convert" originator="server">\n            <request>\n              ' +
            t +
            "\n            </request>\n        </mock>\n      </smax>",
        },
        r = new c(e, ["convert.xml"], function (e) {
          return n[e];
        });
      (r.addDeviceJid("16005551839:1@s.whatsapp.net"),
        r.addDefaultIdentityName("bob"));
      var o = r.build();
      (o.addSyncdKey(new Uint8Array(32)), o.setDefaultIdentityName("alice"));
      var a = o.send("Convert"),
        i = null;
      for (var l of a)
        if (l.type === "Injection") {
          i = l.data;
          break;
        }
      if (i == null) throw new Error("Unreachable");
      return (o.complete(), o.cleanup(), i);
    }
    var y = null;
    function C(e) {
      return (y != null || (y = new v(e)), y);
    }
    var b = n("$InternalEnum")({
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
      }),
      v = (function () {
        function e(e) {
          var t = this;
          ((this.subscriptionCounter = 0),
            (this.subscriptions = new Map()),
            (this.wasmModule = e));
          var n = function (r, o) {
            t.emit(e.UTF8ToString(o).replace(/\n$/, ""));
          };
          this.loggingFnPointer = e.addFunction(n, "vii");
          var r = e._malloc(12);
          (e.setValue(r, 0, "*"),
            e.setValue(r + 4, this.loggingFnPointer, "*"),
            e.setValue(r + 8, 0, "*"),
            e.ccall(
              "SmaxEnableLogger",
              null,
              ["number", "number"],
              [r, b.TRACE],
            ),
            e._free(r));
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (t) {
            var e = ++this.subscriptionCounter;
            return (this.subscriptions.set(e, t), e);
          }),
          (t.unsubscribe = function (t) {
            this.subscriptions.delete(t);
          }),
          (t.emit = function (t) {
            for (var e of this.subscriptions.values()) e(t);
          }),
          (t.free = function () {
            (this.subscriptions.clear(),
              this.wasmModule.removeFunction(this.loggingFnPointer));
          }),
          e
        );
      })();
    ((l.SmaxRunnerFunctionName = e),
      (l.SmaxAutomaticMockRunnerBuilder = c),
      (l.SmaxManualMockRunnerBuilder = d),
      (l.SmaxManualMockRunner = m),
      (l.SmaxAutomaticMockRunner = p),
      (l.WAPToXml = _),
      (l.ProtoToXml = f),
      (l.disableLocationReporting = g),
      (l.XmlToWAP = h),
      (l.getSmaxLogEmitter = C));
  },
  98,
);
