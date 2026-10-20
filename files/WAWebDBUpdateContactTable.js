__d(
  "WAWebDBUpdateContactTable",
  ["WAWebLidAwareContactsDB", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebWidToJid").widToUserJid(e);
      return r("WAWebLidAwareContactsDB").merge(n, t, { usePropsFilter: !0 });
    }
    l.updateContactTable = e;
  },
  98,
);
