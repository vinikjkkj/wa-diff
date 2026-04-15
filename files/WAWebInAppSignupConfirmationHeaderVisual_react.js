__d(
  "WAWebInAppSignupConfirmationHeaderVisual.react",
  [
    "fbt",
    "WAWebDefaultProfilePicture.react",
    "WAWebSignupCTAExperiment",
    "WDSFlex.stylex",
    "WDSIconIcCheck.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        wrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          backgroundColor: "x1bu39yj",
          $$css: !0,
        },
        badgeIcon: { color: "x1pse0pq", $$css: !0 },
        contentWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        fallbackPhotoBackground: { backgroundColor: "x16w0wmm", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.experiment,
        i = t.onProfilePicError,
        l = t.profilePicUrl,
        u,
        m,
        p;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            d.wrapper,
          )),
          (m = e.props(
            o("WDSFlex.stylex").wdsFlex.flexRowCenter,
            o("WDSFlex.stylex").wdsFlex.columnGapSingle,
          )),
          (p = { className: "x1n2onr6 x1useyqa xsdox4t x2lah0s" }),
          (n[0] = u),
          (n[1] = m),
          (n[2] = p))
        : ((u = n[0]), (m = n[1]), (p = n[2]));
      var _;
      n[3] !== i || n[4] !== l
        ? ((_ =
            l != null
              ? c.jsx("img", {
                  className:
                    "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r",
                  src: l,
                  alt: "",
                  onError: i,
                })
              : c.jsx(r("WAWebDefaultProfilePicture.react"), {
                  type: "1-1",
                  size: 48,
                  backgroundStyles: d.fallbackPhotoBackground,
                })),
          (n[3] = i),
          (n[4] = l),
          (n[5] = _))
        : (_ = n[5]);
      var f;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = c.jsx("div", {
            className:
              "x10l6tqk x1me21xl x1l195vm x1xvr5cs x1nqnulx x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1y9zq84 xt9xd2u x3tsejo x1ahzpo1",
            children: c.jsx(r("WDSIconIcCheck.react"), {
              width: 16,
              height: 16,
              iconXstyle: d.badgeIcon,
            }),
          })),
          (n[6] = f))
        : (f = n[6]);
      var g;
      n[7] !== _
        ? ((g = c.jsxs(
            "div",
            babelHelpers.extends({}, p, { children: [_, f] }),
          )),
          (n[7] = _),
          (n[8] = g))
        : (g = n[8]);
      var h;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.flexGrow1,
            o("WDSFlex.stylex").wdsFlex.justifyCenter,
            d.contentWrapper,
          )),
          (n[9] = h))
        : (h = n[9]);
      var y;
      n[10] !== a
        ? ((y = c.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDefault",
            testid: void 0,
            children:
              a === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                ? s._(/*BTDS*/ "Request successful")
                : s._(/*BTDS*/ "Sign up successful"),
          })),
          (n[10] = a),
          (n[11] = y))
        : (y = n[11]);
      var C;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = c.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            testid: void 0,
            children: s._(/*BTDS*/ "View details"),
          })),
          (n[12] = C))
        : (C = n[12]);
      var b;
      n[13] !== y
        ? ((b = c.jsxs(
            "div",
            babelHelpers.extends({}, h, { children: [y, C] }),
          )),
          (n[13] = y),
          (n[14] = b))
        : (b = n[14]);
      var v;
      return (
        n[15] !== b || n[16] !== g
          ? ((v = c.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, u, {
                children: c.jsxs(
                  "div",
                  babelHelpers.extends({}, m, { children: [g, b] }),
                ),
              }),
            )),
            (n[15] = b),
            (n[16] = g),
            (n[17] = v))
          : (v = n[17]),
        v
      );
    }
    l.default = m;
  },
  226,
);
