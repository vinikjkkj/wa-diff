__d(
  "WAWebOrgMemberSearchRows",
  [
    "WALogger",
    "WAWebChatlistTypes",
    "WAWebContactCollection",
    "WAWebNonContactPushNameSearchModel",
    "WAWebOrgContactCollection",
    "WAWebOrgContactModel",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchLoadingRowLayout",
    "WAWebSchemaOrg",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Object.freeze([]),
      u = new Map();
    function c(e) {
      if (e.length === 0) return ((u = new Map()), s);
      var t = new Map(),
        n = e.map(function (e) {
          return {
            failure: e.failure,
            loading: e.loading,
            members: e.members.map(function (n) {
              return g(e.orgId, n, t);
            }),
            orgId: e.orgId,
            orgName: e.orgName,
          };
        });
      return ((u = t), n);
    }
    function d(e, t, n) {
      if (e.length === 0) return s;
      var r = new Set();
      for (var a of t) {
        r.add(o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(a.id));
        var i = a.accountLid;
        i != null && r.add(i.toString());
      }
      for (var l of n)
        r.add(o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(l.id));
      if (r.size === 0) return e;
      var u = e
        .map(function (e) {
          return babelHelpers.extends({}, e, {
            members: e.members.filter(function (e) {
              var t = _(e);
              return (
                t.length === 0 ||
                !t.some(function (e) {
                  return r.has(e);
                })
              );
            }),
          });
        })
        .filter(function (e) {
          return e.failure != null || e.loading || e.members.length > 0;
        });
      return u.length === 0 ? s : u;
    }
    function m(e) {
      var t = f(e);
      return t == null
        ? null
        : o("WAWebContactCollection").ContactCollection.gadd(t);
    }
    function p(e, t) {
      if (e.length === 0 || t.length === 0) return e;
      var n = new Set(
        t
          .flatMap(function (e) {
            return e.members;
          })
          .flatMap(_),
      );
      return n.size === 0
        ? e
        : e.filter(function (e) {
            return !n.has(
              o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(e.id),
            );
          });
    }
    function _(e) {
      var t = f(e);
      return t == null
        ? []
        : [
            o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(t),
            t.toString(),
          ];
    }
    function f(t) {
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(t.lid, "lid");
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-search] unparseable member lid",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-member-search-bad-lid"),
          null
        );
      }
    }
    function g(e, t, n) {
      var r,
        a,
        i,
        l,
        s = o("WAWebOrgContactCollection").createOrgContactModelId(e, t.lid),
        c = {
          id: s,
          lid: t.lid,
          memberName: t.displayName,
          memberTag: (r = t.memberTag) != null ? r : "",
          orgId: e,
          phoneNumber: (a = t.phoneNumber) != null ? a : null,
          role:
            (i = o("WAWebSchemaOrg").OrgMemberRole.cast(t.role)) != null
              ? i
              : null,
          username:
            (l = o("WAWebUsernameTypes").asMaybeUsername(t.username)) != null
              ? l
              : null,
        },
        d = u.get(s);
      d == null || d.set(c);
      var m = d != null ? d : new (o("WAWebOrgContactModel").OrgContact)(c);
      return (n.set(s, m), m);
    }
    function h(e) {
      if (e.loading)
        return {
          height: o("WAWebOrgMemberSearchLoadingRowLayout")
            .ORG_MEMBER_SEARCH_LOADING_HEIGHT,
          itemKey: "org-members-loading-" + e.orgId,
          type: o("WAWebChatlistTypes").WAWebChatlistRow
            .ROW_ORG_MEMBERS_LOADING,
        };
      var t = e.failure;
      return t == null
        ? null
        : {
            failure: t,
            height: o(
              "WAWebOrgMemberSearchErrorRowLayout",
            ).getOrgMemberSearchErrorHeight(t),
            itemKey: "org-members-error-" + e.orgId,
            type: o("WAWebChatlistTypes").WAWebChatlistRow
              .ROW_ORG_MEMBERS_ERROR,
          };
    }
    ((l.EMPTY_ORG_RENDER_SECTIONS = s),
      (l.toOrgMemberRenderSections = c),
      (l.dedupeOrgMemberSections = d),
      (l.toOrgMemberContact = m),
      (l.withoutOrgMembers = p),
      (l.toOrgMemberStatusRow = h));
  },
  98,
);
