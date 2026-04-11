__d(
  "WAWebBusinessAdCreationUtils",
  [
    "WALogger",
    "WAWebQueryLinkedAccountNonceJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        "whatsapp_smb_web_ad_creation_home_screen_icon",
        "whatsapp_smb_web_ad_creation_home_menu_item",
        "whatsapp_smb_web_business_tools_list_item",
        "whatsapp_smb_web_catalog",
        "whatsapp_smb_web_catalog_product",
      ],
      c = "https://www.facebook.com/page_promotions/create?",
      d = "https://www.facebook.com/",
      m = "/ad_center/?ref_source=",
      p = "page_id",
      _ = "so",
      f = "source",
      g = "request_data",
      h = "objective",
      y = "https://www.facebook.com/pages/whatsapp?",
      C = "code",
      b = "pn",
      v = "value_prop",
      S = "redirect_url",
      R = function (t, n, r, o) {
        var e = new URLSearchParams();
        return (
          e.append(C, t),
          e.append(b, n),
          e.append(v, "Ads"),
          r != null && e.append(p, r),
          e.append(S, o),
          y + e.toString()
        );
      },
      L = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.activeAccountInfo,
            a = t.flowId,
            i = t.sourceAdCreation,
            l = new URLSearchParams();
          l.append(h, "boosted_message");
          var s = n === "not-linked" ? void 0 : n.id;
          s != null && l.append(p, s);
          var u = { flow_id: a },
            d = JSON.stringify(u),
            m;
          switch (t.sourceAdCreation) {
            case "whatsapp_smb_web_catalog":
            case "whatsapp_smb_web_catalog_product":
              m = {
                whatsapp_media_source_type: "catalog",
                whatsapp_catalog_product_ids: [t.productId],
              };
              break;
            default:
              (t.sourceAdCreation,
                (m = { whatsapp_media_source_type: "new_content_creation" }));
              break;
          }
          var y = JSON.stringify(m);
          (l.append(f, i), l.append(g, btoa(d)), l.append(_, btoa(y)));
          var C = n !== "not-linked" && n.type === "whatsapp",
            b = C && n !== "not-linked" && n.hasCreatedAd,
            v = n !== "not-linked" && n.hasFacebookPage;
          if (!v || b) {
            var S = yield o("WAWebQueryLinkedAccountNonceJob").queryNonce();
            if (S == null)
              throw (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] AdCreation URL Nonce is null",
                    ])),
                ),
                r("err")("[ctwa] AdCreation URL Nonce is null")
              );
            return R(
              S,
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
              s,
              c + l.toString(),
            );
          }
          return c + l.toString();
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      E = function (t, n) {
        return d + t.id + m + n;
      };
    function k(e) {
      return "https://www.facebook.com/ad_center/manage/?boost_id=" + e;
    }
    function I(e, t) {
      var n = "whatsapp_smb_web_ad_edit_manage_ads_ad_row_menu";
      return (
        "https://www.facebook.com/ad_center/edit/?boost_id=" +
        e +
        "&entry_point=" +
        n +
        "&flow_id=" +
        t
      );
    }
    function T(e) {
      var t = "whatsapp_smb_web_recreate_ad_manage_ads_ad_row_menu";
      return (
        "https://www.facebook.com/page_promotions/edit/?source=" +
        t +
        "&campaign_group_id=" +
        e
      );
    }
    function D(e) {
      switch (e) {
        case "business_home_qp_card":
          return "whatsapp_smb_web_business_tools_top_card";
        case "banner":
          return "whatsapp_smb_web_ad_creation_home_banner";
        default:
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getAdCreationTypeFromCampaignType: unknown campaign type: ",
                  "",
                ])),
              e,
            ),
            "whatsapp_smb_web_ad_creation_home_banner"
          );
      }
    }
    ((l.ServerConfigurableAdCreationEndpointsAll = u),
      (l.getWhatsappAdCreationUrl = L),
      (l.getWhatsappManageAdsUrl = E),
      (l.getWhatsappViewAdDetailsUrl = k),
      (l.getWhatsappEditAdUrl = I),
      (l.getWhatsappRecreateAdUrl = T),
      (l.getAdCreationTypeFromCampaignType = D));
  },
  98,
);
