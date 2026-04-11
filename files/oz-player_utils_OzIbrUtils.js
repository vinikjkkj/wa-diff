__d(
  "oz-player/utils/OzIbrUtils",
  ["oz-player/networks/OzBandwidthEstimator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o) {
      var e = r("oz-player/networks/OzBandwidthEstimator").getAdjustedBandwidth(
          n.getLegacyConfig(),
        ),
        a = t.slice(0);
      a.sort(function (e, t) {
        return e.getBandwidth() - t.getBandwidth();
      });
      for (
        var i = n.getNumber("live_audio_ibr_bandwidth_percentage"),
          l = e * i,
          s = a.length - 1;
        s >= 0;
        s--
      )
        if (a[s].getBandwidth() <= l)
          return (
            o
              .getOperationLogger("audio_ibr_success")
              .setRepresentationID(a[s].getID())
              .setReason(e.toString())
              .log(),
            a[s]
          );
      return (
        o.getOperationLogger("audio_ibr_no_op").setReason(e.toString()).log(),
        null
      );
    };
    l.getInitialAudioRepresentation = e;
  },
  98,
);
