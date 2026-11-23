__d(
  "MAIBAIGBoostLaunchSource",
  ["MAIBAChatAppStore"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("MAIBAChatAppStore").dispatch({ igBoostLoggingSource: e });
    }
    function s() {
      var e,
        t = o("MAIBAChatAppStore").getState();
      return t.isMAIBAChatAppOpen && (e = t.igBoostLoggingSource) != null
        ? e
        : null;
    }
    ((l.updateMAIBAIGBoostLaunchSource = e),
      (l.getMAIBAIGBoostLaunchSource = s));
  },
  98,
);
