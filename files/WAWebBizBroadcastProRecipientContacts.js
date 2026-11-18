__d(
  "WAWebBizBroadcastProRecipientContacts",
  [
    "WAJids",
    "WAWebBizBroadcastProContactRecipientUtils",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebContactCollection").ContactCollection.ensureSorted(),
        o("WAWebBizBroadcastsRecipientUtils").sortByRecipientPickerName(
          o("WAWebContactCollection")
            .ContactCollection.getModelsArray()
            .filter(s),
        )
      );
    }
    function s(e) {
      return (
        e.id.isLid() &&
        !e.id.isBot() &&
        !e.id.equals(o("WAWebBotUtils").META_BOT_LID_WID) &&
        !e.id.isAiHub() &&
        !r("WAWebWid").isPSA(e.id) &&
        !o("WAWebContactGetters").getIsMe(e) &&
        e.isActive() &&
        !e.isUsernameContact &&
        o("WAWebBizBroadcastProContactRecipientUtils").hasRecipientPhone(e)
      );
    }
    function u(t) {
      return (
        t === void 0 && (t = !1),
        Array.from(
          new Set(
            e().flatMap(function (e) {
              if (t && e.type !== "in") return [];
              var n = o("WAWebLidMigrationUtils").toLid(e.id);
              return n == null ? [] : [o("WAJids").toLidUserJid(n.user)];
            }),
          ),
        )
      );
    }
    ((l.getProRecipientContacts = e), (l.getProRecipientCandidateLids = u));
  },
  98,
);
