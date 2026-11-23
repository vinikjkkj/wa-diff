__d(
  "WAWebPresenceCollection",
  [
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebChatCollection",
    "WAWebContactPresenceBridge",
    "WAWebGroupPresencePoller",
    "WAWebGroupPresenceUtils",
    "WAWebPresenceGetters",
    "WAWebPresenceModel",
    "WAWebPresenceService",
    "WAWebStaleBaseCollection",
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.findImpl = async function (t) {
              var n =
                  t instanceof r("WAWebWid")
                    ? t
                    : o("WAWebWidFactory").createWid(t.toString()),
                a = e.gadd(n);
              return o("WAWebPresenceGetters").getIsGroup(a)
                ? (await e._subscribe(n), { id: n })
                : !o("WAWebPresenceGetters").getIsUser(a) ||
                    r("WAWebWid").isServer(n) ||
                    r("WAWebWid").isPSA(n) ||
                    r("WAWebWid").isBot(n) ||
                    o("WAWebUserUtils").isMeAccount(a.id)
                  ? { id: n }
                  : (await e._subscribe(n), { id: n });
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a._subscribe = async function (n) {
            if (n.isGroup()) {
              var t = o("WAWebChatCollection").ChatCollection.get(n);
              if (t == null) return;
              await this._subscribeGroup(t);
              return;
            }
            if (!n.isLid()) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "presence key for 1:1 is not a LID: ",
                      "",
                    ])),
                  n.toLogString(),
                )
                .sendLogs("presence-key-not-lid");
              return;
            }
            await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebPresenceService").PresenceService,
                  ).subscribeUserPresence
                : o("WAWebContactPresenceBridge").subscribeUserPresence
            )(n);
          }),
          (a._subscribeGroup = async function (t) {
            var e = this;
            if (o("WAWebGroupPresenceUtils").isGroupEligibleForPresence(t)) {
              var n = t.groupMetadata;
              if (n != null) {
                var r = n.participants.length;
                if (
                  r <=
                  o("WAWebGroupPresenceUtils").getSmallGroupPresenceThreshold()
                ) {
                  if (
                    !o("WAWebGroupPresenceUtils").isSmallGroupPresenceEnabled()
                  )
                    return;
                  var a = [];
                  (n.participants.forEach(function (t) {
                    var n = t.id;
                    if (!o("WAWebUserUtils").isMeAccount(n) && n.isLid()) {
                      var r = o("WAWebWidFactory").asUserLidOrThrow(n);
                      (e.gadd(r),
                        a.push(
                          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                            ? o("WAWebBackendRuntime").runtime(
                                o("WAWebPresenceService").PresenceService,
                              ).subscribeUserPresence
                            : o("WAWebContactPresenceBridge")
                                .subscribeUserPresence)(r),
                        ));
                    }
                  }),
                    await Promise.allSettled(a));
                } else
                  r <= o("WAWebGroupPresenceUtils").WEB_LARGE_MAX &&
                    o(
                      "WAWebGroupPresenceUtils",
                    ).isLargeGroupPresenceEnabled() &&
                    o("WAWebGroupPresencePoller").startLargeGroupPresencePoll(
                      t,
                    );
              }
            }
          }),
          (a.reSubscribeWhenActive = async function (t) {
            var e = this.get(t);
            e == null || e.isSubscribed === !1 || (await this._subscribe(t));
          }),
          (a.clearAllPresence = function () {
            (o("WAWebGroupPresencePoller").stopAllLargeGroupPresencePolls(),
              this.forEach(function (e) {
                (e.reset(), e.set({ stale: !0, isSubscribed: !1 }));
              }));
          }),
          n
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = o("WAWebPresenceModel").Presence;
    var u = new s();
    l.PresenceCollection = u;
  },
  98,
);
