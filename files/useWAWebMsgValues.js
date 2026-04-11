__d(
  "useWAWebMsgValues",
  ["WAWebMsgCollection", "useWAWebCollectionValues"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return o("useWAWebCollectionValues").useCollectionValues(
        o("WAWebMsgCollection").MsgCollection,
        e,
        t,
        n,
      );
    }
    function s(e, t, n) {
      return o("useWAWebCollectionValues").useOptionalCollectionValues(
        o("WAWebMsgCollection").MsgCollection,
        e,
        t,
        n,
      );
    }
    ((l.useMsgValues = e), (l.useOptionalMsgValues = s));
  },
  98,
);
