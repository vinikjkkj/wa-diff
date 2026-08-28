__d(
  "AdsDraftFragmentUtils",
  [
    "invariant",
    "AdAsyncRequestStatus",
    "AdsDraftFragmentDataManager",
    "AdsDraftFragmentRecord",
    "AdsDraftSelectionStore",
    "WebApiApplication",
    "adsCastToAdsApplicationID",
    "adsDraftFragmentValuesFromObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new Set([
        (e = r("AdAsyncRequestStatus")).INITIAL,
        e.IN_PROGRESS,
        e.PENDING_DEPENDENCY,
        e.PROCESS_BY_EVENT_PROCESSOR,
        e.PROCESS_BY_AD_ASYNC_ENGINE,
      ]),
      c = "add";
    function d(e, t, n, a) {
      e || s(0, 5713);
      var i = t.adgroups,
        l = t.campaignGroup,
        u = t.campaigns,
        d = o("WebApiApplication").getClientID(),
        m = r("AdsDraftSelectionStore").getOrThrowForCurrentApp(e),
        _ = u.map(function (e) {
          var t = p({
            draftID: m,
            objectType: "ad_set",
            values: e,
            source: a,
            action: c,
          }).toAPI();
          return babelHelpers.extends({}, t, { validate: n });
        }),
        f = { campaigns: _ };
      if (l != null && l.id == null) {
        var g = p({
          draftID: m,
          objectType: "campaign",
          values: l,
          source: a,
          action: c,
        }).toAPI();
        f = babelHelpers.extends({}, f, {
          campaignGroup: babelHelpers.extends({}, g, { validate: n }),
        });
      } else f = babelHelpers.extends({}, f, { campaignGroup: null });
      if (i != null) {
        var h = i.map(function (e) {
          var t = p({
            draftID: m,
            objectType: "ad",
            values: e,
            source: a,
            action: c,
          }).toAPI();
          return babelHelpers.extends({}, t, { validate: n });
        });
        f = babelHelpers.extends({}, f, { adgroups: h });
      } else f = babelHelpers.extends({}, f, { adgroups: null });
      return r("AdsDraftFragmentDataManager")
        .createMultiObjects(m, f, r("adsCastToAdsApplicationID")(d))
        .then(function (e) {
          var t = e.campaign_group_object_id;
          t || s(0, 84651);
          var n = e.campaign_object_ids;
          n.forEach(function (e) {
            return s(!!e, "Expected campaignObjectID to be returned");
          });
          var r = e.adgroup_ids,
            o = e.adgroup_object_ids;
          return (
            o == null ||
              o.forEach(function (e) {
                return s(!!e, "Expected adgroupObjectID to be returned");
              }),
            {
              campaignGroupFragmentID: e.campaign_group_id,
              campaignGroupObjectID: t,
              campaignFragmentIDs: e.campaign_ids,
              campaignObjectIDs: n,
              adgroupFragmentIDs: r != null ? r : [],
              adgroupObjectIDs: o != null ? o : [],
            }
          );
        });
    }
    function m(e, t, n, a, i, l) {
      (i === void 0 && (i = "add"), t.account_id || s(0, 5713));
      var u = o("WebApiApplication").getClientID(),
        c =
          l != null
            ? l
            : r("AdsDraftSelectionStore").getOrThrowForCurrentApp(t.account_id),
        d = p({ draftID: c, objectType: e, values: t, source: a, action: i });
      return r("AdsDraftFragmentDataManager")
        .create(
          c,
          babelHelpers.extends({}, d.toAPI(), { validate: n }),
          r("adsCastToAdsApplicationID")(u),
        )
        .then(function (e) {
          var t = e.ad_object_id;
          return (t || s(0, 5714), { fragmentID: e.id, objectID: t });
        });
    }
    function p(e) {
      var t = e.accountID,
        n = e.action,
        o = e.draftID,
        a = e.objectType,
        i = e.source,
        l = e.values;
      return a === "campaign" && l.checkout_action
        ? new (r("AdsDraftFragmentRecord"))({
            accountID: t || l.account_id,
            action: n,
            checkoutAction: l.checkout_action,
            draftID: o,
            objectID: l.object_id,
            objectType: a,
            parentAdObjectID: l.parentAdObjectID,
            source: i,
            values: r("adsDraftFragmentValuesFromObject")(l),
          })
        : new (r("AdsDraftFragmentRecord"))({
            accountID: t || l.account_id,
            action: n,
            draftID: o,
            objectType: a,
            objectID: l.object_id,
            parentAdObjectID: l.parentAdObjectID,
            source: i,
            values: r("adsDraftFragmentValuesFromObject")(l),
          });
    }
    ((l.PENDING_STATUSES = u),
      (l.createMultiFragments = d),
      (l.createFragment = m));
  },
  98,
);
