__d(
  "logMarketingMessagesRemovedWithWhatsApp",
  [
    "AdsInterfacesLogger",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementRawSpecUtils",
    "AdsPlacementUtils",
    "AdsScopeUtils",
    "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return e.map(function (e) {
        var r, o;
        return {
          campaignID: e,
          isNew:
            (r = (o = n.get(e)) == null ? void 0 : o.isNew) != null ? r : !1,
          spec: t(e),
        };
      });
    }
    function s(e) {
      var t,
        n = e.campaigns,
        a = e.hostID,
        i = n.filter(function (e) {
          var t = e.spec;
          return (
            t != null &&
            o("AdsPlacementAPISpecReaderUtils").isActivePosition(
              t,
              "whatsapp",
              "marketing_messages",
            )
          );
        });
      if (i.length !== 0) {
        var l = JSON.stringify({
          newCampaignIDs: i
            .filter(function (e) {
              var t = e.isNew;
              return t;
            })
            .map(function (e) {
              var t = e.campaignID;
              return t;
            }),
        });
        r("AdsInterfacesLogger").log({
          eventName: "marketing_messages_placement_removed_with_whatsapp",
          data:
            ((t = {}),
            (t.ad_account_id = o("AdsScopeUtils").getSelectedAccountID()),
            (t.object_ids = i.map(function (e) {
              var t = e.campaignID;
              return t;
            })),
            (t.source = a),
            (t.subsequent_data = l),
            t),
        });
      }
    }
    function u(e) {
      var t, n;
      return (t =
        e == null || (n = e.whatsapp_positions) == null
          ? void 0
          : n.includes("marketing_messages")) != null
        ? t
        : !1;
    }
    function c(e) {
      var t = e.appliedSoftOptOutSpecByCampaignID,
        n = e.campaignIDs,
        r = e.initialSoftOptOutSpecs,
        o = r.length === n.length;
      return new Map(
        n.map(function (e, n) {
          var a;
          return [e, (a = t.get(e)) != null ? a : o ? r[n] : r[0]];
        }),
      );
    }
    function d(e) {
      var t,
        n = e.campaignIDs,
        a = e.hostID,
        i = e.nextSoftOptOutSpec,
        l = e.previousSoftOptOutSpecByCampaignID,
        s = u(i),
        c = n.filter(function (e) {
          return u(l.get(e)) !== s;
        });
      c.length !== 0 &&
        r("AdsInterfacesLogger").log({
          eventName: "marketing_messages_limited_spend_changed",
          data:
            ((t = {}),
            (t.ad_account_id = o("AdsScopeUtils").getSelectedAccountID()),
            (t.object_ids = c),
            (t.action_type = s ? "ADDED" : "REMOVED"),
            (t.source = a),
            t),
        });
    }
    function m(e) {
      var t,
        n = e.campaignIDs,
        r = e.currentSoftOptOutSpec,
        o = e.dispatchChange,
        a = e.hostID,
        i = e.previousSoftOptOutSpecByCampaignID,
        l = e.updatedSoftOptOutSpec,
        s = (t = l != null ? l : r) != null ? t : {};
      return (
        d({
          campaignIDs: n,
          hostID: a,
          nextSoftOptOutSpec: s,
          previousSoftOptOutSpecByCampaignID: i,
        }),
        o(s),
        s
      );
    }
    function p(e, t, n) {
      return e != null &&
        o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(e)
        ? "automatic"
        : u(n)
          ? "limited_spend"
          : t != null &&
              o("AdsPlacementAPISpecReaderUtils").isActivePosition(
                t,
                "whatsapp",
                "marketing_messages",
              )
            ? "configured"
            : "off";
    }
    function _(e, t) {
      switch (t) {
        case "switch_to_manual":
          return r("AdsPlacementUtils").getDefaultCampaignPlacement(
            babelHelpers.extends({}, e),
          );
        case "untick_messaging_group":
        case "untick_mm_position":
        case "untick_whatsapp_platform":
          return null;
      }
    }
    function f(e) {
      var t = e.campaignIDs,
        n = e.eligibilityInformationMap,
        a = e.hasSubscriberPool,
        i = e.hostID,
        l = e.loggedStateChanges,
        s = e.rawEligibilityInformationMap,
        u = e.route;
      o(
        "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
      ).isAdAccountEligibleForMessageMarketingLiquidity() &&
        (((u === "untick_messaging_group" || u === "untick_mm_position") &&
          !o(
            "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
          ).isAdAccountEligibleForMarketingMessagesMessageOnly()) ||
          t.forEach(function (e) {
            var t,
              c,
              d,
              m = n.get(e);
            if (m != null) {
              var f = (t = l.get(m)) != null ? t : new Set();
              if (!f.has(u)) {
                var g = p(
                    (c = s.get(e)) == null ? void 0 : c.spec,
                    m.spec,
                    m.softOptOutSpec,
                  ),
                  h = _(m, u),
                  y = p(h, h, m.softOptOutSpec);
                g !== y &&
                  (l.set(m, f.add(u)),
                  r("AdsInterfacesLogger").log({
                    eventName: "marketing_messages_adset_state_changed",
                    data:
                      ((d = {}),
                      (d.ad_account_id =
                        o("AdsScopeUtils").getSelectedAccountID()),
                      (d.campaign_id = e),
                      (d.old_value = g),
                      (d.new_value = y),
                      (d.action_type = u),
                      (d.source = i),
                      (d.subsequent_data = JSON.stringify({
                        has_subscriber_pool: a,
                        is_mm_active_by_default:
                          m.isWhatsAppMarketingMessagesActiveByDefault === !0,
                      })),
                      d),
                  }));
              }
            }
          }));
    }
    ((l.getCampaignsForWhatsAppRemovalLog = e),
      (l.logMarketingMessagesRemovedWithWhatsApp = s),
      (l.getPreviousSoftOptOutSpecByCampaignID = c),
      (l.logMarketingMessagesLimitedSpendChanged = d),
      (l.applyPlacementSoftOptOutChangeWithLogging = m),
      (l.logMarketingMessagesCampaignStateChanged = f));
  },
  98,
);
