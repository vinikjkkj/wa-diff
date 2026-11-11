__d(
  "WAWebOrgAdminPeople",
  ["WAWebOrgAdminManagedRosterUtils", "WAWebOrgAdminPersonName"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = "member:",
      u = "roster:";
    function c(e) {
      return "" + s + e;
    }
    function d(e) {
      return "" + u + e;
    }
    function m(e, t, n) {
      if (e.startsWith(s)) {
        var r = e.slice(s.length),
          a = t.find(function (e) {
            return e.lid === r;
          });
        return a == null
          ? null
          : f(
              a,
              o("WAWebOrgAdminManagedRosterUtils")
                .getWAWebOrgAdminRosterDetailsByMemberLID(
                  n.filter(function (e) {
                    return e.memberLID === a.lid;
                  }),
                )
                .get(a.lid),
            );
      }
      if (e.startsWith(u)) {
        var i = e.slice(u.length),
          l = n.find(function (e) {
            return e.id === i;
          });
        return l == null ? null : g(l);
      }
      return null;
    }
    function p(e, t) {
      var n = _(e, t);
      return {
        members: e.member == null ? [] : [e.member],
        rosterEntries: n == null ? [] : [n],
      };
    }
    function _(e, t) {
      return e.member == null
        ? t.find(function (t) {
            return d(t.id) === e.key;
          })
        : null;
    }
    function f(e, t) {
      var n, r;
      return {
        emailAddress: t == null ? void 0 : t.emailAddress,
        key: c(e.lid),
        lastName: t == null ? void 0 : t.lastName,
        lid: e.lid,
        member: e,
        memberRole: e.role,
        memberTag:
          (n = t == null ? void 0 : t.memberTag) != null ? n : e.memberTag,
        name: (r = t == null ? void 0 : t.name) != null ? r : "",
        phoneNumber: o("WAWebOrgAdminPersonName").getOrgAdminPersonPhoneNumber(
          e,
          t,
        ),
        secondaryMemberTag: t == null ? void 0 : t.secondaryMemberTag,
        username: e.username,
      };
    }
    function g(e) {
      var t;
      return {
        emailAddress: e.emailAddress,
        inviteExpiry: e.inviteExpiry,
        inviteStatus: o(
          "WAWebOrgAdminManagedRosterUtils",
        ).getOrgAdminRosterInviteStatus(e),
        key: d(e.id),
        lastName: e.lastName,
        lid: (t = e.memberLID) != null ? t : null,
        member: null,
        memberRole: null,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phoneNumber,
        rosterStatus: e.status,
        secondaryMemberTag: e.secondaryMemberTag,
        username: null,
      };
    }
    function h(e, t) {
      var n = e.member;
      if (n != null) return { member: n, type: "member" };
      var r = _(e, t);
      return r == null ? null : { entry: r, type: "roster" };
    }
    function y(e, t, n) {
      var r = new Map();
      for (var o of t) {
        var a = o.memberLID;
        if (a != null) {
          var i;
          r.set(a, [].concat((i = r.get(a)) != null ? i : [], [o.id]));
        }
      }
      var l = new Set();
      return e.flatMap(function (e) {
        var t,
          o = R(e);
        if (o != null) {
          if (l.has(o)) return [];
          l.add(o);
        }
        var a = o == null ? L(e) : (t = r.get(o)) != null ? t : [];
        return [
          {
            memberLID: n && a.length > 0 ? null : o,
            rosterEntryIDs: a,
            row: e,
          },
        ];
      });
    }
    function C(e) {
      return R(e.row) != null;
    }
    function b(t) {
      return Array.from({ length: Math.ceil(t.length / e) }, function (n, r) {
        return t.slice(r * e, (r + 1) * e);
      });
    }
    function v(t) {
      var n = [],
        r = 0;
      for (var o of t) {
        var a = o.rosterEntryIDs.length;
        ((n.length === 0 || r + a > e) && (n.push([]), (r = 0)),
          n[n.length - 1].push(o),
          (r += a));
      }
      return n;
    }
    function S(e, t) {
      var n = e.member;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            member: babelHelpers.extends({}, n, { role: t }),
            memberRole: t,
          });
    }
    function R(e) {
      return e.type === "member" ? e.member.lid : e.entry.memberLID;
    }
    function L(e) {
      return e.type === "roster" ? [e.entry.id] : [];
    }
    ((l.getOrgAdminMemberPersonKey = c),
      (l.getOrgAdminRosterPersonKey = d),
      (l.getOrgAdminPerson = m),
      (l.getOrgAdminPersonGroupCandidates = p),
      (l.getOrgAdminPersonRosterEntry = _),
      (l.getOrgAdminMemberPerson = f),
      (l.getOrgAdminRosterPerson = g),
      (l.getOrgAdminPersonRow = h),
      (l.getOrgAdminPeopleRemovals = y),
      (l.isOrgAdminPersonRemovalJoined = C),
      (l.getOrgAdminRosterEntryIDChunks = b),
      (l.getOrgAdminRosterRemovalBatches = v),
      (l.withOrgAdminPersonRole = S));
  },
  98,
);
