__d(
  "WAWebPairAdopterRegistry",
  [],
  function (t, n, r, o, a, i) {
    var e = [
      {
        adopterKey: 7652,
        gate: "capi_messaging_pairs_vpv_enabled",
        templateApproved: !1,
      },
    ];
    function l(t) {
      return e.find(function (e) {
        return e.adopterKey === t;
      });
    }
    i.findPairAdopter = l;
  },
  66,
);
