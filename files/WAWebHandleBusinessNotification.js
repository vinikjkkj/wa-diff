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
          var r = n.success,
            a = yield _(r);
          return h(r.stanzaId, r.from, a);
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
    var p = n("$InternalEnum").Mirrored(["Handled", "SideListOutOfDate"]);
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e: {
            var t = e;
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "verified_name_hash"
            ) {
              var n = t,
                r = yield o(
                  "WAWebHandleBusinessNameChange",
                ).handleVerifiedBusinessNameNotificationHash(n);
              return g(r);
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "verified_name_jid"
            ) {
              var a = t;
              return (
                yield o(
                  "WAWebHandleBusinessNameChange",
                ).handleVerifiedBusinessNameNotificationContact(a),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "remove_hash"
            ) {
              var i = t,
                l = yield o(
                  "WAWebHandleBusinessRemoval",
                ).handleBusinessRemovalNotificationHash(i);
              return g(l);
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "remove_jid"
            ) {
              var s = t;
              return (
                yield o(
                  "WAWebHandleBusinessRemoval",
                ).handleBusinessRemovalNotificationContact(s),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "profile"
            ) {
              var u = t;
              return (
                yield o("WAWebHandleBusinessProfile").handleBusinessProfile(u),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "profile_hash"
            ) {
              var c = t,
                d = yield o(
                  "WAWebHandleBusinessProfile",
                ).handleBusinessProfileHash(c);
              return g(d);
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "product"
            ) {
              var m = t;
              return (
                yield o(
                  "WAWebHandleBusinessProductCatalogNotification",
                ).handleProductNotification(m.productsIds),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "collection"
            ) {
              var _ = t;
              return (
                yield o(
                  "WAWebHandleBusinessProductCatalogNotification",
                ).handleCollectionNotification(_),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "subscriptions"
            ) {
              var f = t;
              yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
                f.subscriptions,
                f.featureFlags,
                "update",
              );
              var h = f.uiNotification;
              return (
                h != null &&
                  o(
                    "WAWebSubscriptionNotificationDelivery",
                  ).deliverSubscriptionNotification(h),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "ctwa_suggestion"
            ) {
              var y = t;
              return (
                yield o("WAWebHandleCTWASuggestion").handleCTWASuggestion(
                  y.suggestion,
                ),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
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
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "wa_ad_account_nonce"
            ) {
              var b = t;
              return (
                o(
                  "WAWebCTWABizAccessTokenNonceManager",
                ).setNonceFromPushNotification(b.nonce),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "mm_campaign"
            ) {
              var v = t;
              return (
                o(
                  "WAWebHandleBizBroadcastMarketingCampaignNotification",
                ).handleMarketingCampaignNotification(v),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "bb_pro_campaign"
            ) {
              var S = t;
              return (
                o(
                  "WAWebHandleBizBroadcastProCampaignNotification",
                ).handleBizBroadcastProCampaignNotification(S.campaignId),
                p.Handled
              );
              break e;
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "unknown"
            )
              return p.Handled;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return e ? p.Handled : p.SideListOutOfDate;
    }
    function h(e, t, n) {
      return n === p.Handled
        ? o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(e),
            to: t,
            class: "notification",
            type: "business",
          })
        : n === p.SideListOutOfDate
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
    ((l.handleBusinessNotification = c), (l.handleBusinessNotificationJob = m));
  },
  98,
);
