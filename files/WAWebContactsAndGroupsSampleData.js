__d(
  "WAWebContactsAndGroupsSampleData",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactsAndGroupsGatingUtils",
    "WAWebEventEmitter",
    "WAWebFrontendContactGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "WAContactsAndGroupsSampleData",
      d = "cg_demo",
      m = new (r("WAWebEventEmitter"))(),
      p = 0;
    function _() {
      return (
        o("WAWebContactsAndGroupsGatingUtils").isContactsAndGroupsEnabled() &&
        r("gkx")("9092")
      );
    }
    function f() {
      return _() ? r("WAWebUserPrefsStore").getUser(c) === !0 || v() : !1;
    }
    function g(e) {
      _() &&
        (e || S(),
        r("WAWebUserPrefsStore").setUser(c, e),
        e && p++,
        m.trigger("change"));
    }
    function h() {
      return p;
    }
    function y(e) {
      if (f()) {
        C();
        return;
      }
      e();
    }
    function C() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Sample data: nothing was changed"),
        }),
      );
    }
    function b() {
      var e = new Set();
      return o("WAWebContactCollection").ContactCollection.filter(function (t) {
        var n,
          r = (n = t.name) != null ? n : t.id.toString();
        return !t.id.isUser() ||
          t.id.isBot() ||
          o("WAWebUserPrefsMeUser").isMeAccount(t.id) ||
          !o("WAWebFrontendContactGetters").getIsMyContact(t) ||
          e.has(r)
          ? !1
          : (e.add(r), !0);
      });
    }
    function v() {
      return new URLSearchParams(window.location.search).get(d) === "1";
    }
    function S() {
      if (v()) {
        var e = new URL(window.location.href);
        (e.searchParams.delete(d),
          window.history.replaceState(window.history.state, "", e.toString()));
      }
    }
    ((l.contactsAndGroupsSampleData = m),
      (l.isSampleDataAllowed = _),
      (l.isSampleDataOn = f),
      (l.switchSampleData = g),
      (l.getSampleDataSession = h),
      (l.openUnlessSampleData = y),
      (l.showSampleDataToast = C),
      (l.getSampleContacts = b));
  },
  226,
);
