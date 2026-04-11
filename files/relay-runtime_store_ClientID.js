__d(
  "relay-runtime/store/ClientID",
  ["relay-runtime/util/RelayFeatureFlags", "relay-runtime/util/StringInterner"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/util/StringInterner").intern,
      l = "client:";
    function s(t, r, o) {
      var a =
          n("relay-runtime/util/RelayFeatureFlags").STRING_INTERN_LEVEL <= 0
            ? t
            : e(
                t,
                n("relay-runtime/util/RelayFeatureFlags").MAX_DATA_ID_LENGTH,
              ),
        i = a + ":" + r;
      return (
        o != null && (i += ":" + o),
        i.indexOf(l) !== 0 && (i = l + i),
        i
      );
    }
    function u(e) {
      return e.indexOf(l) === 0;
    }
    var c = 0;
    function d() {
      return l + "local:" + c++;
    }
    function m(e, t, n) {
      var r = "" + l + e + ":" + t;
      return (n != null && (r += ":" + n), r);
    }
    a.exports = {
      generateClientID: s,
      generateClientObjectClientID: m,
      generateUniqueClientID: d,
      isClientID: u,
    };
  },
  null,
);
