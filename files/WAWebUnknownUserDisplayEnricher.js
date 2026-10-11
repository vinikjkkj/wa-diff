__d(
  "WAWebUnknownUserDisplayEnricher",
  [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebCooldownBatcher",
    "WAWebUnknownUserDisplayStore",
    "WAWebUnknownUserDisplayedLogger",
    "WAWebUnknownUserRecoveryManager",
    "WAWebUnknownUserSelfHealFromDb",
    "WAWebWamEnumUnknownUserRecoveryPath",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { hasUn: null, hasPn: null, hasPush: null, inDb: null },
      s = o("WAWebCooldownBatcher").createCooldownBatcher(
        { windowMs: 250, maxWindowMs: 5e3, cooldownMs: 0 },
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            try {
              var n = yield o("WAWebApiContact").bulkGetContactRecord(t),
                a = n.map(function (e, n) {
                  var o = t[n];
                  return {
                    hasUn:
                      (e == null ? void 0 : e.username) != null &&
                      e.usernameSoftDeleted !== !0,
                    hasPn: o.isLid()
                      ? (e == null ? void 0 : e.phoneNumber) != null
                      : o.isRegularUserPn(),
                    hasPush: !r("isStringNullOrEmpty")(
                      e == null ? void 0 : e.pushname,
                    ),
                    inDb: e != null,
                  };
                });
              o("WAWebUnknownUserSelfHealFromDb").healUnknownUsersFromDbRows(
                t,
                n,
              );
              for (var i = 0; i < t.length; i++)
                o("WAWebUnknownUserRecoveryManager").maybeRecoverUnknownUser(
                  t[i],
                  a[i],
                );
              return t.map(function (e, t) {
                return {
                  isRecovering:
                    o("WAWebUnknownUserSelfHealFromDb").isSelfHealInFlight(e) ||
                    o(
                      "WAWebUnknownUserRecoveryManager",
                    ).isUsyncRecoveryInFlight(e),
                  presence: a[t],
                };
              });
            } catch (n) {
              return t.map(function (t) {
                return {
                  isRecovering:
                    o("WAWebUnknownUserSelfHealFromDb").isSelfHealInFlight(t) ||
                    o(
                      "WAWebUnknownUserRecoveryManager",
                    ).isUsyncRecoveryInFlight(t),
                  presence: e,
                };
              });
            }
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      ),
      u = new Set([
        "contact_info",
        "chat_list",
        "chat_header",
        "group_member_list",
        "group_message",
      ]);
    function c(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      o("WAWebUnknownUserDisplayedLogger").unknownUserLoggingEnabled() &&
        s(t).then(
          function (r) {
            var o = r.isRecovering,
              a = r.presence;
            o || d(e, t, n, a);
          },
          function () {
            return d(e, t, n, null);
          },
        );
    }
    function d(e, t, n, r) {
      if (o("WAWebUnknownUserDisplayedLogger").reserveUnknownUserEmission()) {
        var a = u.has(e)
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
    l.logUnknownUserDisplayed = c;
  },
  98,
);
