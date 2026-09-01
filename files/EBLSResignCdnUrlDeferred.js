__d(
  "EBLSResignCdnUrlDeferred",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("EBLSResignCdnUrl").__setRef(
      "EBLSResignCdnUrlDeferred",
    );
    function s(t) {
      return e.load().then(function (e) {
        return e.resignCdnUrlUsingEbdb(t);
      });
    }
    l.eblsResignCdnUrlWithGraphQL = s;
  },
  98,
);
