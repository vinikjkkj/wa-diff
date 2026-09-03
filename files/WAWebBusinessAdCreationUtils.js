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
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.activeAccountInfo,
            n = e.flowId,
            a = e.sourceAdCreation,
            i = new URLSearchParams();
          i.append(g, "boosted_message");
          var l = t === "not-linked" ? void 0 : t.id;
          l != null && i.append(m, l);
          var c = { flow_id: n },
            d = JSON.stringify(c),
            h;
          switch (e.sourceAdCreation) {
            case "whatsapp_smb_web_catalog":
            case "whatsapp_smb_web_catalog_product":
              h = {
                whatsapp_media_source_type: "catalog",
                whatsapp_catalog_product_ids: [e.productId],
              };
              break;
            default:
              (e.sourceAdCreation,
                (h = { whatsapp_media_source_type: "new_content_creation" }));
              break;
          }
          var y = JSON.stringify(h);
          (i.append(_, a), i.append(f, btoa(d)), i.append(p, btoa(y)));
          var C = t !== "not-linked" && t.type === "whatsapp",
            b = C && t !== "not-linked" && t.hasCreatedAd,
            v = t !== "not-linked" && t.hasFacebookPage;
          if (!v || b) {
            var R = yield o("WAWebQueryLinkedAccountNonceJob").queryNonce();
            if (R == null)
              throw (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] AdCreation URL Nonce is null",
                    ])),
                ),
                r("err")("[ctwa] AdCreation URL Nonce is null")
              );
            return S({
              adCreationUrl: u + i.toString(),
              nonce: R,
              pageId: l,
              phoneNumber: o(
                "WAWebUserPrefsMeUser",
              ).getMePnUserOrThrow_DO_NOT_USE().user,
            });
          }
          return u + i.toString();
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return c + e.id + d + t;
    }
    function k(t) {
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
    ((l.getWhatsappAdCreationUrl = R),
      (l.getWhatsappManageAdsUrl = E),
      (l.getAdCreationTypeFromCampaignType = k));
  },
  98,
);
