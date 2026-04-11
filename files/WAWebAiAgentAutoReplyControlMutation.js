__d(
  "WAWebAiAgentAutoReplyControlMutation",
  [
    "Promise",
    "WAWebAiAgentAutoReplyControlMutation.graphql",
    "WAWebBizAiAgentGating",
    "WAWebFetchAdAccountToken",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebAiAgentAutoReplyControlMutation.graphql")),
      c = { isSuccess: !0 },
      d = { isSuccess: !1 };
    function m(e, t) {
      var r, a;
      if (!o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled())
        return (s || (s = n("Promise"))).resolve(d);
      var i = e.isLid()
          ? e.user
          : (r = o("WAWebLidMigrationUtils").toLid(e)) == null
            ? void 0
            : r.user,
        l = e.isRegularUserPn()
          ? e.user
          : (a = o("WAWebLidMigrationUtils").toPn(e)) == null
            ? void 0
            : a.user;
      return p(l, i, t);
    }
    function p(e, t, n) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (a) {
          return a.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      u,
                      {
                        consumer_lid: t != null ? t : "",
                        phone_number: e != null ? e : "",
                        thread_status: n,
                      },
                      { environmentType: "facebook", accessToken: a.token },
                    )
                    .then(function (e) {
                      var t,
                        n =
                          e == null ||
                          (t = e.xfb_whatsapp_smb_maiba_status_update) == null
                            ? void 0
                            : t.success;
                      return n === !0 ? c : d;
                    })
                    .catch(function (e) {
                      return d;
                    });
                })
            : d;
        });
    }
    l.changeAiReplyStatus = m;
  },
  98,
);
