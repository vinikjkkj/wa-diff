__d(
  "getMAIBADefaultURIClickHandler",
  [
    "ALToolTab",
    "AdsInterfacesRouter",
    "MAIBAActionabilityManager",
    "MAIBAChatAppUIActions",
    "MAIBASignalsActionabilityManager",
    "MAIBASurfaceConfig",
    "URI",
    "adsOsmipMaybeGetCallbackFromURI",
    "getMAIBANavigateUrl",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "/latest/ad_center/";
    function u(e) {
      return (
        r("gkx")("20935") &&
        o("MAIBASurfaceConfig").isMBSSurfaceTool(
          o("ALToolTab").getCurrentToolTab().tool,
        ) &&
        e.getPath().startsWith(s)
      );
    }
    function c(t, n, a, i, l, s) {
      var c = i === !0 ? null : r("adsOsmipMaybeGetCallbackFromURI")(t, n, l),
        d = r("getMAIBANavigateUrl")(t, window.location.href, n),
        m = function (l) {
          var i;
          if ((l == null || l.preventDefault(), d != null)) {
            var m =
              (i = r("AdsInterfacesRouter").getOrNull()) == null
                ? void 0
                : i.getNavigatableByURI(d);
            if (t.startsWith("https://maiba.com/"))
              (o("MAIBAChatAppUIActions").toggleMAIBAChatAppFullScreen(!1),
                o("MAIBAActionabilityManager").runUntrustedActions(
                  d.getQueryData().actions,
                ));
            else if (
              d != null &&
              t.startsWith("https://signalactionmaiba.com/")
            ) {
              var p = d.getQueryData().actionName,
                _ = d.getQueryData().businessId,
                f = d.getQueryData().datasetId;
              if (p == null || _ == null || f == null || n == null) return;
              var g = new (r("MAIBASignalsActionabilityManager"))(f, _, n);
              (o("MAIBAChatAppUIActions").toggleMAIBAChatAppFullScreen(!1),
                g.runAction(p));
            } else if (c) c();
            else if (m) {
              var h = d.getQueryData().maiba_actions,
                y = new (e || (e = r("URI")))(d);
              (y.removeQueryData("maiba_actions"),
                r("AdsInterfacesRouter")
                  .get()
                  .navigateTo(
                    y,
                    {},
                    {
                      onComplete: function () {
                        h &&
                          o("MAIBAActionabilityManager").runUntrustedActions(
                            h,
                            a,
                          );
                      },
                    },
                  ));
            } else {
              var C = (e || (e = r("URI"))).tryParseURI(window.location.href),
                b = C != null && d.getDomain() === C.getDomain();
              b && s != null && u(d)
                ? s(d.toString())
                : b
                  ? (e || (e = r("URI"))).goURIOnWindow(d.toString())
                  : (e || (e = r("URI"))).goURIOnNewWindow(d.toString());
            }
          }
        };
      return m;
    }
    l.default = c;
  },
  98,
);
