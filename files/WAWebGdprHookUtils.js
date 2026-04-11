__d(
  "WAWebGdprHookUtils",
  ["WAWap", "WAWebGdprConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account:
          return null;
        case o("WAWebGdprConstants").ReportType.Newsletters:
          return "newsletters";
      }
    }
    function s(t, n, r) {
      var a = e(n);
      return o("WAWap").wap(
        "iq",
        {
          xmlns: "urn:xmpp:whatsapp:account",
          to: o("WAWap").S_WHATSAPP_NET,
          type: "get",
          id: t,
        },
        a != null
          ? o("WAWap").wap("gdpr", { action: r, report_type: a })
          : o("WAWap").wap("gdpr", { action: r }),
      );
    }
    l.getGdprIq = s;
  },
  98,
);
