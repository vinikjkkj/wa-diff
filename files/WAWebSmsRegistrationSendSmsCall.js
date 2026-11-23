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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "for (;;);",
      c = n("$InternalEnum")({ SENT: 1, ERROR: 2 });
    async function d(t, n, a) {
      try {
        var i = r("WAXWhatsAppWebRegistrationControllerRouteBuilder")
            .buildUri({
              phone: t,
              step: "otp",
              locale: r("WAWebL10N").getLocale(),
              source: m(n),
              exp_bucket: o(
                "WAWebLandingPromoGating",
              ).getLandingPromoExpBucket(),
              access_session_id: a === "" ? void 0 : a,
            })
            .toString()
            .concat("&__a=1"),
          l = await window.fetch(i, {
            headers: { "Content-Type": "application/json" },
          }),
          d = await l.text();
        d.startsWith(u) && (d = d.substring(u.length));
        var p = JSON.parse(d).payload;
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebSmsRegistrationSendSmsCall] sendSmsCall +",
              ])),
          ),
          p
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
    function m(e) {
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
