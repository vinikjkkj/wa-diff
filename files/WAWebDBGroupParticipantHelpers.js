__d(
  "WAWebDBGroupParticipantHelpers",
  [
    "WAWebApiContact",
    "WAWebDBParticipantTypes",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebLeaveReasonType",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebPostSenderKeyExpiredMetric",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumExpiryReason",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = new Map(e.senderKey),
        i =
          o("WAWebMessagingGatingUtils").isGroupSimpleSignalEnabled() &&
          r === !0;
      n.forEach(function (e) {
        o("WAWebUserPrefsMeUser").isMeDevice(e) ||
          (e.isHosted() && !i) ||
          a.set(e.toString(), !1);
      });
      var l = new Set(
          t.map(function (e) {
            var t = e.id;
            return t.toString();
          }),
        ),
        s = u(e.pastParticipants, l),
        c = [].concat(
          e.participants,
          l
            .values()
            .toArray()
            .map(function (e) {
              return e.toString();
            }),
        );
      return {
        groupId: e.groupId,
        senderKey: a,
        participants: c,
        pastParticipants: s,
        admins: e.admins,
        superAdmins: e.superAdmins,
        rotateKey: e.rotateKey,
        staleType: e.staleType,
      };
    }
    function s(e, t, n, r) {
      var a = new Map(e.senderKey),
        i =
          o("WAWebMessagingGatingUtils").isGroupSimpleSignalEnabled() &&
          r === !0;
      n.forEach(function (e) {
        o("WAWebUserPrefsMeUser").isMeDevice(e) ||
          (e.isHosted() && !i) ||
          a.set(e.toString(), !1);
      });
      var l = new Set(),
        s = new Set();
      t.forEach(function (e) {
        var t = e.id,
          n = e.lid;
        (s.add(t.toString()), n != null && !t.isLid() && l.add(n.toString()));
      });
      var c = u(e.pastParticipants, s),
        d = [].concat(
          e.participants.filter(function (e) {
            return !l.has(e) && !s.has(e);
          }),
          s
            .values()
            .toArray()
            .map(function (e) {
              return e;
            }),
        );
      return {
        groupId: e.groupId,
        senderKey: a,
        participants: d,
        pastParticipants: c,
        admins: e.admins,
        superAdmins: e.superAdmins,
        rotateKey: e.rotateKey,
        staleType: e.staleType,
      };
    }
    function u(e, t) {
      var n;
      return (n =
        e == null
          ? void 0
          : e.filter(function (e) {
              var n = o("WAWebWidFactory").createUserWidOrThrow(e.jid),
                r = o("WAWebApiContact").getAlternateUserWid(n),
                a = t.has(e.jid),
                i = r ? t.has(r.toString()) : !1;
              return !a && !i;
            })) != null
        ? n
        : [];
    }
    function c(e, t) {
      return {
        groupId: e.groupId,
        senderKey: e.senderKey,
        participants: e.participants,
        pastParticipants: t.map(function (e) {
          var t = e.id,
            n = e.leaveReason,
            r = e.leaveTs;
          return { jid: t.toString(), leaveTs: r, leaveReason: n };
        }),
        admins: e.admins,
        superAdmins: e.superAdmins,
        rotateKey: e.rotateKey,
        staleType: e.staleType,
      };
    }
    function d(e, t, n, r, a) {
      var i,
        l = new Map(e.senderKey),
        s = e.rotateKey;
      (l.forEach(function (e, n) {
        var r = o("WAWebWidFactory").createWid(n),
          a = t.some(function (e) {
            var t = o("WAWebLidMigrationUtils").toCommonAddressingMode(e.id, r),
              n = t[0],
              a = t[1];
            if (n != null && a != null)
              return n.isSameAccountAndAddressingMode(a);
          });
        a && ((s = s || e), l.delete(n));
      }),
        s &&
          l.forEach(function (e, t) {
            l.set(t, !1);
          }));
      var u = p(t, e.pastParticipants, n, r);
      !e.rotateKey &&
        s &&
        o("WAWebPostSenderKeyExpiredMetric").postSenderKeyExpiredMetric({
          chatId: e.groupId,
          deviceCount: e.senderKey.size,
          expiryReason: o("WAWebWamEnumExpiryReason").EXPIRY_REASON.USER_LEAVE,
        });
      var c = new Set(
          t.map(function (e) {
            var t = e.id;
            return String(t);
          }),
        ),
        d = e.admins.filter(function (e) {
          return !c.has(e);
        }),
        m =
          (i = e.superAdmins) == null
            ? void 0
            : i.filter(function (e) {
                return !c.has(e);
              }),
        _ = e.participants.filter(function (e) {
          return !c.has(e);
        });
      return {
        groupId: e.groupId,
        senderKey: l,
        participants: _,
        pastParticipants: u,
        admins: d,
        superAdmins: m,
        rotateKey: s,
        staleType: e.staleType,
      };
    }
    function m(e, t, n, a, i) {
      var l,
        s = new Map(e.senderKey),
        u = e.rotateKey,
        c = r("compactMap")(t, function (e) {
          return e.id.isLid() ? e.id : e.lid;
        });
      (s.forEach(function (e, n) {
        var r = o("WAWebWidFactory").createWid(n);
        if (
          r.isLid() &&
          i !== o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE
        ) {
          var a = c.some(function (e) {
            return e.isSameAccountAndAddressingMode(r);
          });
          a && s.delete(n);
          return;
        }
        if (
          !r.isLid() &&
          i === o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE
        ) {
          s.delete(n);
          return;
        }
        var l = t.some(function (e) {
          return e.id.user === r.user && e.id.server === r.server;
        });
        l && ((u = u || e), s.delete(n));
      }),
        u &&
          s.forEach(function (e, t) {
            var n = o("WAWebWidFactory").createWid(t);
            n.isLid() || s.set(t, !1);
          }));
      var d = p(t, e.pastParticipants, n, a);
      !e.rotateKey &&
        u &&
        o("WAWebPostSenderKeyExpiredMetric").postSenderKeyExpiredMetric({
          chatId: e.groupId,
          deviceCount: e.senderKey.size,
          expiryReason: o("WAWebWamEnumExpiryReason").EXPIRY_REASON.USER_LEAVE,
        });
      var m = new Set(
          t.map(function (e) {
            var t = e.id;
            return String(t);
          }),
        ),
        _ = e.admins.filter(function (e) {
          return !m.has(e);
        }),
        f =
          (l = e.superAdmins) == null
            ? void 0
            : l.filter(function (e) {
                return !m.has(e);
              }),
        g = e.participants;
      if (i === o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
        var h = t.reduce(function (e, t) {
          var n = t.id,
            r = t.lid;
          return r == null || n.isLid() ? e : e.set(n.toString(), r.toString());
        }, new Map());
        g = g.map(function (e) {
          var t;
          return (t = h.get(e)) != null ? t : e;
        });
      } else
        g = g.filter(function (e) {
          return !m.has(e);
        });
      return {
        groupId: e.groupId,
        senderKey: s,
        participants: g,
        pastParticipants: d,
        admins: _,
        superAdmins: f,
        rotateKey: u,
        staleType: e.staleType,
      };
    }
    function p(e, t, n, r) {
      var a = new Set(
          e.map(function (e) {
            var t = e.id;
            return String(t);
          }),
        ),
        i = e.map(function (e) {
          return {
            jid: e.id.toString(),
            leaveTs: n,
            leaveReason: e.id.equals(r)
              ? o("WAWebLeaveReasonType").LeaveReason.Left
              : o("WAWebLeaveReasonType").LeaveReason.Removed,
          };
        });
      return (
        t == null ||
          t.forEach(function (e) {
            var t = o("WAWebWidFactory").createUserWidOrThrow(e.jid),
              n = o("WAWebApiContact").getAlternateUserWid(t),
              r = a.has(e.jid),
              l = n ? a.has(n == null ? void 0 : n.toString()) : !1;
            (!r && !l && i.push(e),
              r || a.add(e.jid),
              n && !l && a.add(n.toString()));
          }),
        i
      );
    }
    function _(e, t, n, r) {
      var a = e.admins,
        i = t.map(function (e) {
          var t = e.id;
          return String(t);
        });
      if (r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE)
        a = e.admins.filter(function (e) {
          return !i.includes(e);
        });
      else if (
        r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE
      ) {
        var l = new Set(e.admins);
        (i.forEach(function (e) {
          return l.add(e);
        }),
          (a = Array.from(l)));
      }
      return {
        groupId: e.groupId,
        senderKey: e.senderKey,
        participants: e.participants,
        pastParticipants: e.pastParticipants,
        admins: a,
        superAdmins: e.superAdmins,
        rotateKey: e.rotateKey,
        staleType: e.staleType,
      };
    }
    function f(e, t, n, r, a) {
      var i = e.admins,
        l = t.map(function (e) {
          var t = e.id;
          return String(t);
        }),
        s = new Map(e.senderKey),
        u =
          o("WAWebMessagingGatingUtils").isGroupSimpleSignalEnabled() &&
          a === !0;
      n != null &&
        n.length > 0 &&
        n.forEach(function (e) {
          if (
            !o("WAWebUserPrefsMeUser").isMeDevice(e) &&
            !(e.isHosted() && !u)
          ) {
            var t = String(e);
            s.set(t, !1);
          }
        });
      var c = e.participants;
      if (r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE) {
        i = e.admins.filter(function (e) {
          return !l.includes(e);
        });
        var d = o("WAWebGroupUtils").amIGroupAdmin(i);
        if (!d) {
          var m = t.reduce(function (e, t) {
            var n = t.id,
              r = t.lid;
            return r == null || n.isLid()
              ? e
              : e.set(n.toString(), r.toString());
          }, new Map());
          c = c.map(function (e) {
            var t;
            return (t = m.get(e)) != null ? t : e;
          });
        }
      } else if (
        r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE
      ) {
        var p = t.reduce(function (e, t) {
          var n = t.id,
            r = t.lid;
          return r == null || n.isLid() ? e : e.set(r.toString(), n.toString());
        }, new Map());
        ((i = e.admins.concat(l)),
          (c = c.map(function (e) {
            var t;
            return (t = p.get(e)) != null ? t : e;
          })));
      }
      return {
        groupId: e.groupId,
        senderKey: s,
        participants: c,
        pastParticipants: e.pastParticipants,
        admins: i,
        superAdmins: e.superAdmins,
        rotateKey: e.rotateKey,
        staleType: e.staleType,
      };
    }
    function g(e, t, n) {
      var r = e.admins,
        a = e.participants,
        i = t.map(function (e) {
          var t = e.id;
          return String(t);
        });
      if (
        n ===
        o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE
      )
        ((r = e.admins.filter(function (e) {
          return !i.includes(e);
        })),
          (a = r));
      else if (
        n ===
        o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE
      ) {
        var l = i.filter(function (t) {
          return !e.admins.includes(t);
        });
        ((r = e.admins.concat(l)), (a = r));
      }
      return {
        groupId: e.groupId,
        senderKey: e.senderKey,
        participants: a,
        pastParticipants: e.pastParticipants,
        admins: r,
        superAdmins: e.superAdmins,
        rotateKey: e.rotateKey,
        staleType: e.staleType,
      };
    }
    function h(e, t) {
      var n,
        r = t.participants,
        a = r === void 0 ? [] : r,
        i = t.pastParticipants,
        l = i === void 0 ? [] : i,
        s = t.admins,
        u = s === void 0 ? [] : s,
        c = t.deviceIds,
        d = c === void 0 ? [] : c,
        m = t.isCapiGroup,
        p = new Map(),
        _ =
          o("WAWebMessagingGatingUtils").isGroupSimpleSignalEnabled() &&
          m === !0;
      return (
        d.forEach(function (e) {
          if (
            !o("WAWebUserPrefsMeUser").isMeDevice(e) &&
            !(e.isHosted() && !_)
          ) {
            var t = String(e);
            p.has(t) || p.set(t, !1);
          }
        }),
        {
          groupId: e,
          senderKey: p,
          participants: a.map(function (e) {
            var t = e.id;
            return String(t);
          }),
          pastParticipants: l.map(function (e) {
            var t = e.id,
              n = e.leaveReason,
              r = e.leaveTs;
            return { jid: t.toString(), leaveTs: r, leaveReason: n };
          }),
          admins: u.map(String),
          superAdmins: (n = t.superAdmins) == null ? void 0 : n.map(String),
          rotateKey: !1,
          staleType:
            a.length === 0
              ? o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT
              : void 0,
        }
      );
    }
    function y(e, t) {
      var n = t.admins,
        r = t.deviceIds,
        a = t.isCapiGroup,
        i = t.participants,
        l = t.superAdmins,
        s = e.rotateKey,
        u =
          o("WAWebMessagingGatingUtils").isGroupSimpleSignalEnabled() &&
          a === !0,
        c = e.senderKey,
        d = new Map();
      if (
        (r.forEach(function (e) {
          if (
            !o("WAWebUserPrefsMeUser").isMeDevice(e) &&
            !(e.isHosted() && !u)
          ) {
            var t = String(e),
              n = c == null ? void 0 : c.get(t);
            n == null ? d.set(t, !1) : (d.set(t, n), c == null || c.delete(t));
          }
        }),
        c != null)
      )
        for (var m of c.values()) s = s || m;
      return {
        groupId: e.groupId,
        senderKey: d,
        participants: i.map(function (e) {
          var t = e.id;
          return String(t);
        }),
        pastParticipants: e.pastParticipants,
        admins: n.map(String),
        superAdmins: l == null ? void 0 : l.map(String),
        rotateKey: s,
      };
    }
    function C(e, t) {
      var n = t.admins,
        r = t.deviceIds,
        a = t.isCapiGroup,
        i = t.participants,
        l = t.superAdmins,
        s = e.rotateKey,
        u =
          o("WAWebMessagingGatingUtils").isGroupSimpleSignalEnabled() &&
          a === !0,
        c = e.senderKey,
        d = new Map();
      if (
        (r.forEach(function (e) {
          if (
            !o("WAWebUserPrefsMeUser").isMeDevice(e) &&
            !(e.isHosted() && !u)
          ) {
            var t = String(e),
              n = c == null ? void 0 : c.get(t);
            n == null ? d.set(t, !1) : (d.set(t, n), c == null || c.delete(t));
          }
        }),
        c != null)
      )
        for (var m of c.entries()) {
          var p = m[0],
            _ = m[1];
          if (_ && !o("WAWebWidFactory").createWid(p).isLid()) {
            s = !0;
            break;
          }
        }
      return {
        groupId: e.groupId,
        senderKey: d,
        participants: i.map(function (e) {
          var t = e.id;
          return String(t);
        }),
        pastParticipants: e.pastParticipants,
        admins: n.map(String),
        superAdmins: l == null ? void 0 : l.map(String),
        rotateKey: s,
      };
    }
    function b(e, t, n) {
      var r,
        a = String(t),
        i = String(n),
        l = new Map(e.senderKey),
        s = e.participants
          .filter(function (e) {
            return e !== a;
          })
          .concat(i);
      (Array.from(l.keys()).forEach(function (e) {
        var n = o("WAWebWidFactory").createWid(e).user;
        t.user === n ? l.delete(e) : l.set(e, !1);
      }),
        l.set(i, !1));
      var u = e.admins.map(function (e) {
          return e === a ? i : e;
        }),
        c =
          (r = e.superAdmins) == null
            ? void 0
            : r.map(function (e) {
                return e === a ? i : e;
              });
      return babelHelpers.extends({}, e, {
        participants: s,
        senderKey: l,
        admins: u,
        superAdmins: c,
        rotateKey: !0,
      });
    }
    ((l.addParticipantInfo = e),
      (l.addParticipantInfoCAG = s),
      (l.addPastParticipantInfo = c),
      (l.removeParticipantInfo = d),
      (l.removeParticipantInfoCAG = m),
      (l.changeParticipantAdminInfo = _),
      (l.changeParticipantAdminInfoCAG = f),
      (l.changeCommunityParticipantAdminInfo = g),
      (l.createParticipantInfo = h),
      (l.replaceParticipantInfo = y),
      (l.replaceParticipantInfoCAG = C),
      (l.modifyParticipantInfo = b));
  },
  98,
);
