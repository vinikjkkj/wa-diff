__d(
  "WAWebConversationMenusDevOnly",
  [
    "WAWebBackendRuntime",
    "WAWebContactGetters",
    "WAWebCopyToClipboard",
    "WAWebDebugParticipantsListModal.react",
    "WAWebDevOnlyBadge.react",
    "WAWebPeerDataService",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebSyncGatingUtils",
    "WDSIconIcSmartToy.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = t.chatId,
        a = t.contact,
        i = t.groupMetadata,
        l = t.isCAG,
        u = t.kind;
      if (!r("gkx")("16539")) return e;
      var c = [],
        d = c;
      if (
        (d.push.apply(
          d,
          o("WAWebDevOnlyBadge.react").getDEVChatMenuOptions(n, u),
        ),
        l)
      ) {
        var m,
          p,
          _ =
            (m =
              i == null || (p = i.parentGroup) == null
                ? void 0
                : p.toString()) != null
              ? m
              : "",
          f = "copy-parent-group-id";
        d.push(
          s.jsx(
            r("WDSMenuItem.react"),
            {
              title: "Copy Parent Group ID",
              onPress: function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(_);
              },
              testid: "test-" + f,
            },
            f,
          ),
        );
      }
      if (a != null && o("WAWebContactGetters").getIsGroup(a)) {
        var g = i == null ? void 0 : i.participants;
        g != null &&
          d.push(
            s.jsx(
              r("WAWebDebugParticipantsListModal.react"),
              { participants: g },
              "showParticipants",
            ),
          );
      }
      return (
        o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled() &&
          d.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Sync more history",
                onPress: function () {
                  (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebPeerDataService").PeerDataService,
                      ).sendPeerDataOperationRequest
                    : o("WAWebSendNonMessageDataRequest")
                        .sendPeerDataOperationRequest)(
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
        c.length > 0 &&
          e.push(
            s.jsxs(s.Fragment, {
              children: [
                s.jsx(r("WDSMenuItem.react"), { type: "separator" }),
                s.jsx(
                  r("WDSMenuItem.react"),
                  {
                    title: "Developer",
                    Icon: r("WDSIconIcSmartToy.react"),
                    submenuContent: s.jsx(r("WDSMenu.react"), { children: c }),
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
