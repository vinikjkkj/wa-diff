__d(
  "LSTruncateNotificationSettings",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (e) {
          return t.forEach(t.db.table(175).fetch(), function (e) {
            return e.delete();
          });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSOmnistoreSettingsTruncateNotificationSettingsStoredProcedure"),
      (e.__tables__ = ["notification_settings"]),
      (a.exports = e));
  },
  null,
);
