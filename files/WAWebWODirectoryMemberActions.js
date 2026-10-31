__d(
  "WAWebWODirectoryMemberActions",
  [
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebContactCollection",
    "WAWebOpenChatWithContactAction",
    "WAWebReachoutTimelockActions",
    "WAWebReachoutTimelockUtils",
    "WAWebWODirectoryMemberUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.member,
            n = e.onOpened,
            r = t.lid;
          if (
            !o("WAWebWODirectoryMemberUtils").canSelectWODirectoryMember(t) ||
            r == null
          )
            return "not_opened";
          var a = u(r, t.name);
          if (
            (o(
              "WAWebReachoutTimelockActions",
            ).maybeSetCanSendMsgWhileTimelockedProp([a]),
            !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
              chat: o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
                r,
              ),
              contact: a,
            }))
          )
            return "restricted";
          var i = !1;
          return (
            yield o("WAWebOpenChatWithContactAction").openChatWithContact({
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
        })),
        s.apply(this, arguments)
      );
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
    ((l.openWODirectoryMemberChat = e), (l.getWODirectoryMemberContact = u));
  },
  98,
);
