__d(
  "WAWebBizCatalogManagementParseProductGraphql",
  [
    "WAWebBizCatalogManagementParseProductGraphql_product.graphql",
    "WAWebBizCatalogParseProduct",
    "WAWebBizGatingUtils",
    "WAWebBizParseProductGraphql",
    "WAWebProductTypes.flow",
    "WAWebSyntheticCountryCode",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizCatalogManagementParseProductGraphql_product.graphql",
            ));
    function u(e) {
      var t, n, r, a, i, l, s, u, c;
      return o("WAWebBizParseProductGraphql").parseProductGraphQL({
        id: e.id,
        name: e.name,
        description: e.description,
        url: e.url,
        shimmed_url: e.shimmed_url,
        price: e.price,
        currency: e.currency,
        retailer_id: e.retailer_id,
        belongs_to: e.belongs_to,
        status_info: {
          can_appeal: (t = e.status_info) == null ? void 0 : t.can_appeal,
          status: (n = e.status_info) == null ? void 0 : n.status,
        },
        product_availability: e.availability,
        max_available: e.max_available,
        sale_price: {
          start_date: (r = e.sale_price) == null ? void 0 : r.start_date,
          end_date: (a = e.sale_price) == null ? void 0 : a.end_date,
          price: (i = e.sale_price) == null ? void 0 : i.price,
        },
        media: {
          images:
            (l =
              (s = e.media) == null
                ? void 0
                : s.images.map(function (e) {
                    return {
                      id: e.id,
                      original_image_url: e.original_image_url,
                      request_image_url: e.request_image_url,
                    };
                  })) != null
              ? l
              : [],
          videos: ((u = (c = e.media) == null ? void 0 : c.videos) != null
            ? u
            : []
          ).map(function (e) {
            return {
              id: e.id,
              original_video_url: e.original_video_url,
              thumbnail_url: e.thumbnail_url,
            };
          }),
        },
        compliance_info:
          e.compliance_info != null
            ? {
                country_code_origin: e.compliance_info.country_code_origin,
                importer_name: e.compliance_info.importer_name,
                importer_address:
                  e.compliance_info.importer_address != null
                    ? {
                        street1: e.compliance_info.importer_address.street1,
                        street2: e.compliance_info.importer_address.street2,
                        postal_code:
                          e.compliance_info.importer_address.postal_code,
                        city: e.compliance_info.importer_address.city,
                        region: e.compliance_info.importer_address.region,
                        country_code:
                          e.compliance_info.importer_address.country_code,
                      }
                    : null,
              }
            : null,
        compliance_category: o(
          "WAWebProductTypes.flow",
        ).mapComplianceCategoryToWASchema(e.compliance_category),
        is_hidden: o("WAWebProductTypes.flow").mapIsHiddenToWASchema(
          e.is_hidden,
        ),
        is_sanctioned: e.is_sanctioned,
        variant_info: e.variant_info,
      });
    }
    function c(e) {
      var t;
      if (e.imageCdnUrl == null)
        throw r("err")("productModelToGraphQLInput: imageCdnUrl is null");
      var n = [{ url: e.imageCdnUrl }];
      e.additionalImageCdnUrl != null &&
        n.push.apply(
          n,
          e.additionalImageCdnUrl.map(function (e) {
            return { url: e };
          }),
        );
      var a = { name: e.name, media: { image: n }, is_hidden: e.isHidden };
      (r("isStringNullOrEmpty")(e.description) ||
        (a.description = e.description),
        r("isStringNullOrEmpty")(e.url) || (a.url = e.url),
        r("isStringNullOrEmpty")(e.retailerId) ||
          (a.retailer_id = e.retailerId),
        e.priceAmount1000 != null &&
          ((a.currency = e.currency), (a.price = e.priceAmount1000.toString())),
        e.salePriceAmount1000 != null &&
          (a.sale_price = e.salePriceAmount1000.toString()),
        e.videos != null &&
          (a.media.video = e.videos.map(function (e) {
            return { url: e.original_video_url };
          })));
      var i = e.complianceInfo && d(e.complianceInfo);
      return (
        i != null && (a.compliance_info = i),
        (((t = e.complianceInfo) == null ? void 0 : t.countryCodeOrigin) ===
          o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable ||
          (e.importerInformationExempt &&
            o("WAWebBizGatingUtils").isCountryOfOriginEnabled())) &&
          (a.compliance_category = o(
            "WAWebProductTypes.flow",
          ).ProductComplianceCategory.CountryOriginExempt),
        a
      );
    }
    function d(e) {
      var t = o("WAWebBizCatalogParseProduct").scanComplianceInfoForMissingData(
          e,
        ),
        n = t.hasCountryCodeOrigin,
        a = t.hasImporterAddress,
        i = t.hasImporterName,
        l = t.isExempt;
      if (!(l || !(n || i || a))) {
        var s = {
          country_code_origin:
            n && e.countryCodeOrigin != null ? e.countryCodeOrigin : "",
        };
        if ((i && (s.importer_name = e.importerName), a)) {
          var u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y = {
              country_code:
                (u =
                  (c = e.importerAddress) == null ? void 0 : c.countryCode) !=
                null
                  ? u
                  : "",
              city:
                (d = (m = e.importerAddress) == null ? void 0 : m.city) != null
                  ? d
                  : "",
              street1:
                (p = (_ = e.importerAddress) == null ? void 0 : _.street1) !=
                null
                  ? p
                  : "",
            };
          (r("isStringNullOrEmpty")(
            (f = e.importerAddress) == null ? void 0 : f.street2,
          ) || (y.street2 = e.importerAddress.street2),
            r("isStringNullOrEmpty")(
              (g = e.importerAddress) == null ? void 0 : g.region,
            ) || (y.region = e.importerAddress.region),
            r("isStringNullOrEmpty")(
              (h = e.importerAddress) == null ? void 0 : h.postalCode,
            ) || (y.postal_code = e.importerAddress.postalCode));
        }
        return s;
      }
    }
    ((l.PARSE_PRODUCT_FRAGMENT = s),
      (l.parseProductGraphQL = u),
      (l.productModelToGraphQLInput = c));
  },
  98,
);
