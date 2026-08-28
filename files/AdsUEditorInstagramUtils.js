__d(
  "AdsUEditorInstagramUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsCallToActionTypesUtils",
    "AdsDestinationUtils",
    "AdsEditorPostEditMode",
    "AdsInstagramApplicabilityUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsWebsiteAdUtils",
    "AsyncTypedRequest",
    "ClickToMessageCTDFeatureGating",
    "Promise",
    "XInstagramUsernameFromActorIDControllerRouteBuilder",
    "XMessengerAdsClickToDirectControllerRouteBuilder",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = "https://www.instagram.com",
      c = function (t) {
        if (t != null && t !== "") {
          var e = r(
            "XMessengerAdsClickToDirectControllerRouteBuilder",
          ).buildUri({
            actor_id: o(
              "AdsInstagramUserIdMigrationUtils",
            ).convertIGIDV1OrIGIDV2ToFBID(t),
          });
          try {
            var n = new (r("AsyncTypedRequest"))().setURI(e).promisePayload();
            return n.then(function (e) {
              return e.user_id.toString();
            });
          } catch (e) {
            return;
          }
        }
      },
      d = function (o) {
        if (r("isTruthy")(o)) {
          var t = r(
            "XInstagramUsernameFromActorIDControllerRouteBuilder",
          ).buildUri({ actor_id: o });
          return new (e || (e = n("Promise")))(function (e, n) {
            new (r("AsyncTypedRequest"))(t)
              .setReplaceTransportMarkers()
              .setHandler(function (t) {
                var n = t.payload;
                e(n.username);
              })
              .setErrorHandler(function (e) {
                n(e);
              })
              .send();
          });
        }
      };
    function m(e) {
      if (!(e == null || e.username == null)) {
        var t = e.username.toString(),
          n = p(t),
          r = e.user_id != null ? _(e.user_id, t) : null;
        return { externalLink: n, appLink: r };
      }
    }
    var p = function (t) {
        return "http://instagram.com/" + t;
      },
      _ = function (t, n) {
        return "instagram://user?username=" + n + "&userid=" + t;
      },
      f = function (t) {
        return "instagram://direct?userid=" + t;
      };
    function g() {
      return s._(/*BTDS*/ "Instagram");
    }
    function h(e) {
      var t;
      return (
        o("AdsDestinationUtils").getAppDestinationForAdgroupSpec(e) ===
          "INSTAGRAM_DIRECT" ||
        o("AdsCallToActionTypesUtils").getCTATypeFromAdgroup(e) ===
          "INSTAGRAM_MESSAGE" ||
        ((t = e.creative) == null ||
        (t = t.call_to_action) == null ||
        (t = t.value) == null
          ? void 0
          : t.app_destination) === "INSTAGRAM_DIRECT"
      );
    }
    function y(e) {
      if (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)) {
        var t,
          n,
          r =
            (t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.call_to_actions;
        return r == null
          ? null
          : Array.isArray(r)
            ? (n = r[0].value) == null
              ? void 0
              : n.app_link
            : r.getIn([0, "value", "app_link"]);
      } else if (o("AdsAdgroupTypeUtils").isVideoAd(e)) {
        var a;
        return (a = e.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.video_data) == null ||
          (a = a.call_to_action) == null ||
          (a = a.value) == null
          ? void 0
          : a.app_link;
      } else {
        var i;
        return (i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.link_data) == null ||
          (i = i.call_to_action) == null ||
          (i = i.value) == null
          ? void 0
          : i.app_link;
      }
    }
    function C(e, t, n, a, i) {
      var l,
        s = e === (l = r("AdsAPIObjectives")).OUTCOME_SALES,
        u = e === l.LINK_CLICKS,
        c = e === l.OUTCOME_ENGAGEMENT,
        d = e === l.OUTCOME_AWARENESS,
        m =
          t ||
          o("AdsODAXUtils").maybeTranslateObjectiveByPromotedObjectType(e, n),
        p =
          n === r("AdsPromotedObjectTypes").WEBSITE ||
          (o("AdsWebsiteAdUtils").isWebsiteObjective(m, n) &&
            n !== r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL),
        _ =
          m === r("AdsAPIObjectives").POST_ENGAGEMENT &&
          o(
            "ClickToMessageCTDFeatureGating",
          ).isIGCTAEnabledForPostEngagementExistingPost(),
        f = a === r("AdsEditorPostEditMode").EXISTING,
        g = f && (c || d || s || u) && (d || p || _),
        h =
          i != null &&
          e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          n === r("AdsPromotedObjectTypes").POST &&
          a === r("AdsEditorPostEditMode").INLINE &&
          r("AdsInstagramApplicabilityUtils").hasInstagramPlacement(i),
        y =
          s &&
          n === r("AdsPromotedObjectTypes").WEB_AND_APP &&
          i != null &&
          r("AdsInstagramApplicabilityUtils").hasInstagramPlacement(i) &&
          o("ClickToMessageCTDFeatureGating").isIGCTAEnabledForSalesWebsite();
      return g || h || y;
    }
    ((l.DEFAULT_INSTAGRAM_LINK = u),
      (l.getIgUserIDFromActorID = c),
      (l.getIgUsernameFromActorID = d),
      (l.getInstagramProfileLinks = m),
      (l.getExternalLinkForInstagramProfile = p),
      (l.getAppLinkForInstagramProfile = _),
      (l.getAppLinkForInstagramDirect = f),
      (l.getInstagramDirectLabel = g),
      (l.isInstagramDirectDestinationAd = h),
      (l.getApplink = y),
      (l.isEligibleForIGCTA = C));
  },
  226,
);
