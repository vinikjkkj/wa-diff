__d(
  "WAWebInitializeBotContact",
  [
    "fbt",
    "WAWebAIHatchIdentityStore",
    "WAWebAIHatchIdentitySync",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebMetaAiRingAssetResolver",
    "WAWebProfilePicThumbCollection",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (o("WAWebBotUtils").isManusBot(e.id)) {
        e.set({ name: o("WAWebBotGating").getManusBotName() });
        var t = o("WAWebBotGating").getManusBotProfileThumb();
        t !== "" &&
          o("WAWebProfilePicThumbCollection")
            .ProfilePicThumbCollection.gadd(e.id)
            .set({
              eurl: t,
              previewEurl: t,
              tag: "man",
              stale: !1,
              timestamp: Date.now(),
            });
      } else if (o("WAWebBotUtils").isHatchBot(e.id)) {
        var n = o("WAWebAIHatchIdentityStore").getHatchInitialIdentity(),
          r = n.name,
          a = n.profileThumb;
        (e.set({ name: r }),
          a !== "" &&
            o("WAWebProfilePicThumbCollection")
              .ProfilePicThumbCollection.gadd(e.id)
              .set({
                eurl: a,
                previewEurl: a,
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
