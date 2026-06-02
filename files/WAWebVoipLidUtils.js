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
            flushImmediately: t && o,
          });
        }));
    }
    async function u(t) {
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
            (await o("WAWebSetUsernameJob").setUsernamesJob([d]),
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
          (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [
              { lid: c, pn: o("WAWebWidFactory").asUserWidOrThrow(l) },
            ],
            flushImmediately: a,
            learningSource: "other",
          }));
      }
    }
    ((l.persistAttributesAndLidMappingsForCall = s),
      (l.attemptPersistLidMappingAndUserAttributes = u));
  },
  98,
);
