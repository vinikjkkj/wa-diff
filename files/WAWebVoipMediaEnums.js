__d(
  "WAWebVoipMediaEnums",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        Unknown: 0,
        Normal: 1,
        Rotate90: 2,
        Rotate180: 3,
        Rotate270: 4,
      }),
      l = n("$InternalEnum")({
        NV12: 0,
        I420: 1,
        RGB24: 2,
        RGBA: 3,
        H264: 100,
        UNKNOWN: -1,
      });
    function s(e) {
      return e === l.NV12
        ? "NV12"
        : e === l.I420
          ? "I420"
          : e === l.RGBA
            ? "RGBA"
            : null;
    }
    function u(e, t, n, r) {
      var o,
        a,
        i = (o = globalThis.screen) == null ? void 0 : o.orientation,
        l = i != null ? ((i.angle % 360) + 360) % 360 : 0,
        s = (a = i == null ? void 0 : i.type) != null ? a : "";
      if (l === 0 && s.startsWith("landscape")) return 0;
      var u = e > t,
        c = n > r,
        d = l === 90 || l === 270,
        m = d ? !c : c;
      return u !== m ? 1 : 0;
    }
    function c(t, n) {
      var r, o;
      n === void 0 && (n = !1);
      var a = (r = globalThis.screen) == null ? void 0 : r.orientation,
        i = a != null ? ((a.angle % 360) + 360) % 360 : 0,
        l = Math.floor(i / 90) % 4,
        s = n ? (t - l + 4) % 4 : (t + l) % 4;
      return s === 0 ? e.Normal : (o = e.cast(s + 1)) != null ? o : e.Normal;
    }
    function d(e) {
      return e === "NV12"
        ? l.NV12
        : e === "I420"
          ? l.I420
          : e === "RGBA"
            ? l.RGBA
            : l.UNKNOWN;
    }
    ((i.Orientation = e),
      (i.WAWebVoipVideoFormat = l),
      (i.videoFrameFormatFromFormatEnum = s),
      (i.detectSensorOffset = u),
      (i.computeVideoOrientation = c),
      (i.formatEnumFromVideoFrameFormat = d));
  },
  66,
);
