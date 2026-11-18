__d(
  "WAWebChatListVisibilityUtils",
  ["WAWebDetectedOutcomeLabelConstants", "WAWebLeadListConstants"],
  function (t, n, r, o, a, i, l) {
    var e = 2;
    function s(e) {
      var t = new Set([
          e.UNREAD,
          e.GROUPS,
          e.FAVORITES,
          e.COMMUNITY,
          e.MENTIONS_AND_REPLIES,
        ]),
        n = function (n) {
          return n != null && t.has(n);
        };
      return {
        isBuiltInList: n,
        isVisibleNamedChatList: function (r) {
          return (
            r.name != null &&
            r.name !== "" &&
            r.isActive !== !1 &&
            !n(r.type) &&
            r.type !== e.SERVER_ASSIGNED &&
            r.type !== e.CHANNELS &&
            r.type !== e.AI_HANDOFF &&
            r.type !== e.AI_RESPONDING &&
            r.predefinedId !==
              o("WAWebLeadListConstants").LEGACY_LEAD_LIST_PREDEFINED_ID
          );
        },
      };
    }
    function u(t) {
      return t ===
        o("WAWebDetectedOutcomeLabelConstants").DO_NEW_ORDER_PREDEFINED_ID
        ? e
        : t === o("WAWebDetectedOutcomeLabelConstants").DO_LEAD_PREDEFINED_ID
          ? o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
          : null;
    }
    ((l.NEW_ORDER_LIST_PREDEFINED_ID = e),
      (l.createChatListVisibilityPolicy = s),
      (l.getManualChatListPredefinedId = u));
  },
  98,
);
