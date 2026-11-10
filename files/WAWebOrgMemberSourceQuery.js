__d(
  "WAWebOrgMemberSourceQuery",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebOrgMemberPhoneNumber",
    "WAWebOrgMemberSearchMatch",
    "WAWebSearchUtils",
    "WAWebSimpleSearch",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 25;
    function u(e, t) {
      var n = t.cursor,
        r = n === void 0 ? 0 : n,
        o = t.excludeLids,
        a = t.limit,
        i = t.tagFilter,
        l = d(e, i).filter(function (e) {
          return o == null || !o.has(e.id);
        }),
        s = a == null ? l.length : r + a;
      return {
        nextCursor: s < l.length ? s : null,
        rows: l.slice(r, s),
        total: l.length,
      };
    }
    function c(e, t) {
      return d(e, t).map(function (e) {
        return e.id;
      });
    }
    function d(e, t) {
      var n = e.members.filter(function (n) {
          var r;
          return (
            (e.includeViewer || n.id !== e.meLid) &&
            (t == null || ((r = n.memberTag) != null ? r : "") === t)
          );
        }),
        r = o("WAWebOrgMemberSearchMatch").toOrgMemberQuery(e.query);
      if (e.matchedByServer || e.query.trim() === "") return n;
      var a =
          e.complete &&
          o("WAWebOrgMemberSearchMatch").isOrgMemberPhoneQuery(e.query),
        i = function (n) {
          return (
            (a &&
              o("WAWebOrgMemberSearchMatch").matchesOrgMemberPhoneNumber(
                o("WAWebOrgMemberPhoneNumber").getOrgMemberShownPhoneNumber(
                  n,
                  o("WAWebWidFactory").createUserLidOrThrow(n.id, "lid"),
                ),
                e.query,
              )) ||
            (e.mode === "roster" ? p(n, r) : m(n, e.query, r))
          );
        },
        l = n.filter(i);
      if (e.mode === "roster" || !_(e.orgName, r)) return l;
      var u = new Set(l);
      return [].concat(
        l,
        n
          .filter(function (e) {
            return !u.has(e);
          })
          .slice(0, s),
      );
    }
    function m(e, t, n) {
      if (
        o("WAWebOrgMemberSearchMatch").matchesOrgMemberUsername(e.username, n)
      )
        return !0;
      var r = f(e.id);
      return r == null
        ? o("WAWebOrgMemberSearchMatch").matchesOrgMember(e, n)
        : r.searchMatchPrefix(
            o("WAWebSearchUtils").normalizeString(t),
            null,
            null,
          ) != null;
    }
    function p(e, t) {
      var n;
      if (o("WAWebOrgMemberSearchMatch").matchesOrgMember(e, t)) return !0;
      var r = (n = f(e.id)) == null ? void 0 : n.name;
      return (
        t !== "" && r != null && o("WAWebSimpleSearch").simpleSearch(t, [r])
      );
    }
    function _(t, n) {
      return n.length >= e && o("WAWebSimpleSearch").simpleSearch(n, [t]);
    }
    function f(e) {
      var t = o("WAWebWidFactory").createUserLidOrThrow(e, "lid"),
        n = o("WAWebApiContact").getPnIfLidIsLatestMapping(t),
        r = o("WAWebContactCollection").ContactCollection.get(t),
        a =
          n == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(n);
      return r != null && o("WAWebFrontendContactGetters").getIsMyContact(r)
        ? r
        : a != null && o("WAWebFrontendContactGetters").getIsMyContact(a)
          ? a
          : r;
    }
    ((l.pageOrgMembers = u), (l.matchOrgMemberLids = c));
  },
  98,
);
