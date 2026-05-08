__d(
  "WAWebBizAiExampleResponseUpdateMutation",
  [
    "WAWebBizAiExampleResponseUpdateMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiExampleResponseUpdateMutation.graphql")),
      u = { isSuccess: !0 },
      c = { isSuccess: !1, websiteStatuses: [] };
    function d(e) {
      switch (e) {
        case "DOMAIN_BLOCKLISTED":
        case "EMPTY_URL":
        case "INVALID_URL_FORMAT":
        case "NON_PUBLIC_GOOGLE_SHEET":
        case "NOT_SUPPORTED":
          return e;
        default:
          return null;
      }
    }
    function m(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e)
        n == null ||
          n.website_url == null ||
          t.push({
            isValid: n.is_valid === !0,
            websiteUrl: n.website_url,
            errorCode: d(n.error_code),
          });
      return t;
    }
    function p(e) {
      return { isSuccess: !1, websiteStatuses: m(e) };
    }
    function _(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      s,
                      { input: e },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_update_knowledge;
                      return (t == null ? void 0 : t.success) === !0
                        ? u
                        : p(t == null ? void 0 : t.website_statuses);
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    function f(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      s,
                      { input: { faq: e } },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_update_knowledge;
                      return (t == null ? void 0 : t.success) === !0
                        ? u
                        : p(t == null ? void 0 : t.website_statuses);
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    ((l.updateKnowledge = _), (l.updateExampleResponses = f));
  },
  98,
);
