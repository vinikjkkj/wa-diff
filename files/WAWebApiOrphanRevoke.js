__d(
  "WAWebApiOrphanRevoke",
  [
    "WANullthrows",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebSchemaOrphanRevoke",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = !1,
      u = {
        reset: function () {
          ((e = new Map()), (s = !1));
        },
        bulkRemoveOrphans: function (n) {
          return (
            n.forEach(function (t) {
              e.delete(t.msgKey);
            }),
            o("WAWebSchemaOrphanRevoke")
              .getOrphanRevokeTable()
              .bulkRemove(
                n.map(function (e) {
                  return e.msgKey;
                }),
              )
          );
        },
        bulkCreateOrReplaceOrphanRevokes: function (n) {
          return (
            n.forEach(function (t) {
              (e.has(t.msgKey) && e.delete(t.msgKey), e.set(t.msgKey, t));
            }),
            o("WAWebSchemaOrphanRevoke")
              .getOrphanRevokeTable()
              .bulkCreateOrReplace(n)
          );
        },
        getAllOrphanRevokes: async function () {
          if (!s) {
            var t = await o("WAWebSchemaOrphanRevoke")
              .getOrphanRevokeTable()
              .all();
            ((e = new Map(
              t.map(function (e) {
                return [e.msgKey, e];
              }),
            )),
              (s = !0));
          }
          return e;
        },
      };
    function c(e) {
      return u.bulkCreateOrReplaceOrphanRevokes(e);
    }
    async function d() {
      return u.getAllOrphanRevokes();
    }
    function m(e) {
      return u.bulkRemoveOrphans(e);
    }
    function p(e, t) {
      var n;
      return {
        id: e.id,
        to: e.to,
        author: e.author,
        revokeSender: o("WAWebWidFactory").createWidFromWidLike(
          (n = t.sender) != null ? n : o("WAWebMsgGetters").getSender(e),
        ),
        type: o("WAWebMsgType").MSG_TYPE.REVOKED,
        kind: o("WAWebMsgType").MsgKind.RevokedMessage,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
        protocolMessageKey: e.id,
        from: e.from,
        t: e.t,
        broadcast: e.broadcast,
      };
    }
    async function _(e) {
      var t = await u.getAllOrphanRevokes(),
        n = [],
        a = [];
      return (
        e.forEach(function (e) {
          var i = e.id.toString();
          if (t.has(i)) {
            var l = r("WANullthrows")(t.get(i));
            (a.push(
              babelHelpers.extends(
                {},
                o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e),
                {
                  id: r("WAWebMsgKey").fromString(l.msgKey),
                  type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                  kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
                  subtype:
                    l.subtype === "admin_revoke"
                      ? "admin_revoke"
                      : "sender_revoke",
                  protocolMessageKey: e.id,
                  t: l.timestamp,
                },
              ),
            ),
              n.push(l));
          }
        }),
        await u.bulkRemoveOrphans(n),
        a
      );
    }
    ((l.addOrphanRevokes = c),
      (l.getOrphansRevokesCache = d),
      (l.bulkRemoveOrphansUsingOrphansCache = m),
      (l.createRevokeMsgFromOrphanRevoke = p),
      (l.applyAddonRevokes = _));
  },
  98,
);
