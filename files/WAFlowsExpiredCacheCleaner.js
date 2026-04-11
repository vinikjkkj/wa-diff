__d(
  "WAFlowsExpiredCacheCleaner",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l() {
      return new (e || (e = n("Promise")))(function (e, t) {
        try {
          var n = document.createElement("iframe");
          ((n.style.display = "none"),
            (n.src = "https://flows.whatsapp.net/flows/cache_management/"),
            (n.onload = function () {
              (document.body.removeChild(n), e(0));
            }),
            (n.onerror = function (e) {
              (n.parentNode && document.body.removeChild(n), t(e));
            }),
            document.body.appendChild(n));
        } catch (e) {
          t(e);
        }
      });
    }
    i.clearExpiredCachedStates = l;
  },
  66,
);
