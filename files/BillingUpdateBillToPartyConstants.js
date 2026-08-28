__d(
  "BillingUpdateBillToPartyConstants",
  ["fbt", "formatDate", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function () {
        var e = new Date();
        return (
          e.setMonth(e.getMonth() + 1),
          e.setDate(1),
          r("formatDate")(e, "F j, Y")
        );
      },
      d = function () {
        return r("formatDate")(new Date(), "F");
      },
      m = function () {
        var e = new Date();
        return (
          e.setMonth(e.getMonth() + 1),
          e.setDate(0),
          r("formatDate")(e, "F j, Y")
        );
      },
      p = {
        adsOptionBodyBillTo: function () {
          return s._(
            /*BTDS*/ "You can pause your ads if you want to evaluate existing campaigns at the end of the month. If your ads continue running, the new bill-to party will be responsible to pay for ad delivery on existing campaigns starting on {effective_date}.",
            [s._param("effective_date", c())],
          );
        },
        adsOptionBodyMi: function () {
          return s._(
            /*BTDS*/ "You can pause your ads if you want to evaluate existing campaigns at the end of the month. If your ads continue running, ad delivery on existing campaigns will be applied to the new monthly invoice starting on {effective_date}.",
            [s._param("effective_date", c())],
          );
        },
        adsOptionHeadline: s._(/*BTDS*/ "Pause or keep ads running?"),
        bodyBillTo: function (t, n, r) {
          return s._(
            /*BTDS*/ "The bill-to party for {account_name} will be updated to {new_bill_to_org} on {effective_date}. Since updates to the bill-to party can only happen at the beginning of a calendar month, {prev_bill_to_org} will receive the {current_month} invoice for this ad account.",
            [
              s._param("account_name", t),
              s._param("new_bill_to_org", n),
              s._param("effective_date", c()),
              s._param("prev_bill_to_org", r),
              s._param("current_month", d()),
            ],
          );
        },
        bodyMi: function (t, n, r) {
          return s._(
            /*BTDS*/ "The monthly invoice for {account name} will be updated to {new mi org name} on {effective date}. Since updates to a monthly invoice can only happen at the beginning of a calendar month, this ad account will remain on {previous mi org name} for the remainder of {current month}.",
            [
              s._param("account name", t),
              s._param("new mi org name", n),
              s._param("effective date", c()),
              s._param("previous mi org name", r),
              s._param("current month", d()),
            ],
          );
        },
        communicateNewEntity: s._(
          /*BTDS*/ "You are responsible for communicating your decision to the new bill-to party.",
        ),
        communicateNewMiOwner: s._(
          /*BTDS*/ "You are responsible for communicating your decision to the new monthly invoicing owner.",
        ),
        footer: function (t) {
          var e = s._(/*BTDS*/ "Terms & Conditions");
          return s._(
            /*BTDS*/ 'By clicking "Confirm" you accept the {linkLabel}.',
            [
              s._param(
                "linkLabel",
                u.jsx(t, {
                  href: "https://www.facebook.com/terms_ads_invoicing.php",
                  inline: !0,
                  label: e,
                  level: 4,
                }),
              ),
            ],
          );
        },
        headlineBillTo: s._(/*BTDS*/ "Updating your bill-to party"),
        headlineMi: s._(/*BTDS*/ "Updating your monthly invoice"),
        keepingAds: s._(/*BTDS*/ "Keep ads running"),
        pausingAds: function () {
          return s._(/*BTDS*/ "Pause ads on {end_of_month}", [
            s._param("end_of_month", m()),
          ]);
        },
        primaryButtonLabel: s._(/*BTDS*/ "Confirm"),
        title: s._(/*BTDS*/ "Confirm updates"),
      },
      _ = p;
    l.default = _;
  },
  226,
);
