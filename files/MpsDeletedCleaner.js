__d(
  "MpsDeletedCleaner",
  ["MAWMsgCleaner", "MpsErrors", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u(e) {
      s == null &&
        (s = new (o("MAWMsgCleaner").MsgCleaner)(
          e,
          o("MAWMsgCleaner").CLEANER_TYPE.UNSEND,
        ));
    }
    function c(t) {
      if (s == null)
        throw o("MpsErrors").MpsErrors.error(
          "used_before_init",
          "Trying to add new MpsDeletedTimestamp before the cleaner is initialized!",
        );
      (o("WALogger").DEV(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "MpsDeletedCleaner: Adding timestamps (",
            ")",
          ])),
        t,
      ),
        s.update(t));
    }
    function d() {
      return s;
    }
    function m() {
      s = null;
    }
    ((l.startMpsDeletedCleaner = u),
      (l.addNewMpsDeletedTimestamp = c),
      (l.getMpsDeletedCleaner_FOR_TESTING_ONLY = d),
      (l.resetMpsDeletedCleaner_FOR_TESTING_ONLY = m));
  },
  98,
);
