__d(
  "WAWebContactsAndGroupsDBGroupJoins",
  [
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "invite",
      s = 500,
      u = new Set([
        "add",
        "auto_add",
        e,
        "invite_auto_add",
        "community_invite_auto_add_rich",
        "subgroup_admin_triggered_invite_auto_add",
        "linked_group_join",
        "v4_add_invite_join",
      ]);
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .between(
              ["messageRangeIndex"],
              o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
                e,
                o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
                t,
              ),
              o("WAWebDBMessageStoreUtils").endOfMessageRange(
                e,
                o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
              ),
              { lowerInclusive: !0 },
            );
          return f(n);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .between(
              ["messageRangeIndex"],
              o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
                e,
                o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
                t,
              ),
              o("WAWebDBMessageStoreUtils").endOfMessageRange(
                e,
                o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
              ),
              { limit: s, lowerInclusive: !0, reverse: !0 },
            );
          return _(
            n
              .filter(function (e) {
                return e.type === o("WAWebMsgType").MSG_TYPE.GP2;
              })
              .map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              }),
            o("WAWebUserPrefsMeUser").isMeAccount,
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n = null;
      return (
        e.forEach(function (e) {
          var r = e.author,
            a = e.recipients,
            i = e.subtype,
            l = e.t,
            s = e.type;
          s !== o("WAWebMsgType").MSG_TYPE.GP2 ||
            i == null ||
            l == null ||
            !u.has(i) ||
            (a == null ? void 0 : a.some(t)) !== !0 ||
            ((n == null || l > n.t) && (n = { author: r, subtype: i, t: l }));
        }),
        n
      );
    }
    function f(t) {
      var n = 0,
        r = 0;
      return (
        t.forEach(function (t) {
          var a,
            i = t.recipients,
            l = t.subtype,
            s = t.type;
          if (s === o("WAWebMsgType").MSG_TYPE.GP2) {
            var c = Math.max(
              (a = i == null ? void 0 : i.length) != null ? a : 0,
              1,
            );
            (l === e && (r += c), l != null && u.has(l) && (n += c));
          }
        }),
        { joinCount: n, linkJoinCount: r }
      );
    }
    ((l.INVITE_LINK_JOIN_SUBTYPE = e),
      (l.getGroupJoinsSince = c),
      (l.getMyGroupJoinSince = m),
      (l.findMyGroupJoin = _),
      (l.countGroupJoins = f));
  },
  98,
);
