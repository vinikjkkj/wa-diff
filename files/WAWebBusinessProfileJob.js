__d(
  "WAWebBusinessProfileJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementUpdateCommerceSettings",
    "WAWebBizGetPriceTiersQuery",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))(
      "businessProfileResponse",
      function (e) {
        (e.assertTag("iq"), e.assertFromServer());
      },
    );
    function s(e) {
      var t = e.config,
        n = e.note,
        r = e.timezone,
        a = [];
      Object.keys(t).forEach(function (e) {
        var n = t[e];
        if (n != null) {
          var r = n.hours,
            o = n.mode;
          if (r)
            for (var i of r) {
              var l = i[0],
                s = i[1];
              a.push({ day_of_week: e, mode: o, open_time: l, close_time: s });
            }
          else a.push({ day_of_week: e, mode: o });
        }
      });
      var i = [];
      return (
        n != null &&
          n !== "" &&
          i.push(o("WAWap").wap("business_hours_note", null, n)),
        i.push.apply(
          i,
          a.map(function (e) {
            var t = o("WAWap").wap("business_hours_config", {
              day_of_week: o("WAWap").CUSTOM_STRING(e.day_of_week),
              mode: o("WAWap").CUSTOM_STRING(e.mode),
              open_time:
                e.open_time != null
                  ? o("WAWap").CUSTOM_STRING(e.open_time.toString())
                  : o("WAWap").DROP_ATTR,
              close_time:
                e.close_time != null
                  ? o("WAWap").CUSTOM_STRING(e.close_time.toString())
                  : o("WAWap").DROP_ATTR,
            });
            return t;
          }),
        ),
        o("WAWap").wap(
          "business_hours",
          {
            timezone:
              r != null && r !== ""
                ? o("WAWap").CUSTOM_STRING(r)
                : o("WAWap").DROP_ATTR,
          },
          i,
        )
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            a = yield o(
              "WAWebBizCatalogManagementUpdateCommerceSettings",
            ).updateCommerceSettings({
              biz_jid:
                (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                  n,
                )) != null
                  ? t
                  : n.toJid(),
              cart_enabled: e,
            });
          if (a.type === "success") return a.result;
          throw (
            a.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(a.error)
              : a.type,
            r("err")(
              "updateCartEnabledGraphQL: error handling flow not implemented for " +
                JSON.stringify(a),
            )
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return u(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = t.address,
            a = t.businessHours,
            i = t.categories,
            l = t.description,
            u = t.email,
            c = t.latitude,
            d = t.longitude,
            m = t.priceTier,
            p = t.serviceAreas,
            _ = t.website,
            f = (n = o("WAWap")).wap(
              "iq",
              {
                to: n.S_WHATSAPP_NET,
                xmlns: "w:biz",
                id: n.generateId(),
                type: "set",
              },
              n.wap(
                "business_profile",
                { v: "3", mutation_type: "delta" },
                r !== void 0 ? o("WAWap").wap("address", null, r) : null,
                c !== void 0
                  ? o("WAWap").wap("latitude", null, String(c))
                  : null,
                d !== void 0
                  ? o("WAWap").wap("longitude", null, String(d))
                  : null,
                l !== void 0 ? o("WAWap").wap("description", null, l) : null,
                u !== void 0 ? o("WAWap").wap("email", null, u) : null,
                _ && _.length === 0 ? o("WAWap").wap("website", null) : null,
                _ && _.length > 0
                  ? o("WAWap").wap("website", null, _[0].url)
                  : null,
                _ && _.length > 1
                  ? o("WAWap").wap("website", null, _[1].url)
                  : null,
                i
                  ? o("WAWap").wap(
                      "categories",
                      null,
                      i.map(function (e) {
                        return o("WAWap").wap("category", {
                          id: o("WAWap").CUSTOM_STRING(e.id),
                        });
                      }),
                    )
                  : null,
                a ? s(a) : null,
                m !== void 0
                  ? (function () {
                      var e =
                        m != null
                          ? o(
                              "WAWebBizGetPriceTiersQuery",
                            ).getCachedPriceTierById(m)
                          : { id: "0", symbol: "", description: "" };
                      return o("WAWap").wap(
                        "price_tier",
                        {
                          id: o("WAWap").CUSTOM_STRING(e.id),
                          symbol: o("WAWap").CUSTOM_STRING(e.symbol),
                        },
                        e.description,
                      );
                    })()
                  : null,
                p
                  ? o("WAWap").wap(
                      "service_areas",
                      null,
                      p.map(function (e) {
                        var t;
                        return (t = o("WAWap")).wap(
                          "service_area",
                          null,
                          t.wap("area_description", null, e.areaDescription),
                          t.wap("area_radius_meters", null, String(e.radius)),
                          t.wap(
                            "area_center",
                            null,
                            t.wap("latitude", null, String(e.latitude)),
                            t.wap("longitude", null, String(e.longitude)),
                          ),
                        );
                      }),
                    )
                  : null,
              ),
            ),
            g = yield o("WADeprecatedSendIq").deprecatedSendIq(f, e);
          if (!g.success)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              g.errorCode,
            );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a,
            i = (a = o("WAWap")).wap(
              "iq",
              {
                to: a.S_WHATSAPP_NET,
                xmlns: "w:biz",
                id: a.generateId(),
                type: "set",
              },
              a.wap(
                "business_profile",
                { v: "3", mutation_type: "delta" },
                a.wap("cover_photo", {
                  op: "update",
                  id: a.CUSTOM_STRING(t.toString()),
                  ts: a.CUSTOM_STRING(n.toString()),
                  token: a.CUSTOM_STRING(r),
                }),
              ),
            ),
            l = yield o("WADeprecatedSendIq").deprecatedSendIq(i, e);
          if (!l.success)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              l.errorCode,
            );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = (n = o("WAWap")).wap(
              "iq",
              {
                to: n.S_WHATSAPP_NET,
                xmlns: "w:biz",
                id: n.generateId(),
                type: "set",
              },
              n.wap(
                "business_profile",
                { v: "3", mutation_type: "delta" },
                n.wap("cover_photo", { op: "delete", id: n.CUSTOM_STRING(t) }),
              ),
            ),
            a = yield o("WADeprecatedSendIq").deprecatedSendIq(r, e);
          if (!a.success)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              a.errorCode,
            );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.updateCartEnabled = d),
      (l.editBusinessProfile = p),
      (l.sendCoverPhoto = f),
      (l.deleteCoverPhoto = h));
  },
  98,
);
