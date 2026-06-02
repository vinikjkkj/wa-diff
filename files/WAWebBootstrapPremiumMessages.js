__d(
  "WAWebBootstrapPremiumMessages",
  [
    "WAWebDebounce",
    "WAWebMiscGatingUtils",
    "WAWebMsgCollection",
    "WAWebPremiumMessageCollection",
    "WAWebPremiumMessageSchema",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 250;
    async function s() {
      if (!o("WAWebMiscGatingUtils").isRambutanEnabled())
        return Promise.resolve();
      var e = await o("WAWebPremiumMessageSchema")
        .getPremiumMessageTable()
        .all();
      o(
        "WAWebPremiumMessageCollection",
      ).PremiumMessageCollection.initializeFromCache(e);
    }
    function u() {
      o("WAWebMiscGatingUtils").isRambutanEnabled() &&
        (o("WAWebMsgCollection").MsgCollection.listenTo(
          o("WAWebMsgCollection").MsgCollection,
          "add",
          r("WAWebDebounce")(c, e, { leading: !0 }),
        ),
        o("WAWebPremiumMessageCollection").PremiumMessageCollection.listenTo(
          o("WAWebPremiumMessageCollection").PremiumMessageCollection,
          "add",
          function (e) {
            return e.hydrateMessages();
          },
        ));
    }
    function c() {
      o("WAWebPremiumMessageCollection")
        .PremiumMessageCollection.getModelsArray()
        .forEach(function (e) {
          e.hydrateMessages();
        });
    }
    ((l.restorePremiumMessages = s), (l.bindPremiumMessageListeners = u));
  },
  98,
);
