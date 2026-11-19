__d(
  "WAWebVoipVideoEffectsWorker",
  [
    "Promise",
    "WAWebVoipBackgroundBlurLevel",
    "WAWebVoipBackgroundBlurStrength",
    "WAWebVoipBackgroundSegmentationCadence",
    "WAWebVoipBackgroundSegmenter",
    "WAWebVoipVideoEffectsCompositor",
    "WAWebVoipVideoEffectsFrameStats",
    "WAWebVoipVideoEffectsWorkerMessageTypes",
    "WAWebVoipWasmSimdSupport",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        antialias: !1,
        depth: !1,
        failIfMajorPerformanceCaveat: !0,
        preserveDrawingBuffer: !1,
        stencil: !1,
      },
      u = /swiftshader|llvmpipe|softpipe|basic render|software/i,
      c = 4,
      d = 25,
      m = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, n) || this), (r.reason = t), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      p = self,
      _ = null,
      f = null,
      g = new (o(
        "WAWebVoipBackgroundSegmentationCadence",
      ).WAWebVoipBackgroundSegmentationCadence)(),
      h = P(0),
      y = 0,
      C = o("WAWebVoipBackgroundBlurStrength").getBlurLevelStrength(
        o("WAWebVoipBackgroundBlurLevel").DEFAULT_BACKGROUND_BLUR_LEVEL,
      ),
      b = (e || (e = n("Promise"))).resolve(),
      v = 0;
    function S() {
      (p.addEventListener("message", function (e) {
        if (e instanceof MessageEvent) {
          var t = o(
            "WAWebVoipVideoEffectsWorkerMessageTypes",
          ).parseMainToWorkerMessage(e.data);
          if (t == null) {
            O(e.data);
            return;
          }
          if (t.type === "init") v++;
          else if (t.type === "processFrame" && (_ == null || v > 0)) {
            F(t.id, t.frame, "video effects: not initialized");
            return;
          }
          b = b
            .then(function () {
              return R(t);
            })
            .catch(function (e) {
              V("error", "video effects: " + t.type + " failed: " + String(e));
            });
        }
      }),
        H({ type: "ready" }));
    }
    function R(t) {
      var r;
      switch (t.type) {
        case "init":
          return E(t.assets);
        case "processFrame":
          return D(t.id, t.frame);
        case "setEffect":
          return (L(t.effect), (e || (e = n("Promise"))).resolve());
        case "setImageBlur":
          return (
            (r = _) == null || r.compositor.setImageBlur(t.strength),
            (e || (e = n("Promise"))).resolve()
          );
      }
    }
    function L(e) {
      if (e.kind === "blur") {
        var t;
        ((C = e.strength),
          (t = _) == null || t.compositor.setBlurStrength(e.strength));
        return;
      }
      try {
        var n,
          r = (n = _) == null ? void 0 : n.compositor;
        if (r == null) {
          V(
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
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield I(e);
          } finally {
            v--;
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p.performance.now();
          B();
          var n = {};
          try {
            if (!("OffscreenCanvas" in p) || !("VideoFrame" in p))
              throw new m(
                "unsupported",
                "OffscreenCanvas or VideoFrame missing",
              );
            if (!o("WAWebVoipWasmSimdSupport").supportsWasmSimd())
              throw new m("unsupported", "no wasm SIMD");
            var a = new OffscreenCanvas(1, 1);
            ((n.canvas = a),
              (f = a),
              a.addEventListener("webglcontextlost", function () {
                f === a && H({ type: "contextLost" });
              }));
            var i = a.getContext("webgl2", s);
            if (i == null)
              throw new m("unsupported", "no WebGL2 that renders on the GPU");
            n.gl = i;
            var l = U(i);
            if (u.test(l)) throw new m("software_gpu", l);
            var g = new (o(
              "WAWebVoipVideoEffectsCompositor",
            ).WAWebVoipVideoEffectsCompositor)(a, i);
            (g.setBlurStrength(C), (n.compositor = g));
            var h = yield o(
              "WAWebVoipBackgroundSegmenter",
            ).WAWebVoipBackgroundSegmenter.create(e, function (e) {
              return V("warn", "segmentation runtime: " + e);
            });
            n.segmenter = h;
            var y = h.warmUp(c);
            if (y == null)
              throw r("err")("video effects: warm-up returned no mask");
            if (y > d)
              throw new m(
                "too_slow",
                "the model took " +
                  y.toFixed(1) +
                  " ms at best, over " +
                  d +
                  " ms",
              );
            if (i.isContextLost())
              throw r("err")("video effects: WebGL context lost during init");
            ((_ = { canvas: a, compositor: g, gl: i, segmenter: h }),
              H({
                type: "initDone",
                gpu: l,
                initMs: p.performance.now() - t,
                modelMs: y,
              }));
          } catch (e) {
            (W(n),
              H({
                type: "initFailed",
                reason: e instanceof m ? e.reason : "error",
                detail: e instanceof Error ? e.message : String(e),
              }));
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = _,
            o = p.performance.now(),
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
              m = t.displayHeight,
              f = g.startFrame(o);
            f === "fresh" && (s.dropMask(), c.resetTracking(), M(o));
            var h = f !== "reuse" || !s.hasMaskFor(d, m);
            if ((s.setFrame(t), h && $(s, c, d, m), !s.hasMaskFor(d, m)))
              throw r("err")("video effects: no person mask for this frame");
            s.render();
            var y = new VideoFrame(l, {
              duration: (i = t.duration) != null ? i : void 0,
              timestamp: t.timestamp,
            });
            a = y;
            var C = p.performance.now(),
              b = g.finishFrame(C, h);
            (H(
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
              b != null && A(b),
              N(C));
          } catch (t) {
            var v;
            ((v = a) == null || v.close(),
              H({ type: "frameFailed", id: e, detail: String(t) }));
          } finally {
            t.close();
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r) {
      var a = o("WAWebVoipBackgroundSegmenter").getModelFraming(n, r),
        i = p.performance.now(),
        l = e.readModelInput(a),
        s = p.performance.now(),
        u = t.segment(l, a),
        c = p.performance.now();
      e.updateMask(u, a.contentWidth, a.contentHeight);
      var d = h,
        m = c - s;
      (d.frames++,
        (d.framing = a),
        (d.readMs += s - i),
        (d.modelMs += m),
        (d.maxModelMs = Math.max(d.maxModelMs, m)),
        (d.maskMs += p.performance.now() - c));
    }
    function P(e) {
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
    function N(e) {
      var t = h,
        n = t.sinceMs;
      e - n >=
        o("WAWebVoipVideoEffectsFrameStats").getSummaryIntervalMs(n - y) &&
        w(e);
    }
    function M(e) {
      (w(e), (y = e));
    }
    function w(e) {
      var t = h,
        n = t.frames,
        r = t.framing,
        o = t.maskMs,
        a = t.maxModelMs,
        i = t.modelMs,
        l = t.readMs;
      if (((h = P(e)), !(n === 0 || r == null))) {
        var s = function (t) {
          return (t / n).toFixed(1);
        };
        V(
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
    function A(e) {
      var t = e.averageMs,
        n = e.budgetMs,
        r = e.reusedMs,
        o = e.segmentedMs,
        a = e.stride,
        i = function (t) {
          return t.toFixed(1);
        };
      V(
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
    function F(e, t, n) {
      (t.close(), H({ type: "frameFailed", id: e, detail: n }));
    }
    function O(e) {
      (o("WAWebVoipVideoEffectsWorkerMessageTypes").closeDroppedMessage(e),
        V("error", "video effects: dropped a malformed message"));
    }
    function B() {
      var e = _;
      ((_ = null),
        (g = new (o(
          "WAWebVoipBackgroundSegmentationCadence",
        ).WAWebVoipBackgroundSegmentationCadence)()),
        (y = p.performance.now()),
        (h = P(y)),
        e != null && W(e));
    }
    function W(e) {
      (e.canvas != null && f === e.canvas && (f = null),
        q("segmenter", function () {
          var t;
          return (t = e.segmenter) == null ? void 0 : t.close();
        }),
        q("compositor", function () {
          var t;
          return (t = e.compositor) == null ? void 0 : t.dispose();
        }),
        q("context", function () {
          var t;
          return (t = e.gl) == null ||
            (t = t.getExtension("WEBGL_lose_context")) == null
            ? void 0
            : t.loseContext();
        }));
    }
    function q(e, t) {
      try {
        t();
      } catch (t) {
        V("warn", "video effects: releasing " + e + " failed: " + String(t));
      }
    }
    function U(e) {
      var t = e.getExtension("WEBGL_debug_renderer_info"),
        n = e.getParameter(t != null ? t.UNMASKED_RENDERER_WEBGL : e.RENDERER);
      return typeof n == "string" ? n : "unknown";
    }
    function V(e, t) {
      H({ type: "log", level: e, message: t });
    }
    function H(e, t) {
      p.postMessage(e, t != null ? t : []);
    }
    l.default = S;
  },
  98,
);
