__d(
  "WAWebVoipLidUtils",
  [
    "WALogger",
    "WAPromiseEach",
    "WAWebAsISOCountryCode",
    "WAWebContactExternalUserState",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandlePushnameUpdate",
    "WAWebSetUsernameJob",
    "WAWebUpdateContactExternalUserState",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebVoipGatingUtils",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = !e.is_offline;
      await u({
        jid: e.call_creator,
        phoneNumber: e.caller_pn,
        username: e.caller_username,
        countryCode: e.caller_country_code,
        pushName: e.caller_push_name,
        flushImmediately: t,
      });
      var n = e.group_info_updates;
      n != null &&
        (await o("WAPromiseEach").promiseEach(n, async function (e, r) {
          var o = r === n.length - 1;
          return u({
            jid: e.jid,
            phoneNumber: e.user_pn,
            username: e.username,
            pushName: e.push_name,
            accountKind: e.account_kind,
            flushImmediately: t && o,
          });
        }));
    }
    async function u(t) {
      var n = t.accountKind,
        a = t.countryCode,
        i = t.flushImmediately,
        l = t.jid,
        s = t.phoneNumber,
        u = t.pushName,
        d = t.username,
        m = o("WAWebWidFactory").asUserWidOrThrow(l),
        p = c(n);
      if (
        (p != null &&
          o("WAWebVoipGatingUtils").isGuestCallingRepresentationEnabled() &&
          o(
            "WAWebUpdateContactExternalUserState",
          ).updateContactExternalUserState(l, p),
        r("isStringNullOrEmpty")(u) ||
          o("WAWebHandlePushnameUpdate").updatePushname(l, u, !1),
        !!m.isLid())
      ) {
        if (
          d != null &&
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
        ) {
          var _ = o("WAWebUsernameTypes").asMaybeUsername(d);
          if (_ != null) {
            var f = { userId: m, username: _ };
            if (a != null) {
              var g = o("WAWebAsISOCountryCode").asISOCountryCode(a);
              g != null && (f.usernameCountryCode = g);
            }
            if (
              (await o("WAWebSetUsernameJob").setUsernamesJob([f]),
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
          (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [
              { lid: m, pn: o("WAWebWidFactory").asUserWidOrThrow(s) },
            ],
            flushImmediately: i,
            learningSource: "other",
          }));
      }
    }
    function c(e) {
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
      (l.attemptPersistLidMappingAndUserAttributes = u));
  },
  98,
);
