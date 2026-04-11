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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            l ? (p = m) : (p = yield C(m, r)),
            o("WAWebDBGroupParticipant").replaceParticipants({
              group: t,
              participants: a,
              admins: s,
              superAdmins: u,
              deviceIds: p,
              groupInfo: n,
            })
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.group,
            n = e.isOffline,
            a = e.participants,
            i = e.reason,
            l = t.toString(),
            s = !1,
            u = [],
            c = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            d = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .get(l);
          if (d == null)
            throw r("err")("addParticipants: groupMetadataRecord is null");
          var m = !!d.defaultSubgroup,
            p = d.isLidAddressingMode === !0,
            _ = a.some(function (e) {
              return e.id.isLid();
            }),
            f = yield o("WAWebSchemaParticipant").getParticipantTable().get(l);
          if (
            (f != null &&
              ((u = f.admins.map(function (e) {
                return o("WAWebWidFactory").createWid(e);
              })),
              (s =
                o("WAWebGroupUtils").amIGroupAdmin(u) ||
                i === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE)),
            !(_ && !m && !p))
          ) {
            var g = a.map(function (e) {
              var t = e.id;
              return t;
            });
            m &&
              (g =
                i === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE
                  ? [].concat(u, g, [c])
                  : o("WAWebPnhCagUtils").augmentedCagGroupParticipantList(
                      s,
                      a,
                    ));
            var h = yield C(g, n);
            return o("WAWebDBGroupParticipant").updateDBParticipants(
              t,
              {
                action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.ADD,
                participants: a,
                deviceIds: h,
              },
              d,
              n,
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
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
    function m(e) {
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var d = yield o("WAWebSchemaParticipant")
              .getParticipantTable()
              .get(i);
            if (d != null) {
              var m = !!n.defaultSubgroup;
              m &&
                ((l = d.admins.map(function (e) {
                  return o("WAWebWidFactory").createWid(e);
                })),
                (c = yield C([].concat(l, [s]), r)));
            }
          }
          return o("WAWebDBGroupParticipant").updateDBParticipants(
            t,
            {
              action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
                .PROMOTE,
              participants: a,
              deviceIds: c,
            },
            n,
            r,
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = e.group,
        n = e.isOffline,
        r = e.participants;
      return o("WAWebDBGroupParticipant").updateCommunityParticipants(
        t,
        {
          action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
            .LINKED_GROUP_PROMOTE,
          participants: r,
        },
        n,
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.group,
            n = e.newSuperAdmin;
          return o("WAWebDBGroupParticipant").setDBGroupSuperAdmin(t, n);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = e.group,
        n = e.isOffline,
        r = e.participants;
      return o("WAWebDBGroupParticipant").updateCommunityParticipants(
        t,
        {
          action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION
            .LINKED_GROUP_DEMOTE,
          participants: r,
        },
        n,
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          n = yield o("WAWebAdvSyncDeviceListApi").syncAndGetDeviceList(e);
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
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return o("WAWebSchemaParticipant")
        .getParticipantTable()
        .bulkGet(
          e.map(function (e) {
            return e.toString();
          }),
        );
    }
    function S(e) {
      return o("WAWebSchemaParticipant")
        .getParticipantTable()
        .get(e.toString());
    }
    function R(e) {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return R(yield S(e));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield v(e)).map(R);
        })),
        I.apply(this, arguments)
      );
    }
    ((l.updateParticipants = e),
      (l.addParticipants = u),
      (l.removeParticipants = d),
      (l.demoteParticipants = m),
      (l.promoteParticipants = p),
      (l.promoteCommmunityParticipants = f),
      (l.setGroupSuperAdmin = g),
      (l.demoteCommmunityParticipants = y),
      (l.bulkGetParticipants = v),
      (l.getParticipants = S),
      (l.checkMyMembership = L),
      (l.bulkCheckMyMembership = k));
  },
  98,
);
