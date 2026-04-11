__d(
  "WAWebUsernameCreationSuccessDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameManagementDrawer.react",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WAWebWdsPictoSucessCelebrationTickIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          width: "x1rfehsz",
          paddingInlineStart: "xjwn8et",
          $$css: !0,
        },
        content: { marginTop: "xevwqry", $$css: !0 },
        successColor: { color: "x1du590y", $$css: !0 },
        buttonContainer: {
          marginBottom: "xg6s713",
          paddingInlineStart: "x1m4z3lf",
          paddingInlineEnd: "x1evaxtz",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.description,
        a;
      return (
        t[0] !== n
          ? ((a = u.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              textAlign: "center",
              type: "Body2",
              xstyle: c.content,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.contactId,
        a = e.username,
        i = e.usernameKey,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Username")), (t[0] = l))
        : (l = t[0]);
      var m = l,
        p;
      t[1] !== a
        ? ((p = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            textAlign: "center",
            type: "LargeTitle2",
            children: s._(/*BTDS*/ "You\u2019re \u0040{username}", [
              s._param("username", a),
            ]),
          })),
          (t[1] = a),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] !== a || t[4] !== i
        ? ((f = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            textAlign: "center",
            type: "Headline1",
            children: s._(
              /*BTDS*/ "You\u2019re \u0040{username} and your key is {username-key}",
              [s._param("username", a), s._param("username-key", i)],
            ),
          })),
          (t[3] = a),
          (t[4] = i),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h = i != null,
        y = h ? g : _,
        C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(
            /*BTDS*/ "Now you can share your username and key instead of your phone number when telling someone how to contact you for the first time.",
          )),
          (t[6] = C))
        : (C = t[6]);
      var b = C,
        v;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(
            /*BTDS*/ "Now you can share your username instead of your phone number when telling someone how to contact you for the first time.",
          )),
          (t[7] = v))
        : (v = t[7]);
      var S = v,
        R;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(
            /*BTDS*/ "You can add a key from Settings to reduce unwanted messages.",
          )),
          (t[8] = R))
        : (R = t[8]);
      var L = R,
        E;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Done")), (t[9] = E))
        : (E = t[9]);
      var k = E,
        I;
      t[10] !== n || t[11] !== a
        ? ((I = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebUsernameManagementDrawer.react"), {
                contactId: n,
                username: a,
              }),
            );
          }),
          (t[10] = n),
          (t[11] = a),
          (t[12] = I))
        : (I = t[12]);
      var T = I,
        D;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { surface: "unknown", viewName: "username-creation-success" }),
          (t[13] = D))
        : (D = t[13]);
      var x;
      t[14] !== T
        ? ((x = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: function () {
              (o(
                "WAWebUsernameCreationActionLogger",
              ).UsernameCreationActionLogger.logBackClicked(
                o("WAWebWamEnumUsernameCreationCurrentScreen")
                  .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_COMPLETE,
                o("WAWebWamEnumUsernameCreationFlowType")
                  .USERNAME_CREATION_FLOW_TYPE.CREATION,
              ),
                T());
            },
            title: m,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (t[14] = T),
          (t[15] = x))
        : (x = t[15]);
      var $;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            marginTop: 40,
            children: u.jsx(
              o("WAWebWdsPictoSucessCelebrationTickIcon.react")
                .WdsPictoSucessCelebrationTickIcon,
              { iconXstyle: c.successColor },
            ),
          })),
          (t[16] = $))
        : ($ = t[16]);
      var P;
      t[17] !== y
        ? ((P = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            marginTop: 40,
            children: u.jsx(r("WDSText.react"), {
              colorName: "contentDefault",
              textAlign: "center",
              type: "LargeTitle2",
              children: y,
            }),
          })),
          (t[17] = y),
          (t[18] = P))
        : (P = t[18]);
      var N;
      t[19] !== h
        ? ((N = h
            ? u.jsx(d, { description: b })
            : u.jsxs(o("WAWebFlex.react").FlexItem, {
                align: "center",
                children: [
                  u.jsx(d, { description: S }),
                  u.jsx(d, { description: L }),
                ],
              })),
          (t[19] = h),
          (t[20] = N))
        : (N = t[20]);
      var M;
      t[21] !== P || t[22] !== N
        ? ((M = u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "full-height",
            xstyle: c.container,
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              alignSelf: "center",
              children: [$, P, N],
            }),
          })),
          (t[21] = P),
          (t[22] = N),
          (t[23] = M))
        : (M = t[23]);
      var w;
      t[24] !== T
        ? ((w = u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            children: u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: c.buttonContainer,
              children: u.jsx(r("WDSButton.react"), {
                label: k,
                onPress: function () {
                  (o(
                    "WAWebUsernameCreationActionLogger",
                  ).UsernameCreationActionLogger.log({
                    usernameCreationCurrentScreen: o(
                      "WAWebWamEnumUsernameCreationCurrentScreen",
                    ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_COMPLETE,
                    usernameCreationActionName: o(
                      "WAWebWamEnumUsernameCreationActionName",
                    ).USERNAME_CREATION_ACTION_NAME
                      .CLICK_USERNAME_COMPLETE_CONTINUE,
                    usernameCreationFlowType: o(
                      "WAWebWamEnumUsernameCreationFlowType",
                    ).USERNAME_CREATION_FLOW_TYPE.CREATION,
                  }),
                    T());
                },
                size: "medium",
                type: "default",
                variant: "filled",
                widthMode: "flexible",
              }),
            }),
          })),
          (t[24] = T),
          (t[25] = w))
        : (w = t[25]);
      var A;
      t[26] !== M || t[27] !== w
        ? ((A = u.jsxs(r("WAWebDrawerBody.react"), { children: [M, w] })),
          (t[26] = M),
          (t[27] = w),
          (t[28] = A))
        : (A = t[28]);
      var F;
      return (
        t[29] !== x || t[30] !== A
          ? ((F = u.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: D,
              children: [x, A],
            })),
            (t[29] = x),
            (t[30] = A),
            (t[31] = F))
          : (F = t[31]),
        F
      );
    }
    l.default = m;
  },
  226,
);
