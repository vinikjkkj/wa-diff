__d(
  "WAWebResolvePersonToContact",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebOrgMemberContactName",
    "WAWebOrgMemberLidEligibility",
    "WAWebPersonRowPolicy",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      var r;
      if (!o("WAWebPersonRowPolicy").isPersonRowAllowed(t, n)) return null;
      var a = o("WAWebPersonRowPolicy").getExistingPersonContact(t);
      if (a != null) return a;
      var i = o("WAWebWidFactory").createUserLidOrThrow(t.lid, "lid"),
        l =
          (r = t.member) != null
            ? r
            : o("WAWebOrgMemberContactName").getKnownOrgMember(i),
        s =
          l == null
            ? {
                phoneNumber: o("WAWebApiContact").getPnIfLidIsLatestMapping(i),
                username: null,
              }
            : m(i, l);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[org-contact] created a contact for a picked member phone=",
              " username=",
              "",
            ])),
          String(s.phoneNumber != null),
          String(s.username != null),
        ),
        o("WAWebContactCollection").ContactCollection.gadd(
          babelHelpers.extends({ id: i }, s),
        )
      );
    }
    function c(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e);
      return n != null
        ? { phoneNumber: n.phoneNumber, username: n.username }
        : m(e, t);
    }
    function d(e) {
      var t = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(e),
        n = o("WAWebOrgMemberContactName").getKnownOrgMember(e);
      return t == null || n == null ? null : m(t, n);
    }
    function m(e, t) {
      var n;
      return {
        phoneNumber:
          (n = o("WAWebApiContact").getPnIfLidIsLatestMapping(e)) != null
            ? n
            : p(e, t.phoneNumber),
        username: t.username,
      };
    }
    function p(e, t) {
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
