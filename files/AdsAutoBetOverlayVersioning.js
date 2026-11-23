__d(
  "AdsAutoBetOverlayVersioning",
  [
    "AdsAutoBetFontUtils",
    "AdsAutoOverlayUtils",
    "AdsUtils",
    "ExecutionEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "logo";
    function u(t, n, a, i, l, s) {
      var u = 280,
        c = 44;
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var d = l > 0 ? l / a : 1,
          m = document.createElement("canvas").getContext("2d");
        m != null &&
          ((m.font =
            "bold 36px " + o("AdsAutoBetFontUtils").DEFAULT_FONT_FAMILY),
          (u = Math.max(280, Math.ceil(m.measureText(t).width / d) + 16)));
        var p = s > 0 ? i / s : 1,
          _ = document.createElement("div");
        ((_.textContent = t),
          (_.style.cssText =
            "position:absolute;visibility:hidden;white-space:nowrap;" +
            ("font-weight:bold;font-size:36px;font-family:" +
              o("AdsAutoBetFontUtils").DEFAULT_FONT_FAMILY +
              ";")),
          document.body.appendChild(_));
        var f = _.offsetHeight;
        (document.body.removeChild(_), f > 0 && (c = Math.ceil(f * p)));
      }
      return {
        editable: !0,
        id: n,
        resizable: !0,
        style: {
          background: { type: "solid", color: "transparent" },
          color: "#ffffff",
          fontFamily: o("AdsAutoBetFontUtils").DEFAULT_FONT_FAMILY,
          fontSize: 36,
          fontStyle: "normal",
          fontWeight: "bold",
          textAlignment: { x: "LEFT", y: "TOP" },
          textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
        },
        translatable: !0,
        transformable: { height: c, left: 40, top: i / 2 - 24, width: u },
        type: "text",
        value: t,
      };
    }
    function c(e, t, n, r) {
      var o = e.find(function (e) {
        return e.id === s;
      });
      return o != null && o.type === "image"
        ? e.map(function (e) {
            return e.id === s && e.type === "image"
              ? babelHelpers.extends({}, e, { src: t })
              : e;
          })
        : [].concat(e, [
            {
              fit: "contain",
              id: s,
              resizable: !0,
              src: t,
              translatable: !0,
              transformable: {
                height: 100,
                left: r / 2 - 50,
                top: n - 120,
                width: 100,
              },
              type: "image",
            },
          ]);
    }
    function d(e) {
      var t = !1;
      return o("AdsAutoOverlayUtils")
        .overlayJsonToWizzyElements(e)
        .map(function (e) {
          return e.type === "image" && !t
            ? ((t = !0), babelHelpers.extends({}, e, { id: s }))
            : e;
        });
    }
    function m(e) {
      return o("AdsUtils").clone(e.slice());
    }
    ((l.LOGO_ID = s),
      (l.createDefaultTextOverlay = u),
      (l.updateLogoOverlay = c),
      (l.seedOverlaysForVersion = d),
      (l.cloneOverlays = m));
  },
  98,
);
