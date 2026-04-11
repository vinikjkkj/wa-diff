__d(
  "WAWebBroadcastNotification.react",
  [
    "WAWebFormatBroadcastNotification",
    "WAWebMsgGetters",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getSubtype,
            o("WAWebMsgGetters").getRecipients,
          ]),
          (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[1],
        l = a[2];
      if (i === "create") {
        var s;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = o(
                "WAWebFormatBroadcastNotification",
              ).getAudienceCreateMessage()),
              (t[1] = s))
            : (s = t[1]),
          s
        );
      } else if (i === "add") {
        var u;
        return (
          t[2] !== l
            ? ((u = o(
                "WAWebFormatBroadcastNotification",
              ).getBroadcastAddMessage(l)),
              (t[2] = l),
              (t[3] = u))
            : (u = t[3]),
          u
        );
      } else if (i === "remove") {
        var c;
        return (
          t[4] !== l
            ? ((c = o(
                "WAWebFormatBroadcastNotification",
              ).getBroadcastRemoveMessage(l)),
              (t[4] = l),
              (t[5] = c))
            : (c = t[5]),
          c
        );
      }
      return null;
    }
    l.default = e;
  },
  98,
);
