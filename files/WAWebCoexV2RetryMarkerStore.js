__d(
  "WAWebCoexV2RetryMarkerStore",
  ["WAWebModelStorageUtils", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = s(e, t);
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message-info"], async function (e) {
          var t = e[0];
          if ((await t.get(n)) == null)
            throw r("err")(
              "[coexv2] missing agent message-info row for retry marker",
            );
          await t.merge(n, { hasAdditionalRetryTargets: !0 });
        });
    }
    function s(e, t) {
      return [
        e.toString(),
        o("WAWebWidFactory").asUserWidOrThrow(t).toString(),
      ];
    }
    l.markCoexV2RepresentedTargets = e;
  },
  98,
);
