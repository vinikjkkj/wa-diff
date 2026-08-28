__d(
  "MessagePageCTAUtils",
  ["AdsGraphAPI", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("page", e)
        .edge("settings")
        .post({ access_token: t, option: { USERS_CAN_MESSAGE: !0 } });
    }
    function u(t, r) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("page", t)
        .edge("settings")
        .get({ access_token: r })
        .then(function (t) {
          var r;
          return (
            t.data &&
              t.data.some(function (e) {
                if (e.setting === "USERS_CAN_MESSAGE") return ((r = e), !0);
              }),
            r
              ? (e || (e = n("Promise"))).resolve(r.value)
              : (e || (e = n("Promise"))).reject()
          );
        });
    }
    ((l.enableMessaging = s), (l.isMessagingEnabled = u));
  },
  98,
);
