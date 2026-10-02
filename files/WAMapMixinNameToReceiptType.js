__d(
  "WAMapMixinNameToReceiptType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      SenderType: "sender",
      ReadType: "read",
      InactiveType: "inactive",
      ReadSelfType: "read-self",
    };
    function l(t) {
      return e[t];
    }
    i.mapMixinNameToReceiptType = l;
  },
  66,
);
