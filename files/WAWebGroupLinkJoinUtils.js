__d(
  "WAWebGroupLinkJoinUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupGatingUtils",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebSchemaGroupMemberChanges",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e, t, n) {
      var r = o("WAWebSchemaGroupMemberChanges").getGroupMemberChangesTable(),
        a = t.map(function (t) {
          return {
            groupJid: e,
            participantJid: t.id.toString(),
            changeTimestamp: n,
            changeAction: o("WAWebSchemaGroupMemberChanges")
              .GroupMemberChangeAction.JOINED_VIA_LINK,
          };
        });
      await r.bulkCreateOrReplace(a);
    }
    async function c(e, t, n) {
      var r = o("WAWebSchemaGroupMemberChanges").getGroupMemberChangesTable(),
        a = e.toString(),
        i = await r.equals(["groupJid"], a),
        l = i.filter(function (e) {
          return !(
            e.changeAction !==
              o("WAWebSchemaGroupMemberChanges").GroupMemberChangeAction
                .JOINED_VIA_LINK ||
            (t != null && e.changeTimestamp < t) ||
            (n != null && e.changeTimestamp > n)
          );
        }),
        s = new Set(
          l.map(function (e) {
            return e.participantJid;
          }),
        );
      return Array.from(s);
    }
    async function d(t, n, r) {
      var a,
        i = o("WATimeUtils").unixTime(),
        l = n == null ? void 0 : n.lastJoinFloodNotificationTimestampSec;
      if (l != null && i - l < o("WATimeUtils").HOUR_SECONDS) return null;
      var s = (a = t.ts) != null ? a : i;
      await u(t.chatId.toString(), r, o("WATimeUtils").castToUnixTime(s));
      var d = i - o("WATimeUtils").FIVE_MINUTES,
        m = await c(t.chatId.toString(), o("WATimeUtils").castToUnixTime(d));
      return m.length >=
        o("WAWebGroupGatingUtils").getAnyoneCanLinkM2FloodLimit()
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sysmsg] join flood notif - ",
                " joins in 5min",
              ])),
            m.length,
          ),
          await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t.chatId, {
            lastJoinFloodNotificationTimestampSec: i,
          }),
          o("WAWebGroupSystemMsg").genGroupNotificationMsg({
            meta: t,
            action: {
              actionType:
                o("WAWebGroupType").GROUP_ACTIONS.JOIN_FLOOD_NOTIFICATION,
            },
            dbIsStale: !1,
          }))
        : null;
    }
    async function m(e, t, n) {
      if (!o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled())
        return [];
      var r = [];
      try {
        var a = await d(e, t, n);
        a != null && r.push(a);
      } catch (e) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[system message] join flood notification failed: ",
              "",
            ])),
          e,
        );
      }
      return r;
    }
    ((l.JOIN_FLOOD_WINDOW_SECS = o("WATimeUtils").FIVE_MINUTES),
      (l.JOIN_FLOOD_COOLDOWN_SECS = o("WATimeUtils").HOUR_SECONDS),
      (l.storeJoinViaLinkRecords = u),
      (l.getParticipantsJoinedViaLink = c),
      (l.maybeGenerateLinkJoinNotifications = m));
  },
  98,
);
