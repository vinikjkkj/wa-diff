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
      u = "removedhumans",
      c = "removedme",
      d = "removedothers",
      m = /_/g;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.action,
            i = t.dbIsStale,
            l = t.isAdmin,
            c = t.meta,
            d = a.participants.filter(function (e) {
              var t = e.id;
              return o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
            });
          if (
            d.length === 0 ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          )
            return null;
          var m = c.author,
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
            return C({ action: a, dbIsStale: i, meta: c });
          var f = p.filter(function (e) {
              return !_.includes(e);
            }),
            g = yield (e || (e = n("Promise"))).all([
              v({
                action: a,
                dbIsStale: i,
                isAdmin: l,
                leavingHumans: _,
                meta: c,
              }),
              f.length === 0
                ? null
                : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: h(c, u),
                    action: babelHelpers.extends({}, a, { participants: f }),
                    dbIsStale: i,
                  }),
            ]),
            y = yield e.all(
              d.map(function (e) {
                return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                  meta: babelHelpers.extends({}, h(c, "" + s + e.id.user), {
                    author: null,
                  }),
                  action: babelHelpers.extends({}, a, { participants: [e] }),
                  dbIsStale: i,
                });
              }),
            ),
            b = [].concat(g, y).filter(Boolean);
          return b.length === 0 ? null : b;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var s = yield p({
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
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n;
      return babelHelpers.extends({}, e, {
        externalId:
          "" +
          ((n = e.externalId) != null
            ? n
            : r("WAWebMsgKey").newId_DEPRECATED()) +
          y(t),
      });
    }
    function y(e) {
      return e.replace(m, "");
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.action,
            a = t.dbIsStale,
            i = t.meta,
            l = r.participants.find(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            });
          if (l == null) return null;
          var s = yield (e || (e = n("Promise"))).all([
              o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                meta: h(i, c),
                action: babelHelpers.extends({}, r, { participants: [l] }),
                dbIsStale: a,
              }),
              o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                meta: h(i, d),
                action: babelHelpers.extends({}, r, {
                  participants: r.participants.filter(function (e) {
                    return e !== l;
                  }),
                }),
                dbIsStale: a,
              }),
            ]),
            u = s.filter(Boolean);
          return u.length === 0 ? null : u;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.dbIsStale,
            r = e.isAdmin,
            a = e.leavingHumans,
            i = e.meta,
            l = i.author;
          if (
            a.length === 0 ||
            l == null ||
            o("WAWebUserPrefsMeUser").isMeAccount(l)
          )
            return null;
          var s =
            r != null
              ? r
              : yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                  i.chatId.toString(),
                );
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
        S.apply(this, arguments)
      );
    }
    ((l.genGroupAgentRemovalMsgs = p),
      (l.genGroupAgentRemovalMsgsForMetadata = f),
      (l.withSystemMsgIdSuffix = h),
      (l.toSystemMsgIdPart = y));
  },
  98,
);
