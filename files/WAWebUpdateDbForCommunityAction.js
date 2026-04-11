__d(
  "WAWebUpdateDbForCommunityAction",
  [
    "Promise",
    "WAWebApiParticipantStore",
    "WAWebDBCommunity",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupUnjoinedSubgroupJob",
    "WAWebGroupsParticipantsApi",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return d(e, t, !1);
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = yield (e || (e = n("Promise"))).all([
              o("WAWebDBCommunity")
                .getJoinedSubgroupsMetadata(
                  o("WAWebWidFactory").createWid(t.id),
                )
                .then(function (e) {
                  return e.filter(function (e) {
                    return !o("WAWebWidFactory").createWid(e.id).equals(r);
                  });
                }),
              o("WAWebDBCommunity").getUnjoinedSubgroupsMetadata(
                o("WAWebWidFactory").createWid(t.id),
              ),
            ]),
            l = i[0],
            u = i[1],
            c = l.concat(u).map(function (e) {
              var t = e.id,
                n = e.subject;
              return { id: o("WAWebWidFactory").createWid(t), subject: n };
            });
          return s(a, c);
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
          t.forEach(function (t) {
            ((t.parentGroupId = n ? e : void 0),
              (t.generalSubgroup = n ? t.generalSubgroup : void 0),
              (t.hiddenSubgroup = n ? t.hiddenSubgroup : void 0));
          });
          var r = f(
              t,
              yield p(
                t.map(function (e) {
                  return e.id;
                }),
              ),
            ),
            a = r.joinedSubgroups,
            i = r.unjoinedSubgroups,
            l = a.map(function (t) {
              return o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                t.id,
                {
                  parentGroup: n ? e.toString() : void 0,
                  generalSubgroup: n ? t.generalSubgroup : void 0,
                  hiddenSubgroup: n ? t.hiddenSubgroup : void 0,
                },
              );
            }),
            s = o("WAWebGroupUnjoinedSubgroupJob").updateUnjoinedSubgroupsJob(
              i,
              e,
              n,
            );
          return [].concat(l, [s]);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(
              (yield o("WAWebGroupsParticipantsApi").bulkGetParticipants(e))
                .filter(Boolean)
                .map(function (e) {
                  return [e.groupId, e.participants];
                }),
            ),
            n = o("WAWebUserPrefsMeUser")
              .getMePnUserOrThrow_DO_NOT_USE()
              .toString();
          return function (e) {
            var r, o;
            return (r =
              (o = t.get(e.toString())) == null ? void 0 : o.includes(n)) !=
              null
              ? r
              : !1;
          };
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return e.reduce(
        function (e, n) {
          return (
            t(n.id)
              ? (e.joinedSubgroups = e.joinedSubgroups.concat(n))
              : (e.unjoinedSubgroups = e.unjoinedSubgroups.concat(n)),
            e
          );
        },
        { joinedSubgroups: [], unjoinedSubgroups: [] },
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [],
            r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          if ((r == null ? void 0 : r.isParentGroup) !== !0) return n;
          var a = { suspended: !0, terminated: !0 };
          n.push(o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, a, t));
          var i = yield o("WAWebDBCommunity").getDefaultSubgroup(e);
          i != null &&
            (yield o("WAWebGroupsParticipantsApi").checkMyMembership(i)) &&
            n.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, a, t),
            );
          var l = yield u(r, i, e);
          return (n.push.apply(n, l), n);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = [];
      return (
        t.push(
          o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .remove(e.toString()),
        ),
        t.push(o("WAWebSchemaChat").getChatTable().remove(e.toString())),
        t
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = [],
            a = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          if (a == null || a.defaultSubgroup !== !0) return r;
          var i = a.parentGroup;
          return (
            i != null &&
              r.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  o("WAWebWidFactory").createWid(i),
                  { suspended: t },
                  n,
                ),
              ),
            r
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [],
            r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          if (r == null || r.isParentGroup !== !0) return n;
          var a = yield o("WAWebDBCommunity").getDefaultSubgroup(e);
          a != null &&
            (yield o("WAWebGroupsParticipantsApi").checkMyMembership(a)) &&
            n.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                a,
                { terminated: !0, parentGroup: void 0 },
                t,
              ),
            );
          var i = yield u(r, a, e);
          return (n.push.apply(n, i), n.push.apply(n, y(e)), n);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          if (!e) return t;
          var n = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          if (!n || n.isParentGroup !== !0) return t;
          var r = yield o("WAWebDBCommunity").getDefaultSubgroup(e),
            a = r == null ? [] : yield u(n, r, e);
          return (t.push.apply(t, a), t.push.apply(t, y(e)), t);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return (
            o("WAWebUserPrefsGeneral").removeUserSentMessageToChat(e),
            o("WAWebApiParticipantStore").setAdminshipCache(e.toString(), !1),
            n ? R(t != null ? o("WAWebWidFactory").createWid(t) : null) : []
          );
        })),
        k.apply(this, arguments)
      );
    }
    ((l.databaseUpdatesForSubgroupUnlink = s),
      (l.partitionSubgroups = f),
      (l.databaseUpdatesForIntegrityDeactivateCommunity = g),
      (l.maybeUpdateCommunitySuspendedStatus = C),
      (l.databaseUpdatesForDeactivateCommunity = v),
      (l.databaseUpdatesForExitedCommunity = R),
      (l.databaseUpdatesForSelfRemovedFromGroup = E));
  },
  98,
);
