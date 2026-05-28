__d(
  "WAMediaPreProcessQpl",
  ["Random", "WAWebBrowserApi", "WAWebQplFlow", "gkx", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891421895, "3466"),
      s = 300 * 1e3,
      u = o("WAWebBrowserApi").getNumCpu(),
      c = o("WAWebBrowserApi").getMemClass(),
      d = o("WAWebBrowserApi").readCpuPerformanceClass();
    function m(t, n) {
      var a = Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4),
        i = o("WAWebQplFlow").startQplFlow(e, {
          annotations: {
            bool: { wa_web_media_wasm_worker_split: r("gkx")("24042") },
            string: { preprocess_type: t },
          },
          instanceKey: a,
          timeoutInMs: s,
        });
      return (
        n &&
          i.addAnnotations({
            int: { input_file_size: n.size },
            string: { mimetype: n.type },
          }),
        u != null && i.addAnnotations({ int: { cpu_core_count: u } }),
        c != null && i.addAnnotations({ int: { mem_class: c } }),
        d != null && i.addAnnotations({ string: { cpu_performance: d } }),
        babelHelpers.extends({}, i, {
          flowDetails: { event: e, instanceKey: a },
        })
      );
    }
    l.startMediaPreProcessQpl = m;
  },
  98,
);
