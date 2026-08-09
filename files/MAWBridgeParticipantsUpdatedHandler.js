__d(
  "MAWBridgeParticipantsUpdatedHandler",
  [
    "fbt",
    "I64",
    "LSAuthorityLevel",
    "LSContactBlockedByViewerStatus",
    "LSContactGender",
    "LSContactIdType",
    "LSContactType",
    "LSContactViewerRelationship",
    "LSContactWorkForeignEntityType",
    "LSFactory",
    "LSGroupParticipantJoinState",
    "LSIntEnum",
    "LSVerifyContactRowExistsStoredProcedure",
    "MAWCurrentUser",
    "MAWJids",
    "MAWMiActMappingTableAPI",
    "MAWUpdateLSThreadCapabilities",
    "Promise",
    "asyncToGeneratorRuntime",
    "uniqueArray",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = o("MAWCurrentUser").getID(),
      m = (c || (c = o("I64"))).of_string(d);
    function p(e, t) {
      var n = t.map(function (e) {
        var t = e.chatJid,
          n = e.type,
          r = e.userJid;
        return babelHelpers.extends({ chatJid: t }, E(n), { userJid: r });
      });
      return f(e, n);
    }
    function _(e, t) {
      var n = t.participants.map(function (e) {
        return {
          chatJid: e.threadJid,
          isAdmin: e.isAdmin,
          isInvited: e.isInvited,
          isSuperAdmin: e.isSuperAdmin,
          userJid: o("MAWJids").toUserJid(e.fbid),
        };
      });
      return f(e, n);
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield C(t, r);
          yield (e || (e = n("Promise"))).all(
            a
              .map(function (r) {
                var a = r.mawParticipant,
                  i = r.threadKey,
                  l = o("MAWJids").convertChatJidToIntJid(a.userJid);
                return [
                  t.participants.get(i, l).then(function (r) {
                    var o = R(r, a, i);
                    return r != null
                      ? t.participants.put(o)
                      : (e || (e = n("Promise"))).all([
                          t.participants.add(o),
                          h(t, l),
                        ]);
                  }),
                  v(t, l, i, a.isAdmin),
                ];
              })
              .flat(1 / 0),
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield r("LSVerifyContactRowExistsStoredProcedure")(
            r("LSFactory")(e),
            {
              authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(
                r("LSAuthorityLevel").OPTIMISTIC,
              ),
              blockedByViewerStatus: u.ofNumber(
                r("LSContactBlockedByViewerStatus").UNBLOCKED,
              ),
              contactIdType: u.ofNumber(r("LSContactIdType").FBID),
              contactType: u.ofNumber(r("LSContactType").USER),
              contactViewerRelationship: u.ofNumber(
                r("LSContactViewerRelationship").UNKNOWN,
              ),
              gender: u.ofNumber(r("LSContactGender").UNKNOWN),
              id: t,
              isBlocked: !1,
              isMemorialized: !1,
              isSelf: d === (c || (c = o("I64"))).to_string(t),
              workForeignEntityType: u.ofNumber(
                r("LSContactWorkForeignEntityType").UNKNOWN,
              ),
            },
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = r("uniqueArray")(
              a.map(function (e) {
                return e.chatJid;
              }),
            ),
            l = new Map();
          return (
            yield (e || (e = n("Promise"))).all(
              i.map(function (e) {
                return o("MAWMiActMappingTableAPI")
                  .getThreadKeyForChatJid(t, e)
                  .then(function (t) {
                    return t != null && l.set(e, t);
                  });
              }),
            ),
            a
              .map(function (e) {
                var t = l.get(e.chatJid);
                return t == null ? null : { mawParticipant: e, threadKey: t };
              })
              .filter(Boolean)
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            (yield o(
              "MAWUpdateLSThreadCapabilities",
            ).disableBlockerCapabilitiesTxn(e, n),
              (c || (c = o("I64"))).equal(m, t) &&
                (r
                  ? yield o(
                      "MAWUpdateLSThreadCapabilities",
                    ).enableAddMembersTxn(e, n)
                  : yield o(
                      "MAWUpdateLSThreadCapabilities",
                    ).disableAddMembersTxn(e, n)));
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return e == null
        ? babelHelpers.extends({}, L(t), {
            authorityLevel: (c || (c = o("I64"))).zero,
            contactId: o("MAWJids").convertChatJidToIntJid(t.userJid),
            deliveredWatermarkTimestampMs: c.zero,
            isSuperAdmin: t.isSuperAdmin,
            nickname: void 0,
            normalizedSearchTerms: void 0,
            participantCapabilities: void 0,
            readActionTimestampMs: c.zero,
            readWatermarkTimestampMs: c.zero,
            threadKey: n,
            threadRoles: c.zero,
          })
        : babelHelpers.extends({}, e, L(t));
    }
    function L(e) {
      return {
        groupParticipantJoinState: e.isInvited
          ? (u || (u = o("LSIntEnum"))).ofNumber(
              r("LSGroupParticipantJoinState").INVITED,
            )
          : (u || (u = o("LSIntEnum"))).ofNumber(
              r("LSGroupParticipantJoinState").MEMBER,
            ),
        isAdmin: e.isAdmin,
        isModerator: !1,
        subscribeSource: e.isSuperAdmin
          ? s._(/*BTDS*/ "Group creator").toString()
          : void 0,
      };
    }
    function E(e) {
      return {
        isAdmin: e === "superadmin" || e === "admin",
        isInvited: e === "invitedParticipant",
        isSuperAdmin: e === "superadmin",
      };
    }
    ((l.callFromMainThread = p),
      (l.call = _),
      (l.mawToLsParticipantTypeConversion = E));
  },
  226,
);
