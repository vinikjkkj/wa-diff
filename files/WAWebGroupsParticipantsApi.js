__d(
  "WAWebGroupsParticipantsApi",
  [
    "WAWebAdvSyncDeviceListApi",
    "WAWebDBGroupParticipant",
    "WAWebDBParticipantTypes",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebOfflineDeviceCache",
    "WAWebPnhCagUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.group,
        n = e.groupInfo,
        r = e.isOffline,
        a = e.participants,
        i = e.skipDeviceSync,
        l = i === void 0 ? !1 : i,
        s = [],
        u = [];
      a.forEach(function (e) {
        (e.isAdmin && s.push(e.id), e.isSuperAdmin && u.push(e.id));
      });
      var c = o("WAWebGroupUtils").amIGroupAdmin(s),
        d = !1;
      n != null && (d = !!n.defaultSubgroup);
      var m = d
          ? o("WAWebPnhCagUtils").augmentedCagGroupParticipantList(c, a)
          : a.map(function (e) {
              var t = e.id;
              return t;
            }),
        p;
      return (
        l ? (p = m) : (p = await f(m, r)),
        o("WAWebDBGroupParticipant").replaceParticipants({
          group: t,
          participants: a,
          admins: s,
          superAdmins: u,
          deviceIds: p,
          groupInfo: n,
        })
      );
    }
    async function s(e) {
      var t = e.group,
        n = e.isOffline,
        a = e.participants,
        i = e.reason,
        l = t.toString(),
        s = !1,
        u = [],
        c = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        d = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(l);
      if (d == null)
        throw r("err")("addParticipants: groupMetadataRecord is null");
      var m = !!d.defaultSubgroup,
        p = d.isLidAddressingMode === !0,
        _ = a.some(function (e) {
          return e.id.isLid();
        }),
        g = await o("WAWebSchemaParticipant").getParticipantTable().get(l);
      if (
        (g != null &&
          ((u = g.admins.map(function (e) {
            return o("WAWebWidFactory").createWid(e);
          })),
          (s =
            o("WAWebGroupUtils").amIGroupAdmin(u) ||
            i === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE)),
        !(_ && !m && !p))
      ) {
        var h = a.map(function (e) {
          var t = e.id;
          return t;
        });
        m &&
          (h =
            i === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE
              ? [].concat(u, h, [c])
              : o("WAWebPnhCagUtils").augmentedCagGroupParticipantList(s, a));
        var y = await f(h, n);
        return o("WAWebDBGroupParticipant").updateDBParticipants(
          t,
          {
            action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.ADD,
            participants: a,
            deviceIds: y,
          },
          d,
          n,
        );
      }
    }
    function u(e) {
      var t = e.author,
        n = e.group,
        r = e.groupMetadata,
        a = e.isOffline,
        i = e.participants,
        l = e.reason,
        s = e.timestamp;
      return o("WAWebDBGroupParticipant").updateDBParticipants(
        n,
        {
          action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.REMOVE,
          participants: i,
          timestamp: s,
          author: t,
          reason: l,
        },
        r,
        a,
      );
    }
    function c(e) {
      var t = e.group,
        n = e.groupMetadata,
        r = e.isOffline,
        a = e.participants;
      return o("WAWebDBGroupParticipant").updateDBParticipants(
        t,
        {
          action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE,
          participants: a,
        },
        n,
        r,
      );
    }
    async function d(e) {
      var t = e.group,
        n = e.groupMetadata,
        r = e.isOffline,
        a = e.participants,
        i = t.toString(),
        l = [],
        s = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        u = a.some(function (e) {
          return s.equals(e.id);
        }),
        c;
      if (u) {
        var d = await o("WAWebSchemaParticipant").getParticipantTable().get(i);
        if (d != null) {
          var m = !!n.defaultSubgroup;
          m &&
            ((l = d.admins.map(function (e) {
              return o("WAWebWidFactory").createWid(e);
            })),
            (c = await f([].concat(l, [s]), r)));
        }
      }
      return o("WAWebDBGroupParticipant").updateDBParticipants(
        t,
        {
          action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE,
          participants: a,
          deviceIds: c,
        },
        n,
        r,
      );
    }
    function m(e) {
      var t = e.group,
        n = e.isOffline,
        r = e.participants;
      return o("WAWebDBGroupParticipant").updateCommunityParticipants({
        data: {
          action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
            .LINKED_GROUP_PROMOTE,
          participants: r,
        },
        group: t,
        isOffline: n,
      });
    }
    async function p(e) {
      var t = e.group,
        n = e.newSuperAdmin;
      return o("WAWebDBGroupParticipant").setDBGroupSuperAdmin(t, n);
    }
    function _(e) {
      var t = e.group,
        n = e.isOffline,
        r = e.participants;
      return o("WAWebDBGroupParticipant").updateCommunityParticipants({
        data: {
          action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
            .LINKED_GROUP_DEMOTE,
          participants: r,
        },
        group: t,
        isOffline: n,
      });
    }
    async function f(e, t) {
      t === void 0 && (t = !1);
      var n = [];
      if (t === !0)
        return (
          e.forEach(function (e) {
            o(
              "WAWebOfflineDeviceCache",
            ).OfflinePendingDeviceCache.addOfflinePendingDevice(String(e));
          }),
          e
        );
      n = await o("WAWebAdvSyncDeviceListApi").syncAndGetDeviceList(e);
      var r = [];
      return (
        n.forEach(function (t, n) {
          if (!t) r.push(e[n]);
          else {
            var a = t.devices,
              i = t.id;
            r = r.concat(
              a.map(function (e) {
                return o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                  i,
                  e.id,
                  e.isHosted,
                );
              }),
            );
          }
        }),
        r
      );
    }
    function g(e) {
      return o("WAWebSchemaParticipant")
        .getParticipantTable()
        .bulkGet(
          e.map(function (e) {
            return e.toString();
          }),
        );
    }
    function h(e) {
      return o("WAWebSchemaParticipant")
        .getParticipantTable()
        .get(e.toString());
    }
    function y(e) {
      var t = e == null ? void 0 : e.participants;
      return (
        t != null &&
        t.some(function (e) {
          return o("WAWebUserPrefsMeUser").isMeAccount(
            o("WAWebWidFactory").createWid(e),
          );
        })
      );
    }
    async function C(e) {
      return y(await h(e));
    }
    async function b(e) {
      return (await g(e)).map(y);
    }
    ((l.updateParticipants = e),
      (l.addParticipants = s),
      (l.removeParticipants = u),
      (l.demoteParticipants = c),
      (l.promoteParticipants = d),
      (l.promoteCommmunityParticipants = m),
      (l.setGroupSuperAdmin = p),
      (l.demoteCommmunityParticipants = _),
      (l.bulkGetParticipants = g),
      (l.getParticipants = h),
      (l.checkMyMembershipForParticipantRecord = y),
      (l.checkMyMembership = C),
      (l.bulkCheckMyMembership = b));
  },
  98,
);
