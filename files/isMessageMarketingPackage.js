__d(
  "isMessageMarketingPackage",
  ["AdsPECrepePackages"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("AdsPECrepePackages")).PAID_MESSAGING_PACKAGE_CONFIG_ID,
        e.PAID_MESSAGING_DEV_PACKAGE_CONFIG_ID,
        e.DM_SHOPS_DISCOUNT_REMINDER_MESSAGE_PACKAGE_CONFIG_ID,
        e.DM_SHOPS_ABANDON_CART_MESSAGE_PACKAGE_CONFIG_ID,
      ];
    function u(e) {
      return e != null && s.includes(e);
    }
    l.default = u;
  },
  98,
);
