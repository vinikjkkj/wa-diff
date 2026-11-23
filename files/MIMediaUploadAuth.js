__d(
  "MIMediaUploadAuth",
  ["getCometAsyncRequestParams"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("getCometAsyncRequestParams")("POST"),
        t = [];
      for (var n of Object.keys(e)) {
        var o = e[n];
        o != null &&
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(String(o)));
      }
      return t.join("&");
    }
    l.buildMIAuthQueryString = e;
  },
  98,
);
