__d(
  "ZenonVideoScaleHistogram",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e >= 0.765625
        ? 0
        : e >= 0.390625
          ? 1
          : e >= 0.19140625
            ? 2
            : e >= 0.09765625
              ? 3
              : 4;
    }
    function l(t, n) {
      var r = ["video", "screen"];
      t.filter(function (e) {
        return r.includes(e.contentType) && e.remote === !1;
      }).forEach(function (t) {
        var r = n.get(t.trackId);
        if (!(!r || !r.cumulativeStat || !r.histResScale)) {
          var o = r.cumulativeStat,
            a = o.framesEncoded,
            i = o.timestamp,
            l = r.deltaStat,
            s = l.frameHeight,
            u = l.frameWidth,
            c = l.height,
            d = l.width;
          if (
            a != null &&
            d != null &&
            c != null &&
            u != null &&
            s != null &&
            i != null &&
            a.getDeltaFromLastUpdate() > 0 &&
            i.getCurrentValue() > r.lastUpdate
          ) {
            var m,
              p,
              _,
              f,
              g = a.getDeltaFromLastUpdate(),
              h =
                ((m = d.getLastAddedValue()) != null ? m : 0) *
                ((p = c.getLastAddedValue()) != null ? p : 0),
              y =
                ((_ = u.getLastAddedValue()) != null ? _ : 0) *
                ((f = s.getLastAddedValue()) != null ? f : 0);
            if (h > 0) {
              var C = y / h,
                b = e(C);
              r.histResScale[b] += g;
            }
          }
        }
      });
    }
    ((i.getBinFromScale = e), (i.updateTrackerWithScaleHistogram = l));
  },
  66,
);
