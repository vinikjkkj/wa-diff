__d(
  "WAWebPhoneNumberSharingSettingsRequests",
  ["WAPromiseQueue"],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WAPromiseQueue").PromiseQueue)(),
      s = !1;
    function u(t) {
      return e.enqueue(function () {
        return ((s = !1), t());
      });
    }
    function c() {
      s = !0;
    }
    function d() {
      return s;
    }
    ((l.enqueuePhoneNumberSharingSettingsRequest = u),
      (l.invalidatePhoneNumberSharingSettings = c),
      (l.isPhoneNumberSharingSettingsInvalidated = d));
  },
  98,
);
