__d(
  "WAWebVoipBridgeContactHandlers",
  [
    "WAWebContactCollection",
    "WAWebContactExternalUserState",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      hydrateGuestParticipantContacts: function (t) {
        var e = t.participants;
        e.forEach(function (e) {
          var t = e.isGuestUser,
            n = e.jid,
            a = e.pushName,
            i = e.username;
          if (
            !(
              o("WAWebUserPrefsMeUser").isMeAccount(n) ||
              n.isBot() ||
              !n.isUser()
            )
          ) {
            var l = {};
            a != null && a !== "" && (l.pushname = a);
            var s =
              i != null && i !== ""
                ? o("WAWebUsernameTypes").asMaybeUsername(i)
                : null;
            (s != null && (l.username = s),
              t &&
                (l.externalUserState = o(
                  "WAWebContactExternalUserState",
                ).ExternalUserState.GuestUser),
              !r("isEmptyObject")(l) &&
                o("WAWebContactCollection")
                  .ContactCollection.gadd(
                    o("WAWebWidFactory").asUserWidOrThrow(n),
                  )
                  .set(l));
          }
        });
      },
    };
    l.VoipBridgeContactHandlers = e;
  },
  98,
);
