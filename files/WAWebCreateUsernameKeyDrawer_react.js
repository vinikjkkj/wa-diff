__d(
  "WAWebCreateUsernameKeyDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebClickable.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebRefreshIcon.react",
    "WAWebSetUsernameKeyAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameCreationSuccessDrawer.react",
    "WAWebUsernameKeyDeleteModal.react",
    "WAWebUsernameManagementDrawer.react",
    "WAWebUsernameUtils",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        keySuggestionContainer: {
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          $$css: !0,
        },
        keySection: {
          width: "xycev2y",
          height: "x1jjfqgs",
          background: "xh5507f",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          rowGap: "x121sasi",
          columnGap: "x1mn2tih",
          paddingTop: "xl7twdi",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
        descriptionContainer: {
          rowGap: "x1j3ira4",
          columnGap: "xrdqr27",
          paddingTop: "xl7twdi",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        usernameKeyContainer: {
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          rowGap: "x121sasi",
          columnGap: "x1mn2tih",
          $$css: !0,
        },
        refreshIcon: { color: "xo1mcw5", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(56),
        n = e.contactId,
        a = e.fromUsernameCreation,
        i = e.handleBack,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebFrontendContactGetters").getUsername,
            o("WAWebFrontendContactGetters").getUsernameKey,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var m = o("useWAWebContactValues").useContactValues(n, l),
        p = m[0],
        _ = m[1],
        f;
      t[1] !== _
        ? ((f =
            _ != null
              ? null
              : o("WAWebUsernameUtils").generateUsernameKeySuggestion()),
          (t[1] = _),
          (t[2] = f))
        : (f = t[2]);
      var g = c(f),
        h = g[0],
        y = g[1],
        C = c(!1),
        b = C[0],
        v = C[1],
        S = r("useWAWebUnmountSignal")();
      if (p == null) return null;
      var R = _ != null,
        L = h != null,
        E;
      if (t[3] !== h || t[4] !== _) {
        var k;
        ((E = (k = h != null ? h : _) == null ? void 0 : k.split("").join(" ")),
          (t[3] = h),
          (t[4] = _),
          (t[5] = E));
      } else E = t[5];
      var I = E,
        T;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Username key")), (t[6] = T))
        : (T = t[6]);
      var D = T,
        x;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Suggest a different key")), (t[7] = x))
        : (x = t[7]);
      var $ = x,
        P;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(
            /*BTDS*/ "This key is meant to be shared along with your username.",
          )),
          (t[8] = P))
        : (P = t[8]);
      var N = P,
        M;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Save key")), (t[9] = M))
        : (M = t[9]);
      var w = M,
        A;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Remove key")), (t[10] = A))
        : (A = t[10]);
      var F = A,
        O;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Username key changed")), (t[11] = O))
        : (O = t[11]);
      var B = O,
        W;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Username key added")), (t[12] = W))
        : (W = t[12]);
      var q = W,
        U;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function () {
            o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.log({
              usernameCreationCurrentScreen: o(
                "WAWebWamEnumUsernameCreationCurrentScreen",
              ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
              usernameCreationActionName: o(
                "WAWebWamEnumUsernameCreationActionName",
              ).USERNAME_CREATION_ACTION_NAME.CLICK_SUGGEST_NEW_PIN,
              usernameCreationFlowType: o(
                "WAWebWamEnumUsernameCreationFlowType",
              ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
            });
            var e = o("WAWebUsernameUtils").generateUsernameKeySuggestion();
            y(e);
          }),
          (t[13] = U))
        : (U = t[13]);
      var V = U,
        H;
      t[14] !== n ||
      t[15] !== a ||
      t[16] !== R ||
      t[17] !== h ||
      t[18] !== S ||
      t[19] !== p
        ? ((H = function () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.log({
              usernameCreationCurrentScreen: o(
                "WAWebWamEnumUsernameCreationCurrentScreen",
              ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
              usernameCreationActionName: o(
                "WAWebWamEnumUsernameCreationActionName",
              ).USERNAME_CREATION_ACTION_NAME.CLICK_SAVE_PIN,
              usernameCreationFlowType: o(
                "WAWebWamEnumUsernameCreationFlowType",
              ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
            }),
              v(!0),
              o("WAWebSetUsernameKeyAction")
                .setMyUsernameKey(h)
                .then(function (e) {
                  if (!S.aborted && e) {
                    if (a)
                      h != null &&
                        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                          u.jsx(r("WAWebUsernameCreationSuccessDrawer.react"), {
                            contactId: n,
                            username: p,
                            usernameKey: h,
                          }),
                        );
                    else {
                      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                        u.jsx(r("WAWebUsernameManagementDrawer.react"), {
                          contactId: n,
                          username: p,
                        }),
                      );
                      var t = R ? B : q;
                      o("WAWebToastManager").ToastManager.open(
                        u.jsx(o("WAWebToast.react").Toast, { msg: t }),
                      );
                    }
                    o(
                      "WAWebUsernameCreationActionLogger",
                    ).UsernameCreationActionLogger.log({
                      usernameCreationCurrentScreen: o(
                        "WAWebWamEnumUsernameCreationCurrentScreen",
                      ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
                      usernameCreationActionName: o(
                        "WAWebWamEnumUsernameCreationActionName",
                      ).USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_SAVE_SUCCESS,
                      usernameCreationFlowType: o(
                        "WAWebWamEnumUsernameCreationFlowType",
                      ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                    });
                  }
                })
                .catch(function () {
                  S.aborted ||
                    (o(
                      "WAWebUsernameCreationActionLogger",
                    ).UsernameCreationActionLogger.log({
                      usernameCreationCurrentScreen: o(
                        "WAWebWamEnumUsernameCreationCurrentScreen",
                      ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
                      usernameCreationActionName: o(
                        "WAWebWamEnumUsernameCreationActionName",
                      ).USERNAME_CREATION_ACTION_NAME.USERNAME_PIN_SAVE_FAILURE,
                      usernameCreationFlowType: o(
                        "WAWebWamEnumUsernameCreationFlowType",
                      ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                    }),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "We couldn\u2019t complete your request.",
                        ),
                        action: {
                          actionText: r("WAWebFbtCommon")("Try again"),
                          onAction: H,
                        },
                      }),
                    ));
                })
                .finally(function () {
                  S.aborted || v(!1);
                }));
          }),
          (t[14] = n),
          (t[15] = a),
          (t[16] = R),
          (t[17] = h),
          (t[18] = S),
          (t[19] = p),
          (t[20] = H))
        : (H = t[20]);
      var G;
      t[21] !== n || t[22] !== p
        ? ((G = function () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.log({
              usernameCreationCurrentScreen: o(
                "WAWebWamEnumUsernameCreationCurrentScreen",
              ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_PIN_EDIT,
              usernameCreationActionName: o(
                "WAWebWamEnumUsernameCreationActionName",
              ).USERNAME_CREATION_ACTION_NAME.CLICK_DELETE_PIN,
              usernameCreationFlowType: o(
                "WAWebWamEnumUsernameCreationFlowType",
              ).USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
            }),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebUsernameKeyDeleteModal.react"), {
                  contactId: n,
                  username: p,
                }),
              ));
          }),
          (t[21] = n),
          (t[22] = p),
          (t[23] = G))
        : (G = t[23]);
      var z = G,
        j;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = { surface: "unknown", viewName: "create-username-key" }),
          (t[24] = j))
        : (j = t[24]);
      var K;
      t[25] !== i
        ? ((K = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: D,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: i,
          })),
          (t[25] = i),
          (t[26] = K))
        : (K = t[26]);
      var Q;
      t[27] !== I
        ? ((Q = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: d.usernameKeyContainer,
            children: u.jsx(r("WDSText.react"), {
              type: "LargeTitle1",
              colorName: "contentDefault",
              children: I,
            }),
          })),
          (t[27] = I),
          (t[28] = Q))
        : (Q = t[28]);
      var X;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: V,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 8,
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {
                    xstyle: d.refreshIcon,
                    width: 18,
                    height: 18,
                  }),
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "contentActionEmphasized",
                  children: $,
                }),
              ],
            }),
          })),
          (t[29] = X))
        : (X = t[29]);
      var Y;
      t[30] !== Q
        ? ((Y = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: d.keySuggestionContainer,
            marginTop: 32,
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: d.keySection,
              children: [Q, X],
            }),
          })),
          (t[30] = Q),
          (t[31] = Y))
        : (Y = t[31]);
      var J;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: d.descriptionContainer,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: N,
            }),
          })),
          (t[32] = J))
        : (J = t[32]);
      var Z;
      t[33] !== Y
        ? ((Z = u.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "full-height",
            children: [Y, J],
          })),
          (t[33] = Y),
          (t[34] = Z))
        : (Z = t[34]);
      var ee = R
          ? o("WAWebUISpacing").uiPadding.bottom10
          : o("WAWebUISpacing").uiPadding.bottom40,
        te;
      t[35] !== ee
        ? ((te = [ee, o("WAWebUISpacing").uiPadding.horiz32]),
          (t[35] = ee),
          (t[36] = te))
        : (te = t[36]);
      var ne = !L || b,
        re;
      t[37] !== H || t[38] !== b || t[39] !== ne
        ? ((re = u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
            onClick: H,
            stretch: !0,
            disabled: ne,
            spinner: b,
            children: w,
          })),
          (t[37] = H),
          (t[38] = b),
          (t[39] = ne),
          (t[40] = re))
        : (re = t[40]);
      var oe;
      t[41] !== te || t[42] !== re
        ? ((oe = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            xstyle: te,
            children: re,
          })),
          (t[41] = te),
          (t[42] = re),
          (t[43] = oe))
        : (oe = t[43]);
      var ae;
      t[44] !== z || t[45] !== R
        ? ((ae =
            R &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: [
                o("WAWebUISpacing").uiPadding.bottom16,
                o("WAWebUISpacing").uiPadding.horiz32,
              ],
              children: u.jsx(r("WDSButton.react"), {
                widthMode: "flexible",
                onPress: z,
                size: "medium",
                variant: "borderless",
                type: "destructive",
                label: F,
              }),
            })),
          (t[44] = z),
          (t[45] = R),
          (t[46] = ae))
        : (ae = t[46]);
      var ie;
      t[47] !== oe || t[48] !== ae
        ? ((ie = u.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            children: [oe, ae],
          })),
          (t[47] = oe),
          (t[48] = ae),
          (t[49] = ie))
        : (ie = t[49]);
      var le;
      t[50] !== Z || t[51] !== ie
        ? ((le = u.jsxs(r("WAWebDrawerBody.react"), { children: [Z, ie] })),
          (t[50] = Z),
          (t[51] = ie),
          (t[52] = le))
        : (le = t[52]);
      var se;
      return (
        t[53] !== K || t[54] !== le
          ? ((se = u.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: j,
              children: [K, le],
            })),
            (t[53] = K),
            (t[54] = le),
            (t[55] = se))
          : (se = t[55]),
        se
      );
    }
    l.default = m;
  },
  226,
);
