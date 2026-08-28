__d(
  "MWChatStateV2Types",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "UpsertTab",
      l = "UpdateState",
      s = "SetBroadcast",
      u = "UpdateTab",
      c = "UpdateTabByThreadKey",
      d = {
        SetBroadcast: s,
        UpdateState: l,
        UpdateTab: u,
        UpdateTabByThreadKey: c,
        UpsertTab: e,
      },
      m = "ChatTab",
      p = "ComposeTab",
      _ = { ChatTab: m, ComposeTab: p },
      f = new Map(),
      g = {
        focusedTabId: void 0,
        mediaViewerOpenWatermark: -1,
        nextTabId: 0,
        shouldBroadcastUpdates: !1,
        tabs: f,
      };
    ((i.MWChatStateActionsType = d),
      (i.MWChatStateTabType = _),
      (i.emptyMWChatState = g));
  },
  66,
);
