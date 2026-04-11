__d(
  "WAWebPttComposerRecordingSessionGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebRecordingSessionStateEnum"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createRecordingSessionCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("exceedsMinDuration"),
      p = c("recordingState"),
      _ = u(
        function (e) {
          var t = e[0];
          return (
            t ===
            o("WAWebRecordingSessionStateEnum").RecordingSessionState.RECORDING
          );
        },
        [p],
      ),
      f = c("isViewOnce");
    ((l.clearRecordingSessionGetterCacheFor = d),
      (l.getExceedsMinDuration = m),
      (l.getIsRecording = _),
      (l.getIsViewOnce = f));
  },
  98,
);
