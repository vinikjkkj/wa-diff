__d(
  "WAWebUnknownUserDisplayEnricher",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebCooldownBatcher",
    "WAWebUnknownUserDisplayStore",
    "WAWebUnknownUserDisplayedLogger",
    "WAWebUnknownUserRecoveryManager",
    "WAWebUnknownUserSelfHealFromDb",
    "WAWebWamEnumUnknownUserRecoveryPath",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { hasUn: null, hasPn: null, hasPush: null, inDb: null },
      u = o("WAWebCooldownBatcher").createCooldownBatcher(
        { windowMs: 250, maxWindowMs: 5e3, cooldownMs: 0 },
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              var t = yield o("WAWebApiContact").bulkGetContactRecord(e),
                n = t.map(function (t, n) {
                  var o = e[n];
                  return {
                    hasUn:
                      (t == null ? void 0 : t.username) != null &&
                      t.usernameSoftDeleted !== !0,
                    hasPn: o.isLid()
                      ? (t == null ? void 0 : t.phoneNumber) != null
                      : o.isRegularUserPn(),
                    hasPush: !r("isStringNullOrEmpty")(
                      t == null ? void 0 : t.pushname,
                    ),
                    inDb: t != null,
                  };
                });
              o("WAWebUnknownUserSelfHealFromDb").healUnknownUsersFromDbRows(
                e,
                t,
              );
              for (var a = 0; a < e.length; a++)
                o("WAWebUnknownUserRecoveryManager").maybeRecoverUnknownUser(
                  e[a],
                  n[a],
                );
              return e.map(function (e, t) {
                return {
                  isRecovering:
                    o("WAWebUnknownUserSelfHealFromDb").isSelfHealInFlight(e) ||
                    o(
                      "WAWebUnknownUserRecoveryManager",
                    ).isUsyncRecoveryInFlight(e),
                  presence: n[t],
                };
              });
            } catch (t) {
              return e.map(function (e) {
                return {
                  isRecovering:
                    o("WAWebUnknownUserSelfHealFromDb").isSelfHealInFlight(e) ||
                    o(
                      "WAWebUnknownUserRecoveryManager",
                    ).isUsyncRecoveryInFlight(e),
                  presence: s,
                };
              });
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      ),
      c = new Set([
        "contact_info",
        "chat_list",
        "chat_header",
        "group_member_list",
        "group_message_quoted",
        "group_message_cag_masked",
        "group_message_cag_masked_bare",
        "group_message_cag_masked_noparent",
        "group_message_cag_masked_noparent_inactive",
        "group_message_cag_masked_nochat",
        "group_message_cag_masked_noadmin",
        "group_message_cag",
        "group_message_community_sub",
        "group_message_group",
        "group_system_message",
        "group_mention",
        "group_mention_nonmember",
        "group_mention_nonmember_cag",
      ]);
    function d(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      o("WAWebUnknownUserDisplayedLogger").unknownUserLoggingEnabled() &&
        u(t).then(
          function (r) {
            var o = r.isRecovering,
              a = r.presence;
            o || p(e, t, n, a);
          },
          function () {
            return p(e, t, n, null);
          },
        );
    }
    function m(t) {
      o("WAWebUnknownUserDisplayedLogger").unknownUserLoggingEnabled() &&
        u(t).catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Unknown-user identity recovery failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("unknown-user-identity-recovery-failed");
        });
    }
    function p(e, t, n, r) {
      if (o("WAWebUnknownUserDisplayedLogger").reserveUnknownUserEmission()) {
        var a = c.has(e)
          ? o("WAWebUnknownUserDisplayStore").recordDisplayForJid(t)
          : null;
        o("WAWebUnknownUserDisplayedLogger").commitUnknownUserDisplayed(e, t, {
          clientTsMs: n,
          isFirstDisplay: a == null ? void 0 : a.isFirstDisplay,
          durationInSecs: a == null ? void 0 : a.durationInSecs,
          hasUn: r == null ? void 0 : r.hasUn,
          hasPn: r == null ? void 0 : r.hasPn,
          hasPush: r == null ? void 0 : r.hasPush,
          inDb: r == null ? void 0 : r.inDb,
          unknownUserRecoveryPath:
            r != null
              ? o("WAWebUnknownUserRecoveryManager").getUnknownUserRecoveryPath(
                  t,
                  r,
                )
              : o("WAWebWamEnumUnknownUserRecoveryPath")
                  .UNKNOWN_USER_RECOVERY_PATH.NONE,
        });
      }
    }
    ((l.logUnknownUserDisplayed = d), (l.recoverUnknownUserIdentity = m));
  },
  98,
);
