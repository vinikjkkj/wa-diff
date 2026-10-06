__d(
  "WAWebEventUnrespondedParticipants",
  ["WAWebBotUtils", "WAWebLidMigrationUtils", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.filter(Boolean).filter(function (e) {
        return (
          !s(e.id) &&
          !t.some(function (t) {
            var n = t.sender;
            return r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(n, e.id),
            );
          })
        );
      });
    }
    function s(e) {
      return e.isFbidBot() && !o("WAWebBotUtils").isAnyMetaAiBot(e);
    }
    l.getUnrespondedEventParticipants = e;
  },
  98,
);
