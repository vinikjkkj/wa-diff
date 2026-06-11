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
      c = { isSuccess: !1 };
    function d(e, t) {
      var r, a;
      if (!o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled())
        return (s || (s = n("Promise"))).resolve(c);
      var i =
          (r = o("WAWebLidMigrationUtils").toLid(e)) == null ? void 0 : r.user,
        l = (a = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : a.user;
      return m(l, i, t);
    }
    function m(e, t, n) {
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
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_whatsapp_smb_maiba_status_update;
                      if ((t == null ? void 0 : t.success) === !0) {
                        var n = t.update_timestamp_ms,
                          r = n != null && n !== "" ? Number(n) : null;
                        return {
                          isSuccess: !0,
                          updateTimestampMs:
                            r != null && Number.isFinite(r) ? r : null,
                        };
                      }
                      return c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    l.changeAiReplyStatus = d;
  },
  98,
);
