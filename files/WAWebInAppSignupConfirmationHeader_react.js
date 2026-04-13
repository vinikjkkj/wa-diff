__d(
  "WAWebInAppSignupConfirmationHeader.react",
  [
    "fbt",
    "WAPromiseDelays",
    "WAWebDefaultProfilePicture.react",
    "WAWebInAppSignupConfirmation",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "WAWebSignupCTAExperiment",
    "WAWebUserPrefsMeUser",
    "WDSFlex.stylex",
    "WDSIconIcCheck.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
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
    function f(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.msg,
        i = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(a),
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebSignupCTAExperiment").getSignupCTAExperiment()),
          (n[0] = l))
        : (l = n[0]);
      var u = l,
        d = p(null),
        f = d[0],
        h = d[1],
        y = p(null),
        C = y[0],
        b = y[1],
        v = r("useWAWebUnmountSignal")(),
        S,
        R;
      (n[1] !== v
        ? ((S = function () {
            var e = o("WAWebUserPrefsMeUser").getMeUser();
            e != null &&
              o("WAWebProfilePicThumbCollection")
                .ProfilePicThumbCollection.find(e)
                .then(g)
                .then(function (e) {
                  v.aborted || (b(e), h(e == null ? void 0 : e.img));
                })
                .catch(r("WAWebNoop"));
          }),
          (R = [v]),
          (n[1] = v),
          (n[2] = S),
          (n[3] = R))
        : ((S = n[2]), (R = n[3])),
        m(S, R));
      var L;
      if (
        (n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = function (t) {
              h(t == null ? void 0 : t.img);
            }),
            (n[4] = L))
          : (L = n[4]),
        o("useWAWebListener").useListener(C, "change:img", L),
        i == null)
      )
        return null;
      var E, k, I;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            _.wrapper,
          )),
          (k = e.props(
            o("WDSFlex.stylex").wdsFlex.flexRowCenter,
            o("WDSFlex.stylex").wdsFlex.columnGapSingle,
          )),
          (I = { className: "x1n2onr6 x1useyqa xsdox4t x2lah0s" }),
          (n[5] = E),
          (n[6] = k),
          (n[7] = I))
        : ((E = n[5]), (k = n[6]), (I = n[7]));
      var T;
      n[8] !== f
        ? ((T =
            f != null
              ? c.jsx("img", {
                  className:
                    "x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r",
                  src: f,
                  alt: "",
                  onError: function () {
                    return h(null);
                  },
                })
              : c.jsx(r("WAWebDefaultProfilePicture.react"), {
                  type: "1-1",
                  size: 48,
                  backgroundStyles: _.fallbackPhotoBackground,
                })),
          (n[8] = f),
          (n[9] = T))
        : (T = n[9]);
      var D;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx("div", {
            className:
              "x10l6tqk x1me21xl x1l195vm x1xvr5cs x1nqnulx x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1y9zq84 xt9xd2u x3tsejo x1ahzpo1",
            children: c.jsx(r("WDSIconIcCheck.react"), {
              width: 16,
              height: 16,
              iconXstyle: _.badgeIcon,
            }),
          })),
          (n[10] = D))
        : (D = n[10]);
      var x;
      n[11] !== T
        ? ((x = c.jsxs(
            "div",
            babelHelpers.extends({}, I, { children: [T, D] }),
          )),
          (n[11] = T),
          (n[12] = x))
        : (x = n[12]);
      var $;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.flexGrow1,
            o("WDSFlex.stylex").wdsFlex.justifyCenter,
            _.contentWrapper,
          )),
          (n[13] = $))
        : ($ = n[13]);
      var P;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDefault",
            testid: void 0,
            children:
              u === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                ? s._(/*BTDS*/ "Request successful")
                : s._(/*BTDS*/ "Sign up successful"),
          })),
          (n[14] = P))
        : (P = n[14]);
      var N;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = c.jsxs(
            "div",
            babelHelpers.extends({}, $, {
              children: [
                P,
                c.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  testid: void 0,
                  children: s._(/*BTDS*/ "View details"),
                }),
              ],
            }),
          )),
          (n[15] = N))
        : (N = n[15]);
      var M;
      return (
        n[16] !== x
          ? ((M = c.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, E, {
                children: c.jsxs(
                  "div",
                  babelHelpers.extends({}, k, { children: [x, N] }),
                ),
              }),
            )),
            (n[16] = x),
            (n[17] = M))
          : (M = n[17]),
        M
      );
    }
    function g(e) {
      return o("WAPromiseDelays")
        .releaseToEventLoop()
        .then(function () {
          return e;
        });
    }
    l.default = f;
  },
  226,
);
