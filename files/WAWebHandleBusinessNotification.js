__d(
  "WAWebHandleBusinessNotification",
  [
    "$InternalEnum",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendJobsCommon",
    "WAWebBizSuggestionsGatingUtils",
    "WAWebBusinessNotificationPluginHandlers",
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
    "WAWebSubscriptionNotificationDelivery",
    "WAWebSubscriptions",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        "remove",
        "verified_name",
        "profile",
        "product_catalog",
        "subscriptions",
        "ctwa_suggestion",
        "privacy",
      ],
      u = new (r("WADeprecatedWapParser"))(
        "businessNotificationParser",
        function (e) {
          var t;
          e.assertTag("notification");
          var n = e.attrString("id"),
            r = e.attrWapJid("from"),
            o = e.attrTime("t"),
            a = { stanzaId: n, from: r, ts: o },
            i = c(e);
          return (t = d(i, e, a)) != null
            ? t
            : babelHelpers.extends({ type: "unknown" }, a);
        },
      );
    function c(e) {
      var t;
      return (t = s.find(function (t) {
        return e.hasChild(t);
      })) != null
        ? t
        : "feature";
    }
    function d(e, t, n) {
      e: {
        if (e === "remove") {
          var a = t.child("remove");
          return a.hasAttr("jid")
            ? babelHelpers.extends(
                {
                  type: "remove_jid",
                  jid: o("WAWebJidToWid").chatJidToChatWid(
                    a.attrChatJid("jid"),
                  ),
                },
                n,
              )
            : babelHelpers.extends(
                { type: "remove_hash", hash: a.attrString("hash") },
                n,
              );
        }
        if (e === "verified_name") {
          var i = t.child("verified_name");
          return i.hasAttr("jid")
            ? babelHelpers.extends(
                {
                  type: "verified_name_jid",
                  jid: o("WAWebJidToWid").chatJidToChatWid(
                    i.attrChatJid("jid"),
                  ),
                  verifiedName: r("WAWebCommonParsersVerifiedName")(i),
                },
                n,
              )
            : babelHelpers.extends(
                { type: "verified_name_hash", hash: i.attrString("hash") },
                n,
              );
        }
        if (e === "profile") {
          var l = t.child("profile"),
            s = l.maybeAttrString("hash");
          return r("isStringNullOrEmpty")(s)
            ? babelHelpers.extends({ type: "profile" }, n)
            : babelHelpers.extends({ type: "profile_hash", hash: s }, n);
        }
        if (e === "product_catalog") return m(t.child("product_catalog"), n);
        if (e === "subscriptions") {
          var u = o(
              "WAWebParseSubscriptionNotification",
            ).parseSubscriptionsAndFeatureFlags(t),
            c = u.featureFlags,
            d = u.subscriptions;
          return babelHelpers.extends(
            {
              type: "subscriptions",
              subscriptions: d,
              featureFlags: c,
              uiNotification: o(
                "WAWebParseSubscriptionNotification",
              ).parseSubscriptionNotification(t),
            },
            n,
          );
        }
        if (e === "ctwa_suggestion") {
          if (o("WAWebBizSuggestionsGatingUtils").adsActionBannersEnabled()) {
            var p = o("WAWebCTWAParseSuggestion").parseCTWASuggestion(t);
            if (p != null)
              return babelHelpers.extends(
                { type: "ctwa_suggestion", suggestion: p },
                n,
              );
          }
          return null;
        }
        if (e === "privacy") {
          if (o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
            var _ = o("WAWebCTWAParsePrivacy").parseCTWAPrivacy(t);
            if (_ != null)
              return babelHelpers.extends({ type: "privacy", privacy: _ }, n);
          }
          return null;
        }
        if (e === "feature") {
          var f = o(
            "WAWebBusinessNotificationPluginHandlers",
          ).parseBusinessNotificationPluginAction(t, n.ts);
          return f == null
            ? null
            : babelHelpers.extends({ type: "feature", apply: f }, n);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function m(e, t) {
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
    async function p(t) {
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
      var r = n.success,
        a = await g(r);
      return y(r.stanzaId, r.from, a);
    }
    function _(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleBusinessNotification",
          function (e) {
            return p(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    var f = n("$InternalEnum").Mirrored(["Handled", "SideListOutOfDate"]);
    async function g(e) {
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
          return h(r);
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
            f.Handled
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
          return h(l);
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
            f.Handled
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
            f.Handled
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
          return h(d);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "product"
        ) {
          var m = t;
          return (
            await o(
              "WAWebHandleBusinessProductCatalogNotification",
            ).handleProductNotification(m.productsIds),
            f.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "collection"
        ) {
          var p = t;
          return (
            await o(
              "WAWebHandleBusinessProductCatalogNotification",
            ).handleCollectionNotification(p),
            f.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "subscriptions"
        ) {
          var _ = t;
          await o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
            _.subscriptions,
            _.featureFlags,
            "update",
          );
          var g = _.uiNotification;
          return (
            g != null &&
              o(
                "WAWebSubscriptionNotificationDelivery",
              ).deliverSubscriptionNotification(g),
            f.Handled
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
            f.Handled
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
            f.Handled
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "feature" &&
          "apply" in t
        ) {
          var b = t.apply,
            v = b();
          return (v != null && (await v), f.Handled);
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "unknown"
        )
          return f.Handled;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function h(e) {
      return e ? f.Handled : f.SideListOutOfDate;
    }
    function y(e, t, n) {
      return n === f.Handled
        ? o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(e),
            to: t,
            class: "notification",
            type: "business",
          })
        : n === f.SideListOutOfDate
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
    ((l.handleBusinessNotification = p), (l.handleBusinessNotificationJob = _));
  },
  98,
);
