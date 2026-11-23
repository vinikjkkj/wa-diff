__d(
  "WAWebOpenStatusMediaFromFiles",
  [
    "WAWebCmd",
    "WAWebLogStatusPosterActions",
    "WAWebOpenStatusMediaComposer.react",
    "WAWebStatusPosterActionsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new (o(
        "WAWebStatusPosterActionsLogger",
      ).StatusPosterActionsLogger)();
      o("WAWebCmd").Cmd.onStatusPostingFlow();
      var r = o("WAWebOpenStatusMediaComposer.react").openStatusMediaComposer({
        attachments: function () {
          return e().map(function (e) {
            return { file: e };
          });
        },
        onReady: t.onReady,
        onDispose: t.onDispose,
        statusPosterActionsLogger: n,
      });
      return (
        n.logMediaPickerMediaSelected(
          o("WAWebLogStatusPosterActions").STATUS_CONTENT_SOURCE.GALLERY,
        ),
        r
      );
    }
    l.openStatusMediaFromFiles = e;
  },
  98,
);
