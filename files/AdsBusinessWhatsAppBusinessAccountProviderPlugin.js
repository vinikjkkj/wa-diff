__d(
  "AdsBusinessWhatsAppBusinessAccountProviderPlugin",
  [
    "AdsBusinessWhatsAppBusinessAccountProviderPluginBSPQuery.graphql",
    "AdsGraphAPI",
    "AdsManagerRelayEnvironment",
    "LoadObjectMap",
    "RelayHooks",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "AdsBusinessWhatsAppBusinessAccountProviderPluginBSPQuery.graphql",
            )),
      u = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(e, function (e) {
                  return o("AdsGraphAPI")
                    .get(i.id)
                    .object("business", e)
                    .edge("owned_whatsapp_business_accounts")
                    .get({
                      fields: [
                        "phone_numbers.fields(display_phone_number,verified_name,connection_status,platform_type,business_profile.fields(profile_picture_url,verified_level),account_number.fields(phone_number))",
                        "name",
                        "is_available_on_ads_manager",
                        "business_type",
                        "payment_account_id",
                        "is_enabled_for_message_marketing",
                        "is_marketing_messages_inbox_created",
                        "currency",
                        "is_reused_waba_on_ads_manager",
                        "marketing_messages_restriction_status",
                        "is_marketing_messages_inbox_permissions_assigned",
                        "account_review_status",
                      ],
                      limit: 50,
                    })
                    .then(function (e) {
                      return e.data
                        .map(function (e) {
                          return Object.prototype.hasOwnProperty.call(
                            e,
                            "phone_numbers",
                          )
                            ? e.phone_numbers.data
                                .map(function (t) {
                                  var n,
                                    r,
                                    o = t.connection_status;
                                  return {
                                    whatsAppBusinessAccountID: e.id,
                                    whatsAppBusinessAccountName: e.name,
                                    profilePictureUrl:
                                      t.business_profile.profile_picture_url,
                                    whatsAppBusinessProfileVerifiedLevel:
                                      t.business_profile.verified_level,
                                    whatsAppNumberID: t.id,
                                    whatsAppNumber:
                                      t.account_number.phone_number,
                                    whatsAppNumberDisplayName:
                                      (n = t.verified_name) != null
                                        ? n
                                        : e.name,
                                    whatsAppNumberPlatformType: t.platform_type,
                                    whatsAppNumberFormatted:
                                      t.display_phone_number,
                                    whatsAppNumberConnectionStatus: o,
                                    isAvailableOnAdsManager:
                                      e.is_available_on_ads_manager,
                                    whatsAppBusinessType: e.business_type,
                                    whatsAppPaymentAccountID:
                                      e.payment_account_id,
                                    isClientWaba: !1,
                                    isEnabledForMessageMarketing:
                                      e.is_enabled_for_message_marketing,
                                    isMarketingMessagesInboxCreated:
                                      e.is_marketing_messages_inbox_created,
                                    isReusedWABAOnAdsManager:
                                      (r = e.is_reused_waba_on_ads_manager) !=
                                      null
                                        ? r
                                        : !1,
                                    whatsAppBusinessAccountCurrency: e.currency,
                                    marketingMessagesRestrictionStatus:
                                      e.marketing_messages_restriction_status,
                                    isMarketingMessagesInboxPermissionsAssigned:
                                      e.is_marketing_messages_inbox_permissions_assigned,
                                    accountReviewStatus:
                                      e.account_review_status,
                                  };
                                })
                                .filter(function (e) {
                                  return e;
                                })
                            : null;
                        })
                        .filter(function (e) {
                          return e;
                        })
                        .flat();
                    })
                    .then(function (e) {
                      var t = Array.from(
                        new Set(
                          e
                            .map(function (e) {
                              return e.whatsAppBusinessAccountID;
                            })
                            .filter(Boolean),
                        ),
                      );
                      return t.length === 0
                        ? e
                        : o("RelayHooks")
                            .fetchQuery(r("AdsManagerRelayEnvironment"), s, {
                              wabaIds: t,
                            })
                            .toPromise()
                            .catch(function () {
                              return null;
                            })
                            .then(function (t) {
                              var n,
                                r = new Map(),
                                o =
                                  (n = t == null ? void 0 : t.nodes) != null
                                    ? n
                                    : [];
                              return (
                                o.forEach(function (e) {
                                  var t =
                                    e == null ? void 0 : e.bsp_partner_business;
                                  if (
                                    (e == null ? void 0 : e.id) != null &&
                                    t != null
                                  ) {
                                    var n, o, a;
                                    r.set(e.id, {
                                      bspBusinessName:
                                        (n = t.name) != null ? n : null,
                                      bspBusinessId:
                                        (o = t.id) != null ? o : null,
                                      bspBusinessLogoUrl:
                                        (a = t.profile_picture_url) != null
                                          ? a
                                          : null,
                                    });
                                  }
                                }),
                                e.map(function (e) {
                                  var t,
                                    n,
                                    o,
                                    a = r.get(e.whatsAppBusinessAccountID);
                                  return babelHelpers.extends({}, e, {
                                    bspBusinessName:
                                      (t =
                                        a == null
                                          ? void 0
                                          : a.bspBusinessName) != null
                                        ? t
                                        : null,
                                    bspBusinessId:
                                      (n =
                                        a == null ? void 0 : a.bspBusinessId) !=
                                      null
                                        ? n
                                        : null,
                                    bspBusinessLogoUrl:
                                      (o =
                                        a == null
                                          ? void 0
                                          : a.bspBusinessLogoUrl) != null
                                        ? o
                                        : null,
                                  });
                                })
                              );
                            });
                    });
                }),
                function (e) {
                  t(function (t) {
                    return t.merge(e);
                  });
                },
                function (e) {},
              ));
          });
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
