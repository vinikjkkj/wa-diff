__d(
  "WAWebVoipVideoEffectsWorker",
  [
    "WAWebVoipBackgroundBlurLevel",
    "WAWebVoipBackgroundBlurStrength",
    "WAWebVoipBackgroundSegmentationCadence",
    "WAWebVoipBackgroundSegmenter",
    "WAWebVoipVideoEffectsCompositor",
    "WAWebVoipVideoEffectsFrameStats",
    "WAWebVoipVideoEffectsWorkerMessageTypes",
    "WAWebVoipWasmSimdSupport",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        antialias: !1,
        depth: !1,
        failIfMajorPerformanceCaveat: !0,
        preserveDrawingBuffer: !1,
        stencil: !1,
      },
      s = /swiftshader|llvmpipe|softpipe|basic render|software/i,
      u = 4,
      c = 25,
      d = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, n) || this), (r.reason = t), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      m = self,
      p = null,
      _ = null,
      f = new (o(
        "WAWebVoipBackgroundSegmentationCadence",
      ).WAWebVoipBackgroundSegmentationCadence)(),
      g = T(0),
      h = 0,
      y = o("WAWebVoipBackgroundBlurStrength").getBlurLevelStrength(
        o("WAWebVoipBackgroundBlurLevel").DEFAULT_BACKGROUND_BLUR_LEVEL,
      ),
      C = Promise.resolve(),
      b = 0;
    function v() {
      (m.addEventListener("message", function (e) {
        if (e instanceof MessageEvent) {
          var t = o(
            "WAWebVoipVideoEffectsWorkerMessageTypes",
          ).parseMainToWorkerMessage(e.data);
          if (t == null) {
            M(e.data);
            return;
          }
          if (t.type === "init") b++;
          else if (t.type === "processFrame" && (p == null || b > 0)) {
            N(t.id, t.frame, "video effects: not initialized");
            return;
          }
          C = C.then(function () {
            return S(t);
          }).catch(function (e) {
            B("error", "video effects: " + t.type + " failed: " + String(e));
          });
        }
      }),
        W({ type: "ready" }));
    }
    function S(e) {
      var t;
      switch (e.type) {
        case "init":
          return L(e.assets);
        case "processFrame":
          return k(e.id, e.frame);
        case "setEffect":
          return (R(e.effect), Promise.resolve());
        case "setImageBlur":
          return (
            (t = p) == null || t.compositor.setImageBlur(e.strength),
            Promise.resolve()
          );
      }
    }
    function R(e) {
      if (e.kind === "blur") {
        var t;
        ((y = e.strength),
          (t = p) == null || t.compositor.setBlurStrength(e.strength));
        return;
      }
      try {
        var n,
          r = (n = p) == null ? void 0 : n.compositor;
        if (r == null) {
          B(
            "warn",
            "video effects: dropped a background image sent before init",
          );
          return;
        }
        (r.setImageBlur(e.blur),
          r.setBackgroundImage({
            columns: e.columns,
            rows: e.rows,
            tiles: e.tiles,
          }));
      } finally {
        for (var o of e.tiles) o.close();
      }
    }
    async function L(e) {
      try {
        await E(e);
      } finally {
        b--;
      }
    }
    async function E(t) {
      var n = m.performance.now();
      w();
      var a = {};
      try {
        if (!("OffscreenCanvas" in m) || !("VideoFrame" in m))
          throw new d("unsupported", "OffscreenCanvas or VideoFrame missing");
        if (!o("WAWebVoipWasmSimdSupport").supportsWasmSimd())
          throw new d("unsupported", "no wasm SIMD");
        var i = new OffscreenCanvas(1, 1);
        ((a.canvas = i),
          (_ = i),
          i.addEventListener("webglcontextlost", function () {
            _ === i && W({ type: "contextLost" });
          }));
        var l = i.getContext("webgl2", e);
        if (l == null)
          throw new d("unsupported", "no WebGL2 that renders on the GPU");
        a.gl = l;
        var f = O(l);
        if (s.test(f)) throw new d("software_gpu", f);
        var g = new (o(
          "WAWebVoipVideoEffectsCompositor",
        ).WAWebVoipVideoEffectsCompositor)(i, l);
        (g.setBlurStrength(y), (a.compositor = g));
        var h = await o(
          "WAWebVoipBackgroundSegmenter",
        ).WAWebVoipBackgroundSegmenter.create(t, function (e) {
          return B("warn", "segmentation runtime: " + e);
        });
        a.segmenter = h;
        var C = h.warmUp(u);
        if (C == null)
          throw r("err")("video effects: warm-up returned no mask");
        if (C > c)
          throw new d(
            "too_slow",
            "the model took " + C.toFixed(1) + " ms at best, over " + c + " ms",
          );
        if (l.isContextLost())
          throw r("err")("video effects: WebGL context lost during init");
        ((p = { canvas: i, compositor: g, gl: l, segmenter: h }),
          W({
            type: "initDone",
            gpu: f,
            initMs: m.performance.now() - n,
            modelMs: C,
          }));
      } catch (e) {
        (A(a),
          W({
            type: "initFailed",
            reason: e instanceof d ? e.reason : "error",
            detail: e instanceof Error ? e.message : String(e),
          }));
      }
    }
    async function k(e, t) {
      var n = p,
        o = m.performance.now(),
        a = null;
      try {
        var i;
        if (n == null) throw r("err")("video effects: not initialized");
        var l = n.canvas,
          s = n.compositor,
          u = n.gl,
          c = n.segmenter;
        if (u.isContextLost())
          throw r("err")("video effects: WebGL context lost");
        var d = t.displayWidth,
          _ = t.displayHeight,
          g = f.startFrame(o);
        g === "fresh" && (s.dropMask(), c.resetTracking(), x(o));
        var h = g !== "reuse" || !s.hasMaskFor(d, _);
        if ((s.setFrame(t), h && I(s, c, d, _), !s.hasMaskFor(d, _)))
          throw r("err")("video effects: no person mask for this frame");
        s.render();
        var y = new VideoFrame(l, {
          duration: (i = t.duration) != null ? i : void 0,
          timestamp: t.timestamp,
        });
        a = y;
        var C = m.performance.now(),
          b = f.finishFrame(C, h);
        (W(
          {
            type: "frameProcessed",
            id: e,
            frame: y,
            processMs: C - o,
            segmented: h,
          },
          [y],
        ),
          (a = null),
          b != null && P(b),
          D(C));
      } catch (t) {
        var v;
        ((v = a) == null || v.close(),
          W({ type: "frameFailed", id: e, detail: String(t) }));
      } finally {
        t.close();
      }
    }
    function I(e, t, n, r) {
      var a = o("WAWebVoipBackgroundSegmenter").getModelFraming(n, r),
        i = m.performance.now(),
        l = e.readModelInput(a),
        s = m.performance.now(),
        u = t.segment(l, a),
        c = m.performance.now();
      e.updateMask(u, a.contentWidth, a.contentHeight);
      var d = g,
        p = c - s;
      (d.frames++,
        (d.framing = a),
        (d.readMs += s - i),
        (d.modelMs += p),
        (d.maxModelMs = Math.max(d.maxModelMs, p)),
        (d.maskMs += m.performance.now() - c));
    }
    function T(e) {
      return {
        frames: 0,
        framing: null,
        maskMs: 0,
        maxModelMs: 0,
        modelMs: 0,
        readMs: 0,
        sinceMs: e,
      };
    }
    function D(e) {
      var t = g,
        n = t.sinceMs;
      e - n >=
        o("WAWebVoipVideoEffectsFrameStats").getSummaryIntervalMs(n - h) &&
        $(e);
    }
    function x(e) {
      ($(e), (h = e));
    }
    function $(e) {
      var t = g,
        n = t.frames,
        r = t.framing,
        o = t.maskMs,
        a = t.maxModelMs,
        i = t.modelMs,
        l = t.readMs;
      if (((g = T(e)), !(n === 0 || r == null))) {
        var s = function (t) {
          return (t / n).toFixed(1);
        };
        B(
          "log",
          "video effects: segmented " +
            n +
            " frames at " +
            r.width +
            "x" +
            r.height +
            " (frame " +
            r.contentWidth +
            "x" +
            r.contentHeight +
            "): read " +
            s(l) +
            " ms, model " +
            s(i) +
            " ms (max " +
            a.toFixed(1) +
            "), mask " +
            s(o) +
            " ms",
        );
      }
    }
    function P(e) {
      var t = e.averageMs,
        n = e.budgetMs,
        r = e.reusedMs,
        o = e.segmentedMs,
        a = e.stride,
        i = function (t) {
          return t.toFixed(1);
        };
      B(
        "log",
        "video effects: segmenting " +
          (a === 1 ? "every frame" : "1 in " + a + " frames") +
          ": segmented frames take " +
          i(o) +
          " ms and others " +
          i(r) +
          " ms, so " +
          i(t) +
          " ms a frame against a " +
          i(n) +
          " ms budget",
      );
    }
    function N(e, t, n) {
      (t.close(), W({ type: "frameFailed", id: e, detail: n }));
    }
    function M(e) {
      (o("WAWebVoipVideoEffectsWorkerMessageTypes").closeDroppedMessage(e),
        B("error", "video effects: dropped a malformed message"));
    }
    function w() {
      var e = p;
      ((p = null),
        (f = new (o(
          "WAWebVoipBackgroundSegmentationCadence",
        ).WAWebVoipBackgroundSegmentationCadence)()),
        (h = m.performance.now()),
        (g = T(h)),
        e != null && A(e));
    }
    function A(e) {
      (e.canvas != null && _ === e.canvas && (_ = null),
        F("segmenter", function () {
          var t;
          return (t = e.segmenter) == null ? void 0 : t.close();
        }),
        F("compositor", function () {
          var t;
          return (t = e.compositor) == null ? void 0 : t.dispose();
        }),
        F("context", function () {
          var t;
          return (t = e.gl) == null ||
            (t = t.getExtension("WEBGL_lose_context")) == null
            ? void 0
            : t.loseContext();
        }));
    }
    function F(e, t) {
      try {
        t();
      } catch (t) {
        B("warn", "video effects: releasing " + e + " failed: " + String(t));
      }
    }
    function O(e) {
      var t = e.getExtension("WEBGL_debug_renderer_info"),
        n = e.getParameter(t != null ? t.UNMASKED_RENDERER_WEBGL : e.RENDERER);
      return typeof n == "string" ? n : "unknown";
    }
    function B(e, t) {
      W({ type: "log", level: e, message: t });
    }
    function W(e, t) {
      m.postMessage(e, t != null ? t : []);
    }
    l.default = v;
  },
  98,
);
