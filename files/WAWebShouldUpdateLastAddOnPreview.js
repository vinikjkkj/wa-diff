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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WAWebMsgKey").fromString(e.parentMsgKey);
      return e.type === "comment"
        ? !0
        : (o("WAWebUserPrefsMeUser").isSerializedWidMe(e.sender) || t.fromMe) &&
            !e.isOrphan;
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = yield o("WAWebSchemaChat").getChatTable().bulkGet(e);
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t = r("WAWebMsgKey").fromString(e.parentMsgKey);
      return t.remote.toString();
    }
    function d(e, t) {
      return g(e)
        ? e.sender === t.sender &&
            e.parentMsgKey === t.parentMsgKey &&
            e.timestamp >= t.timestamp
        : !1;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            l = yield s(Array.from(i));
          return (
            n.forEach(function (e) {
              var t = c(e),
                n = l.get(t),
                r = a.get(t),
                i = r != null ? r : n;
              g(e)
                ? i && d(e, i) && e.timestamp >= i.timestamp && a.set(t, void 0)
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(e);
          t.size > 0 &&
            (yield o(
              "WAWebDBUpdateLastAddOnPreviewChat",
            ).updateDatabaseForLastAddOnPreview(t),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateChatLastAddOnPreview",
              { chatMap: t },
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return e.type === "poll_vote"
        ? e.selectedOptionsCount === 0
        : e.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
    }
    ((l.isAddOnPreviewUpdateCandidate = e),
      (l.bulkGetChatLastAddOnPreviewMap = s),
      (l.filterChatsWithAddOnPreviewUpdates = m),
      (l.filterAndUpdateChatPreviews = _));
  },
  98,
);
