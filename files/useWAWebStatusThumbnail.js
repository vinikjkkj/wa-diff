__d(
  "useWAWebStatusThumbnail",
  [
    "WAWebMediaDataUtils",
    "WAWebStatusMediaMsgUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(20),
        r = c(null),
        a = r[0],
        i = r[1],
        l,
        s,
        d,
        m;
      if (n[0] !== e || n[1] !== t) {
        var p, _, f;
        ((d = null),
          e != null &&
            t != null &&
            (d = o("WAWebStatusMediaMsgUtils").findStatusMediaMsg(e, t)),
          (s = (p = d) == null ? void 0 : p.mediaData),
          (l =
            ((_ = d) == null ? void 0 : _.type) === "video" ||
            ((f = d) == null ? void 0 : f.type) === "ptv"),
          (m =
            s != null
              ? o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(s)
              : null),
          (n[0] = e),
          (n[1] = t),
          (n[2] = l),
          (n[3] = s),
          (n[4] = d),
          (n[5] = m));
      } else ((l = n[2]), (s = n[3]), (d = n[4]), (m = n[5]));
      var g = m,
        h;
      n[6] !== g || n[7] !== l || n[8] !== s || n[9] !== d
        ? ((h = function () {
            if (!(g != null || d == null || s == null)) {
              d.downloadMedia({
                downloadEvenIfExpensive: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.STATUS_V3,
                isUserInitiated: !1,
              });
              var e = function () {
                var e = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(
                  s,
                );
                e != null && i({ url: e, isVideo: l });
              };
              return (
                s.on("change", e),
                function () {
                  s.off("change", e);
                }
              );
            }
          }),
          (n[6] = g),
          (n[7] = l),
          (n[8] = s),
          (n[9] = d),
          (n[10] = h))
        : (h = n[10]);
      var y;
      (n[11] !== g || n[12] !== l || n[13] !== s || n[14] !== d
        ? ((y = [g, d, s, l]),
          (n[11] = g),
          (n[12] = l),
          (n[13] = s),
          (n[14] = d),
          (n[15] = y))
        : (y = n[15]),
        u(h, y));
      var C;
      return (
        n[16] !== g || n[17] !== a || n[18] !== l
          ? ((C = g != null ? { url: g, isVideo: l } : a),
            (n[16] = g),
            (n[17] = a),
            (n[18] = l),
            (n[19] = C))
          : (C = n[19]),
        C
      );
    }
    l.default = d;
  },
  98,
);
