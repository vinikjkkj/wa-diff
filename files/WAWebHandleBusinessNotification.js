__d(
  "WAWebHandleBusinessNotification",
  [
    "$InternalEnum",
    "WADeprecatedWapParser",
    "WALogger",
    "WASmaxBizCtwaAdAccountNonceNotificationRPC",
    "WASmaxParseUtils",
    "WAWap",
    "WAWebBackendJobsCommon",
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCTWAGatingUtils",
    "WAWebCTWAParsePrivacy",
    "WAWebCTWAParseSuggestion",
    "WAWebCommonParsersVerifiedName",
    "WAWebHandleBizBroadcastMarketingCampaignNotification",
    "WAWebHandleBizBroadcastProCampaignNotification",
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
    "WAWebSubscriptionNotificationDelivery",
    "WAWebSubscriptions",
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
                {
                  type: "subscriptions",
                  subscriptions: p,
                  featureFlags: m,
                  uiNotification: o(
                    "WAWebParseSubscriptionNotification",
                  ).parseSubscriptionNotification(e),
                },
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
                "WAWebHandleBizBroadcastMarketingCampaignNotification",
              ).parseMarketingCampaignNotification(e.node());
              if (h != null)
                return babelHelpers.extends({ type: "mm_campaign" }, h, i);
            } else if (
              o("WASmaxParseUtils").flattenedChildWithTag(
                e.node(),
                "bb_pro_campaign",
              ).success
            )
              return babelHelpers.extends(
                {
                  type: "bb_pro_campaign",
                  campaignId: o(
                    "WAWebHandleBizBroadcastProCampaignNotification",
                  ).parseBizBroadcastProCampaignId(e.node()),
                },
                i,
              );
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
    async function c(t) {
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
      var r = n.success,
        a = await p(r);
      return f(r.stanzaId, r.from, a);
    }
    function d(e) {
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
    var m = n("$InternalEnum").Mirrored(["Handled", "SideListOutOfDate"]);
    async function p(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "verified_name_hash"
        ) {
          var n = t,
            r = await o(
              "WAWebHandleBusinessNameChange",
            ).handleVerifiedBusinessNameNotificationHash(n);
          return _(r);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "verified_name_jid"
        ) {
          var a = t;
          return (
            await o(
              "WAWebHandleBusinessNameChange",
            ).handleVerifiedBusinessNameNotificationContact(a),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "remove_hash"
        ) {
          var i = t,
            l = await o(
              "WAWebHandleBusinessRemoval",
            ).handleBusinessRemovalNotificationHash(i);
          return _(l);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "remove_jid"
        ) {
          var s = t;
          return (
            await o(
              "WAWebHandleBusinessRemoval",
            ).handleBusinessRemovalNotificationContact(s),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "profile"
        ) {
          var u = t;
          return (
            await o("WAWebHandleBusinessProfile").handleBusinessProfile(u),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "profile_hash"
        ) {
          var c = t,
            d = await o("WAWebHandleBusinessProfile").handleBusinessProfileHash(
              c,
            );
          return _(d);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "product"
        ) {
          var p = t;
          return (
            await o(
              "WAWebHandleBusinessProductCatalogNotification",
            ).handleProductNotification(p.productsIds),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "collection"
        ) {
          var f = t;
          return (
            await o(
              "WAWebHandleBusinessProductCatalogNotification",
            ).handleCollectionNotification(f),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "subscriptions"
        ) {
          var g = t;
          await o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
            g.subscriptions,
            g.featureFlags,
            "update",
          );
          var h = g.uiNotification;
          return (
            h != null &&
              o(
                "WAWebSubscriptionNotificationDelivery",
              ).deliverSubscriptionNotification(h),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "ctwa_suggestion"
        ) {
          var y = t;
          return (
            await o("WAWebHandleCTWASuggestion").handleCTWASuggestion(
              y.suggestion,
            ),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "privacy"
        ) {
          var C = t;
          return (
            o(
              "WAWebHandlePrivacySettingsNotification",
            ).handleSmbDataSharingSettingNotification(
              C.privacy.smbDataSharingSetting,
              C.privacy.smbDataSharingVersion,
            ),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "wa_ad_account_nonce"
        ) {
          var b = t;
          return (
            o(
              "WAWebCTWABizAccessTokenNonceManager",
            ).setNonceFromPushNotification(b.nonce),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "mm_campaign"
        ) {
          var v = t;
          return (
            o(
              "WAWebHandleBizBroadcastMarketingCampaignNotification",
            ).handleMarketingCampaignNotification(v),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "bb_pro_campaign"
        ) {
          var S = t;
          return (
            o(
              "WAWebHandleBizBroadcastProCampaignNotification",
            ).handleBizBroadcastProCampaignNotification(S.campaignId),
            m.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "unknown"
        )
          return m.Handled;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function _(e) {
      return e ? m.Handled : m.SideListOutOfDate;
    }
    function f(e, t, n) {
      return n === m.Handled
        ? o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(e),
            to: t,
            class: "notification",
            type: "business",
          })
        : n === m.SideListOutOfDate
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
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  n,
              );
            })();
    }
    ((l.handleBusinessNotification = c), (l.handleBusinessNotificationJob = d));
  },
  98,
);
