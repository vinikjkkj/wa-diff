__d(
  "WAWebUsernameCreationInfoDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebShareIcon.react",
    "WAWebWdsPictoPrivateMentionIcon.react",
    "WDSButton.react",
    "WDSIconIcPerson.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          width: "xktia5q",
          marginInlineStart: "x1315kfy",
          $$css: !0,
        },
        section: { $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        paddingAll32: {
          paddingTop: "x1sk1jro",
          paddingInlineEnd: "x1evaxtz",
          paddingBottom: "x1ci70gm",
          paddingInlineStart: "x1m4z3lf",
          $$css: !0,
        },
      };
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "More about usernames")), (e[0] = t))
        : (t = e[0]);
      var n = t,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getFaqUrl(),
            children: n,
          })),
          (e[1] = a))
        : (a = e[1]);
      var i = a,
        l;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              marginBottom: 20,
              marginTop: 32,
              children: u.jsxs(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                textAlign: "center",
                type: "Body2",
                children: [
                  s._(
                    /*BTDS*/ "People who don't have your number saved will see your username.",
                  ),
                  " ",
                  i,
                ],
              }),
            })),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.description,
        a = e.icon,
        i;
      t[0] !== n
        ? ((i = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: n,
          })),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== a || t[3] !== i
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 24,
              marginTop: 20,
              xstyle: c.section,
              children: [a, i],
            })),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.onBack,
        a = e.onContinue,
        i = e.ref,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Username")), (t[0] = l))
        : (l = t[0]);
      var m = l,
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Create a username for phone number privacy")),
          (t[1] = p))
        : (p = t[1]);
      var f = p,
        g;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Create username")), (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(
            /*BTDS*/ "You can share your username instead of your number when telling someone how to contact you.",
          )),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(
            /*BTDS*/ "People you\u2019re already talking to will see that you created a username.",
          )),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [
            C,
            u.jsx(
              o("WAWebShareIcon.react").ShareIcon,
              { iconXstyle: c.secondaryColor, height: 30, width: 30 },
              1,
            ),
          ]),
          (t[5] = S))
        : (S = t[5]);
      var R;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = [
            S,
            [
              v,
              u.jsx(
                r("WDSIconIcPerson.react"),
                { iconXstyle: c.secondaryColor, height: 30, width: 30 },
                2,
              ),
            ],
          ]),
          (t[6] = R))
        : (R = t[6]);
      var L = R,
        E;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { surface: "unknown", viewName: "username-creation-info" }),
          (t[7] = E))
        : (E = t[7]);
      var k;
      t[8] !== n
        ? ((k = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: n,
            title: m,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (t[8] = n),
          (t[9] = k))
        : (k = t[9]);
      var I;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(o("WAWebFlex.react").FlexItem, {
            marginTop: 40,
            children: u.jsx(
              o("WAWebWdsPictoPrivateMentionIcon.react")
                .WdsPictoPrivateMentionIcon,
              { height: 87.01, width: 87.36 },
            ),
          })),
          (t[10] = I))
        : (I = t[10]);
      var T;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "full-height",
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: c.container,
              children: [
                I,
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  marginTop: 40,
                  children: u.jsx(r("WDSText.react"), {
                    colorName: "contentDefault",
                    textAlign: "center",
                    type: "LargeTitle2",
                    children: f,
                  }),
                }),
                u.jsx(d, {}),
                L.map(_),
              ],
            }),
          })),
          (t[11] = T))
        : (T = t[11]);
      var D;
      t[12] !== a
        ? ((D = u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              T,
              u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  xstyle: c.paddingAll32,
                  children: u.jsx(r("WDSButton.react"), {
                    label: h,
                    onPress: a,
                    size: "medium",
                    type: "default",
                    variant: "filled",
                    widthMode: "flexible",
                  }),
                }),
              }),
            ],
          })),
          (t[12] = a),
          (t[13] = D))
        : (D = t[13]);
      var x;
      return (
        t[14] !== i || t[15] !== D || t[16] !== k
          ? ((x = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              tsNavigationData: E,
              children: [k, D],
            })),
            (t[14] = i),
            (t[15] = D),
            (t[16] = k),
            (t[17] = x))
          : (x = t[17]),
        x
      );
    }
    function _(e, t) {
      var n = e[0],
        r = e[1];
      return u.jsx(m, { description: n, icon: r }, t);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
