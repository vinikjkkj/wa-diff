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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = r("WAXWhatsAppWebRegistrationControllerRouteBuilder")
                .buildUri({
                  phone: t,
                  step: "otp",
                  locale: r("WAWebL10N").getLocale(),
                  source: r("WAWebEnvironment").isWindows
                    ? o("WAWebSignUpViaWebRequestEntryPoint")
                        .WhatsappGrowthInvites_SignUpViaWebRequestEntryPoint
                        .WINDOWS
                    : void 0,
                  exp_bucket: o(
                    "WAWebLandingPromoGating",
                  ).getLandingPromoExpBucket(),
                })
                .toString()
                .concat("&__a=1"),
              a = yield window.fetch(n, {
                headers: { "Content-Type": "application/json" },
              }),
              i = yield a.text();
            i.startsWith(u) && (i = i.substring(u.length));
            var l = JSON.parse(i).payload;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebSmsRegistrationSendSmsCall] sendSmsCall +",
                  ])),
              ),
              l
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
    ((l.WhatsappGrowthInvites_SignUpViaWebResponseStatus = c),
      (l.sendSmsCall = d));
  },
  98,
);
