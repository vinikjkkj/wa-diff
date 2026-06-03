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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o(
              "WAWebSchemaGroupMemberChanges",
            ).getGroupMemberChangesTable(),
            a = t.map(function (t) {
              return {
                groupJid: e,
                participantJid: t.id.toString(),
                changeTimestamp: n,
                changeAction: o("WAWebSchemaGroupMemberChanges")
                  .GroupMemberChangeAction.JOINED_VIA_LINK,
              };
            });
          yield r.bulkCreateOrReplace(a);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o(
              "WAWebSchemaGroupMemberChanges",
            ).getGroupMemberChangesTable(),
            a = e.toString(),
            i = yield r.equals(["groupJid"], a),
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a,
            i = o("WATimeUtils").unixTime(),
            l = n == null ? void 0 : n.lastJoinFloodNotificationTimestampSec;
          if (l != null && i - l < o("WATimeUtils").HOUR_SECONDS) return null;
          var s = (a = t.ts) != null ? a : i;
          yield u(t.chatId.toString(), r, o("WATimeUtils").castToUnixTime(s));
          var c = i - o("WATimeUtils").FIVE_MINUTES,
            m = yield d(
              t.chatId.toString(),
              o("WATimeUtils").castToUnixTime(c),
            );
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
              yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                t.chatId,
                { lastJoinFloodNotificationTimestampSec: i },
              ),
              o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                meta: t,
                action: {
                  actionType:
                    o("WAWebGroupType").GROUP_ACTIONS.JOIN_FLOOD_NOTIFICATION,
                },
                dbIsStale: !1,
              }))
            : null;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled())
            return [];
          var r = [];
          try {
            var a = yield p(e, t, n);
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
        })),
        g.apply(this, arguments)
      );
    }
    ((l.JOIN_FLOOD_WINDOW_SECS = o("WATimeUtils").FIVE_MINUTES),
      (l.JOIN_FLOOD_COOLDOWN_SECS = o("WATimeUtils").HOUR_SECONDS),
      (l.storeJoinViaLinkRecords = u),
      (l.getParticipantsJoinedViaLink = d),
      (l.maybeGenerateLinkJoinNotifications = f));
  },
  98,
);
