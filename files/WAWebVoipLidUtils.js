__d(
  "WAWebVoipLidUtils",
  [
    "WALogger",
    "WAPromiseEach",
    "WAWebABProps",
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
          var t = !e.is_offline,
            r = e.peer_jid;
          if (r.isUser()) {
            var a = e.caller_pn;
            yield c({
              jid: r,
              phoneNumber: a != null && a.isUser() ? a : null,
              username: e.caller_username,
              countryCode: e.caller_country_code,
              pushName: e.caller_push_name,
              flushImmediately: t,
            });
          }
          var i = e.group_info_updates;
          if (i != null) {
            for (var l = -1, s = 0; s < i.length; s++)
              i[s].jid.isUser() && (l = s);
            yield o("WAPromiseEach").promiseEach(
              i,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var r = e.jid;
                    if (r.isUser()) {
                      var o = e.user_pn;
                      return c({
                        jid: r,
                        phoneNumber: o != null && o.isUser() ? o : null,
                        username: e.username,
                        pushName: e.push_name,
                        accountKind: e.account_kind,
                        flushImmediately: t && n === l,
                      });
                    }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          }
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
              !r("WAWebEnvironment").isGuest &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [
                  { lid: d, pn: o("WAWebWidFactory").asUserWidOrThrow(s) },
                ],
                flushImmediately: i,
                learningSource: "voip-lid",
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
