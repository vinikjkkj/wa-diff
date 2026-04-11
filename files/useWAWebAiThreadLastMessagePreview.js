__d(
  "useWAWebAiThreadLastMessagePreview",
  [
    "WAWebChatModelDerivedMethods",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
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
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        r("useWAWebEventTargetValue")(e, "change:msgsChanged", n)
      );
    }
    l.default = e;
  },
  98,
);
