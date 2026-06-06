__d(
  "WAWebUpdateDbForCommunityAction",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return u(e, t, !1);
    }
    async function s(t, n, r) {
      var a = await Promise.all([
          o("WAWebDBCommunity")
            .getJoinedSubgroupsMetadata(o("WAWebWidFactory").createWid(t.id))
            .then(function (e) {
              return e.filter(function (e) {
                return !o("WAWebWidFactory").createWid(e.id).equals(n);
              });
            }),
          o("WAWebDBCommunity").getUnjoinedSubgroupsMetadata(
            o("WAWebWidFactory").createWid(t.id),
          ),
        ]),
        i = a[0],
        l = a[1],
        s = i.concat(l).map(function (e) {
          var t = e.id,
            n = e.subject;
          return { id: o("WAWebWidFactory").createWid(t), subject: n };
        });
      return e(r, s);
    }
    async function u(e, t, n) {
      t.forEach(function (t) {
        ((t.parentGroupId = n ? e : void 0),
          (t.generalSubgroup = n ? t.generalSubgroup : void 0),
          (t.hiddenSubgroup = n ? t.hiddenSubgroup : void 0));
      });
      var r = d(
          t,
          await c(
            t.map(function (e) {
              return e.id;
            }),
          ),
        ),
        a = r.joinedSubgroups,
        i = r.unjoinedSubgroups,
        l = a.map(function (t) {
          return o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t.id, {
            parentGroup: n ? e.toString() : void 0,
            generalSubgroup: n ? t.generalSubgroup : void 0,
            hiddenSubgroup: n ? t.hiddenSubgroup : void 0,
          });
        }),
        s = o("WAWebGroupUnjoinedSubgroupJob").updateUnjoinedSubgroupsJob(
          i,
          e,
          n,
        );
      return [].concat(l, [s]);
    }
    async function c(e) {
      var t = new Map(
          (await o("WAWebGroupsParticipantsApi").bulkGetParticipants(e))
            .filter(Boolean)
            .map(function (e) {
              return [e.groupId, e.participants];
            }),
        ),
        n = o("WAWebUserPrefsMeUser").getMeUser().toString();
      return function (e) {
        var r, o;
        return (r =
          (o = t.get(e.toString())) == null ? void 0 : o.includes(n)) != null
          ? r
          : !1;
      };
    }
    function d(e, t) {
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
    async function m(e, t) {
      var n = [],
        r = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
      if ((r == null ? void 0 : r.isParentGroup) !== !0) return n;
      var a = { suspended: !0, terminated: !0 };
      n.push(o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, a, t));
      var i = await o("WAWebDBCommunity").getDefaultSubgroup(e);
      i != null &&
        (await o("WAWebGroupsParticipantsApi").checkMyMembership(i)) &&
        n.push(o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, a, t));
      var l = await s(r, i, e);
      return (n.push.apply(n, l), n);
    }
    function p(e) {
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
    async function _(e, t, n) {
      var r = [],
        a = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
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
    }
    async function f(e, t) {
      var n = [],
        r = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
      if (r == null || r.isParentGroup !== !0) return n;
      var a = await o("WAWebDBCommunity").getDefaultSubgroup(e);
      a != null &&
        (await o("WAWebGroupsParticipantsApi").checkMyMembership(a)) &&
        n.push(
          o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
            a,
            { terminated: !0, parentGroup: void 0 },
            t,
          ),
        );
      var i = await s(r, a, e);
      return (n.push.apply(n, i), n.push.apply(n, p(e)), n);
    }
    async function g(e) {
      var t = [];
      if (!e) return t;
      var n = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
      if (!n || n.isParentGroup !== !0) return t;
      var r = await o("WAWebDBCommunity").getDefaultSubgroup(e),
        a = r == null ? [] : await s(n, r, e);
      return (t.push.apply(t, a), t.push.apply(t, p(e)), t);
    }
    async function h(e, t, n) {
      return (
        o("WAWebUserPrefsGeneral").removeUserSentMessageToChat(e),
        o("WAWebApiParticipantStore").setAdminshipCache(e.toString(), !1),
        n ? g(t != null ? o("WAWebWidFactory").createWid(t) : null) : []
      );
    }
    ((l.databaseUpdatesForSubgroupUnlink = e),
      (l.partitionSubgroups = d),
      (l.databaseUpdatesForIntegrityDeactivateCommunity = m),
      (l.maybeUpdateCommunitySuspendedStatus = _),
      (l.databaseUpdatesForDeactivateCommunity = f),
      (l.databaseUpdatesForExitedCommunity = g),
      (l.databaseUpdatesForSelfRemovedFromGroup = h));
  },
  98,
);
