__d(
  "WAWebGroupAgentRemovalSystemMsgs",
  [
    "WATimeUtils",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "agentleft",
      s = "agentremoved",
      u = "removedhumans",
      c = "removedme",
      d = "removedothers",
      m = /_/g;
    async function p(t) {
      var n = t.action,
        a = t.dbIsStale,
        i = t.isAdmin,
        l = t.meta,
        s = n.participants.filter(function (e) {
          var t = e.id;
          return o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
        });
      if (
        s.length === 0 ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      )
        return null;
      var c = l.author,
        d = n.participants.filter(function (e) {
          var t = e.id;
          return !o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
        }),
        m =
          c == null
            ? []
            : d.filter(function (e) {
                var t = e.id;
                return r("WAWebWid").equals.apply(
                  r("WAWebWid"),
                  o("WAWebLidMigrationUtils").toCommonAddressingMode(c, t),
                );
              });
      if (c != null && m.length === 0)
        return h({ action: n, agents: s, dbIsStale: a, humans: d, meta: l });
      var p = d.filter(function (e) {
          return !m.includes(e);
        }),
        _ = await Promise.all([
          y({ action: n, dbIsStale: a, isAdmin: i, leavingHumans: m, meta: l }),
          p.length === 0
            ? null
            : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                meta: f(l, u),
                action: babelHelpers.extends({}, n, { participants: p }),
                dbIsStale: a,
              }),
        ]),
        g = await Promise.all(
          s.map(function (t) {
            return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
              meta: babelHelpers.extends({}, f(l, "" + e + t.id.user), {
                author: null,
              }),
              action: babelHelpers.extends({}, n, { participants: [t] }),
              dbIsStale: a,
            });
          }),
        ),
        C = [].concat(_, g).filter(Boolean);
      return C.length === 0 ? null : C;
    }
    async function _(e) {
      var t = e.currentParticipants,
        n = e.groupWid,
        r = e.isLidAddressingMode,
        a = e.previousParticipantIds,
        i = new Set(
          t.map(function (e) {
            var t = e.id;
            return t.toString();
          }),
        ),
        l = a
          .map(function (e) {
            return o("WAWebWidFactory").createWid(e);
          })
          .filter(function (e) {
            return (
              o("WAWebBotUtils").isWidGroupAgentFbidWid(e) &&
              o("WAWebBotGroupGatingUtils").isAgentListedInGroupInfoResponse(
                e,
              ) &&
              !i.has(e.toString())
            );
          })
          .map(function (e) {
            return { id: e, isAdmin: !1, isSuperAdmin: !1 };
          });
      if (l.length === 0) return [];
      var s = await p({
        meta: {
          chatId: n,
          author: null,
          ts: o("WATimeUtils").unixTime(),
          isLidAddressingMode: r,
        },
        action: {
          actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
          participants: l,
          reason: null,
          isLidAddressingMode: r != null ? r : void 0,
        },
        dbIsStale: !1,
      });
      return s != null ? s : [];
    }
    function f(e, t) {
      var n;
      return babelHelpers.extends({}, e, {
        externalId:
          "" +
          ((n = e.externalId) != null
            ? n
            : r("WAWebMsgKey").newId_DEPRECATED()) +
          g(t),
      });
    }
    function g(e) {
      return e.replace(m, "");
    }
    async function h(e) {
      var t = e.action,
        n = e.agents,
        r = e.dbIsStale,
        a = e.humans,
        i = e.meta;
      if (a.length === 0) return null;
      var l = a.find(function (e) {
          var t = e.id;
          return o("WAWebUserUtils").isMeAccount(t);
        }),
        m = a.filter(function (e) {
          return e !== l;
        }),
        p = await Promise.all(
          [
            l == null
              ? null
              : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                  meta: f(i, c),
                  action: babelHelpers.extends({}, t, { participants: [l] }),
                  dbIsStale: r,
                }),
            m.length === 0
              ? null
              : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                  meta: f(i, l == null ? u : d),
                  action: babelHelpers.extends({}, t, { participants: m }),
                  dbIsStale: r,
                }),
          ].concat(
            n.map(function (e) {
              return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                meta: f(i, "" + s + e.id.user),
                action: babelHelpers.extends({}, t, { participants: [e] }),
                dbIsStale: r,
              });
            }),
          ),
        ),
        _ = p.filter(Boolean);
      return _.length === 0 ? null : _;
    }
    async function y(e) {
      var t = e.action,
        n = e.dbIsStale,
        r = e.isAdmin,
        a = e.leavingHumans,
        i = e.meta,
        l = i.author;
      if (a.length === 0 || l == null) return null;
      var s =
        o("WAWebUserUtils").isMeAccount(l) ||
        (r != null
          ? r
          : await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              i.chatId.toString(),
            ));
      return s
        ? o("WAWebGroupSystemMsg").genGroupNotificationMsg({
            meta: i,
            action: babelHelpers.extends({}, t, {
              participants: [babelHelpers.extends({}, a[0], { id: l })],
            }),
            dbIsStale: n,
          })
        : null;
    }
    ((l.genGroupAgentRemovalMsgs = p),
      (l.genGroupAgentRemovalMsgsForMetadata = _),
      (l.withSystemMsgIdSuffix = f),
      (l.toSystemMsgIdPart = g));
  },
  98,
);
