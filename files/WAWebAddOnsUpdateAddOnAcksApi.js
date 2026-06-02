__d(
  "WAWebAddOnsUpdateAddOnAcksApi",
  [
    "WAAckLevel",
    "WANullthrows",
    "WATypeUtils",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebDBAddOnProviders",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await Promise.allSettled(
        Array.from(e.entries(), function (e) {
          var t = e[0],
            n = e[1],
            a = r("WANullthrows")(
              o("WAWebDBAddOnProviders").getProviderForAddOnType(t),
            );
          return a.updateAcks == null
            ? void 0
            : a.updateAcks(n, o("WAWebBoolFunc").returnTrue);
        }),
      );
      for (var n of t) if (n.status === "rejected") throw n.reason;
    }
    async function s(e) {
      var t = await Promise.allSettled(
          Array.from(e, async function (e) {
            var t = e[0],
              n = e[1],
              a = r("WANullthrows")(
                o("WAWebDBAddOnProviders").getProviderForAddOnType(t),
              ),
              i = await (a.updateAcks == null
                ? void 0
                : a.updateAcks(n, function (e, t) {
                    return u(e.ack, t.ack);
                  }));
            if (!(i == null || i.length === 0)) return [t, i];
          }),
        ),
        n = new Map(
          r("compactMap")(t, function (e) {
            return e.value;
          }),
        );
      o("WAWebBackendApi").frontendFireAndForget("updateAddOnCollectionAcks", {
        updatesByType: n,
      });
      for (var a of t) if (a.status === "rejected") throw a.reason;
    }
    function u(e, t) {
      return (
        o("WATypeUtils").isNumber(t) &&
        (e == null || t > e || t === o("WAAckLevel").ACK.FAILED)
      );
    }
    ((l.updateAddOnAcks = e), (l.maybeUpdateAddOnAcks = s));
  },
  98,
);
