__d(
  "FrameEncryptionWasm",
  [
    "CompactSerializer",
    "DtlsAuthenticationInfoTypes",
    "E2eeMetricsSerializers",
    "E2eeModelSerializers",
    "FBLogger",
    "FrameEncryptionWasmTypes",
    "QuickPerformanceLogger",
    "RequestStreamBodyUtils",
    "WASignalKeys",
    "WasmLoggingSerializers",
    "WebAssemblyMemorySingleton",
    "ZenonGenericWasmHelper",
    "bx",
    "emptyFunction",
    "err",
    "frame_encryption",
    "getErrorSafe",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = 1,
      c = new Map(),
      d = !1,
      m = 15e3,
      p = function (t, n) {
        var e;
        return Promise.race([
          r("frame_encryption")(t),
          new Promise(function (t, o) {
            e = window.setTimeout(function () {
              return o(r("err")("Wasm init timed out!"));
            }, n);
          }),
        ]).finally(function () {
          return window.clearTimeout(e);
        });
      };
    async function _(t, n) {
      t.onZenonLogEvent({ name: "e2eeInitWasmStart" });
      var o = window.fetch,
        a = t.locateFile();
      window.fetch = function (e, n) {
        var r = e === a;
        return (
          r && t.onZenonLogEvent({ name: "e2eeInitWasmFetchStart" }),
          o(e, n).then(function (e) {
            return (
              r && t.onZenonLogEvent({ name: "e2eeInitWasmFetchEnd" }),
              e
            );
          })
        );
      };
      try {
        var i = await p(t, m);
        if (i == null)
          throw (
            n != null &&
              ((e || (e = r("QuickPerformanceLogger"))).markerPoint(
                r("qpl")._(398998698, "1355"),
                "failed_initializing_frame_encryption_wasm_null_module",
                { instanceKey: +n },
              ),
              e.markerEnd(r("qpl")._(398998698, "1355"), 3, +n)),
            r("err")("Failed to initialize WASM")
          );
        return (t.onZenonLogEvent({ name: "e2eeInitWasmEnd" }), i);
      } catch (o) {
        throw (
          n != null &&
            ((e || (e = r("QuickPerformanceLogger"))).markerPoint(
              r("qpl")._(398998698, "1355"),
              "failed_initializing_frame_encryption_wasm_timeout_likely",
              { instanceKey: +n },
            ),
            e.markerEnd(r("qpl")._(398998698, "1355"), 3, +n)),
          t.onZenonLogEvent({
            error: JSON.stringify(o),
            name: "e2eeInitWasmEnd",
          }),
          o
        );
      } finally {
        window.fetch = o;
      }
    }
    function f(e, t, n, o) {
      var a = o,
        i = babelHelpers.extends({}, o),
        l = function (s) {
          if (Object.prototype.hasOwnProperty.call(o, s)) {
            if (typeof a[s] != "function")
              throw r("err")(
                "Only functions are allowed as properties on the wasmModule",
              );
            i[s] = function () {
              try {
                return a[s].apply(a, arguments);
              } catch (a) {
                if (!d) {
                  d = !0;
                  var i = o.getLogFromAssertions();
                  (r("FBLogger")("rtc_www")
                    .catching(r("getErrorSafe")(a))
                    .mustfix(
                      "[WASM] API:%s, ERROR:%s, ASSERTION_LOG:%s, E2EE MANDATED: %s, USE_WORKER:%s",
                      s.toString(),
                      r("getErrorSafe")(a).message,
                      i,
                      e.toString(),
                      t.toString(),
                    ),
                    n(
                      "[WASM] API:" +
                        s.toString() +
                        ", ERROR:" +
                        r("getErrorSafe")(a).message +
                        ", ASSERTION_LOG:" +
                        i +
                        ", E2EE MANDATED:" +
                        e.toString() +
                        ", USE_WORKER:" +
                        t.toString(),
                    ));
                }
              }
            };
          }
        };
      for (var s in o) l(s);
      return i;
    }
    function g(e, t) {
      t === void 0 && (t = function () {});
      var n = S(e);
      return e.addFunction(function (r, a, i) {
        var l = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, a, i),
          s = R(r, n);
        t(l, s);
      }, "viii");
    }
    function h(e, t, n, r, a) {
      var i,
        l = (i = o("FrameEncryptionWasmTypes")).WASM_NULLPTR_VALUE,
        u = i.WASM_NULLPTR_VALUE,
        c = new i.WasmCallbackManager(e);
      try {
        u = P(e, c, a, n);
        var d = c.createCallback($(t, e, r), "vi");
        l = e._e2eeContext_create(t ? 1 : 0, n, d.get(), u);
      } finally {
        (e._proxyIdentityStoreDeps_free(u),
          l === o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
            c.cleanupAllCallbacks());
      }
      var m = new (o("FrameEncryptionWasmTypes").ZenonNonNullWasmPtr)(l);
      return (s.set(m, c), m);
    }
    function y(e, t, n, r, a, i) {
      var l,
        d = (l = o("FrameEncryptionWasmTypes")).WASM_NULLPTR_VALUE,
        m = l.WASM_NULLPTR_VALUE,
        p = new l.WasmCallbackManager(e);
      try {
        if (
          ((m = e._encryptionKeysManagerDeps_create()),
          e._encryptionKeysManagerDeps_setE2eeContext(m, n.get()),
          e._encryptionKeysManagerDeps_setSendE2eeMessageCallback(
            m,
            p.createCallback(k(e, a), "viiii").get(),
          ),
          e._encryptionKeysManagerDeps_setIsSessionKeyEnabled(m, !0),
          i != null)
        ) {
          e._encryptionKeysManagerDeps_setSctpSendE2eeMessageCallback(
            m,
            p.createCallback(I(e, i), "viiii").get(),
          );
          var _ = function (n, r) {
            var t = window.setTimeout(function () {
              e._wasmTimerAdapter_execute(r);
            }, n);
            return (u++, c.set(u, t), u);
          };
          e._encryptionKeysManagerDeps_setStartTimerCallback(
            m,
            p.createCallback(_, "iii").get(),
          );
          var f = function (t) {
            var e = c.get(t);
            window.clearTimeout(e);
          };
          e._encryptionKeysManagerDeps_setStopTimerCallback(
            m,
            p.createCallback(f, "vi").get(),
          );
        }
        var g = o("ZenonGenericWasmHelper").allocateWasmBufferFromString(e, r),
          h = g[0],
          y = g[1];
        (e._encryptionKeysManagerDeps_setUserIdStr(m, h, y),
          e._free(h),
          e._encryptionKeysManagerDeps_setIsE2eeInfraMandated(m, t ? 1 : 0),
          (d = e._encryptionKeysManager_create(m)));
      } finally {
        (e._encryptionKeysManagerDeps_free(m),
          d === o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
            p.cleanupAllCallbacks());
      }
      var C = new (o("FrameEncryptionWasmTypes").ZenonNonNullWasmPtr)(d);
      return (s.set(C, p), C);
    }
    function C(e) {
      var t = e.identityStoreInMemoryCache,
        n = e.isE2eeMandated,
        a = e.isE2eeInfraMandated,
        i = e.logCallbackFn,
        l = i === void 0 ? r("emptyFunction") : i,
        u = e.onE2eeModelUpdate,
        c = e.onZenonLogEvent,
        m = e.terminateCallFn,
        p = e.useWorker,
        C = p === void 0 ? !1 : p,
        S = e.wasmBinary,
        R = e.signallingId,
        k = {
          locateFile: function () {
            return r("bx").getURL(r("bx")("37"));
          },
          onZenonLogEvent: c,
          wasmBinary: S,
          wasmMemory: o(
            "WebAssemblyMemorySingleton",
          ).WebAssemblyMemorySingleton.get(),
        };
      return new Promise(function (e) {
        _(k, R)
          .then(function (i) {
            var c = g(i, l),
              p;
            return e(
              f(n || a, C, m, {
                allowUnencryptedFrames: function (t) {
                  i._frameDecryptor_enableUnencryptedData(t.get());
                },
                calculateSignature: function (t, n) {
                  var e = new Uint8Array(0),
                    r = new Uint8Array(0),
                    a = !1,
                    l = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE;
                  try {
                    ((l = i._cryptoSignatureInfo_create()),
                      i._cryptoSignatureInfo_setTextSize(l, n.length),
                      o("ZenonGenericWasmHelper").writeBytesIntoWasmBuffer(
                        i,
                        n,
                        i._cryptoSignatureInfo_getTextDataPtr(l),
                      ),
                      i._encryptionKeysManager_calculateSignature(t.get(), l),
                      i._cryptoSignatureInfo_succeeded(l) === 1 &&
                        ((a = !0),
                        (e = o(
                          "ZenonGenericWasmHelper",
                        ).readBytesFromWasmBuffer(
                          i,
                          i._cryptoSignatureInfo_getPublicIdentityKeyDataPtr(l),
                          i._cryptoSignatureInfo_getPublicIdentityKeySize(l),
                        )),
                        (r = o(
                          "ZenonGenericWasmHelper",
                        ).readBytesFromWasmBuffer(
                          i,
                          i._cryptoSignatureInfo_getSignatureDataPtr(l),
                          i._cryptoSignatureInfo_getSignatureSize(l),
                        ))));
                  } finally {
                    i._cryptoSignatureInfo_free(l);
                  }
                  return { publicIdentityKey: e, signature: r, succeeded: a };
                },
                createDtlsAuthenticationManager: function () {
                  return (
                    p == null && (p = h(i, n, c, u, t)),
                    new (o("FrameEncryptionWasmTypes").ZenonNonNullWasmPtr)(
                      i._dtlsAuthenticationManager_create(p.get()),
                    )
                  );
                },
                createEncryptionKeysManager: function (r, o, l) {
                  return (
                    p == null && (p = h(i, n, c, u, t)),
                    y(i, n || a, p, r, o, l)
                  );
                },
                createEncryptionKeysManagerForTesting: function (
                  t,
                  r,
                  o,
                  l,
                  s,
                ) {
                  var e = h(i, n, c, l, s),
                    u = y(i, n || a, e, t, r, o);
                  return { e2eeContextPtr: e, ekmPtr: u };
                },
                createFrameDecryptor: function (t, n) {
                  var e,
                    r = (e = o("FrameEncryptionWasmTypes")).WASM_NULLPTR_VALUE,
                    a = e.WASM_NULLPTR_VALUE,
                    l = e.WASM_NULLPTR_VALUE,
                    s = 0;
                  try {
                    var u = o(
                      "ZenonGenericWasmHelper",
                    ).allocateWasmBufferFromString(i, n);
                    ((l = u[0]),
                      (s = u[1]),
                      (a = i._frameDecryptorDeps_create()),
                      i._frameDecryptorDeps_setEncryptionKeysManager(
                        a,
                        t.get(),
                      ),
                      i._frameDecryptorDeps_setE2eeId(a, l, s),
                      i._frameDecryptorDeps_setLoggingCallback(a, c),
                      (r = i._frameDecryptor_create(a)));
                  } finally {
                    (i._frameDecryptorDeps_free(a), i._free(l));
                  }
                  return new (o(
                    "FrameEncryptionWasmTypes",
                  ).ZenonNonNullWasmPtr)(r);
                },
                createFrameEncryptor: function (t) {
                  var e = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    n = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE;
                  try {
                    ((n = i._frameEncryptorDeps_create()),
                      i._frameEncryptorDeps_setEncryptionKeysManager(
                        n,
                        t.get(),
                      ),
                      i._frameEncryptorDeps_setLoggingCallback(n, c),
                      (e = i._frameEncryptor_create(n)));
                  } finally {
                    i._frameEncryptorDeps_free(n);
                  }
                  return new (o(
                    "FrameEncryptionWasmTypes",
                  ).ZenonNonNullWasmPtr)(e);
                },
                createSecureDataMessageManager: function (t, n, r) {
                  var e,
                    a = (e = o("FrameEncryptionWasmTypes")).WASM_NULLPTR_VALUE,
                    l = e.WASM_NULLPTR_VALUE,
                    u = e.WASM_NULLPTR_VALUE,
                    c = new e.WasmCallbackManager(i);
                  try {
                    ((l = c.createCallback(D(i, n), "viiiiiii").get()),
                      (u = c.createCallback(r, "v").get()),
                      (a = i._cryptoMessageHandlerWrapper_create(
                        l,
                        u,
                        t.get(),
                      )));
                  } finally {
                    a === o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
                      c.cleanupAllCallbacks();
                  }
                  var d = new (o(
                    "FrameEncryptionWasmTypes",
                  ).ZenonNonNullWasmPtr)(a);
                  return (s.set(d, c), d);
                },
                createSecureSctpManager: function (t, n) {
                  var e,
                    r = (e = o("FrameEncryptionWasmTypes")).WASM_NULLPTR_VALUE,
                    a = e.WASM_NULLPTR_VALUE,
                    l = new e.WasmCallbackManager(i);
                  try {
                    ((a = l.createCallback(x(i, n), "viiiii").get()),
                      (r = i._sctpCryptoMessageHandlerWrapper_create(
                        a,
                        t.get(),
                      )));
                  } finally {
                    r === o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
                      l.cleanupAllCallbacks();
                  }
                  var u = new (o(
                    "FrameEncryptionWasmTypes",
                  ).ZenonNonNullWasmPtr)(r);
                  return (s.set(u, l), u);
                },
                decrypt: function (t, n) {
                  var e = { errorCode: -1, outputBuffer: new ArrayBuffer(0) },
                    r = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    a = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    l = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE;
                  try {
                    var s,
                      u = t.data.byteLength;
                    ((r = (s = o("ZenonGenericWasmHelper")).allocateWasmBuffer(
                      i,
                      new Uint8Array(t.data),
                    )),
                      (a = s.allocateWasmBuffer(i, new Uint8Array(u))),
                      (l = s.allocateWasmInteger(i)),
                      (e.errorCode = i._frameDecryptor_decrypt(
                        n.get(),
                        r,
                        u,
                        a,
                        u,
                        0,
                        0,
                        l,
                      )),
                      (e.outputBuffer =
                        s.transferDataFromWasmBufferToArrayBuffer(i, a, l)));
                  } finally {
                    (i._free(r), i._free(a), i._free(l));
                  }
                  return e;
                },
                decryptSctpMessage: function (t, n, r, a) {
                  var e = o(
                      "ZenonGenericWasmHelper",
                    ).allocateWasmBufferFromString(i, r),
                    l = e[0],
                    s = e[1],
                    u = o(
                      "ZenonGenericWasmHelper",
                    ).allocateWasmBufferFromString(i, n),
                    c = u[0],
                    d = u[1];
                  try {
                    i._cryptoMessageHandlerWrapper_decryptSctpMessage(
                      t.get(),
                      l,
                      s,
                      c,
                      d,
                      a,
                    );
                  } finally {
                    (i._free(l), i._free(c));
                  }
                },
                decryptStateSyncUpdate: function (t, n, r) {
                  var e = o(
                      "ZenonGenericWasmHelper",
                    ).allocateWasmBufferFromString(i, r),
                    a = e[0],
                    l = e[1],
                    s = o(
                      "ZenonGenericWasmHelper",
                    ).allocateWasmBufferFromString(
                      i,
                      o("RequestStreamBodyUtils").uint8ArrayToString(n.data),
                    ),
                    u = s[0],
                    c = s[1];
                  (i._cryptoMessageHandlerWrapper_decryptStateSyncNotify(
                    t.get(),
                    a,
                    l,
                    u,
                    c,
                    n.version,
                  ),
                    i._free(a),
                    i._free(u));
                },
                disableE2eeObserverPublishingDelay: function (t) {
                  i._dtlsAuthenticationManager_disableE2eeObserverPublishingDelay(
                    t.get(),
                  );
                },
                encrypt: function (t, n, r) {
                  var e = { errorCode: -1, outputBuffer: new ArrayBuffer(0) },
                    a = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    l = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE;
                  try {
                    var s = v(i, t, n.get());
                    ((a = o("ZenonGenericWasmHelper").allocateWasmBuffer(i, s)),
                      (l = o("ZenonGenericWasmHelper").allocateWasmInteger(i)),
                      (e.errorCode = i._frameEncryptor_encrypt(
                        n.get(),
                        r,
                        a,
                        t.data.byteLength,
                        a,
                        s.length,
                        0,
                        0,
                        l,
                      )),
                      (e.outputBuffer = o(
                        "ZenonGenericWasmHelper",
                      ).transferDataFromWasmBufferToArrayBuffer(i, a, l)));
                  } finally {
                    (i._free(a), i._free(l));
                  }
                  return e;
                },
                encryptSctpMessage: function (t, n) {
                  var e = E(i, n),
                    r = i._cryptoMessageHandlerWrapper_encryptSctpMessage(
                      t.get(),
                      e,
                    ),
                    a = r === 1;
                  if (a) {
                    var l = o(
                      "ZenonGenericWasmHelper",
                    ).readStringFromWasmBuffer(
                      i,
                      i._stringBuffer_getDataPtr(e),
                      i._stringBuffer_getSize(e),
                    );
                    return (i._stringBuffer_free(e), l);
                  }
                },
                encryptStateSyncSnapshot: function (t, n, r) {
                  var e = L(i, n, r),
                    a = i._cryptoMessageHandlerWrapper_encryptStateSyncSnapshot(
                      t.get(),
                      e,
                    ),
                    l = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(
                      i,
                      i._dataMessage_getTopicPtr(e),
                      i._dataMessage_getTopicSize(e),
                    ),
                    s = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(
                      i,
                      i._dataMessage_getDataPtr(e),
                      i._dataMessage_getDataSize(e),
                    ),
                    u = a === 1,
                    c = {
                      encryptedData: s,
                      encryptedTopic: l,
                      encryptionSuccess: u,
                    };
                  return (i._dataMessage_free(e), c);
                },
                encryptStateSyncUpdate: function (t, n, r) {
                  var e = L(i, n, r),
                    a = i._cryptoMessageHandlerWrapper_encryptStateSyncUpdate(
                      t.get(),
                      e,
                    ),
                    l = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(
                      i,
                      i._dataMessage_getTopicPtr(e),
                      i._dataMessage_getTopicSize(e),
                    ),
                    s = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(
                      i,
                      i._dataMessage_getDataPtr(e),
                      i._dataMessage_getDataSize(e),
                    ),
                    u = a === 1,
                    c = {
                      encryptedData: s,
                      encryptedTopic: l,
                      encryptionSuccess: u,
                    };
                  return (i._dataMessage_free(e), c);
                },
                freeDecryptor: function (t) {
                  (i._frameDecryptor_free(t.get()), t.markAsFreed());
                },
                freeDtlsAuthenticationManager: function (t) {
                  b(t, i._dtlsAuthenticationManager_free);
                },
                freeEncryptionKeysManager: function (t) {
                  b(t, i._encryptionKeysManager_free);
                },
                freeEncryptionKeysManagerForTesting: function (t, n) {
                  (b(n, i._encryptionKeysManager_free),
                    b(t, i._e2eeContext_free));
                },
                freeEncryptor: function (t) {
                  (i._frameEncryptor_free(t.get()), t.markAsFreed());
                },
                freePrivatelyHeldCallScopedResources: function () {
                  p != null && (b(p, i._e2eeContext_free), (p = null));
                },
                freeSecureDataMessageManager: function (t) {
                  b(t, i._cryptoMessageHandlerWrapper_free);
                },
                freeSecureSctpManager: function (t) {
                  b(t, i._cryptoMessageHandlerWrapper_free);
                },
                generateDtlsAuthenticationInfo: function (t, n) {
                  var e = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    r = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    a = null;
                  try {
                    ((e = T(i, n)),
                      (r =
                        i._dtlsAuthenticationManager_generateAuthenticationInfo(
                          t.get(),
                          e,
                        )),
                      i._dtlsAuthenticatorGenerateResult_succeeded(r) === 1 &&
                        (a = o(
                          "ZenonGenericWasmHelper",
                        ).readStringFromWasmBuffer(
                          i,
                          i._dtlsAuthenticatorGenerateResult_getDataPtr(r),
                          i._dtlsAuthenticatorGenerateResult_getDataSize(r),
                        )));
                  } finally {
                    (e !== o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
                      i._dtlsFingerprint_free(e),
                      r !== o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
                        i._dtlsAuthenticatorGenerateResult_free(r));
                  }
                  return a;
                },
                getAllocatedObjectCount: function () {
                  var e = 0;
                  return (
                    s.forEach(function (t, n) {
                      return (e += t.getCountOfCallbacks());
                    }),
                    i._debug_getAllocatedObjectCount() + e
                  );
                },
                getGroupE2eeMetrics: function (t) {
                  var e,
                    n = 0;
                  try {
                    ((n = i._encryptionKeysManager_getSerializedE2eeMetrics(
                      t.get(),
                    )),
                      (e = o("ZenonGenericWasmHelper").readBytesFromWasmBuffer(
                        i,
                        i._byteBuffer_getDataPtr(n),
                        i._byteBuffer_getSize(n),
                      )));
                  } finally {
                    i._byteBuffer_free(n);
                  }
                  return o("CompactSerializer").deserialize(
                    e,
                    o("E2eeMetricsSerializers").deserializeE2eeMetrics,
                  ).group_e2ee;
                },
                getLogFromAssertions: function () {
                  var e = 256,
                    t = o("ZenonGenericWasmHelper").allocateWasmMemory(i, e),
                    n = "<empty>";
                  try {
                    var r = i._debug_getLogFromAssertions(t, e),
                      a = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(
                        i,
                        t,
                        r,
                      );
                    a.length !== 0 && (n = a);
                  } finally {
                    i._free(t);
                  }
                  return n;
                },
                getP2pE2eeMetrics: function (t) {
                  var e,
                    n = 0;
                  try {
                    ((n = i._dtlsAuthenticationManager_getSerializedE2eeMetrics(
                      t.get(),
                    )),
                      (e = o("ZenonGenericWasmHelper").readBytesFromWasmBuffer(
                        i,
                        i._byteBuffer_getDataPtr(n),
                        i._byteBuffer_getSize(n),
                      )));
                  } finally {
                    i._byteBuffer_free(n);
                  }
                  return o("CompactSerializer").deserialize(
                    e,
                    o("E2eeMetricsSerializers").deserializeP2pE2eeMetrics,
                  );
                },
                getSerializedE2eeClientState: function (t) {
                  var e = { dataBuffer: new Uint8Array(0), errorCode: -1 },
                    n = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE;
                  try {
                    ((n = i._encryptionKeysManager_getSerializedE2eeClientState(
                      t.get(),
                    )),
                      (e.errorCode = i._dataResult_getErrCode(n)),
                      (e.dataBuffer = o(
                        "ZenonGenericWasmHelper",
                      ).readBytesFromWasmBuffer(
                        i,
                        i._dataResult_getData(n),
                        i._dataResult_getDataSize(n),
                      )));
                  } finally {
                    i._dataResult_free(n);
                  }
                  return e;
                },
                onMediaDataChannelReady: function (t) {
                  i._encryptionKeysManager_onMediaDataChannelReady(t.get());
                },
                processE2eeMessage: function (t, n) {
                  var e = {
                      keyIndex: "",
                      keyUpdateDelayInMS: 0,
                      statusCode: -1,
                    },
                    r = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    a = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE;
                  try {
                    ((a = o("ZenonGenericWasmHelper").allocateWasmBuffer(i, n)),
                      (r = i._encryptionKeysManager_processE2eeMessage(
                        t.get(),
                        a,
                        n.byteLength,
                      )),
                      (e.statusCode =
                        i._encryptionKeysManagerProcessE2eeMessageResult_getStatusCode(
                          r,
                        )),
                      (e.keyIndex = o(
                        "ZenonGenericWasmHelper",
                      ).readStringFromWasmBuffer(
                        i,
                        i._encryptionKeysManagerProcessE2eeMessageResult_getKeyIndexDataPtr(
                          r,
                        ),
                        i._encryptionKeysManagerProcessE2eeMessageResult_getKeyIndexSize(
                          r,
                        ),
                      )),
                      (e.keyUpdateDelayInMS =
                        i._encryptionKeysManagerProcessE2eeMessageResult_getKeyUpdateDelay(
                          r,
                        )));
                  } finally {
                    (i._encryptionKeysManagerProcessE2eeMessageResult_free(r),
                      i._free(a));
                  }
                  return e;
                },
                processE2eeServerUpdate: function (t, n) {
                  var e = {
                      errorCode: -1,
                      keyIndex: "",
                      keyUpdateDelayInMS: 0,
                      removeFrameDecryptorDelayMs: 0,
                    },
                    r = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    a = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE;
                  try {
                    ((r = o("ZenonGenericWasmHelper").allocateWasmBuffer(i, n)),
                      (a = i._encryptionKeysManager_processE2eeServerUpdate(
                        t.get(),
                        r,
                        n.byteLength,
                      )),
                      (e.errorCode =
                        i._encryptionKeysManagerProcessE2eeServerUpdateResult_getErrCode(
                          a,
                        )),
                      (e.keyIndex = o(
                        "ZenonGenericWasmHelper",
                      ).readStringFromWasmBuffer(
                        i,
                        i._encryptionKeysManagerProcessE2eeServerUpdateResult_getKeyIndexDataPtr(
                          a,
                        ),
                        i._encryptionKeysManagerProcessE2eeServerUpdateResult_getKeyIndexSize(
                          a,
                        ),
                      )),
                      (e.keyUpdateDelayInMS =
                        i._encryptionKeysManagerProcessE2eeServerUpdateResult_getKeyUpdateDelay(
                          a,
                        )),
                      (e.removeFrameDecryptorDelayMs =
                        i._encryptionKeysManagerProcessE2eeServerUpdateResult_getRemoveFrameDecryptorDelayMs(
                          a,
                        )));
                  } finally {
                    (i._encryptionKeysManagerProcessE2eeServerUpdateResult_free(
                      a,
                    ),
                      i._free(r));
                  }
                  return e;
                },
                resetTerminationStateForTesting: function () {
                  d = !1;
                },
                setLocalE2eeId: function (t, n) {
                  if (n.length < 1)
                    throw r("err")("local e2ee id cannot be empty");
                  var e = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    a = 0;
                  try {
                    var l = o(
                      "ZenonGenericWasmHelper",
                    ).allocateWasmBufferFromString(i, n);
                    ((e = l[0]),
                      (a = l[1]),
                      i._encryptionKeysManager_setLocalE2eeId(t.get(), e, a));
                  } finally {
                    i._free(e);
                  }
                },
                setSupportedFrameDataHandlerTypes: function (t, n) {
                  for (
                    var e = 4, r = n.length, o = i._malloc(e * r), a = 0;
                    a < r;
                    a++
                  )
                    i.setValue(o + a * e, n[a], "i32");
                  (i._frameDecryptor_setSupportedFrameDataHandlerTypes(
                    t.get(),
                    o,
                    r,
                  ),
                    i._free(o));
                },
                updateSenderKeyIndex: function (t, n) {
                  var e = "",
                    r = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    a = o(
                      "ZenonGenericWasmHelper",
                    ).allocateWasmBufferFromString(i, n),
                    l = a[0],
                    s = a[1];
                  try {
                    ((r = i._encryptionKeysManager_updateSenderKeyIndex(
                      t.get(),
                      l,
                      s,
                    )),
                      (e = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(
                        i,
                        i._stringBuffer_getDataPtr(r),
                        i._stringBuffer_getSize(r),
                      )));
                  } finally {
                    (i._stringBuffer_free(r), i._free(l));
                  }
                  return e;
                },
                verifyDtlsAuthenticationInfo: function (t, n, r, a) {
                  var e = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    l = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    s = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE,
                    u = !1;
                  try {
                    ((e = T(i, n)),
                      (l = E(i, r)),
                      (s = E(i, a)),
                      (u =
                        i._dtlsAuthenticationManager_verifyAuthenticationInfo(
                          t.get(),
                          e,
                          l,
                          s,
                        ) ===
                        o("DtlsAuthenticationInfoTypes").DtlsAuthenticatorStatus
                          .Success));
                  } finally {
                    (e !== o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
                      i._dtlsFingerprint_free(e),
                      l !== o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
                        i._stringBuffer_free(l),
                      s !== o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE &&
                        i._stringBuffer_free(s));
                  }
                  return u;
                },
                verifySignature: function (t, n, r, a) {
                  var e = !1,
                    l = o("FrameEncryptionWasmTypes").WASM_NULLPTR_VALUE;
                  try {
                    ((l = i._cryptoSignatureInfo_create()),
                      i._cryptoSignatureInfo_setTextSize(l, n.length),
                      o("ZenonGenericWasmHelper").writeBytesIntoWasmBuffer(
                        i,
                        n,
                        i._cryptoSignatureInfo_getTextDataPtr(l),
                      ),
                      i._cryptoSignatureInfo_setPublicIdentityKeySize(
                        l,
                        a.length,
                      ),
                      o("ZenonGenericWasmHelper").writeBytesIntoWasmBuffer(
                        i,
                        a,
                        i._cryptoSignatureInfo_getPublicIdentityKeyDataPtr(l),
                      ),
                      i._cryptoSignatureInfo_setSignatureSize(l, r.length),
                      o("ZenonGenericWasmHelper").writeBytesIntoWasmBuffer(
                        i,
                        r,
                        i._cryptoSignatureInfo_getSignatureDataPtr(l),
                      ),
                      i._encryptionKeysManager_verifySignature(t.get(), l),
                      (e = i._cryptoSignatureInfo_succeeded(l) === 1));
                  } finally {
                    i._cryptoSignatureInfo_free(l);
                  }
                  return e;
                },
              }),
            );
          })
          .catch(function (e) {
            throw (
              m("Failed to initialize wasm module"),
              r("err")("Failed to initialize wasm module, " + String(e))
            );
          });
      });
    }
    function b(e, t) {
      var n;
      (t(e.get()),
        e.markAsFreed(),
        (n = s.get(e)) == null || n.cleanupAllCallbacks(),
        s.delete(e));
    }
    function v(e, t, n) {
      var r = t.data.byteLength,
        o = e._frameEncryptor_getMaxEncryptedSize(n, r),
        a = new Uint8Array(o);
      return (a.set(new Uint8Array(t.data), 0), a.fill(0, r), a);
    }
    function S(e) {
      var t = e._logSeverityDefinition_create(),
        n = o("ZenonGenericWasmHelper").readBytesFromWasmBuffer(
          e,
          e._byteBuffer_getDataPtr(t),
          e._byteBuffer_getSize(t),
        );
      return (
        e._byteBuffer_free(t),
        o("CompactSerializer").deserialize(
          n,
          o("WasmLoggingSerializers").deserializeConsoleLogLevelDefinition,
        )
      );
    }
    function R(e, t) {
      switch (e) {
        case t.error:
          return "ERROR";
        case t.warning:
          return "WARNING";
        case t.info:
          return "INFO";
        default:
          return (
            r("FBLogger")("frame_encryption_wasm").debug(
              "Logging severity not found in log level definition. Severity: " +
                e,
            ),
            "INFO"
          );
      }
    }
    function L(e, t, n) {
      var r = e._dataMessage_create(t.length, n.length);
      return (
        o("ZenonGenericWasmHelper").writeStringIntoWasmBuffer(
          e,
          t,
          e._dataMessage_getTopicPtr(r),
        ),
        o("ZenonGenericWasmHelper").writeStringIntoWasmBuffer(
          e,
          n,
          e._dataMessage_getDataPtr(r),
        ),
        r
      );
    }
    function E(e, t) {
      var n = e._stringBuffer_create(t.length);
      return (
        o("ZenonGenericWasmHelper").writeStringIntoWasmBuffer(
          e,
          t,
          e._stringBuffer_getDataPtr(n),
        ),
        n
      );
    }
    function k(e, t) {
      return function (n, r, a, i) {
        var l = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, n, r),
          s = o("ZenonGenericWasmHelper").readBytesFromWasmBuffer(e, a, i);
        t(l, s);
      };
    }
    function I(e, t) {
      return function (n, r, a, i) {
        var l = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, n, r),
          s = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, a, i);
        t(l, s);
      };
    }
    function T(e, t) {
      var n = e._dtlsFingerprint_create(t.algo.length, t.digest.length);
      return (
        o("ZenonGenericWasmHelper").writeStringIntoWasmBuffer(
          e,
          t.algo,
          e._dtlsFingerprint_getAlgoDataPtr(n),
        ),
        o("ZenonGenericWasmHelper").writeStringIntoWasmBuffer(
          e,
          t.digest,
          e._dtlsFingerprint_getDigestDataPtr(n),
        ),
        n
      );
    }
    function D(e, t) {
      return function (n, r, a, i, l, s, u) {
        var c = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, n, r),
          d = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, a, i),
          m = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, l, s);
        t(c, d, m, u);
      };
    }
    function x(e, t) {
      return function (n, r, a, i, l) {
        var s = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, n, r),
          u = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, a, i);
        t(u, s, l);
      };
    }
    function $(e, t, n) {
      return function (r) {
        var a = o("ZenonGenericWasmHelper").readBytesFromWasmBuffer(
            t,
            t._byteBuffer_getDataPtr(r),
            t._byteBuffer_getSize(r),
          ),
          i = o("CompactSerializer").deserialize(
            a,
            o("E2eeModelSerializers").deserializeE2eeModel,
          );
        ((i.isE2eeMandated = e), n(i));
      };
    }
    function P(e, t, n, r) {
      var a = e._proxyIdentityStoreDeps_create();
      {
        var i = function () {
          var t = n.getLocalPublicPrivateIdentityKey(),
            r = t.serializedPubKey,
            a = t.privateKey,
            i = o("ZenonGenericWasmHelper").allocateWasmBuffer(e, r),
            l = o("ZenonGenericWasmHelper").allocateWasmBuffer(e, a),
            s = e._identityKey_create(i, r.length, l, a.length);
          return (e._free(i), e._free(l), s);
        };
        e._proxyIdentityStoreDeps_setGetLocalPublicPrivateIdentityKeyCallback(
          a,
          t.createCallback(i, "i").get(),
          r,
        );
      }
      {
        var l = function (r, a, i) {
          var t = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, r, a),
            l = n.getRemotePublicIdentityKey(t, i);
          l == null && (l = new Uint8Array(0));
          var s = o("ZenonGenericWasmHelper").allocateWasmBuffer(e, l),
            u = e._publicKey_create(s, l.length);
          return (e._free(s), u);
        };
        e._proxyIdentityStoreDeps_setGetRemotePublicIdentityKeyCallback(
          a,
          t.createCallback(l, "iiii").get(),
          r,
        );
      }
      {
        var s = function (r, a, i, l, s) {
          var t = o("ZenonGenericWasmHelper").readBytesFromWasmBuffer(e, l, s),
            u = o("ZenonGenericWasmHelper").readStringFromWasmBuffer(e, r, a);
          return (
            n.saveRemotePublicIdentityKey(
              u,
              i,
              o("WASignalKeys").castToSerializedPubKey(t),
            ),
            0
          );
        };
        e._proxyIdentityStoreDeps_setSaveRemotePublicIdentityKeyCallback(
          a,
          t.createCallback(s, "iiiiii").get(),
        );
      }
      {
        var u = function () {
          return n.getLocalDeviceId();
        };
        e._proxyIdentityStoreDeps_setGetLocalDeviceIdCallback(
          a,
          t.createCallback(u, "i").get(),
        );
      }
      {
        var c = o("ZenonGenericWasmHelper").allocateWasmBufferFromString(
            e,
            n.getLocalUserId(),
          ),
          d = c[0],
          m = c[1];
        (e._proxyIdentityStoreDeps_setLocalUserId(a, d, m), e._free(d));
      }
      return (
        e._proxyIdentityStoreDeps_setLocalIdentityKeyMode(
          a,
          n.getLocalIdentityKeyMode(),
        ),
        a
      );
    }
    l.default = C;
  },
  98,
);
