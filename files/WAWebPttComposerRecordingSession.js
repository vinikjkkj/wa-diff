__d(
  "WAWebPttComposerRecordingSession",
  [
    "fbt",
    "invariant",
    "$InternalEnum",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAPttComposerRecorder",
    "WAPttComposerScaleWaveform",
    "WARandomHex",
    "WAWebAppTracker",
    "WAWebBaseModel",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoRandomMediaKey",
    "WAWebFrontendChatGetters",
    "WAWebGuidePopup.react",
    "WAWebMedia",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMiscErrors",
    "WAWebMmsClientUploadStreamer",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPresenceChatAction",
    "WAWebPresenceCollection",
    "WAWebPttAudioChannels",
    "WAWebPttAudioManager",
    "WAWebPttComposerRecordingSessionGetters",
    "WAWebPttComposerStreamingEncryptor",
    "WAWebPttDailyUtils",
    "WAWebPttWamEvent",
    "WAWebRecordingSessionStateEnum",
    "WAWebTimeSpentLoggingExternal",
    "WAWebUploadStreamerRefactorGatingUtils",
    "WAWebWamEnumPttResultType",
    "WAWebWamEnumPttSourceType",
    "WAWebWamEnumTsExternalEventSource",
    "WAWebWamMediaMetricUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "lodash",
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
      F = n("$InternalEnum").Mirrored([
        "CANCEL_BUTTON",
        "PTT_TOO_SHORT",
        "SENT",
        "OTHER",
      ]),
      O = 1,
      B = 8.5,
      W = 64,
      q = (function (t) {
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
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              var a = r("WAWebCreateMediaUploadMetrics")(
                  o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT,
                  r("WAWebMediaGetUploadOriginForChat")(this._chat),
                  0,
                  !1,
                  !1,
                ),
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
              if (
                ((this._handleSendMessageStart = s),
                o(
                  "WAWebUploadStreamerRefactorGatingUtils",
                ).isUploadStreamerRefactorEnabled())
              ) {
                var v = r("WAWebCryptoRandomMediaKey")();
                this._earlyUploadPromise = new (M || (M = n("Promise")))(
                  function (e) {
                    t._resolveEarlyUploadPromise = e;
                  },
                );
                var S = new AbortController();
                this._uploaderAbortController = S;
                var R = yield o("WAMediaCalculateFilehash").getRandomFilehash(),
                  L = new (o("WAWebMmsClientUploadStreamer").UploadStreamer)({
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
                  });
                (L.startUploadFromClient(),
                  (this._encryptor = yield o(
                    "WAWebPttComposerStreamingEncryptor",
                  ).createStreamingEncryptor({
                    mediaKey: v.key,
                    onChunkEncrypted: (function () {
                      var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          try {
                            yield L.uploadChunkFromClient(n);
                          } catch (n) {
                            var a = r("getErrorSafe")(n);
                            if (
                              (t._resolveEarlyUploadPromise == null ||
                                t._resolveEarlyUploadPromise(null),
                              (t._hasStreamingUploadFailed = !0),
                              a.name === o("WAAbortError").ABORT_ERROR)
                            )
                              return;
                            (o("WALogger")
                              .ERROR(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "onChunkEncrypted: ptt-streaming-upload-error",
                                  ])),
                              )
                              .catching(a),
                              o("WALogger")
                                .ERROR(
                                  c ||
                                    (c =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "PTT Streaming Upload cancelled due to a problem uploading",
                                      ])),
                                )
                                .sendLogs("ptt-streaming-upload-failed"),
                              h(a));
                          }
                        },
                      );
                      function i(e) {
                        return a.apply(this, arguments);
                      }
                      return i;
                    })(),
                    onEncryptionCompleted: (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e, n) {
                          l();
                          try {
                            yield L.uploadChunkFromClient(new Uint8Array(e));
                            var a = yield L.finalizeUploadFromClient(n);
                            (t._resolveEarlyUploadPromise == null ||
                              t._resolveEarlyUploadPromise({
                                directPath: a.directPath,
                                mediaKey: v.key,
                                mediaKeyTimestamp: v.timestamp,
                                encFilehash: n,
                                url: a.url,
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
                                    (m =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "PTT Streaming Upload cancelled due to a problem when finalizing upload",
                                      ])),
                                )
                                .sendLogs("ptt-streaming-upload-failed"),
                              h(i));
                          }
                        },
                      );
                      function a(t, n) {
                        return e.apply(this, arguments);
                      }
                      return a;
                    })(),
                  })));
              }
              try {
                var E = !0;
                this._recorder = new (r("WAPttComposerRecorder"))({
                  createStream: G,
                  waveformSampleRate: this.getWaveformSampleRate(),
                  onDuration: function (n) {
                    ((t.duration = n), (t.exceedsMinDuration = n >= O));
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
                        (E && (i(), (E = !1)),
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
                var k = yield this._recorder.start();
                if (k)
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
                      r("WANullthrows")(
                        o("WAWebFrontendChatGetters").getKind(this._chat),
                      ),
                    ),
                    !0
                  );
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "PTT Recording Error",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }
              return (
                this._endSession(),
                (this.recordingState = o(
                  "WAWebRecordingSessionStateEnum",
                ).RecordingSessionState.ERROR),
                !1
              );
            });
            function a() {
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
              W,
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
          (i.pause = function () {
            if (
              this.recordingState ===
              o("WAWebRecordingSessionStateEnum").RecordingSessionState
                .RECORDING
            ) {
              if (!this.exceedsMinDuration) {
                this.stop(F.PTT_TOO_SHORT);
                return;
              }
              ((this.recordingState = o(
                "WAWebRecordingSessionStateEnum",
              ).RecordingSessionState.PAUSED),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.RecordPTT,
                ));
              var e = r("WANullthrows")(this._recorder);
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
                var e = r("WANullthrows")(this._recorder),
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
              this._recorder != null)
            ) {
              (t === F.SENT
                ? o("WAWebPttDailyUtils").incrementPttDailyCount(
                    o("WAWebPttDailyUtils").PttDailyCountKind.SEND,
                    r("WANullthrows")(
                      o("WAWebFrontendChatGetters").getKind(this._chat),
                    ),
                  )
                : this.duration > O &&
                  o("WAWebPttDailyUtils").incrementPttDailyCount(
                    o("WAWebPttDailyUtils").PttDailyCountKind.CANCEL,
                    r("WANullthrows")(
                      o("WAWebFrontendChatGetters").getKind(this._chat),
                    ),
                  ),
                t !== F.SENT &&
                  this._uploaderAbortController &&
                  this._uploaderAbortController.abort());
              var e = H(t);
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
                var e = r("WANullthrows")(this._recorder),
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
              var e = r("WANullthrows")(this._recorder),
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
            return new j(function () {
              return e._getDataForPlayback();
            });
          }),
          (i.getWaveformSampleRate = function () {
            return B;
          }),
          (i.send = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.isViewOnce,
                  n = t === void 0 ? !1 : t,
                  a = e.isWamoSub,
                  i = e.threadId;
                try {
                  var l, s;
                  (o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: send started with isViewOnce=",
                        ", isWamoSub=",
                        "",
                      ])),
                    n,
                    a,
                  ),
                    (l = this._handleSendMessageStart) == null ||
                      l.call(this, n),
                    this._recorder ||
                      o("WALogger").ERROR(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebPttComposerRecordingSession: Recorder is null in send method",
                          ])),
                      ));
                  var u = r("WANullthrows")(this._recorder),
                    c = this._chat;
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Getting data for sending",
                      ])),
                  );
                  var d = r("WAPromiseRaceAbort")(
                      this._getDataForSending(),
                      c.getDeleteSignal(),
                    ),
                    m =
                      ((s = c.getComposeContents()) == null
                        ? void 0
                        : s.ctwaContext) || void 0;
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebPttComposerRecordingSession: Before prepRawMedia, duration=",
                        ", waveform samples=",
                        "",
                      ])),
                    Math.floor(u.getDuration()),
                    this.getScaledWaveformSamples().length,
                  );
                  var p;
                  try {
                    ((p = o("WAWebMedia").prepRawMedia(d, {
                      isPtt: !0,
                      precomputedFields: {
                        duration: Math.floor(u.getDuration()),
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
                  var _ = null;
                  if (o("WAWebBotUtils").isMetaAiBot(c.id)) {
                    var f;
                    _ =
                      (f = o(
                        "WAWebBotProfileCollection",
                      ).BotProfileCollection.get(c.id)) == null
                        ? void 0
                        : f.personaId;
                  }
                  try {
                    (p.sendToChat({
                      chat: c,
                      earlyUpload: this._earlyUploadPromise,
                      options: {
                        quotedMsg: c.composeQuotedMsg || void 0,
                        addEvenWhilePreparing: !n,
                        ctwaContext: m,
                        isViewOnce: n,
                        isWamoSub: a,
                        botPersonaId: _,
                        threadId: i,
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
                  ((c.composeQuotedMsg = null),
                    o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "WAWebPttComposerRecordingSession: Stopping recording session with SENT reason",
                        ])),
                    ),
                    this.stop(F.SENT));
                  try {
                    (yield d.catch(
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
                  n = r("WANullthrows")(this._recorder),
                  a = yield n.getCompleteRecording();
                new (o("WAWebPttWamEvent").PttWamEvent)({
                  pttSource: o("WAWebWamEnumPttSourceType").PTT_SOURCE_TYPE
                    .FROM_CONVERSATION,
                  pttResult: e,
                  pttDuration: Math.round(this.duration) * 1e3,
                  pttSize: r("lodash").round((t = a.size) != null ? t : 0, -3),
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
                r("WANullthrows")(
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
                  r("WANullthrows")(
                    o("WAWebFrontendChatGetters").getKind(this._chat),
                  ),
                ));
          }),
          (i.delete = function () {
            (t.prototype.delete.call(this),
              o(
                "WAWebPttComposerRecordingSessionGetters",
              ).clearRecordingSessionGetterCacheFor(this));
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    q.Proxy = "recordingSession";
    var U = o("WAWebBaseModel").defineModel(q);
    function V(e) {
      return new U({ id: o("WARandomHex").randomHex(8), _chat: e.chat });
    }
    function H(e) {
      switch (e) {
        case F.SENT:
          return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.SENT;
        case F.PTT_TOO_SHORT:
          return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.TOO_SHORT;
        case F.CANCEL_BUTTON:
          return o("WAWebWamEnumPttResultType").PTT_RESULT_TYPE.CANCELLED;
        case F.OTHER:
          return null;
      }
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var t = o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                .VOICE_MESSAGES,
            }),
            n = t.asyncStream,
            a = t.disposeStream;
          e.addEventListener(
            "abort",
            function () {
              a();
            },
            { once: !0 },
          );
          try {
            return yield n;
          } catch (e) {
            if (
              e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
            ) {
              var i;
              return (
                o("WAWebModalManager").ModalManager.open(
                  A.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: i.Messaging.MIC_FAIL,
                    type: i.GuidePopupType.GUIDE_UNBLOCK,
                    featureSurface: i.FeatureSurface.VOICE_MESSAGES,
                  }),
                ),
                null
              );
            }
            if (
              e instanceof o("WAWebMiscErrors").GetUserMedia.GetUserMediaError
            ) {
              var i;
              return (
                o("WAWebModalManager").ModalManager.open(
                  A.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: i.Messaging.MIC_MISSING,
                    type: i.GuidePopupType.GUIDE_NONE,
                    featureSurface: i.FeatureSurface.VOICE_MESSAGES,
                  }),
                ),
                null
              );
            }
            throw e;
          }
        })),
        z.apply(this, arguments)
      );
    }
    var j = (function () {
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
    ((l.RecordingSessionStopReason = F),
      (l.RecordingSession = U),
      (l.createRecordingSession = V),
      (l.AudioResource = j));
  },
  226,
);
