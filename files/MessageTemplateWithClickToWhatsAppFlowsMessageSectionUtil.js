__d(
  "MessageTemplateWithClickToWhatsAppFlowsMessageSectionUtil",
  ["fbt", "DateTime", "IntlCurrentLocale"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function () {
      return (
        s._(/*BTDS*/ "").toString() +
        " " +
        new Intl.DateTimeFormat(
          r("IntlCurrentLocale").code.valueOf().replace(/_/g, "-"),
          { day: "2-digit", month: "2-digit", year: "2-digit" },
        ).format(r("DateTime").localNow().getUnixTimestamp())
      );
    };
    l.getDefaultCTWAFlowsTemplateName = e;
  },
  226,
);
