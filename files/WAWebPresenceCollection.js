__d(
  "WAWebPresenceCollection",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebContactPresenceBridge",
    "WAWebGroupPresencePoller",
    "WAWebGroupPresenceUtils",
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
                if (
                  o("WAWebGroupPresenceUtils").isGroupEligibleForPresence(t)
                ) {
                  var r = t.groupMetadata;
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
                        var t = e.id;
                        if (!o("WAWebUserPrefsMeUser").isMeAccount(t)) {
                          var n = o("WAWebChatCollection").ChatCollection.get(
                              t,
                            ),
                            r = n == null ? void 0 : n.getTcToken();
                          i.push(
                            o("WAWebContactPresenceBridge").subscribePresence(
                              t,
                              r,
                            ),
                          );
                        }
                      }),
                        yield (e || (e = n("Promise"))).allSettled(i));
                    } else
                      a <= o("WAWebGroupPresenceUtils").WEB_LARGE_MAX &&
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
