__d(
  "WAWebConversationMenusDevOnly",
  [
    "WAWebContactGetters",
    "WAWebCopyToClipboard",
    "WAWebDebugParticipantsListModal.react",
    "WAWebDevIcon.react",
    "WAWebDevOnlyBadge.react",
    "WAWebFrontendChatGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebSyncGatingUtils",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      if (r("gkx")("26258")) return e;
      var n = t.id,
        a = o("WAWebFrontendChatGetters").getKind(t),
        i = [],
        l = i;
      if (
        (l.push.apply(
          l,
          o("WAWebDevOnlyBadge.react").getDEVChatMenuOptions(n, a),
        ),
        t.isCAG())
      ) {
        var u,
          c,
          d =
            (u =
              (c = t.groupMetadata) == null || (c = c.parentGroup) == null
                ? void 0
                : c.toString()) != null
              ? u
              : "",
          m = "copy-parent-group-id";
        l.push(
          s.jsx(
            r("WDSMenuItem.react"),
            {
              title: "Copy Parent Group ID",
              onPress: function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(d);
              },
              testid: "test-" + m,
            },
            m,
          ),
        );
      }
      if (o("WAWebContactGetters").getIsGroup(t)) {
        var p,
          _ = (p = t.groupMetadata) == null ? void 0 : p.participants;
        _ != null &&
          l.push(
            s.jsx(
              r("WAWebDebugParticipantsListModal.react"),
              { participants: _ },
              "showParticipants",
            ),
          );
      }
      return (
        o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
          l.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Sync more history",
                onPress: function () {
                  o(
                    "WAWebSendNonMessageDataRequest",
                  ).sendPeerDataOperationRequest(
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType
                      .HISTORY_SYNC_ON_DEMAND,
                    { chatId: n },
                  );
                },
                testid: "mi-history-sync-on-demand",
              },
              "historySyncOnDemand",
            ),
          ),
        i.length > 0 &&
          e.push(
            s.jsxs(s.Fragment, {
              children: [
                s.jsx(r("WDSMenuItem.react"), { type: "separator" }),
                s.jsx(
                  r("WDSMenuItem.react"),
                  {
                    title: "Developer",
                    Icon: o("WAWebDevIcon.react").DevIcon,
                    submenuContent: s.jsx(r("WDSMenu.react"), { children: i }),
                    hasSubmenu: !0,
                  },
                  "developer-submenu",
                ),
              ],
            }),
          ),
        e
      );
    }
    l.addDevItemsToMenu = u;
  },
  98,
);
