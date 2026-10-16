__d(
  "BillingBuyerFXAddCardSuccessUtils",
  ["fbt", "BillingCountryCurrencyUtils", "BillingWizardBaseComponents"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "https://www.facebook.com/business/help";
    function u(e) {
      var t = o("BillingCountryCurrencyUtils").getLocalizedCurrencyName(e);
      return t !== "" ? t : e != null ? e : s._(/*BTDS*/ "your currency");
    }
    function c() {
      return {
        href: e,
        target: "_blank",
        text: s._(/*BTDS*/ "About foreign transaction fees"),
      };
    }
    function d(e) {
      var t = e.cardNetwork,
        n = e.lastFour;
      return s._(
        /*BTDS*/ "{card network} \u00b7\u00b7\u00b7\u00b7 {last four digits} added to account",
        [s._param("card network", t), s._param("last four digits", n)],
      );
    }
    function m(e) {
      var t = e.currentCurrency,
        n = e.currentCurrencyName,
        r = e.preferredChargeCurrency,
        o = e.proposedChargeCurrencyName,
        a = n != null ? n : u(t),
        i = o != null ? o : u(r);
      return s._(
        /*BTDS*/ "This will be charged in {selected currency name}. Switch to {alternate currency name} in Billing & payments to avoid transaction fees of up to 6\u0025.",
        [
          s._param("selected currency name", a),
          s._param("alternate currency name", i),
        ],
      );
    }
    function p(e) {
      var t = e.confirmBuyerFXCurrency,
        n = e.currentCurrency,
        r = e.preferredChargeCurrency,
        o = u(n),
        a = u(r),
        i = t ? a : o,
        l = t ? o : a;
      return {
        body:
          t === !0
            ? s._(
                /*BTDS*/ "You can switch back to charging in {account currency name} anytime in Billing & payments.",
                [s._param("account currency name", l)],
              )
            : s._(
                /*BTDS*/ "Your bank may charge foreign transaction fees of up to 6\u0025. Switch to {local currency name} in Billing & payments to help avoid these fees.",
                [s._param("local currency name", l)],
              ),
        headline: s._(
          /*BTDS*/ "This card will be charged in {selected currency name}",
          [s._param("selected currency name", i)],
        ),
        linkProps: c(),
      };
    }
    function _(e) {
      var t,
        n,
        r = e.buyerFXConfirmBody,
        a = e.confirmBuyerFXCurrency,
        i = e.creditCard,
        l = e.currentCurrency,
        u = e.currentCurrencyName,
        _ = e.preferredChargeCurrency,
        f = e.proposedChargeCurrencyName,
        g = (t = i == null ? void 0 : i.cardNetwork) != null ? t : "",
        h = (n = i == null ? void 0 : i.lastFour) != null ? n : "",
        y =
          g !== "" && h !== ""
            ? d({ cardNetwork: g, lastFour: h })
            : s._(/*BTDS*/ "Card successfully saved"),
        C = a
          ? r != null
            ? r
            : p({
                confirmBuyerFXCurrency: !0,
                currentCurrency: l,
                preferredChargeCurrency: _,
              }).body
          : m({
              currentCurrency: l,
              currentCurrencyName: u,
              preferredChargeCurrency: _,
              proposedChargeCurrencyName: f,
            }),
        b = c();
      return {
        body: o("BillingWizardBaseComponents").withLink(C, b.href, b.text),
        headline: y,
      };
    }
    ((l.getForeignTransactionFeesLinkProps = c),
      (l.getBillingBuyerFXAddCardHeadline = d),
      (l.getBillingBuyerFXAddCardDeclineBody = m),
      (l.getBillingBuyerFXAddCardForwardedMessage = p),
      (l.getBillingBuyerFXAddCardSuccessMessage = _));
  },
  226,
);
