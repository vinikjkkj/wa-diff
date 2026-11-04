__d(
  "WAWebVoipExperimentTargetSample",
  ["WALogger", "WAWebABProps", "WAWebABPropsCache", "WAWebABPropsConfigs"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 4095,
      d = 2147483647,
      m = /[^0-9,]/;
    function p(e, t, n, r) {
      var o;
      if (n) {
        var a = (o = t.get(r)) == null ? void 0 : o.configExpoKey;
        a != null && a !== "" && e.add(a);
      }
    }
    function _(t, n) {
      var r = new Set();
      if (t === "") return r;
      if (m.test(t))
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [ExperimentTargetSample] ignoring malformed bucket codes: ",
                  "",
                ])),
              t,
            )
            .sendLogs("voip-abprop-bucket-codes-malformed"),
          r
        );
      for (var a of t.split(",")) {
        var i = parseInt(a, 10);
        if (isNaN(i) || i <= 0 || i > d) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [ExperimentTargetSample] skipping invalid bucket code: '",
                "'",
              ])),
            a,
          );
          continue;
        }
        i !== n && r.add(i);
      }
      return r;
    }
    function f() {
      var e = o("WAWebABPropsCache").getAllABPropsMap(),
        t = new Set();
      p(
        t,
        e,
        o("WAWebABProps").getABPropConfigValue(
          "calling_exp_target_sample_ss",
        ) === !0,
        o("WAWebABPropsConfigs").ABPropConfigs.calling_exp_target_sample_ss[0],
      );
      for (var n of _(
        o("WAWebABProps").getABPropConfigValue("calling_abprop_bucket_codes"),
        o("WAWebABPropsConfigs").ABPropConfigs.calling_abprop_bucket_codes[0],
      ))
        p(t, e, !0, n);
      var r = Array.from(t)
          .sort(function (e, t) {
            return e.localeCompare(t, void 0, { numeric: !0 });
          })
          .join(","),
        a = new TextEncoder().encode(r).length;
      return a > c
        ? (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [ExperimentTargetSample] dropping ",
                  "-byte expo key list",
                ])),
              a,
            )
            .sendLogs("voip-abprop-bucket-id-list-dropped"),
          "")
        : r;
    }
    ((l.parseAbPropBucketCodes = _), (l.getExperimentTargetSampleExpoKeys = f));
  },
  98,
);
