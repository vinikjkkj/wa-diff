__d(
  "adsAdgroupLinkDataCustomOverlaySpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          background_color: n.basicFieldAccessorFactory(
            e,
            t,
            "background_color",
          ),
          float_with_margin: n.basicFieldAccessorFactory(
            e,
            t,
            "float_with_margin",
          ),
          font: n.basicFieldAccessorFactory(e, t, "font"),
          option: n.basicFieldAccessorFactory(e, t, "option"),
          position: n.basicFieldAccessorFactory(e, t, "position"),
          render_with_icon: n.basicFieldAccessorFactory(
            e,
            t,
            "render_with_icon",
          ),
          template: n.basicFieldAccessorFactory(e, t, "template"),
          text_color: n.basicFieldAccessorFactory(e, t, "text_color"),
        },
      );
    }
    l.default = e;
  },
  98,
);
