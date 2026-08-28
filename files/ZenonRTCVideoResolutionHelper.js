__d(
  "ZenonRTCVideoResolutionHelper",
  ["FBLogger", "Promise", "gkx", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = 10,
      c = (function () {
        function t() {}
        return (
          (t.getMaxParticipants180 = function () {
            return 100;
          }),
          (t.getMaxParticipants360 = function () {
            return 100;
          }),
          (t.getMaxParticipants720 = function () {
            return 2;
          }),
          (t.shouldUseSupportedScaleFactorList = function () {
            return !1;
          }),
          (t.shouldUseConservativeWayWhenSearchingForScalingRatio =
            function () {
              return !1;
            }),
          (t.encoderScalingEnabled = function () {
            return r("gkx")("25156");
          }),
          (t.bitrateCappingEnabled = function () {
            return !0;
          }),
          (t.getMaxBitrate720 = function () {
            return 3e6;
          }),
          (t.getMaxBitrate360 = function () {
            return 1e6;
          }),
          (t.getMaxBitrate180 = function () {
            return 3e5;
          }),
          (t.getMaxBitrateForResolution = function (n) {
            return t.bitrateCappingEnabled()
              ? n === 180
                ? t.getMaxBitrate180()
                : n === 360
                  ? t.getMaxBitrate360()
                  : n === 720
                    ? t.getMaxBitrate720()
                    : 0
              : 0;
          }),
          (t.getMaxEncResolution = function (n) {
            if (!t.encoderScalingEnabled()) return null;
            var e = t.getMaxParticipants720(),
              r = t.getMaxParticipants360(),
              o = t.getMaxParticipants180(),
              a = { height: 720, width: 1280 },
              i = { height: 360, width: 640 },
              l = { height: 180, width: 320 };
            return e > 0 && n <= e
              ? a
              : r > 0 && n <= r
                ? i
                : (o > 0 && n <= o) || o > 0
                  ? l
                  : r > 0
                    ? i
                    : e > 0
                      ? a
                      : null;
          }),
          (t.getMaxEncResolutionSimulcast = function (n, o, a, i) {
            var e = { height: 720, width: 1280 },
              l = { height: 360, width: 640 },
              s = { height: 180, width: 320 };
            if (o <= a && a <= 2 && o >= 0 && o < i) {
              if (i === 1) return t.getMaxEncResolution(n);
              if (i === 2) return o === 0 ? s : n > 2 ? l : e;
              if (i === 3) {
                if (o === 0) return s;
                if (o === 1) return l;
                if (o === 2) return e;
              }
            }
            return (
              r("FBLogger")("rtc_www").mustfix(
                "Unsupported simulcast parameters passed to getMaxEncResolutionSimulcast",
              ),
              null
            );
          }),
          (t.getScalingFactor = function (n, r, o, a, i) {
            if (
              (i === void 0 && (i = !1),
              n.width == null ||
                n.width <= 0 ||
                n.height == null ||
                n.height <= 0 ||
                r.width == null ||
                r.width <= 0 ||
                r.height == null ||
                r.height <= 0)
            )
              return null;
            var e = r.width,
              l = r.height,
              s = n.width,
              u = n.height;
            if (i) {
              var c = [1, 2, 4],
                d = Math.sqrt((e * l) / (s * u));
              if (d < 1 + a) return 1;
              var m = 1,
                p = Number.MAX_VALUE;
              for (var _ of c) {
                var f = Math.abs(_ - d);
                (t.shouldUseConservativeWayWhenSearchingForScalingRatio()
                  ? f < p
                  : f <= p) &&
                  Math.floor(e / _) % 2 === 0 &&
                  Math.floor(l / _) % 2 === 0 &&
                  ((m = _), (p = Math.abs(_ - d)));
              }
              return m;
            } else {
              var g = Math.sqrt((e * l) / (s * u));
              return g < 1 + a ? 1 : o ? Math.floor(g + a) : g;
            }
          }),
          (t.maybeLimitEncodingResolutionByParticipantCountHelper = function (
            n,
            r,
            o,
            a,
            i,
            l,
          ) {
            if (
              (l === void 0 && (l = !1), !(!t.encoderScalingEnabled() || i))
            ) {
              var e;
              if (o != null && o.length > 0) {
                var c = o.filter(function (e) {
                  var t, n;
                  return (
                    ((t = e.receiver.track) == null ? void 0 : t.kind) ===
                      "video" &&
                    e.currentDirection !== "inactive" &&
                    ((n = e.receiver.track) == null ? void 0 : n.readyState) ===
                      "live"
                  );
                });
                ((e = c.length), l && (e -= 1));
              } else {
                var d = r.filter(function (e) {
                    var t;
                    return (
                      ((t = e.track) == null ? void 0 : t.kind) === "video"
                    );
                  }),
                  m = d.length;
                e = m + 1;
              }
              var p = t.getMaxEncResolution(e);
              if (p) {
                var _ = [p];
                t.maybeLimitEncodingResolution(
                  n,
                  _,
                  s,
                  u / 100,
                  a,
                  t.shouldUseSupportedScaleFactorList(),
                );
              }
            }
          }),
          (t.maybeLimitEncodingResolution = function (a, i, l, s, u, c) {
            c === void 0 && (c = !1);
            var o = a.filter(function (e) {
              var t;
              return ((t = e.track) == null ? void 0 : t.kind) === "video";
            });
            if (o.length > 0) {
              var d,
                m = o[0],
                p = m.getParameters == null ? void 0 : m.getParameters(),
                _ = (d = m.track) == null ? void 0 : d.getSettings();
              if (
                _ == null ||
                p == null ||
                p.encodings == null ||
                i.length !== p.encodings.length
              )
                return;
              for (var f of i.entries()) {
                var g = f[0],
                  h = f[1],
                  y = u
                    ? 1
                    : t.getScalingFactor(
                        h,
                        { height: _.height, width: _.width },
                        l,
                        s,
                        c,
                      );
                if (y != null)
                  if (
                    (y === 1
                      ? delete p.encodings[g].scaleResolutionDownBy
                      : (p.encodings[g].scaleResolutionDownBy = y),
                    !u && h.width != null && h.height != null)
                  ) {
                    var C = Math.min(h.width, h.height),
                      b = t.getMaxBitrateForResolution(C);
                    b > 0 && (p.encodings[g].maxBitrate = b);
                  } else u && delete p.encodings[g].maxBitrate;
              }
              var v = m.setParameters == null ? void 0 : m.setParameters(p);
              v != null
                ? r("promiseDone")(v)
                : r("promiseDone")((e || (e = n("Promise"))).resolve());
            }
          }),
          (t.maybeLimitEncodingResolutionByParticipantCount = function (
            n,
            r,
            o,
            a,
            i,
          ) {
            return (
              i === void 0 && (i = !1),
              t.maybeLimitEncodingResolutionByParticipantCountHelper(
                n,
                r,
                o,
                t.$1 > 0,
                a,
                i,
              )
            );
          }),
          (t.handleStartScreenSharing = function (n, r, o, a) {
            return (
              t.$1++,
              t.maybeLimitEncodingResolutionByParticipantCountHelper(
                n,
                r,
                o,
                t.$1 > 0,
                a,
              )
            );
          }),
          (t.handleStopScreenSharing = function (n, r, o, a) {
            return (
              t.$1--,
              t.maybeLimitEncodingResolutionByParticipantCountHelper(
                n,
                r,
                o,
                t.$1 > 0,
                a,
              )
            );
          }),
          t
        );
      })();
    ((c.$1 = 0), (l.default = c));
  },
  98,
);
