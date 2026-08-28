__d(
  "SpeechTranscribeClient",
  ["SpeechAudioRecordV2", "err", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/v2/transcription",
      s = "shortwave.facebook.com",
      u = "End of audio",
      c = (function () {
        function e(e) {
          ((this.$2 = function () {}),
            (this.$4 = function (e) {}),
            (this.$5 = function (e) {}),
            (this.$6 = function (e) {}),
            (this.$7 = function (e) {}),
            (this.$9 = function (e) {}),
            (this.$10 = function (e) {}),
            (this.$11 = !1),
            (this.$12 = s),
            (this.$1 = e));
        }
        var t = e.prototype;
        return (
          (t.onStart = function (t) {
            return ((this.$2 = t), this);
          }),
          (t.onDebugMessage = function (t) {
            return ((this.$3 = t), this);
          }),
          (t.onPreamble = function (t) {
            return ((this.$4 = t), this);
          }),
          (t.onLIDSegment = function (t) {
            return ((this.$5 = t), this);
          }),
          (t.onIntermediateTranscript = function (t) {
            return ((this.$6 = t), this);
          }),
          (t.onFinalTranscript = function (t) {
            return ((this.$7 = t), this);
          }),
          (t.onError = function (t) {
            return ((this.$8 = t), this);
          }),
          (t.onComplete = function (t) {
            return ((this.$9 = t), this);
          }),
          (t.onAbort = function (t) {
            return ((this.$10 = t), this);
          }),
          (t.useSpeechAudioRecord = function () {
            return ((this.$11 = !0), this);
          }),
          (t.setEndpoint = function (t) {
            return ((this.$12 = t), this);
          }),
          (t.connect = function () {
            if (this.$11 && this.$1.audioEncoding !== "audio/raw")
              throw r("err")(
                'You must set the "audio/raw" audio encoding when using the SpeechAudioRecord',
              );
            var e = {
              request: this.$1,
              onStart: this.$2,
              onDebugMessageCallback: this.$3,
              onPreamble: this.$4,
              onLIDSegment: this.$5,
              onIntermediateTranscript: this.$6,
              onFinalTranscript: this.$7,
              onError: r("nullthrows")(this.$8),
              onComplete: this.$9,
              onAbort: this.$10,
              useSpeechAudioRecord: this.$11,
              endpoint: this.$12,
            };
            return new m(e);
          }),
          e
        );
      })();
    function d(e, t) {
      var n = new Uint8Array(e.byteLength + t.byteLength);
      return (
        n.set(new Uint8Array(e), 0),
        n.set(new Uint8Array(t), e.byteLength),
        n
      );
    }
    var m = (function () {
      function t(t) {
        var n = this;
        if (
          ((this.$3 = new Uint8Array(0)),
          (this.$4 = !1),
          (this.$5 = null),
          (this.$6 = !1),
          (this.$7 = function (e) {
            n.$6 || n.sendAudio(e);
          }),
          (this.$1 = t),
          (this.$2 = new WebSocket("wss://" + this.$1.endpoint + e)),
          (this.$2.binaryType = "arraybuffer"),
          (this.$2.onopen = function (e) {
            if (!n.$6) {
              var t = JSON.stringify(n.$1.request);
              (n.$1.onDebugMessageCallback &&
                n.$1.onDebugMessageCallback("sent: " + t),
                n.$2.send(t),
                n.$1.onStart(),
                n.$3.length > 0 &&
                  (n.$1.onDebugMessageCallback &&
                    n.$1.onDebugMessageCallback(
                      "Flushing buffered " +
                        n.$3.length +
                        " audio bytes to server",
                    ),
                  n.$2.send(n.$3),
                  n.$4 &&
                    (n.$1.onDebugMessageCallback &&
                      n.$1.onDebugMessageCallback(
                        "Flushing end of audio signal",
                      ),
                    n.$2.send(u))));
            }
          }),
          (this.$2.onclose = function (e) {
            if (!n.$6) {
              if (e.code !== 1e3) {
                n.$1.onDebugMessageCallback &&
                  n.$1.onDebugMessageCallback(
                    "error with close code " +
                      e.code +
                      " with reason " +
                      e.reason,
                  );
                var t = r("nullthrows")(n.$1.onError);
                ((n.$6 = !0), t(e.code, e.reason));
              } else
                (n.$1.onDebugMessageCallback &&
                  n.$1.onDebugMessageCallback("complete"),
                  (n.$6 = !0),
                  n.$1.onComplete());
              if (n.$1.useSpeechAudioRecord) {
                var o = n.$5;
                o != null && (o.removeListener(n.$7), o.stop(), (n.$5 = null));
              }
            }
          }),
          (this.$2.onmessage = function (e) {
            if (!n.$6 && typeof e.data == "string") {
              n.$1.onDebugMessageCallback &&
                n.$1.onDebugMessageCallback(
                  "Received server message: " + e.data,
                );
              var t = JSON.parse(e.data);
              switch (t.type) {
                case "preamble":
                  n.$1.onPreamble(t);
                  break;
                case "lidSegment":
                  n.$1.onLIDSegment(t);
                  break;
                case "intermediateTranscription":
                  n.$1.onIntermediateTranscript(t);
                  break;
                case "finalTranscription":
                  n.$1.onFinalTranscript(t);
                  break;
              }
            }
          }),
          this.$1.useSpeechAudioRecord)
        ) {
          if (this.$5 != null) {
            var o = r("nullthrows")(this.$1.onError);
            ((this.$6 = !0),
              o(1006, "SpeechAudioRecord is already recording!"));
            return;
          }
          var a = new (r("SpeechAudioRecordV2"))(16e3, 1, "int16");
          (a.addListener(this.$7), a.start(), (this.$5 = a));
        }
      }
      var n = t.prototype;
      return (
        (n.sendAudio = function (t) {
          if (!this.$6 && !this.$4) {
            var e = new Uint8Array(t);
            switch (this.$2.readyState) {
              case WebSocket.CONNECTING:
                ((this.$3 = d(this.$3, e)),
                  this.$1.onDebugMessageCallback &&
                    this.$1.onDebugMessageCallback(
                      "Received audio but still connecting, buffered " +
                        this.$3.length +
                        " audio bytes so far",
                    ));
                break;
              case WebSocket.OPEN:
                this.$2.send(e);
                break;
            }
          }
        }),
        (n.endOfAudio = function () {
          if (!this.$6 && !this.$4)
            switch (((this.$4 = !0), this.$2.readyState)) {
              case WebSocket.CONNECTING:
                this.$1.onDebugMessageCallback &&
                  this.$1.onDebugMessageCallback(
                    "Pending end of audio message",
                  );
                break;
              case WebSocket.OPEN:
                (this.$2.send(u),
                  this.$1.onDebugMessageCallback &&
                    this.$1.onDebugMessageCallback("Sent end of audio signal"));
                break;
            }
        }),
        (n.abort = function () {
          if (!this.$6) {
            if (((this.$6 = !0), this.$1.useSpeechAudioRecord)) {
              var e = this.$5;
              e != null &&
                (e.removeListener(this.$7), e.stop(), (this.$5 = null));
            }
            (this.$2.CONNECTING || this.$2.OPEN) &&
              (this.$1.onDebugMessageCallback &&
                this.$1.onDebugMessageCallback("abort"),
              this.$2.close(1e3, "abort"),
              this.$1.onAbort());
          }
        }),
        t
      );
    })();
    ((l.SpeechTranscribeBuilder = c), (l.SpeechTranscribeContext = m));
  },
  98,
);
