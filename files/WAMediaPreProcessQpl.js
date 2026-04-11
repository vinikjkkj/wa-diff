__d(
  "WAMediaPreProcessQpl",
  ["Random", "WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891421895, "3466"),
      s = 300 * 1e3;
    function u(t, n) {
      var r = Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4),
        a = o("WAWebQplFlow").startQplFlow(e, {
          annotations: { string: { preprocess_type: t } },
          instanceKey: r,
          timeoutInMs: s,
        });
      return (
        n &&
          a.addAnnotations({
            int: { input_file_size: n.size },
            string: { mimetype: n.type },
          }),
        babelHelpers.extends({}, a, {
          flowDetails: { event: e, instanceKey: r },
        })
      );
    }
    l.startMediaPreProcessQpl = u;
  },
  98,
);
