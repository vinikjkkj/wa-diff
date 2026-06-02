__d(
  "WAWebShouldUpdateLastAddOnPreview",
  [
    "WAWebBackendApi",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebLastAddOnDBSerialization",
    "WAWebMsgKey",
    "WAWebReactionsBEUtils",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WAWebMsgKey").fromString(e.parentMsgKey);
      return e.type === "comment"
        ? !0
        : (o("WAWebUserPrefsMeUser").isSerializedWidMe(e.sender) || t.fromMe) &&
            !e.isOrphan;
    }
    async function s(e) {
      var t = new Map(),
        n = await o("WAWebSchemaChat").getChatTable().bulkGet(e);
      return (
        n.forEach(function (e) {
          var n;
          e != null &&
            t.set(
              e.id.toString(),
              (n = e.chatlistPreview) != null ? n : e.lastReactionPreview,
            );
        }),
        t
      );
    }
    function u(e) {
      var t = r("WAWebMsgKey").fromString(e.parentMsgKey);
      return t.remote.toString();
    }
    function c(e, t) {
      return p(e)
        ? e.sender === t.sender &&
            e.parentMsgKey === t.parentMsgKey &&
            e.timestamp >= t.timestamp
        : !1;
    }
    async function d(t) {
      var n = t.filter(function (t) {
          return e(t);
        }),
        a = new Map();
      if (!n.length) return a;
      var i = new Set(
          n.map(function (e) {
            var t = r("WAWebMsgKey").fromString(e.parentMsgKey);
            return t.remote.toString();
          }),
        ),
        l = await s(Array.from(i));
      return (
        n.forEach(function (e) {
          var t = u(e),
            n = l.get(t),
            r = a.get(t),
            i = r != null ? r : n;
          p(e)
            ? i && c(e, i) && e.timestamp >= i.timestamp && a.set(t, void 0)
            : i
              ? e.timestamp >= i.timestamp &&
                a.set(
                  t,
                  o(
                    "WAWebLastAddOnDBSerialization",
                  ).lastAddOnPreviewFromCandidate(e),
                )
              : a.set(
                  t,
                  o(
                    "WAWebLastAddOnDBSerialization",
                  ).lastAddOnPreviewFromCandidate(e),
                );
        }),
        a
      );
    }
    async function m(e) {
      var t = await d(e);
      t.size > 0 &&
        (await o(
          "WAWebDBUpdateLastAddOnPreviewChat",
        ).updateDatabaseForLastAddOnPreview(t),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateChatLastAddOnPreview",
          { chatMap: t },
        ));
    }
    function p(e) {
      return e.type === "poll_vote"
        ? e.selectedOptionsCount === 0
        : e.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
    }
    ((l.isAddOnPreviewUpdateCandidate = e),
      (l.bulkGetChatLastAddOnPreviewMap = s),
      (l.filterChatsWithAddOnPreviewUpdates = d),
      (l.filterAndUpdateChatPreviews = m));
  },
  98,
);
