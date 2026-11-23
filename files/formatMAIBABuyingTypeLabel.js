__d(
  "formatMAIBABuyingTypeLabel",
  ["AdsBuyingTypeNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null || e === ""
        ? null
        : e === "AUCTION"
          ? String(r("AdsBuyingTypeNames").AUCTION)
          : e === "FIXED_PRICE"
            ? String(r("AdsBuyingTypeNames").FIXED_PRICE)
            : e === "RESERVED"
              ? String(r("AdsBuyingTypeNames").RESERVED)
              : e === "MIXED"
                ? String(r("AdsBuyingTypeNames").MIXED)
                : e;
    }
    l.default = e;
  },
  98,
);
