__d(
  "WASmaxOutMessagePublishBizRolesMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bizHostStorage,
        n = e.bizActualActors,
        r = e.bizPrivacyModeTs,
        a = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("biz", {
            host_storage: o("WAWap").INT(t),
            actual_actors: o("WAWap").INT(n),
            privacy_mode_ts: o("WAWap").INT(r),
          }),
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizRolesMixin = s;
  },
  98,
);
