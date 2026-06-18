__d(
  "WAWebVoipContactUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebWidFactory",
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
          try {
            return !(yield o("WAWebApiContact").isAddressBookContact(
              o("WAWebWidFactory").asUserWidOrThrow(t).toJid(),
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
