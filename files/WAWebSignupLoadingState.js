__d(
  "WAWebSignupLoadingState",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = "change",
      s = new Set(),
      u = new (r("WAWebEventEmitter"))();
    function c(t, n) {
      var r;
      (n ? ((r = !s.has(t)), r && s.add(t)) : (r = s.delete(t)),
        r && u.trigger(e));
    }
    function d(e) {
      return s.has(e);
    }
    function m() {
      return u;
    }
    var p = e;
    ((l.setSignupLoading = c),
      (l.isSignupLoading = d),
      (l.getSignupLoadingEmitter = m),
      (l.SIGNUP_LOADING_CHANGE_EVENT = p));
  },
  98,
);
