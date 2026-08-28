__d(
  "FBPayAddressTypeaheadViewListStrategyUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return "force-off";
    }
    function l(e) {
      var t = document.activeElement;
      return (
        e ||
        ((t == null ? void 0 : t.getAttribute("autocomplete")) !==
          "address-line1" &&
          (t == null ? void 0 : t.getAttribute("autocomplete")) !== "force-off")
      );
    }
    function s() {
      return "web";
    }
    ((i.getAutoCompleteStateOffType = e),
      (i.getShouldDisableTypeaheadCheck = l),
      (i.getPlatformType = s));
  },
  66,
);
