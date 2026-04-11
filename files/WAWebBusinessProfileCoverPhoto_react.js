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
    "react-compiler-runtime",
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
        i = o("react-compiler-runtime").c(46),
        l = t.businessProfile,
        u = t.contact,
        d = t.editable,
        y = t.onClick,
        C = t.onLoad,
        b = t.profilePicThumb,
        v = p(window.innerWidth),
        S = v[0],
        R = v[1],
        L;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = ["coverPhoto", "profileOptions"]), (i[0] = L))
        : (L = i[0]);
      var E = o("useWAWebModelValues").useModelValues(l, L),
        k = r("useWAWebUnmountSignal")(),
        I = o("WAWebThemeContext").useIsDarkTheme(),
        T;
      i[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function () {
            var e = function () {
              R(window.innerWidth);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }),
          (i[1] = T))
        : (T = i[1]);
      var D;
      (i[2] !== E.profileOptions
        ? ((D = [E.profileOptions]), (i[2] = E.profileOptions), (i[3] = D))
        : (D = i[3]),
        m(T, D));
      var x =
          o("WAWebMiscGatingUtils").isBlueLockingEnabled() &&
          ((n = E.profileOptions) == null
            ? void 0
            : n.isProfileEditDisabled) === !0,
        $ = S > _ ? g : f,
        P;
      i[4] !== y
        ? ((P = function (t) {
            y && y(t);
          }),
          (i[4] = y),
          (i[5] = P))
        : (P = i[5]);
      var N = P,
        M = h.noStatusBorder,
        w;
      if (d === !0 && b != null && !x) {
        var A;
        (i[6] !== $ || i[7] !== b
          ? ((A = c.jsx(r("WAWebProfilePicPicker.react"), {
              profilePicThumb: b,
              size: $,
            })),
            (i[6] = $),
            (i[7] = b),
            (i[8] = A))
          : (A = i[8]),
          (w = A));
      } else {
        var F;
        i[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = s._(/*BTDS*/ "View photo")), (i[9] = F))
          : (F = i[9]);
        var O = F,
          B = x ? null : N,
          W;
        (i[10] !== u.id || i[11] !== C || i[12] !== $ || i[13] !== B
          ? ((W = c.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: u.id,
              size: $,
              loader: !0,
              onLoad: C,
              onClick: B,
              quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              tabIndex: 0,
              xstyle: o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
              ariaLabel: O,
            })),
            (i[10] = u.id),
            (i[11] = C),
            (i[12] = $),
            (i[13] = B),
            (i[14] = W))
          : (W = i[14]),
          (w = W));
      }
      var q;
      if (i[15] !== ((a = E.coverPhoto) == null ? void 0 : a.url)) {
        var U, V;
        ((q = (U = E.coverPhoto) == null ? void 0 : U.url.toString()),
          (i[15] = (V = E.coverPhoto) == null ? void 0 : V.url),
          (i[16] = q));
      } else q = i[16];
      var H = q,
        G,
        z;
      if (d != null) {
        var j = E.coverPhoto != null ? E.coverPhoto : void 0,
          K;
        (i[17] !== j || i[18] !== k
          ? ((K = c.jsx(r("WAWebBizCoverPhotoPicker.react"), {
              coverPhoto: j,
              signal: k,
            })),
            (i[17] = j),
            (i[18] = k),
            (i[19] = K))
          : (K = i[19]),
          (G = K));
        var Q;
        i[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = c.jsx(
              o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
              {},
            )),
            (i[20] = Q))
          : (Q = i[20]);
        var X = Q,
          Y;
        i[21] !== I
          ? ((Y = {
              0: {
                className:
                  "x219wg1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x191j7n5 xdg88n9 x47corl x10l6tqk x1vjfegm",
              },
              1: {
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x191j7n5 xdg88n9 x47corl x10l6tqk x1vjfegm xfn3atn x1pse0pq",
              },
            }[!I << 0]),
            (i[21] = I),
            (i[22] = Y))
          : (Y = i[22]);
        var J;
        i[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = c.jsx(o("WAWebRound.react").Round, {
              inverted: !0,
              testid: void 0,
              children: X,
            })),
            (i[23] = J))
          : (J = i[23]);
        var Z;
        (i[24] !== Y
          ? ((Z = c.jsx(
              "div",
              babelHelpers.extends({}, Y, { "aria-hidden": !0, children: J }),
            )),
            (i[24] = Y),
            (i[25] = Z))
          : (Z = i[25]),
          (z = Z));
      }
      var ee;
      if (d == null && H != null) {
        var te;
        i[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((te = s._(/*BTDS*/ "Business cover photo image")), (i[26] = te))
          : (te = i[26]);
        var ne = te,
          re;
        i[27] !== H
          ? ((re = H !== "" ? { backgroundImage: "url(" + H + ")" } : null),
            (i[27] = H),
            (i[28] = re))
          : (re = i[28]);
        var oe = re,
          ae;
        i[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((ae =
              "xiy17q3 x18d0r48 x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy"),
            (i[29] = ae))
          : (ae = i[29]);
        var ie;
        (i[30] !== oe
          ? ((ie = c.jsx("div", {
              className: ae,
              style: oe,
              "data-testid": void 0,
              role: "img",
              "aria-label": ne,
            })),
            (i[30] = oe),
            (i[31] = ie))
          : (ie = i[31]),
          (ee = ie));
      }
      var le;
      i[32] !== d
        ? ((le = {
            0: {
              className:
                "xiqx3za x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 x1knukwh xihgre1",
            },
            1: {
              className:
                "xiqx3za x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 x1knukwh xihgre1 x1yk5sdm",
            },
          }[!!d << 0]),
          (i[32] = d),
          (i[33] = le))
        : (le = i[33]);
      var se;
      i[34] !== z || i[35] !== ee || i[36] !== G || i[37] !== le
        ? ((se = c.jsxs(
            "div",
            babelHelpers.extends({}, le, { children: [ee, G, z] }),
          )),
          (i[34] = z),
          (i[35] = ee),
          (i[36] = G),
          (i[37] = le),
          (i[38] = se))
        : (se = i[38]);
      var ue, ce;
      i[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = (e || (e = r("stylex")))(
            h.avatar,
            o("WAWebUISpacing").uiMargin.bottom15,
            o("WAWebUISpacing").uiMargin.horizAuto,
          )),
          (ce = {
            className:
              "x1y9zq84 xt9xd2u x3tsejo x1ahzpo1 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1kr8tdy xburx9h xqm4iv x8u93l6",
          }),
          (i[39] = ue),
          (i[40] = ce))
        : ((ue = i[39]), (ce = i[40]));
      var de;
      i[41] !== w
        ? ((de = c.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            className: ue,
            children: c.jsx(
              "div",
              babelHelpers.extends({}, ce, { children: w }),
            ),
          })),
          (i[41] = w),
          (i[42] = de))
        : (de = i[42]);
      var me;
      return (
        i[43] !== de || i[44] !== se
          ? ((me = c.jsxs(c.Fragment, { children: [se, de] })),
            (i[43] = de),
            (i[44] = se),
            (i[45] = me))
          : (me = i[45]),
        me
      );
    }
    l.default = y;
  },
  226,
);
