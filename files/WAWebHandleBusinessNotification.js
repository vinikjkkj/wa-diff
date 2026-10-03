__d(
  "WAWebHandleBusinessNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WASmaxBizCtwaAdAccountNonceNotificationRPC",
    "WASmaxParseUtils",
    "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
    "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
    "WAWap",
    "WAWebBackendJobsCommon",
    "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
    "WAWebBizBroadcastProCampaignInvalidationEmitter",
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCTWAGatingUtils",
    "WAWebCTWAParsePrivacy",
    "WAWebCTWAParseSuggestion",
    "WAWebCommonParsersVerifiedName",
    "WAWebHandleBusinessNameChange",
    "WAWebHandleBusinessProductCatalogNotification",
    "WAWebHandleBusinessProfile",
    "WAWebHandleBusinessRemoval",
    "WAWebHandleCTWASuggestion",
    "WAWebHandlePrivacySettingsNotification",
    "WAWebJidToWid",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebParseSubscriptionNotification",
    "WAWebProductTypes",
    "WAWebSubscriptions",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))(
        "businessNotificationParser",
        function (e) {
          e.assertTag("notification");
          var t = e.attrString("id"),
            n = e.attrWapJid("from"),
            a = e.attrTime("t"),
            i = { stanzaId: t, from: n, ts: a },
            l;
          if (e.hasChild("remove"))
            return (
              (l = e.child("remove")),
              l.hasAttr("jid")
                ? babelHelpers.extends(
                    {
                      type: "remove_jid",
                      jid: o("WAWebJidToWid").chatJidToChatWid(
                        l.attrChatJid("jid"),
                      ),
                    },
                    i,
                  )
                : babelHelpers.extends(
                    { type: "remove_hash", hash: l.attrString("hash") },
                    i,
                  )
            );
          if (e.hasChild("verified_name"))
            return (
              (l = e.child("verified_name")),
              l.hasAttr("jid")
                ? babelHelpers.extends(
                    {
                      type: "verified_name_jid",
                      jid: o("WAWebJidToWid").chatJidToChatWid(
                        l.attrChatJid("jid"),
                      ),
                      verifiedName: r("WAWebCommonParsersVerifiedName")(l),
                    },
                    i,
                  )
                : babelHelpers.extends(
                    { type: "verified_name_hash", hash: l.attrString("hash") },
                    i,
                  )
            );
          if (e.hasChild("profile")) {
            var s = e.child("profile"),
              u = s.maybeAttrString("hash");
            return r("isStringNullOrEmpty")(u)
              ? babelHelpers.extends({ type: "profile" }, i)
              : babelHelpers.extends({ type: "profile_hash", hash: u }, i);
          } else {
            if (e.hasChild("product_catalog"))
              return c(e.child("product_catalog"), i);
            if (e.hasChild("subscriptions")) {
              var d = o(
                  "WAWebParseSubscriptionNotification",
                ).parseSubscriptionsAndFeatureFlags(e),
                m = d.featureFlags,
                p = d.subscriptions;
              return babelHelpers.extends(
                { type: "subscriptions", subscriptions: p, featureFlags: m },
                i,
              );
            } else if (e.hasChild("ctwa_suggestion")) {
              if (
                o("WAWebBizSuggestionsGatingUtils").adsActionBannersEnabled()
              ) {
                var _ = o("WAWebCTWAParseSuggestion").parseCTWASuggestion(e);
                if (_ != null)
                  return babelHelpers.extends(
                    { type: "ctwa_suggestion", suggestion: _ },
                    i,
                  );
              }
            } else if (e.hasChild("privacy")) {
              if (o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
                var f = o("WAWebCTWAParsePrivacy").parseCTWAPrivacy(e);
                if (f != null)
                  return babelHelpers.extends(
                    { type: "privacy", privacy: f },
                    i,
                  );
              }
            } else if (e.hasChild("wa_ad_account_nonce")) {
              var g = o(
                "WASmaxBizCtwaAdAccountNonceNotificationRPC",
              ).receiveNonceNotificationRPC(e.node());
              return babelHelpers.extends(
                {
                  type: "wa_ad_account_nonce",
                  nonce: o("WAWebCTWABizAccessTokenNonceManager").castToNonce(
                    g.parsedRequest.waAdAccountNonceElementValue,
                  ),
                },
                i,
              );
            } else if (e.hasChild("mm_campaign")) {
              var h = o(
                  "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
                ).receiveCampaignStateChangedNotificationRPC(e.node()),
                y = h.parsedRequest;
              if (
                y.mmCampaignAdCreativeId != null &&
                y.mmCampaignAdGroupId != null &&
                y.mmCampaignAdId != null
              )
                return babelHelpers.extends(
                  {
                    type: "mm_campaign",
                    adCreativeId: y.mmCampaignAdCreativeId,
                    adGroupId: y.mmCampaignAdGroupId,
                    adId: y.mmCampaignAdId,
                    status: y.mmCampaignStatus,
                  },
                  i,
                );
            } else if (
              o("WASmaxParseUtils").flattenedChildWithTag(
                e.node(),
                "bb_pro_campaign",
              ).success
            ) {
              var C = o(
                "WASmaxSmbMeteredMessagesCampaignBbProCampaignStatusNotificationRPC",
              ).receiveBbProCampaignStatusNotificationRPC(e.node());
              return babelHelpers.extends(
                {
                  type: "bb_pro_campaign",
                  campaignId: C.parsedRequest.bbProCampaignCampaignId,
                },
                i,
              );
            }
          }
          return babelHelpers.extends({ type: "unknown" }, i);
        },
      );
    function c(e, t) {
      if (e.hasChild("product")) {
        var n = [];
        return (
          e.forEachChildWithTag("product", function (e) {
            var t = e.child("id").contentString();
            n.push(t);
          }),
          babelHelpers.extends({ type: "product", productsIds: n }, t)
        );
      } else if (e.hasChild("collection")) {
        var r = [],
          a = [];
        return (
          e.forEachChildWithTag("collection", function (e) {
            if (e.hasChild("status_info")) {
              var t,
                n,
                i,
                l = {
                  reviewStatus:
                    (t = o("WAWebProductTypes").asProductReviewType(
                      e.child("status_info").child("status").contentString(),
                    )) != null
                      ? t
                      : "APPROVED",
                  rejectReason:
                    (n = e.child("status_info").maybeChild("reject_reason")) ==
                    null
                      ? void 0
                      : n.contentString(),
                  commerceUrl:
                    (i = e.child("status_info").maybeChild("commerce_url")) ==
                    null
                      ? void 0
                      : i.contentString(),
                };
              (r.push(e.attrString("id")), a.push(l));
            }
          }),
          babelHelpers.extends(
            { type: "collection", collectionIds: r, reviewStatuses: a },
            t,
          )
        );
      }
      return babelHelpers.extends({ type: "unknown" }, t);
    }
    function d(e, t, n) {
      return n
        ? o("WAWap").wap(
            "ack",
            {
              id: o("WAWap").CUSTOM_STRING(e),
              to: t,
              class: "notification",
              type: "business",
            },
            o("WAWap").wap("user", { side_list: "out" }),
          )
        : o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(e),
            to: t,
            class: "notification",
            type: "business",
          });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = u.parse(t);
          if (n.error)
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          var a = n.success;
          switch (a.type) {
            case "verified_name_hash": {
              var i = yield o(
                "WAWebHandleBusinessNameChange",
              ).handleVerifiedBusinessNameNotificationHash(a);
              return d(a.stanzaId, a.from, !i);
            }
            case "verified_name_jid":
              return (
                yield o(
                  "WAWebHandleBusinessNameChange",
                ).handleVerifiedBusinessNameNotificationContact(a),
                d(a.stanzaId, a.from, !1)
              );
            case "remove_hash": {
              var l = yield o(
                "WAWebHandleBusinessRemoval",
              ).handleBusinessRemovalNotificationHash(a);
              return d(a.stanzaId, a.from, !l);
            }
            case "remove_jid":
              return (
                yield o(
                  "WAWebHandleBusinessRemoval",
                ).handleBusinessRemovalNotificationContact(a),
                d(a.stanzaId, a.from, !1)
              );
            case "profile":
              return (
                yield o("WAWebHandleBusinessProfile").handleBusinessProfile(a),
                d(a.stanzaId, a.from, !1)
              );
            case "profile_hash": {
              var c = yield o(
                "WAWebHandleBusinessProfile",
              ).handleBusinessProfileHash(a);
              return d(a.stanzaId, a.from, !c);
            }
            case "product":
              return (
                yield o(
                  "WAWebHandleBusinessProductCatalogNotification",
                ).handleProductNotification(a.productsIds),
                d(a.stanzaId, a.from, !1)
              );
            case "collection":
              return (
                yield o(
                  "WAWebHandleBusinessProductCatalogNotification",
                ).handleCollectionNotification(a),
                d(a.stanzaId, a.from, !1)
              );
            case "subscriptions":
              return (
                yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
                  a.subscriptions,
                  a.featureFlags,
                  "update",
                ),
                d(a.stanzaId, a.from, !1)
              );
            case "ctwa_suggestion":
              return (
                yield o("WAWebHandleCTWASuggestion").handleCTWASuggestion(
                  a.suggestion,
                ),
                d(a.stanzaId, a.from, !1)
              );
            case "privacy":
              return (
                o(
                  "WAWebHandlePrivacySettingsNotification",
                ).handleSmbDataSharingSettingNotification(
                  a.privacy.smbDataSharingSetting,
                  a.privacy.smbDataSharingVersion,
                ),
                d(a.stanzaId, a.from, !1)
              );
            case "wa_ad_account_nonce":
              return (
                o(
                  "WAWebCTWABizAccessTokenNonceManager",
                ).setNonceFromPushNotification(a.nonce),
                d(a.stanzaId, a.from, !1)
              );
            case "mm_campaign":
              return (
                o(
                  "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
                ).marketingCampaignNotificationEmitter.emit({
                  adCreativeId: a.adCreativeId,
                  adGroupId: a.adGroupId,
                  adId: a.adId,
                  status: a.status,
                  timestamp: a.ts,
                  backgroundSendHandling: !1,
                }),
                d(a.stanzaId, a.from, !1)
              );
            case "bb_pro_campaign": {
              try {
                o(
                  "WAWebBizBroadcastProCampaignInvalidationEmitter",
                ).bbProCampaignInvalidationEmitter.trigger(
                  "invalidate",
                  a.campaignId,
                );
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to invalidate BB Pro campaign",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("bb-pro-campaign-invalidation-listener-error");
              }
              return d(a.stanzaId, a.from, !1);
            }
            default:
              return (a.type, d(a.stanzaId, a.from, !1));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleBusinessNotification",
          function (e) {
            return m(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    ((l.handleBusinessNotification = m), (l.handleBusinessNotificationJob = _));
  },
  98,
);
