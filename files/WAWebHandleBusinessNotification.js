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
              c = s.maybeAttrString("hash");
            return r("isStringNullOrEmpty")(c)
              ? babelHelpers.extends({ type: "profile" }, i)
              : babelHelpers.extends({ type: "profile_hash", hash: c }, i);
          } else {
            if (e.hasChild("product_catalog"))
              return u(e.child("product_catalog"), i);
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
            }
          }
          return babelHelpers.extends({ type: "unknown" }, i);
        },
      );
    function u(e, t) {
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
                    (t = o("WAWebProductTypes.flow").asProductReviewType(
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
    function c(e, t, n) {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              return c(r.stanzaId, r.from, !a);
            }
            case "verified_name_jid":
              return (
                yield o(
                  "WAWebHandleBusinessNameChange",
                ).handleVerifiedBusinessNameNotificationContact(r),
                c(r.stanzaId, r.from, !1)
              );
            case "remove_hash": {
              var i = yield o(
                "WAWebHandleBusinessRemoval",
              ).handleBusinessRemovalNotificationHash(r);
              return c(r.stanzaId, r.from, !i);
            }
            case "remove_jid":
              return (
                yield o(
                  "WAWebHandleBusinessRemoval",
                ).handleBusinessRemovalNotificationContact(r),
                c(r.stanzaId, r.from, !1)
              );
            case "profile":
              return (
                yield o("WAWebHandleBusinessProfile").handleBusinessProfile(r),
                c(r.stanzaId, r.from, !1)
              );
            case "profile_hash": {
              var l = yield o(
                "WAWebHandleBusinessProfile",
              ).handleBusinessProfileHash(r);
              return c(r.stanzaId, r.from, !l);
            }
            case "product":
              return (
                yield o(
                  "WAWebHandleBusinessProductCatalogNotification",
                ).handleProductNotification(r.productsIds),
                c(r.stanzaId, r.from, !1)
              );
            case "collection":
              return (
                yield o(
                  "WAWebHandleBusinessProductCatalogNotification",
                ).handleCollectionNotification(r),
                c(r.stanzaId, r.from, !1)
              );
            case "subscriptions":
              return (
                yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
                  r.subscriptions,
                  r.featureFlags,
                  "update",
                ),
                c(r.stanzaId, r.from, !1)
              );
            case "ctwa_suggestion":
              return (
                yield o("WAWebHandleCTWASuggestion").handleCTWASuggestion(
                  r.suggestion,
                ),
                c(r.stanzaId, r.from, !1)
              );
            case "privacy":
              return (
                o(
                  "WAWebHandlePrivacySettingsNotification",
                ).handleSmbDataSharingSettingNotification(
                  r.privacy.smbDataSharingSetting,
                  r.privacy.smbDataSharingVersion,
                ),
                c(r.stanzaId, r.from, !1)
              );
            case "wa_ad_account_nonce":
              return (
                o(
                  "WAWebCTWABizAccessTokenNonceManager",
                ).setNonceFromPushNotification(r.nonce),
                c(r.stanzaId, r.from, !1)
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
                c(r.stanzaId, r.from, !1)
              );
            default:
              return (r.type, c(r.stanzaId, r.from, !1));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleBusinessNotification",
          function (e) {
            return d(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    ((l.handleBusinessNotification = d), (l.handleBusinessNotificationJob = p));
  },
  98,
);
