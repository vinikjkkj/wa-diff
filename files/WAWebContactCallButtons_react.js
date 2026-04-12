__d(
  "WAWebContactCallButtons.react",
  [
    "WAWebCallButtonsSurface",
    "WAWebChatCollection",
    "WAWebFlexBox.react",
    "WAWebVoipCallButtonsLoadable",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.contact,
        n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t.id);
      return n == null || !o("WAWebVoipGatingUtils").isCallingEnabled()
        ? null
        : s.jsx(o("WAWebFlexBox.react").FlexRow, {
            children: s.jsx(
              o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable,
              {
                chat: n,
                surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface
                  .IconOnly,
                callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                  .CALL_LOG_SEARCH,
                lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType")
                  .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
              },
            ),
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
