__d(
  "WAWebFormatChangeLidTemplateText",
  [
    "fbt",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebOrgMemberContactName",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.templateParams;
      if (t.length !== 1) return !1;
      var n = o("WAWebWidFactory").asUserLidOrThrow(
        o("WAWebWidFactory").createWidFromWidLike(t[0]),
      );
      return o("WAWebApiContact").getPhoneNumber(n) != null;
    }
    function u(t) {
      var n,
        r = o("WAWebContactCollection").ContactCollection.gadd(t.from),
        a =
          (n = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(r)) !=
          null
            ? n
            : o("WAWebFrontendContactGetters").getFormattedName(r);
      return e(t)
        ? s._(
            /*BTDS*/ "{contactName} changed their phone number to a new number",
            [s._param("contactName", a)],
          )
        : s._(/*BTDS*/ "{contactName} updated their contact info", [
            s._param("contactName", a),
          ]);
    }
    function c(t) {
      return e(t)
        ? s._(/*BTDS*/ "Message or add the new number")
        : s._(/*BTDS*/ "Message");
    }
    ((l.formatChangeLidLeadTemplateText = u),
      (l.formatChangeLidCtaTemplateText = c));
  },
  226,
);
