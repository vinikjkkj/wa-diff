__d(
  "WAWebNewsletterStatusCardVideoEncoder",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCanvasUtils",
    "err",
    "getErrorSafe",
    "mediabunny",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = 9e4,
      c = 2,
      d = 2 * Math.PI,
      m = 360;
    async function p(e) {
      var t,
        n = e.maxDurationMs,
        a = e.scene,
        i = e.video,
        l = g(a),
        d = new (t = o("mediabunny")).Output({
          target: new t.BufferTarget(),
          format: new t.Mp4OutputFormat({ fastStart: "in-memory" }),
        }),
        m = new t.Input({
          source: new t.BlobSource(i),
          formats: t.ALL_FORMATS,
        }),
        p = !1,
        f = _({ draw: l, endSeconds: n / s, input: m, output: d }).finally(
          function () {
            p = !0;
          },
        );
      try {
        await o("WAPromiseTimeout").promiseTimeout(h(f), Math.max(u, c * n));
      } catch (e) {
        throw (C(f, p ? null : d), e);
      } finally {
        m.dispose();
      }
      var y = d.target.buffer;
      if (y == null)
        throw r("err")(
          "encodeNewsletterStatusCardVideo: the conversion wrote no video",
        );
      return new Blob([y], { type: "video/mp4" });
    }
    function _(e) {
      var t = e.draw,
        n = e.endSeconds,
        r = e.input,
        a = e.output,
        i = function (i) {
          return o("mediabunny").Conversion.init({
            input: r,
            output: a,
            trim: { start: 0, end: n },
            video: function (n) {
              return {
                codec: "avc",
                bitrate: o("mediabunny").QUALITY_MEDIUM,
                forceTranscode: !0,
                frameRate: t.frameRate,
                rotate: (m - n.rotation) % m,
                processedWidth: t.width,
                processedHeight: t.height,
                process: function (r) {
                  return t.frame(r, n.rotation, i);
                },
              };
            },
          });
        };
      return t.frameRate != null
        ? f(r).then(function (e) {
            return i(Math.min(e, n));
          })
        : i(n);
    }
    async function f(e) {
      var t = await e.getPrimaryVideoTrack();
      if (t == null)
        throw r("err")(
          "encodeNewsletterStatusCardVideo: the video has no video track",
        );
      return t.computeDuration();
    }
    function g(e) {
      var t = e.area,
        n = e.background,
        r = e.clip,
        a = e.overlay,
        i = S(n.width),
        l = S(n.height),
        s = b(o("WAWebCanvasUtils").createCanvas(i, l)),
        u = b(
          o("WAWebCanvasUtils").createCanvas(
            Math.round(t.width),
            Math.round(t.height),
          ),
        );
      return {
        width: i,
        height: l,
        frameRate: a == null ? void 0 : a.frameRate,
        frame: function (o, i, l) {
          return (
            u.save(),
            o.drawWithFit(u, { fit: "cover", rotation: i }),
            u.restore(),
            s.drawImage(n, 0, 0),
            s.save(),
            v(s, t, r),
            s.clip(),
            s.drawImage(u.canvas, t.x, t.y, t.width, t.height),
            s.restore(),
            a != null &&
              (s.save(),
              a.draw(s, {
                frameTimeSeconds: o.timestamp,
                clipDurationSeconds: l,
              }),
              s.restore()),
            s.canvas
          );
        },
      };
    }
    async function h(e) {
      var t = await e;
      if (
        !t.isValid ||
        !t.utilizedTracks.some(function (e) {
          return e.isVideoTrack();
        }) ||
        y(t)
      )
        throw r("err")(
          "encodeNewsletterStatusCardVideo: the video cannot be converted (" +
            t.discardedTracks
              .map(function (e) {
                var t = e.reason;
                return t;
              })
              .join(", ") +
            ")",
        );
      await t.execute();
    }
    function y(e) {
      var t = e.discardedTracks,
        n = e.utilizedTracks;
      return (
        t.some(function (e) {
          var t = e.track;
          return t.isAudioTrack();
        }) &&
        !n.some(function (e) {
          return e.isAudioTrack();
        })
      );
    }
    function C(t, n) {
      Promise.all([
        t.then(
          function (e) {
            return e.cancel();
          },
          function () {},
        ),
        n == null ? void 0 : n.cancel(),
      ]).catch(function (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter-status-card] could not stop converting a status card video",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      });
    }
    function b(e) {
      var t = e.getContext("2d");
      if (t == null)
        throw r("err")("encodeNewsletterStatusCardVideo: no 2D canvas context");
      return t;
    }
    function v(e, t, n) {
      var r = t.height,
        o = t.width,
        a = t.x,
        i = t.y;
      if ((e.beginPath(), n.kind === "circle")) {
        e.arc(a + o / 2, i + r / 2, Math.min(o, r) / 2, 0, d);
        return;
      }
      var l = Math.min(n.radius, o / 2, r / 2);
      (e.moveTo(a + l, i),
        e.arcTo(a + o, i, a + o, i + r, l),
        e.arcTo(a + o, i + r, a, i + r, l),
        e.arcTo(a, i + r, a, i, l),
        e.arcTo(a, i, a + o, i, l),
        e.closePath());
    }
    function S(e) {
      return e - (e % 2);
    }
    l.default = p;
  },
  98,
);
