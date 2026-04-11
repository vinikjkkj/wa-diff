__d(
  "WAPttComposerOpusRecorder",
  [
    "$InternalEnum",
    "Promise",
    "WAGetUserMedia",
    "WANullthrows",
    "WAOpusRecorderWorkerClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        bitRate: 16e3,
        bufferLength: 4096,
        numberOfChannels: 1,
        encoderSampleRate: 16e3,
        maxBuffersPerPage: 40,
        encoderApplication: 2048,
        encoderFrameSize: 20,
        streamOptions: {
          optional: [],
          mandatory: {
            googEchoCancellation: !1,
            googAutoGainControl: !1,
            googNoiseSuppression: !1,
            googHighpassFilter: !1,
          },
        },
      },
      u = n("$InternalEnum").Mirrored([
        "INACTIVE",
        "RECORDING",
        "PAUSED",
        "STOPPED",
      ]),
      c = (function () {
        function t(t) {
          var o = this;
          if (
            ((this._duration = 0),
            (this._recordedPages = []),
            (this._state = u.INACTIVE),
            (this._isFirstBuffer = !1),
            (this._requestCount = 0),
            (this._pendingFlushResolvers = new Map()),
            (this._handleEncoderMessage = function (e) {
              var t = e.data;
              switch (t.message) {
                case "page":
                  o._storePage(t.page);
                  break;
                case "flushed":
                  o._handleFlushed(t.requestId);
                  break;
                default:
                  throw r("err")("Invalid message event type: " + t.message);
              }
            }),
            !m())
          )
            throw r("err")("Recording is not supported in this browser");
          ((this._createStream = t.createStream),
            (this._onDuration = t.onDuration),
            (this._onPause = t.onPause),
            (this._onResume = t.onResume),
            (this._onStart = t.onStart),
            (this._onStop = t.onStop),
            (this._handlePage = t.onPage),
            (this._completeRecordingPromise = new (e || (e = n("Promise")))(
              function (e) {
                o._resolveCompleteRecordingPromise = e;
              },
            )),
            (this._audioContext = new AudioContext()),
            (this._encoderNode = this._audioContext.createScriptProcessor(
              s.bufferLength,
              s.numberOfChannels,
              s.numberOfChannels,
            )),
            (this._encoderNode.onaudioprocess = function (e) {
              o._encodeBuffers(e.inputBuffer);
            }),
            (this._monitorNode = this._audioContext.createGain()));
        }
        var a = t.prototype;
        return (
          (a.getState = function () {
            return this._state;
          }),
          (a.start = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e, t;
              switch (this._state) {
                case u.RECORDING:
                  return !0;
                case u.STOPPED:
                  return !1;
                case u.PAUSED:
                  return this.resume();
                case u.INACTIVE:
                  break;
              }
              ((this._recordedPages = []),
                (this._isFirstBuffer = !0),
                (this._duration = 0));
              var n = o("WAOpusRecorderWorkerClient").getOpusEncoderWorker();
              ((this._encoder = n),
                n.addEventListener("message", this._handleEncoderMessage));
              var r = yield this._startRecording();
              return r
                ? ((e = this._onStart) == null || e.call(this),
                  (t = this._onDuration) == null ||
                    t.call(this, this._duration),
                  n.postMessage({
                    command: "encode-init",
                    config: babelHelpers.extends({}, s, {
                      originalSampleRate: this._audioContext.sampleRate,
                    }),
                  }),
                  this._encoderNode.connect(this._audioContext.destination),
                  !0)
                : !1;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.stop = function () {
            var e, t;
            this._state !== u.STOPPED &&
              ((this._state = u.STOPPED),
              (e = this._recordingAbortController) == null || e.abort(),
              this._audioContext.close && this._audioContext.close(),
              this._monitorNode.disconnect(),
              this._encoderNode.disconnect(),
              (t = this._encoder) == null ||
                t.postMessage({ command: "encode-done" }));
          }),
          (a.pause = function () {
            var e, t;
            this._state === u.RECORDING &&
              ((this._state = u.PAUSED),
              (e = this._recordingAbortController) == null || e.abort(),
              (t = this._onPause) == null || t.call(this));
          }),
          (a.resume = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              switch (this._state) {
                case u.RECORDING:
                  return !0;
                case u.STOPPED:
                  return !1;
                case u.INACTIVE:
                  throw r("err")(
                    "Attempting to resume recording that hasn't started",
                  );
                case u.PAUSED:
                  break;
              }
              var t = yield this._startRecording();
              return t
                ? ((e = this._onResume) == null || e.call(this), !0)
                : !1;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getDuration = function () {
            return this._duration;
          }),
          (a.getMonitorNode = function () {
            return this._monitorNode;
          }),
          (a._encodeBuffers = function (t) {
            var e;
            if (this._isFirstBuffer) {
              this._isFirstBuffer = !1;
              return;
            }
            if (this._state === u.RECORDING) {
              for (var n = [], o = 0; o < t.numberOfChannels; o++)
                n[o] = t.getChannelData(o);
              var a = r("WANullthrows")(this._encoder);
              (a.postMessage({ command: "encode", buffers: n }),
                (this._duration += t.duration),
                (e = this._onDuration) == null || e.call(this, this._duration));
            }
          }),
          (a._getNextRequestId = function () {
            return (this._requestCount++, this._requestCount);
          }),
          (a._startRecording = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              ((this._state = u.RECORDING),
                (this._recordingAbortController = new AbortController()));
              var e = yield p(
                this._createStream,
                this._audioContext,
                [this._encoderNode, this._monitorNode],
                this._recordingAbortController.signal,
              );
              return e ? !0 : (this.stop(), !1);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a._storePage = function (t) {
            var e;
            if ((this._recordedPages.push(t), t[5] & 4)) {
              var n, o;
              (n = this._handlePage) == null || n.call(this, t, !0);
              var a = r("WANullthrows")(this._encoder);
              (a.removeEventListener("message", this._handleEncoderMessage),
                this._resolveCompleteRecordingPromise(d(this._recordedPages)),
                (this._recordedPages = []),
                (o = this._onStop) == null || o.call(this));
              return;
            }
            (e = this._handlePage) == null || e.call(this, t, !1);
          }),
          (a._handleFlushed = function (t) {
            var e = r("WANullthrows")(this._pendingFlushResolvers.get(t));
            (this._pendingFlushResolvers.delete(t), e(d(this._recordedPages)));
          }),
          (a.getPartialRecording = function () {
            var t = this,
              o = this._getNextRequestId(),
              a = new (e || (e = n("Promise")))(function (e) {
                t._pendingFlushResolvers.set(o, e);
              }),
              i = r("WANullthrows")(this._encoder);
            return (i.postMessage({ command: "flush", requestId: o }), a);
          }),
          (a.getCompleteRecording = function () {
            return this._completeRecordingPromise;
          }),
          t
        );
      })();
    function d(e) {
      var t = e.reduce(function (e, t) {
          return e + t.length;
        }, 0),
        n = new Uint8Array(t),
        r = 0;
      for (var o of e) (n.set(o, r), (r += o.length));
      return new Blob([n], { type: "audio/ogg; codecs=opus" });
    }
    function m() {
      return !!(window.AudioContext && o("WAGetUserMedia").getUserMedia);
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield e(r);
            if (r.aborted || o == null) return !1;
            var a = t.createMediaStreamSource(o);
            return (
              n.forEach(function (e) {
                a.connect(e);
              }),
              r.addEventListener(
                "abort",
                function () {
                  (o.getTracks().forEach(function (e) {
                    e.stop();
                  }),
                    a.disconnect());
                },
                { once: !0 },
              ),
              !0
            );
          },
        )),
        _.apply(this, arguments)
      );
    }
    ((l.OpusRecorderState = u), (l.OpusRecorder = c));
  },
  98,
);
