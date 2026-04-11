__d(
  "WAWebAPIParser",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.encryptedKeyElementValue,
        n = e.nonceElementValue,
        r = e.authTagElementValue,
        o = e.encryptedDataElementValue;
      return { key: t, nonce: n, tag: r, data: o };
    }
    function c(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l = {
          is_eligible_to_link_to_linked_fb:
            (t = e.is_eligible_to_link_to_linked_fb) != null ? t : !1,
          is_eligible_to_link_to_linked_ig:
            (n = e.is_eligible_to_link_to_linked_ig) != null ? n : !1,
          is_eligible_to_link_to_linked_rl:
            (r = e.is_eligible_to_link_to_linked_rl) != null ? r : !1,
          is_eligible_to_link_to_unlinked_fb:
            (o = e.is_eligible_to_link_to_unlinked_fb) != null ? o : !1,
          is_eligible_to_link_to_unlinked_ig:
            (a = e.is_eligible_to_link_to_unlinked_ig) != null ? a : !1,
          is_eligible_to_link_to_unlinked_rl:
            (i = e.is_eligible_to_link_to_unlinked_rl) != null ? i : !1,
        };
      return l;
    }
    function d(e) {
      var t = null,
        n = null;
      for (var r of e)
        (r.waffle_da === "F" && (t = r.waffle_di),
          r.waffle_da === "I" && (n = r.waffle_di));
      return { fbCrosspostingDestinationId: t, igCrosspostingDestinationId: n };
    }
    function m(t) {
      var n,
        r = (n = t.waffle_fx_service_data) == null ? void 0 : n.services,
        a = r == null ? void 0 : r.foa_to_wa_link_eligibility;
      if (a == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] foAToWALinkEligibility is null",
            ])),
        );
        return;
      }
      var i = c(babelHelpers.extends({}, a)),
        l = r == null ? void 0 : r.waffle_sxs;
      if (l == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[WAFFLE] destinationList is null",
            ])),
        );
        return;
      }
      var u = d(l),
        m = u.fbCrosspostingDestinationId,
        p = u.igCrosspostingDestinationId;
      return {
        fbCrosspostingDestinationId: m,
        igCrosspostingDestinationId: p,
        foAToWALinkEligibility: i,
      };
    }
    ((l.parseRSAEncryptionMetadataMixin = u), (l.parseServiceData = m));
  },
  98,
);
