__d(
  "WAWebFormatChangeLidTemplateText",
  [
    "fbt",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
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
      var n = o("WAWebContactCollection").ContactCollection.gadd(t.from),
        r = o("WAWebFrontendContactGetters").getFormattedName(n);
      return e(t)
        ? s._(
            /*BTDS*/ "{contactName} changed their phone number to a new number",
            [s._param("contactName", r)],
          )
        : s._(/*BTDS*/ "{contactName} updated their contact info", [
            s._param("contactName", r),
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
