__d(
  "KeyframesDownloadTracker",
  ["NetworkStatus", "Promise", "XHRRequest", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2,
      u = 250;
    function c(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var o = 0,
          a,
          i = function () {
            (o++,
              new (r("XHRRequest"))(t)
                .setMethod("GET")
                .setResponseType("arraybuffer")
                .setErrorHandler(function (e) {
                  var t = o <= s;
                  t ? r("setTimeout")(i, u) : n(e);
                })
                .setAbortHandler(function (e) {
                  n(e);
                })
                .setResponseHandler(function (t) {
                  e(t);
                })
                .send());
          };
        if (r("NetworkStatus").isOnline()) i();
        else {
          var l = function (t) {
            var e = t.online;
            e && (i(), a.remove());
          };
          a = r("NetworkStatus").onChange(l);
        }
      });
    }
    l.default = c;
  },
  98,
);
