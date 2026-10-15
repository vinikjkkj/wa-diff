__d(
  "WAWebGetShopStorefrontInteractiveAction",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebShowMessageActionFallbackErrorAction",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.id;
      return {
        label: s._(/*BTDS*/ "View shop"),
        onClick: function () {
          if (t == null)
            return void r("WAWebShowMessageActionFallbackErrorAction")();
          o("WAWebExternalLink.react").openExternalLink(
            "https://facebook.com/" + t + "/shop/",
          );
        },
      };
    }
    l.default = e;
  },
  226,
);
