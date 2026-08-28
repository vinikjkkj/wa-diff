__d(
  "ZenonMediaChannelManager",
  [
    "FBLogger",
    "ODS",
    "Promise",
    "ZenonBrowsers",
    "ZenonE2ee",
    "ZenonE2eeMandatedStateManager",
    "ZenonE2eeWasmWorkerClient",
    "ZenonInsertableStreamsManager",
    "ZenonMediaActionLogger",
    "ZenonMediaStatsManager",
    "ZenonMediaUtils",
    "ZenonRTCVideoResolutionHelper",
    "ZenonScreenShare",
    "ZenonSimulcastManager",
    "ZenonVideoDurationTracker",
    "asyncToGeneratorRuntime",
    "err",
    "promiseDone",
    "shouldUseInsertableStreams",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "negotiationOffStreamId",
      c = "MediaChannelManager",
      d = (function () {
        function t(e) {
          var t = this;
          ((this.$1 = null),
            (this.$13 = !1),
            (this.$2 = e.peerConnection),
            (this.$4 = new Map()),
            (this.$9 = new Map()),
            (this.$10 = new Map()),
            (this.$14 = new Map()),
            (this.$7 = []),
            (this.$6 = new (r("ZenonVideoDurationTracker"))()),
            (this.$5 = new (r("ZenonMediaStatsManager"))({
              areTslogsEnabled: e.areTslogsEnabled,
              dataMessageTranslator: e.dataMessageTranslator,
              mediaStats: e.mediaStats,
              onFirstMediaPacket: e.onFirstMediaPacket,
              onFirstSentMediaPacket: e.onFirstSentMediaPacket,
              onMediaStatUpdate: e.onMediaStatUpdate,
              peerConnection: this.$2,
              tracks: this.$4,
              trackToSenderMap: this.$14,
              videoDurationTracker: this.$6,
            })),
            this.$5.listen(),
            this.$2.addEventListener("track", function (e) {
              (t.transformReceiverFromEvent(e),
                t.addRemoteTrackFromEvent(e),
                t.$15(),
                r("promiseDone")(t.$16()));
            }),
            this.$2.addEventListener("signalingstatechange", function () {
              (r("promiseDone")(t.$16()), t.$17(), t.getCodecFromEvent());
            }),
            this.$2.addEventListener("removestream", function () {
              t.$15(!0);
            }),
            (this.$11 = !0),
            (this.$12 = new Map()),
            r("shouldUseInsertableStreams")() &&
              ((this.$3 = r("ZenonE2ee").getSecureFrameManager()),
              (this.$1 = new (r("ZenonInsertableStreamsManager"))()),
              this.$3 ||
                (s || (s = o("ODS"))).bumpEntityKey(
                  4083,
                  "zenon_e2ee",
                  "secure_frame_manager_null, E2EE MANDATED:" +
                    r("ZenonE2eeMandatedStateManager")
                      .isInfraE2eeMandated()
                      .toString(),
                )));
        }
        var a = t.prototype;
        return (
          (a.onLocalSdpSet = function (t) {
            r("ZenonE2ee").onLocalSdpSet(t);
          }),
          (a.stopStatsPolling = function () {
            this.$5.stopPolling();
          }),
          (a.getTracks = function () {
            return this.$4;
          }),
          (a.clearTracks = function () {
            (this.$4.clear(), this.$14.clear(), this.$17());
          }),
          (a.$15 = function (t) {
            (t === void 0 && (t = !1),
              r(
                "ZenonRTCVideoResolutionHelper",
              ).maybeLimitEncodingResolutionByParticipantCount(
                this.$2.getSenders(),
                this.$2.getReceivers(),
                this.$2.getTransceivers(),
                this.$2.supportsSimulcast(),
                t,
              ));
          }),
          (a.removeMissingTracks = function (t) {
            var e = this;
            this.$4.forEach(function (n, r) {
              n.remote &&
                t.find(function (e) {
                  return e === r;
                }) == null &&
                e.removeTrack(r);
            });
          }),
          (a.updateTrackInfo_DEPRECATED = function (t) {
            var e = this.$4.get(t.trackID);
            if (e == null) {
              this.$12.set(t.trackID, t);
              return;
            }
            var n = this.$18(e, t);
            (this.$4.set(t.trackID, n), this.$17());
          }),
          (a.updateTrackInfos = function (t) {
            var e = this;
            (t.tracks.forEach(function (t) {
              var n = t.trackID;
              if (!(n === "data" || n === "stream_label")) {
                var r = e.$4.get(n);
                if (r == null) {
                  e.$12.set(n, t);
                  return;
                }
                var o = e.$18(r, t);
                e.$4.set(n, o);
              }
            }),
              this.$17());
          }),
          (a.updateMuteStates = function (t) {
            var e = this;
            (t.tracks.forEach(function (t) {
              var n = t.enabled,
                r = t.trackID;
              n ? e.unmuteTrack(r, !1) : e.muteTrack(r, !1);
            }),
              this.$17());
          }),
          (a.$18 = function (t, n) {
            var e;
            if (
              (t.contentType === "audio" && n.type !== "screen_audio") ||
              o("ZenonScreenShare").screenShareWithReplaceTrack()
            )
              return t;
            var a = t.webrtcStream,
              i = a.getVideoTracks().length > 1;
            return (
              n.type === "screen" &&
                i &&
                ((a = r("ZenonMediaUtils").createStreamWithTrack(
                  t.webrtcTrack,
                )),
                t.webrtcStream.removeTrack(t.webrtcTrack)),
              {
                contentHint: t.contentHint,
                contentType: (e = n.type) != null ? e : t.contentType,
                enabled: t.enabled,
                flags: Object.freeze({}),
                label: t.label,
                name: "",
                pausedDownlink: !1,
                remote: t.remote,
                trackId: n.trackID,
                userMuted: !1,
                webrtcStream: a,
                webrtcTrack: t.webrtcTrack,
              }
            );
          }),
          (a.getLocalTracksForMWS = function () {
            var e = this,
              t = new Map(),
              n = this.$2.getTransceivers();
            return (
              this.$4.forEach(function (r, o) {
                if (!r.remote) {
                  var a,
                    i,
                    l,
                    s,
                    u,
                    c =
                      (a = (i = e.$14.get(o)) == null ? void 0 : i.trackId) !=
                      null
                        ? a
                        : o,
                    d =
                      (l =
                        (s = n.find(function (e) {
                          var t;
                          return (
                            ((t = e.sender.track) == null ? void 0 : t.id) === c
                          );
                        })) == null
                          ? void 0
                          : s.mid) != null
                        ? l
                        : null,
                    m = (u = e.$2.getLocalMWTrackId(d)) != null ? u : o,
                    p = babelHelpers.extends({}, r, { trackId: m });
                  t.set(m, p);
                }
              }),
              t
            );
          }),
          (a.addTrack = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (e.contentType === "video" && e.remote === !1 && (this.$8 = e),
                  yield this.$19(e, t),
                  this.$17());
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.transformSender = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                this.$1 != null && (yield this.$1.setupSenderTransform(e, t));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.transformReceiverFromEvent = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.receiver,
                  o = this.$2.getCnameFromTrackId(e.track.id);
                this.$1 != null &&
                  (o == null &&
                    r("ZenonMediaActionLogger").logCheckpoint(
                      "Failed to find Cname for the remote track: " +
                        e.track.id,
                    ),
                  yield (t = this.$1) == null
                    ? void 0
                    : t.setupReceiverTransform(o != null ? o : u, n));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.addReceiveOnlyVideoTransceiverIfMissing = function () {
            this.$20("video", "recvonly");
          }),
          (a.addSendRecvVideoTransceiverIfMissing = function () {
            this.$20("video", "sendrecv");
          }),
          (a.addAudioTrackOrRecvOnlyTransceiverIfMissing = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = 0;
                if (
                  (this.$4.forEach(function (e, n) {
                    e.remote || t++;
                  }),
                  t === 0)
                ) {
                  var n = r("ZenonMediaUtils").createSilentTrack();
                  yield this.addTrack(n, e);
                } else this.addReceiveOnlyAudioTransceiverIfMissing();
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.addReceiveOnlyAudioTransceiverIfMissing = function () {
            this.$20("audio", "recvonly");
          }),
          (a.$20 = function (t, n) {
            var e = !1;
            (this.$4.forEach(function (n, r) {
              if (
                n.contentType === t ||
                (t === "video" && n.contentType === "screen")
              ) {
                e = !0;
                return;
              }
            }),
              !e && this.$2.addTransceiver(t, { direction: n }));
          }),
          (a.addReceiveOnlyVideoTransceiverIfNeeded = function (t, n) {
            this.$21("video", "recvonly", t, n);
          }),
          (a.addInactiveAudioTransceiverIfNeeded = function () {
            this.$21("audio", "inactive");
          }),
          (a.$21 = function (t, n, r, a) {
            var e = !1;
            (this.$4.forEach(function (n, r) {
              if (n.contentType === t) {
                e = !0;
                return;
              }
            }),
              !(
                e ||
                (o("ZenonBrowsers").noTransceiverForNegotiations() &&
                  a !== !0 &&
                  r === "p2p")
              ) && this.$2.addTransceiver(t, { direction: n }));
          }),
          (a.removeTrack = function (t) {
            var e = this.$4.get(t);
            if (e != null)
              if (
                (this.$22(e), this.$17(), r("ZenonE2ee").shouldUseE2eeWorker())
              )
                r("ZenonE2eeWasmWorkerClient").freeEncryptorAndDecryptorForId(
                  t,
                );
              else {
                var n;
                (n = this.$3) == null || n.freeEncryptorAndDecryptorForId(t);
              }
          }),
          (a.replaceTrack = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var a;
                n === void 0 && (n = !1);
                var i = this.$4.get(e);
                if (i != null) {
                  if (
                    o("ZenonScreenShare").isScreenSharingTrack([i]) &&
                    !o("ZenonScreenShare").isScreenSharingTrack([t]) &&
                    this.$8 != null
                  ) {
                    if ((yield this.$23(i, this.$8), this.$11)) {
                      var l, s;
                      this.unmuteTrack(
                        (l = (s = this.$8) == null ? void 0 : s.trackId) != null
                          ? l
                          : "",
                      );
                    } else {
                      var u, d;
                      this.muteTrack(
                        (u = (d = this.$8) == null ? void 0 : d.trackId) != null
                          ? u
                          : "",
                      );
                    }
                    (r("ZenonRTCVideoResolutionHelper").handleStopScreenSharing(
                      this.$2.getSenders(),
                      this.$2.getReceivers(),
                      this.$2.getTransceivers(),
                      this.$2.supportsSimulcast(),
                    ),
                      i.webrtcTrack.stop(),
                      i.webrtcTrack.readyState !== "ended" &&
                        r("ZenonMediaActionLogger").logErrorToFbLogger(
                          "ZenonMediaChannelManager: Stopping trackToReplace failed: " +
                            i.label,
                          c,
                          r("err")(
                            "Stopping trackToReplace failed: " + i.label,
                          ),
                          "warn",
                        ));
                  } else if (
                    t != null &&
                    o("ZenonScreenShare").isScreenSharingTrack([t]) &&
                    e === ((a = this.$8) == null ? void 0 : a.trackId) &&
                    this.$8 != null
                  )
                    ((this.$11 =
                      this.$8.enabled && this.$8.webrtcTrack.enabled),
                      yield this.$23(this.$8, t),
                      this.unmuteTrack(t.trackId),
                      r(
                        "ZenonRTCVideoResolutionHelper",
                      ).handleStartScreenSharing(
                        this.$2.getSenders(),
                        this.$2.getReceivers(),
                        this.$2.getTransceivers(),
                        this.$2.supportsSimulcast(),
                      ));
                  else if (t != null) {
                    var m;
                    (((this.$8 == null && t.contentType === "video") ||
                      ((m = this.$8) == null ? void 0 : m.trackId) === e) &&
                      (this.$8 = t),
                      yield this.$23(i, t),
                      i.trackId !== t.trackId &&
                        !n &&
                        (i.webrtcTrack.stop(),
                        i.webrtcTrack.readyState !== "ended" &&
                          r("ZenonMediaActionLogger").logErrorToFbLogger(
                            "ZenonMediaChannelManager: Stopping trackToReplace failed: " +
                              i.label,
                            c,
                            r("err")(
                              "Stopping trackToReplace failed: " + i.label,
                            ),
                            "warn",
                          )));
                  }
                  (this.$15(), this.$17());
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.addRemoteTrackFromEvent = function (t) {
            var e = t.transceiver,
              n = this.$2.getRemoteMWTrackId(e.mid),
              o = r("ZenonMediaUtils").convertToZenonImmutableMediaTrack(
                t.track,
                {
                  isRemote: !0,
                  isUserMuted: !1,
                  stream: t.streams ? t.streams[0] : null,
                },
                n,
              ),
              a = this.$12.get(o.trackId);
            a != null && ((o = this.$18(o, a)), this.$12.delete(o.trackId));
            var i = this.$9.get(o.trackId);
            (i != null &&
              (o.contentType !== "audio" &&
                ((o.webrtcTrack.enabled = i.enabled),
                (o = babelHelpers.extends({}, o, { enabled: i.enabled }))),
              (o = babelHelpers.extends({}, o, { userMuted: i.userMuted })),
              this.$9.delete(o.trackId)),
              this.$4.set(o.trackId, o),
              this.$17(),
              this.$5.onRemoteTrackAdded(o));
          }),
          (a.createDataChannel = function (t, n, r, o, a) {
            this.$2.createDataChannel(t, n, r, o, a);
          }),
          (a.muteTrack = function (t, n) {
            (n === void 0 && (n = !0), this.$24(t, !0, n));
          }),
          (a.$24 = function (t, n, r) {
            var e = this.$4.get(t),
              o = e === this.$8;
            if (e == null) {
              this.$9.set(t, { enabled: !n, userMuted: n });
              return;
            }
            var a = e;
            (e.userMuted !== n &&
              (a = babelHelpers.extends({}, a, { userMuted: n })),
              (n
                ? !(!a.enabled && !a.webrtcTrack.enabled)
                : !(a.enabled && a.webrtcTrack.enabled)) &&
                ((a.webrtcTrack.enabled = !n),
                (a = babelHelpers.extends({}, a, { enabled: !n }))),
              o && (this.$8 = a),
              e !== a && (this.$4.set(a.trackId, a), r && this.$17()));
          }),
          (a.unmuteTrack = function (t, n) {
            (n === void 0 && (n = !0), this.$24(t, !1, n));
          }),
          (a.forceEncodingEnabled = function (r) {
            return r === this.$13
              ? (e || (e = n("Promise"))).resolve()
              : ((this.$13 = r), this.$16());
          }),
          (a.setSimulcastSingleLayerParams = function () {
            if (
              this.$2.supportsSimulcast() &&
              !this.$2.getSimulcastInitialized()
            ) {
              var e = this.$2.getSenders().filter(function (e) {
                return e.track && e.track.kind === "video";
              });
              if (e.length !== 0) {
                var t = e[0];
                if ("getParameters" in t && "setParameters" in t) {
                  var n = o(
                    "ZenonSimulcastManager",
                  ).getSimulcastSingleLayerParameters(t.getParameters());
                  if (this.$25(t)) return;
                  (r("promiseDone")(t.setParameters(n)),
                    this.$2.setSimulcastInitialized(!0));
                }
              }
            }
          }),
          (a.stopLocalTracks = function () {
            if (
              (this.$4.forEach(function (e) {
                e.remote === !1 &&
                  (r("ZenonMediaActionLogger").logCheckpoint(
                    "stopping track: " + e.label,
                  ),
                  e.webrtcTrack.stop(),
                  e.webrtcTrack.readyState !== "ended" &&
                    r("ZenonMediaActionLogger").logErrorToFbLogger(
                      "ZenonMediaChannelManager: Stopping track failed: " +
                        e.label,
                      c,
                      r("err")("Stopping track failed: " + e.label),
                      "warn",
                    ));
              }),
              this.$8 != null && !this.$4.has(this.$8.trackId))
            ) {
              var e, t, n;
              (r("ZenonMediaActionLogger").logCheckpoint(
                "stopping local video track: " +
                  ((e = (t = this.$8) == null ? void 0 : t.label) != null
                    ? e
                    : ""),
              ),
                (n = this.$8) == null || n.webrtcTrack.stop(),
                this.$8 &&
                  this.$8.webrtcTrack.readyState !== "ended" &&
                  r("ZenonMediaActionLogger").logErrorToFbLogger(
                    "ZenonMediaChannelManager: Stopping local video track failed: " +
                      this.$8.label,
                    c,
                    r("err")(
                      "Stopping local video track failed: " + this.$8.label,
                    ),
                    "warn",
                  ));
            }
            if ((this.$17(), r("ZenonE2ee").shouldUseE2eeWorker()))
              r("ZenonE2eeWasmWorkerClient").freeAllEncryptorsAndDecryptors();
            else {
              var o;
              (o = this.$3) == null || o.freeAllEncryptorsAndDecryptors();
            }
          }),
          (a.stopLocalTrack = function (t) {
            var e = this.$4.get(t);
            e != null &&
              (e.remote ||
                (e.webrtcTrack.stop(),
                e.webrtcTrack.readyState !== "ended" &&
                  r("ZenonMediaActionLogger").logErrorToFbLogger(
                    "ZenonMediaChannelManager: Stopping local track failed: " +
                      e.label,
                    c,
                    r("err")("Stopping local track failed: " + e.label),
                    "warn",
                  )));
          }),
          (a.setNetworkStatusListener = function (t) {
            this.$5.setNetworkStatusListener(t);
          }),
          (a.registerTrackListener = function (t) {
            this.$7.push(t);
          }),
          (a.setTrackListenersFromManager = function (t) {
            this.$7 = t.$7;
          }),
          (a.timeSeries = function () {
            return this.$5.timeSeries();
          }),
          (a.resetTimeSeries = function () {
            this.$5.resetTimeSeries();
          }),
          (a.$19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e;
                (this.$10.set(e.trackId, n.trackId),
                  this.$14.set(e.trackId, n));
                var r = yield this.$26(n, t);
                (yield this.transformSender(r, n.contentType),
                  this.$4.set(e.trackId, e));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$26 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (t === "p2p") {
                  var n = this.$2.getTransceivers().find(function (t) {
                    var n = t.sender.track,
                      r = t.receiver.track;
                    return t.currentDirection === "inactive"
                      ? !1
                      : n !== null &&
                          r == null &&
                          n.kind === e.contentType &&
                          e.remote
                        ? !0
                        : r !== null &&
                          n == null &&
                          r.kind === e.contentType &&
                          e.remote === !1;
                  });
                  return n != null
                    ? ((n.direction = "sendrecv"),
                      yield n.sender.replaceTrack(e.webrtcTrack),
                      n.sender)
                    : this.$2.addTrack(e.webrtcTrack, e.webrtcStream);
                }
                return this.$2.addTransceiver(e.webrtcTrack, {
                  direction: "sendrecv",
                  streams: [e.webrtcStream],
                }).sender;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$22 = function (t) {
            (this.$4.delete(t.trackId),
              this.$14.delete(t.trackId),
              t.remote ||
                (this.$2.removeTrack(t.webrtcTrack), t.webrtcTrack.stop()));
          }),
          (a.$23 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  o,
                  a = (n = this.$14.get(e.trackId)) != null ? n : e,
                  i = this.$2.getSenders().find(function (t) {
                    var n, r;
                    return (
                      ((n = t.track) == null ? void 0 : n.id) ===
                        e.webrtcTrack.id ||
                      a.trackId === ((r = t.track) == null ? void 0 : r.id)
                    );
                  });
                if (i === void 0)
                  throw r("err")("track to be replaced is not found");
                var l = this.$10.get(e.trackId);
                (l != null ? this.$10.delete(e.trackId) : (l = e.trackId),
                  this.$14.delete(e.trackId));
                var s = t;
                (yield i.replaceTrack(s.webrtcTrack),
                  this.$10.set(t.trackId, l),
                  this.$14.set(t.trackId, s),
                  this.$4.delete(e.trackId),
                  this.$4.set(t.trackId, t),
                  (o = this.$3) == null ||
                    o.updateLocalTrackIdForStats(l, t.trackId));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = function () {
            (this.$6.update(this.$4),
              this.$7.forEach(function (e) {
                e();
              }));
          }),
          (a.$25 = function (t) {
            var e = this.$2.getTransceiverFromSender(t);
            return !!(e && e.stopped);
          }),
          (a.$27 = function () {
            for (
              var e = !1, t = this.getTracks().values(), n = t.next();
              !n.done && !e;
            )
              ((e = n.value.remote), (n = t.next()));
            return this.$13 || e;
          }),
          (a.$16 = function () {
            var t = this,
              o = this.$27();
            return (
              this.$2.getSenders().forEach(function (a) {
                if (
                  t.$25(a) ||
                  !("getParameters" in a) ||
                  !("setParameters" in a)
                )
                  return (e || (e = n("Promise"))).resolve();
                var i = a.getParameters(),
                  l = !1;
                if (i.encodings != null)
                  for (var s = 0; s < i.encodings.length; s++)
                    (s === 0 || !o) &&
                      i.encodings[s].active !== o &&
                      ((i.encodings[s].active = o), (l = !0));
                if (l)
                  return a.setParameters(i).catch(function (e) {
                    r("FBLogger")("rtc_www")
                      .catching(e)
                      .mustfix("Error while trying to toggle encoding");
                  });
              }),
              (e || (e = n("Promise"))).resolve()
            );
          }),
          (a.getCodecFromEvent = function () {
            var e = this;
            if (r("ZenonE2ee").isE2eeStackReady()) {
              var t = this.$2.getSignalingState();
              (t !== "have-remote-offer" && t !== "stable") ||
                (this.$2.getReceivers().forEach(function (t) {
                  e.$28(t);
                }),
                this.$2.getSenders().forEach(function (t) {
                  var n = e.$29(t),
                    o = t.track;
                  if (!(o == null || n == null))
                    if (r("ZenonE2ee").shouldUseE2eeWorker())
                      r("ZenonE2eeWasmWorkerClient").setEncryptorCodec(o.id, n);
                    else {
                      var a;
                      (a = e.$3) == null ||
                        a.setFrameDataHandlerOnEncryptor(o.id, n);
                    }
                }));
            }
          }),
          (a.$28 = function (t) {
            if ("getParameters" in t && t.track != null) {
              var e = t.track.id,
                n = t.getParameters(),
                o = new Set();
              if (n.codecs == null || n.codecs.length === 0) return;
              var a = n.codecs[0].mimeType;
              if (
                (n.codecs.forEach(function (e) {
                  o.add(e.mimeType);
                }),
                r("ZenonE2ee").shouldUseE2eeWorker())
              )
                r("ZenonE2eeWasmWorkerClient").setDecryptorCodec(e, o);
              else {
                var i;
                (i = this.$3) == null ||
                  i.setFrameDataHandlerTypesOnDecryptor(e, o);
              }
              return a;
            }
          }),
          (a.$29 = function (t) {
            if ("getParameters" in t && t.track != null) {
              var e = t.getParameters();
              if (e.codecs != null && e.codecs.length !== 0)
                return e.codecs[0].mimeType;
            }
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
