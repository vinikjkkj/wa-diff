__d(
  "useWAWebStatusThumbnail",
  [
    "WAWebMediaDataUtils",
    "WAWebStatusMediaMsgUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t) {
      var n,
        r,
        a,
        i = c(null),
        l = i[0],
        s = i[1],
        d = null;
      e != null &&
        t != null &&
        (d = o("WAWebStatusMediaMsgUtils").findStatusMediaMsg(e, t));
      var m = (n = d) == null ? void 0 : n.mediaData,
        p =
          ((r = d) == null ? void 0 : r.type) === "video" ||
          ((a = d) == null ? void 0 : a.type) === "ptv",
        _ =
          m != null
            ? o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(m)
            : null;
      return (
        u(
          function () {
            if (!(_ != null || d == null || m == null)) {
              d.downloadMedia({
                downloadEvenIfExpensive: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.STATUS_V3,
                isUserInitiated: !1,
              });
              var e = function () {
                var e = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(
                  m,
                );
                e != null && s({ url: e, isVideo: p });
              };
              return (
                m.on("change", e),
                function () {
                  m.off("change", e);
                }
              );
            }
          },
          [_, d, m, p],
        ),
        _ != null ? { url: _, isVideo: p } : l
      );
    }
    l.default = d;
  },
  98,
);
