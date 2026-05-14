__d(
  "WAWebPresenceCollection",
  [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactPresenceBridge",
    "WAWebGroupPresencePoller",
    "WAWebGroupPresenceUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebPresenceModel",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var e, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (e = t.call.apply(t, [this].concat(i)) || this),
            (e.findImpl = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n =
                      typeof t == "string"
                        ? o("WAWebWidFactory").createWid(t)
                        : t,
                    a = e.gadd(t);
                  return a.isGroup
                    ? (yield e._subscribe(n), { id: t })
                    : !a.isUser ||
                        r("WAWebWid").isServer(t) ||
                        r("WAWebWid").isPSA(t) ||
                        r("WAWebWid").isFbidBot(t) ||
                        o("WAWebUserPrefsMeUser").isMeAccount(a.id)
                      ? { id: t }
                      : (yield e._subscribe(n), { id: t });
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i._subscribe = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if (t.isGroup()) {
                  var n = o("WAWebChatCollection").ChatCollection.get(t);
                  if (n == null) return;
                  yield this._subscribeGroup(n);
                  return;
                }
                if (!t.isLid()) {
                  o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated() &&
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "presence key for 1:1 is not a LID: ",
                            "",
                          ])),
                        t.toLogString(),
                      )
                      .sendLogs("presence-key-not-lid");
                  return;
                }
                yield o("WAWebContactPresenceBridge").subscribeUserPresence(t);
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i._subscribeGroup = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (
                  o("WAWebGroupPresenceUtils").isGroupEligibleForPresence(e)
                ) {
                  var r = e.groupMetadata;
                  if (r != null) {
                    var a = r.participants.length;
                    if (
                      a <=
                      o(
                        "WAWebGroupPresenceUtils",
                      ).getSmallGroupPresenceThreshold()
                    ) {
                      if (
                        !o(
                          "WAWebGroupPresenceUtils",
                        ).isSmallGroupPresenceEnabled()
                      )
                        return;
                      var i = [];
                      (r.participants.forEach(function (e) {
                        var n = e.id;
                        if (
                          !o("WAWebUserPrefsMeUser").isMeAccount(n) &&
                          !e.id.isBot()
                        ) {
                          var r = o("WAWebWidFactory").asUserLidOrThrow(n);
                          (t.gadd(r),
                            i.push(
                              o(
                                "WAWebContactPresenceBridge",
                              ).subscribeUserPresence(r),
                            ));
                        }
                      }),
                        yield (s || (s = n("Promise"))).allSettled(i));
                    } else
                      a <= o("WAWebGroupPresenceUtils").WEB_LARGE_MAX &&
                        o(
                          "WAWebGroupPresenceUtils",
                        ).isLargeGroupPresenceEnabled() &&
                        o(
                          "WAWebGroupPresencePoller",
                        ).startLargeGroupPresencePoll(e);
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.reSubscribeWhenActive = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.get(e);
                t == null ||
                  t.isSubscribed === !1 ||
                  (yield this._subscribe(e));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.clearAllPresence = function () {
            (o("WAWebGroupPresencePoller").stopAllLargeGroupPresencePolls(),
              this.forEach(function (e) {
                (e.reset(), e.set({ stale: !0, isSubscribed: !1 }));
              }));
          }),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = o("WAWebPresenceModel").Presence;
    var c = new u();
    l.PresenceCollection = c;
  },
  98,
);
