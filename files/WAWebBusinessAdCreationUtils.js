__d(
  "WAWebBusinessAdCreationUtils",
  ["WALogger", "WAWebQueryLinkedAccountNonceJob", "WAWebUserUtils", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "https://www.facebook.com/page_promotions/create?",
      c = "https://www.facebook.com/",
      d = "/ad_center/?ref_source=",
      m = "page_id",
      p = "so",
      _ = "source",
      f = "request_data",
      g = "objective",
      h = "https://www.facebook.com/pages/whatsapp?",
      y = "code",
      C = "pn",
      b = "value_prop",
      v = "redirect_url",
      S = function (t) {
        var e = t.adCreationUrl,
          n = t.nonce,
          r = t.pageId,
          o = t.phoneNumber,
          a = new URLSearchParams();
        return (
          a.append(y, n),
          a.append(C, o),
          a.append(b, "Ads"),
          r != null && a.append(m, r),
          a.append(v, e),
          h + a.toString()
        );
      };
    async function R(t) {
      var n = t.activeAccountInfo,
        a = t.flowId,
        i = t.sourceAdCreation,
        l = new URLSearchParams();
      l.append(g, "boosted_message");
      var s = n === "not-linked" ? void 0 : n.id;
      s != null && l.append(m, s);
      var c = { flow_id: a },
        d = JSON.stringify(c),
        h;
      switch (t.sourceAdCreation) {
        case "whatsapp_smb_web_catalog":
        case "whatsapp_smb_web_catalog_product":
          h = {
            whatsapp_media_source_type: "catalog",
            whatsapp_catalog_product_ids: [t.productId],
          };
          break;
        default:
          (t.sourceAdCreation,
            (h = { whatsapp_media_source_type: "new_content_creation" }));
          break;
      }
      var y = JSON.stringify(h);
      (l.append(_, i), l.append(f, btoa(d)), l.append(p, btoa(y)));
      var C = n !== "not-linked" && n.type === "whatsapp",
        b = C && n !== "not-linked" && n.hasCreatedAd,
        v = n !== "not-linked" && n.hasFacebookPage;
      if (!v || b) {
        var R = await o("WAWebQueryLinkedAccountNonceJob").queryNonce();
        if (R == null)
          throw (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctwa] AdCreation URL Nonce is null",
                ])),
            ),
            r("err")("[ctwa] AdCreation URL Nonce is null")
          );
        return S({
          adCreationUrl: u + l.toString(),
          nonce: R,
          pageId: s,
          phoneNumber: o("WAWebUserUtils").getMePnUserOrThrow_DO_NOT_USE().user,
        });
      }
      return u + l.toString();
    }
    function L(e, t) {
      return c + e.id + d + t;
    }
    function E(e) {
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
    ((l.getWhatsappAdCreationUrl = R),
      (l.getWhatsappManageAdsUrl = L),
      (l.getAdCreationTypeFromCampaignType = E));
  },
  98,
);
