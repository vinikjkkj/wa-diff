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
        a = t.listAll,
        i = a === void 0 ? !1 : a,
        l = t.shownLids,
        s = new Set(l),
        u = _(i, r);
      return e.flatMap(function (e) {
        if (e.status === "hidden") return [];
        var t = p(e, s, o);
        if (
          (n &&
            t.forEach(function (e) {
              var t = e.lid;
              return s.add(t);
            }),
          r && t.length === 0 && !f(e.status))
        )
          return [];
        var a = t.slice(0, u);
        return [
          babelHelpers.extends({}, e, {
            hasMore:
              r || e.status === "too_large" || e.members.length > a.length,
            rows: a,
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
    function p(e, t, n) {
      var r = [];
      return (
        e.members.forEach(function (a) {
          if (!t.has(a.id)) {
            var i = o("WAWebWidFactory").createUserLidOrThrow(a.id, "lid"),
              l = o("WAWebContactCollection").ContactCollection.get(i);
            if (!g(i, l)) {
              var s = o("WAWebPersonRowCache").getPersonRow(e.orgId, a.id, a);
              (n == null || n(s)) && r.push(s);
            }
          }
        }),
        r
      );
    }
    function _(t, n) {
      return t ? 1 / 0 : n ? s : e;
    }
    function f(e) {
      return e === "loading" || e === "failed";
    }
    function g(e, t) {
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
