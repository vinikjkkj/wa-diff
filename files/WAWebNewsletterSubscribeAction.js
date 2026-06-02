__d(
  "WAWebNewsletterSubscribeAction",
  [
    "JSResourceForInteraction",
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebCreateChat",
    "WAWebMsgDataFromModel",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMyAddOnsJob",
    "WAWebNewsletterMembershipActionLogger",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterQueues",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSubscribeJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebQplFlowWrapper",
    "WAWebQplQuickPerformanceLoggerMarkerIds",
    "WAWebStoreNewsletterMessageAddOns",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumChannelMembershipActionResult",
    "WAWebWidFactory",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        "entryPoint",
        "eventSurface",
        "eventUnit",
        "similarChannelSessionId",
      ],
      c = r("qpl")._(1026960759, "186"),
      d = 5e3;
    function m(t, n, a) {
      var i,
        l = n.entryPoint,
        m = n.eventSurface,
        _ = n.eventUnit,
        f = n.similarChannelSessionId,
        g = babelHelpers.objectWithoutPropertiesLoose(n, u),
        h = null;
      return (
        o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() &&
          !o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterQplLoggingEnabledForMarkerId(
            o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
              .CHANNEL_FOLLOW,
          ) &&
          (h = o("WAWebQplFlowWrapper").QPL.markerStart(c)),
        (i = h) == null || i.annotate({ int: { surface: m, unit: _ } }),
        o("WAWebNewsletterQueues").newsletterSubscribeQueue.enqueue(
          async function () {
            var n = t.newsletterMetadata;
            if (!o("WAWebChatGetters").getIsNewsletter(t) || n == null) {
              var i;
              ((i = h) == null || i.end(105),
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[subscribeToNewsletterAction] not a newsletter",
                      ])),
                  )
                  .tags("newsletter")
                  .sendLogs("subscribe-to-not-a-newsletter"));
              return;
            }
            o(
              "WAWebNewsletterAttributionLogging",
            ).NewsletterCoreEventLogger.log(
              babelHelpers.extends(
                {
                  cid: t.id,
                  eventSurface: m,
                  eventUnit: _,
                  channelCoreEventType: o("WAWebWamEnumChannelEventType")
                    .CHANNEL_EVENT_TYPE.FOLLOW,
                  similarChannelSessionId: f,
                  entryPoint: l,
                },
                m !==
                  o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
                    .CHANNEL_UPDATES_HOME && g,
              ),
            );
            var u = o("WAJids").toNewsletterJid(t.id.toJid());
            try {
              var c, y, C;
              if (
                (await p(o("WAWebWidFactory").asNewsletterWidOrThrow(t.id), a),
                (t.t =
                  (c = (y = t.msgs.last()) == null ? void 0 : y.t) != null
                    ? c
                    : n.creationTime),
                o(
                  "WAWebNewsletterGatingUtils",
                ).isSimilarNewsletterInThreadEnabled())
              ) {
                var b;
                (b = t.newsletterMetadata) == null ||
                  b.set("recentlyFollowedFrom", m);
              }
              ((n.membershipType = o(
                "WAWebCommonNewsletterEnums",
              ).NewsletterMembershipType.Subscriber),
                await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
                  o(
                    "WAWebNewsletterStorageUtils",
                  ).createNewsletterMetadataObjectForStorage(n),
                ),
                await o(
                  "WAWebNewsletterUpdateMsgsRecordsJob",
                ).addNewsletterMsgsRecords(
                  t.msgs.map(o("WAWebMsgDataFromModel").msgDataFromMsgModel),
                ),
                o(
                  "WAWebNewsletterExtendedGatingUtils",
                ).isNewsletterReactionEnabled() &&
                  (await o(
                    "WAWebNewsletterGetMyAddOnsJob",
                  ).getMyNewsletterAddOnsJob({ count: d, newsletterJid: u }),
                  await o(
                    "WAWebStoreNewsletterMessageAddOns",
                  ).storeNewsletterMessageAddOns(t.msgs.toArray())),
                await o(
                  "WAWebNewsletterUpdateNewslettersRecordsJob",
                ).updateNewsletterChatRecords([
                  o("WAWebCreateChat").createNewsletterObjectForStorage(t),
                ]),
                await o(
                  "WAWebNewsletterBridgeApi",
                ).NewsletterBridgeApi.subscribeToNewsletter({ newsletter: t }),
                r("JSResourceForInteraction")(
                  "WAWebNewsletterStatusGapFillAction",
                )
                  .__setRef("WAWebNewsletterSubscribeAction")
                  .load()
                  .then(function (e) {
                    return e.fillNewsletterStatusGap(u, void 0, !0);
                  }),
                (C = h) == null || C.end(2));
            } catch (e) {
              var v;
              throw (
                (v = h) == null || v.end(3),
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[subscribeToNewsletterAction] subscribe failed",
                      ])),
                  )
                  .tags("newsletter")
                  .sendLogs("newsletter-failed-to-subscribe"),
                e
              );
            }
          },
        )
      );
    }
    async function p(e, t) {
      var n = o("WAJids").toNewsletterJid(e.toJid());
      (t == null || t.markFetchStart(),
        await o("WAWebNewsletterSubscribeJob").subscribeToNewsletter(n),
        t == null || t.markFetchEnd(),
        o(
          "WAWebNewsletterMembershipActionLogger",
        ).logNewsletterMembershipActionEvent({
          cid: e,
          actionResult: o("WAWebWamEnumChannelMembershipActionResult")
            .CHANNEL_MEMBERSHIP_ACTION_RESULT.FOLLOW_SUCCESS,
        }));
    }
    ((l.subscribeToNewsletterAction = m),
      (l.subscribeToNewsletterWidAction = p));
  },
  98,
);
