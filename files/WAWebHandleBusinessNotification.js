__d(
  "WAWebHandleBusinessNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WASmaxBizCtwaAdAccountNonceNotificationRPC",
    "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
    "WAWap",
    "WAWebBackendJobsCommon",
    "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
    "WAWebBizGatingUtils",
    "WAWebCTWABizAccessTokenNonceManager",
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
    "WAWebProductTypes.flow",
    "WAWebSubscriptions",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))(
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
          } else if (e.hasChild("product_catalog")) {
            var c = e.child("product_catalog");
            if (c.hasChild("product")) {
              var d = [];
              return (
                c.forEachChildWithTag("product", function (e) {
                  var t = e.child("id").contentString();
                  d.push(t);
                }),
                babelHelpers.extends({ type: "product", productsIds: d }, i)
              );
            } else if (c.hasChild("collection")) {
              var m = [],
                p = [];
              return (
                c.forEachChildWithTag("collection", function (e) {
                  if (e.hasChild("status_info")) {
                    var t,
                      n,
                      r,
                      a = {
                        reviewStatus:
                          (t = o("WAWebProductTypes.flow").asProductReviewType(
                            e
                              .child("status_info")
                              .child("status")
                              .contentString(),
                          )) != null
                            ? t
                            : "APPROVED",
                        rejectReason:
                          (n = e
                            .child("status_info")
                            .maybeChild("reject_reason")) == null
                            ? void 0
                            : n.contentString(),
                        commerceUrl:
                          (r = e
                            .child("status_info")
                            .maybeChild("commerce_url")) == null
                            ? void 0
                            : r.contentString(),
                      };
                    (m.push(e.attrString("id")), p.push(a));
                  }
                }),
                babelHelpers.extends(
                  { type: "collection", collectionIds: m, reviewStatuses: p },
                  i,
                )
              );
            }
          } else if (e.hasChild("subscriptions")) {
            var _ = o(
                "WAWebParseSubscriptionNotification",
              ).parseSubscriptionsAndFeatureFlags(e),
              f = _.featureFlags,
              g = _.subscriptions;
            return babelHelpers.extends(
              { type: "subscriptions", subscriptions: g, featureFlags: f },
              i,
            );
          } else if (e.hasChild("ctwa_suggestion")) {
            if (o("WAWebBizGatingUtils").adsActionBannersEnabled()) {
              var h = o("WAWebCTWAParseSuggestion").parseCTWASuggestion(e);
              if (h != null)
                return babelHelpers.extends(
                  { type: "ctwa_suggestion", suggestion: h },
                  i,
                );
            }
          } else if (e.hasChild("privacy")) {
            if (o("WAWebBizGatingUtils").smbDataSharingConsentEnabled()) {
              var y = o("WAWebCTWAParsePrivacy").parseCTWAPrivacy(e);
              if (y != null)
                return babelHelpers.extends({ type: "privacy", privacy: y }, i);
            }
          } else if (e.hasChild("wa_ad_account_nonce")) {
            var C = o(
              "WASmaxBizCtwaAdAccountNonceNotificationRPC",
            ).receiveNonceNotificationRPC(e.node());
            return babelHelpers.extends(
              {
                type: "wa_ad_account_nonce",
                nonce: o("WAWebCTWABizAccessTokenNonceManager").castToNonce(
                  C.parsedRequest.waAdAccountNonceElementValue,
                ),
              },
              i,
            );
          } else if (e.hasChild("mm_campaign")) {
            var b = o(
                "WASmaxSmbMeteredMessagesCampaignCampaignStateChangedNotificationRPC",
              ).receiveCampaignStateChangedNotificationRPC(e.node()),
              v = b.parsedRequest;
            if (
              v.mmCampaignAdCreativeId != null &&
              v.mmCampaignAdGroupId != null &&
              v.mmCampaignAdId != null
            )
              return babelHelpers.extends(
                {
                  type: "mm_campaign",
                  adCreativeId: v.mmCampaignAdCreativeId,
                  adGroupId: v.mmCampaignAdGroupId,
                  adId: v.mmCampaignAdId,
                  status: v.mmCampaignStatus,
                },
                i,
              );
          }
          return babelHelpers.extends({ type: "unknown" }, i);
        },
      );
    function u(e, t, n) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = s.parse(t);
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
          var r = n.success;
          switch (r.type) {
            case "verified_name_hash": {
              var a = yield o(
                "WAWebHandleBusinessNameChange",
              ).handleVerifiedBusinessNameNotificationHash(r);
              return u(r.stanzaId, r.from, !a);
            }
            case "verified_name_jid":
              return (
                yield o(
                  "WAWebHandleBusinessNameChange",
                ).handleVerifiedBusinessNameNotificationContact(r),
                u(r.stanzaId, r.from, !1)
              );
            case "remove_hash": {
              var i = yield o(
                "WAWebHandleBusinessRemoval",
              ).handleBusinessRemovalNotificationHash(r);
              return u(r.stanzaId, r.from, !i);
            }
            case "remove_jid":
              return (
                yield o(
                  "WAWebHandleBusinessRemoval",
                ).handleBusinessRemovalNotificationContact(r),
                u(r.stanzaId, r.from, !1)
              );
            case "profile":
              return (
                yield o("WAWebHandleBusinessProfile").handleBusinessProfile(r),
                u(r.stanzaId, r.from, !1)
              );
            case "profile_hash": {
              var l = yield o(
                "WAWebHandleBusinessProfile",
              ).handleBusinessProfileHash(r);
              return u(r.stanzaId, r.from, !l);
            }
            case "product":
              return (
                yield o(
                  "WAWebHandleBusinessProductCatalogNotification",
                ).handleProductNotification(r.productsIds),
                u(r.stanzaId, r.from, !1)
              );
            case "collection":
              return (
                yield o(
                  "WAWebHandleBusinessProductCatalogNotification",
                ).handleCollectionNotification(r),
                u(r.stanzaId, r.from, !1)
              );
            case "subscriptions":
              return (
                yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
                  r.subscriptions,
                  r.featureFlags,
                  "update",
                ),
                u(r.stanzaId, r.from, !1)
              );
            case "ctwa_suggestion":
              return (
                yield o("WAWebHandleCTWASuggestion").handleCTWASuggestion(
                  r.suggestion,
                ),
                u(r.stanzaId, r.from, !1)
              );
            case "privacy":
              return (
                o(
                  "WAWebHandlePrivacySettingsNotification",
                ).handleSmbDataSharingSettingNotification(
                  r.privacy.smbDataSharingSetting,
                ),
                u(r.stanzaId, r.from, !1)
              );
            case "wa_ad_account_nonce":
              return (
                o(
                  "WAWebCTWABizAccessTokenNonceManager",
                ).setNonceFromPushNotification(r.nonce),
                u(r.stanzaId, r.from, !1)
              );
            case "mm_campaign":
              return (
                o(
                  "WAWebBizBroadcastMarketingCampaignNotificationEmitter",
                ).marketingCampaignNotificationEmitter.emit({
                  adCreativeId: r.adCreativeId,
                  adGroupId: r.adGroupId,
                  adId: r.adId,
                  status: r.status,
                  timestamp: r.ts,
                  backgroundSendHandling: !1,
                }),
                u(r.stanzaId, r.from, !1)
              );
            default:
              return (r.type, u(r.stanzaId, r.from, !1));
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleBusinessNotification",
          function (e) {
            return c(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    ((l.handleBusinessNotification = c), (l.handleBusinessNotificationJob = m));
  },
  98,
);
