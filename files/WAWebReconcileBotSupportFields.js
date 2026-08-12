__d(
  "WAWebReconcileBotSupportFields",
  [
    "Promise",
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotProduct",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchWassBotListProfilesGQL",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t, n, a) {
      var i = [];
      for (var l of n)
        if (
          !(
            l.product !==
              o("WAWebBotProduct").BotProduct.THIRD_PARTY.valueOf() ||
            l.isDeleted === !0
          ) &&
          !(l.lastFetchedTimeMs != null && l.lastFetchedTimeMs >= a)
        ) {
          var s = void 0;
          try {
            s = o("WAWebWidFactory").createWid(l.id);
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[computeBotSupportTombstones] skipping malformed id",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sbp-reconcile-tombstone-parse-error");
            continue;
          }
          t.has(s.user) || i.push(s);
        }
      return i;
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebBotBaseGating").isStandardBotProfileEnabled()) return !1;
          var e = Date.now(),
            t = yield o(
              "WAWebFetchWassBotListProfilesGQL",
            ).fetchWassBotListProfilesGQL();
          if (t.type !== "success") return !1;
          if (t.profiles.length === 0) return !0;
          var a = Date.now(),
            i = new Set(
              t.profiles.map(function (e) {
                return e.botFbid;
              }),
            ),
            l = yield o("WAWebSchemaBotProfile").getBotProfileTable().all();
          return (
            yield (d || (d = n("Promise"))).all(
              t.profiles.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t = o("WAWebWidFactory").createWid(
                          e.botFbid + "@bot",
                        );
                        yield o(
                          "WAWebPersistBotProfiles",
                        ).mergeBotSupportFields(t, {
                          name: e.name,
                          product: e.product,
                          isDeprecated: e.isDeprecated,
                          isDeleted: !1,
                          lastFetchedTimeMs: a,
                        });
                        var n = o(
                          "WAWebPersistBotProfiles",
                        ).setBotProfilePicUrls(
                          t,
                          e.profilePicThumbUrl,
                          e.profilePicFullUrl,
                        );
                        n != null &&
                          o("WAWebDBBulkPersistProfilePic")
                            .persistProfilePicBatched(n)
                            .catch(function (e) {
                              o("WALogger")
                                .ERROR(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[reconcileBotSupportFields] failed to persist a listed agent pic",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .sendLogs("sbp-reconcile-persist-pic-error");
                            });
                      } catch (e) {
                        o("WALogger")
                          .ERROR(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[reconcileBotSupportFields] failed to upsert a listed agent",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("sbp-reconcile-upsert-error");
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            yield d.all(
              m(i, l, e).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        yield o(
                          "WAWebPersistBotProfiles",
                        ).mergeBotSupportFields(e, {
                          isDeleted: !0,
                          lastFetchedTimeMs: a,
                        });
                      } catch (e) {
                        o("WALogger")
                          .ERROR(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[reconcileBotSupportFields] failed to tombstone a delisted agent",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("sbp-reconcile-tombstone-error");
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            !0
          );
        })),
        _.apply(this, arguments)
      );
    }
    ((l.computeBotSupportTombstones = m), (l.reconcileBotSupportFields = p));
  },
  98,
);
