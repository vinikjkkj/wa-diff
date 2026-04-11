__d(
  "NonFBLinkReferrerProtector",
  ["$", "LinkshimHandlerConfig", "Parent", "URI", "cr:5662", "setTimeout"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e || (e = n("URI"))).goURIOnWindow,
      s = {
        alreadySetup: !1,
        originReferrerPolicyClickWithoutLog: function (t) {
          var e = n("$")("meta_referrer");
          if (e instanceof HTMLMetaElement) {
            var r = n("LinkshimHandlerConfig").switched_meta_referrer_policy;
            typeof r == "string" &&
              ((e.content = r),
              n("setTimeout")(function () {
                var t = n("LinkshimHandlerConfig").default_meta_referrer_policy;
                typeof t == "string" && (e.content = t);
              }, 100));
          }
        },
        setupDelegation: function (r) {
          if ((r === void 0 && (r = !1), document.body == null)) {
            if (r) return;
            n("setTimeout")(function () {
              s.setupDelegation(!0);
            }, 100);
            return;
          }
          if (!s.alreadySetup) {
            s.alreadySetup = !0;
            var t = function (r) {
              var t = r.target;
              if (t instanceof HTMLElement) {
                var o = s.getMaybeNonFBLinkReferrerJSMode(t);
                if (o) {
                  var a = o[0],
                    i = o[1];
                  switch (a) {
                    case "origin":
                      s.originReferrerPolicyClickWithoutLog(i);
                      break;
                    case "ie":
                      var u = new (e || (e = n("URI")))(i.href);
                      (r.preventDefault(), l(u, window.open("", i.target), !0));
                      break;
                  }
                }
              }
            };
            n("cr:5662").listen(document.body, "click", t);
          }
        },
        getMaybeNonFBLinkReferrerJSMode: function (t) {
          var e = n("Parent").byAttribute(t, "data-lnfb-mode");
          if (e instanceof HTMLAnchorElement) {
            var r = e.getAttribute("data-lnfb-mode");
            switch (r) {
              case "ie":
              case "origin":
                return [r, e];
              default:
                return null;
            }
          }
          return null;
        },
      };
    a.exports = s;
  },
  null,
);
