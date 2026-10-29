__d(
  "WAWebCustomerManagerDrawerView",
  [
    "fbt",
    "WAWebCustomerManagerListSort",
    "WAWebCustomerManagerProfileQueryPlan",
    "WAWebCustomerManagerSearchUtils",
    "WAWebExternalLink.react",
    "WAWebLabelCollection",
    "WDSIconIcFormatListBulleted.react",
    "WDSIconIcSpaceDashboard.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = "list",
      u = "pipeline",
      c = { direction: "desc", key: "lastMessage" },
      d = [],
      m = [
        {
          value: e,
          label: function () {
            return s._(/*BTDS*/ "List view");
          },
          Icon: r("WDSIconIcFormatListBulleted.react"),
          testid: "customer-manager-view-list",
        },
        {
          value: u,
          label: function () {
            return s._(/*BTDS*/ "Pipeline view");
          },
          Icon: r("WDSIconIcSpaceDashboard.react"),
          testid: "customer-manager-view-pipeline",
        },
      ];
    function p(e) {
      return (
        (e == null ? void 0 : e.key) === c.key &&
        (e == null ? void 0 : e.direction) === c.direction
      );
    }
    function _(e, t, n) {
      var r = [].concat(e).sort(function (e, t) {
        var r, o;
        return (
          ((r = n.get(e.id)) != null ? r : Number.MAX_SAFE_INTEGER) -
          ((o = n.get(t.id)) != null ? o : Number.MAX_SAFE_INTEGER)
        );
      });
      return o("WAWebCustomerManagerListSort").sortContactRowsForDisplay(r, t);
    }
    function f() {
      o("WAWebExternalLink.react").openExternalLink(
        "https://faq.whatsapp.com/1500187031836082",
      );
    }
    function g(e, t) {
      var n;
      if (t !== u)
        return e ===
          o("WAWebCustomerManagerSearchUtils").NO_OTHER_LIST_FILTER_ID
          ? o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID
          : e;
      if (e === o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID)
        return o("WAWebCustomerManagerSearchUtils").NO_OTHER_LIST_FILTER_ID;
      var r =
        e != null
          ? (n = o("WAWebLabelCollection").LabelCollection.get(e)) == null
            ? void 0
            : n.predefinedId
          : null;
      return r != null &&
        o(
          "WAWebCustomerManagerSearchUtils",
        ).BOARD_STRUCTURAL_PREDEFINED_IDS.has(r)
        ? null
        : e;
    }
    ((l.VIEW_LIST = e),
      (l.VIEW_PIPELINE = u),
      (l.UNREAD_CHATS_SORT = c),
      (l.EMPTY_CANDIDATE_LIDS = d),
      (l.MAX_SMALL_CONTACT_COUNT = o(
        "WAWebCustomerManagerProfileQueryPlan",
      ).MAX_DIRECT_PROFILE_CANDIDATES),
      (l.viewItems = m),
      (l.isUnreadChatsSort = p),
      (l.sortExportRows = _),
      (l.openCustomerManagerHelpArticle = f),
      (l.toViewLabelFilter = g));
  },
  226,
);
