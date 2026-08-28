__d(
  "AdsPixelConversionStandardEvents",
  ["fbt", "ImmutableObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      ViewContent: {
        name: l._(/*BTDS*/ "View content"),
        description: l._(
          /*BTDS*/ "Track key page views (ex: product page, landing page or article)",
        ),
        code: "fbq('track', 'ViewContent');",
        custom_event_type: "CONTENT_VIEW",
      },
      Search: {
        name: l._(/*BTDS*/ "Search"),
        description: l._(
          /*BTDS*/ "Track searches on your website (ex. product searches)",
        ),
        code: "fbq('track', 'Search');",
        custom_event_type: "SEARCH",
      },
      AddToCart: {
        name: l._(/*BTDS*/ "Add to cart"),
        description: l._(
          /*BTDS*/ "Track when items are added to a shopping cart (ex. click\/landing page on Add to Cart button)",
        ),
        code: "fbq('track', 'AddToCart');",
        custom_event_type: "ADD_TO_CART",
      },
      AddToWishlist: {
        name: l._(/*BTDS*/ "Add to wishlist"),
        description: l._(
          /*BTDS*/ "Track when products are added to a wishlist (ex. click\/landing page on Add to Wishlist button)",
        ),
        code: "fbq('track', 'AddToWishlist');",
        custom_event_type: "ADD_TO_WISHLIST",
      },
      InitiateCheckout: {
        name: l._(/*BTDS*/ "Initiate checkout"),
        description: l._(
          /*BTDS*/ "Track when people enter the checkout flow (ex. click\/landing page on checkout button)",
        ),
        code: "fbq('track', 'InitiateCheckout');",
        custom_event_type: "INITIATED_CHECKOUT",
      },
      AddPaymentInfo: {
        name: l._(/*BTDS*/ "Add payment info"),
        description: l._(
          /*BTDS*/ "Track when payment information is added in the checkout flow (ex. click\/landing page on billing info)",
        ),
        code: "fbq('track', 'AddPaymentInfo');",
        custom_event_type: "ADD_PAYMENT_INFO",
      },
      Purchase: {
        name: l._(/*BTDS*/ "Purchase"),
        description: l._(
          /*BTDS*/ 'Track purchases or checkout flow completions (ex. landing on "Thank You" or confirmation page)',
        ),
        code: "fbq('track', 'Purchase', {value: '0.00', currency: 'USD'});",
        custom_event_type: "PURCHASE",
      },
      Lead: {
        name: l._(/*BTDS*/ "Lead"),
        description: l._(
          /*BTDS*/ "Track when a user expresses interest in your offering (ex. form submission, sign up for trial, landing on pricing page)",
        ),
        code: "fbq('track', 'Lead');",
        custom_event_type: "LEAD",
      },
      CompleteRegistration: {
        name: l._(/*BTDS*/ "Complete registration"),
        description: l._(
          /*BTDS*/ "Track when a registration form is completed (ex. complete subscription, sign up for a service)",
        ),
        code: "fbq('track', 'CompleteRegistration');",
        custom_event_type: "COMPLETE_REGISTRATION",
      },
    };
    a.exports = new (n("ImmutableObject"))(e);
  },
  130,
);
