__d(
  "WAWebBootstrapPremiumMessages",
  [
    "Promise",
    "WAWebDebounce",
    "WAWebMiscGatingUtils",
    "WAWebMsgCollection",
    "WAWebPremiumMessageCollection",
    "WAWebPremiumMessageSchema",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 250;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebMiscGatingUtils").isRambutanEnabled())
            return (e || (e = n("Promise"))).resolve();
          var t = yield o("WAWebPremiumMessageSchema")
            .getPremiumMessageTable()
            .all();
          o(
            "WAWebPremiumMessageCollection",
          ).PremiumMessageCollection.initializeFromCache(t);
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      o("WAWebMiscGatingUtils").isRambutanEnabled() &&
        (o("WAWebMsgCollection").MsgCollection.listenTo(
          o("WAWebMsgCollection").MsgCollection,
          "add",
          r("WAWebDebounce")(m, s, { leading: !0 }),
        ),
        o("WAWebPremiumMessageCollection").PremiumMessageCollection.listenTo(
          o("WAWebPremiumMessageCollection").PremiumMessageCollection,
          "add",
          function (e) {
            return e.hydrateMessages();
          },
        ));
    }
    function m() {
      o("WAWebPremiumMessageCollection")
        .PremiumMessageCollection.getModelsArray()
        .forEach(function (e) {
          e.hydrateMessages();
        });
    }
    ((l.restorePremiumMessages = u), (l.bindPremiumMessageListeners = d));
  },
  98,
);
