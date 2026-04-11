__d(
  "WAWebBusinessProfileBridgeApi",
  [
    "Promise",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebCatalogCollection",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebJidToWid",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        refreshCatalogProducts: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var r = t.productIds,
              a = o("WAWebCatalogCollection").CatalogCollection.get(
                o("WAWebUserPrefsMeUser")
                  .getMePnUserOrThrow_DO_NOT_USE()
                  .toString(),
              );
            if (a) {
              var i = r.map(function (e) {
                return a.refreshProduct(e);
              });
              yield (e || (e = n("Promise"))).all(i);
            }
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
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
                var d,
                  m =
                    c == null || (d = c.profileOptions) == null
                      ? void 0
                      : d.commerceExperience;
                if (m !== i) {
                  var p = o("WAWebCatalogCollection").CatalogCollection.get(r);
                  p &&
                    o(
                      "WAWebBizGatingUtils",
                    ).isCatalogVariantsViewingEnabled() &&
                    o("WAWebCatalogCollection").CatalogCollection.remove(p.id);
                }
              }
              l || (c.stale = !0);
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
    l.BusinessProfileBridgeApi = s;
  },
  98,
);
