__d(
  "WAWebChannelVideoServerTranscodeGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_channel_video_server_transcode_upload",
      );
    }
    l.isChannelVideoServerTranscodeUploadEnabled = e;
  },
  98,
);
