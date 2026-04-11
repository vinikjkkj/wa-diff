__d(
  "WAWebSystemMessagePluginRenderPreviewIconRegistry",
  ["WAWebRenderCallLogPreviewIcon"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        {
          type: "call_log",
          subtype: "miss",
          renderPreviewIcon: (e = r("WAWebRenderCallLogPreviewIcon")),
        },
        { type: "call_log", subtype: "miss_group", renderPreviewIcon: e },
        { type: "call_log", subtype: "miss_group_video", renderPreviewIcon: e },
        { type: "call_log", subtype: "miss_video", renderPreviewIcon: e },
        { type: "call_log", subtype: void 0, renderPreviewIcon: e },
        { type: "gp2", subtype: "add", renderPreviewIcon: null },
        {
          type: "gp2",
          subtype: "member_share_group_history_mode",
          renderPreviewIcon: null,
        },
      ];
    l.default = s;
  },
  98,
);
