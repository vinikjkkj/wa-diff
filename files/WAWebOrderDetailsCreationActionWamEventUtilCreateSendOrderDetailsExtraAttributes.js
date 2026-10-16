__d(
  "WAWebOrderDetailsCreationActionWamEventUtilCreateSendOrderDetailsExtraAttributes",
  [
    "WAWebChatEphemerality",
    "WAWebOrderDetailsCreationActionWamEventUtilP2MFlow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a,
        i,
        l,
        s = 0,
        u = 0;
      return (
        t.forEach(function (e) {
          e.isCustomItem === !0 ? (s += e.quantity) : (u += e.quantity);
        }),
        {
          currency: r,
          has_additional_charges:
            ((a = n.discount) != null ? a : 0) > 0 ||
            ((i = n.tax) != null ? i : 0) > 0 ||
            ((l = n.shipping) != null ? l : 0) > 0,
          has_ephemeral_messages_turned_on: o(
            "WAWebChatEphemerality",
          ).isEphemeralSettingOn(e),
          num_catalog_items: u,
          num_custom_items: s,
          p2m_flow: o("WAWebOrderDetailsCreationActionWamEventUtilP2MFlow")
            .P2MFlow.ORDER,
        }
      );
    }
    l.createSendOrderDetailsExtraAttributes = e;
  },
  98,
);
