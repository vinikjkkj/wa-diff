__d(
  "WAWebUsernameKeyInfoDrawer.react",
  [
    "fbt",
    "WAWebCreateUsernameKeyDrawer.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebShareIcon.react",
    "WAWebUISpacing",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameCreationSuccessDrawer.react",
    "WAWebUsernameManagementDrawer.react",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WAWebWdsPictoSecurePrivateMentionKeyIcon.react",
    "WDSButton.react",
    "WDSIconIcPerson.react",
    "WDSIconIcVisibility.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        title: { width: "xm6i5cn", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        section: {
          columnGap: "x6mw3hq",
          paddingTop: "x123j3cw",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xs9asl8",
          paddingInlineStart: "x12w63v0",
          width: "xktia5q",
          $$css: !0,
        },
        badge: { marginTop: "x1r0gsg0", $$css: !0 },
        learnMoreLink: { color: "xo1mcw5", $$css: !0 },
        successColor: { color: "x1du590y", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.description,
        a = e.icon,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [c.section, o("WAWebUISpacing").uiMargin.top18]), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: n,
          })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== a || t[4] !== l
          ? ((s = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 24,
              xstyle: i,
              children: [a, l],
            })),
            (t[3] = a),
            (t[4] = l),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(41),
        n = e.contactId,
        a = e.fromUsernameCreation,
        i = e.username,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Username key")), (t[0] = l))
        : (l = t[0]);
      var d = l,
        _;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(
            /*BTDS*/ "Add a key to reduce unwanted messages sent to your username",
          )),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(
            /*BTDS*/ "Share your username and key when telling someone how to contact you for the first time.",
          )),
          (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(
            /*BTDS*/ "People in existing conversations or those who have your number won\u2019t need your key.",
          )),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = o("WAWebFaqUrl").getFaqUrl()), (t[4] = b))
        : (b = t[4]);
      var v;
      if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
        var S = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: b,
          xstyle: c.learnMoreLink,
          children: s._(/*BTDS*/ "More about username keys"),
        });
        ((v = s._(
          /*BTDS*/ "Find, edit or remove your key at any time in Settings. {learnMoreLink}",
          [s._param("learnMoreLink", S)],
        )),
          (t[5] = v));
      } else v = t[5];
      var R = v,
        L;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Add key")), (t[6] = L))
        : (L = t[6]);
      var E = L,
        k;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Skip")), (t[7] = k))
        : (k = t[7]);
      var I = k,
        T;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [
            h,
            u.jsx(
              o("WAWebShareIcon.react").ShareIcon,
              { iconXstyle: c.secondaryColor, height: 30, width: 30 },
              1,
            ),
          ]),
          (t[8] = T))
        : (T = t[8]);
      var D;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [
            C,
            u.jsx(
              r("WDSIconIcPerson.react"),
              { iconXstyle: c.secondaryColor, height: 30, width: 30 },
              2,
            ),
          ]),
          (t[9] = D))
        : (D = t[9]);
      var x;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = [
            T,
            D,
            [
              R,
              u.jsx(
                r("WDSIconIcVisibility.react"),
                { iconXstyle: c.secondaryColor, height: 30, width: 30 },
                3,
              ),
            ],
          ]),
          (t[10] = x))
        : (x = t[10]);
      var $ = x,
        P;
      t[11] !== n || t[12] !== i
        ? ((P = function () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.logBackClicked(
              o("WAWebWamEnumUsernameCreationCurrentScreen")
                .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDUCATION,
              o("WAWebWamEnumUsernameCreationFlowType")
                .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
            ),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(r("WAWebUsernameManagementDrawer.react"), {
                  contactId: n,
                  username: i,
                }),
              ));
          }),
          (t[11] = n),
          (t[12] = i),
          (t[13] = P))
        : (P = t[13]);
      var N = P,
        M;
      t[14] !== n || t[15] !== i
        ? ((M = function () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.logBackClicked(
              o("WAWebWamEnumUsernameCreationCurrentScreen")
                .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
              o("WAWebWamEnumUsernameCreationFlowType")
                .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
            ),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(m, { contactId: n, username: i }),
              ));
          }),
          (t[14] = n),
          (t[15] = i),
          (t[16] = M))
        : (M = t[16]);
      var w = M,
        A;
      t[17] !== n || t[18] !== a || t[19] !== w
        ? ((A = function () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.log({
              usernameCreationCurrentScreen: o(
                "WAWebWamEnumUsernameCreationCurrentScreen",
              ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDUCATION,
              usernameCreationActionName: o(
                "WAWebWamEnumUsernameCreationActionName",
              ).USERNAME_CREATION_ACTION_NAME.CLICK_ADD_PIN,
              usernameCreationFlowType: o(
                "WAWebWamEnumUsernameCreationFlowType",
              ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
            }),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(r("WAWebCreateUsernameKeyDrawer.react"), {
                  contactId: n,
                  fromUsernameCreation: a,
                  handleBack: w,
                }),
              ));
          }),
          (t[17] = n),
          (t[18] = a),
          (t[19] = w),
          (t[20] = A))
        : (A = t[20]);
      var F = A,
        O;
      t[21] !== n || t[22] !== i
        ? ((O = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
                contactId: n,
                username: i,
              }),
            );
          }),
          (t[21] = n),
          (t[22] = i),
          (t[23] = O))
        : (O = t[23]);
      var B = O,
        W;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = { surface: "unknown", viewName: "username-key-info" }),
          (t[24] = W))
        : (W = t[24]);
      var q;
      t[25] !== N
        ? ((q = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: N,
            title: d,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (t[25] = N),
          (t[26] = q))
        : (q = t[26]);
      var U;
      t[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: c.badge,
            children: u.jsx(
              o("WAWebWdsPictoSecurePrivateMentionKeyIcon.react")
                .WdsPictoSecurePrivateMentionKeyIcon,
              { iconXstyle: c.successColor, height: 88, width: 132 },
            ),
          })),
          (t[27] = U))
        : (U = t[27]);
      var V;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "full-height",
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: [
                U,
                u.jsx(r("WDSText.react"), {
                  colorName: "contentDefault",
                  textAlign: "center",
                  type: "LargeTitle2",
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.top48,
                    o("WAWebUISpacing").uiMargin.bottom16,
                    c.title,
                  ],
                  children: f,
                }),
                $.map(p),
              ],
            }),
          })),
          (t[28] = V))
        : (V = t[28]);
      var H;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = [
            o("WAWebUISpacing").uiPadding.horiz32,
            o("WAWebUISpacing").uiPadding.vert16,
          ]),
          (t[29] = H))
        : (H = t[29]);
      var G;
      t[30] !== F
        ? ((G = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            xstyle: H,
            children: u.jsx(r("WDSButton.react"), {
              label: E,
              onPress: F,
              size: "medium",
              type: "default",
              variant: "filled",
              widthMode: "flexible",
            }),
          })),
          (t[30] = F),
          (t[31] = G))
        : (G = t[31]);
      var z;
      t[32] !== a || t[33] !== B
        ? ((z =
            a &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: [
                o("WAWebUISpacing").uiPadding.bottom16,
                o("WAWebUISpacing").uiPadding.horiz32,
              ],
              children: u.jsx(r("WDSButton.react"), {
                label: I,
                onPress: B,
                size: "medium",
                type: "default",
                variant: "borderless",
                widthMode: "flexible",
              }),
            })),
          (t[32] = a),
          (t[33] = B),
          (t[34] = z))
        : (z = t[34]);
      var j;
      t[35] !== G || t[36] !== z
        ? ((j = u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              V,
              u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: [G, z],
              }),
            ],
          })),
          (t[35] = G),
          (t[36] = z),
          (t[37] = j))
        : (j = t[37]);
      var K;
      return (
        t[38] !== q || t[39] !== j
          ? ((K = u.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: W,
              children: [q, j],
            })),
            (t[38] = q),
            (t[39] = j),
            (t[40] = K))
          : (K = t[40]),
        K
      );
    }
    function p(e, t) {
      var n = e[0],
        r = e[1];
      return u.jsx(d, { description: n, icon: r }, t);
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
