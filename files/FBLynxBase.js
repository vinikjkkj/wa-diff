__d(
  "FBLynxBase",
  ["$", "LinkshimHandlerConfig", "URI", "cr:7736", "isLinkshimURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      if (!r("isLinkshimURI")(e)) return null;
      var t = e.getQueryData().u;
      return t || null;
    }
    var u = {
        logAsyncClick: function (t) {
          u.swapLinkWithUnshimmedLink(t);
          var e = t.getAttribute("data-lynx-uri");
          e == null || e === "" || n("cr:7736").log(e);
        },
        originReferrerPolicyClick: function (t) {
          var e = r("$")("meta_referrer");
          ((e.content = r(
            "LinkshimHandlerConfig",
          ).switched_meta_referrer_policy),
            u.logAsyncClick(t),
            setTimeout(function () {
              e.content = r(
                "LinkshimHandlerConfig",
              ).default_meta_referrer_policy;
            }, 100));
        },
        swapLinkWithUnshimmedLink: function (n) {
          var t = n.href,
            o = s(new (e || (e = r("URI")))(t));
          o == null ||
            o === "" ||
            (n.setAttribute("data-lynx-uri", t), (n.href = o));
        },
        revertSwapIfLynxURIPresent: function (t) {
          var e = t.getAttribute("data-lynx-uri");
          e == null ||
            e === "" ||
            (t.removeAttribute("data-lynx-uri"), (t.href = e));
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
