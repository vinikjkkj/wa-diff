__d(
  "imperativelyShowGeoModal",
  [
    "fbt",
    "DOM",
    "GeoButton.react",
    "GeoModal.react",
    "GeoModalFooter.react",
    "GeoModalHeader.react",
    "GeoSection.react",
    "GeoText.react",
    "ReactDOM_DEPRECATED",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = r("DOM").create("div"),
        n = function () {
          (e.callback && e.callback(!1),
            o("ReactDOM_DEPRECATED").unmountComponentAtNode_DEPRECATED(t),
            r("DOM").remove(t));
        },
        a = function () {
          (e.callback && e.callback(!0),
            o("ReactDOM_DEPRECATED").unmountComponentAtNode_DEPRECATED(t),
            r("DOM").remove(t));
        };
      o("ReactDOM_DEPRECATED").render_DEPRECATED(
        u.jsx(r("GeoModal.react"), {
          footer: u.jsx(r("GeoModalFooter.react"), {
            "data-testid": void 0,
            logging: { surface: "imperatively_show_geo_modal_yv2c" },
            primaryButton: u.jsx(r("GeoButton.react"), {
              label: s._(/*BTDS*/ "OK"),
              onClick: a,
              variant: "primary",
            }),
            secondaryButton:
              e.showCancelButton === !0
                ? u.jsx(r("GeoButton.react"), {
                    label: s._(/*BTDS*/ "Cancel"),
                    onClick: n,
                  })
                : void 0,
          }),
          header: u.jsx(r("GeoModalHeader.react"), { heading: e.title }),
          label: e.label,
          onHide: n,
          children: u.jsx(r("GeoSection.react"), {
            children:
              e.body != null && u.jsx(r("GeoText.react"), { children: e.body }),
          }),
        }),
        t,
      );
    }
    l.default = c;
  },
  226,
);
