__d(
  "WAWebFetchBizAiResponseSettingsV2Gate",
  ["Promise", "WAWebBackendApi", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebBackendApi").frontendFireAndForget(
            "loadedBizAiResponseSettingsV2Gate",
            { enabled: !0 },
          ),
        (e || (e = n("Promise"))).resolve()
      );
    }
    l.fetchBizAiResponseSettingsV2Gate = s;
  },
  98,
);
