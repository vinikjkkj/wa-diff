__d(
  "WAWebBusinessProfileBridgeApi",
  [
    "Promise",
    "WALogger",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebCatalogCollection",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebDBUpdateChatTable",
    "WAWebJidToWid",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {
        refreshCatalogProducts: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.productIds,
              r = o("WAWebCatalogCollection").CatalogCollection.get(
                o("WAWebUserPrefsMeUser")
                  .getMePnUserOrThrow_DO_NOT_USE()
                  .toString(),
              );
            if (r) {
              var a = t.map(function (e) {
                return r.refreshProduct(e);
              });
              yield (u || (u = n("Promise"))).all(a);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateCatalogCollectionReviewStatuses: function (t) {
          var e = t.notification,
            n = o("WAWebCatalogCollection").CatalogCollection.get(
              o("WAWebUserPrefsMeUser")
                .getMePnUserOrThrow_DO_NOT_USE()
                .toString(),
            );
          if (n != null && n.collections)
            for (var r = 0; r < e.collectionIds.length; r++) {
              var a = n.collections.get(e.collectionIds[r]);
              a && a.set(e.reviewStatuses[r]);
            }
        },
        updateBusinessProfile: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = e.wid,
              r = o("WAWebJidToWid").userJidToUserWid(n),
              a = o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.getValid(r),
              i =
                a == null || (t = a.profileOptions) == null
                  ? void 0
                  : t.commerceExperience,
              l = !!a,
              s = yield o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.update(r),
              u = Array.isArray(s) ? s : [s];
            for (var c of u) {
              if (l) {
                var m,
                  p =
                    c == null || (m = c.profileOptions) == null
                      ? void 0
                      : m.commerceExperience;
                if (p !== i) {
                  var _ = o("WAWebCatalogCollection").CatalogCollection.get(r);
                  _ &&
                    o(
                      "WAWebBizCatalogGatingUtils",
                    ).isCatalogVariantsViewingEnabled() &&
                    o("WAWebCatalogCollection").CatalogCollection.remove(_.id);
                }
              }
              (l || (c.stale = !0), d(r, c));
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        restoreVerifiedBusinessContacts: function (t) {
          var e = t.entries;
          for (var n of e) {
            var r = n.contactData,
              a = n.wid,
              i = o("WAWebJidToWid").userJidToUserWid(a),
              l = o("WAWebChatCollection").ChatCollection.get(i);
            if (l) l.contact.set(r);
            else {
              var s = o("WAWebContactCollection").ContactCollection.get(i);
              s && s.set(r);
            }
          }
        },
        restoreBusinessProfiles: function (t) {
          var e = t.profiles;
          for (var n of e)
            o("WAWebBusinessProfileCollection").BusinessProfileCollection.gadd(
              babelHelpers.extends({}, n, { dataSource: "db" }),
            );
        },
      };
    function d(t, n) {
      if (
        !(
          o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage() ||
          !o("WAWebBizCoexGatingUtils").agentOffboardingEnabled() ||
          !o("WAWebBizCoexGatingUtils").authorizedAgentsEnabled()
        )
      ) {
        var a = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t);
        if (a != null) {
          var i = n == null ? void 0 : n.parentCompanyName,
            l = n == null ? void 0 : n.obaPhoneNumber;
          (n == null ? void 0 : n.isAuthorizedAgent) === !0 &&
          i != null &&
          l != null
            ? (a.set({ parentCompanyName: i, obaPhoneNumber: l }),
              o("WAWebDBUpdateChatTable")
                .updateChatTable(a.id, {
                  parentCompanyName: i,
                  obaPhoneNumber: l,
                })
                .catch(function (t) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to save authorized agent metadata to chat table",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("save-auth-agent-chat-table-fail");
                }))
            : (n == null ? void 0 : n.isAuthorizedAgent) === !1 &&
              (a.set({ parentCompanyName: null, obaPhoneNumber: null }),
              o("WAWebDBUpdateChatTable")
                .updateChatTable(a.id, {
                  parentCompanyName: null,
                  obaPhoneNumber: null,
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to clear authorized agent metadata from chat table",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("clear-auth-agent-chat-table-fail");
                }));
        }
      }
    }
    l.BusinessProfileBridgeApi = c;
  },
  98,
);
