__d(
  "WAWebPeopleSections",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebPersonRowCache",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 5;
    function u(e, t) {
      var n = t.firstNetworkWins,
        r = t.hasQuery,
        o = t.isAllowed,
        a = t.isRosterAllowed,
        i = t.listAll,
        l = i === void 0 ? !1 : i,
        s = t.shownLids,
        u = new Set(s),
        c = g(l, r);
      return e.flatMap(function (e) {
        if (e.status === "hidden") return [];
        var t = p(e, a);
        if (t.count === 0) return [];
        var i = f(babelHelpers.extends({}, e, { members: t.members }), u, o);
        if (
          (n &&
            i.forEach(function (e) {
              var t = e.lid;
              return u.add(t);
            }),
          r && i.length === 0 && !h(e.status))
        )
          return [];
        var l = i.slice(0, c);
        return [
          babelHelpers.extends({}, e, {
            hasMore: _(e, t.count, l.length, r),
            rows: l,
          }),
        ];
      });
    }
    function c(e) {
      return e.flatMap(function (e) {
        var t = e.hasMore,
          n = e.orgId,
          r = e.orgName,
          o = e.retry,
          a = e.status,
          i =
            a === "loading" || a === "failed"
              ? [
                  {
                    key: "network-status:" + n,
                    kind: "status",
                    orgId: n,
                    retry: o,
                    status: a,
                  },
                ]
              : [];
        return [
          {
            hasMore: t,
            key: "network-header:" + n,
            kind: "header",
            orgId: n,
            orgName: r,
          },
        ].concat(
          i,
          e.rows.map(function (e) {
            return { kind: "person", row: e };
          }),
        );
      });
    }
    function d(e, t) {
      var n,
        r = t.wid,
        a =
          r != null && r.isRegularUser()
            ? (n = o("WAWebLidMigrationUtils").toUserLid(r)) == null
              ? void 0
              : n.user
            : null;
      return e.some(function (e) {
        var n;
        return (
          e.lid === a ||
          (t.username != null &&
            o("WAWebUsernameTypes").serializeMaybeUsername(
              (n = e.member) == null ? void 0 : n.username,
            ) === t.username)
        );
      });
    }
    function m(e, t) {
      t === void 0 && (t = []);
      var n = new Set();
      return (
        e.forEach(function (e) {
          var t = e.id.isRegularUser()
            ? o("WAWebLidMigrationUtils").toUserLid(e.id)
            : null;
          t != null && n.add(t.user);
        }),
        t.forEach(function (e) {
          e.accountLid != null && n.add(e.accountLid.user);
        }),
        n
      );
    }
    function p(e, t) {
      var n = function (r) {
          return t == null
            ? r
            : r.filter(function (n) {
                return t(
                  o("WAWebPersonRowCache").getPersonRow(e.orgId, n.id, n),
                );
              });
        },
        r = e.rosterMembers;
      return {
        members: n(e.members),
        count:
          e.status === "ready" && t != null && r != null ? n(r).length : null,
      };
    }
    function _(e, t, n, r) {
      return (
        r || e.status === "too_large" || (t != null ? t : e.members.length) > n
      );
    }
    function f(e, t, n) {
      var r = [];
      return (
        e.members.forEach(function (a) {
          if (!t.has(a.id)) {
            var i = o("WAWebWidFactory").createUserLidOrThrow(a.id, "lid"),
              l = o("WAWebContactCollection").ContactCollection.get(i);
            if (!y(i, l)) {
              var s = o("WAWebPersonRowCache").getPersonRow(e.orgId, a.id, a);
              (n == null || n(s)) && r.push(s);
            }
          }
        }),
        r
      );
    }
    function g(t, n) {
      return t ? 1 / 0 : n ? s : e;
    }
    function h(e) {
      return e === "loading" || e === "failed";
    }
    function y(e, t) {
      if (t != null && o("WAWebFrontendContactGetters").getIsMyContact(t))
        return !0;
      var n = o("WAWebApiContact").getPnIfLidIsLatestMapping(e),
        r =
          n == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(n);
      return r != null && o("WAWebFrontendContactGetters").getIsMyContact(r);
    }
    ((l.buildPeopleSections = u),
      (l.toPeopleRows = c),
      (l.isListedPerson = d),
      (l.getShownPersonLids = m));
  },
  98,
);
