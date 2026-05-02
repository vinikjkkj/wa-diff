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
      };
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.activeAccountInfo,
            n = e.flowId,
            a = e.sourceAdCreation,
            i = new URLSearchParams();
          i.append(h, "boosted_message");
          var l = t === "not-linked" ? void 0 : t.id;
          l != null && i.append(p, l);
          var u = { flow_id: n },
            d = JSON.stringify(u),
            m;
          switch (e.sourceAdCreation) {
            case "whatsapp_smb_web_catalog":
            case "whatsapp_smb_web_catalog_product":
              m = {
                whatsapp_media_source_type: "catalog",
                whatsapp_catalog_product_ids: [e.productId],
              };
              break;
            default:
              (e.sourceAdCreation,
                (m = { whatsapp_media_source_type: "new_content_creation" }));
              break;
          }
          var y = JSON.stringify(m);
          (i.append(f, a), i.append(g, btoa(d)), i.append(_, btoa(y)));
          var C = t !== "not-linked" && t.type === "whatsapp",
            b = C && t !== "not-linked" && t.hasCreatedAd,
            v = t !== "not-linked" && t.hasFacebookPage;
          if (!v || b) {
            var S = yield o("WAWebQueryLinkedAccountNonceJob").queryNonce();
            if (S == null)
              throw (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] AdCreation URL Nonce is null",
                    ])),
                ),
                r("err")("[ctwa] AdCreation URL Nonce is null")
              );
            return R(
              S,
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
              l,
              c + i.toString(),
            );
          }
          return c + i.toString();
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return d + e.id + m + t;
    }
    function I(e) {
      return "https://www.facebook.com/ad_center/manage/?boost_id=" + e;
    }
    function T(e, t) {
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
    function D(e) {
      var t = "whatsapp_smb_web_recreate_ad_manage_ads_ad_row_menu";
      return (
        "https://www.facebook.com/page_promotions/edit/?source=" +
        t +
        "&campaign_group_id=" +
        e
      );
    }
    function x(t) {
      switch (t) {
        case "business_home_qp_card":
          return "whatsapp_smb_web_business_tools_top_card";
        case "banner":
          return "whatsapp_smb_web_ad_creation_home_banner";
        default:
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getAdCreationTypeFromCampaignType: unknown campaign type: ",
                  "",
                ])),
              t,
            ),
            "whatsapp_smb_web_ad_creation_home_banner"
          );
      }
    }
    ((l.ServerConfigurableAdCreationEndpointsAll = u),
      (l.getWhatsappAdCreationUrl = L),
      (l.getWhatsappManageAdsUrl = k),
      (l.getWhatsappViewAdDetailsUrl = I),
      (l.getWhatsappEditAdUrl = T),
      (l.getWhatsappRecreateAdUrl = D),
      (l.getAdCreationTypeFromCampaignType = x));
  },
  98,
);
