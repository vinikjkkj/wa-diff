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
      var n,
        r = o("WAWebContactCollection").ContactCollection.gadd(t.from),
        a =
          (n = o("WAWebFrontendContactGetters").getShownMemberName(r)) != null
            ? n
            : o("WAWebFrontendContactGetters").getFormattedName(r);
      return e(t)
        ? s._(/*BTDS*/ "", [s._param("contactName", a)])
        : s._(/*BTDS*/ "", [s._param("contactName", a)]);
    }
    function c(t) {
      return e(t) ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    ((l.formatChangeLidLeadTemplateText = u),
      (l.formatChangeLidCtaTemplateText = c));
  },
  226,
);
