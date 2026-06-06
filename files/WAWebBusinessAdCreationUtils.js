__d(
  "WAWebBusinessAdCreationUtils",
  [
    "WALogger",
    "WAWebQueryLinkedAccountNonceJob",
    "WAWebUserPrefsMeUser",
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
      R = function (t) {
        var e = t.adCreationUrl,
          n = t.nonce,
          r = t.pageId,
          o = t.phoneNumber,
          a = new URLSearchParams();
        return (
          a.append(C, n),
          a.append(b, o),
          a.append(v, "Ads"),
          r != null && a.append(p, r),
          a.append(S, e),
          y + a.toString()
        );
      };
    async function L(t) {
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
        var S = await o("WAWebQueryLinkedAccountNonceJob").queryNonce();
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
        return R({
          adCreationUrl: c + l.toString(),
          nonce: S,
          pageId: s,
          phoneNumber: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
            .user,
        });
      }
      return c + l.toString();
    }
    function E(e, t) {
      return d + e.id + m + t;
    }
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
