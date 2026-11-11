__d(
  "WAWebNewsletterCreateAppeal",
  [
    "Promise",
    "WAJids",
    "WAWebCreateEnforcementAppealJob",
    "WAWebL10N",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.additionalAppealReason,
            i = t.appealReason,
            l = t.chat,
            s = t.enforcementId;
          if (s == null)
            return (e || (e = n("Promise"))).reject(
              r("err")(
                "No enforcement id available while submitting an appeal",
              ),
            );
          var u = r("WAWebL10N").getLocale();
          return o("WAWebCreateEnforcementAppealJob").createEnforcementAppeal({
            newsletterJid: o("WAJids").toNewsletterJid(l.id.toString()),
            enforcementId: s,
            reason: i,
            additionalAppealReason: a,
            locale: u,
          });
        })),
        u.apply(this, arguments)
      );
    }
    l.createAppeal = s;
  },
  98,
);
