__d(
  "WAWebBizCatalogParseProduct",
  [
    "WAWebBizCartConstants",
    "WAWebProductTypes.flow",
    "WAWebSignedShimmedUrl",
    "WAWebSyntheticCountryCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      var e,
        n,
        r,
        a = t.child("id").contentString(),
        i = t.maybeChild("url"),
        l = "";
      i && i.hasContent() && (l = i.contentString());
      var u = t.child("name").contentString(),
        d =
          (e = t.maybeAttrString("availability")) != null
            ? e
            : o("WAWebProductTypes.flow").ProductAvailability.UNKNOWN,
        m = o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY,
        p = t.maybeAttrString("max_available");
      p != null && (m = Number(p));
      var _ = t.maybeChild("max_available"),
        f = _ == null ? void 0 : _.contentString();
      f != null && (m = Number(f));
      var g = t.maybeChild("description"),
        h = g ? g.contentString() : "",
        y = t.maybeChild("belongs_to"),
        C = (y == null ? void 0 : y.contentString()) === "true" || !1,
        b = [],
        v = [],
        S = [],
        R = t.child("media"),
        L = !0;
      R.forEachChildWithTag("image", function (e) {
        if (L)
          ((L = !1),
            b.push({
              key: "requested",
              value: e.child("request_image_url").contentString(),
            }),
            b.push({
              key: "full",
              value: e.child("original_image_url").contentString(),
            }),
            S.push(e.child("id").contentString()));
        else {
          var t = [];
          (t.push({
            key: "requested",
            value: e.child("request_image_url").contentString(),
          }),
            t.push({
              key: "full",
              value: e.child("original_image_url").contentString(),
            }),
            v.push(t),
            S.push(e.child("id").contentString()));
        }
      });
      var E = [];
      R.forEachChildWithTag("video", function (e) {
        var t = e.maybeChild("id"),
          n = e.child("original_video_url").contentString(),
          r = e.maybeChild("thumbnail_url"),
          o = (t == null ? void 0 : t.contentString()) || "",
          a = (r == null ? void 0 : r.contentString()) || "";
        E.push({ id: o, original_video_url: n, thumbnail_url: a });
      });
      var k = t.maybeChild("status_info"),
        I =
          (k == null ? void 0 : k.child("status").contentString()) ||
          "APPROVED",
        T =
          k == null || (n = k.maybeChild("can_appeal")) == null
            ? void 0
            : n.contentString(),
        D = [{ key: "WHATSAPP", value: I }],
        x = t.maybeChild("currency"),
        $ = x ? x.contentString() : void 0,
        P = t.maybeChild("price"),
        N = P == null ? void 0 : P.contentString(),
        M = t.maybeChild("retailer_id"),
        w = M ? M.contentString() : "",
        A = t.hasAttr("is_hidden") ? t.attrString("is_hidden") === "true" : !1,
        F = t.hasAttr("compliance_category")
          ? o("WAWebProductTypes.flow").ProductComplianceCategory.cast(
              t.attrString("compliance_category"),
            )
          : o("WAWebProductTypes.flow").ProductComplianceCategory.Default,
        O = t.maybeChild("sale_price"),
        B = O
          ? babelHelpers.extends(
              {
                sale_price:
                  (r = O.maybeChild("price")) == null
                    ? void 0
                    : r.contentString(),
              },
              O.hasChild("start_date") && O.hasChild("end_date")
                ? {
                    sale_start_date: O.child("start_date").contentString(),
                    sale_end_date: O.child("end_date").contentString(),
                  }
                : null,
            )
          : null,
        W = t.maybeAttrString("is_sanctioned") === "true",
        q = babelHelpers.extends(
          {
            id: a,
            is_hidden: A,
            is_sanctioned: W,
            url: l,
            name: u,
            description: h,
            availability: d,
            max_available: m,
            additional_image_cdn_urls: v,
            image_cdn_urls: b,
            capability_to_review_status: D,
            whatsapp_product_can_appeal: T === "true",
            image_hashes_for_whatsapp: S,
            currency: $,
            price: N,
            retailer_id: w,
            checkmark: C,
            videos: E,
            variant_info: null,
          },
          B,
        ),
        U = t.maybeChild("compliance_info");
      F ===
      o("WAWebProductTypes.flow").ProductComplianceCategory.CountryOriginExempt
        ? (q.compliance_info = c())
        : U && (q.compliance_info = s(U));
      var V = t.maybeChild("shimmed_url");
      if (V != null) {
        var H = V.contentString();
        H !== "" &&
          (q.signedShimmedUrl = o("WAWebSignedShimmedUrl").asSignedShimmedUrl(
            H,
          ));
      }
      return q;
    };
    function s(e) {
      var t,
        n = e.child("country_code_origin").contentString(),
        r =
          (t = e.maybeChild("importer_name")) == null
            ? void 0
            : t.contentString(),
        o = e.maybeChild("importer_address"),
        a = { country_code_origin: n, importer_name: r };
      if (o) {
        var i, l, s;
        a.importer_address = {
          street1: o.child("street1").contentString(),
          street2:
            (i = o.maybeChild("street2")) == null ? void 0 : i.contentString(),
          postal_code:
            (l = o.maybeChild("postal_code")) == null
              ? void 0
              : l.contentString(),
          city: o.child("city").contentString(),
          region:
            (s = o.maybeChild("region")) == null ? void 0 : s.contentString(),
          country_code: o.child("country_code").contentString(),
        };
      }
      return a;
    }
    function u(e) {
      var t =
          (e == null ? void 0 : e.countryCodeOrigin) ===
          String(
            o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable,
          ),
        n = !t && (e == null ? void 0 : e.countryCodeOrigin) !== void 0,
        r = !t && (e == null ? void 0 : e.importerName) !== void 0,
        a =
          !t &&
          (e == null ? void 0 : e.importerAddress) !== void 0 &&
          [
            e.importerAddress.street1,
            e.importerAddress.street2,
            e.importerAddress.city,
            e.importerAddress.region,
            e.importerAddress.postalCode,
            e.importerAddress.countryCode,
          ].some(function (e) {
            return e;
          });
      return {
        isExempt: t,
        hasImporterAddress: a,
        hasImporterName: r,
        hasCountryCodeOrigin: n,
      };
    }
    function c() {
      return {
        country_code_origin: String(
          o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable,
        ),
      };
    }
    ((l.parseProductNode = e), (l.scanComplianceInfoForMissingData = u));
  },
  98,
);
