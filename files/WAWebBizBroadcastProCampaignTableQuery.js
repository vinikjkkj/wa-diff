__d(
  "WAWebBizBroadcastProCampaignTableQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignTableQuery.graphql",
    "WAWebBizBroadcastProDataSharingConsentState",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastProCampaignTablePagination",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProCampaignTableQuery.graphql"));
    function d(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(3),
        a = e.children,
        i = e.queryRef,
        l = o("CometRelay").usePreloadedQuery(c, i),
        s =
          (t = (n = l.viewer) == null ? void 0 : n.backing_waba) != null
            ? t
            : null,
        u;
      return (
        r[0] !== a || r[1] !== s
          ? ((u = a(s)), (r[0] = a), (r[1] = s), (r[2] = u))
          : (u = r[2]),
        u
      );
    }
    function m(e) {
      var t,
        n,
        r,
        a,
        i = o("react-compiler-runtime").c(6),
        l = e.children,
        s = e.queryRef,
        u = o("CometRelay").usePreloadedQuery(c, s),
        d =
          (t = u.viewer) == null || (t = t.backing_waba) == null
            ? void 0
            : t.owner_business,
        m = d == null ? void 0 : d.id,
        p =
          (n = u.viewer) == null || (n = n.backing_waba) == null
            ? void 0
            : n.name,
        _;
      if (
        i[0] !==
          (d == null ||
          (r = d.marketing_message_whatsapp_event_sharing_consent) == null
            ? void 0
            : r.marketing_message_optimization_consent_status) ||
        i[1] !== l ||
        i[2] !==
          ((a = u.xfb_whatsapp_bb_pro) == null ||
          (a = a.default_subscriber_pool) == null
            ? void 0
            : a.id) ||
        i[3] !== m ||
        i[4] !== p
      ) {
        var f, g, h, y, C;
        ((_ = l({
          businessID: m,
          customerBaseName: p,
          isDataSharingEnabled: o(
            "WAWebBizBroadcastProDataSharingConsentState",
          ).isBizBroadcastProDataSharingEnabled(
            d == null ||
              (f = d.marketing_message_whatsapp_event_sharing_consent) == null
              ? void 0
              : f.marketing_message_optimization_consent_status,
          ),
          subscriberPoolID:
            (g =
              (h = u.xfb_whatsapp_bb_pro) == null ||
              (h = h.default_subscriber_pool) == null
                ? void 0
                : h.id) != null
              ? g
              : null,
        })),
          (i[0] =
            d == null ||
            (y = d.marketing_message_whatsapp_event_sharing_consent) == null
              ? void 0
              : y.marketing_message_optimization_consent_status),
          (i[1] = l),
          (i[2] =
            (C = u.xfb_whatsapp_bb_pro) == null ||
            (C = C.default_subscriber_pool) == null
              ? void 0
              : C.id),
          (i[3] = m),
          (i[4] = p),
          (i[5] = _));
      } else _ = i[5];
      return _;
    }
    ((l.useWAWebBizBroadcastProCampaignTablePagination = r(
      "useWAWebBizBroadcastProCampaignTablePagination",
    )),
      (l.proCampaignTableQuery = c),
      (l.WAWebBizBroadcastProCampaignTableQueryReader = d),
      (l.WAWebBizBroadcastProHomeQueryReader = m));
  },
  98,
);
