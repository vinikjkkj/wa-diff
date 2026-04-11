__d(
  "WAWebMessageDebugMenuItems.react",
  [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebCopyToClipboard",
    "WAWebDebugGatingUtils",
    "WAWebDevIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAssociationUIUtils",
    "WAWebMessageContextMenuActionsWamEvent",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollsSendVoteMsgAction",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionsUtils",
    "WAWebRequestMediaReuploadBridge",
    "WAWebSendNonMessageDataRequest",
    "WAWebSendReactionMsgAction",
    "WAWebSyncGatingUtils",
    "WAWebWamEnumMessageContextMenuActionType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "cr:10197",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      new (o(
        "WAWebMessageContextMenuActionsWamEvent",
      ).MessageContextMenuActionsWamEvent)({
        isAGroup: o("WAWebChatGetters").getIsGroup(
          o("WAWebFrontendMsgGetters").getChat(e),
        ),
        isMultiAction: !1,
        isOriginalSender: o("WAWebMsgGetters").getIsSentByMe(e),
        messageContextMenuAction: o("WAWebWamEnumMessageContextMenuActionType")
          .MESSAGE_CONTEXT_MENU_ACTION_TYPE.CLICK,
        messageContextMenuOption: o("WAWebWamEnumMessageContextMenuOptionType")
          .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
      }).commit();
    }
    function c(e) {
      if (!o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled()) return [];
      var t = [],
        a = [];
      (a.push(
        s.jsx(
          r("WDSMenuItem.react"),
          {
            title: "Copy Msg ID",
            onPress: function () {
              o("WAWebCopyToClipboard").copyTextToClipboard(e.id.toString());
            },
            testid: void 0,
          },
          "copy-id",
        ),
      ),
        o("WAWebFrontendMsgGetters").getAsAlbum(e) &&
          a.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Copy Associated Msg ID's",
                onPress: function () {
                  o("WAWebCopyToClipboard").copyTextToClipboard(
                    o("WAWebMessageAssociationUIUtils")
                      .getHiddenAssociatedMessages(e.id)
                      .map(function (e) {
                        return e.id.toString();
                      })
                      .join("\n"),
                  );
                },
                testid: void 0,
              },
              "copy-associated-children-message-ids",
            ),
          ),
        a.push(
          s.jsx(
            r("WDSMenuItem.react"),
            {
              title: "Copy Msg Protobuf",
              onPress: function () {
                var t =
                  n("cr:10197") == null
                    ? void 0
                    : n("cr:10197").getMessageByMsgId(e.id.id.toString());
                t != null && o("WAWebCopyToClipboard").copyTextToClipboard(t);
              },
              testid: void 0,
            },
            "copy-content",
          ),
        ),
        a.push(
          s.jsx(
            r("WDSMenuItem.react"),
            {
              title: "Report Bug",
              onPress: function () {
                var t = "Message ID: " + e.id.toString() + "\n";
                o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", t);
              },
              testid: void 0,
            },
            "report-bug",
          ),
        ),
        o("WAWebFrontendMsgGetters").getAsMms(e) &&
          (e.deprecatedMms3Url != null &&
            (a.push(
              s.jsx(
                r("WDSMenuItem.react"),
                {
                  title: "Copy Mms3 Url",
                  onPress: function () {
                    o("WAWebCopyToClipboard").copyTextToClipboard(
                      e.deprecatedMms3Url || "",
                    );
                  },
                  testid: void 0,
                },
                "copy-mms3-url",
              ),
            ),
            a.push(
              s.jsx(
                r("WDSMenuItem.react"),
                {
                  title: "Trigger RMR",
                  onPress: function () {
                    r("WAWebRequestMediaReuploadBridge")(e);
                  },
                  testid: void 0,
                },
                "trigger-rmr",
              ),
            )),
          a.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Copy Media filehash",
                onPress: function () {
                  o("WAWebCopyToClipboard").copyTextToClipboard(
                    e.filehash || "",
                  );
                },
                testid: void 0,
              },
              "copy-filehash",
            ),
          )));
      var i = o("WAWebFrontendMsgGetters").getAsPollCreation(e);
      return (
        i &&
          a.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Vote spam perf test",
                onPress: function () {
                  var t = self.setInterval(function () {
                    var e = new Set();
                    for (var t of i.pollOptions)
                      Math.random() > 0.5 && e.add(t.localId);
                    o("WAWebPollsSendVoteMsgAction").sendVote(i, e);
                  }, 250);
                  (self.setTimeout(function () {
                    self.clearInterval(t);
                  }, 60 * 1e3),
                    u(e));
                },
              },
              "add-random-vote-spam",
            ),
          ),
        o("WAWebReactionsUtils").canReactToMessage(e) &&
          a.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Reaction spam perf test",
                onPress: function () {
                  var t = self.setInterval(function () {
                    o("WAWebSendReactionMsgAction").sendReactionToMsg(
                      e,
                      Math.random() > 0.5 ? "\uD83D\uDC4D" : "\uD83D\uDC4E",
                    );
                  }, 250);
                  (self.setTimeout(function () {
                    self.clearInterval(t);
                  }, 60 * 1e3),
                    u(e));
                },
              },
              "add-random-reaction-spam",
            ),
          ),
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
          a.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Convert into PTV",
                onPress: function () {
                  e.type = "ptv";
                },
              },
              "convert-into-ptv",
            ),
          ),
        e.type === o("WAWebMsgType").MSG_TYPE.PTV &&
          a.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Convert into Video",
                onPress: function () {
                  e.type = "video";
                },
              },
              "convert-into-video",
            ),
          ),
        a.length > 0 &&
          t.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Developer",
                Icon: o("WAWebDevIcon.react").DevIcon,
                submenuContent: s.jsx(r("WDSMenu.react"), { children: a }),
                hasSubmenu: !0,
              },
              "developer-submenu",
            ),
          ),
        t
      );
    }
    l.getWAWebMessageDebugMenuItems = c;
  },
  98,
);
