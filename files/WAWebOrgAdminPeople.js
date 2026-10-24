__d(
  "WAWebOrgAdminPeople",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e3,
      l = "member:",
      s = "roster:";
    function u(e) {
      return "" + l + e;
    }
    function c(e) {
      return "" + s + e;
    }
    function d(e, t, n) {
      if (e.startsWith(l)) {
        var r = e.slice(l.length),
          o = t.find(function (e) {
            return e.lid === r;
          });
        if (o == null) return null;
        var a = n.filter(function (e) {
          return e.memberLID === o.lid;
        });
        return _(
          o,
          L(a, function (e) {
            return e.emailAddress;
          }),
          L(a, function (e) {
            return e.phoneNumber;
          }),
          L(a, function (e) {
            return e.secondaryMemberTag;
          }),
        );
      }
      if (e.startsWith(s)) {
        var i = e.slice(s.length),
          u = n.find(function (e) {
            return e.id === i;
          });
        return u == null ? null : f(u);
      }
      return null;
    }
    function m(e, t) {
      var n = p(e, t);
      return {
        members: e.member == null ? [] : [e.member],
        rosterEntries: n == null ? [] : [n],
      };
    }
    function p(e, t) {
      return e.member == null
        ? t.find(function (t) {
            return c(t.id) === e.key;
          })
        : null;
    }
    function _(e, t, n, r) {
      return {
        emailAddress: t,
        key: u(e.lid),
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
    function f(e) {
      var t;
      return {
        emailAddress: e.emailAddress,
        key: c(e.id),
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
    function g(e, t) {
      var n = e.member;
      if (n != null) return { member: n, type: "member" };
      var r = p(e, t);
      return r == null ? null : { entry: r, type: "roster" };
    }
    function h(e, t, n) {
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
          o = S(e);
        if (o != null) {
          if (l.has(o)) return [];
          l.add(o);
        }
        var a = o == null ? R(e) : (t = r.get(o)) != null ? t : [];
        return [
          {
            memberLID: n && a.length > 0 ? null : o,
            rosterEntryIDs: a,
            row: e,
          },
        ];
      });
    }
    function y(e) {
      return S(e.row) != null;
    }
    function C(t) {
      return Array.from({ length: Math.ceil(t.length / e) }, function (n, r) {
        return t.slice(r * e, (r + 1) * e);
      });
    }
    function b(t) {
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
    function v(e, t) {
      var n = e.member;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            member: babelHelpers.extends({}, n, { role: t }),
            memberRole: t,
          });
    }
    function S(e) {
      return e.type === "member" ? e.member.lid : e.entry.memberLID;
    }
    function R(e) {
      return e.type === "roster" ? [e.entry.id] : [];
    }
    function L(e, t) {
      for (var n = e.length - 1; n >= 0; n--) {
        var r = t(e[n]);
        if (r != null) return r;
      }
      return null;
    }
    ((i.ORG_ADMIN_ROSTER_REMOVE_BATCH_LIMIT = e),
      (i.getOrgAdminMemberPersonKey = u),
      (i.getOrgAdminRosterPersonKey = c),
      (i.getOrgAdminPerson = d),
      (i.getOrgAdminPersonGroupCandidates = m),
      (i.getOrgAdminPersonRosterEntry = p),
      (i.getOrgAdminMemberPerson = _),
      (i.getOrgAdminRosterPerson = f),
      (i.getOrgAdminPersonRow = g),
      (i.getOrgAdminPeopleRemovals = h),
      (i.isOrgAdminPersonRemovalJoined = y),
      (i.getOrgAdminRosterEntryIDChunks = C),
      (i.getOrgAdminRosterRemovalBatches = b),
      (i.withOrgAdminPersonRole = v));
  },
  66,
);
