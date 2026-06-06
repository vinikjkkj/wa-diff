__d(
  "WAWebVoipVirtualAudioCaptureDriver",
  ["WALogger", "WAWebAudioUtility", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = 0.7,
      h = 10,
      y = 150,
      C = 50,
      b = 0.5,
      v = 4,
      S = 0.75,
      R = 0.25,
      L = 0.03,
      E = (function () {
        function t() {
          ((this.$1 = !1),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = 0),
            (this.$6 = null));
        }
        var r = t.prototype;
        return (
          (r.initCaptureDriver = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.bits_per_sample,
                  r = t.channels,
                  a = t.frames_per_chunk,
                  i = t.sample_rate;
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [VirtualAudioCapture] initCaptureDriver params:\n      sampleRate=",
                      ",\n      channels=",
                      ",\n      bitsPerSample=",
                      ",\n      framesPerChunk=",
                      "",
                    ])),
                  i,
                  r,
                  n,
                  a,
                ),
                  (this.$6 = {
                    sampleRate: i,
                    channels: r,
                    bitsPerSample: n,
                    framesPerChunk: a,
                  }),
                  this.$7(i, r),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VirtualAudioCapture] initCaptureDriver completed",
                      ])),
                  ));
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.startCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VirtualAudioCapture] startCapture",
                  ])),
              ),
                this.$3 != null &&
                  (window.clearInterval(this.$3), (this.$3 = null)),
                this.$2 != null &&
                  (yield o("WAWebAudioUtility").freeWasmBuffer(this.$2),
                  (this.$2 = null)),
                (this.$1 = !1),
                (this.$5 = 0));
              var t = this.$6;
              if (t == null || this.$4 == null) {
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [VirtualAudioCapture] startCapture: params or tone buffer is null",
                    ])),
                );
                return;
              }
              var n =
                t.framesPerChunk * t.channels * Float32Array.BYTES_PER_ELEMENT;
              this.$2 = yield o("WAWebAudioUtility").mallocWasmBuffer(n);
              var r = (t.framesPerChunk / t.sampleRate) * 1e3;
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VirtualAudioCapture] startCapture: chunkSize=",
                    ", intervalMs=",
                    "",
                  ])),
                t.framesPerChunk * t.channels,
                r,
              ),
                (this.$3 = window.setInterval(function () {
                  if (!e.$1) {
                    var n = e.$2,
                      r = e.$4;
                    if (!(n == null || r == null)) {
                      for (
                        var a = t.framesPerChunk * t.channels,
                          i = new Float32Array(a),
                          l = 0;
                        l < a;
                        l++
                      )
                        i[l] = r[(e.$5 + l) % r.length];
                      ((e.$5 = (e.$5 + a) % r.length),
                        o("WAWebAudioUtility").sendAudioToWasm(n, i));
                    }
                  }
                }, r)),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [VirtualAudioCapture] startCapture: started successfully",
                    ])),
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.stopCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VirtualAudioCapture] stopCapture",
                  ])),
              ),
                (this.$1 = !0),
                this.$3 != null &&
                  (window.clearInterval(this.$3), (this.$3 = null)),
                this.$2 != null &&
                  (yield o("WAWebAudioUtility").freeWasmBuffer(this.$2),
                  (this.$2 = null)),
                (this.$4 = null),
                (this.$6 = null),
                (this.$5 = 0),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [VirtualAudioCapture] stopCapture: completed",
                    ])),
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$7 = function (t, n) {
            for (
              var e = t * h,
                r = e * n,
                a = new Float32Array(r),
                i = 305419896,
                l = function () {
                  ((i |= 0), (i = (i + 1831565813) | 0));
                  var e = Math.imul(i ^ (i >>> 15), 1 | i);
                  return (
                    (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
                    ((e ^ (e >>> 14)) >>> 0) / 4294967296
                  );
                },
                s = 0,
                u = 0;
              u < e;
              u++
            ) {
              var c = u / t,
                d = y + C * Math.sin(2 * Math.PI * b * c),
                m = 1 + L * (2 * l() - 1),
                p = d * m;
              ((s += p / t), (s -= Math.floor(s)));
              var _ = void 0;
              s < 0.6
                ? (_ = Math.sin((Math.PI * s) / 1.2))
                : s < 0.7
                  ? (_ =
                      Math.sin((Math.PI * 0.6) / 1.2) * (1 - (s - 0.6) / 0.1))
                  : (_ = 0);
              for (
                var E = (2 * l() - 1) * R,
                  k = Math.sin(2 * Math.PI * v * c),
                  I = (k + 1) / 2,
                  T = I > 1 - S ? 1 : 0.1,
                  D = g * T * (_ + E),
                  x = 0;
                x < n;
                x++
              )
                a[u * n + x] = Math.max(-1, Math.min(1, D));
            }
            ((this.$4 = a),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [VirtualAudioCapture] generated ",
                    " samples (",
                    "s), pitch: ",
                    "\xB1",
                    "Hz, jitter: ",
                    "%, noise: ",
                    "",
                  ])),
                r,
                h,
                y,
                C,
                L * 100,
                R,
              ));
          }),
          t
        );
      })();
    l.WAWebVoipVirtualAudioCaptureDriver = E;
  },
  98,
);
