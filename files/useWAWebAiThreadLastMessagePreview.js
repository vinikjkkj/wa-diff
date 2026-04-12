__d(
  "useWAWebAiThreadLastMessagePreview",
  ["WAWebChatModelDerivedMethods", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("useWAWebEventTargetValue")(
        e,
        "change:msgsChanged",
        function () {
          var t,
            n,
            r = e.msgs;
          return (t =
            (n = r.findLast(
              o("WAWebChatModelDerivedMethods").isPreviewMessage,
            )) != null
              ? n
              : r.last()) != null
            ? t
            : null;
        },
      );
    }
    l.default = e;
  },
  98,
);
