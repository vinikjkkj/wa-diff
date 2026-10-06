__d(
  "WAWebGroupAgentRemovalSystemMsgs",
  [
    "Promise",
    "WATimeUtils",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "agentleft",
      u = "agentremoved",
      c = "removedhumans",
      d = "removedme",
      m = "removedothers",
      p = /_/g;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.action,
            i = t.dbIsStale,
            l = t.isAdmin,
            u = t.meta,
            d = a.participants.filter(function (e) {
              var t = e.id;
              return o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
            });
          if (
            d.length === 0 ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          )
            return null;
          var m = u.author,
            p = a.participants.filter(function (e) {
              var t = e.id;
              return !o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
            }),
            _ =
              m == null
                ? []
                : p.filter(function (e) {
                    var t = e.id;
                    return r("WAWebWid").equals.apply(
                      r("WAWebWid"),
                      o("WAWebLidMigrationUtils").toCommonAddressingMode(m, t),
                    );
                  });
          if (m != null && _.length === 0)
            return b({
              action: a,
              agents: d,
              dbIsStale: i,
              humans: p,
              meta: u,
            });
          var f = p.filter(function (e) {
              return !_.includes(e);
            }),
            g = yield (e || (e = n("Promise"))).all([
              S({
                action: a,
                dbIsStale: i,
                isAdmin: l,
                leavingHumans: _,
                meta: u,
              }),
              f.length === 0
                ? null
                : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: y(u, c),
                    action: babelHelpers.extends({}, a, { participants: f }),
                    dbIsStale: i,
                  }),
            ]),
            h = yield e.all(
              d.map(function (e) {
                return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                  meta: babelHelpers.extends({}, y(u, "" + s + e.id.user), {
                    author: null,
                  }),
                  action: babelHelpers.extends({}, a, { participants: [e] }),
                  dbIsStale: i,
                });
              }),
            ),
            C = [].concat(g, h).filter(Boolean);
          return C.length === 0 ? null : C;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  !i.has(e.toString())
                );
              })
              .map(function (e) {
                return { id: e, isAdmin: !1, isSuperAdmin: !1 };
              });
          if (l.length === 0) return [];
          var s = yield _({
            meta: {
              chatId: n,
              author: null,
              ts: o("WATimeUtils").castToUnixTime(Date.now()),
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n;
      return babelHelpers.extends({}, e, {
        externalId:
          "" +
          ((n = e.externalId) != null
            ? n
            : r("WAWebMsgKey").newId_DEPRECATED()) +
          C(t),
      });
    }
    function C(e) {
      return e.replace(p, "");
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.action,
            a = t.agents,
            i = t.dbIsStale,
            l = t.humans,
            s = t.meta;
          if (l.length === 0) return null;
          var p = l.find(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            }),
            _ = l.filter(function (e) {
              return e !== p;
            }),
            f = yield (e || (e = n("Promise"))).all(
              [
                p == null
                  ? null
                  : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                      meta: y(s, d),
                      action: babelHelpers.extends({}, r, {
                        participants: [p],
                      }),
                      dbIsStale: i,
                    }),
                _.length === 0
                  ? null
                  : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                      meta: y(s, p == null ? c : m),
                      action: babelHelpers.extends({}, r, { participants: _ }),
                      dbIsStale: i,
                    }),
              ].concat(
                a.map(function (e) {
                  return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: y(s, "" + u + e.id.user),
                    action: babelHelpers.extends({}, r, { participants: [e] }),
                    dbIsStale: i,
                  });
                }),
              ),
            ),
            g = f.filter(Boolean);
          return g.length === 0 ? null : g;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.dbIsStale,
            r = e.isAdmin,
            a = e.leavingHumans,
            i = e.meta,
            l = i.author;
          if (a.length === 0 || l == null) return null;
          var s =
            o("WAWebUserPrefsMeUser").isMeAccount(l) ||
            (r != null
              ? r
              : yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
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
        })),
        R.apply(this, arguments)
      );
    }
    ((l.genGroupAgentRemovalMsgs = _),
      (l.genGroupAgentRemovalMsgsForMetadata = g),
      (l.withSystemMsgIdSuffix = y),
      (l.toSystemMsgIdPart = C));
  },
  98,
);
