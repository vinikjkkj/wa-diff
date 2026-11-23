__d(
  "MAWDeviceRegistrationSessionUtil",
  [
    "CSRFGuard",
    "ConstUriUtils",
    "CurrentMessengerUser",
    "DTSG",
    "DTSGUtils",
    "MAWLoggerUtils",
    "MWFBLogger",
    "PHPQuerySerializer",
    "SprinkleConfig",
    "WAAPI",
    "WAWorkerGlobalScope",
    "XArmadilloWebLinkDeviceToSessionControllerRouteBuilder",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("MWFBLogger")
        .MWLogger()
        .tags([
          o("MAWLoggerUtils").Tag.DeviceRegistration,
          "LinkDeviceToTheSession",
        ]);
    async function f(t, n) {
      var a,
        i,
        l,
        f =
          (a = o("WAWorkerGlobalScope").workerGlobalScope.location) == null
            ? void 0
            : a.origin;
      if (
        !(f == null || f === "") &&
        !(o("CurrentMessengerUser").isTestUser() && f.includes("twshared"))
      ) {
        if (t == null) {
          _.MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "DeviceUUID is null",
              ])),
          );
          return;
        }
        var g = new URL(f).hostname,
          h =
            (i = r("XArmadilloWebLinkDeviceToSessionControllerRouteBuilder")
              .buildUri({})
              .qualifyDomain(
                o("ConstUriUtils").getUri("https://" + g + "/"),
              )) == null
              ? void 0
              : i.toString();
        if (h != null) {
          var y = o("DTSG").getToken();
          if (y != null) {
            var C = { device_id: t, fb_dtsg: y };
            r("SprinkleConfig").param_name &&
              (C[r("SprinkleConfig").param_name] =
                r("DTSGUtils").getNumericValue(y));
            var b = o("WAWorkerGlobalScope").workerGlobalScope.fetch,
              v;
            try {
              v = await b(h, {
                body: (p || (p = r("PHPQuerySerializer"))).serialize(C),
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                method: "POST",
                redirect: "error",
              });
            } catch (e) {
              _.catching(r("getErrorSafe")(e)).MUSTFIX(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Fetch error, fetch defined: ",
                    "",
                  ])),
                b != null,
              );
              return;
            }
            if (!v.ok) {
              _.MUSTFIX(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Fetch is not 200: ",
                    "",
                  ])),
                v.status,
              );
              return;
            }
            var S = await v.text();
            o("CSRFGuard").exists(S) && (S = o("CSRFGuard").clean(S));
            var R;
            try {
              R = JSON.parse(S);
            } catch (e) {
              _.catching(r("getErrorSafe")(e)).MUSTFIX(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Parse response error",
                  ])),
              );
              return;
            }
            ((l = R) == null ? void 0 : l.success) === !0
              ? (_.DEBUG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "LinkDeviceToTheSession success",
                    ])),
                ),
                await r("WAAPI").saveLastSessionDeviceWasLinkedTo({
                  sessionId: n,
                }))
              : _.WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "fetch result is not successful",
                    ])),
                );
          }
        }
      }
    }
    l.linkDeviceToTheSession = f;
  },
  98,
);
