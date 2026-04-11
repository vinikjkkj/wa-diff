__d(
  "WAOpusRecorderPlayer",
  [
    "Promise",
    "WABinary",
    "WABlobToArrayBuffer",
    "WALogger",
    "WAOpusRecorderWorkerClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "audio/wav",
      m,
      p = 0;
    function _() {
      return (p++, m || (m = new window.AudioContext()), m);
    }
    function f() {
      if ((p--, p === 0 && m)) {
        try {
          m.close().catch(function (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "releaseAudioContext close async error: ",
                  "",
                ])),
              t,
            );
          });
        } catch (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "releaseAudioContext close sync error: ",
                "",
              ])),
            e,
          );
        }
        m = void 0;
      }
    }
    var g = (function () {
      function e(e) {
        this.oggBlob = e;
      }
      var t = e.prototype;
      return (
        (t.generateBlob = function () {
          return this.oggBlobToWAVBlob(this.oggBlob, 1);
        }),
        (t.oggBlobToWAVBlob = function (t, r) {
          var e = this;
          r === void 0 && (r = 2);
          var a = r;
          return new (c || (c = n("Promise")))(function (n) {
            var r = function (r) {
                if (r.data == null) {
                  for (
                    var t = function (t) {
                        l.forEach(function (e) {
                          for (var n = e[t] || e[0], r = 0; r < n.length; r++)
                            s.push(n[r]);
                        });
                      },
                      o = 0;
                    o < a;
                    o++
                  )
                    t(o);
                  var i = e.encodeWAV(s, c, a),
                    u = new Blob([i.readByteArrayView()], { type: d });
                  (f(), n(u));
                } else (l.push(r.data), (a = l[0].length));
              },
              i = o("WAOpusRecorderWorkerClient").getOpusDecoderWorker(r),
              l = [],
              s = [],
              c = _(),
              m = { outputBufferSampleRate: c.sampleRate, bufferLength: 4096 };
            (i.postMessage({ command: "decode-init", config: m }),
              o("WABlobToArrayBuffer")
                .blobToArrayBuffer(t)
                .then(function (e) {
                  (i.postMessage({
                    command: "decode",
                    pages: new Uint8Array(e),
                  }),
                    i.postMessage({ command: "decode-done" }));
                })
                .catch(function (e) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Player::oggBlobToWAVBlob error: ",
                        "",
                      ])),
                    e,
                  );
                }));
          });
        }),
        (t.encodeWAV = function (t, n, r) {
          var e = new (o("WABinary").Binary)(void 0, !0);
          (e.ensureCapacity(44 + t.length * 2),
            e.writeString("RIFF"),
            e.writeUint32(36 + t.length * 2),
            e.writeString("WAVE"),
            e.writeString("fmt "),
            e.writeUint32(16),
            e.writeUint16(1),
            e.writeUint16(r),
            e.writeUint32(n.sampleRate),
            e.writeUint32(n.sampleRate * r * 2),
            e.writeUint16(r * 2),
            e.writeUint16(16),
            e.writeString("data"),
            e.writeUint32(t.length * 2));
          for (var a = 0; a < t.length; a++) {
            var i = Math.max(-1, Math.min(t[a], 1));
            ((i *= i > 0 ? 32767 : 32768), e.writeInt16(Math.floor(i)));
          }
          return e;
        }),
        e
      );
    })();
    l.default = g;
  },
  98,
);
