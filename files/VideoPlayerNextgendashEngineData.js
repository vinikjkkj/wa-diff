__d(
  "VideoPlayerNextgendashEngineData",
  ["VideoPlayerOzImplementationData", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["nextgendashAvailability"];
    function s(t) {
      var n = t.nextgendashAvailability,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (n !== "AVAILABLE") {
        var i = r("err")("nextgendashAvailability=" + n);
        return ((i.name = "GotNextgendashAvailability/" + n), i);
      }
      var l = o("VideoPlayerOzImplementationData").makeOzImplementationData(a);
      return l;
    }
    l.makeNextgendashEngineData = s;
  },
  98,
);
