__d(
  "WAWebBizParseProductGraphql",
  [
    "WANullthrows",
    "WAWebBizCartConstants",
    "WAWebBizGatingUtils",
    "WAWebBizParseProductGraphql_product.graphql",
    "WAWebProductTypes.flow",
    "WAWebSignedShimmedUrl",
    "WAWebSyntheticCountryCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "compliance_info",
        "product_availability",
        "sale_price",
        "status_info",
      ],
      s,
      u = {
        AVAILABLE_FOR_ANOTHER_POSTCODE: o("WAWebProductTypes.flow")
          .ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE,
        IN_STOCK: o("WAWebProductTypes.flow").ProductAvailability.IN_STOCK,
        OUT_OF_STOCK: o("WAWebProductTypes.flow").ProductAvailability
          .OUT_OF_STOCK,
      };
    function c(t) {
      var n,
        a,
        i,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b = t.compliance_info,
        v = t.product_availability,
        S = t.sale_price,
        R = t.status_info,
        L = babelHelpers.objectWithoutPropertiesLoose(t, e),
        E = (n = (a = L.media) == null ? void 0 : a.images) != null ? n : [],
        k = E[0],
        I = babelHelpers.arrayLikeToArray(E).slice(1),
        T = babelHelpers.extends(
          {
            id: r("WANullthrows")(L.id),
            retailer_id: (i = L.retailer_id) != null ? i : "",
            name: r("WANullthrows")(L.name),
            description: (l = L.description) != null ? l : "",
            url: (s = L.url) != null ? s : "",
            currency: L.currency,
            price: L.price,
            is_hidden: L.is_hidden === "ISHIDDEN_TRUE",
            is_sanctioned: (c = L.is_sanctioned) != null ? c : !1,
            max_available:
              (d = L.max_available) != null
                ? d
                : o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY,
            availability:
              v && v in u
                ? u[v]
                : o("WAWebProductTypes.flow").ProductAvailability.UNKNOWN,
          },
          (S == null ? void 0 : S.price) != null
            ? babelHelpers.extends(
                { sale_price: S.price },
                S.start_date != null && S.end_date != null
                  ? { sale_start_date: S.start_date, sale_end_date: S.end_date }
                  : null,
              )
            : null,
          {
            checkmark: L.belongs_to === "true",
            image_hashes_for_whatsapp: ((m =
              (p = L.media) == null ? void 0 : p.images) != null
              ? m
              : []
            ).map(function (e) {
              return r("WANullthrows")(e.id);
            }),
            image_cdn_urls: k
              ? [
                  {
                    key: "requested",
                    value: r("WANullthrows")(k.request_image_url),
                  },
                  {
                    key: "full",
                    value: r("WANullthrows")(k.original_image_url),
                  },
                ]
              : [],
            additional_image_cdn_urls: I.map(function (e) {
              return [
                {
                  key: "requested",
                  value: r("WANullthrows")(e.request_image_url),
                },
                { key: "full", value: r("WANullthrows")(e.original_image_url) },
              ];
            }),
            whatsapp_product_can_appeal:
              (R == null ? void 0 : R.can_appeal) === "true",
            capability_to_review_status: [
              {
                key: "WHATSAPP",
                value:
                  (_ = R == null ? void 0 : R.status) != null ? _ : "APPROVED",
              },
            ],
            videos:
              (f = L.media) == null || (f = f.videos) == null
                ? void 0
                : f.map(function (e) {
                    return {
                      id: r("WANullthrows")(e.id),
                      original_video_url: r("WANullthrows")(
                        e.original_video_url,
                      ),
                      thumbnail_url: r("WANullthrows")(e.thumbnail_url),
                    };
                  }),
            variant_info:
              L.variant_info != null
                ? {
                    listing_details: L.variant_info.listing_details
                      ? {
                          description:
                            L.variant_info.listing_details.description,
                          multi_price:
                            L.variant_info.listing_details.multi_price,
                          lowest_price:
                            L.variant_info.listing_details.lowest_price,
                        }
                      : void 0,
                    availability: L.variant_info.availability
                      ? {
                          listing: L.variant_info.availability.listing.map(
                            function (e) {
                              return {
                                is_available: e.is_available,
                                options: e.options.map(function (e) {
                                  return { name: e.name, value: e.value };
                                }),
                                product_id: e.product_id,
                              };
                            },
                          ),
                        }
                      : void 0,
                    types:
                      (g =
                        (h = L.variant_info) == null
                          ? void 0
                          : h.types.map(function (e) {
                              return {
                                name: e.name,
                                options: e.options.map(function (e) {
                                  var t;
                                  return (
                                    e.thumbnail_media &&
                                      (t = {
                                        id: e.thumbnail_media.id,
                                        original_dimensions: e.thumbnail_media
                                          .original_dimensions
                                          ? {
                                              height:
                                                e.thumbnail_media
                                                  .original_dimensions.height,
                                              width:
                                                e.thumbnail_media
                                                  .original_dimensions.width,
                                            }
                                          : void 0,
                                        original_image_url:
                                          e.thumbnail_media.original_image_url,
                                        request_image_url:
                                          e.thumbnail_media.request_image_url,
                                      }),
                                    { value: e.value, thumbnail_media: t }
                                  );
                                }),
                              };
                            })) != null
                        ? g
                        : [],
                    variant_properties:
                      (y =
                        (C = L.variant_info) == null
                          ? void 0
                          : C.variant_properties.map(function (e) {
                              return { name: e.name, value: e.value };
                            })) != null
                        ? y
                        : [],
                  }
                : void 0,
          },
        );
      if (L.compliance_category === "COMPLIANCECATEGORY_COUNTRYORIGINEXEMPT")
        if (
          b != null &&
          b.country_code_origin != null &&
          b.importer_address == null &&
          o("WAWebBizGatingUtils").isCountryOfOriginEnabled()
        ) {
          var D;
          ((T.compliance_info = {
            country_code_origin:
              (D = b.country_code_origin) != null ? D : void 0,
          }),
            (T.importer_information_exempt = !0));
        } else
          b == null && o("WAWebBizGatingUtils").isCountryOfOriginEnabled()
            ? (T.importer_information_exempt = !0)
            : (T.compliance_info = {
                country_code_origin: o("WAWebSyntheticCountryCode")
                  .SyntheticCountryCode.NotApplicable,
              });
      else if (b != null) {
        var x = b.importer_address;
        if (x) {
          var N, M, w, A, F;
          T.compliance_info = {
            country_code_origin:
              (N = b.country_code_origin) != null ? N : void 0,
            importer_name: (M = b.importer_name) != null ? M : void 0,
            importer_address: {
              street1: r("WANullthrows")(x == null ? void 0 : x.street1),
              street2:
                (w = x == null ? void 0 : x.street2) != null ? w : void 0,
              postal_code:
                (A = x == null ? void 0 : x.postal_code) != null ? A : void 0,
              city: r("WANullthrows")(x == null ? void 0 : x.city),
              region: (F = x == null ? void 0 : x.region) != null ? F : void 0,
              country_code: r("WANullthrows")(
                x == null ? void 0 : x.country_code,
              ),
            },
          };
        } else {
          var $, P;
          T.compliance_info = {
            country_code_origin:
              ($ = b.country_code_origin) != null ? $ : void 0,
            importer_name: (P = b.importer_name) != null ? P : void 0,
            importer_address: void 0,
          };
        }
      }
      return (
        L.shimmed_url != null &&
          (T.signedShimmedUrl = o("WAWebSignedShimmedUrl").asSignedShimmedUrl(
            L.shimmed_url,
          )),
        T
      );
    }
    l.parseProductGraphQL = c;
  },
  98,
);
