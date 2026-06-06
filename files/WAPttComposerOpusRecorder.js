__d(
  "WAPttComposerOpusRecorder",
  [
    "$InternalEnum",
    "WAGetUserMedia",
    "WANullthrows",
    "WAOpusRecorderWorkerClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
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
      s = n("$InternalEnum").Mirrored([
        "INACTIVE",
        "RECORDING",
        "PAUSED",
        "STOPPED",
      ]),
      u = (function () {
        function t(t) {
          var n = this;
          if (
            ((this._duration = 0),
            (this._recordedPages = []),
            (this._state = s.INACTIVE),
            (this._isFirstBuffer = !1),
            (this._requestCount = 0),
            (this._pendingFlushResolvers = new Map()),
            (this._handleEncoderMessage = function (e) {
              var t = e.data;
              switch (t.message) {
                case "page":
                  n._storePage(t.page);
                  break;
                case "flushed":
                  n._handleFlushed(t.requestId);
                  break;
                default:
                  throw r("err")("Invalid message event type: " + t.message);
              }
            }),
            !d())
          )
            throw r("err")("Recording is not supported in this browser");
          ((this._createStream = t.createStream),
            (this._onDuration = t.onDuration),
            (this._onPause = t.onPause),
            (this._onResume = t.onResume),
            (this._onStart = t.onStart),
            (this._onStop = t.onStop),
            (this._handlePage = t.onPage),
            (this._completeRecordingPromise = new Promise(function (e) {
              n._resolveCompleteRecordingPromise = e;
            })),
            (this._audioContext = new AudioContext()),
            (this._encoderNode = this._audioContext.createScriptProcessor(
              e.bufferLength,
              e.numberOfChannels,
              e.numberOfChannels,
            )),
            (this._encoderNode.onaudioprocess = function (e) {
              n._encodeBuffers(e.inputBuffer);
            }),
            (this._monitorNode = this._audioContext.createGain()));
        }
        var n = t.prototype;
        return (
          (n.getState = function () {
            return this._state;
          }),
          (n.start = async function () {
            var t, n;
            switch (this._state) {
              case s.RECORDING:
                return !0;
              case s.STOPPED:
                return !1;
              case s.PAUSED:
                return this.resume();
              case s.INACTIVE:
                break;
            }
            ((this._recordedPages = []),
              (this._isFirstBuffer = !0),
              (this._duration = 0));
            var r = o("WAOpusRecorderWorkerClient").getOpusEncoderWorker();
            ((this._encoder = r),
              r.addEventListener("message", this._handleEncoderMessage));
            var a = await this._startRecording();
            return a
              ? ((t = this._onStart) == null || t.call(this),
                (n = this._onDuration) == null || n.call(this, this._duration),
                r.postMessage({
                  command: "encode-init",
                  config: babelHelpers.extends({}, e, {
                    originalSampleRate: this._audioContext.sampleRate,
                  }),
                }),
                this._encoderNode.connect(this._audioContext.destination),
                !0)
              : !1;
          }),
          (n.stop = function () {
            var e, t;
            this._state !== s.STOPPED &&
              ((this._state = s.STOPPED),
              (e = this._recordingAbortController) == null || e.abort(),
              this._audioContext.close && this._audioContext.close(),
              this._monitorNode.disconnect(),
              this._encoderNode.disconnect(),
              (t = this._encoder) == null ||
                t.postMessage({ command: "encode-done" }));
          }),
          (n.pause = function () {
            var e, t;
            this._state === s.RECORDING &&
              ((this._state = s.PAUSED),
              (e = this._recordingAbortController) == null || e.abort(),
              (t = this._onPause) == null || t.call(this));
          }),
          (n.resume = async function () {
            var e;
            switch (this._state) {
              case s.RECORDING:
                return !0;
              case s.STOPPED:
                return !1;
              case s.INACTIVE:
                throw r("err")(
                  "Attempting to resume recording that hasn't started",
                );
              case s.PAUSED:
                break;
            }
            var t = await this._startRecording();
            return t ? ((e = this._onResume) == null || e.call(this), !0) : !1;
          }),
          (n.getDuration = function () {
            return this._duration;
          }),
          (n.getMonitorNode = function () {
            return this._monitorNode;
          }),
          (n._encodeBuffers = function (t) {
            var e;
            if (this._isFirstBuffer) {
              this._isFirstBuffer = !1;
              return;
            }
            if (this._state === s.RECORDING) {
              for (var n = [], o = 0; o < t.numberOfChannels; o++)
                n[o] = t.getChannelData(o);
              var a = r("WANullthrows")(this._encoder);
              (a.postMessage({ command: "encode", buffers: n }),
                (this._duration += t.duration),
                (e = this._onDuration) == null || e.call(this, this._duration));
            }
          }),
          (n._getNextRequestId = function () {
            return (this._requestCount++, this._requestCount);
          }),
          (n._startRecording = async function () {
            ((this._state = s.RECORDING),
              (this._recordingAbortController = new AbortController()));
            var e = await m(
              this._createStream,
              this._audioContext,
              [this._encoderNode, this._monitorNode],
              this._recordingAbortController.signal,
            );
            return e ? !0 : (this.stop(), !1);
          }),
          (n._storePage = function (t) {
            var e;
            if ((this._recordedPages.push(t), t[5] & 4)) {
              var n, o;
              (n = this._handlePage) == null || n.call(this, t, !0);
              var a = r("WANullthrows")(this._encoder);
              (a.removeEventListener("message", this._handleEncoderMessage),
                this._resolveCompleteRecordingPromise(c(this._recordedPages)),
                (this._recordedPages = []),
                (o = this._onStop) == null || o.call(this));
              return;
            }
            (e = this._handlePage) == null || e.call(this, t, !1);
          }),
          (n._handleFlushed = function (t) {
            var e = r("WANullthrows")(this._pendingFlushResolvers.get(t));
            (this._pendingFlushResolvers.delete(t), e(c(this._recordedPages)));
          }),
          (n.getPartialRecording = function () {
            var e = this,
              t = this._getNextRequestId(),
              n = new Promise(function (n) {
                e._pendingFlushResolvers.set(t, n);
              }),
              o = r("WANullthrows")(this._encoder);
            return (o.postMessage({ command: "flush", requestId: t }), n);
          }),
          (n.getCompleteRecording = function () {
            return this._completeRecordingPromise;
          }),
          t
        );
      })();
    function c(e) {
      var t = e.reduce(function (e, t) {
          return e + t.length;
        }, 0),
        n = new Uint8Array(t),
        r = 0;
      for (var o of e) (n.set(o, r), (r += o.length));
      return new Blob([n], { type: "audio/ogg; codecs=opus" });
    }
    function d() {
      return !!(window.AudioContext && o("WAGetUserMedia").getUserMedia);
    }
    async function m(e, t, n, r) {
      var o = await e(r);
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
    }
    l.OpusRecorder = u;
  },
  98,
);
