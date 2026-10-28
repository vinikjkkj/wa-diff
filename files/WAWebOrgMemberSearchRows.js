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
      u,
      c = Object.freeze([]);
    function d(e, t, n) {
      if (e.length === 0) return c;
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
              var t = h(e);
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
      return s.length === 0 ? c : s;
    }
    function m(e) {
      var t = y(e);
      return t == null ? null : p(t, e);
    }
    function p(t, n) {
      var r = o("WAWebContactCollection").ContactCollection.get(t);
      if (r != null) return r;
      var a = _(t, n);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[org-contact] created a contact for a picked member phone=",
              " username=",
              "",
            ])),
          String(a.phoneNumber != null),
          String(a.username != null),
        ),
        o("WAWebContactCollection").ContactCollection.gadd(
          babelHelpers.extends({ id: t }, a),
        )
      );
    }
    function _(e, t) {
      var n,
        r = o("WAWebContactCollection").ContactCollection.get(e);
      return r != null
        ? { phoneNumber: r.phoneNumber, username: r.username }
        : {
            phoneNumber:
              (n = o("WAWebApiContact").getPnIfLidIsLatestMapping(e)) != null
                ? n
                : f(e, t.phoneNumber),
            username: t.username,
          };
    }
    function f(e, t) {
      var n,
        a = (n = t == null ? void 0 : t.replace(/\D/g, "")) != null ? n : "";
      if (a === "") return null;
      var i;
      try {
        i = o("WAWebWidFactory").createUserWidOrThrow(a + "@c.us");
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-search] unparseable directory phone number",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-member-bad-phone-number"),
          null
        );
      }
      var l = o("WAWebApiContact").getCurrentLid(i);
      return l == null || l.equals(e) ? i : null;
    }
    function g(e, t) {
      if (e.length === 0 || t.length === 0) return e;
      var n = new Set(
        t
          .flatMap(function (e) {
            return e.members;
          })
          .flatMap(h),
      );
      return n.size === 0
        ? e
        : e.filter(function (e) {
            return !n.has(
              o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(e.id),
            );
          });
    }
    function h(e) {
      var t = y(e);
      return t == null
        ? []
        : [
            o("WAWebNonContactPushNameSearchModel").canonicalDedupeId(t),
            t.toString(),
          ];
    }
    function y(e) {
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(e.id, "lid");
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-search] unparseable member lid",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-member-search-bad-lid"),
          null
        );
      }
    }
    function C(e) {
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
    ((l.EMPTY_ORG_RENDER_SECTIONS = c),
      (l.dedupeOrgMemberSections = d),
      (l.toOrgMemberContact = m),
      (l.getOrgMemberContact = p),
      (l.getOrgMemberIdentifiers = _),
      (l.withoutOrgMembers = g),
      (l.toOrgMemberLid = y),
      (l.toOrgMemberStatusRow = C));
  },
  98,
);
