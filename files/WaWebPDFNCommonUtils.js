__d(
  "WaWebPDFNCommonUtils",
  [
    "fbt",
    "$InternalEnum",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "isStringNullOrEmpty",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "ACCEPTED",
      c = n("$InternalEnum").Mirrored(["Meta", "WhatsApp"]),
      d = n("$InternalEnum").Mirrored(["Blocking", "NonBlocking"]);
    function m(e) {
      var t = o("WAWebUserDisclosureCollection").UserDisclosureCollection.get(
        e,
      );
      return t != null && t.accepted
        ? !0
        : o("WAWebTos").TosManager.getState(e) === u;
    }
    function p(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s =
          e == null || (n = e.privacyDisclosureModal) == null
            ? void 0
            : n.bullets;
      s != null &&
        s.forEach(function (e) {
          ((e.text = _(e.text, t)),
            r("isStringNullOrEmpty")(e.secondaryText) ||
              (e.secondaryText = _(e.secondaryText, t)));
        });
      var u =
          e == null || (o = e.privacyDisclosureModal) == null
            ? void 0
            : o.footer,
        c = u != null ? _(u, t) : u,
        d = {
          icon:
            e == null || (a = e.privacyDisclosureModal) == null
              ? void 0
              : a.icon,
          iconSvg:
            e == null || (i = e.privacyDisclosureModal) == null
              ? void 0
              : i.iconSvg,
          iconDescription:
            e == null || (l = e.privacyDisclosureModal) == null
              ? void 0
              : l.iconDescription,
        },
        m = f(e);
      return {
        bulletContent: s,
        footerContent: c,
        okText: m,
        headerContent: d,
      };
    }
    function _(t, n) {
      var o = new DOMParser(),
        a = o.parseFromString(t, "text/html"),
        i = n != null ? n : {},
        l = i.linkXstyle;
      return (
        a.querySelectorAll("a").forEach(function (t) {
          (t.setAttribute("target", "_blank"),
            l && t.setAttribute("class", (e || (e = r("stylex")))(l)));
        }),
        a.body.innerHTML
      );
    }
    function f(e) {
      var t, n;
      return (t =
        e == null ||
        (n = e.privacyDisclosureModal) == null ||
        (n = n.primaryButton) == null
          ? void 0
          : n.label) != null
        ? t
        : s._(/*BTDS*/ "Continue");
    }
    ((l.PdfnTheme = c),
      (l.PdfnNoticeType = d),
      (l.hasAcceptedTos = m),
      (l.getFormattedPdfnContent = p));
  },
  226,
);
