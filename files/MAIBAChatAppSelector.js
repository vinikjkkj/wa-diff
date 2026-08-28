__d(
  "MAIBAChatAppSelector",
  ["MAIBAChatAppUIProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("MAIBAChatAppUIProvider").toFluxSelector()],
        function (t) {
          return {
            chatWindowWidth: t.chatWindowWidth,
            entrypoint: t.entrypoint,
            isFullScreen: t.isFullScreen,
            isMAIBAChatAppOpen: t.isMAIBAChatAppOpen,
            selectedChatState: t.selectedChatState,
            shouldAutoExpandThreadList: t.shouldAutoExpandThreadList,
            surfaceMode: t.surfaceMode,
            noopUpdated: !0,
          };
        },
        { name: i.id + ".MAIBAChatAppSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
