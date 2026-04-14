__d(
  "WAWebBizAdCreationCreativeThumbnail.react",
  [
    "fbt",
    "DurationFormatter",
    "FBLogger",
    "WAWebMsgType",
    "WDSIconIcVideocamFilled.react",
    "WDSText.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { videoIcon: { color: "x1awj2ng", $$css: !0 } };
    function d(e) {
      var t = e.overlay,
        n = e.previewUrl,
        r = e.variant;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className: "x7kvr32 x1o0tod x1n2onr6 x13vifvy x1lzt3e6 xhtitgo",
            },
            1: {
              className: "x1o0tod x1n2onr6 x13vifvy xhtitgo xy2rkmd x3bhodz",
            },
          }[(r === "Editor") << 0],
          {
            children: [
              u.jsx("img", {
                className: "x5yr21d xl1xv1r x47corl xh8yej3",
                src: n,
                alt: s._(/*BTDS*/ "Preview"),
              }),
              t,
            ],
          },
        ),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.duration,
        n = e.variant,
        a = o("DurationFormatter").formatShort(t);
      return u.jsxs("div", {
        className:
          "x6s0dn4 x1f0yzma x1ey2m1c x78zum5 x129bwdz x1trrmfo x1o0tod x1tiyuxx x1uc92m x1nbhmlj x181vq82 x10l6tqk xh8yej3 xzkaem6",
        children: [
          u.jsx(r("WDSIconIcVideocamFilled.react"), {
            height: n === "Creative" ? 20 : 16,
            width: n === "Creative" ? 20 : 16,
            iconXstyle: c.videoIcon,
          }),
          u.jsx(r("WDSText.react"), {
            type: n === "Creative" ? "Body2Emphasized" : "Body3Emphasized",
            colorName: "contentInverse",
            children: a,
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.attachMediaProp,
        n = e.variant,
        a = o("useWAWebModelValues").useModelValues(t, [
          "preview",
          "type",
          "file",
        ]),
        i = (function () {
          if (a.type === o("WAWebMsgType").MSG_TYPE.IMAGE)
            return u.jsx(d, { previewUrl: a.preview, variant: n });
          if (a.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            var e = "data:image/jpeg;base64," + a.preview;
            return u.jsx(d, {
              previewUrl: e,
              variant: n,
              overlay: u.jsx(m, { duration: a.duration, variant: n }),
            });
          }
          return (
            r("FBLogger")("wa_ctwa_web").mustfix(
              "Invalid media type: " + a.type,
            ),
            u.jsx("div", {})
          );
        })();
      return u.jsx("div", {
        className: "x1280gxy x6ikm8r x10wlt62",
        children: i,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
