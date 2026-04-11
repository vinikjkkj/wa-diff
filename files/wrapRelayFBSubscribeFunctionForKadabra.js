__d(
  "wrapRelayFBSubscribeFunctionForKadabra",
  ["cr:8574", "justknobx", "preprocessKadabraSubscriptionResponse"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("5277");
    function s(t) {
      return e
        ? function (e, o, a) {
            var i = t(e, o, a),
              l = r("preprocessKadabraSubscriptionResponse")(i);
            return (n("cr:8574") != null && (l = n("cr:8574")(l)), l);
          }
        : t;
    }
    l.default = s;
  },
  98,
);
