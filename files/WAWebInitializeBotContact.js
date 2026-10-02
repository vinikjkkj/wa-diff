__d(
  "WAWebInitializeBotContact",
  [
    "fbt",
    "WAWebAIHatchIdentityStore",
    "WAWebAIHatchIdentitySync",
    "WAWebBotUtils",
    "WAWebMetaAiRingAssetResolver",
    "WAWebProfilePicThumbCollection",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "AI").toString();
    }
    function u(t) {
      if (o("WAWebBotUtils").isHatchBot(t.id)) {
        var n = o("WAWebAIHatchIdentityStore").getHatchInitialIdentity(),
          r = n.name,
          a = n.profileThumb;
        (t.set({ name: r }),
          a !== "" &&
            o("WAWebProfilePicThumbCollection")
              .ProfilePicThumbCollection.gadd(t.id)
              .set({
                eurl: a,
                previewEurl: a,
                tag: "hat",
                stale: !1,
                timestamp: Date.now(),
              }),
          o("WAWebAIHatchIdentitySync").syncHatchContactIdentity({
            contact: t,
            wid: t.id,
          }));
      } else if (
        o("WAWebBotUtils").isMetaAiBot(t.id) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id)
      ) {
        t.set({ name: "Meta AI" });
        var i = o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL();
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(t.id)
          .set({
            eurl: i,
            previewEurl: i,
            tag: "man",
            stale: !1,
            timestamp: Date.now(),
          });
      } else if (o("WAWebBotUtils").isBusinessAssistantBot(t.id)) {
        t.set({ name: s._(/*BTDS*/ "Business assistant").toString() });
        var l = o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL();
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(t.id)
          .set({
            eurl: l,
            previewEurl: l,
            tag: "man",
            stale: !1,
            timestamp: Date.now(),
          });
      } else {
        if (t.name) return;
        t.set({ name: e() });
      }
      t.set({ type: "out" });
    }
    ((l.getBotPlaceholderName = e), (l.initializeBotContact = u));
  },
  226,
);
