__d(
  "AdsPlacementCopyStrings",
  ["fbt", "Link.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Advantage+ placements"),
      d = s._(/*BTDS*/ "Advantage+ placements"),
      m = s._(/*BTDS*/ "Advantage+ placements (recommended)"),
      p = s._(
        /*BTDS*/ "Your budget will be allocated by Meta's delivery system across multiple placements based on where it's likely to perform best.",
      ),
      _ = s._(/*BTDS*/ "Manual placements"),
      f = s._(
        /*BTDS*/ "Manually choose the places to show your ad. The more placements you select, the more opportunities you'll have to reach your target audience and achieve your business goals.",
      ),
      g = s._(
        /*BTDS*/ "Manually choose the places to show your ad and marketing message. The more placements you select, the more opportunities you'll have to reach your target audience and achieve your business goals.",
      ),
      h = s._(
        /*BTDS*/ "Some ad sets are using images or videos customized for specific placements. {recommendation to allow bulk editing of placements}",
        [
          s._param(
            "recommendation to allow bulk editing of placements",
            u.jsxs("div", {
              children: [
                u.jsx("br", {}),
                s._(
                  /*BTDS*/ "To edit placements for multiple ad sets, please unselect ad sets using images or videos customized for specific placements.",
                ),
              ],
            }),
          ),
        ],
      ),
      y = s._(/*BTDS*/ "Mixed placements"),
      C = s._(/*BTDS*/ "Some ad sets are using different placements."),
      b = function (t) {
        return s._(
          /*BTDS*/ "Ad sets can't be edited together {Error message body}",
          [
            s._param(
              "Error message body",
              u.jsxs("div", { children: [u.jsx("br", {}), t] }),
            ),
          ],
        );
      },
      v = s._(/*BTDS*/ "All devices (recommended)"),
      S = Object.freeze({
        FEED: s._(/*BTDS*/ "Feeds"),
        STORY: s._(/*BTDS*/ "Stories"),
        REELS_OVERLAY: s._(/*BTDS*/ "Overlay and post-loop ads on Reels"),
        STORY_AND_REELS: s._(/*BTDS*/ "Stories and Reels"),
        STORY_STATUS_AND_REELS: s._(/*BTDS*/ "Stories, Status, Reels"),
        STREAM: s._(/*BTDS*/ "In-stream"),
        STREAM_AND_REELS: s._(/*BTDS*/ "In-stream ads for videos and reels"),
        STREAM_AND_REELS_VU: s._(/*BTDS*/ "In-stream ads for reels"),
        MESSAGING: s._(/*BTDS*/ "Messages"),
        MARKETING_MESSAGES: s._(/*BTDS*/ "Marketing messages"),
        CHANNEL: s._(/*BTDS*/ "Channels"),
        CONTEXT: s._(/*BTDS*/ "In-article"),
        EXTERNAL_DISPLAY: s._(/*BTDS*/ "Apps and sites"),
        SEARCH: s._(/*BTDS*/ "Search results"),
        STICKERS: s._(/*BTDS*/ "Stickers"),
        OCULUS: s._(/*BTDS*/ "Oculus"),
        THREADS: s._(/*BTDS*/ "Threads"),
        CONNECTED_TV: s._(/*BTDS*/ "Connected TV"),
        INSTREAM: s._(/*BTDS*/ "In-stream"),
      }),
      R = s._(/*BTDS*/ "Placement selection"),
      L = s._(/*BTDS*/ "Automatic");
    function E(e) {
      return e ? s._(/*BTDS*/ "Collapse") : s._(/*BTDS*/ "Expand");
    }
    var k = s._(
      /*BTDS*/ "This section is not available based on your selection above.",
    );
    function I() {
      var e = "https://www.facebook.com/business/help/1739644726781076";
      return s._(
        /*BTDS*/ "With ad breaks, people in the European Region will sometimes need to view some or all of an ad before they can keep browsing. Ad breaks are available for eligible placements only. {newline}{=m2}",
        [
          s._param("newline", u.jsx("br", {})),
          s._implicitParam(
            "=m2",
            u.jsx(r("Link.react"), {
              href: e,
              children: s._(/*BTDS*/ "Learn More"),
            }),
          ),
        ],
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      var e = "/adsmanager/manage/advertising_settings/account_control";
      return s._(
        /*BTDS*/ "This section is not available because ad breaks have been excluded for all campaigns in {=m1}",
        [
          s._implicitParam(
            "=m1",
            u.jsx(r("Link.react"), {
              href: e,
              children: s._(/*BTDS*/ "Advertising Settings"),
            }),
          ),
        ],
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    var D = s._(/*BTDS*/ "Specific mobile devices & operating systems");
    ((l.AUTO_PLACEMENT_TEXT = c),
      (l.AUTO_PLACEMENT_TEXT_ADVANTAGE_RENAMED_WITH_ICON = d),
      (l.RECOMMENDED_AUTO_PLACEMENT_TEXT = m),
      (l.ADVANTAGE_PLUS_PLACEMENTS_READ_ONLY_EDITOR_DESCRIPTION = p),
      (l.MANUAL_PLACEMENTS_TEXT = _),
      (l.MANUAL_PLACEMENTS_DESCRIPTION = f),
      (l.MANUAL_PLACEMENTS_WITH_MM_DESCRIPTION = g),
      (l.MESSENGE_BODY_SOME_CAMPAIGN_PAC = h),
      (l.MIXED_PLACEMENTS_TEXT = y),
      (l.MIXED_PLACEMENTS_DESCRIPTION = C),
      (l.HIDE_MESSAGE = b),
      (l.DEFAULT_PLACEMENT_DEVICE_PLATFORM_LABEL = v),
      (l.PLACEMENT_POSITION_GROUPS = S),
      (l.PLACEMENT_SELECTION = R),
      (l.PLACEMENT_SELECTION_AUTOMATIC = L),
      (l.EXPAND_AND_COLLAPSE_MESSAGE = E),
      (l.PLACEMENT_FIELD_DISABLED_TOOLTIP_TEXT = k),
      (l.getAdBreaksPlacementHeaderTooltipText = I),
      (l.getAdBreaksPlacementFieldDisabledTooltipText = T),
      (l.PLACEMENT_DEVICES_SECTION_HEADER = D));
  },
  226,
);
