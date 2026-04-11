__d(
  "WAWebNewsletterUnsubscribeAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebDeleteStatusAction",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterDeleteMessageAddOns",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterFollowQPLLogger",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipActionLogger",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterUnsubscribeJob",
    "WAWebQplFlowWrapper",
    "WAWebQplQuickPerformanceLoggerMarkerIds",
    "WAWebSimilarNewsletterLogging",
    "WAWebWamEnumBannerStatusReason",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumChannelMembershipActionResult",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["deleteLocalModels"],
      s,
      u,
      c = r("qpl")._(1026957851, "1164");
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a = null;
          (o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() &&
            !o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterQplLoggingEnabledForMarkerId(
              o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
                .CHANNEL_UNFOLLOW,
            ) &&
            (a = o("WAWebQplFlowWrapper").QPL.markerStart(c)),
            (r = a) == null ||
              r.annotate({
                int: { surface: n.eventSurface, unit: n.eventUnit },
              }));
          var i = new (o(
            "WAWebNewsletterFollowQPLLogger",
          ).WAWebNewsletterFollowQPLLogger)({
            markerId: o("WAWebQplQuickPerformanceLoggerMarkerIds")
              .QuickLogMarkerId.CHANNEL_UNFOLLOW,
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
          var d = o("WAJids").toNewsletterJid(t.id.toJid()),
            m = n.deleteLocalModels,
            p = babelHelpers.objectWithoutPropertiesLoose(n, e);
          o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log(
            babelHelpers.extends(
              {
                cid: t.id,
                channelCoreEventType: o("WAWebWamEnumChannelEventType")
                  .CHANNEL_EVENT_TYPE.UNFOLLOW,
              },
              p,
            ),
          );
          var _ = o(
            "WAWebNewsletterAttributionLogging",
          ).NewsletterCoreEventLogger.getSimilarChannelsSessionId();
          o(
            "WAWebNewsletterAttributionLogging",
          ).NewsletterCoreEventLogger.getIsSimilarUnitMountedForChat(t.id) &&
            _ != null &&
            o("WAWebSimilarNewsletterLogging").logSimilarNewsletterDismiss({
              chat: t,
              reason: o("WAWebWamEnumBannerStatusReason").BANNER_STATUS_REASON
                .UNFOLLOW_TAP,
              sessionId: _,
            });
          try {
            var f, g;
            if (
              ((f = t.newsletterMetadata) == null ||
                f.resetRecentlyFollowedFrom(),
              i.markFetchStart(),
              yield o(
                "WAWebNewsletterUnsubscribeJob",
              ).unsubscribeFromNewsletter(d),
              i.markFetchEnd(),
              m == null || m)
            )
              (yield o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(
                d,
              ),
                yield o(
                  "WAWebNewsletterDeleteMessageAddOns",
                ).deleteNewsletterMessageAddOns(t.id),
                yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(
                  t.id,
                ),
                o(
                  "WAWebNewsletterBridgeApi",
                ).NewsletterBridgeApi.deleteNewsletter({ id: t.id, keep: !1 }));
            else {
              var h;
              (yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
                o(
                  "WAWebNewsletterStorageUtils",
                ).createNewsletterMetadataObjectForStorage({
                  id: t.id,
                  membershipType: o("WAWebCommonNewsletterEnums")
                    .NewsletterMembershipType.Guest,
                }),
              ),
                (h = t.newsletterMetadata) == null ||
                  h.set(
                    "membershipType",
                    o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                      .Guest,
                  ));
            }
            (o("WAWebDeleteStatusAction").clearStatusForRemovedContact(),
              (g = a) == null || g.end(2),
              i.end(2),
              o(
                "WAWebNewsletterMembershipActionLogger",
              ).logNewsletterMembershipActionEvent({
                cid: t.id,
                actionResult: o("WAWebWamEnumChannelMembershipActionResult")
                  .CHANNEL_MEMBERSHIP_ACTION_RESULT.UNFOLLOW_SUCCESS,
              }));
          } catch (e) {
            var y;
            throw (
              (y = a) == null || y.end(3),
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
        })),
        m.apply(this, arguments)
      );
    }
    l.unsubscribeFromNewsletterAction = d;
  },
  98,
);
