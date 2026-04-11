__d(
  "WAWebUserPrefsSettingChangeHandler",
  [],
  function (t, n, r, o, a, i) {
    var e = null,
      l = null;
    function s(t) {
      e = t;
    }
    function u(t, n) {
      e == null || e(t, n);
    }
    function c(e) {
      l = e;
    }
    function d(e, t) {
      l == null || l(e, t);
    }
    ((i.registerSettingChangeHandler = s),
      (i.notifySettingChangeHandler = u),
      (i.registerUserSettingChangeHandler = c),
      (i.notifyUserSettingChangeHandler = d));
  },
  66,
);
