__d(
  "WAWebNotificationsChatAssignmentNotification",
  [
    "fbt",
    "WANullthrows",
    "WAWebBaseNotification",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConnModel",
    "WAWebFrontendChatGetters",
    "WAWebGetNotificationStrings",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          a,
          i = t.assignmentTimestamps,
          l = t.chats;
        return (
          (a = e.call(this) || this),
          (a.$WAWebNotificationsChatAssignmentNotification$p_1 =
            function () {}),
          (a.chats = l
            .map(function (e) {
              return o("WAWebChatCollection").ChatCollection.get(e);
            })
            .filter(function (e) {
              return e != null;
            })),
          (a.primaryChat = r("WANullthrows")(a.chats[0])),
          (a.assignmentTimestamps = i),
          (a.businessName =
            (n = o("WAWebConnModel").Conn.pushname) != null
              ? n
              : s._(/*BTDS*/ "Admin").toString()),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.shouldPlaySound = function () {
          return e.prototype.shouldPlaySound.call(this)
            ? o("WAWebNotificationHelpers").shouldPlaySoundGranular(
                this.primaryChat,
              )
            : !1;
        }),
        (a.shouldShowBanner = function () {
          return e.prototype.shouldShowBanner.call(this)
            ? o("WAWebNotificationHelpers").shouldEnableNotificationGranular(
                this.primaryChat,
              )
            : !1;
        }),
        (a.shouldMute = function (t) {
          return o("WAWebNotificationHelpers").shouldMuteDueToAppState(t)
            ? r("WAWebNotificationMuteReason").AppState
            : this.chats.every(function (e) {
                  return e && o("WAWebMuteGetters").getIsMuted(e.mute);
                })
              ? r("WAWebNotificationMuteReason").MutedChat
              : this.chats.every(function (e) {
                    return e == null ? void 0 : e.archive;
                  })
                ? r("WAWebNotificationMuteReason").ArchivedChat
                : o("WAWebNotificationHelpers").isOfflineResumeInProgress()
                  ? r("WAWebNotificationMuteReason").OfflineResumeInProgress
                  : null;
        }),
        (a.buildKey = function () {
          return (
            "chat_assignment:" +
            this.chats
              .map(function (e) {
                return e == null ? void 0 : e.id.toString();
              })
              .join("-") +
            this.assignmentTimestamps
          );
        }),
        (a.matchesChat = function (t) {
          return this.chats.length > 1 ? !1 : this.primaryChat.equals(t);
        }),
        (a.getChatKind = function () {
          return o("WAWebFrontendChatGetters").getKind(this.primaryChat);
        }),
        (a.performLogging = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {},
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebNotificationIconUtils").getNotificationIconByWid(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              this.abortController.signal,
              o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getBannerOptions = function () {
          var e = o("WAWebGetNotificationStrings").getNotificationBody(
            babelHelpers.extends(
              {},
              u(this.primaryChat, this.businessName, this.chats.length),
            ),
          );
          return {
            wid: this.primaryChat.id,
            title: this.businessName,
            body: e,
            onClick: this.$WAWebNotificationsChatAssignmentNotification$p_1,
          };
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function u(e, t, n) {
      var r;
      return (
        n === 1
          ? o("WAWebChatGetters").getIsGroup(e)
            ? (r = s._(
                /*BTDS*/ "{businessName} assigned you to chat with the group {chatName}",
                [
                  s._param("businessName", t),
                  s._param("chatName", e.formattedTitle),
                ],
              ))
            : (r = s._(
                /*BTDS*/ "{businessName} assigned you a chat with {chatName}",
                [
                  s._param("businessName", t),
                  s._param("chatName", e.formattedTitle),
                ],
              ))
          : (r = s._(/*BTDS*/ "{businessNme} assigned you {numberOfChats}", [
              s._param("businessNme", t),
              s._param("numberOfChats", n),
            ])),
        { body: r.toString() }
      );
    }
    l.WAWebNotificationsChatAssignmentNotification = e;
  },
  226,
);
