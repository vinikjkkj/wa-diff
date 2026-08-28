__d(
  "ZenonE2ee",
  [
    "CompactSerializer",
    "CurrentUser",
    "E2eeStateSerializers",
    "FrameEncryptionWasmTypes",
    "QuickPerformanceLogger",
    "ZenonAuditedCheckpointLogId",
    "ZenonE2eeMandatedStateManager",
    "ZenonInfraActionsLogger",
    "ZenonODSLogger",
    "asyncToGeneratorRuntime",
    "cr:4452",
    "cr:5740",
    "err",
    "getErrorSafe",
    "gkx",
    "qex",
    "qpl",
    "shouldUseInsertableStreams",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = n("cr:4452")) != null ? e : n("cr:5740");
    r("ZenonInfraActionsLogger").logCheckpoint({
      checkpoint: "[ZP] E2EE module loaded: " + String(u != null),
    });
    var c = null,
      d = "dtls_verification_failed_",
      m = "dtls_generation_error_",
      p = "e2ee_validation_error_",
      _ = "1",
      f = -1,
      g = 16,
      h = (function () {
        function e() {
          ((this.$1 = !1),
            (this.$5 = {
              isGroupE2eeEnabled: !1,
              isP2pE2eeEnabled: !1,
              isRemoteUserMWS: !1,
            }));
        }
        var t = e.prototype;
        return (
          (t.createE2eeComponents = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, i, l) {
                var c,
                  d = this;
                l === void 0 && (l = !1);
                var m = t.getSignalingModel().getSignalingID();
                ((s || (s = r("QuickPerformanceLogger"))).markerStart(
                  r("qpl")._(398998698, "1355"),
                  +m,
                ),
                  s.markerAnnotate(
                    r("qpl")._(398998698, "1355"),
                    {
                      bool: {
                        isE2eeInfraMandated: r(
                          "ZenonE2eeMandatedStateManager",
                        ).isInfraE2eeMandated(),
                        isE2eeMandated: r(
                          "ZenonE2eeMandatedStateManager",
                        ).isInfraE2eeMandated(),
                        isTestUser: o("CurrentUser").isTestUser(),
                      },
                      string: { hostname: window.location.hostname },
                    },
                    { instanceKey: +m },
                  ));
                var p = window.setTimeout(function () {
                  (s || (s = r("QuickPerformanceLogger"))).markerEnd(
                    r("qpl")._(398998698, "1355"),
                    113,
                    +m,
                  );
                }, 6e3);
                ((this.$1 = l),
                  (this.$2 = a),
                  (this.$3 = t.getSignalingModel().getMediaModeManager()));
                var _ = (c = r("qex")._("1722")) != null ? c : !1;
                if (
                  (!r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated() &&
                    !_ &&
                    (u = null),
                  u == null)
                ) {
                  ((s || (s = r("QuickPerformanceLogger"))).markerPoint(
                    r("qpl")._(398998698, "1355"),
                    "zenon_e2ee_core_is_null",
                    { instanceKey: +m },
                  ),
                    s.markerEnd(r("qpl")._(398998698, "1355"), 4158, +m));
                  return;
                }
                var f = function (t, n) {
                  d.terminateCallIfE2eeViolation(t, n);
                };
                try {
                  yield u.createE2eeComponents(
                    r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated(),
                    e,
                    t,
                    n,
                    f,
                    i,
                    l,
                  );
                } catch (e) {
                  throw (
                    window.clearTimeout(p),
                    (s || (s = r("QuickPerformanceLogger"))).markerPoint(
                      r("qpl")._(398998698, "1355"),
                      "exception_during_creating_e2ee_components",
                      { instanceKey: +m },
                    ),
                    s.markerEnd(r("qpl")._(398998698, "1355"), 87, +m),
                    r("ZenonInfraActionsLogger").logError({
                      checkpoint:
                        "[ZenonE2ee] exception during creating e2ee components",
                      error: "" + r("getErrorSafe")(e).message,
                      errorDomain: "createE2eeComponents",
                    }),
                    e
                  );
                }
                (window.clearTimeout(p),
                  s.markerEnd(r("qpl")._(398998698, "1355"), 2, +m));
              },
            );
            function t(t, n, r, o, a, i) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.getE2eeComponents = function () {
            return u;
          }),
          (t.isE2eeStackReady = function () {
            var e, t;
            return (e = (t = u) == null ? void 0 : t.isE2eeStackReady()) != null
              ? e
              : !1;
          }),
          (t.getE2eeComponentCreationFailureMessage = function () {
            var e, t;
            return (e =
              (t = u) == null
                ? void 0
                : t.getE2eeComponentCreationFailureMessage()) != null
              ? e
              : "zenon e2ee core is null";
          }),
          (t.getSecureFrameManager = function () {
            var e;
            return (e = u) == null ? void 0 : e.getSecureFrameManager();
          }),
          (t.getSecureDataMessageManager = function () {
            var e;
            return (e = u) == null ? void 0 : e.getSecureDataMessageManager();
          }),
          (t.updateRemoteUserId = function (t) {
            ((this.$4 = t), (this.$5.isRemoteUserMWS = t === _));
          }),
          (t.shouldUseE2eeWorker = function () {
            return this.$1;
          }),
          (t.getCurrentMediaMode = function () {
            var e;
            return (e = this.$3) == null ? void 0 : e.getMediaMode();
          }),
          (t.freeCallScopedResources = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              yield (e = u) == null ? void 0 : e.freeCallScopedResources();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.getEncryptionKeysManagerState = function () {
            var e;
            return (e = u) == null || (e = e.getEncryptionKeysManager()) == null
              ? void 0
              : e.getState();
          }),
          (t.canSkipFrameEncryption = function () {
            return !this.$5.isRemoteUserMWS && this.$5.isP2pE2eeEnabled;
          }),
          (t.processE2eeServerState = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t, n;
                if (r("shouldUseInsertableStreams")()) {
                  if (e == null || e.byteLength === 0)
                    throw r("err")("Server state should never be empty!");
                  var a = o("CompactSerializer").deserialize(
                    e,
                    o("E2eeStateSerializers").deserializeE2eeServerState,
                  );
                  (yield (t = u) == null ? void 0 : t.cacheIdentityKeys(a),
                    yield (n = u) == null ||
                    (n = n.getEncryptionKeysManager()) == null
                      ? void 0
                      : n.processE2eeServerState(e));
                  var i = this.getEncryptionKeysManagerState();
                  this.$5.isGroupE2eeEnabled =
                    (i == null ? void 0 : i.sfuE2eeNegotiationState) === 0;
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.processE2eeMessage = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                yield (t = u) == null ||
                (t = t.getEncryptionKeysManager()) == null
                  ? void 0
                  : t.processE2eeMessage(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.terminateCallIfE2eeViolation = function (t, n) {
            var e, a, i, l;
            if ((e = u) != null && e.isE2eeStackReady())
              switch (t) {
                case o("FrameEncryptionWasmTypes").ZenonE2eeComponent
                  .INSERTABLE_STREAMS:
                  (a = this.$2) == null || a.call(this, n);
                  break;
                case o("FrameEncryptionWasmTypes").ZenonE2eeComponent.WASM:
                  (i = this.$2) == null || i.call(this, n);
                  break;
                case o("FrameEncryptionWasmTypes").ZenonE2eeComponent
                  .PRE_REMOTE_SDP:
                case o("FrameEncryptionWasmTypes").ZenonE2eeComponent
                  .POST_REMOTE_SDP: {
                  var s, c, d;
                  if (
                    !r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated() ||
                    (this.$5.isGroupE2eeEnabled && this.$5.isRemoteUserMWS) ||
                    (this.$5.isP2pE2eeEnabled && !this.$5.isRemoteUserMWS)
                  )
                    return;
                  var m = this.getCurrentMediaMode(),
                    _ = m === "sfu",
                    h =
                      (s =
                        (c = this.getEncryptionKeysManagerState()) == null
                          ? void 0
                          : c.sfuE2eeNegotiationState) != null
                        ? s
                        : f;
                  if (this.$5.isGroupE2eeEnabled && _) return;
                  var y = h === g;
                  if ((_ || this.$5.isRemoteUserMWS) && !y && r("gkx")("789")) {
                    (r("ZenonInfraActionsLogger").logCheckpoint({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__E2EE,
                      checkpoint:
                        "[ZSFM] [E2EE] Accepting SFU E2EE downgrade for CA at " +
                        t +
                        ", isRemoteUserMWS: " +
                        this.$5.isRemoteUserMWS.toString() +
                        ", mediaMode: " +
                        String(m) +
                        ", sfuE2eeNegotiationState: " +
                        String(h) +
                        ".",
                    }),
                      r("ZenonODSLogger").logE2eeCounter(
                        "e2ee_ca_web_downgrade_accepted_" + t,
                      ));
                    return;
                  }
                  var C =
                    "E2EE state validation failed at " +
                    t +
                    ", GROUP e2ee: " +
                    this.$5.isGroupE2eeEnabled.toString() +
                    ", P2P E2EE " +
                    this.$5.isP2pE2eeEnabled.toString() +
                    ", sfu mode: " +
                    this.$5.isRemoteUserMWS.toString();
                  (r("ZenonInfraActionsLogger").logCheckpoint({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__E2EE,
                    checkpoint: "[ZSFM] [E2EE] " + C + ".",
                  }),
                    r("ZenonODSLogger").logE2eeCounter(p + t),
                    (d = this.$2) == null || d.call(this, C));
                  break;
                }
                case o("FrameEncryptionWasmTypes").ZenonE2eeComponent.P2P:
                  if (
                    (this.$5.isGroupE2eeEnabled && this.$5.isRemoteUserMWS) ||
                    !r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated()
                  )
                    return;
                  break;
                case o("FrameEncryptionWasmTypes").ZenonE2eeComponent.GROUP:
                  if (
                    (this.$5.isP2pE2eeEnabled && !this.$5.isRemoteUserMWS) ||
                    !r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated()
                  )
                    return;
                  (l = this.$2) == null || l.call(this, n);
                  break;
              }
          }),
          (t.onMediaDataChannelReady = function () {
            var e;
            return (e = u) == null || (e = e.getEncryptionKeysManager()) == null
              ? void 0
              : e.onMediaDataChannelReady();
          }),
          (t.getSerializedE2eeClientState = function () {
            var e;
            return r("shouldUseInsertableStreams")()
              ? (e = u) == null || (e = e.getEncryptionKeysManager()) == null
                ? void 0
                : e.getSerializedE2eeClientState()
              : null;
          }),
          (t.onLocalSdpSet = function (t) {
            var e;
            return (e = u) == null || (e = e.getEncryptionKeysManager()) == null
              ? void 0
              : e.onLocalSdpSet(t);
          }),
          (t.generateDtlsAuthenticationInfo = function (t) {
            var e,
              n =
                (e = u) == null ||
                (e = e.getDtlsAuthenticationManager()) == null
                  ? void 0
                  : e.generateDtlsAuthenticationInfo(t);
            if (n == null && this.getCurrentMediaMode() === "p2p") {
              var o,
                a,
                i =
                  (o =
                    (a = this.getP2pE2eeMetrics()) == null
                      ? void 0
                      : a.gen_dtls_auth_info_status) != null
                    ? o
                    : "";
              r("ZenonODSLogger").logE2eeCounter(m + i);
            }
            return n;
          }),
          (t.getP2pE2eeMetrics = function () {
            var e;
            return (e = u) == null ||
              (e = e.getDtlsAuthenticationManager()) == null
              ? void 0
              : e.getP2pE2eeMetrics();
          }),
          (t.verifyDtlsAuthenticationInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t, n, o;
                yield (t = u) == null
                  ? void 0
                  : t.cacheSingleIdentityKey(
                      (n = u) == null ||
                        (n = n.getDtlsAuthenticationManager()) == null
                        ? void 0
                        : n.getRemoteDeviceId(e),
                      this.$4,
                    );
                var a =
                  (o = u) == null ||
                  (o = o.getDtlsAuthenticationManager()) == null
                    ? void 0
                    : o.verifyDtlsAuthenticationInfo(e, this.$4);
                if (a !== !0 && this.getCurrentMediaMode() === "p2p") {
                  var i,
                    l,
                    s =
                      (i =
                        (l = this.getP2pE2eeMetrics()) == null
                          ? void 0
                          : l.verify_dtls_auth_info_status) != null
                        ? i
                        : "";
                  r("ZenonODSLogger").logE2eeCounter(d + s);
                }
                return ((this.$5.isP2pE2eeEnabled = a === !0), a);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })();
    function y() {
      return (c == null && (c = new h()), c);
    }
    var C = y();
    l.default = C;
  },
  98,
);
