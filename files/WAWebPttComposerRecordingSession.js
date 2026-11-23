__d(
  "WAWebPttComposerRecordingSession",
  [
    "fbt",
    "invariant",
    "WAAbortError",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAPromiseRaceAbort",
    "WAPttComposerRecorder",
    "WAPttComposerScaleWaveform",
    "WARandomHex",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBaseModel",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoRandomMediaKey",
    "WAWebFrontendChatGetters",
    "WAWebGetUserMediaErrors",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaHosts",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMmsClientUploadStreamer",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPrepRawMedia",
    "WAWebPresenceChatAction",
    "WAWebPresenceCollection",
    "WAWebPttAudioChannels",
    "WAWebPttAudioManager",
    "WAWebPttComposerRecordingSessionGetters",
    "WAWebPttComposerRecordingStopReason",
    "WAWebPttComposerStreamingEncryptor",
    "WAWebPttDailyUtils",
    "WAWebPttMicrophoneRecovery.react",
    "WAWebPttWamEvent",
    "WAWebRecordingSessionStateEnum",
    "WAWebStartMediaUploadQpl",
    "WAWebTimeSpentLoggingExternal",
    "WAWebUploadStreamerRefactorGatingUtils",
    "WAWebWamEnumPttResultType",
    "WAWebWamEnumPttSourceType",
    "WAWebWamEnumTsExternalEventSource",
    "WAWebWamMediaMetricUtils",
    "err",
    "getErrorSafe",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
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
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w = M || (M = o("react")),
      A = 1,
      F = 8.5,
      O = 64,
      B = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.duration = o("WAWebBaseModel").prop(0)),
            (e.exceedsMinDuration = o("WAWebBaseModel").prop(!1)),
            (e.isViewOnce = o("WAWebBaseModel").prop(!1)),
            (e.recordingState = o("WAWebBaseModel").prop(
              o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .NOT_STARTED,
            )),
            (e._hasStreamingUploadFailed = o("WAWebBaseModel").prop(!1)),
            (e._draftPreviewSeen = o("WAWebBaseModel").prop(!1)),
            (e._draftPlayCount = o("WAWebBaseModel").prop(0)),
            (e._draftSeekCount = o("WAWebBaseModel").prop(0)),
            (e._pauseCount = o("WAWebBaseModel").prop(0)),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            var e = this;
            t.prototype.initialize.call(this);
            var n = null;
            this.on("change:recordingState", function () {
              (e._endTsExternalEvent == null || e._endTsExternalEvent(),
                e._chat != null &&
                  (o("WAWebPttComposerRecordingSessionGetters").getIsRecording(
                    e,
                  )
                    ? ((n = o("WAWebPttAudioChannels").MainAudioChannel.claim(
                        e,
                        function () {
                          e.pause();
                        },
                      )),
                      o("WAWebPresenceChatAction").markRecording(e._chat),
                      (e._endTsExternalEvent = o(
                        "WAWebTimeSpentLoggingExternal",
                      ).beginTsExternalEvent(
                        o("WAWebWamEnumTsExternalEventSource")
                          .TS_EXTERNAL_EVENT_SOURCE.PTT_RECORD,
                      )))
                    : (n == null || n(),
                      o("WAWebPresenceChatAction").markPaused(e._chat))));
            });
          }),
          (a.start = async function (n) {
            var t = this;
            switch (this.recordingState) {
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .NOT_STARTED:
                break;
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .RECORDING:
                return !0;
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .PAUSED:
                return this.resume();
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .STOPPED:
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .ERROR:
                throw r("err")(
                  "Can't start recording from state " + this.recordingState,
                );
            }
            this._uploadQpl = o("WAWebStartMediaUploadQpl").startMediaUploadQpl(
              {
                entryPoint: "PttStreamingUpload",
                mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                isStreamingUpload: !0,
              },
            );
            var a = r("WAWebCreateMediaUploadMetrics")({
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(this._chat),
                fileOrigin: null,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                isViewOnce: !1,
                uploadQpl: this._uploadQpl,
              }),
              i = a.handleEncryptionStart,
              l = a.handleEncryptionSuccess,
              s = a.handleSendMessageStart,
              u = a.handleStreamUploadStart,
              f = a.handleUploadAttemptError,
              g = a.handleUploadAttemptSuccess,
              h = a.handleUploadError,
              y = a.handleUploadHostFound,
              C = a.handleUploadProgress,
              b = a.handleUploadSuccess;
            this._handleSendMessageStart = s;
            try {
              if (
                o(
                  "WAWebUploadStreamerRefactorGatingUtils",
                ).isUploadStreamerRefactorEnabled()
              ) {
                var v = r("WAWebCryptoRandomMediaKey")();
                this._earlyUploadPromise = new Promise(function (e) {
                  t._resolveEarlyUploadPromise = e;
                });
                var S = new AbortController();
                this._uploaderAbortController = S;
                var R = await o("WAMediaCalculateFilehash").getRandomFilehash(),
                  L = new (o("WAWebMmsClientUploadStreamer").UploadStreamer)(
                    {
                      encFilehash: R,
                      token: R,
                      type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                      signal: S.signal,
                      byteOffset: 0,
                      onUploadHostFound: y,
                      onUploadAttemptSuccess: g,
                      onUploadAttemptError: f,
                      onProgress: function (t, n) {
                        C(t.loaded + n);
                      },
                      onStreamUploadStart: u,
                      mediaId: o(
                        "WAWebWamMediaMetricUtils",
                      ).generateMediaEventId(),
                    },
                    { mediaHosts: o("WAWebMediaHosts").mediaHosts },
                  );
                (L.startUploadFromClient(),
                  (this._encryptor = await o(
                    "WAWebPttComposerStreamingEncryptor",
                  ).createStreamingEncryptor({
                    mediaKey: v.key,
                    onChunkEncrypted: async function (a) {
                      try {
                        await L.uploadChunkFromClient(a);
                      } catch (a) {
                        var n = r("getErrorSafe")(a);
                        if (
                          (t._resolveEarlyUploadPromise == null ||
                            t._resolveEarlyUploadPromise(null),
                          (t._hasStreamingUploadFailed = !0),
                          n.name === o("WAAbortError").ABORT_ERROR)
                        )
                          return;
                        (o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "onChunkEncrypted: ptt-streaming-upload-error",
                              ])),
                          )
                          .catching(n),
                          o("WALogger")
                            .ERROR(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "PTT Streaming Upload cancelled due to a problem uploading",
                                ])),
                            )
                            .sendLogs("ptt-streaming-upload-failed"),
                          h(n));
                      }
                    },
                    onEncryptionCompleted: async function (n, a) {
                      l();
                      try {
                        await L.uploadChunkFromClient(new Uint8Array(n));
                        var e = await L.finalizeUploadFromClient(a);
                        (t._resolveEarlyUploadPromise == null ||
                          t._resolveEarlyUploadPromise({
                            directPath: e.directPath,
                            mediaKey: v.key,
                            mediaKeyTimestamp: v.timestamp,
                            encFilehash: a,
                            url: e.url,
                          }),
                          b());
                      } catch (e) {
                        var i = r("getErrorSafe")(e);
                        if (
                          (t._resolveEarlyUploadPromise == null ||
                            t._resolveEarlyUploadPromise(null),
                          (t._hasStreamingUploadFailed = !0),
                          i.name === o("WAAbortError").ABORT_ERROR)
                        )
                          return;
                        (o("WALogger")
                          .ERROR(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "onEncryptionCompleted: ptt-streaming-upload-error",
                              ])),
                          )
                          .catching(i),
                          o("WALogger")
                            .ERROR(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "PTT Streaming Upload cancelled due to a problem when finalizing upload",
                                ])),
                            )
                            .sendLogs("ptt-streaming-upload-failed"),
                          h(i));
                      }
                    },
                  })));
              }
            } catch (e) {
              var E;
              throw (
                (E = this._uploadQpl) == null ||
                  E.endFailWithError(
                    "upload_setup_failed",
                    r("getErrorSafe")(e).message,
                  ),
                (this._uploadQpl = null),
                e
              );
            }
            try {
              var k,
                I = !0,
                T = n == null ? void 0 : n.microphoneRecovery;
              this._recorder = new (r("WAPttComposerRecorder"))({
                createStream: function (t) {
                  var e = T;
                  return ((T = null), V(t, e));
                },
                waveformSampleRate: this.getWaveformSampleRate(),
                onDuration: function (n) {
                  ((t.duration = n), (t.exceedsMinDuration = n >= A));
                },
                onPage: function (n, r) {
                  if (
                    !(
                      !o(
                        "WAWebUploadStreamerRefactorGatingUtils",
                      ).isUploadStreamerRefactorEnabled() ||
                      t._hasStreamingUploadFailed
                    )
                  )
                    try {
                      var e;
                      (I && (i(), (I = !1)),
                        (e = t._encryptor) == null || e.encryptChunk(n, r));
                    } catch (e) {
                      (o("WALogger").ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "PTT Streaming Upload cancelled due to a problem encrypting",
                          ])),
                      ),
                        t._resolveEarlyUploadPromise == null ||
                          t._resolveEarlyUploadPromise(null),
                        (t._hasStreamingUploadFailed = !0));
                    }
                },
              });
              var D = await this._recorder.start();
              if (D)
                return (
                  (this.recordingState = o(
                    "WAWebRecordingSessionStateEnum",
                  ).RecordingSessionState.RECORDING),
                  o("WAWebAppTracker").AppTracker.start(
                    o("WAWebAppTracker").AppTrackerType.RecordPTT,
                  ),
                  o("WAWebPresenceCollection").PresenceCollection.update(
                    this._chat.presence.id,
                  ),
                  o("WAWebPttDailyUtils").incrementPttDailyCount(
                    o("WAWebPttDailyUtils").PttDailyCountKind.RECORD,
                    r("nullthrows")(
                      o("WAWebFrontendChatGetters").getKind(this._chat),
                    ),
                  ),
                  !0
                );
              ((k = this._uploadQpl) == null ||
                k.endFailWithError(
                  "recording_failed",
                  "recorder_did_not_start",
                ),
                (this._uploadQpl = null));
            } catch (e) {
              var x;
              ((x = this._uploadQpl) == null ||
                x.endFailWithError(
                  "recording_failed",
                  r("getErrorSafe")(e).message,
                ),
                (this._uploadQpl = null),
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "PTT Recording Error",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)));
            }
            return (
              this._endSession(),
              (this.recordingState = o(
                "WAWebRecordingSessionStateEnum",
              ).RecordingSessionState.ERROR),
              this._releaseGetterCache(),
              !1
            );
          }),
          (a.getLiveWaveformSamples = function () {
            var e, t;
            return (e =
              (t = this._recorder) == null
                ? void 0
                : t.getLiveWaveformSamples()) != null
              ? e
              : [];
          }),
          (a.getCorrectedWaveformSamples = function () {
            var e, t;
            return (e =
              (t = this._recorder) == null
                ? void 0
                : t.getCorrectedWaveformSamples()) != null
              ? e
              : [];
          }),
          (a.getScaledWaveformSamples = function () {
            return r("WAPttComposerScaleWaveform")(
              this.getCorrectedWaveformSamples(),
              O,
            ).map(function (e) {
              return Math.floor(e * 100);
            });
          }),
          (a.getPreciseDuration = function () {
            var e, t;
            return (e =
              (t = this._recorder) == null ? void 0 : t.getPreciseDuration()) !=
              null
              ? e
              : 0;
          }),
          (a._endSession = function () {
            var e;
            (e = this._recorder) == null || e.stop();
          }),
          (a._releaseGetterCache = function () {
            o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_2") &&
              o(
                "WAWebPttComposerRecordingSessionGetters",
              ).clearRecordingSessionGetterCacheFor(this);
          }),
          (a._endUploadQpl = function (t) {
            if (this._uploadQpl != null) {
              var e = this._uploadQpl;
              ((this._uploadQpl = null),
                t ===
                o("WAWebPttComposerRecordingStopReason")
                  .RecordingSessionStopReason.SENT
                  ? this._hasStreamingUploadFailed
                    ? e.endFailWithError(
                        "upload_failed",
                        "streaming_upload_failed",
                      )
                    : e.endSuccess()
                  : t ===
                      o("WAWebPttComposerRecordingStopReason")
                        .RecordingSessionStopReason.PTT_TOO_SHORT
                    ? e.endFailWithError("upload_canceled", "ptt_too_short")
                    : t ===
                        o("WAWebPttComposerRecordingStopReason")
                          .RecordingSessionStopReason.CANCEL_BUTTON
                      ? e.endFailWithError("upload_canceled", "aborted")
                      : e.endFailWithError("upload_canceled", "other"));
            }
          }),
          (a.pause = function () {
            if (
              this.recordingState ===
              o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .RECORDING
            ) {
              if (!this.exceedsMinDuration) {
                this.stop(
                  o("WAWebPttComposerRecordingStopReason")
                    .RecordingSessionStopReason.PTT_TOO_SHORT,
                );
                return;
              }
              ((this.recordingState = o(
                "WAWebRecordingSessionStateEnum",
              ).RecordingSessionState.PAUSED),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.RecordPTT,
                ));
              var e = r("nullthrows")(this._recorder);
              e.pause();
            }
          }),
          (a.resume = async function () {
            switch (this.recordingState) {
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .RECORDING:
                return !0;
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .PAUSED:
                break;
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .NOT_STARTED:
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .STOPPED:
              case o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .ERROR:
                throw r("err")(
                  "Can't resume recording from state " + this.recordingState,
                );
            }
            this.recordingState = o(
              "WAWebRecordingSessionStateEnum",
            ).RecordingSessionState.RECORDING;
            try {
              var e = r("nullthrows")(this._recorder),
                t = await e.resume();
              return t
                ? (o("WAWebAppTracker").AppTracker.start(
                    o("WAWebAppTracker").AppTrackerType.RecordPTT,
                  ),
                  !0)
                : ((this.recordingState = o(
                    "WAWebRecordingSessionStateEnum",
                  ).RecordingSessionState.PAUSED),
                  !1);
            } catch (e) {
              return (
                (this.recordingState = o(
                  "WAWebRecordingSessionStateEnum",
                ).RecordingSessionState.ERROR),
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Error resuming recording session",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                !1
              );
            }
          }),
          (a.stop = function (t) {
            if (
              this.recordingState !==
                o("WAWebRecordingSessionStateEnum").RecordingSessionState
                  .STOPPED &&
              ((this.recordingState = o(
                "WAWebRecordingSessionStateEnum",
              ).RecordingSessionState.STOPPED),
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.RecordPTT,
              ),
              this._endSession(),
              this._endUploadQpl(t),
              this._releaseGetterCache(),
              this._recorder != null)
            ) {
              (t ===
              o("WAWebPttComposerRecordingStopReason")
                .RecordingSessionStopReason.SENT
                ? o("WAWebPttDailyUtils").incrementPttDailyCount(
                    o("WAWebPttDailyUtils").PttDailyCountKind.SEND,
                    r("nullthrows")(
                      o("WAWebFrontendChatGetters").getKind(this._chat),
                    ),
                  )
                : this.duration > A &&
                  o("WAWebPttDailyUtils").incrementPttDailyCount(
                    o("WAWebPttDailyUtils").PttDailyCountKind.CANCEL,
                    r("nullthrows")(
                      o("WAWebFrontendChatGetters").getKind(this._chat),
                    ),
                  ),
                t !==
                  o("WAWebPttComposerRecordingStopReason")
                    .RecordingSessionStopReason.SENT &&
                  this._uploaderAbortController &&
                  this._uploaderAbortController.abort());
              var e = U(t);
              e != null && this._sendPttWamEvent(e);
            }
          }),
          (a._getDataForSending = async function () {
            try {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebPttComposerRecordingSession: _getDataForSending started",
                  ])),
              );
              var e = r("nullthrows")(this._recorder),
                t = await e.getCompleteRecording();
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebPttComposerRecordingSession: Got complete recording, size: ",
                    " bytes, type: ",
                    "",
                  ])),
                t.size,
                t.type,
              );
              var n = await r("WAWebMediaOpaqueData").createFromData(t, t.type);
              return (
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebPttComposerRecordingSession: Created OpaqueData successfully",
                    ])),
                ),
                n
              );
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebPttComposerRecordingSession: Error in _getDataForSending",
                    ])),
                ),
                e
              );
            }
          }),
          (a._getDataForPlayback = async function () {
            var e = r("nullthrows")(this._recorder),
              t = await e.getPartialRecording(),
              n = await o("WAWebMediaLoad").transcode(t);
            return r("WAWebMediaOpaqueData").createFromData(n, n.type);
          }),
          (a.getAudioForPlayback = function () {
            var e = this;
            return new H(function () {
              return e._getDataForPlayback();
            });
          }),
          (a.getWaveformSampleRate = function () {
            return F;
          }),
          (a.send = async function (t) {
            var e = t.isQuestion,
              n = e === void 0 ? !1 : e,
              a = t.isViewOnce,
              i = a === void 0 ? !1 : a,
              l = t.isWamoSub,
              s = t.onMsgKeyCreated,
              u = t.questionReplyQuotedMessage,
              c = t.threadId;
            try {
              var d, m;
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebPttComposerRecordingSession: send started with isViewOnce=",
                    ", isWamoSub=",
                    "",
                  ])),
                i,
                l,
              ),
                (d = this._handleSendMessageStart) == null || d.call(this, i),
                this._recorder ||
                  o("WALogger").ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Recorder is null in send method",
                      ])),
                  ));
              var p = r("nullthrows")(this._recorder),
                _ = this._chat;
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebPttComposerRecordingSession: Getting data for sending",
                  ])),
              );
              var f = r("WAPromiseRaceAbort")(
                  this._getDataForSending(),
                  _.getDeleteSignal(),
                ),
                g =
                  ((m = _.getComposeContents()) == null
                    ? void 0
                    : m.ctwaContext) || void 0;
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebPttComposerRecordingSession: Before prepRawMedia, duration=",
                    ", waveform samples=",
                    "",
                  ])),
                Math.floor(p.getDuration()),
                this.getScaledWaveformSamples().length,
              );
              var h;
              try {
                ((h = o("WAWebPrepRawMedia").prepRawMedia(f, {
                  isPtt: !0,
                  precomputedFields: {
                    duration: Math.floor(p.getDuration()),
                    waveform: new Uint8Array(this.getScaledWaveformSamples()),
                  },
                })),
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: prepRawMedia completed successfully",
                      ])),
                  ));
              } catch (e) {
                throw (
                  o("WALogger").ERROR(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Error in prepRawMedia",
                      ])),
                  ),
                  e
                );
              }
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebPttComposerRecordingSession: Early upload promise status: ",
                    "",
                  ])),
                this._earlyUploadPromise ? "exists" : "null",
              );
              var y = null;
              if (o("WAWebBotUtils").isMetaAiBot(_.id)) {
                var C;
                y =
                  (C = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    _.id,
                  )) == null
                    ? void 0
                    : C.personaId;
              }
              try {
                (h.sendToChat({
                  chat: _,
                  earlyUpload: this._earlyUploadPromise,
                  options: {
                    quotedMsg: _.composeQuotedMsg || void 0,
                    addEvenWhilePreparing: !i,
                    ctwaContext: g,
                    isViewOnce: i,
                    isWamoSub: l,
                    isQuestion: n,
                    questionReplyQuotedMessage: u != null ? u : void 0,
                    botPersonaId: y,
                    threadId: c,
                    onMsgKeyCreated: s,
                  },
                }),
                  o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: sendToChat called successfully",
                      ])),
                  ));
              } catch (e) {
                throw (
                  o("WALogger").ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Error in sendToChat:",
                      ])),
                  ),
                  e
                );
              }
              ((_.composeQuotedMsg = null),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebPttComposerRecordingSession: Stopping recording session with SENT reason",
                    ])),
                ),
                this.stop(
                  o("WAWebPttComposerRecordingStopReason")
                    .RecordingSessionStopReason.SENT,
                ));
              try {
                (await f.catch(o("WAAbortError").catchAbort(r("WAWebNoop"))),
                  o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: getData completed or was aborted",
                      ])),
                  ));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Error in getData",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebPttComposerRecordingSession: send method completed successfully",
                  ])),
              );
            } catch (e) {
              throw (
                o("WALogger").ERROR(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebPttComposerRecordingSession: Unhandled error in send method",
                    ])),
                ),
                e
              );
            }
          }),
          (a._sendPttWamEvent = async function (t) {
            var e,
              n = r("nullthrows")(this._recorder),
              a = await n.getCompleteRecording();
            new (o("WAWebPttWamEvent").PttWamEvent)({
              pttSource: o("WAWebWamEnumPttSourceType").PTT_SOURCE_TYPE
                .FROM_CONVERSATION,
              pttResult: t,
              pttDuration: Math.round(this.duration) * 1e3,
              pttSize: Math.round(((e = a.size) != null ? e : 0) / 1e3) * 1e3,
              pttStop: this._draftPreviewSeen,
              pttDraftPlayCnt: this._draftPlayCount,
              pttDraftSeekCnt: this._draftSeekCount,
              pttPauseCnt: this._pauseCount,
              isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(this._chat.id),
            }).commit();
          }),
          (a.markDraftPreviewSeen = function () {
            this._draftPreviewSeen ||
              ((this._draftPreviewSeen = !0),
              o("WAWebPttDailyUtils").incrementPttDailyCount(
                o("WAWebPttDailyUtils").PttDailyCountKind.DRAFT_REVIEW,
                r("nullthrows")(
                  o("WAWebFrontendChatGetters").getKind(this._chat),
                ),
              ));
          }),
          (a.incrementDraftPlayCount = function () {
            this._draftPlayCount++;
          }),
          (a.incrementDraftSeekCount = function () {
            this._draftSeekCount++;
          }),
          (a.incrementPauseButtonCount = function () {
            (this._pauseCount++,
              this._pauseCount === 1 &&
                o("WAWebPttDailyUtils").incrementPttDailyCount(
                  o("WAWebPttDailyUtils").PttDailyCountKind.PAUSED_RECORD,
                  r("nullthrows")(
                    o("WAWebFrontendChatGetters").getKind(this._chat),
                  ),
                ));
          }),
          (a.delete = function () {
            var e;
            ((e = this._uploadQpl) == null || e.endCancel(),
              (this._uploadQpl = null),
              t.prototype.delete.call(this),
              o(
                "WAWebPttComposerRecordingSessionGetters",
              ).clearRecordingSessionGetterCacheFor(this));
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    B.Proxy = "recordingSession";
    var W = o("WAWebBaseModel").defineModel(B);
    function q(e) {
      return new W({ id: o("WARandomHex").randomHex(8), _chat: e.chat });
    }
    function U(e) {
      switch (e) {
        case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason
          .SENT:
          return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.SENT;
        case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason
          .PTT_TOO_SHORT:
          return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.TOO_SHORT;
        case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason
          .CANCEL_BUTTON:
          return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.CANCELLED;
        case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason
          .AI_THREAD_SWITCH:
        case o("WAWebPttComposerRecordingStopReason").RecordingSessionStopReason
          .OTHER:
          return null;
      }
    }
    async function V(e, t) {
      if (r("WAWebCallCollection").activeCall)
        return (
          o("WAWebModalManager").ModalManager.open(
            w.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              children: s._(/*BTDS*/ ""),
            }),
          ),
          null
        );
      var n = o("WAWebMediaCapture").start({
          type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .MICROPHONE,
          featureSurface: o("WAWebGuidePopup.react").FeatureSurface
            .VOICE_MESSAGES,
        }),
        a = n.asyncStream,
        i = n.disposeStream;
      e.addEventListener(
        "abort",
        function () {
          i();
        },
        { once: !0 },
      );
      try {
        return await a;
      } catch (e) {
        if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError)
          return (
            o("WAWebPttMicrophoneRecovery.react").showPttMicrophoneRefusal(
              e,
              t,
            ),
            null
          );
        if (e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError) {
          var l;
          return (
            o("WAWebModalManager").ModalManager.open(
              w.jsx((l = o("WAWebGuidePopup.react")).GuidePopup, {
                messaging: l.Messaging.MIC_MISSING,
                type: l.GuidePopupType.GUIDE_NONE,
                featureSurface: l.FeatureSurface.VOICE_MESSAGES,
              }),
            ),
            null
          );
        }
        throw e;
      }
    }
    var H = (function () {
      function e(e) {
        var t = this;
        this._opaqueDataPromise = e();
        var n = o("WAWebPttAudioManager").AudioManager.createAudioProxy();
        ((this._audio = n),
          (this._unregisterFromAudioChannel = o(
            "WAWebPttAudioChannels",
          ).MainAudioChannel.registerMedia(n)),
          (async function () {
            var e = await t._opaqueDataPromise,
              n = t._audio;
            n != null && (n.src = e.url());
          })());
      }
      var t = e.prototype;
      return (
        (t.getAudio = function () {
          return (this._audio != null || u(0, 56371), this._audio);
        }),
        (t.dispose = function () {
          var e = this,
            t = this._audio;
          t != null &&
            (this._unregisterFromAudioChannel(),
            (this._audio = null),
            (async function () {
              var t = await e._opaqueDataPromise;
              t.autorelease();
            })());
        }),
        e
      );
    })();
    ((l.RecordingSessionStopReason = o(
      "WAWebPttComposerRecordingStopReason",
    ).RecordingSessionStopReason),
      (l.RecordingSession = W),
      (l.createRecordingSession = q),
      (l.AudioResource = H));
  },
  226,
);
