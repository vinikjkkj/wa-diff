__d(
  "WAWebAddOnsUpdateAddOnAcksApi",
  [
    "Promise",
    "WAAckLevel",
    "WANullthrows",
    "WATypeUtils",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebDBAddOnProviders",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield (e || (e = n("Promise"))).allSettled(
            Array.from(t.entries(), function (e) {
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
          for (var i of a) if (i.status === "rejected") throw i.reason;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield (e || (e = n("Promise"))).allSettled(
              Array.from(
                t,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1],
                        a = r("WANullthrows")(
                          o("WAWebDBAddOnProviders").getProviderForAddOnType(t),
                        ),
                        i = yield a.updateAcks == null
                          ? void 0
                          : a.updateAcks(n, function (e, t) {
                              return m(e.ack, t.ack);
                            });
                      if (!(i == null || i.length === 0)) return [t, i];
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            i = new Map(
              r("compactMap")(a, function (e) {
                return e.value;
              }),
            );
          o("WAWebBackendApi").frontendFireAndForget(
            "updateAddOnCollectionAcks",
            { updatesByType: i },
          );
          for (var l of a) if (l.status === "rejected") throw l.reason;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return (
        o("WATypeUtils").isNumber(t) &&
        (e == null || t > e || t === o("WAAckLevel").ACK.FAILED)
      );
    }
    ((l.updateAddOnAcks = s), (l.maybeUpdateAddOnAcks = c));
  },
  98,
);
