__d(
  "WAWebReconcileBotSupportFields",
  [
    "Promise",
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotProduct",
    "WAWebFetchWassBotListProfilesGQL",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n, a) {
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
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            yield (c || (c = n("Promise"))).all(
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
                          product: e.product,
                          isDeprecated: e.isDeprecated,
                          isDeleted: !1,
                          lastFetchedTimeMs: a,
                        });
                      } catch (e) {
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
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
            yield c.all(
              d(i, l, e).map(
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
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
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
        p.apply(this, arguments)
      );
    }
    ((l.computeBotSupportTombstones = d), (l.reconcileBotSupportFields = m));
  },
  98,
);
