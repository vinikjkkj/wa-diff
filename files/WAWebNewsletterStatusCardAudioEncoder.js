__d(
  "WAWebNewsletterStatusCardAudioEncoder",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCanvasUtils",
    "WAWebNewsletterStatusCardAacConfig",
    "err",
    "getErrorSafe",
    "mediabunny",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = 10,
      c = 1 / u,
      d = 9e4,
      m = ["aac"],
      p = 1024,
      _ = new Set([5, 29]),
      f = 2048,
      g = 2,
      h = "42e0",
      y = 16,
      C = [
        { maxMacroblocks: 3600, level: 31 },
        { maxMacroblocks: 8192, level: 40 },
        { maxMacroblocks: 8704, level: 42 },
      ],
      b = 51;
    async function v(t) {
      var n,
        a = t.audio,
        i = t.maxDurationMs,
        l = t.scene,
        s = new (n = o("mediabunny")).Input({
          source: new n.BlobSource(a),
          formats: n.ALL_FORMATS,
        }),
        u = new n.Output({
          target: new n.BufferTarget(),
          format: new n.Mp4OutputFormat({ fastStart: "in-memory" }),
        });
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          S({ input: s, maxDurationMs: i, output: u, scene: l }),
          d,
        );
      } catch (t) {
        throw (
          u.cancel().catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-status-card] could not stop encoding a voice note status card",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          }),
          t
        );
      } finally {
        s.dispose();
      }
      var c = u.target.buffer;
      if (c == null)
        throw r("err")(
          "encodeNewsletterStatusCardAudio: the encoding wrote no video",
        );
      return new Blob([c], { type: "video/mp4" });
    }
    async function S(e) {
      var t = e.input,
        n = e.maxDurationMs,
        a = e.output,
        i = e.scene,
        l = await t.getPrimaryAudioTrack();
      if (l == null)
        throw r("err")(
          "encodeNewsletterStatusCardAudio: the voice note has no audio",
        );
      var c = await o("mediabunny").getFirstEncodableAudioCodec(m, {
        numberOfChannels: l.numberOfChannels,
        sampleRate: l.sampleRate,
      });
      if (c == null)
        throw r("err")(
          "encodeNewsletterStatusCardAudio: the browser cannot encode AAC",
        );
      var d = await l.computeDuration(),
        p = Math.min(d, n / s),
        _ = o("WAWebCanvasUtils").createCanvas($(i.width), $(i.height)),
        f = new (o("mediabunny").CanvasSource)(_, {
          codec: "avc",
          bitrate: o("mediabunny").QUALITY_MEDIUM,
          fullCodecString: x(_.width, _.height),
        }),
        g = new (o("mediabunny").AudioSampleSource)({
          codec: c,
          bitrate: o("mediabunny").QUALITY_MEDIUM,
          onEncodedPacket: k(l.sampleRate),
        });
      (a.addVideoTrack(f, { frameRate: u }),
        a.addAudioTrack(g),
        await a.start(),
        await Promise.all([
          R({
            durationSeconds: p,
            frame: _,
            frames: f,
            scene: i,
            voiceNoteSeconds: d,
          }),
          L({ durationSeconds: p, samples: g, track: l }),
        ]),
        await a.finalize());
    }
    async function R(e) {
      var t = e.durationSeconds,
        n = e.frame,
        o = e.frames,
        a = e.scene,
        i = e.voiceNoteSeconds,
        l = n.getContext("2d");
      if (l == null)
        throw r("err")("encodeNewsletterStatusCardAudio: no 2D canvas context");
      var s = Math.max(1, Math.ceil(t * u)),
        d = Array.from({ length: s }, function (e, t) {
          return t / u;
        });
      (await d.reduce(function (e, t) {
        return e.then(function () {
          return (
            l.drawImage(a.drawFrame(E(t + c, i)), 0, 0, n.width, n.height),
            o.add(t, c)
          );
        });
      }, Promise.resolve()),
        o.close());
    }
    async function L(e) {
      var t = e.durationSeconds,
        n = e.samples,
        r = e.track,
        a = !1,
        i = !1,
        l;
      try {
        for (
          var s = babelHelpers.asyncIterator(
              new (o("mediabunny").AudioSampleSink)(r).samples(0, t),
            ),
            u;
          (a = !(u = await s.next()).done);
          a = !1
        ) {
          var c = u.value;
          try {
            await n.add(c);
          } finally {
            c.close();
          }
        }
      } catch (e) {
        ((i = !0), (l = e));
      } finally {
        try {
          a && s.return != null && (await s.return());
        } finally {
          if (i) throw l;
        }
      }
      n.close();
    }
    function E(e, t) {
      return t > 0 ? Math.min(1, e / t) : 1;
    }
    function k(e) {
      var t = I(e);
      return function (e, n) {
        var r;
        (D(n),
          t(e, n == null || (r = n.decoderConfig) == null ? void 0 : r.codec));
      };
    }
    function I(e) {
      var t = null,
        n = 0,
        r = p;
      return function (o, a) {
        r = a != null ? T(a) : r;
        var i = t != null ? t : o.timestamp;
        t = i;
        var l = Math.round(o.duration * e),
          s = l > 0 ? l : r;
        ((o.timestamp = i + n / e), (o.duration = s / e), (n += s));
      };
    }
    function T(e) {
      var t = Number(e.split(".")[g]);
      return _.has(t) ? f : p;
    }
    function D(e) {
      var t = e == null ? void 0 : e.decoderConfig,
        n = t == null ? void 0 : t.description;
      t == null ||
        n == null ||
        (t.description = o(
          "WAWebNewsletterStatusCardAacConfig",
        ).getAudioSpecificConfig(
          n instanceof ArrayBuffer
            ? new Uint8Array(n)
            : new Uint8Array(n.buffer, n.byteOffset, n.byteLength),
        ));
    }
    function x(e, t) {
      var n,
        r,
        o = Math.ceil(e / y) * Math.ceil(t / y),
        a =
          (n =
            (r = C.find(function (e) {
              var t = e.maxMacroblocks;
              return o <= t;
            })) == null
              ? void 0
              : r.level) != null
            ? n
            : b;
      return "avc1." + h + a.toString(16);
    }
    function $(e) {
      return Math.floor(e / 2) * 2;
    }
    l.default = v;
  },
  98,
);
