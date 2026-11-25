__d(
  "WAWebNewsletterUnsubscribeAction",
  [
    "WAErrors",
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebDeleteStatusAction",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterDeleteMessageAddOns",
    "WAWebNewsletterFollowQPLLogger",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipActionLogger",
    "WAWebNewsletterMembershipOffline",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterQplGatingUtils",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterUnsubscribeJob",
    "WAWebQplFlowWrapper",
    "WAWebSimilarNewsletterLogging",
    "WAWebWamEnumBannerStatusReason",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumChannelMembershipActionResult",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["deleteLocalModels"],
      s,
      u,
      c = r("qpl")._(1026957851, "1164");
    async function d(t, n) {
      var r,
        a = null;
      (o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() &&
        !o(
          "WAWebNewsletterQplGatingUtils",
        ).isNewsletterQplLoggingEnabledForMarkerId(1026957851) &&
        (a = o("WAWebQplFlowWrapper").QPL.markerStart(c)),
        (r = a) == null ||
          r.annotate({ int: { surface: n.eventSurface, unit: n.eventUnit } }));
      var i = new (o(
        "WAWebNewsletterFollowQPLLogger",
      ).WAWebNewsletterFollowQPLLogger)({
        markerId: 1026957851,
        eventSurface: n.eventSurface,
        discoverySurface: n.discoverySurface,
        eventUnit: n.eventUnit,
      });
      if (!o("WAWebChatGetters").getIsNewsletter(t)) {
        var l;
        ((l = a) == null || l.end(105),
          i.end(105),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[unsubscribeFromNewsletterAction] not a newsletter",
                ])),
            )
            .tags("newsletter")
            .sendLogs("unsubscribe-from-not-a-newsletter"));
        return;
      }
      if (
        o(
          "WAWebNewsletterMembershipOffline",
        ).failNewsletterMembershipChangeIfOffline(i)
      ) {
        var d;
        throw ((d = a) == null || d.end(3), new (o("WAErrors").Offline)());
      }
      var m = o("WAJids").toNewsletterJid(t.id.toJid()),
        p = n.deleteLocalModels,
        _ = babelHelpers.objectWithoutPropertiesLoose(n, e);
      o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log(
        babelHelpers.extends(
          {
            cid: t.id,
            channelCoreEventType: o("WAWebWamEnumChannelEventType")
              .CHANNEL_EVENT_TYPE.UNFOLLOW,
          },
          _,
        ),
      );
      var f = o(
        "WAWebNewsletterAttributionLogging",
      ).NewsletterCoreEventLogger.getSimilarChannelsSessionId();
      o(
        "WAWebNewsletterAttributionLogging",
      ).NewsletterCoreEventLogger.getIsSimilarUnitMountedForChat(t.id) &&
        f != null &&
        o("WAWebSimilarNewsletterLogging").logSimilarNewsletterDismiss({
          chat: t,
          reason: o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON
            .UNFOLLOW_TAP,
          sessionId: f,
        });
      try {
        var g, h;
        if (
          ((g = t.newsletterMetadata) == null || g.resetRecentlyFollowedFrom(),
          i.markFetchStart(),
          await o("WAWebNewsletterUnsubscribeJob").unsubscribeFromNewsletter(m),
          i.markFetchEnd(),
          p == null || p)
        )
          (await o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(m),
            await o(
              "WAWebNewsletterDeleteMessageAddOns",
            ).deleteNewsletterMessageAddOns(t.id),
            await o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(t.id),
            o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.deleteNewsletter({
              id: t.id,
              keep: !1,
              newsletterDeleted: !1,
            }));
        else {
          var y,
            C,
            b,
            v =
              (y = (C = t.newsletterMetadata) == null ? void 0 : C.size) != null
                ? y
                : 0,
            S = Math.max(0, v - 1);
          (await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
            o(
              "WAWebNewsletterStorageUtils",
            ).createNewsletterMetadataObjectForStorage({
              id: t.id,
              membershipType: o("WAWebCommonNewsletterEnums")
                .NewsletterMembershipType.Guest,
              size: S,
            }),
          ),
            (b = t.newsletterMetadata) == null ||
              b.set({
                membershipType: o("WAWebCommonNewsletterEnums")
                  .NewsletterMembershipType.Guest,
                size: S,
              }));
        }
        (o("WAWebDeleteStatusAction").clearStatusForRemovedContact(),
          (h = a) == null || h.end(2),
          i.end(2),
          o(
            "WAWebNewsletterMembershipActionLogger",
          ).logNewsletterMembershipActionEvent({
            cid: t.id,
            actionResult: o("WAWebWamEnumChannelMembershipActionResult")
              .CHANNEL_MEMBERSHIP_ACTION_RESULT.UNFOLLOW_SUCCESS,
          }));
      } catch (e) {
        var R;
        throw (
          (R = a) == null || R.end(3),
          i.end(3),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[unsubscribeFromNewsletterAction] unsubscribe failed",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-failed-to-unsubscribe"),
          e
        );
      }
    }
    l.unsubscribeFromNewsletterAction = d;
  },
  98,
);
