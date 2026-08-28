__d(
  "ZenonSDPManager",
  [
    "FBLogger",
    "FrameEncryptionWasmTypes",
    "ZenonAuditedCheckpointLogId",
    "ZenonBrowsers",
    "ZenonCodecPreferencesUtils",
    "ZenonE2ee",
    "ZenonE2eeMandatedStateManager",
    "ZenonInfraActionsLogger",
    "ZenonODSLogger",
    "ZenonSDPCodecRemoval",
    "ZenonSDPRtpHeaderExtensionManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "pako",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay",
      u = "urn:3gpp:video-orientation",
      c = "set_local_sdp_error",
      d = "set_remote_sdp_error",
      m = "rollback_sdp_error",
      p = (function () {
        function t(e, t) {
          ((this.$2 = null),
            (this.$3 = null),
            (this.$1 = e),
            (this.$4 = t.getZenonSdpTransformConfig()),
            (this.$5 = new (r("ZenonSDPRtpHeaderExtensionManager"))(
              r("ZenonE2ee").isE2eeStackReady() ||
                r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated(),
            )));
        }
        var a = t.prototype;
        return (
          (a.getLocalSdp = function () {
            return this.$2;
          }),
          (a.getRemoteSdp = function () {
            return this.$3;
          }),
          (a.getZenonSDPRtpHeaderExtensionManager = function () {
            return this.$5;
          }),
          (a.shouldPreferH264Multiway = function () {
            return r("gkx")("25217");
          }),
          (a.createLocalSdp = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var o = this.applyCodecPreferencesViaAPI(),
                  a =
                    t === "offer"
                      ? yield this.$1.createOffer(
                          babelHelpers.extends({}, n, {
                            preserveH264: this.$4.isPreserveH264(),
                          }),
                        )
                      : yield this.$1.createAnswer();
                if (!o) {
                  (this.shouldPreferH264Multiway() &&
                    (this.$4.isPreferSwH264()
                      ? a.preferH264Codec({
                          levelAsymmetryAllowed: !0,
                          packetizationMode: !0,
                          profileLevelId: "42e01f",
                        })
                      : a.preferCodec("video", {
                          preferredCodec: "H264",
                          preferredCodecRate: 9e4,
                        })),
                    a.removeH264CodecsWithPacketizationMode0(),
                    this.$4.isPreserveH264() || a.removeCodec("H264"),
                    a.removeH264CodecsWithProfileLevelId("42001f"),
                    a.removeCodec("AV1"));
                  var i = r("ZenonSDPCodecRemoval").video_codecs;
                  i.forEach(function (e) {
                    a.removeCodec(e);
                  });
                }
                this.$6(a);
                var l = r("ZenonE2ee").generateDtlsAuthenticationInfo(a);
                return (
                  l != null && a.updateDtlsAuthenticationInfo(l),
                  a.setVersion(e),
                  (this.$2 = a),
                  a
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setLocalSdp = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  this.$7(t, "local");
                  var n = (e || (e = r("performanceNow")))();
                  yield this.$1.setLocalDescription(t);
                  var o = e() - n;
                  r(
                    "ZenonInfraActionsLogger",
                  ).logCheckpointEmployeesTestUsersOnly({
                    checkpoint:
                      "[ZP][" +
                      t.getType() +
                      "] Finished setting local sdp of type in: " +
                      String(o),
                  });
                } catch (e) {
                  r("ZenonODSLogger").logCounter(c);
                  var a = r("getErrorSafe")(e);
                  throw (
                    this.$8(
                      a,
                      "Failed to set local sdp",
                      "ZenonSDPManager_setLocalSdp",
                    ),
                    a
                  );
                }
                this.$2 = t;
              },
            );
            function o(e) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (a.rollbackSdp = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                (yield this.$1.rollbackSdp(),
                  r("ZenonInfraActionsLogger").logCheckpoint({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__PLATFORM,
                    checkpoint: "[ZP] Successfully called rollback sdp",
                  }));
              } catch (t) {
                r("ZenonODSLogger").logCounter(m);
                var e = r("getErrorSafe")(t);
                throw (
                  this.$8(
                    e,
                    "Failed to set rollback sdp",
                    "ZenonSDPManager_rollbackSDP",
                  ),
                  e
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.createAndSetLocalSdp = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = yield this.createLocalSdp(e, t, n);
                return (yield this.setLocalSdp(r), r);
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setRemoteSdp = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, a, i) {
                var l;
                if (
                  (t.isRemote() ||
                    r("ZenonInfraActionsLogger").logError({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__ERROR,
                      checkpoint: "[ZP] Wrong SDP location",
                      error: "Non-remote SDP passed to setRemoteSdp()",
                      errorDomain: "ZenonSDPManager_setRemoteSdp",
                    }),
                  !this.$1.canAcceptRemoteSdp())
                )
                  return t;
                (n({ name: "beginRemoteSdpMunging" }),
                  this.$6(t),
                  t.removeCodec("AV1"),
                  n({ name: "endRemoteSdpMunging" }),
                  r("gkx")("25219") &&
                    (r("ZenonInfraActionsLogger").logCheckpoint({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__PLATFORM,
                      checkpoint:
                        "[ZP][" + t.getType() + "] Munge inactive media SSRC",
                    }),
                    t.mungeInactiveMediaSSRC(
                      this.$1.getCurrentRemoteDescription(),
                    )),
                  r("ZenonInfraActionsLogger").logCheckpoint({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__ERROR,
                    checkpoint:
                      "processing e2ee attributes while setting remote sdp, e2eeServerState is null? " +
                      (i == null ? "yes" : "no") +
                      ", server state size is " +
                      ((l = i == null ? void 0 : i.byteLength) != null
                        ? l
                        : 0) +
                      " bytes",
                  }),
                  a != null && r("ZenonE2ee").updateRemoteUserId(a),
                  i != null && (yield r("ZenonE2ee").processE2eeServerState(i)),
                  yield r("ZenonE2ee").verifyDtlsAuthenticationInfo(t));
                try {
                  this.$7(t, "remote");
                  var s = (e || (e = r("performanceNow")))();
                  yield this.$1.setRemoteDescription(t);
                  var u = e() - s;
                  r("ZenonInfraActionsLogger").logCheckpoint({
                    auditId: r("ZenonAuditedCheckpointLogId")
                      .RP_ROOMS_INFRA_WWW__PLATFORM,
                    checkpoint:
                      "[ZP][" +
                      t.getType() +
                      "] Finished setting remote sdp in: " +
                      String(u),
                  });
                } catch (e) {
                  r("ZenonODSLogger").logCounter(d);
                  var c = r("getErrorSafe")(e);
                  throw (
                    this.$8(
                      c,
                      "Failed to set remote sdp",
                      "ZenonSDPManager_setRemoteSdp",
                    ),
                    c
                  );
                }
                return (
                  r("ZenonE2ee").terminateCallIfE2eeViolation(
                    o("FrameEncryptionWasmTypes").ZenonE2eeComponent
                      .POST_REMOTE_SDP,
                    "",
                  ),
                  (this.$3 = t),
                  t
                );
              },
            );
            function a(e, n, r, o) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.applyCodecPreferencesViaAPI = function () {
            if (
              !o("ZenonCodecPreferencesUtils").isSetCodecPreferencesSupported()
            )
              return !1;
            var e = [].concat(r("ZenonSDPCodecRemoval").video_codecs);
            (this.$4.isPreserveH264() || e.push("H264"), e.push("AV1"));
            var t = [/packetization-mode=0/, /profile-level-id=42001f/],
              n = null;
            this.shouldPreferH264Multiway() &&
              (n = this.$4.isPreferSwH264()
                ? o("ZenonCodecPreferencesUtils").createH264Preference({
                    levelAsymmetryAllowed: !0,
                    packetizationMode: !0,
                    profileLevelId: "42e01f",
                  })
                : { clockRate: 9e4, codec: "H264" });
            var a = this.$1.applyFilteredVideoCodecPreferences({
              codecNamesToExclude: e,
              h264FmtpExcludePatterns: t,
              preference: n != null ? n : void 0,
            });
            return a;
          }),
          (a.$8 = function (t, n, o) {
            var e = "[ZP] " + n;
            r("ZenonInfraActionsLogger").logError({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__ERROR,
              checkpoint: e,
              error: t.toString(),
              errorDomain: o,
            });
          }),
          (a.$7 = function (t, n) {
            try {
              var e = btoa(
                r("pako").deflate(t.toLoggingString(), { to: "string" }),
              );
              r("ZenonInfraActionsLogger").logCheckpoint({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__PLATFORM,
                checkpoint:
                  "[ZP][" +
                  t.getType() +
                  "] Set " +
                  n +
                  " description sdp: " +
                  e,
              });
            } catch (e) {
              var o = r("getErrorSafe")(e);
              (r("FBLogger")("rtc_www")
                .catching(o)
                .warn("Failed to log the SDP"),
                r("ZenonInfraActionsLogger").logError({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__ERROR,
                  checkpoint: "[ZP] Failed to log the SDP",
                  error: o.toString(),
                  errorDomain: "ZenonSDPManager_logSdp",
                }));
            }
          }),
          (a.setRemoteIceCandidate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  yield this.$1.setRemoteIceCandidate(e);
                } catch (n) {
                  var t = r("getErrorSafe")(n);
                  throw (
                    r("FBLogger")("rtc_www")
                      .catching(t)
                      .warn(
                        "Failed to setRemoteIceCandidate with ",
                        JSON.stringify(e),
                      ),
                    r("ZenonInfraActionsLogger").logError({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__ERROR,
                      checkpoint: "[ZP] Failed to set remote ice candidate",
                      error: t.toString(),
                      errorDomain: "ZenonSDPManager_setRemoteIceCandidate",
                    }),
                    t
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.closePeerConnection = function () {
            this.$1.close();
          }),
          (a.restartPeerConnection = function () {
            (this.$5.resetRtpHeaderExtensionStatus(), this.$1.restart());
          }),
          (a.$6 = function (t) {
            (t.stripLocalIceCandidates(),
              t.processDTLSOverCrypto(),
              t.stripDataChannel(),
              t.maybeAddPtimeForOpusOnly(60),
              t.addFmtpConfig("H264", "sps-pps-idr-in-keyframe", "1"),
              this.$4.isDisableOpusStereo() &&
                t.addFmtpConfig("opus", "stereo", "0"),
              t.addFmtpConfig("opus", "useinbandfec", "0"),
              t.addFmtpConfig("opus", "usedtx", "1"));
            var e = this.$4.getSetOpusMaxaveragebitrate();
            e > 0 && t.addFmtpConfig("opus", "maxaveragebitrate", e.toString());
            var n = this.$4.getSetOpusMaxplaybackrate();
            (n > 0 && t.addFmtpConfig("opus", "maxplaybackrate", n.toString()),
              t.addAudioNACK(),
              t.isRemote()
                ? (this.$5.setExtensionsSupportedByRemote(t),
                  o("ZenonBrowsers").isFirefox() && t.addSetupActPass())
                : (t.filterExtension(s, "video"),
                  t.filterExtension(u, "video"),
                  this.$5.enableRegisteredExtensions(t)));
          }),
          t
        );
      })();
    l.default = p;
  },
  98,
);
