__d(
  "WAHandleChatStateProtocol",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return (
        e.name === "Paused"
          ? (t = "idle")
          : (e.name,
            (t =
              e.value.composingMedia === "audio"
                ? "recording_audio"
                : "typing")),
        t
      );
    }
    i.parseChatStatus = e;
  },
  66,
);
