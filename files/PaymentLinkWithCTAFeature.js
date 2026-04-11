__d(
  "PaymentLinkWithCTAFeature",
  [
    "$InternalEnum",
    "PaymentLink",
    "WALogger",
    "WAWebABProps",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({
        LINK_PREVIEW_HEADER_WITH_CTA: 0,
        ORDER_HEADER_WITH_CTA: 1,
        DEFAULT: 2,
      });
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_payment_links_cta_button_kill_switch",
      );
    }
    function c(t) {
      var n;
      if (u()) return s.DEFAULT;
      try {
        var r = JSON.parse(
            o("WAWebABProps").getABPropConfigValue(
              "smb_payment_links_cta_psp_list",
            ),
          ),
          a = r == null ? void 0 : r.psp;
        if (!Array.isArray(a) || (a == null ? void 0 : a.includes(t)) === !1)
          return s.DEFAULT;
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK WITH CTA] error while parsing json for ab prop smb_payment_links_cta_psp_list: ",
                "",
              ])),
            t,
          ),
          s.DEFAULT
        );
      }
      return o("WAWebABProps").getABPropConfigValue("payment_br_holdout")
        ? s.DEFAULT
        : (n = s.cast(
              o("WAWebABProps").getABPropConfigValue(
                "smb_payment_links_cta_variant",
              ),
            )) != null
          ? n
          : s.DEFAULT;
    }
    function d(e, t) {
      var n = e == null ? void 0 : e.psp;
      if (n == null) return t;
      var r = c(n);
      return r === s.LINK_PREVIEW_HEADER_WITH_CTA
        ? babelHelpers.extends({}, t, {
            button: { displayText: o("PaymentLink").CTA_TEXT },
            header: {
              headerType: o("WAWebProtobufsE2E.pb")
                .Message$PaymentLinkMetadata$PaymentLinkHeader$PaymentLinkHeaderType
                .LINK_PREVIEW,
            },
          })
        : r === s.ORDER_HEADER_WITH_CTA
          ? babelHelpers.extends({}, t, {
              button: { displayText: o("PaymentLink").CTA_TEXT },
              header: {
                headerType: o("WAWebProtobufsE2E.pb")
                  .Message$PaymentLinkMetadata$PaymentLinkHeader$PaymentLinkHeaderType
                  .ORDER,
              },
            })
          : r === s.DEFAULT
            ? t
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    r,
                );
              })();
    }
    ((l.PaymentLinkVariant = s),
      (l.isKillSwitchEnabled = u),
      (l.getMetadata = d));
  },
  98,
);
