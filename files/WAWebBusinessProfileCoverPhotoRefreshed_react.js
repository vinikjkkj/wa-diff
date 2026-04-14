__d(
  "WAWebBusinessProfileCoverPhotoRefreshed.react",
  [
    "fbt",
    "WAWebBizCoverPhotoPicker.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebMiscGatingUtils",
    "WAWebProfilePicPicker.react",
    "WDSButton.react",
    "WDSIconIcPhotoCamera.react",
    "react",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 120,
      d = 165,
      m = { editButtonColor: { backgroundColor: "x1280gxy", $$css: !0 } };
    function p(e) {
      var t,
        n,
        a = e.businessProfile,
        i = e.contact,
        l = e.editable,
        d = e.onLoad,
        p = e.profilePicThumb,
        _ = o("useWAWebModelValues").useModelValues(a, [
          "coverPhoto",
          "profileOptions",
        ]),
        f = r("useWAWebUnmountSignal")(),
        g =
          o("WAWebMiscGatingUtils").isBlueLockingEnabled() &&
          ((t = _.profileOptions) == null
            ? void 0
            : t.isProfileEditDisabled) === !0,
        h,
        y,
        C = u.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: i.id,
          size: c,
          loader: !0,
          onLoad: d,
          quality: o("WAWebDetailImage.react").DetailImageQuality.High,
        });
      l === !0 &&
        p != null &&
        !g &&
        ((h = u.jsx("div", {
          className:
            "xtijo5x x1o0tod xvc5jky x11t971q xg01cxk x67bb7w x10l6tqk x1cb1t30 xeq5yr9 xzkaem6",
          children: u.jsx(r("WAWebProfilePicPicker.react"), {
            profilePicThumb: p,
            size: c,
          }),
        })),
        (y = u.jsx("div", {
          className:
            "xtijo5x x1o0tod xvc5jky x11t971q x47corl x10l6tqk x1cb1t30 xeq5yr9 xhtitgo",
          children: u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcPhotoCamera.react"),
            label: s._(/*BTDS*/ "Edit"),
            variant: "outline",
            xstyle: m.editButtonColor,
          }),
        })));
      var b = (n = _.coverPhoto) == null ? void 0 : n.url.toString(),
        v,
        S;
      if (l != null) {
        var R = s._(/*BTDS*/ "Edit"),
          L = _.coverPhoto != null;
        ((S = u.jsx("div", {
          className: "xffp2at x47corl x10l6tqk x1ctoq22 x1n327nk",
          children: u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcPhotoCamera.react"),
            label: R,
            variant: L ? "filled" : "outline",
            xstyle: !L && m.editButtonColor,
          }),
        })),
          (v = u.jsx("div", {
            className:
              "x1vqgdyp xffp2at xktpd3l xg01cxk x67bb7w x10l6tqk x1ctoq22 x1of6sz5",
            children: u.jsx(r("WAWebBizCoverPhotoPicker.react"), {
              coverPhoto: _.coverPhoto != null ? _.coverPhoto : void 0,
              signal: f,
            }),
          })));
      }
      var E;
      if (b != null) {
        var k = s._(/*BTDS*/ "Business cover photo image"),
          I = b !== "" ? { backgroundImage: "url(" + b + ")" } : null;
        E = u.jsx("div", {
          className:
            "xiy17q3 x18d0r48 x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy",
          style: I,
          "data-testid": void 0,
          role: "img",
          "aria-label": k,
        });
      }
      return u.jsxs("div", {
        className: "xw6alqk xiigf6y xl7twdi",
        children: [
          u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "xyi3aci xwf5gio x1p453bz x1suzm8a xtbh88u xtijo5x x1o0tod xvc5jky x11t971q x6ikm8r x10wlt62 x10l6tqk x1l2rt3b",
                },
                1: {
                  className:
                    "xyi3aci xwf5gio x1p453bz x1suzm8a xtbh88u xtijo5x x1o0tod xvc5jky x11t971q x6ikm8r x10wlt62 x10l6tqk x1l2rt3b x6egj2d",
                },
              }[!!l << 0],
              { children: [E, v, S] },
            ),
          ),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            className: "x1n2onr6 xge4jfe xzkaem6",
            children: u.jsxs("div", {
              className:
                "xisoiy x347gel xfl8pta x1svocj7 xt8t1vi x1xc408v x129tdwq x15urzxu x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xl8et2f xuc0g9m x1dmim90 xs4xcjr",
              children: [C, h, y],
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
