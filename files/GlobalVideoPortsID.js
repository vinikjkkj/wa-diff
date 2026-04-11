__d(
  "GlobalVideoPortsID",
  ["FBLogger", "cometUniqueID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return "id-pv-" + r("cometUniqueID")();
    }
    function s(e) {
      if (typeof e == "string") {
        var t = "id-pv-";
        if (e.indexOf(t) === 0 && e.length > t.length) return e;
        throw r("FBLogger")("comet_video_player").mustfixThrow(
          'Expected a GlobalVideoPortsVideoID, got a string that does not look like it: "%s"',
          e,
        );
      } else return null;
    }
    function u() {
      return "id-pp-" + r("cometUniqueID")();
    }
    ((l.makeVideoID = e), (l.ensureVideoID = s), (l.makePlaceID = u));
  },
  98,
);
