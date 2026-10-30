__d(
  "WAWebOrgAdminPeople",
  ["WAWebOrgAdminManagedRosterUtils"],
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
          o = t.find(function (e) {
            return e.lid === r;
          });
        if (o == null) return null;
        var a = n.filter(function (e) {
          return e.memberLID === o.lid;
        });
        return f(
          o,
          E(a, function (e) {
            return e.emailAddress;
          }),
          E(a, function (e) {
            return e.phoneNumber;
          }),
          E(a, function (e) {
            return e.secondaryMemberTag;
          }),
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
    function f(e, t, n, r) {
      return {
        emailAddress: t,
        key: c(e.lid),
        lid: e.lid,
        member: e,
        memberRole: e.role,
        memberTag: e.memberTag,
        name: e.displayName,
        phoneNumber: n != null ? n : e.phoneNumber,
        secondaryMemberTag: r,
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
        lid: (t = e.memberLID) != null ? t : null,
        member: null,
        memberRole: null,
        memberTag: e.memberTag,
        name: e.name,
        phoneNumber: e.phoneNumber,
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
    function E(e, t) {
      for (var n = e.length - 1; n >= 0; n--) {
        var r = t(e[n]);
        if (r != null) return r;
      }
      return null;
    }
    ((l.ORG_ADMIN_ROSTER_REMOVE_BATCH_LIMIT = e),
      (l.getOrgAdminMemberPersonKey = c),
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
