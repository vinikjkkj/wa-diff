__d(
  "WAWebSmsRegistrationSendSmsCall",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebL10N",
    "WAWebLandingPromoGating",
    "WAWebSignUpViaWebRequestEntryPoint",
    "WAXWhatsAppWebRegistrationControllerRouteBuilder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "for (;;);",
      c = n("$InternalEnum")({ SENT: 1, ERROR: 2 });
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          try {
            var i = r("WAXWhatsAppWebRegistrationControllerRouteBuilder")
                .buildUri({
                  phone: t,
                  step: "otp",
                  locale: r("WAWebL10N").getLocale(),
                  source: p(n),
                  exp_bucket: o(
                    "WAWebLandingPromoGating",
                  ).getLandingPromoExpBucket(),
                  access_session_id: a === "" ? void 0 : a,
                })
                .toString()
                .concat("&__a=1"),
              l = yield window.fetch(i, {
                headers: { "Content-Type": "application/json" },
              }),
              d = yield l.text();
            d.startsWith(u) && (d = d.substring(u.length));
            var m = JSON.parse(d).payload;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebSmsRegistrationSendSmsCall] sendSmsCall +",
                  ])),
              ),
              m
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebSmsRegistrationSendSmsCall] sendSmsCall - ",
                    "",
                  ])),
                e,
              )
              .sendLogs("wa-web-reg");
          }
          return {
            status: c.ERROR,
            error_reason: r("WAWebFbtCommon")("Try Again"),
            retry_after: 5,
          };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      if (e != null) return e;
      if (r("WAWebEnvironment").isWindows)
        return o("WAWebSignUpViaWebRequestEntryPoint")
          .WhatsappGrowthInvites_SignUpViaWebRequestEntryPoint.WINDOWS;
    }
    ((l.WhatsappGrowthInvites_SignUpViaWebResponseStatus = c),
      (l.sendSmsCall = d));
  },
  98,
);
