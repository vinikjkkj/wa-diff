__d(
  "WAOpusRecorderEncoder",
  ["WAOpusRecorderLibopus", "WAOpusRecorderResampler"],
  function (t, n, r, o, a, i, l) {
    var e = 3840,
      s = Math.pow(2, 32),
      u = function (n) {
        var t, o, a, i, l;
        ((this.numberOfChannels = (t = n.numberOfChannels) != null ? t : 1),
          (this.originalSampleRate = n.originalSampleRate),
          (this.encoderSampleRate =
            (o = n.encoderSampleRate) != null ? o : 48e3),
          (this.maxBuffersPerPage = (a = n.maxBuffersPerPage) != null ? a : 40),
          (this.encoderApplication =
            (i = n.encoderApplication) != null ? i : 2049),
          (this.encoderFrameSize = (l = n.encoderFrameSize) != null ? l : 20),
          (this.bitRate = n.bitRate),
          (this.resampler = new (r("WAOpusRecorderResampler"))({
            resampledRate: this.encoderSampleRate,
            originalSampleRate: this.originalSampleRate,
            numberOfChannels: this.numberOfChannels,
          })),
          (this.pageIndex = 0),
          (this.granulePosition = 0),
          (this.segmentData = new Uint8Array(65025)),
          (this.segmentDataIndex = 0),
          (this.segmentTable = new Uint8Array(255)),
          (this.segmentTableIndex = 0),
          (this.buffersInPage = 0),
          (this.serial = Math.floor(Math.random() * Math.pow(2, 32))),
          this.initChecksumTable(),
          this.initCodec(),
          this.generateIdPage(),
          this.generateCommentPage(),
          (this.granulePosition = e),
          this.numberOfChannels === 1 &&
            (this.interleave = function (e) {
              return e[0];
            }));
      };
    ((u.prototype.encode = function (e) {
      for (var t = this.interleave(this.resample(e)), n = 0; n < t.length; ) {
        var o = Math.min(
          this.encoderBufferLength - this.encoderBufferIndex,
          t.length - n,
        );
        if (
          (this.encoderBuffer.set(
            t.subarray(n, n + o),
            this.encoderBufferIndex,
          ),
          (n += o),
          (this.encoderBufferIndex += o),
          this.encoderBufferIndex === this.encoderBufferLength)
        ) {
          var a = r("WAOpusRecorderLibopus")._opus_encode_float(
            this.encoder,
            this.encoderBufferPointer,
            this.encoderSamplesPerChannelPerPacket,
            this.encoderOutputPointer,
            this.encoderOutputMaxLength,
          );
          (this.segmentPacket(a), (this.encoderBufferIndex = 0));
        }
      }
      (this.buffersInPage++,
        this.buffersInPage >= this.maxBuffersPerPage && this.generatePage());
    }),
      (u.prototype.encodeFinalFrame = function () {
        for (var e = [], t = 0; t < this.numberOfChannels; ++t)
          e.push(
            new Float32Array(
              this.encoderBufferLength - this.encoderBufferIndex,
            ),
          );
        (this.encode(e),
          (this.headerType += 4),
          this.generatePage(),
          self.close());
      }),
      (u.prototype.getChecksum = function (e) {
        for (var t = 0, n = 0; n < e.length; n++)
          t = (t << 8) ^ this.checksumTable[((t >>> 24) & 255) ^ e[n]];
        return t >>> 0;
      }),
      (u.prototype.generateCommentPage = function () {
        var e = new DataView(this.segmentData.buffer);
        (e.setUint32(0, 1937076303, !0),
          e.setUint32(4, 1936154964, !0),
          e.setUint32(8, 8, !0),
          e.setUint32(12, 1868784978, !0),
          e.setUint32(16, 1919247474, !0),
          e.setUint32(20, 0, !0),
          (this.segmentTableIndex = 1),
          (this.segmentDataIndex = this.segmentTable[0] = 24),
          (this.headerType = 0),
          this.generatePage());
      }),
      (u.prototype.generateIdPage = function () {
        var t = new DataView(this.segmentData.buffer);
        (t.setUint32(0, 1937076303, !0),
          t.setUint32(4, 1684104520, !0),
          t.setUint8(8, 1, !0),
          t.setUint8(9, this.numberOfChannels, !0),
          t.setUint16(10, e, !0),
          t.setUint32(12, this.originalSampleRate, !0),
          t.setUint16(16, 0, !0),
          t.setUint8(18, 0, !0),
          (this.segmentTableIndex = 1),
          (this.segmentDataIndex = this.segmentTable[0] = 19),
          (this.headerType = 2),
          this.generatePage());
      }),
      (u.prototype.generatePage = function () {
        var e =
            this.lastPositiveGranulePosition === this.granulePosition
              ? -1
              : this.granulePosition,
          t = new ArrayBuffer(
            27 + this.segmentTableIndex + this.segmentDataIndex,
          ),
          n = new DataView(t),
          r = new Uint8Array(t);
        (n.setUint32(0, 1399285583, !0),
          n.setUint8(4, 0, !0),
          n.setUint8(5, this.headerType, !0),
          n.setUint32(6, e, !0),
          (e >= s || e < 0) && n.setUint32(10, Math.floor(e / s), !0),
          n.setUint32(14, this.serial, !0),
          n.setUint32(18, this.pageIndex++, !0),
          n.setUint8(26, this.segmentTableIndex, !0),
          r.set(this.segmentTable.subarray(0, this.segmentTableIndex), 27),
          r.set(
            this.segmentData.subarray(0, this.segmentDataIndex),
            27 + this.segmentTableIndex,
          ),
          n.setUint32(22, this.getChecksum(r), !0),
          globalThis.postMessage({ message: "page", page: r }, [r.buffer]),
          (this.segmentTableIndex = 0),
          (this.segmentDataIndex = 0),
          (this.buffersInPage = 0),
          e > 0 && (this.lastPositiveGranulePosition = e));
      }),
      (u.prototype.initChecksumTable = function () {
        this.checksumTable = [];
        for (var e = 0; e < 256; e++) {
          for (var t = e << 24, n = 0; n < 8; n++)
            t = (t & 2147483648) !== 0 ? (t << 1) ^ 79764919 : t << 1;
          this.checksumTable[e] = t & 4294967295;
        }
      }),
      (u.prototype.initCodec = function () {
        if (
          ((this.encoder = r("WAOpusRecorderLibopus")._opus_encoder_create(
            this.encoderSampleRate,
            this.numberOfChannels,
            this.encoderApplication,
            r("WAOpusRecorderLibopus").allocate(
              4,
              "i32",
              r("WAOpusRecorderLibopus").ALLOC_STACK,
            ),
          )),
          this.bitRate)
        ) {
          var e,
            t = (e = r("WAOpusRecorderLibopus"))._malloc(4);
          ((e.HEAP32[t >>> 2] = this.bitRate),
            e._opus_encoder_ctl(this.encoder, 4002, t),
            e._free(t));
        }
        ((this.encoderBufferIndex = 0),
          (this.encoderSamplesPerChannelPerPacket =
            (this.encoderSampleRate * this.encoderFrameSize) / 1e3),
          (this.encoderBufferLength =
            this.encoderSamplesPerChannelPerPacket * this.numberOfChannels),
          (this.encoderBufferPointer = r("WAOpusRecorderLibopus")._malloc(
            this.encoderBufferLength * 4,
          )),
          (this.encoderBuffer = r("WAOpusRecorderLibopus").HEAPF32.subarray(
            this.encoderBufferPointer >> 2,
            (this.encoderBufferPointer >> 2) + this.encoderBufferLength,
          )),
          (this.encoderOutputMaxLength = 4e3),
          (this.encoderOutputPointer = r("WAOpusRecorderLibopus")._malloc(
            this.encoderOutputMaxLength,
          )),
          (this.encoderOutputBuffer = r(
            "WAOpusRecorderLibopus",
          ).HEAPU8.subarray(
            this.encoderOutputPointer,
            this.encoderOutputPointer + this.encoderOutputMaxLength,
          )));
      }),
      (u.prototype.interleave = function (e) {
        for (
          var t = new Float32Array(e[0].length * this.numberOfChannels), n = 0;
          n < e[0].length;
          n++
        )
          for (var r = 0; r < this.numberOfChannels; r++)
            t[n * this.numberOfChannels + r] = e[r][n];
        return t;
      }),
      (u.prototype.resample = function (e) {
        for (var t = [], n = 0; n < this.numberOfChannels; n++)
          t.push(this.resampler.resample(e[n], n));
        return t;
      }),
      (u.prototype.segmentPacket = function (e) {
        for (var t = e, n = 0; t >= 0; ) {
          this.segmentTableIndex === 255 &&
            (this.generatePage(), (this.headerType = 1));
          var r = Math.min(t, 255);
          ((this.segmentTable[this.segmentTableIndex++] = r),
            this.segmentData.set(
              this.encoderOutputBuffer.subarray(n, n + r),
              this.segmentDataIndex,
            ),
            (this.segmentDataIndex += r),
            (n += r),
            (t -= 255));
        }
        ((this.granulePosition += 48 * this.encoderFrameSize),
          this.segmentTableIndex === 255 &&
            (this.generatePage(), (this.headerType = 0)));
      }),
      (u.prototype.flush = function (e) {
        (this.buffersInPage > 0 && this.generatePage(),
          globalThis.postMessage({ message: "flushed", requestId: e }));
      }));
    var c,
      d = {
        init: function (t) {
          c = new u(t);
        },
        encode: function (t) {
          c.encode(t);
        },
        flush: function (t) {
          c.flush(t);
        },
        done: function () {
          c && c.encodeFinalFrame();
        },
      };
    l.default = d;
  },
  98,
);
