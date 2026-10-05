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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = r("WAXWhatsAppWebRegistrationControllerRouteBuilder")
                .buildUri({
                  phone: t,
                  step: "otp",
                  locale: r("WAWebL10N").getLocale(),
                  source: p(n),
                  exp_bucket: o(
                    "WAWebLandingPromoGating",
                  ).getLandingPromoExpBucket(),
                })
                .toString()
                .concat("&__a=1"),
              i = yield window.fetch(a, {
                headers: { "Content-Type": "application/json" },
              }),
              l = yield i.text();
            l.startsWith(u) && (l = l.substring(u.length));
            var d = JSON.parse(l).payload;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebSmsRegistrationSendSmsCall] sendSmsCall +",
                  ])),
              ),
              d
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
