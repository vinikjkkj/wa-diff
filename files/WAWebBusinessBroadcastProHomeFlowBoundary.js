__d(
  "WAWebBusinessBroadcastProHomeFlowBoundary",
  [
    "WAWebBizBroadcastProRecipientNameRestriction",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastProHomeFlowBoundary_query.graphql",
    "WAWebBusinessBroadcastSettingsPanel.react",
    "react",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["proHomeQueryRef"],
      s,
      u,
      c = u || (u = o("react")),
      d =
        s !== void 0
          ? s
          : (s = n("WAWebBusinessBroadcastProHomeFlowBoundary_query.graphql"));
    function m(t) {
      var n,
        a,
        i = t.proHomeQueryRef,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = o("react-relay").useFragment(d, i);
      return c.jsx(
        o("WAWebBusinessBroadcastHomeFlowLoadable")
          .WAWebBusinessBroadcastCoreHomeFlowLoadable,
        babelHelpers.extends({}, l, {
          renderProSettingsPanel: function (t) {
            return c.jsx(
              r("WAWebBusinessBroadcastSettingsPanel.react"),
              babelHelpers.extends({}, t, {
                isProUser: !0,
                proHomeQueryRef: s,
              }),
            );
          },
          omitRecipientNames: o(
            "WAWebBizBroadcastProRecipientNameRestriction",
          ).shouldOmitRecipientNames(
            s == null || (n = s.viewer) == null || (n = n.backing_waba) == null
              ? void 0
              : n.is_custom_param_restricted_for_first_party_paid_messaging,
          ),
          subscriberPoolID:
            s == null ||
            (a = s.xfb_whatsapp_bb_pro) == null ||
            (a = a.default_subscriber_pool) == null
              ? void 0
              : a.id,
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WAWebBusinessBroadcastProHomeFlowBoundary = m));
  },
  98,
);
