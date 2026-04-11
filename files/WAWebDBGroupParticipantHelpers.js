__d(
  "WAWebDBGroupParticipantHelpers",
  [
    "WAWebApiContact",
    "WAWebDBParticipantTypes",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebLeaveReasonType",
    "WAWebLidMigrationUtils",
    "WAWebPostSenderKeyExpiredMetric",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumExpiryReason",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = new Map(e.senderKey);
      n.forEach(function (e) {
        o("WAWebUserPrefsMeUser").isMeDevice(e) ||
          e.isHosted() ||
          r.set(e.toString(), !1);
      });
      var a = new Set(
          t.map(function (e) {
            var t = e.id;
            return t.toString();
          }),
        ),
        i = u(e.pastParticipants, a),
        l = [].concat(
          e.participants,
          a
            .values()
            .toArray()
            .map(function (e) {
              return e.toString();
            }),
        );
      return {
        groupId: e.groupId,
        senderKey: r,
        participants: l,
        pastParticipants: i,
        admins: e.admins,
        superAdmins: e.superAdmins,
        rotateKey: e.rotateKey,
        staleType: e.staleType,
      };
    }
    function s(e, t, n) {
      var r = new Map(e.senderKey);
      n.forEach(function (e) {
        o("WAWebUserPrefsMeUser").isMeDevice(e) ||
          e.isHosted() ||
          r.set(e.toString(), !1);
      });
      var a = new Set(),
        i = new Set();
      t.forEach(function (e) {
        var t = e.id,
          n = e.lid;
        (i.add(t.toString()), n != null && !t.isLid() && a.add(n.toString()));
      });
      var l = u(e.pastParticipants, i),
        s = [].concat(
          e.participants.filter(function (e) {
            return !a.has(e) && !i.has(e);
          }),
          i
            .values()
            .toArray()
            .map(function (e) {
              return e;
            }),
        );
      return {
        groupId: e.groupId,
        senderKey: r,
        participants: s,
        pastParticipants: l,
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
    function f(e, t, n, r) {
      var a = e.admins,
        i = t.map(function (e) {
          var t = e.id;
          return String(t);
        }),
        l = new Map(e.senderKey);
      n != null &&
        n.length > 0 &&
        n.forEach(function (e) {
          if (!o("WAWebUserPrefsMeUser").isMeDevice(e) && !e.isHosted()) {
            var t = String(e);
            l.set(t, !1);
          }
        });
      var s = e.participants;
      if (r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE) {
        a = e.admins.filter(function (e) {
          return !i.includes(e);
        });
        var u = o("WAWebGroupUtils").amIGroupAdmin(a);
        if (!u) {
          var c = t.reduce(function (e, t) {
            var n = t.id,
              r = t.lid;
            return r == null || n.isLid()
              ? e
              : e.set(n.toString(), r.toString());
          }, new Map());
          s = s.map(function (e) {
            var t;
            return (t = c.get(e)) != null ? t : e;
          });
        }
      } else if (
        r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE
      ) {
        var d = t.reduce(function (e, t) {
          var n = t.id,
            r = t.lid;
          return r == null || n.isLid() ? e : e.set(r.toString(), n.toString());
        }, new Map());
        ((a = e.admins.concat(i)),
          (s = s.map(function (e) {
            var t;
            return (t = d.get(e)) != null ? t : e;
          })));
      }
      return {
        groupId: e.groupId,
        senderKey: l,
        participants: s,
        pastParticipants: e.pastParticipants,
        admins: a,
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
        m = new Map();
      return (
        d.forEach(function (e) {
          if (!o("WAWebUserPrefsMeUser").isMeDevice(e) && !e.isHosted()) {
            var t = String(e);
            m.has(t) || m.set(t, !1);
          }
        }),
        {
          groupId: e,
          senderKey: m,
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
        a = t.participants,
        i = t.superAdmins,
        l = e.rotateKey,
        s = e.senderKey,
        u = new Map();
      if (
        (r.forEach(function (e) {
          if (!o("WAWebUserPrefsMeUser").isMeDevice(e) && !e.isHosted()) {
            var t = String(e),
              n = s == null ? void 0 : s.get(t);
            n == null ? u.set(t, !1) : (u.set(t, n), s == null || s.delete(t));
          }
        }),
        s != null)
      )
        for (var c of s.values()) l = l || c;
      return {
        groupId: e.groupId,
        senderKey: u,
        participants: a.map(function (e) {
          var t = e.id;
          return String(t);
        }),
        pastParticipants: e.pastParticipants,
        admins: n.map(String),
        superAdmins: i == null ? void 0 : i.map(String),
        rotateKey: l,
      };
    }
    function C(e, t) {
      var n = t.admins,
        r = t.deviceIds,
        a = t.participants,
        i = t.superAdmins,
        l = e.rotateKey,
        s = e.senderKey,
        u = new Map();
      if (
        (r.forEach(function (e) {
          if (!o("WAWebUserPrefsMeUser").isMeDevice(e) && !e.isHosted()) {
            var t = String(e),
              n = s == null ? void 0 : s.get(t);
            n == null ? u.set(t, !1) : (u.set(t, n), s == null || s.delete(t));
          }
        }),
        s != null)
      )
        for (var c of s.entries()) {
          var d = c[0],
            m = c[1];
          if (m && !o("WAWebWidFactory").createWid(d).isLid()) {
            l = !0;
            break;
          }
        }
      return {
        groupId: e.groupId,
        senderKey: u,
        participants: a.map(function (e) {
          var t = e.id;
          return String(t);
        }),
        pastParticipants: e.pastParticipants,
        admins: n.map(String),
        superAdmins: i == null ? void 0 : i.map(String),
        rotateKey: l,
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
