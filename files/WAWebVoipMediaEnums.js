__d(
  "WAWebVoipMediaEnums",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e,
      l = (e = n("$InternalEnum"))({
        Unknown: 0,
        Normal: 1,
        Rotate90: 2,
        Rotate180: 3,
        Rotate270: 4,
      }),
      s = e({
        Unknown: "unknown",
        VideoElementWebCodecs: "video-element-webcodecs",
        WorkerRaw: "worker-raw",
        WorkerWebCodecs: "worker-webcodecs",
      }),
      u = e({ DeviceFallback: "device-fallback", VideoFrame: "video-frame" }),
      c = 2e3,
      d = 3e4,
      m = e({ NV12: 0, I420: 1, RGB24: 2, RGBA: 3, H264: 100, UNKNOWN: -1 });
    function p(e) {
      return e === m.NV12
        ? "NV12"
        : e === m.I420
          ? "I420"
          : e === m.RGBA
            ? "RGBA"
            : null;
    }
    function _(e) {
      var t,
        n,
        r = e.trackHeight,
        o = e.trackWidth,
        a = e.videoElHeight,
        i = e.videoElWidth,
        l = (t = globalThis.screen) == null ? void 0 : t.orientation,
        s = l != null ? ((l.angle % 360) + 360) % 360 : 0,
        u = (n = l == null ? void 0 : l.type) != null ? n : "";
      if (s === 0 && u.startsWith("landscape")) return 0;
      var c = o > r,
        d = i > a,
        m = s === 90 || s === 270,
        p = m ? !d : d;
      return c !== p ? 1 : 0;
    }
    function f(e, t) {
      var n, r;
      t === void 0 && (t = !1);
      var o = (n = globalThis.screen) == null ? void 0 : n.orientation,
        a = o != null ? ((o.angle % 360) + 360) % 360 : 0,
        i = Math.floor(a / 90) % 4,
        s = t ? (e - i + 4) % 4 : (e + i) % 4;
      return s === 0 ? l.Normal : (r = l.cast(s + 1)) != null ? r : l.Normal;
    }
    function g(e, t) {
      var n,
        r =
          e === 90
            ? l.Rotate90
            : e === 180
              ? l.Rotate180
              : e === 270
                ? l.Rotate270
                : null;
      return r != null
        ? { frameRotation: e, orientation: r, source: u.VideoFrame }
        : {
            frameRotation: typeof e == "number" ? e : null,
            orientation: (n = l.cast(t)) != null ? n : l.Normal,
            source: u.DeviceFallback,
          };
    }
    function h(e) {
      var t = e.elapsedMsSinceLastLog,
        n = e.hasLoggedSnapshot,
        r = e.orientationStateChanged;
      if (!n) return !0;
      var o = r ? c : d;
      return t >= o;
    }
    function y(e) {
      return e === "NV12"
        ? m.NV12
        : e === "I420"
          ? m.I420
          : e === "RGBA"
            ? m.RGBA
            : m.UNKNOWN;
    }
    ((i.Orientation = l),
      (i.VideoCapturePath = s),
      (i.VideoFrameOrientationSource = u),
      (i.WAWebVoipVideoFormat = m),
      (i.videoFrameFormatFromFormatEnum = p),
      (i.detectSensorOffset = _),
      (i.computeVideoOrientation = f),
      (i.resolveVideoFrameOrientation = g),
      (i.shouldLogOrientationDiagnostics = h),
      (i.formatEnumFromVideoFrameFormat = y));
  },
  66,
);
