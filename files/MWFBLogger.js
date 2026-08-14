__d(
  "MWFBLogger",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return r("FBLogger")("messenger_web", t);
      },
      s = function (t) {
        return r("FBLogger")("messenger_web_media", t);
      },
      u = function (t) {
        return r("FBLogger")("messenger_web_sharing", t);
      },
      c = function (t) {
        return r("FBLogger")("mps", t);
      };
    ((l.MWLogger = e),
      (l.MWMediaLogger = s),
      (l.MWSharingLogger = u),
      (l.MPSLogger = c));
  },
  98,
);
