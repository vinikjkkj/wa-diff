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
    "asyncToGeneratorRuntime",
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
        getAllOrphanRevokes: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!s) {
              var t = yield o("WAWebSchemaOrphanRevoke")
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
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      };
    function c(e) {
      return u.bulkCreateOrReplaceOrphanRevokes(e);
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return u.getAllOrphanRevokes();
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return u.bulkRemoveOrphans(e);
    }
    function _(e, t) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u.getAllOrphanRevokes(),
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
            yield u.bulkRemoveOrphans(n),
            a
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.addOrphanRevokes = c),
      (l.getOrphansRevokesCache = d),
      (l.bulkRemoveOrphansUsingOrphansCache = p),
      (l.createRevokeMsgFromOrphanRevoke = _),
      (l.applyAddonRevokes = f));
  },
  98,
);
