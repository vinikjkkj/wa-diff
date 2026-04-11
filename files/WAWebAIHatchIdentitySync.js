__d(
  "WAWebAIHatchIdentitySync",
  [
    "WAWebAIHatchIdentityStore",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(e, t, n, r) {
      if ((n !== "" && n !== e.get("name") && e.set({ name: n }), r != null)) {
        var a = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.get(t),
          i = a == null ? void 0 : a.get("eurl");
        r !== i &&
          o("WAWebProfilePicThumbCollection")
            .ProfilePicThumbCollection.gadd(t)
            .set({
              eurl: r,
              previewEurl: r,
              tag: "hat",
              stale: !1,
              timestamp: Date.now(),
            });
      }
    }
    function u() {
      e ||
        ((e = !0),
        o("WAWebAIHatchIdentityStore").subscribeToIdentityChanges(function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
          );
          t != null &&
            s(t, o("WAWebBotUtils").HATCH_BOT_FBID_WID, e.name, e.avatarUrl);
        }));
    }
    function c(e, t, n) {
      (u(),
        o("WAWebAIHatchIdentityStore")
          .getHatchIdentity(n)
          .then(function (n) {
            s(e, t, n.name, n.avatarUrl);
          })
          .catch(r("WAWebNoop")));
    }
    ((l.initIdentityChangeListener = u), (l.syncHatchContactIdentity = c));
  },
  98,
);
