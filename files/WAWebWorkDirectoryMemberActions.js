__d(
  "WAWebWorkDirectoryMemberActions",
  [
    "WAWebApiContact",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebContactCollection",
    "WAWebOpenChatWithContactAction",
    "WAWebReachoutTimelockActions",
    "WAWebReachoutTimelockUtils",
    "WAWebShouldShowCallButtons",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWorkDirectoryMemberUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.member,
        n = e.onOpened,
        r = t.lid;
      if (
        !o("WAWebWorkDirectoryMemberUtils").canSelectWorkDirectoryMember(t) ||
        r == null
      )
        return "not_opened";
      var a = u(r, t.name);
      if (
        (o(
          "WAWebReachoutTimelockActions",
        ).maybeSetCanSendMsgWhileTimelockedProp([a]),
        !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
          chat: o("WAWebChatCollection").ChatCollection.getChatByAccountLid(r),
          contact: a,
        }))
      )
        return "restricted";
      var i = !1;
      return (
        await o("WAWebOpenChatWithContactAction").openChatWithContact({
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewChat,
          findChatOrigin: "newChatFlow",
          opts: {
            onOpened: function (t) {
              ((i = !0), n == null || n(t));
            },
          },
          targetId: a.id,
        }),
        i ? "opened" : "not_opened"
      );
    }
    function s(e) {
      var t = e.lid;
      if (
        !(
          !o("WAWebWorkDirectoryMemberUtils").canSelectWorkDirectoryMember(e) ||
          t == null
        )
      ) {
        var n = u(t, e.name);
        if (o("WAWebShouldShowCallButtons").canCallContact(n)) {
          if (r("WAWebCallCollection").activeCall != null) {
            o("WAWebVoipCallBlockedModals").showEndCurrentCallToast();
            return;
          }
          o("WAWebVoipStartCall").startWAWebVoipCall(
            t,
            !1,
            o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACTS_TAB,
            o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .NOT_OPENED,
            null,
            { entryTrust: "user_gesture" },
          );
        }
      }
    }
    function u(e, t) {
      var n;
      return (n = o("WAWebContactCollection").ContactCollection.get(e)) != null
        ? n
        : o("WAWebContactCollection").ContactCollection.gadd({
            id: e,
            phoneNumber: o("WAWebApiContact").getPnIfLidIsLatestMapping(e),
            pushname: t,
          });
    }
    ((l.openWorkDirectoryMemberChat = e),
      (l.startWorkDirectoryMemberCall = s),
      (l.getWorkDirectoryMemberContact = u));
  },
  98,
);
