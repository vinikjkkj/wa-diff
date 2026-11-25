__d(
  "WAWebMusicOpenFlowAction",
  [
    "WAWebModalManager",
    "WAWebMusicGatingUtils",
    "WAWebMusicMsgPlayerStore",
    "WAWebMusicSenderModalLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      (n === void 0 && (n = "sticker_tray"),
        o("WAWebMusicGatingUtils").canSendMusicTo(e.id) &&
          o("WAWebModalManager").ModalManager.exists(function (r) {
            r ||
              (o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.stop(),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebMusicSenderModalLoadable")
                    .WAWebMusicSenderModalLoadable,
                  { chat: e, entryPoint: n, onClose: t },
                ),
                { blockClose: !0 },
              ));
          }));
    }
    l.openMusicFlow = u;
  },
  98,
);
