__d(
  "WAWebVoipLidUtils",
  [
    "WALogger",
    "WAPromiseEach",
    "WAWebAsISOCountryCode",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandlePushnameUpdate",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebVoipGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = !e.is_offline;
          yield c({
            jid: e.call_creator,
            phoneNumber: e.caller_pn,
            username: e.caller_username,
            countryCode: e.caller_country_code,
            pushName: e.caller_push_name,
            flushImmediately: t,
          });
          var r = e.group_info_updates;
          r != null &&
            (yield o("WAPromiseEach").promiseEach(
              r,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var o = n === r.length - 1;
                    return c({
                      jid: e.jid,
                      phoneNumber: e.user_pn,
                      username: e.username,
                      flushImmediately: t && o,
                    });
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            ));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.countryCode,
            a = t.flushImmediately,
            i = t.jid,
            l = t.phoneNumber,
            s = t.pushName,
            u = t.username,
            c = o("WAWebWidFactory").asUserWidOrThrow(i);
          if (
            (r("isStringNullOrEmpty")(s) ||
              o("WAWebHandlePushnameUpdate").updatePushname(i, s, !1),
            !!c.isLid())
          ) {
            if (
              u != null &&
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ) {
              var d = { userId: c, username: u };
              if (n != null) {
                var m = o("WAWebAsISOCountryCode").asISOCountryCode(n);
                m != null && (d.usernameCountryCode = m);
              }
              if (
                (yield o("WAWebSetUsernameJob").setUsernamesJob([d]),
                l != null &&
                  o(
                    "WAWebVoipGatingUtils",
                  ).usernameCallingPhoneNumberPrivacyEnabled())
              ) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] PN+username given for LID, skip LID<>PN mapping",
                      ])),
                  )
                  .sendLogs("voip_phone_number_privacy_enforcement_violated");
                return;
              }
            }
            l != null &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [
                  { lid: c, pn: o("WAWebWidFactory").asUserWidOrThrow(l) },
                ],
                flushImmediately: a,
                learningSource: "other",
              }));
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.persistAttributesAndLidMappingsForCall = s),
      (l.attemptPersistLidMappingAndUserAttributes = c));
  },
  98,
);
