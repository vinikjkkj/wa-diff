__d(
  "WAWebOrgMemberSearchRows",
  [
    "WALogger",
    "WAWebApiContact",
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
      s,
      u = Object.freeze([]);
    function c(e, t, n) {
      if (e.length === 0) return u;
      var r = new Set();
      for (var a of t) {
        r.add(o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(a.id));
        var i = a.accountLid;
        i != null && r.add(i.toString());
      }
      for (var l of n)
        r.add(o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(l.id));
      if (r.size === 0) return e;
      var s = e
        .map(function (e) {
          return babelHelpers.extends({}, e, {
            members: e.members.filter(function (e) {
              var t = f(e);
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
      return s.length === 0 ? u : s;
    }
    function d(e) {
      var t = g(e);
      return t == null ? null : m(t, e);
    }
    function m(e, t) {
      var n,
        r = o("WAWebContactCollection").ContactCollection.get(e);
      return r != null
        ? r
        : o("WAWebContactCollection").ContactCollection.gadd({
            id: e,
            phoneNumber:
              (n = o("WAWebApiContact").getPnIfLidIsLatestMapping(e)) != null
                ? n
                : p(e, t.phoneNumber),
            username: t.username,
          });
    }
    function p(t, n) {
      var a,
        i = (a = n == null ? void 0 : n.replace(/\D/g, "")) != null ? a : "";
      if (i === "") return null;
      var l;
      try {
        l = o("WAWebWidFactory").createUserWidOrThrow(i + "@c.us");
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-search] unparseable directory phone number",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-member-bad-phone-number"),
          null
        );
      }
      var s = o("WAWebApiContact").getCurrentLid(l);
      return s == null || s.equals(t) ? l : null;
    }
    function _(e, t) {
      if (e.length === 0 || t.length === 0) return e;
      var n = new Set(
        t
          .flatMap(function (e) {
            return e.members;
          })
          .flatMap(f),
      );
      return n.size === 0
        ? e
        : e.filter(function (e) {
            return !n.has(
              o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(e.id),
            );
          });
    }
    function f(e) {
      var t = g(e);
      return t == null
        ? []
        : [
            o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(t),
            t.toString(),
          ];
    }
    function g(e) {
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(e.id, "lid");
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-search] unparseable member lid",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-member-search-bad-lid"),
          null
        );
      }
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
    ((l.EMPTY_ORG_RENDER_SECTIONS = u),
      (l.dedupeOrgMemberSections = c),
      (l.toOrgMemberContact = d),
      (l.getOrgMemberContact = m),
      (l.withoutOrgMembers = _),
      (l.toOrgMemberLid = g),
      (l.toOrgMemberStatusRow = h));
  },
  98,
);
