__d(
  "WAWebProfileDrawerUsername.react",
  [
    "fbt",
    "WAWebChevronRightRefreshedIcon.react",
    "WAWebCmd",
    "WAWebDrawerBlock.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGetMeUsernameQueryAction",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WDSIconIcKey.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        sectionPadding: {
          paddingTop: "xyinxu5",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        titlePadding: {
          paddingInlineStart: "x162tt16",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
        mentionIcon: { color: "xhslqc4", $$css: !0 },
        chevronIcon: { color: "xhslqc4", $$css: !0 },
        usernameKeyContainer: {
          backgroundColor: "x6egj2d",
          paddingTop: "x4p5aij",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "x25sj25",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
        usernameKeyIcon: { color: "xhslqc4", $$css: !0 },
        createUsernameWithKey: { marginTop: "x1ci5j9l", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebUserPrefsMeUser").getMeUser()), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebFrontendContactGetters").getUsername,
            o("WAWebFrontendContactGetters").getUsernameKey,
          ]),
          (t[1] = l))
        : (l = t[1]);
      var c = o("useWAWebContactValues").useContactValues(i, l),
        _ = c[0],
        g = c[1],
        h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o("WAWebUserPrefsUsername").getUsernameState()), (t[2] = h))
        : (h = t[2]);
      var y = m(h),
        C = y[0],
        b = y[1],
        v;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = []), (t[3] = v))
        : (v = t[3]),
        d(f, v));
      var S;
      if (
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = function (t) {
              b(t);
            }),
            (t[4] = S))
          : (S = t[4]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "username_state_updated",
          S,
        ),
        C == null &&
          (o(
            "WAWebUsernameWorkerCompatibleGatingUtils",
          ).usernameAccountLinkingEnabled() ||
            o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).usernameReservationOnlyMode()))
      )
        return null;
      var R;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Create username")), (t[5] = R))
        : (R = t[5]);
      var L = R,
        E;
      t[6] !== C
        ? ((E =
            C === "RESERVED"
              ? s._(/*BTDS*/ "Reserved Username")
              : s._(/*BTDS*/ "Username")),
          (t[6] = C),
          (t[7] = E))
        : (E = t[7]);
      var k = E,
        I = g != null,
        T = I && o("WAWebUISpacing").uiPadding.bottom30,
        D;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: u.jsx(
              o("WAWebChevronRightRefreshedIcon.react")
                .ChevronRightRefreshedIcon,
              { xstyle: p.chevronIcon, directional: !0, height: 24, width: 24 },
            ),
          })),
          (t[8] = D))
        : (D = t[8]);
      var x;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(
            o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
            { xstyle: p.mentionIcon },
          )),
          (t[9] = x))
        : (x = t[9]);
      var $ = I && p.createUsernameWithKey,
        P = _ != null ? "contentDefault" : "contentActionEmphasized",
        N = _ != null ? _ : L,
        M;
      t[10] !== P || t[11] !== N
        ? ((M = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: P,
            children: N,
          })),
          (t[10] = P),
          (t[11] = N),
          (t[12] = M))
        : (M = t[12]);
      var w;
      t[13] !== g || t[14] !== I
        ? ((w =
            I &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 8,
              xstyle: p.usernameKeyContainer,
              children: [
                u.jsx(r("WDSIconIcKey.react"), { xstyle: p.usernameKeyIcon }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: g,
                }),
              ],
            })),
          (t[13] = g),
          (t[14] = I),
          (t[15] = w))
        : (w = t[15]);
      var A;
      t[16] !== $ || t[17] !== M || t[18] !== w
        ? ((A = u.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 24,
            align: "center",
            children: [
              x,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                gap: 8,
                xstyle: $,
                children: [M, w],
              }),
            ],
          })),
          (t[16] = $),
          (t[17] = M),
          (t[18] = w),
          (t[19] = A))
        : (A = t[19]);
      var F;
      t[20] !== n || t[21] !== A || t[22] !== T
        ? ((F = u.jsx(r("WAWebDrawerBlock.react"), {
            xstyle: T,
            onClick: n,
            side: D,
            children: A,
          })),
          (t[20] = n),
          (t[21] = A),
          (t[22] = T),
          (t[23] = F))
        : (F = t[23]);
      var O = F,
        B;
      return (
        t[24] !== O || t[25] !== k
          ? ((B = u.jsx(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              animation: !1,
              title: k,
              titleXStyle: p.titlePadding,
              xstyle: p.sectionPadding,
              children: O,
            })),
            (t[24] = O),
            (t[25] = k),
            (t[26] = B))
          : (B = t[26]),
        B
      );
    }
    function f() {
      o("WAWebGetMeUsernameQueryAction").getMeUsername();
    }
    l.default = _;
  },
  226,
);
