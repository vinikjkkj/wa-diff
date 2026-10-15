__d(
  "WAWebBusinessBroadcastProHomeFlowBoundary",
  [
    "WAWebBizBroadcastProRecipientNameRestriction",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastProHomeFlowBoundary_query.graphql",
    "WAWebBusinessBroadcastSettingsPanel.react",
    "react",
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(12),
        l,
        s;
      i[0] !== t
        ? ((l = t.proHomeQueryRef),
          (s = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = s))
        : ((l = i[1]), (s = i[2]));
      var u = o("react-relay").useFragment(d, l),
        m;
      i[3] !== u
        ? ((m = function (t) {
            return c.jsx(
              r("WAWebBusinessBroadcastSettingsPanel.react"),
              babelHelpers.extends({}, t, {
                isProUser: !0,
                proHomeQueryRef: u,
              }),
            );
          }),
          (i[3] = u),
          (i[4] = m))
        : (m = i[4]);
      var p =
          u == null || (n = u.viewer) == null || (n = n.backing_waba) == null
            ? void 0
            : n.is_custom_param_restricted_for_first_party_paid_messaging,
        _;
      i[5] !== p
        ? ((_ = o(
            "WAWebBizBroadcastProRecipientNameRestriction",
          ).shouldOmitRecipientNames(p)),
          (i[5] = p),
          (i[6] = _))
        : (_ = i[6]);
      var f =
          u == null ||
          (a = u.xfb_whatsapp_bb_pro) == null ||
          (a = a.default_subscriber_pool) == null
            ? void 0
            : a.id,
        g;
      return (
        i[7] !== s || i[8] !== m || i[9] !== _ || i[10] !== f
          ? ((g = c.jsx(
              o("WAWebBusinessBroadcastHomeFlowLoadable")
                .WAWebBusinessBroadcastCoreHomeFlowLoadable,
              babelHelpers.extends({}, s, {
                renderProSettingsPanel: m,
                omitRecipientNames: _,
                subscriberPoolID: f,
              }),
            )),
            (i[7] = s),
            (i[8] = m),
            (i[9] = _),
            (i[10] = f),
            (i[11] = g))
          : (g = i[11]),
        g
      );
    }
    l.WAWebBusinessBroadcastProHomeFlowBoundary = m;
  },
  98,
);
