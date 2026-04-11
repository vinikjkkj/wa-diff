__d(
  "LiveQueryEventsLoggingResolver",
  ["Random", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = "default",
      s = "without_sampling";
    function u() {
      if (r("gkx")("21095"))
        return {
          force_log_context: s,
          sampling_rate: 1,
          client_has_ods_usecase_counters: !0,
        };
      if (o("Random").coinflip(1e4))
        return {
          force_log_context: e,
          sampling_rate: 1e4,
          client_has_ods_usecase_counters: !0,
        };
    }
    l.tempResolveLoggingContext = u;
  },
  98,
);
