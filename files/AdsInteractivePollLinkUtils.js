__d(
  "AdsInteractivePollLinkUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSpecUtils",
    "AdsAdgroupWebsiteLinkPostTypeMutators",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsCallToActionTypes",
    "AdsInteractiveComponentConstants",
    "AdsInteractivePollAPISpecWriteUtils",
    "AdsUnifiedCreativeAPIFields",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(e) || n == null
        ? e
        : r
          ? o(
              "AdsAdgroupWebsiteLinkPostTypeMutators",
            ).convertToHasWebsiteLinkFormat(e, t)
          : o(
              "AdsAdgroupWebsiteLinkPostTypeMutators",
            ).convertToHasNoWebsiteLinkFormat(e, t);
    }
    function s(e, t, n) {
      var a,
        i = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e);
      if (i && n != null) {
        var l,
          s =
            e == null ||
            (l = e.creative) == null ||
            (l = l.asset_feed_spec) == null
              ? void 0
              : l.videos;
        return s == null
          ? e
          : s.reduce(function (e, n, a) {
              var i = o("AdsAssetFeedFieldUtils").getAssetInteractivePollSpec(
                  r("immutable").fromJS(n),
                ),
                l = o("AdsAssetFeedFieldUtils").getAssetInteractivePositionSpec(
                  r("immutable").fromJS(n),
                );
              if (i != null) {
                var s = i.set("link_display", t),
                  u = o(
                    "AdsInteractivePollAPISpecWriteUtils",
                  ).constructPollSpecInInteractiveComponentsSpec(
                    s,
                    l ||
                      o("AdsInteractiveComponentConstants")
                        .DEFAULT_POLL_POSITION_SPEC,
                  );
                return r("AdsAdgroupRecordAccessors")
                  .creative.asset_feed_spec.videos.at(a)
                  .interactive_components_spec.set(
                    r("immutable").fromJS({ components: u }),
                    e,
                  );
              }
              return e;
            }, e);
      }
      var u =
        e == null ||
        (a = e.creative) == null ||
        (a = a.interactive_components_spec) == null
          ? void 0
          : a.components;
      if (u == null) return e;
      var c = u.getIn([0, "poll_spec"]),
        d = u.getIn([0, "position_spec"]),
        m = c.set("link_display", t);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.interactive_components_spec.components.set(
        o(
          "AdsInteractivePollAPISpecWriteUtils",
        ).constructPollSpecInInteractiveComponentsSpec(m, d),
        e,
      );
    }
    function u(e) {
      var t,
        n = o("AdsAdgroupSpecUtils").getDisplayURL(e),
        r = null,
        a =
          e == null ||
          (t = e.creative) == null ||
          (t = t.asset_feed_spec) == null
            ? void 0
            : t.link_urls;
      return (
        a != null && (r = a.getIn([0, "display_url"])),
        n == null ? r : n
      );
    }
    function c(e, t) {
      var n,
        a = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e);
      if (a && t != null) {
        var i,
          l =
            e == null ||
            (i = e.creative) == null ||
            (i = i.asset_feed_spec) == null
              ? void 0
              : i.videos;
        return l == null
          ? e
          : l.reduce(function (e, n, a) {
              var i = o("AdsAssetFeedFieldUtils").getAssetInteractivePollSpec(
                  r("immutable").fromJS(n),
                ),
                l = o("AdsAssetFeedFieldUtils").getAssetInteractivePositionSpec(
                  r("immutable").fromJS(n),
                );
              if (i != null) {
                if (i.get("link_display") == null) return e;
                var s = i.delete("link_display"),
                  u = o(
                    "AdsInteractivePollAPISpecWriteUtils",
                  ).constructPollSpecInInteractiveComponentsSpec(
                    s,
                    l ||
                      o("AdsInteractiveComponentConstants")
                        .DEFAULT_POLL_POSITION_SPEC,
                  );
                return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                  e,
                  t,
                  r("AdsUnifiedCreativeAPIFields").videoID,
                  a,
                  "interactive_components_spec",
                  r("immutable").fromJS({ components: u }),
                );
              }
              return e;
            }, e);
      }
      var s =
        e == null ||
        (n = e.creative) == null ||
        (n = n.interactive_components_spec) == null
          ? void 0
          : n.components;
      if (s == null) return e;
      var u = s.getIn([0, "poll_spec"]),
        c = s.getIn([0, "position_spec"]);
      if (u.get("link_display") == null) return e;
      var d = u.delete("link_display");
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.interactive_components_spec.components.set(
        o(
          "AdsInteractivePollAPISpecWriteUtils",
        ).constructPollSpecInInteractiveComponentsSpec(d, c),
        e,
      );
    }
    function d(e, t) {
      var n = null,
        r = e;
      return ((n = u(r)), n != null ? (r = s(r, n, t)) : (r = c(e, t)), r);
    }
    function m(e, t, n) {
      return s(e, r("AdsCallToActionTypes").TYPES[t].text, n);
    }
    function p(e, t) {
      var n = o("AdsAPIAdgroupRecordUtils").getCallToActionType(e, t);
      return r("isTruthy")(n) ? m(e, n, t) : c(e, t);
    }
    ((l.updateAdgroupWebsiteLink = e),
      (l.setDisplayLink = s),
      (l.getDisplayLink = u),
      (l.removeDisplayLink = c),
      (l.updateDisplayLink = d),
      (l.setAppInstallDisplayLink = m),
      (l.updateAppInstallDisplayLink = p));
  },
  98,
);
