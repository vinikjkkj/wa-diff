__d(
  "WAWebResolvePersonToContact",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebOrgMemberContactName",
    "WAWebOrgMemberLidEligibility",
    "WAWebPersonRowPolicy",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, r) {
      var a;
      if (!o("WAWebPersonRowPolicy").isPersonRowAllowed(t, n)) return null;
      var i =
        r != null ? r : o("WAWebPersonRowPolicy").getExistingPersonContact(t);
      if (i != null) return (m(i, t), i);
      var l = o("WAWebWidFactory").createUserLidOrThrow(t.lid, "lid"),
        s =
          (a = t.member) != null
            ? a
            : o("WAWebOrgMemberContactName").getKnownOrgMember(l),
        u =
          s == null
            ? {
                phoneNumber: o("WAWebApiContact").getPnIfLidIsLatestMapping(l),
                username: null,
              }
            : _(l, s);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[org-contact] created a contact for a picked member phone=",
              " username=",
              "",
            ])),
          String(u.phoneNumber != null),
          String(u.username != null),
        ),
        o("WAWebContactCollection").ContactCollection.gadd(
          babelHelpers.extends({ id: l }, u),
        )
      );
    }
    function c(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e);
      return n != null
        ? { phoneNumber: n.phoneNumber, username: p(n, t) }
        : _(e, t);
    }
    function d(e) {
      var t = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(e),
        n = o("WAWebOrgMemberContactName").getKnownOrgMember(e);
      return t == null || n == null ? null : _(t, n);
    }
    function m(e, t) {
      var n,
        r =
          (n = t.member) != null
            ? n
            : o("WAWebOrgMemberContactName").getKnownOrgMember(
                o("WAWebPersonRowPolicy").toPersonLid(t),
              );
      e.username == null &&
        (r == null ? void 0 : r.username) != null &&
        !o("WAWebFrontendContactGetters").getIsMyContact(e) &&
        e.set({ username: r.username });
    }
    function p(e, t) {
      var n;
      return o("WAWebFrontendContactGetters").getIsMyContact(e)
        ? e.username
        : (n = e.username) != null
          ? n
          : t.username;
    }
    function _(e, t) {
      var n;
      return {
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
    ((l.resolvePersonToContact = u),
      (l.getOrgMemberIdentifiers = c),
      (l.getKnownOrgMemberIdentifiers = d));
  },
  98,
);
