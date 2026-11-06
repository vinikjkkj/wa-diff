__d(
  "WAWebPttComposerRecordingSession",
  [
    "fbt",
    "invariant",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      w,
      A = w || (w = o("react")),
      F = 1,
      O = 8.5,
      B = 64,
      W = (function (t) {
        function a() {
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
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
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
          (i.start = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this;
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
                this._uploadQpl = o(
                  "WAWebStartMediaUploadQpl",
                ).startMediaUploadQpl({
                  entryPoint: "PttStreamingUpload",
                  mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                  isStreamingUpload: !0,
                });
                var i = r("WAWebCreateMediaUploadMetrics")({
                    type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                    uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(
                      this._chat,
                    ),
                    fileOrigin: null,
                    userUploadAttemptCount: 0,
                    forwardedFromWeb: !1,
                    isViewOnce: !1,
                    uploadQpl: this._uploadQpl,
                  }),
                  l = i.handleEncryptionStart,
                  s = i.handleEncryptionSuccess,
                  u = i.handleSendMessageStart,
                  f = i.handleStreamUploadStart,
                  g = i.handleUploadAttemptError,
                  h = i.handleUploadAttemptSuccess,
                  y = i.handleUploadError,
                  C = i.handleUploadHostFound,
                  b = i.handleUploadProgress,
                  v = i.handleUploadSuccess;
                this._handleSendMessageStart = u;
                try {
                  if (
                    o(
                      "WAWebUploadStreamerRefactorGatingUtils",
                    ).isUploadStreamerRefactorEnabled()
                  ) {
                    var S = r("WAWebCryptoRandomMediaKey")();
                    this._earlyUploadPromise = new (M || (M = n("Promise")))(
                      function (e) {
                        a._resolveEarlyUploadPromise = e;
                      },
                    );
                    var R = new AbortController();
                    this._uploaderAbortController = R;
                    var L = yield o(
                        "WAMediaCalculateFilehash",
                      ).getRandomFilehash(),
                      E = new (o(
                        "WAWebMmsClientUploadStreamer",
                      ).UploadStreamer)(
                        {
                          encFilehash: L,
                          token: L,
                          type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                          signal: R.signal,
                          byteOffset: 0,
                          onUploadHostFound: C,
                          onUploadAttemptSuccess: h,
                          onUploadAttemptError: g,
                          onProgress: function (t, n) {
                            b(t.loaded + n);
                          },
                          onStreamUploadStart: f,
                          mediaId: o(
                            "WAWebWamMediaMetricUtils",
                          ).generateMediaEventId(),
                        },
                        { mediaHosts: o("WAWebMediaHosts").mediaHosts },
                      );
                    (E.startUploadFromClient(),
                      (this._encryptor = yield o(
                        "WAWebPttComposerStreamingEncryptor",
                      ).createStreamingEncryptor({
                        mediaKey: S.key,
                        onChunkEncrypted: (function () {
                          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (t) {
                              try {
                                yield E.uploadChunkFromClient(t);
                              } catch (t) {
                                var n = r("getErrorSafe")(t);
                                if (
                                  (a._resolveEarlyUploadPromise == null ||
                                    a._resolveEarlyUploadPromise(null),
                                  (a._hasStreamingUploadFailed = !0),
                                  n.name === o("WAAbortError").ABORT_ERROR)
                                )
                                  return;
                                (o("WALogger")
                                  .ERROR(
                                    e ||
                                      (e =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "onChunkEncrypted: ptt-streaming-upload-error",
                                          ],
                                        )),
                                  )
                                  .catching(n),
                                  o("WALogger")
                                    .ERROR(
                                      c ||
                                        (c =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "PTT Streaming Upload cancelled due to a problem uploading",
                                            ],
                                          )),
                                    )
                                    .sendLogs("ptt-streaming-upload-failed"),
                                  y(n));
                              }
                            },
                          );
                          function i(e) {
                            return t.apply(this, arguments);
                          }
                          return i;
                        })(),
                        onEncryptionCompleted: (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e, t) {
                              s();
                              try {
                                yield E.uploadChunkFromClient(
                                  new Uint8Array(e),
                                );
                                var n = yield E.finalizeUploadFromClient(t);
                                (a._resolveEarlyUploadPromise == null ||
                                  a._resolveEarlyUploadPromise({
                                    directPath: n.directPath,
                                    mediaKey: S.key,
                                    mediaKeyTimestamp: S.timestamp,
                                    encFilehash: t,
                                    url: n.url,
                                  }),
                                  v());
                              } catch (e) {
                                var i = r("getErrorSafe")(e);
                                if (
                                  (a._resolveEarlyUploadPromise == null ||
                                    a._resolveEarlyUploadPromise(null),
                                  (a._hasStreamingUploadFailed = !0),
                                  i.name === o("WAAbortError").ABORT_ERROR)
                                )
                                  return;
                                (o("WALogger")
                                  .ERROR(
                                    d ||
                                      (d =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "onEncryptionCompleted: ptt-streaming-upload-error",
                                          ],
                                        )),
                                  )
                                  .catching(i),
                                  o("WALogger")
                                    .ERROR(
                                      m ||
                                        (m =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "PTT Streaming Upload cancelled due to a problem when finalizing upload",
                                            ],
                                          )),
                                    )
                                    .sendLogs("ptt-streaming-upload-failed"),
                                  y(i));
                              }
                            },
                          );
                          function t(t, n) {
                            return e.apply(this, arguments);
                          }
                          return t;
                        })(),
                      })));
                  }
                } catch (e) {
                  var k;
                  throw (
                    (k = this._uploadQpl) == null ||
                      k.endFailWithError(
                        "upload_setup_failed",
                        r("getErrorSafe")(e).message,
                      ),
                    (this._uploadQpl = null),
                    e
                  );
                }
                try {
                  var I,
                    T = !0,
                    D = t == null ? void 0 : t.microphoneRecovery;
                  this._recorder = new (r("WAPttComposerRecorder"))({
                    createStream: function (t) {
                      var e = D;
                      return ((D = null), H(t, e));
                    },
                    waveformSampleRate: this.getWaveformSampleRate(),
                    onDuration: function (t) {
                      ((a.duration = t), (a.exceedsMinDuration = t >= F));
                    },
                    onPage: function (t, n) {
                      if (
                        !(
                          !o(
                            "WAWebUploadStreamerRefactorGatingUtils",
                          ).isUploadStreamerRefactorEnabled() ||
                          a._hasStreamingUploadFailed
                        )
                      )
                        try {
                          var e;
                          (T && (l(), (T = !1)),
                            (e = a._encryptor) == null || e.encryptChunk(t, n));
                        } catch (e) {
                          (o("WALogger").ERROR(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "PTT Streaming Upload cancelled due to a problem encrypting",
                              ])),
                          ),
                            a._resolveEarlyUploadPromise == null ||
                              a._resolveEarlyUploadPromise(null),
                            (a._hasStreamingUploadFailed = !0));
                        }
                    },
                  });
                  var x = yield this._recorder.start();
                  if (x)
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
                  ((I = this._uploadQpl) == null ||
                    I.endFailWithError(
                      "recording_failed",
                      "recorder_did_not_start",
                    ),
                    (this._uploadQpl = null));
                } catch (e) {
                  var $;
                  (($ = this._uploadQpl) == null ||
                    $.endFailWithError(
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
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getLiveWaveformSamples = function () {
            var e, t;
            return (e =
              (t = this._recorder) == null
                ? void 0
                : t.getLiveWaveformSamples()) != null
              ? e
              : [];
          }),
          (i.getCorrectedWaveformSamples = function () {
            var e, t;
            return (e =
              (t = this._recorder) == null
                ? void 0
                : t.getCorrectedWaveformSamples()) != null
              ? e
              : [];
          }),
          (i.getScaledWaveformSamples = function () {
            return r("WAPttComposerScaleWaveform")(
              this.getCorrectedWaveformSamples(),
              B,
            ).map(function (e) {
              return Math.floor(e * 100);
            });
          }),
          (i.getPreciseDuration = function () {
            var e, t;
            return (e =
              (t = this._recorder) == null ? void 0 : t.getPreciseDuration()) !=
              null
              ? e
              : 0;
          }),
          (i._endSession = function () {
            var e;
            (e = this._recorder) == null || e.stop();
          }),
          (i._releaseGetterCache = function () {
            o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_2") &&
              o(
                "WAWebPttComposerRecordingSessionGetters",
              ).clearRecordingSessionGetterCacheFor(this);
          }),
          (i._endUploadQpl = function (t) {
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
          (i.pause = function () {
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
          (i.resume = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  t = yield e.resume();
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
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.stop = function (t) {
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
                : this.duration > F &&
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
              var e = V(t);
              e != null && this._sendPttWamEvent(e);
            }
          }),
          (i._getDataForSending = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebPttComposerRecordingSession: _getDataForSending started",
                    ])),
                );
                var e = r("nullthrows")(this._recorder),
                  t = yield e.getCompleteRecording();
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
                var n = yield r("WAWebMediaOpaqueData").createFromData(
                  t,
                  t.type,
                );
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
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i._getDataForPlayback = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = r("nullthrows")(this._recorder),
                t = yield e.getPartialRecording(),
                n = yield o("WAWebMediaLoad").transcode(t);
              return r("WAWebMediaOpaqueData").createFromData(n, n.type);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getAudioForPlayback = function () {
            var e = this;
            return new z(function () {
              return e._getDataForPlayback();
            });
          }),
          (i.getWaveformSampleRate = function () {
            return O;
          }),
          (i.send = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.isQuestion,
                  n = t === void 0 ? !1 : t,
                  a = e.isViewOnce,
                  i = a === void 0 ? !1 : a,
                  l = e.isWamoSub,
                  s = e.questionReplyQuotedMessage,
                  u = e.threadId;
                try {
                  var c, d;
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
                    (c = this._handleSendMessageStart) == null ||
                      c.call(this, i),
                    this._recorder ||
                      o("WALogger").ERROR(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: Recorder is null in send method",
                          ])),
                      ));
                  var m = r("nullthrows")(this._recorder),
                    p = this._chat;
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Getting data for sending",
                      ])),
                  );
                  var _ = r("WAPromiseRaceAbort")(
                      this._getDataForSending(),
                      p.getDeleteSignal(),
                    ),
                    f =
                      ((d = p.getComposeContents()) == null
                        ? void 0
                        : d.ctwaContext) || void 0;
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Before prepRawMedia, duration=",
                        ", waveform samples=",
                        "",
                      ])),
                    Math.floor(m.getDuration()),
                    this.getScaledWaveformSamples().length,
                  );
                  var g;
                  try {
                    ((g = o("WAWebPrepRawMedia").prepRawMedia(_, {
                      isPtt: !0,
                      precomputedFields: {
                        duration: Math.floor(m.getDuration()),
                        waveform: new Uint8Array(
                          this.getScaledWaveformSamples(),
                        ),
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
                  var h = null;
                  if (o("WAWebBotUtils").isMetaAiBot(p.id)) {
                    var y;
                    h =
                      (y = o(
                        "WAWebBotProfileCollection",
                      ).BotProfileCollection.get(p.id)) == null
                        ? void 0
                        : y.personaId;
                  }
                  try {
                    (g.sendToChat({
                      chat: p,
                      earlyUpload: this._earlyUploadPromise,
                      options: {
                        quotedMsg: p.composeQuotedMsg || void 0,
                        addEvenWhilePreparing: !i,
                        ctwaContext: f,
                        isViewOnce: i,
                        isWamoSub: l,
                        isQuestion: n,
                        questionReplyQuotedMessage: s != null ? s : void 0,
                        botPersonaId: h,
                        threadId: u,
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
                  ((p.composeQuotedMsg = null),
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
                    (yield _.catch(
                      o("WAAbortError").catchAbort(r("WAWebNoop")),
                    ),
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i._sendPttWamEvent = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = r("nullthrows")(this._recorder),
                  a = yield n.getCompleteRecording();
                new (o("WAWebPttWamEvent").PttWamEvent)({
                  pttSource: o("WAWebWamEnumPttSourceType").PTT_SOURCE_TYPE
                    .FROM_CONVERSATION,
                  pttResult: e,
                  pttDuration: Math.round(this.duration) * 1e3,
                  pttSize:
                    Math.round(((t = a.size) != null ? t : 0) / 1e3) * 1e3,
                  pttStop: this._draftPreviewSeen,
                  pttDraftPlayCnt: this._draftPlayCount,
                  pttDraftSeekCnt: this._draftSeekCount,
                  pttPauseCnt: this._pauseCount,
                  isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(this._chat.id),
                }).commit();
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.markDraftPreviewSeen = function () {
            this._draftPreviewSeen ||
              ((this._draftPreviewSeen = !0),
              o("WAWebPttDailyUtils").incrementPttDailyCount(
                o("WAWebPttDailyUtils").PttDailyCountKind.DRAFT_REVIEW,
                r("nullthrows")(
                  o("WAWebFrontendChatGetters").getKind(this._chat),
                ),
              ));
          }),
          (i.incrementDraftPlayCount = function () {
            this._draftPlayCount++;
          }),
          (i.incrementDraftSeekCount = function () {
            this._draftSeekCount++;
          }),
          (i.incrementPauseButtonCount = function () {
            (this._pauseCount++,
              this._pauseCount === 1 &&
                o("WAWebPttDailyUtils").incrementPttDailyCount(
                  o("WAWebPttDailyUtils").PttDailyCountKind.PAUSED_RECORD,
                  r("nullthrows")(
                    o("WAWebFrontendChatGetters").getKind(this._chat),
                  ),
                ));
          }),
          (i.delete = function () {
            var e;
            ((e = this._uploadQpl) == null || e.endCancel(),
              (this._uploadQpl = null),
              t.prototype.delete.call(this),
              o(
                "WAWebPttComposerRecordingSessionGetters",
              ).clearRecordingSessionGetterCacheFor(this));
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    W.Proxy = "recordingSession";
    var q = o("WAWebBaseModel").defineModel(W);
    function U(e) {
      return new q({ id: o("WARandomHex").randomHex(8), _chat: e.chat });
    }
    function V(e) {
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
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (r("WAWebCallCollection").activeCall)
            return (
              o("WAWebModalManager").ModalManager.open(
                A.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: o("WAWebModalManager").closeModalManager,
                  children: s._(
                    /*BTDS*/ "Can't record voice messages during a WhatsApp call.",
                  ),
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
            return yield a;
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
                  A.jsx((l = o("WAWebGuidePopup.react")).GuidePopup, {
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
        })),
        G.apply(this, arguments)
      );
    }
    var z = (function () {
      function e(e) {
        var t = this;
        this._opaqueDataPromise = e();
        var r = o("WAWebPttAudioManager").AudioManager.createAudioProxy();
        ((this._audio = r),
          (this._unregisterFromAudioChannel = o(
            "WAWebPttAudioChannels",
          ).MainAudioChannel.registerMedia(r)),
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield t._opaqueDataPromise,
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
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = yield e._opaqueDataPromise;
              t.autorelease();
            })());
        }),
        e
      );
    })();
    ((l.RecordingSessionStopReason = o(
      "WAWebPttComposerRecordingStopReason",
    ).RecordingSessionStopReason),
      (l.RecordingSession = q),
      (l.createRecordingSession = U),
      (l.AudioResource = z));
  },
  226,
);
