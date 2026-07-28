__d(
  "WAWebVoipContactUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
          if (!t.isUserNotPSA()) return !0;
          try {
            return !(yield o("WAWebApiContact").isAddressBookContact(
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
        })),
        u.apply(this, arguments)
      );
    }
    l.isCallerNotContact = s;
  },
  98,
);
