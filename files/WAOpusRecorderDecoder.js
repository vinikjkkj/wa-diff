__d(
  "WAOpusRecorderDecoder",
  ["WAOpusRecorderLibopus", "WAOpusRecorderResampler"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      var e, n, r;
      ((this.bufferLength = (e = t.bufferLength) != null ? e : 4096),
        (this.decoderSampleRate = (n = t.decoderSampleRate) != null ? n : 48e3),
        (this.outputBufferSampleRate =
          (r = t.outputBufferSampleRate) != null ? r : 48e3),
        (this.outputBuffers = []),
        (this._sawHeader = !1));
    };
    ((e.prototype.decode = function (e) {
      var t = new DataView(e.buffer);
      this.getPageBoundaries(t).map(function (n) {
        var o = t.getUint8(n + 5, !0),
          a = t.getUint32(n + 18, !0);
        if (
          (!this._sawHeader &&
            o & 2 &&
            ((this._sawHeader = !0),
            (this.numberOfChannels = t.getUint8(n + 37, !0)),
            this.init()),
          a > 1)
        )
          for (
            var i = t.getUint8(n + 26, !0), l = n + 27 + i, s = 0;
            s < i;
            s++
          ) {
            var u = t.getUint8(n + 27 + s, !0);
            if (
              (this.decoderBuffer.set(
                e.subarray(l, (l += u)),
                this.decoderBufferIndex,
              ),
              (this.decoderBufferIndex += u),
              u < 255)
            ) {
              var c = r("WAOpusRecorderLibopus")._opus_decode_float(
                this.decoder,
                this.decoderBufferPointer,
                this.decoderBufferIndex,
                this.decoderOutputPointer,
                this.decoderOutputMaxLength,
                0,
              );
              (this.sendToOutputBuffers(
                this.decoderOutputBuffer.subarray(0, c * this.numberOfChannels),
              ),
                (this.decoderBufferIndex = 0));
            }
          }
      }, this);
    }),
      (e.prototype.deinterleave = function (e) {
        for (var t = [], n = 0, r = 0; r < this.numberOfChannels; r++)
          t.push(new Float32Array(e.length / this.numberOfChannels));
        for (var o = 0; o < e.length; o++) {
          var a = o % this.numberOfChannels;
          ((t[a][n] = e[o]), (n += a === t.length - 1 ? 1 : 0));
        }
        return t;
      }),
      (e.prototype.getPageBoundaries = function (e) {
        for (var t = [], n = 0; n < e.byteLength - 32; n++)
          e.getUint32(n, !0) === 1399285583 && t.push(n);
        return t;
      }),
      (e.prototype.init = function () {
        (this.resetOutputBuffers(),
          this.initCodec(),
          (this.resampler = new (r("WAOpusRecorderResampler"))({
            resampledRate: this.outputBufferSampleRate,
            originalSampleRate: this.decoderSampleRate,
            numberOfChannels: this.numberOfChannels,
          })),
          this.numberOfChannels === 1 &&
            (this.deinterleave = function (e) {
              return [e];
            }));
      }),
      (e.prototype.initCodec = function () {
        var e;
        ((this.decoder = (e = r("WAOpusRecorderLibopus"))._opus_decoder_create(
          this.decoderSampleRate,
          this.numberOfChannels,
          e.allocate(4, "i32", e.ALLOC_STACK),
        )),
          (this.decoderBufferMaxLength = 4e3),
          (this.decoderBufferPointer = e._malloc(this.decoderBufferMaxLength)),
          (this.decoderBuffer = e.HEAPU8.subarray(
            this.decoderBufferPointer,
            this.decoderBufferPointer + this.decoderBufferMaxLength,
          )),
          (this.decoderBufferIndex = 0),
          (this.decoderOutputMaxLength =
            (this.decoderSampleRate * this.numberOfChannels * 120) / 1e3),
          (this.decoderOutputPointer = e._malloc(
            this.decoderOutputMaxLength * 4,
          )),
          (this.decoderOutputBuffer = e.HEAPF32.subarray(
            this.decoderOutputPointer >> 2,
            (this.decoderOutputPointer >> 2) + this.decoderOutputMaxLength,
          )));
      }),
      (e.prototype.resetOutputBuffers = function () {
        ((this.outputBuffers = []),
          (this.outputBufferArrayBuffers = []),
          (this.outputBufferIndex = 0));
        for (var e = 0; e < this.numberOfChannels; e++)
          (this.outputBuffers.push(new Float32Array(this.bufferLength)),
            this.outputBufferArrayBuffers.push(this.outputBuffers[e].buffer));
      }),
      (e.prototype.sendLastBuffer = function () {
        (this.sendToOutputBuffers(
          new Float32Array(
            (this.bufferLength - this.outputBufferIndex) *
              this.numberOfChannels,
          ),
        ),
          postMessage(null),
          close());
      }),
      (e.prototype.sendToOutputBuffers = function (e) {
        for (var t = this.deinterleave(e), n = 0, r = 0; r < t.length; r++)
          t[r] = this.resampler.resample(t[r], r);
        for (; n < t[0].length; ) {
          for (
            var o = Math.min(
                t[0].length - n,
                this.bufferLength - this.outputBufferIndex,
              ),
              a = 0;
            a < t.length;
            a++
          )
            this.outputBuffers[a].set(
              t[a].subarray(n, n + o),
              this.outputBufferIndex,
            );
          ((this.outputBufferIndex += o),
            (n += o),
            this.outputBufferIndex === this.bufferLength &&
              (postMessage(this.outputBuffers, this.outputBufferArrayBuffers),
              this.resetOutputBuffers()));
        }
      }));
    var s,
      u = {
        init: function (n) {
          s = new e(n);
        },
        decode: function (t) {
          s && s.decode(t);
        },
        done: function () {
          s && s.sendLastBuffer();
        },
      };
    l.default = u;
  },
  98,
);
