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
    function e(e) {
      if (o("WAWebBotUtils").isHatchBot(e.id)) {
        var t = o("WAWebAIHatchIdentityStore").getHatchInitialIdentity(),
          n = t.name,
          r = t.profileThumb;
        (e.set({ name: n }),
          r !== "" &&
            o("WAWebProfilePicThumbCollection")
              .ProfilePicThumbCollection.gadd(e.id)
              .set({
                eurl: r,
                previewEurl: r,
                tag: "hat",
                stale: !1,
                timestamp: Date.now(),
              }),
          o("WAWebAIHatchIdentitySync").syncHatchContactIdentity({
            contact: e,
            wid: e.id,
          }));
      } else if (
        o("WAWebBotUtils").isMetaAiBot(e.id) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
      ) {
        e.set({ name: "Meta AI" });
        var a = o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL();
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(e.id)
          .set({
            eurl: a,
            previewEurl: a,
            tag: "man",
            stale: !1,
            timestamp: Date.now(),
          });
      } else if (o("WAWebBotUtils").isBusinessAssistantBot(e.id)) {
        e.set({ name: s._(/*BTDS*/ "Business assistant").toString() });
        var i = o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL();
        o("WAWebProfilePicThumbCollection")
          .ProfilePicThumbCollection.gadd(e.id)
          .set({
            eurl: i,
            previewEurl: i,
            tag: "man",
            stale: !1,
            timestamp: Date.now(),
          });
      } else {
        if (e.name) return;
        e.set({ name: s._(/*BTDS*/ "AI").toString() });
      }
      e.set({ type: "out" });
    }
    l.initializeBotContact = e;
  },
  226,
);
