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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.contact,
        r;
      t[0] !== n.id
        ? ((r = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            n.id,
          )),
          (t[0] = n.id),
          (t[1] = r))
        : (r = t[1]);
      var a = r;
      if (a == null || !o("WAWebVoipGatingUtils").isCallingEnabled())
        return null;
      var i;
      return (
        t[2] !== a
          ? ((i = s.jsx(o("WAWebFlexBox.react").FlexRow, {
              children: s.jsx(
                o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable,
                {
                  chat: a,
                  surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface
                    .IconOnly,
                  callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                    .CALL_LOG_SEARCH,
                  lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType")
                    .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
                },
              ),
            })),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = u;
  },
  98,
);
