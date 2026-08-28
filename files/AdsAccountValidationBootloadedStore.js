__d(
  "AdsAccountValidationBootloadedStore",
  ["AdsBootloadedValidationStore", "JSResource", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("AdsBootloadedValidationStore"))(
      r("JSResource")("AdsAccountValidationStore").__setRef(
        "AdsAccountValidationBootloadedStore",
      ),
    );
    r("requireWeak")("AdsAccountValidationStore", function (t) {
      return e.loadStorePostDispatch(t);
    });
    var s = e;
    l.default = s;
  },
  98,
);
