__d(
  "MpsEphemeralCleaner",
  ["MAWLoggerUtils", "MAWMsgCleaner", "MWFBLogger", "MpsErrors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = o("MWFBLogger")
        .MWLogger()
        .tags([
          o("MAWLoggerUtils").Tag.Ephemeral,
          o("MAWLoggerUtils").Tag.MsgCleaner,
          o("MAWLoggerUtils").Tag.CleanerTimestamp,
          "purgeDeletions",
        ]);
    function c(e) {
      s == null &&
        (s = new (o("MAWMsgCleaner").MsgCleaner)(
          e,
          o("MAWMsgCleaner").CLEANER_TYPE.EPHEMERAL,
        ));
    }
    function d(t) {
      if (s == null)
        throw o("MpsErrors").MpsErrors.error(
          "used_before_init",
          "Trying to add new ephemeral timestamp before the cleaner is initialized!",
        );
      (u.DEBUG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "EphemeralCleaner: Adding timestamps for expiry(",
            ")",
          ])),
        t,
      ),
        s.update(t));
    }
    function m() {
      return s;
    }
    function p() {
      s = null;
    }
    ((l.startMpsEphemeralCleaner = c),
      (l.addNewMpsEphemeralTimestamp = d),
      (l.getEphemeralCleaner_FOR_TESTING_ONLY = m),
      (l.resetEphemeralCleaner_FOR_TESTING_ONLY = p));
  },
  98,
);
