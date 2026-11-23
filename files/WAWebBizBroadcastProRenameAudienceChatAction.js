__d(
  "WAWebBizBroadcastProRenameAudienceChatAction",
  [
    "WAJids",
    "WATimeUtils",
    "WAWebBroadcastListStorageUtils",
    "WAWebBroadcastListSync",
    "WAWebLidMigrationUtils",
    "WAWebSchemaBroadcastMetadata",
    "WAWebSchemaChat",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await o("WAWebSchemaBroadcastMetadata")
          .getBroadcastMetadataTable()
          .all(),
        a = n.filter(function (t) {
          return t.customAudienceFbid === e;
        }),
        i = await o("WAWebSchemaChat")
          .getChatTable()
          .bulkGet(
            a.map(function (e) {
              return e.id;
            }),
          ),
        l = a.find(function (e, t) {
          return i[t] != null;
        });
      if (l != null) {
        var u = t.trim(),
          c = o("WATimeUtils").unixTimeMs(),
          d = r("WAWebBroadcastListSync").getBroadcastListMutation({
            customAudienceFbid: e,
            expression: l.audienceExpression,
            id: l.id,
            listName: u,
            participants: l.recipients.map(s),
            timestamp: c,
          });
        await o("WAWebBroadcastListStorageUtils").updateBroadcastListStorage(
          {
            audienceExpression: l.audienceExpression,
            customAudienceFbid: e,
            id: l.id,
            isBizBroadcastPro: !0,
            listName: u,
            shouldInsertInitialSystemMessages: !1,
            timestamp: o("WATimeUtils").castMilliSecondsToUnixTime(c),
          },
          [d],
        );
      }
    }
    function s(e) {
      var t,
        n =
          (t = o("WAWebLidMigrationUtils").toPn(
            o("WAWebWidFactory").createWid(e),
          )) == null
            ? void 0
            : t.user;
      return {
        lidJid: e,
        pnJid: n != null ? o("WAJids").toPhoneUserJid(n) : void 0,
      };
    }
    l.renameBizBroadcastProAudienceChatAction = e;
  },
  98,
);
