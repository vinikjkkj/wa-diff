__d(
  "CometProductTagLoggingUtils",
  ["ProductTagPostClickFalcoEvent", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
        "CommerceStorefrontImpressionFalcoEvent",
      ).__setRef("CometProductTagLoggingUtils"),
      s = r("requireDeferred")("CommerceTabFeedImpressionFalcoEvent").__setRef(
        "CometProductTagLoggingUtils",
      ),
      u = "product_tag_on_",
      c = function (t, n, o, a, i, l) {
        r("ProductTagPostClickFalcoEvent").log(function () {
          return {
            ad_id: t,
            component: n,
            funnel_id: o,
            marketplace_surface: a,
            post_id: i,
            referral_code: l,
          };
        });
      },
      d = function (n, r, o, a, i, l, c, d) {
        var t,
          m = _(i, o),
          p = m.analyticsPage,
          f = m.isPageFeed,
          g = m.isTabFeed,
          h = m.isTimeline,
          y = m.surface,
          C = u + ((t = y != null ? y : i) != null ? t : "") + "_" + n,
          b = r != null;
        if (p != null) {
          if (g)
            s.onReady(function (e) {
              e.log(function () {
                var e;
                return {
                  analytics_component: l,
                  analytics_destination_page: a,
                  analytics_feed_type:
                    p === "home_feed" ? "newsfeed" : "unknown",
                  analytics_module: c,
                  analytics_page: p,
                  content_id: n,
                  legacy_referral_code: C,
                  legacy_surface: (e = y != null ? y : i) != null ? e : "",
                  legacy_ui_component: d,
                  referral_surface: "unknown",
                  shopping_session_id: "",
                };
              });
            });
          else if (f || (b && h)) {
            var v = {
              analytics_feed_type: f ? "page" : "profile",
              analytics_module: c,
              analytics_page: p,
              content_id: n,
              referral_surface: "unknown",
              shopping_session_id: "",
            };
            e.onReady(function (e) {
              e.log(function () {
                return babelHelpers.extends({}, v);
              });
            });
          }
        }
      },
      m = function (t) {
        var e;
        return (
          t === "AYMTNotificationChannel"
            ? (e = "aymt_retro_tag_jewel")
            : t === "AYMTEmailChannel"
              ? (e = "aymt_retro_tag_email")
              : t === "AYMTPageAdminMegaphoneV2Channel" ||
                  t === "AYMTPageAdminMegaphoneChannel"
                ? (e = "aymt_retro_tag_megaphone")
                : t === "AYMTUnknownChannel" && (e = "aymt_unknown_channel"),
          e
        );
      },
      p = function (t, n, r, o) {
        switch (t) {
          case "home_feed":
          case "posts_feed":
            return n === 1 && r
              ? "product_details"
              : o
                ? "video_fullscreen"
                : "photo_fullscreen";
          case "video_feed":
            return "video_fullscreen";
          default:
            return "unknown";
        }
      },
      _ = function (t, n) {
        var e = null,
          r = null,
          o = !1,
          a = !1,
          i = !1;
        switch (t) {
          case "NEWSFEED":
            ((e = "home_feed"), (r = "newsfeed"), (o = !0));
            break;
          case "PAGE_TIMELINE":
            ((a = !0), (e = "posts_feed"), (r = "pages_feed"));
            break;
          case "TIMELINE":
            ((i = !0), (e = "posts_feed"), (r = "pages_feed"));
            break;
          default:
            (t != null && t.includes("VIDEO")) || n === "video_home"
              ? ((e = "video_feed"), (r = "video_home"), (o = !0))
              : t != null &&
                t.includes("GROUP") &&
                ((e = null), (r = "group_mall"));
        }
        return {
          analyticsPage: e,
          isPageFeed: a,
          isTabFeed: o,
          isTimeline: i,
          surface: r != null ? r : n,
        };
      };
    ((l.logProductTagPostClick = c),
      (l.logImpressionEventForNewsFeedAndStorefront = d),
      (l.getAYMTChannelName = m),
      (l.getAnalyticsDestinationPage = p),
      (l.getSurface = _));
  },
  98,
);
