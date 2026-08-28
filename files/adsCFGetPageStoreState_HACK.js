__d(
  "adsCFGetPageStoreState_HACK",
  [
    "AFCPromotableObjectStore",
    "AdsAccountStore",
    "AdsAccountUtils",
    "AdsDataAtom",
    "AdsPageStore",
    "AdsPromotablePageListStore",
    "distinctArray",
    "intersectArrays",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsAccountStore").getDispatchToken(),
          r("AdsPageStore").getDispatchToken(),
          r("AdsPromotablePageListStore").getDispatchToken(),
          r("AFCPromotableObjectStore").getDispatchToken(),
        ]);
      var t = r("AdsPromotablePageListStore").getFor().list,
        n = r("AdsAccountUtils").hasCapability(
          r("AdsAccountStore").getSelectedAccount().getValue(),
          "CAN_USE_AAC_ENFORCE_PO_SELECTOR",
        );
      if (n) {
        var o = r("AFCPromotableObjectStore")
          .get(r("AdsAccountStore").getSelectedAccountIDX())
          .getValue();
        if (o) {
          var a = (s || (s = r("distinctArray")))(o.promotable_page_ids);
          t = r("intersectArrays")(a, t);
        }
      }
      return r("AdsPageStore").getAll(t);
    }
    l.default = u;
  },
  98,
);
