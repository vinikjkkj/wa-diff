__d(
  "WAWebSmsRegistrationSendSmsCall",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebL10N",
    "WAWebSignUpViaWebRequestEntryPoint",
    "WAXWhatsAppWebRegistrationControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "for (;;);",
      c = n("$InternalEnum")({ SENT: 1, ERROR: 2 });
    async function d(t) {
      try {
        var n = r("WAXWhatsAppWebRegistrationControllerRouteBuilder")
            .buildUri({
              phone: t,
              step: "otp",
              locale: r("WAWebL10N").getLocale(),
              source: r("WAWebEnvironment").isWindows
                ? o("WAWebSignUpViaWebRequestEntryPoint")
                    .WhatsappGrowthInvites_SignUpViaWebRequestEntryPoint.WINDOWS
                : void 0,
            })
            .toString()
            .concat("&__a=1"),
          a = await window.fetch(n, {
            headers: { "Content-Type": "application/json" },
          }),
          i = await a.text();
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
    }
    ((l.WhatsappGrowthInvites_SignUpViaWebResponseStatus = c),
      (l.sendSmsCall = d));
  },
  98,
);
