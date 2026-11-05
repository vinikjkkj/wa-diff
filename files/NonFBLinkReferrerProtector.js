__d(
  "NonFBLinkReferrerProtector",
  ["$", "LinkshimHandlerConfig", "Parent", "URI", "cr:5662", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u(e) {
      var t = r("$")("meta_referrer");
      if (t instanceof HTMLMetaElement) {
        var n = r("LinkshimHandlerConfig").switched_meta_referrer_policy;
        typeof n == "string" &&
          ((t.content = n),
          r("setTimeout")(function () {
            var e = r("LinkshimHandlerConfig").default_meta_referrer_policy;
            typeof e == "string" && (t.content = e);
          }, 100));
      }
    }
    function c(t) {
      if ((t === void 0 && (t = !1), document.body == null)) {
        if (t) return;
        r("setTimeout")(function () {
          c(!0);
        }, 100);
        return;
      }
      if (!s) {
        s = !0;
        var o = function (n) {
          var t = n.target;
          if (t instanceof HTMLElement) {
            var o = d(t);
            if (o) {
              var a = o[0],
                i = o[1];
              switch (a) {
                case "origin":
                  u(i);
                  break;
                case "ie":
                  var l = new (e || (e = r("URI")))(i.href);
                  (n.preventDefault(),
                    (e || (e = r("URI"))).goURIOnWindow(
                      l,
                      window.open("", i.target),
                      !0,
                    ));
                  break;
              }
            }
          }
        };
        n("cr:5662").listen(document.body, "click", o);
      }
    }
    function d(e) {
      var t = o("Parent").byAttribute(e, "data-lnfb-mode");
      if (t instanceof HTMLAnchorElement) {
        var n = t.getAttribute("data-lnfb-mode");
        switch (n) {
          case "ie":
          case "origin":
            return [n, t];
          default:
            return null;
        }
      }
      return null;
    }
    ((l.originReferrerPolicyClickWithoutLog = u),
      (l.setupDelegation = c),
      (l.getMaybeNonFBLinkReferrerJSMode = d));
  },
  98,
);
