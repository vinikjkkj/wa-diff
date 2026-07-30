__d(
  "WAWebMediaProvenanceQpl",
  ["WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(646388630, "1555"),
      s = 300 * 1e3,
      u = 1;
    function c(t) {
      var n = u++,
        r = o("WAWebQplFlow").startQplFlow(e, {
          annotations: {
            int: { input_file_size: t.size },
            string: { mimetype: t.type },
          },
          instanceKey: n,
          timeoutInMs: s,
        });
      return babelHelpers.extends({}, r, {
        flowDetails: { event: e, instanceKey: n },
      });
    }
    l.startProvenanceDetectionQpl = c;
  },
  98,
);
