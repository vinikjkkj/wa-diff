__d(
  "WAWebOrgMemberSearchRows",
  [
    "WALogger",
    "WAWebChatlistTypes",
    "WAWebContactCollection",
    "WAWebNonContactPushNameSearchModel",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchLoadingRowLayout",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Object.freeze([]);
    function u(e, t, n) {
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
              var t = m(e);
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
    function c(e) {
      var t = p(e);
      return t == null
        ? null
        : o("WAWebContactCollection").ContactCollection.gadd(t);
    }
    function d(e, t) {
      if (e.length === 0 || t.length === 0) return e;
      var n = new Set(
        t
          .flatMap(function (e) {
            return e.members;
          })
          .flatMap(m),
      );
      return n.size === 0
        ? e
        : e.filter(function (e) {
            return !n.has(
              o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(e.id),
            );
          });
    }
    function m(e) {
      var t = p(e);
      return t == null
        ? []
        : [
            o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(t),
            t.toString(),
          ];
    }
    function p(t) {
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(t.id, "lid");
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
    function _(e) {
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
      (l.dedupeOrgMemberSections = u),
      (l.toOrgMemberContact = c),
      (l.withoutOrgMembers = d),
      (l.toOrgMemberLid = p),
      (l.toOrgMemberStatusRow = _));
  },
  98,
);
