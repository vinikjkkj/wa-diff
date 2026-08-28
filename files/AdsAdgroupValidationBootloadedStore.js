__d(
  "AdsAdgroupValidationBootloadedStore",
  ["AdsBootloadedValidationStore", "JSResource", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("AdsBootloadedValidationStore"))(
      r("JSResource")("AdsAdgroupValidationStore").__setRef(
        "AdsAdgroupValidationBootloadedStore",
      ),
    );
    r("requireWeak")("AdsAdgroupValidationStore", function (t) {
      return e.loadStorePostDispatch(t);
    });
    var s = e;
    l.default = s;
  },
  98,
);
