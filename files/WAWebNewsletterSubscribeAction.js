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
    "asyncToGeneratorRuntime",
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
    function m(t, a, i) {
      var l,
        m = a.entryPoint,
        _ = a.eventSurface,
        f = a.eventUnit,
        g = a.similarChannelSessionId,
        h = babelHelpers.objectWithoutPropertiesLoose(a, u),
        y = null;
      return (
        o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled() &&
          !o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterQplLoggingEnabledForMarkerId(
            o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
              .CHANNEL_FOLLOW,
          ) &&
          (y = o("WAWebQplFlowWrapper").QPL.markerStart(c)),
        (l = y) == null || l.annotate({ int: { surface: _, unit: f } }),
        o("WAWebNewsletterQueues").newsletterSubscribeQueue.enqueue(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = t.newsletterMetadata;
            if (!o("WAWebChatGetters").getIsNewsletter(t) || n == null) {
              var a;
              ((a = y) == null || a.end(105),
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
                  eventSurface: _,
                  eventUnit: f,
                  channelCoreEventType: o("WAWebWamEnumChannelEventType")
                    .CHANNEL_EVENT_TYPE.FOLLOW,
                  similarChannelSessionId: g,
                  entryPoint: m,
                },
                _ !==
                  o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
                    .CHANNEL_UPDATES_HOME && h,
              ),
            );
            var l = o("WAJids").toNewsletterJid(t.id.toJid());
            try {
              var u, c, C;
              if (
                (yield p(o("WAWebWidFactory").asNewsletterWidOrThrow(t.id), i),
                (t.t =
                  (u = (c = t.msgs.last()) == null ? void 0 : c.t) != null
                    ? u
                    : n.creationTime),
                o(
                  "WAWebNewsletterGatingUtils",
                ).isSimilarNewsletterInThreadEnabled())
              ) {
                var b;
                (b = t.newsletterMetadata) == null ||
                  b.set("recentlyFollowedFrom", _);
              }
              ((n.membershipType = o(
                "WAWebCommonNewsletterEnums",
              ).NewsletterMembershipType.Subscriber),
                yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
                  o(
                    "WAWebNewsletterStorageUtils",
                  ).createNewsletterMetadataObjectForStorage(n),
                ),
                yield o(
                  "WAWebNewsletterUpdateMsgsRecordsJob",
                ).addNewsletterMsgsRecords(
                  t.msgs.map(o("WAWebMsgDataFromModel").msgDataFromMsgModel),
                ),
                o(
                  "WAWebNewsletterExtendedGatingUtils",
                ).isNewsletterReactionEnabled() &&
                  (yield o(
                    "WAWebNewsletterGetMyAddOnsJob",
                  ).getMyNewsletterAddOnsJob({ count: d, newsletterJid: l }),
                  yield o(
                    "WAWebStoreNewsletterMessageAddOns",
                  ).storeNewsletterMessageAddOns(t.msgs.toArray())),
                yield o(
                  "WAWebNewsletterUpdateNewslettersRecordsJob",
                ).updateNewsletterChatRecords([
                  o("WAWebCreateChat").createNewsletterObjectForStorage(t),
                ]),
                yield o(
                  "WAWebNewsletterBridgeApi",
                ).NewsletterBridgeApi.subscribeToNewsletter({ newsletter: t }),
                r("JSResourceForInteraction")(
                  "WAWebNewsletterStatusGapFillAction",
                )
                  .__setRef("WAWebNewsletterSubscribeAction")
                  .load()
                  .then(function (e) {
                    return e.fillNewsletterStatusGap(l);
                  }),
                (C = y) == null || C.end(2));
            } catch (e) {
              var v;
              throw (
                (v = y) == null || v.end(3),
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
          }),
        )
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAJids").toNewsletterJid(e.toJid());
          (t == null || t.markFetchStart(),
            yield o("WAWebNewsletterSubscribeJob").subscribeToNewsletter(n),
            t == null || t.markFetchEnd(),
            o(
              "WAWebNewsletterMembershipActionLogger",
            ).logNewsletterMembershipActionEvent({
              cid: e,
              actionResult: o("WAWebWamEnumChannelMembershipActionResult")
                .CHANNEL_MEMBERSHIP_ACTION_RESULT.FOLLOW_SUCCESS,
            }));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.subscribeToNewsletterAction = m),
      (l.subscribeToNewsletterWidAction = p));
  },
  98,
);
