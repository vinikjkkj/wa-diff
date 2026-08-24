__d(
  "WAWebUnknownUserDisplayEnricher",
  [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebCooldownBatcher",
    "WAWebUnknownUserDisplayStore",
    "WAWebUnknownUserDisplayedLogger",
    "WAWebUnknownUserSelfHealFromDb",
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
              return (
                o("WAWebUnknownUserSelfHealFromDb").healUnknownUsersFromDbRows(
                  t,
                  n,
                ),
                a
              );
            } catch (n) {
              return t.map(function () {
                return e;
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
      if (o("WAWebUnknownUserDisplayedLogger").reserveUnknownUserEmission()) {
        var r = u.has(e)
          ? o("WAWebUnknownUserDisplayStore").recordDisplayForJid(t)
          : null;
        s(t).then(
          function (a) {
            return o(
              "WAWebUnknownUserDisplayedLogger",
            ).commitUnknownUserDisplayed(
              e,
              t,
              babelHelpers.extends(
                {
                  clientTsMs: n,
                  isFirstDisplay: r == null ? void 0 : r.isFirstDisplay,
                  durationInSecs: r == null ? void 0 : r.durationInSecs,
                },
                a,
              ),
            );
          },
          function () {
            return o(
              "WAWebUnknownUserDisplayedLogger",
            ).commitUnknownUserDisplayed(e, t, {
              clientTsMs: n,
              isFirstDisplay: r == null ? void 0 : r.isFirstDisplay,
              durationInSecs: r == null ? void 0 : r.durationInSecs,
            });
          },
        );
      }
    }
    l.logUnknownUserDisplayed = c;
  },
  98,
);
