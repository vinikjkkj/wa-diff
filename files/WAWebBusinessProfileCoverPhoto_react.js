__d(
  "WAWebBusinessProfileCoverPhoto.react",
  [
    "fbt",
    "WAWebBizCoverPhotoPicker.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebMiscGatingUtils",
    "WAWebPencilRefreshedIcon.react",
    "WAWebProfilePicPicker.react",
    "WAWebRound.react",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WDSFocusStateStyles",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = 1300,
      f = 122,
      g = 152,
      h = {
        avatar: {
          marginTop: "xma71h1",
          maxWidth: "x1c4npxh",
          position: "x1n2onr6",
          zIndex: "xlynzuj",
          "@media screen and (min-width: 1300px)_marginTop": "x1bfl7gj",
          $$css: !0,
        },
        noStatusBorder: {
          borderTopWidth: "x1kr8tdy",
          borderInlineEndWidth: "xburx9h",
          borderBottomWidth: "xqm4iv",
          borderInlineStartWidth: "x8u93l6",
          $$css: !0,
        },
      };
    function y(t) {
      var n,
        a,
        i = t.businessProfile,
        l = t.contact,
        u = t.editable,
        d = t.onClick,
        y = t.onLoad,
        C = t.profilePicThumb,
        b = p(window.innerWidth),
        v = b[0],
        S = b[1],
        R = o("useWAWebModelValues").useModelValues(i, [
          "coverPhoto",
          "profileOptions",
        ]),
        L = r("useWAWebUnmountSignal")(),
        E = o("WAWebThemeContext").useIsDarkTheme();
      m(
        function () {
          function e() {
            S(window.innerWidth);
          }
          return (
            window.addEventListener("resize", e),
            e(),
            function () {
              return window.removeEventListener("resize", e);
            }
          );
        },
        [R.profileOptions],
      );
      var k =
          o("WAWebMiscGatingUtils").isBlueLockingEnabled() &&
          ((n = R.profileOptions) == null
            ? void 0
            : n.isProfileEditDisabled) === !0,
        I = v > _ ? g : f;
      function T(e) {
        d && d(e);
      }
      var D = h.noStatusBorder,
        x;
      if (u === !0 && C != null && !k)
        x = c.jsx(r("WAWebProfilePicPicker.react"), {
          profilePicThumb: C,
          size: I,
        });
      else {
        var $ = s._(/*BTDS*/ "View photo");
        x = c.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: l.id,
          size: I,
          loader: !0,
          onLoad: y,
          onClick: k ? null : T,
          quality: o("WAWebDetailImage.react").DetailImageQuality.High,
          tabIndex: 0,
          xstyle: o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          ariaLabel: $,
        });
      }
      var P = (a = R.coverPhoto) == null ? void 0 : a.url.toString(),
        N,
        M;
      if (u != null) {
        N = c.jsx(r("WAWebBizCoverPhotoPicker.react"), {
          coverPhoto: R.coverPhoto != null ? R.coverPhoto : void 0,
          signal: L,
        });
        var w = c.jsx(
          o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
          {},
        );
        M = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x219wg1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x191j7n5 xdg88n9 x47corl x10l6tqk x1vjfegm",
              },
              1: {
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x191j7n5 xdg88n9 x47corl x10l6tqk x1vjfegm xfn3atn x1pse0pq",
              },
            }[!E << 0],
            {
              "aria-hidden": !0,
              children: c.jsx(o("WAWebRound.react").Round, {
                inverted: !0,
                testid: void 0,
                children: w,
              }),
            },
          ),
        );
      }
      var A;
      if (u == null && P != null) {
        var F = s._(/*BTDS*/ "Business cover photo image"),
          O = P !== "" ? { backgroundImage: "url(" + P + ")" } : null;
        A = c.jsx("div", {
          className:
            "xiy17q3 x18d0r48 x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy",
          style: O,
          "data-testid": void 0,
          role: "img",
          "aria-label": F,
        });
      }
      return c.jsxs(c.Fragment, {
        children: [
          c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "xiqx3za x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 x1knukwh xihgre1",
                },
                1: {
                  className:
                    "xiqx3za x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 x1knukwh xihgre1 x1yk5sdm",
                },
              }[!!u << 0],
              { children: [A, N, M] },
            ),
          ),
          c.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            className: (e || (e = r("stylex")))(
              h.avatar,
              o("WAWebUISpacing").uiMargin.bottom15,
              o("WAWebUISpacing").uiMargin.horizAuto,
            ),
            children: c.jsx("div", {
              className:
                "x1y9zq84 xt9xd2u x3tsejo x1ahzpo1 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1kr8tdy xburx9h xqm4iv x8u93l6",
              children: x,
            }),
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
