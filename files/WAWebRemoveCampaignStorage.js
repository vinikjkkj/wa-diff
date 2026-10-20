__d(
  "WAWebRemoveCampaignStorage",
  [
    "WALogger",
    "WAWebSchemaBusinessBroadcastCampaign",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .remove(t);
          } catch (n) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-storage] Failed to remove campaign ",
                    ": ",
                    "",
                  ])),
                t,
                r("getErrorSafe")(n),
              ),
              n
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.removeCampaignStorage = s;
  },
  98,
);
