__d(
  "WAWebVoipPresentationFrameNormalizer",
  ["WAWebVoipMediaEnums", "WAWebVoipVideoFrameCtor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = null,
      u = null,
      c = null,
      d = 0;
    function m(e) {
      var t,
        n = e.frame,
        r = e.frameMetadata,
        a = e.isScreenShare,
        i = e.normalizationEnabled,
        l = e.requestedHeight,
        s = e.requestedWidth;
      if (!i || r == null) return S(n, "disabled", null, 0, null);
      var u =
          (t = o("WAWebVoipMediaEnums").Orientation.cast(
            r.fallbackOrientation,
          )) != null
            ? t
            : o("WAWebVoipMediaEnums").Orientation.Normal,
        m = g({
          fallbackOrientation: u,
          frameHeight: n.displayHeight,
          frameRotation: r.frameRotation,
          frameWidth: n.displayWidth,
          isScreenShare: a,
          requestedHeight: l,
          requestedWidth: s,
          screenType: r.screenType,
          sensorOffsetInitialized: r.sensorOffsetInitialized,
        }),
        p = m.reason,
        _ = m.transform;
      if (_ == null) return S(n, "ineligible", null, 0, p);
      if (c != null) return S(n, "failed", _, 0, c);
      var f = globalThis.performance.now();
      try {
        var h = R(n, _),
          y = globalThis.performance.now() - f;
        if (h == null) {
          var C = "presentation frame canvas unavailable";
          return (k(C), S(n, "failed", _, y, C));
        }
        if (!I(h)) {
          var b,
            v =
              "unsupported presentation frame format: " +
              ((b = h.format) != null ? b : "null");
          return (h.close(), k(v), S(n, "failed", _, y, v));
        }
        return ((d = 0), S(h, "applied", _, y, null));
      } catch (e) {
        var L = String(e);
        return (E(L), S(n, "failed", _, globalThis.performance.now() - f, L));
      }
    }
    function p() {
      ((s = null), (u = null), (c = null), (d = 0));
    }
    function _(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s,
        u = n.error,
        c = n.frame,
        d = n.status,
        m = n.transform,
        p = n.transformDurationMs,
        _ = [
          d,
          t.fallbackOrientation,
          t.frameRotation,
          t.screenAngle,
          t.screenType,
          t.sensorOffsetInitialized,
          e.displayWidth,
          e.displayHeight,
          m == null ? void 0 : m.counterRotationDegrees,
          c.displayWidth,
          c.displayHeight,
          c.format,
        ].join("|"),
        f =
          "voip: [orient_transform_v1] status=" +
          d +
          " frameRot=" +
          String((r = t.frameRotation) != null ? r : "na") +
          " fallback=" +
          t.fallbackOrientation +
          " screenAngle=" +
          String((o = t.screenAngle) != null ? o : "na") +
          " screenType=" +
          ((a = t.screenType) != null ? a : "na") +
          " sensorReady=" +
          (t.sensorOffsetInitialized ? 1 : 0) +
          " source=" +
          e.displayWidth +
          "x" +
          e.displayHeight +
          "/" +
          ((i = e.format) != null ? i : "na") +
          " counterRotation=" +
          String(
            (l = m == null ? void 0 : m.counterRotationDegrees) != null
              ? l
              : "na",
          ) +
          " output=" +
          c.displayWidth +
          "x" +
          c.displayHeight +
          "/" +
          ((s = c.format) != null ? s : "na") +
          " durationMs=" +
          p.toFixed(2) +
          " error=" +
          (u == null ? "na" : String(u));
      return { message: f, signature: _ };
    }
    function f(e) {
      return g(e).transform;
    }
    function g(e) {
      var t = e.fallbackOrientation,
        n = e.frameHeight,
        r = e.frameRotation,
        o = e.frameWidth,
        a = e.isScreenShare,
        i = e.requestedHeight,
        l = e.requestedWidth,
        s = e.screenType,
        u = e.sensorOffsetInitialized;
      if (a) return { reason: "screen-share", transform: null };
      if (!u) return { reason: "sensor-not-ready", transform: null };
      if (!y(o, n))
        return { reason: "frame-dims-nonpositive", transform: null };
      if (!y(l, i))
        return { reason: "requested-dims-nonpositive", transform: null };
      if (r != null && r !== 0)
        return { reason: "frame-rotation-nonzero", transform: null };
      if (!C(o, n, s))
        return { reason: "frame-screen-orientation-mismatch", transform: null };
      var c = b(t);
      if (c == null) return { reason: "fallback-not-rotated", transform: null };
      var d = c !== 180,
        m = d ? n : o,
        p = d ? o : n;
      return v(m, p, l, i)
        ? {
            reason: "eligible",
            transform: {
              counterRotationDegrees: c,
              outputHeight: p,
              outputWidth: m,
            },
          }
        : { reason: "output-requested-orientation-mismatch", transform: null };
    }
    function h(e) {
      var t = e.context,
        n = e.frame,
        r = e.transform;
      (t.setTransform(1, 0, 0, 1, 0, 0),
        t.clearRect(0, 0, r.outputWidth, r.outputHeight));
      e: {
        if (r.counterRotationDegrees === 90) {
          (t.translate(r.outputWidth, 0), t.rotate(Math.PI / 2));
          break e;
        }
        if (r.counterRotationDegrees === 180) {
          (t.translate(r.outputWidth, r.outputHeight), t.rotate(Math.PI));
          break e;
        }
        if (r.counterRotationDegrees === 270) {
          (t.translate(0, r.outputHeight), t.rotate(-Math.PI / 2));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r.counterRotationDegrees,
        );
      }
      (t.drawImage(n, 0, 0, n.displayWidth, n.displayHeight),
        t.setTransform(1, 0, 0, 1, 0, 0));
    }
    function y(e, t) {
      return e > 0 && t > 0;
    }
    function C(e, t, n) {
      return (n == null ? void 0 : n.startsWith("portrait")) === !0
        ? t > e
        : (n == null ? void 0 : n.startsWith("landscape")) === !0
          ? e > t
          : !1;
    }
    function b(e) {
      return e === o("WAWebVoipMediaEnums").Orientation.Rotate90
        ? 270
        : e === o("WAWebVoipMediaEnums").Orientation.Rotate180
          ? 180
          : e === o("WAWebVoipMediaEnums").Orientation.Rotate270
            ? 90
            : null;
    }
    function v(e, t, n, r) {
      return (e > t && n > r) || (t > e && r > n);
    }
    function S(e, t, n, r, o) {
      return {
        error: o,
        frame: e,
        status: t,
        transform: n,
        transformDurationMs: r,
      };
    }
    function R(e, t) {
      var n;
      if (!L(t.outputWidth, t.outputHeight)) return null;
      var o = s,
        a = u,
        i = r("WAWebVoipVideoFrameCtor")();
      return o == null || a == null || i == null
        ? null
        : (h({ context: a, frame: e, transform: t }),
          new i(o, {
            timestamp: e.timestamp,
            duration: (n = e.duration) != null ? n : void 0,
          }));
    }
    function L(e, t) {
      if (s != null && u != null && s.width === e && s.height === t) return !0;
      var n = self.OffscreenCanvas;
      if (typeof n != "function") return !1;
      var r = new n(e, t);
      return ((s = r), (u = r.getContext("2d")), u != null);
    }
    function E(t) {
      ((s = null), (u = null), d++, d >= e && (c = t));
    }
    function k(e) {
      ((s = null), (u = null), (c = e), (d = 0));
    }
    function I(e) {
      return (
        o("WAWebVoipMediaEnums").formatEnumFromVideoFrameFormat(e.format) !==
          o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN ||
        e.format === "BGRA"
      );
    }
    ((l.preparePresentationFrame = m),
      (l.resetPresentationFrameNormalizer = p),
      (l.getPresentationFrameTransformDiagnostics = _),
      (l.resolvePresentationFrameTransform = f),
      (l.evaluatePresentationFrameTransform = g),
      (l.drawPresentationFrameTransform = h));
  },
  98,
);
