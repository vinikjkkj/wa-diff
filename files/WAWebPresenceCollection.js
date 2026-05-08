__d(
  "WAWebPresenceCollection",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebContactPresenceBridge",
    "WAWebGroupPresencePoller",
    "WAWebGroupPresenceUtils",
    "WAWebLidMigrationUtils",
    "WAWebPresenceChatAction",
    "WAWebPresenceModel",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function a() {
          for (var e, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (e = t.call.apply(t, [this].concat(i)) || this),
            (e.findImpl = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = e.gadd(t);
                  return n.isGroup
                    ? (yield e._subscribe(t), { id: t })
                    : !n.isUser ||
                        r("WAWebWid").isServer(t) ||
                        r("WAWebWid").isPSA(t) ||
                        r("WAWebWid").isFbidBot(t) ||
                        o("WAWebUserPrefsMeUser").isMeAccount(n.id)
                      ? { id: t }
                      : (yield e._subscribe(t), { id: t });
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
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebChatCollection").ChatCollection.get(e);
                if (t != null) {
                  if (t.id.isGroup()) {
                    yield this._subscribeGroup(t);
                    return;
                  }
                  var n = o("WAWebPresenceChatAction").getChatIdentifier(t),
                    r = t.getTcToken();
                  yield o("WAWebContactPresenceBridge").subscribePresence(n, r);
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i._subscribeGroup = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this;
                if (
                  o("WAWebGroupPresenceUtils").isGroupEligibleForPresence(t)
                ) {
                  var a = t.groupMetadata;
                  if (a != null) {
                    var i = a.participants.length;
                    if (
                      i <=
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
                      var l = [];
                      (a.participants.forEach(function (e) {
                        var t = e.id;
                        if (!o("WAWebUserPrefsMeUser").isMeAccount(t)) {
                          var n = o("WAWebLidMigrationUtils").toUserLid(t),
                            a = n != null ? n : t;
                          r.gadd(a);
                          var i =
                              n != null
                                ? o(
                                    "WAWebChatCollection",
                                  ).ChatCollection.getChatByAccountLid(n)
                                : o("WAWebChatCollection").ChatCollection.get(
                                    t,
                                  ),
                            s = i == null ? void 0 : i.getTcToken();
                          l.push(
                            o("WAWebContactPresenceBridge").subscribePresence(
                              a,
                              s,
                            ),
                          );
                        }
                      }),
                        yield (e || (e = n("Promise"))).allSettled(l));
                    } else
                      i <= o("WAWebGroupPresenceUtils").WEB_LARGE_MAX &&
                        o(
                          "WAWebGroupPresenceUtils",
                        ).isLargeGroupPresenceEnabled() &&
                        o(
                          "WAWebGroupPresencePoller",
                        ).startLargeGroupPresencePoll(t);
                  }
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
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
    s.model = o("WAWebPresenceModel").Presence;
    var u = new s();
    l.PresenceCollection = u;
  },
  98,
);
