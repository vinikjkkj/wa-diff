__d(
  "WAWebBizBroadcastProSubscriberPoolQuery",
  [
    "CometRelay",
    "WAWebBizBroadcastProRecipientNameRestriction",
    "WAWebBizBroadcastProSubscriberPoolQuery.graphql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProSubscriberPoolQuery.graphql"));
    function d(e) {
      return o("CometRelay").loadQuery(
        e,
        c,
        {},
        { fetchPolicy: "network-only" },
      );
    }
    function m(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(4),
        a = e.children,
        i = e.queryRef,
        l = o("CometRelay").usePreloadedQuery(c, i),
        s;
      if (
        r[0] !== a ||
        r[1] !==
          ((t = l.viewer) == null || (t = t.backing_waba) == null
            ? void 0
            : t.is_custom_param_restricted_for_first_party_paid_messaging) ||
        r[2] !==
          ((n = l.xfb_whatsapp_bb_pro) == null ||
          (n = n.default_subscriber_pool) == null
            ? void 0
            : n.id)
      ) {
        var u, d, m, p, _;
        ((s = a({
          omitRecipientNames: o(
            "WAWebBizBroadcastProRecipientNameRestriction",
          ).shouldOmitRecipientNames(
            (u = l.viewer) == null || (u = u.backing_waba) == null
              ? void 0
              : u.is_custom_param_restricted_for_first_party_paid_messaging,
          ),
          subscriberPoolID:
            (d =
              (m = l.xfb_whatsapp_bb_pro) == null ||
              (m = m.default_subscriber_pool) == null
                ? void 0
                : m.id) != null
              ? d
              : null,
        })),
          (r[0] = a),
          (r[1] =
            (p = l.viewer) == null || (p = p.backing_waba) == null
              ? void 0
              : p.is_custom_param_restricted_for_first_party_paid_messaging),
          (r[2] =
            (_ = l.xfb_whatsapp_bb_pro) == null ||
            (_ = _.default_subscriber_pool) == null
              ? void 0
              : _.id),
          (r[3] = s));
      } else s = r[3];
      return s;
    }
    ((l.preloadSubscriberPoolQuery = d),
      (l.WAWebBizBroadcastProSubscriberPoolQueryReader = m));
  },
  98,
);
