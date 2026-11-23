__d(
  "WAWebVoipContactUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      if (!t.isUserNotPSA()) return !0;
      try {
        return !(await o("WAWebApiContact").isAddressBookContact(
          o("WAWebWidToJid").widToUserJid(
            o("WAWebWidFactory").asUserWidOrThrow(t),
          ),
        ));
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] isCallerNotContact failed; treat as non-contact",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-is-caller-not-contact-fail"),
          !0
        );
      }
    }
    l.isCallerNotContact = s;
  },
  98,
);
