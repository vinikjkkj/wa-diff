__d(
  "whatsAppMarketingMessageTOSBootloadedSelector",
  ["AdsSelectorBootloadedStore", "JSResource", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsSelectorBootloadedStore").create(
        r("JSResource")("whatsAppMarketingMessageTOSSelector").__setRef(
          "whatsAppMarketingMessageTOSBootloadedSelector",
        ),
      ),
      s = r("adsCreateStoreSelector")(
        [e],
        function (n) {
          return e.onLoadedSelector(null);
        },
        { name: i.id + ".selector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
