__d(
  "WAWebVoipLidUtils",
  [
    "WALogger",
    "WAPromiseEach",
    "WAWebABProps",
    "WAWebAsISOCountryCode",
    "WAWebContactExternalUserState",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandlePushnameUpdate",
    "WAWebLidPnMappingWrite",
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
      var t = !e.is_offline,
        n = e.peer_jid;
      if (n.isUser()) {
        var r = e.caller_pn;
        await u({
          jid: n,
          phoneNumber: r != null && r.isUser() ? r : null,
          username: e.caller_username,
          countryCode: e.caller_country_code,
          pushName: e.caller_push_name,
          flushImmediately: t,
        });
      }
      var a = e.group_info_updates;
      if (a != null) {
        for (var i = -1, l = 0; l < a.length; l++) a[l].jid.isUser() && (i = l);
        await o("WAPromiseEach").promiseEach(a, async function (e, n) {
          var r = e.jid;
          if (r.isUser()) {
            var o = e.user_pn;
            return u({
              jid: r,
              phoneNumber: o != null && o.isUser() ? o : null,
              username: e.username,
              pushName: e.push_name,
              accountKind: e.account_kind,
              flushImmediately: t && n === i,
            });
          }
        });
      }
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
          o("WAWebABProps").getABPropConfigValue(
            "web_guest_calling_representation_enabled",
          ) &&
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
                o("WAWebABProps").getABPropConfigValue(
                  "enable_calling_phone_number_privacy",
                ))
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
          !o("WAWebVoipGatingUtils").isGuestViewer() &&
          (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [
              { lid: m, pn: o("WAWebWidFactory").asUserWidOrThrow(s) },
            ],
            write: o("WAWebLidPnMappingWrite").toLidPnMappingWrite(i),
            learningSource: "voip-lid",
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
