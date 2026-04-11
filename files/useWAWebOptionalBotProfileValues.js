__d(
  "useWAWebOptionalBotProfileValues",
  ["WAWebBotProfileCollection", "useWAWebCollectionValues"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return (n = o("useWAWebCollectionValues").useOptionalCollectionValues(
        o("WAWebBotProfileCollection").BotProfileCollection,
        e,
        t,
      )) != null
        ? n
        : [];
    }
    l.useOptionalBotProfileValues = e;
  },
  98,
);
