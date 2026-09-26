__d(
  "CometAdsProductLogger",
  [
    "AdsExtremeGapUtils",
    "CometAdsProductLoggingFalcoEvent",
    "CometFeedUnitStatusTrackingUtils",
    "WebSession",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "SPONSORED",
      s = "comet.home",
      u = -1;
    function c(t) {
      var n = t.adId,
        o = t.csp,
        a = t.cts,
        i = t.endPoint,
        l = t.getFeedUnitStatusList,
        s = t.hba,
        u = t.isv,
        c = t.minGapRule,
        m = t.minGapType,
        p = t.sessionKey,
        _ = t.tracking,
        f = t.vp;
      m !== e ||
        c == null ||
        n == null ||
        (r("CometAdsProductLoggingFalcoEvent").logImmediately(function () {
          return {
            ad_id: n,
            csp: o,
            endpoint: i,
            event: "impression",
            hba: s,
            isv: u,
            min_gap_shape: { min_gap_rule: c.toString(), min_gap_type: m },
            session_key: p,
            timestamp: a,
            tracking: _,
            vp: f,
          };
        }),
        d({
          adId: n,
          csp: o,
          cts: a,
          endPoint: i,
          getFeedUnitStatusList: l,
          hba: s,
          isv: u,
          minGapRule: c,
          minGapType: m,
          sessionKey: p,
          tracking: _,
          vp: f,
        }));
    }
    function d(e) {
      var t = e.adId,
        n = e.csp,
        a = e.cts,
        i = e.endPoint,
        l = e.getFeedUnitStatusList,
        s = e.hba,
        u = e.isv,
        c = e.minGapRule,
        d = e.minGapType,
        m = e.sessionKey,
        p = e.tracking,
        _ = e.vp;
      if (!(l == null || n == null)) {
        var f = l(),
          g = o(
            "CometFeedUnitStatusTrackingUtils",
          ).getFeedUnitsWithOriginalPosition(
            f,
            o("CometFeedUnitStatusTrackingUtils").isCurrentlyVisible,
          ),
          h = parseInt(n, 10),
          y = g.slice(0, h - 1),
          C = o("AdsExtremeGapUtils").shouldApplyExtremeGapProtection(y, 5);
        if (C) {
          var b = h - o("AdsExtremeGapUtils").getLastSponsoredStoryPosition(y);
          r("CometAdsProductLoggingFalcoEvent").logImmediately(function () {
            return {
              ad_id: t,
              csp: n,
              endpoint: i,
              event: "extreme_experience",
              hba: s,
              isv: u,
              min_gap_shape: {
                min_gap_rule: c != null ? c.toString() : null,
                min_gap_type: d,
              },
              product_features:
                b <= o("AdsExtremeGapUtils").EXTREME_GAP_DISTANCE
                  ? "not protected"
                  : "protected",
              session_key: m,
              timestamp: a,
              tracking: p,
              vp: _,
            };
          });
        }
      }
    }
    function m(t) {
      var n = t.adId,
        a = t.adRequestId,
        i = t.dedupKey,
        l = t.feedSessionID,
        c = t.minGapFromTop,
        d = t.slotLossReason,
        m = t.slotOutcome,
        p = t.slotPosition,
        _ = t.sponsoredAvailable;
      l !== u &&
        r("CometAdsProductLoggingFalcoEvent").log(function () {
          return {
            ad_id: n,
            ad_request_id: a != null ? String(a) : null,
            csp: String(p),
            dedup_key: i,
            endpoint: s,
            event: "slot_attempt",
            hba: null,
            isv: null,
            min_gap_from_top: String(c),
            min_gap_shape: { min_gap_rule: null, min_gap_type: e },
            session_key: o("WebSession").getId(),
            slot_loss_reason: d,
            slot_outcome: m,
            sponsored_available: String(_),
            surface_session_id: String(l),
            timestamp: null,
            tracking: null,
            vp: null,
          };
        });
    }
    function p(e) {
      var t = e.endPoint,
        n = t === void 0 ? s : t,
        a = e.minGapRule,
        i = e.minGapType,
        l = Date.now(),
        u = Math.floor(l / 1e3);
      r("CometAdsProductLoggingFalcoEvent").logImmediately(function () {
        return {
          ad_id: null,
          csp: "0",
          endpoint: n,
          event: "impression",
          hba: !1,
          isv: null,
          min_gap_shape: {
            min_gap_rule: a != null ? a.toString() : null,
            min_gap_type: i,
          },
          product_features: "highest_position_ad_from_multifeed",
          session_key: o("WebSession").getId(),
          timestamp: u.toString(),
          tracking: null,
          vp: null,
        };
      });
    }
    ((l.NO_FEED_SESSION = u),
      (l.logCometAdsProductGapRule = c),
      (l.logCometAdsProductGapRuleExtremeExperience = d),
      (l.logCometAdsSlotAttempt = m),
      (l.logCometFeedHighestPositionAd = p));
  },
  98,
);
