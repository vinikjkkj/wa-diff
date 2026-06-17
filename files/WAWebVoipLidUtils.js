__d(
  "WAWebVoipLidUtils",
  [
    "WALogger",
    "WAPromiseEach",
    "WAWebAsISOCountryCode",
    "WAWebContactExternalUserState",
    "WAWebDBCreateLidPnMappings",
    "WAWebEnvironment",
    "WAWebHandlePushnameUpdate",
    "WAWebSetUsernameJob",
    "WAWebUpdateContactExternalUserState",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebVoipGatingUtils",
    "WAWebVoipWaCallEnums",
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
                      pushName: e.push_name,
                      accountKind: e.account_kind,
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
          var n = t.accountKind,
            a = t.countryCode,
            i = t.flushImmediately,
            l = t.jid,
            s = t.phoneNumber,
            u = t.pushName,
            c = t.username,
            d = o("WAWebWidFactory").asUserWidOrThrow(l),
            p = m(n);
          if (
            (p != null &&
              o("WAWebVoipGatingUtils").isGuestCallingRepresentationEnabled() &&
              o(
                "WAWebUpdateContactExternalUserState",
              ).updateContactExternalUserState(l, p),
            r("isStringNullOrEmpty")(u) ||
              o("WAWebHandlePushnameUpdate").updatePushname(l, u, !1),
            !!d.isLid())
          ) {
            if (
              c != null &&
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
            ) {
              var _ = o("WAWebUsernameTypes").asMaybeUsername(c);
              if (_ != null) {
                var f = { userId: d, username: _ };
                if (a != null) {
                  var g = o("WAWebAsISOCountryCode").asISOCountryCode(a);
                  g != null && (f.usernameCountryCode = g);
                }
                if (
                  (yield o("WAWebSetUsernameJob").setUsernamesJob([f]),
                  s != null &&
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
            }
            s != null &&
              !r("WAWebEnvironment").isGuest &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [
                  { lid: d, pn: o("WAWebWidFactory").asUserWidOrThrow(s) },
                ],
                flushImmediately: i,
                learningSource: "other",
              }));
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return (function (e) {
        if (e === o("WAWebVoipWaCallEnums").AccountKind.Guest)
          return o("WAWebContactExternalUserState").ExternalUserState.GuestUser;
        if (e === o("WAWebVoipWaCallEnums").AccountKind.Unknown) return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(o("WAWebVoipWaCallEnums").wireStringToAccountKind(e));
    }
    ((l.persistAttributesAndLidMappingsForCall = s),
      (l.attemptPersistLidMappingAndUserAttributes = c));
  },
  98,
);
