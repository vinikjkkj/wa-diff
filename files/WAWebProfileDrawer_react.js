__d(
  "WAWebProfileDrawer.react",
  [
    "fbt",
    "$InternalEnum",
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizProfileDrawer.react",
    "WAWebCatalogCollection",
    "WAWebCatalogManagementFlowLoadable",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebConstantsDeprecated",
    "WAWebContactGetters",
    "WAWebCreateUsernameDrawer.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManagerGlobalContext",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebMerchantDetailsFormFlowLoadable",
    "WAWebModalManager",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProfileDrawerCoverPhoto.react",
    "WAWebProfileDrawerPhoneNumber.react",
    "WAWebProfileDrawerUsername.react",
    "WAWebProfilePicPicker.react",
    "WAWebProfileQuickPromotionSurface.react",
    "WAWebQuickPromotionGating",
    "WAWebRichTextField.react",
    "WAWebSetPushnameConnAction",
    "WAWebSettingGatingUtils",
    "WAWebStatusContactAction",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusSection",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameCreationInfoDrawer.react",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameManagementDrawer.react",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WDSText.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebFlow",
    "useWAWebFocusOnMount",
    "useWAWebModelValues",
    "useWAWebUIM",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = p,
      g = f.useContext,
      h = f.useEffect,
      y = f.useRef,
      C = f.useState,
      b = 139,
      v = 256,
      S = {
        surface: o("WAWebConnModel").Conn.isSMB
          ? "smb-business-profile"
          : "self-profile",
      },
      R = n("$InternalEnum").Mirrored([
        "Profile",
        "MerchantDetails",
        "CatalogManagement",
        "UsernameCreationInfo",
        "CreateUsername",
        "EditUsername",
      ]),
      L = {
        photoPickerWrapper: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function E(e) {
      var t = o("react-compiler-runtime").c(58),
        n = e.aboutPromptKey,
        a = e.conn,
        i = e.contact,
        l = e.entryPoint,
        s = e.isInitialStep,
        d = e.onClose,
        m = e.profilePicThumb,
        p = e.ref,
        f = e.status,
        g = C(),
        h = g[0],
        y = g[1],
        b = C(),
        v = b[0],
        S = b[1],
        L = r("useWAWebFocusOnMount")(),
        E;
      t[0] !== d
        ? ((E = {
            transitions: o("useWAWebFlow").FlowTransitions.None,
            onEnd: d,
          }),
          (t[0] = d),
          (t[1] = E))
        : (E = t[1]);
      var k = o("useWAWebFlow").useFlow(R.Profile, E),
        I = k[0],
        T = k[1];
      if (T.step == null)
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebProfileDrawer] Returning null: flow.step is null",
              ])),
          ),
          null
        );
      var x;
      e: switch (T.step) {
        case R.Profile: {
          var $;
          t[2] !== T
            ? (($ = function () {
                T.push(R.MerchantDetails);
              }),
              (t[2] = T),
              (t[3] = $))
            : ($ = t[3]);
          var P = $,
            N;
          t[4] !== T
            ? ((N = function (t) {
                (o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(
                  "Profile",
                ),
                  o(
                    "WAWebCatalogManagementFlowLoadable",
                  ).createCatalogManagementFlowObject(function (e, n, r) {
                    r === !0 && !n
                      ? o(
                          "WAWebCatalogManagementFlowLoadable",
                        ).showSelfCatalogLoadErrorToast()
                      : (y(e), S(t), T.push(R.CatalogManagement));
                  }));
              }),
              (t[4] = T),
              (t[5] = N))
            : (N = t[5]);
          var M = N,
            w;
          t[6] !== T
            ? ((w = function () {
                (o(
                  "WAWebUsernameCreationActionLogger",
                ).UsernameCreationActionLogger.resetSessionId(),
                  T.push(R.UsernameCreationInfo));
              }),
              (t[6] = T),
              (t[7] = w))
            : (w = t[7]);
          var A = w,
            F;
          t[8] !== T
            ? ((F = function () {
                (o(
                  "WAWebUsernameCreationActionLogger",
                ).UsernameCreationActionLogger.resetSessionId(),
                  T.push(R.EditUsername));
              }),
              (t[8] = T),
              (t[9] = F))
            : (F = t[9]);
          var O = F,
            B;
          t[10] !== T
            ? ((B = function () {
                return T.pop();
              }),
              (t[10] = T),
              (t[11] = B))
            : (B = t[11]);
          var W;
          (t[12] !== n ||
          t[13] !== a ||
          t[14] !== i ||
          t[15] !== l ||
          t[16] !== s ||
          t[17] !== M ||
          t[18] !== A ||
          t[19] !== O ||
          t[20] !== P ||
          t[21] !== m ||
          t[22] !== f ||
          t[23] !== B
            ? ((W = _.jsx(D, {
                aboutPromptKey: n,
                openMerchantDetailsForm: P,
                openCatalogDetailsForm: M,
                openCreateUsernameDrawer: A,
                openEditUsernameDrawer: O,
                conn: a,
                contact: i,
                profilePicThumb: m,
                entryPoint: l,
                status: f,
                onClose: B,
                isInitialStep: s,
              })),
              (t[12] = n),
              (t[13] = a),
              (t[14] = i),
              (t[15] = l),
              (t[16] = s),
              (t[17] = M),
              (t[18] = A),
              (t[19] = O),
              (t[20] = P),
              (t[21] = m),
              (t[22] = f),
              (t[23] = B),
              (t[24] = W))
            : (W = t[24]),
            (x = W));
          break e;
        }
        case R.MerchantDetails: {
          var q;
          t[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = o("WAWebUserPrefsMeUser").getMeUser()), (t[25] = q))
            : (q = t[25]);
          var U = q,
            V;
          (t[26] !== T
            ? ((V = _.jsx(
                o("WAWebMerchantDetailsFormFlowLoadable")
                  .MerchantDetailsFormFlowLoadable,
                {
                  contactId: U,
                  onBack: function () {
                    return T.pop();
                  },
                },
              )),
              (t[26] = T),
              (t[27] = V))
            : (V = t[27]),
            (x = V));
          break e;
        }
        case R.CatalogManagement: {
          if (!h)
            return (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebProfileDrawer] null: no user in CatalogManagement",
                  ])),
              ),
              null
            );
          var H;
          t[28] !== T
            ? ((H = function () {
                return T.pop();
              }),
              (t[28] = T),
              (t[29] = H))
            : (H = t[29]);
          var G;
          (t[30] !== v || t[31] !== H || t[32] !== h
            ? ((G = _.jsx(
                o("WAWebCatalogManagementFlowLoadable")
                  .CatalogManagementFlowLoadable,
                { catalogId: h, product: v, onBack: H, isInitialStep: !1 },
              )),
              (t[30] = v),
              (t[31] = H),
              (t[32] = h),
              (t[33] = G))
            : (G = t[33]),
            (x = G));
          break e;
        }
        case R.UsernameCreationInfo: {
          o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.log({
            usernameCreationCurrentScreen: o(
              "WAWebWamEnumUsernameCreationCurrentScreen",
            ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION,
            usernameCreationActionName: o(
              "WAWebWamEnumUsernameCreationActionName",
            ).USERNAME_CREATION_ACTION_NAME.VIEW,
            usernameCreationFlowType: o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.CREATION,
          });
          var z, j;
          t[34] !== T
            ? ((z = function () {
                (T.push(R.CreateUsername),
                  o(
                    "WAWebUsernameCreationActionLogger",
                  ).UsernameCreationActionLogger.log({
                    usernameCreationCurrentScreen: o(
                      "WAWebWamEnumUsernameCreationCurrentScreen",
                    ).USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION,
                    usernameCreationActionName: o(
                      "WAWebWamEnumUsernameCreationActionName",
                    ).USERNAME_CREATION_ACTION_NAME.CLICK_CREATE_USERNAME,
                    usernameCreationFlowType: o(
                      "WAWebWamEnumUsernameCreationFlowType",
                    ).USERNAME_CREATION_FLOW_TYPE.CREATION,
                  }));
              }),
              (j = function () {
                (T.pop(),
                  o(
                    "WAWebUsernameCreationActionLogger",
                  ).UsernameCreationActionLogger.logBackClicked(
                    o("WAWebWamEnumUsernameCreationCurrentScreen")
                      .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION,
                    o("WAWebWamEnumUsernameCreationFlowType")
                      .USERNAME_CREATION_FLOW_TYPE.CREATION,
                  ));
              }),
              (t[34] = T),
              (t[35] = z),
              (t[36] = j))
            : ((z = t[35]), (j = t[36]));
          var K;
          (t[37] !== p || t[38] !== z || t[39] !== j
            ? ((K = _.jsx(r("WAWebUsernameCreationInfoDrawer.react"), {
                onContinue: z,
                onBack: j,
                ref: p,
              })),
              (t[37] = p),
              (t[38] = z),
              (t[39] = j),
              (t[40] = K))
            : (K = t[40]),
            (x = K));
          break e;
        }
        case R.CreateUsername: {
          var Q;
          t[41] !== T
            ? ((Q = function () {
                (T.pop(),
                  o(
                    "WAWebUsernameCreationActionLogger",
                  ).UsernameCreationActionLogger.logBackClicked(
                    o("WAWebWamEnumUsernameCreationCurrentScreen")
                      .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION,
                    o("WAWebWamEnumUsernameCreationFlowType")
                      .USERNAME_CREATION_FLOW_TYPE.CREATION,
                  ));
              }),
              (t[41] = T),
              (t[42] = Q))
            : (Q = t[42]);
          var X;
          (t[43] !== i.id || t[44] !== p || t[45] !== Q
            ? ((X = _.jsx(r("WAWebCreateUsernameDrawer.react"), {
                contactId: i.id,
                ref: p,
                onBack: Q,
              })),
              (t[43] = i.id),
              (t[44] = p),
              (t[45] = Q),
              (t[46] = X))
            : (X = t[46]),
            (x = X));
          break e;
        }
        case R.EditUsername: {
          var Y;
          (t[47] !== i || t[48] !== T
            ? ((Y =
                (i == null ? void 0 : i.username) != null
                  ? _.jsx(r("WAWebUsernameManagementDrawer.react"), {
                      contactId: i.id,
                      username: i.username,
                      onBack: function () {
                        (o(
                          "WAWebUsernameCreationActionLogger",
                        ).UsernameCreationActionLogger.logBackClicked(
                          o("WAWebWamEnumUsernameCreationCurrentScreen")
                            .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE,
                          o("WAWebWamEnumUsernameCreationFlowType")
                            .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
                        ),
                          T.pop());
                      },
                    })
                  : null),
              (t[47] = i),
              (t[48] = T),
              (t[49] = Y))
            : (Y = t[49]),
            (x = Y));
        }
      }
      var J;
      t[50] !== I || t[51] !== x || t[52] !== T || t[53] !== p
        ? ((J = _.jsx(I, { ref: p, flow: T, children: x })),
          (t[50] = I),
          (t[51] = x),
          (t[52] = T),
          (t[53] = p),
          (t[54] = J))
        : (J = t[54]);
      var Z;
      return (
        t[55] !== L || t[56] !== J
          ? ((Z = _.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: L,
              children: J,
            })),
            (t[55] = L),
            (t[56] = J),
            (t[57] = Z))
          : (Z = t[57]),
        Z
      );
    }
    var k = {
      ellipsify: !0,
      multiline: !0,
      direction: "auto",
      inferLinesDirection: !0,
    };
    function I(e) {
      var t,
        n = e.aboutInput,
        a = e.contact,
        i = e.openCreateUsernameDrawer,
        l = e.openEditUsernameDrawer,
        u = e.unmountSignal,
        c = y(null),
        d = y(!1),
        p = o("useWAWebModelValues").useModelValues(e.conn, ["pushname"]),
        f = C(p.pushname),
        g = f[0],
        h = f[1],
        b = C(!1),
        v = b[0],
        S = b[1],
        R = function () {
          d.current = !0;
        },
        L = function (t) {
          o("WAWebModalManager").ModalManager.open(
            _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "profile-error",
              },
              onOK: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
              okText: r("WAWebFbtCommon")("OK"),
              children: t,
            }),
          );
        },
        E = function () {
          var e,
            t = g,
            n = /[\u2714\u2705\u2611]/g;
          if (((t = (t || "").trim()), !t))
            e = s._(/*BTDS*/ "Your name can't be empty.");
          else if (n.test(t))
            e = s._(/*BTDS*/ "That emoji isn't allowed in your name.");
          else if (
            t.startsWith("@") &&
            o(
              "WAWebUsernameGatingUtils",
            ).pushnameValidationForUsernamesEnabled()
          )
            e = s._(/*BTDS*/ "Your name can't start with \u0040.");
          else return !0;
          return (L(e), !1);
        },
        I = function () {
          if (
            ((d.current = !1), !!o("WAWebConnModel").Conn.canSetMyPushname())
          ) {
            var e = g;
            e = (e || "").trim();
            var t = p.pushname;
            if (e !== t) {
              var n = function () {
                var e;
                (e = c.current) == null || e.focusEditBtn();
              };
              (S(!0),
                o("WAWebSetPushnameConnAction")
                  .setPushname(e, n)
                  .then(function () {
                    u.aborted || S(!1);
                  }));
            }
          }
        },
        T = function (t) {
          h(t);
        },
        D = function () {
          ((d.current = !1), h(p.pushname));
        },
        x = o(
          "WAWebUsernameWorkerCompatibleGatingUtils",
        ).usernameCreationOrReservationEnabled(),
        $ = d.current || v ? g : p.pushname,
        P;
      o("WAWebConnModel").Conn.isSMB
        ? (P = s._(
            /*BTDS*/ "This is your business name. It will be visible to your WhatsApp customers.",
          ))
        : x
          ? (P = s._(
              /*BTDS*/ "This is not your username or key. This name will be visible to your WhatsApp contacts.",
            ))
          : (P = "");
      var N = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        M =
          x &&
          _.jsx(r("WAWebProfileDrawerUsername.react"), {
            onClick: (a == null ? void 0 : a.username) != null ? l : i,
          }),
        w =
          !o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
          !r("isStringNullOrEmpty")(
            (t = e.aboutValue) == null ? void 0 : t.trim(),
          ) &&
          _.jsx(r("WAWebDrawerSection.react"), {
            titleTestId: "about-section",
            title: s._(/*BTDS*/ "About"),
            theme: "padding",
            animation: !1,
            children: n,
          }),
        A = s._(/*BTDS*/ "Name");
      return _.jsxs(_.Fragment, {
        children: [
          o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
            _.jsx(r("WAWebTextStatusSection"), { promptKey: e.aboutPromptKey }),
          _.jsx(r("WAWebDrawerSection.react"), {
            titleTestId: "pushname-section",
            title: s._(/*BTDS*/ "Name"),
            theme: "padding",
            animation: !1,
            children: _.jsx(o("WAWebRichTextField.react").RichTextField, {
              ref: c,
              testid: void 0,
              value: $,
              editable: o("WAWebConnModel").Conn.canSetMyPushname(),
              pending: v,
              showRemaining: !0,
              validate: E,
              maxLength: r("WAWebConstantsDeprecated").MAX_PUSHNAME_LENGTH,
              onBeginEdit: R,
              onChange: function (t) {
                var e = t.text;
                return T(e);
              },
              onSave: I,
              onCancel: D,
              emojiBtnPosition: "side",
              lockable: !0,
              lowProfile: !0,
              constrainedWidth: !0,
              emojiTextSettingsInLockMode: k,
              ariaLabel: A,
              fieldName: A,
              blockFocusOnLock: !0,
            }),
          }),
          _.jsx(
            "div",
            babelHelpers.extends(
              { "data-testid": void 0 },
              (m || (m = r("stylex"))).props(
                o("WAWebUISpacing").uiMargin.bottom10,
                o("WAWebUISpacing").uiMargin.end30,
                o("WAWebUISpacing").uiMargin.start30,
              ),
              {
                children: _.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: P,
                }),
              },
            ),
          ),
          w,
          M,
          N != null
            ? _.jsx(r("WAWebProfileDrawerPhoneNumber.react"), { myPn: N })
            : null,
        ],
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.profilePicThumb;
      if (o("WAWebSettingGatingUtils").isMeTabEnabled()) {
        var a;
        return (
          t[0] !== n
            ? ((a = _.jsx(r("WAWebProfileDrawerCoverPhoto.react"), {
                profilePicThumb: n,
              })),
              (t[0] = n),
              (t[1] = a))
            : (a = t[1]),
          a
        );
      }
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (m || (m = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.vert28,
            L.photoPickerWrapper,
          )),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== n
          ? ((l = _.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: _.jsx(r("WAWebProfilePicPicker.react"), {
                  profilePicThumb: n,
                }),
              }),
            )),
            (t[3] = n),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function D(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.contact,
        l = a.isInitialStep,
        u = a.onClose,
        c = a.openCatalogDetailsForm,
        m = a.openCreateUsernameDrawer,
        p = a.openEditUsernameDrawer,
        f = a.openMerchantDetailsForm,
        R = r("useWAWebUIM")(),
        L = y(null),
        E = o("useWAWebModelValues").useModelValues(a.status, ["status"]),
        D = C(E.status),
        x = D[0],
        $ = D[1],
        P = C(!1),
        N = P[0],
        M = P[1],
        w = y(!1),
        A = g(o("WAWebDrawerContext").DrawerContext),
        F = r("useWAWebUnmountSignal")(),
        O = o("useWAWebContactValues").useContactValues(a.contact.id, [
          o("WAWebFrontendContactGetters").getBusinessProfile,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getStatusMute,
        ]),
        B = O[0],
        W = O[1],
        q = O[2],
        U = o("useWAWebModelValues").useModelValues(a.profilePicThumb, [
          "imgFull",
          "id",
        ]),
        V = C(null),
        H = V[0],
        G = V[1],
        z = o("WAWebConnModel").Conn.isSMB
          ? o("WAWebProductCatalogContext").getProductCatalogContext(A)
          : {},
        j = z.session;
      (h(function () {
        if (
          o("WAWebConnModel").Conn.isSMB &&
          (o("WAWebCatalogCollection")
            .CatalogCollection.findCarouselCatalog(
              o("WAWebUserPrefsMeUser").getMeUser(),
            )
            .then(function (e) {
              var t = Array.isArray(e) ? e[0] : e;
              G({ catalog: t, catalogError: !1 });
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (e) {
                  e.status === "not_found" || e.status === 404
                    ? G({ catalog: null, catalogError: !1 })
                    : G({ catalog: null, catalogError: !0 });
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").AdAccountRecoveryRequiredError,
                function (e) {
                  G({ catalog: null, catalogError: !1 });
                },
              ),
            )
            .catch(function () {
              G({ catalog: null, catalogError: !1 });
            }),
          j != null && j.isAccidental())
        ) {
          var e;
          (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
            "left",
          )) == null ||
            e.updateContext(
              o("WAWebProductCatalogContext").buildProductCatalogContext(
                new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_SETTINGS,
              ),
            );
        }
      }, []),
        o("WAWebConnModel").Conn.isSMB &&
          j != null &&
          j.isAccidental() &&
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebProfileDrawer] SMB accidental session - awaiting ctx",
              ])),
          ));
      var K = function () {
          u ? u() : R == null || R.requestDismiss();
        },
        Q = function (t) {
          return !!(t || "").trim();
        },
        X = function () {
          w.current = !0;
        },
        Y = function () {
          o("WAWebModalManager").ModalManager.open(
            _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "profile-error",
              },
              onOK: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
              okText: r("WAWebFbtCommon")("OK"),
              children: s._(/*BTDS*/ "About can't be empty"),
            }),
          );
        },
        J = function () {
          ((w.current = !1), $(E.status));
        },
        Z = function () {
          if (x == null) {
            J();
            return;
          }
          w.current = !1;
          var e = E.status,
            t = x;
          if (t !== e) {
            var n = function () {
              var e;
              (e = L.current) == null || e.focusEditBtn();
            };
            (M(!0),
              o("WAWebStatusContactAction")
                .setMyStatus(x, n)
                .then(function () {
                  F.aborted || M(!1);
                }));
          }
        },
        ee = function (t) {
          $(t);
        },
        te = w.current || N ? x : E.status,
        ne = s._(/*BTDS*/ "About"),
        re = _.jsx(o("WAWebRichTextField.react").RichTextField, {
          testid: void 0,
          value: te,
          editable: !1,
          pending: N,
          showRemaining: !0,
          validate: Q,
          maxLength: b,
          maxCodeUnits: v,
          onBeginEdit: X,
          onChange: function (t) {
            var e = t.text;
            return ee(e);
          },
          onSave: Z,
          onError: Y,
          onCancel: J,
          theme: "text-input",
          fieldName: ne,
          ariaLabel: ne,
          emojiBtnPosition: "side",
          lockable: !0,
          lowProfile: !0,
          constrainedWidth: !0,
          emojiTextSettingsInLockMode: k,
          blockFocusOnLock: !0,
          ref: L,
        }),
        oe = o("WAWebConnModel").Conn.isSMB
          ? _.jsx(o("WAWebBizProfileDrawer.react").CoverPhotoDrawerSection, {
              contact: i,
              profilePicThumb: U,
            })
          : _.jsx(T, { profilePicThumb: a.profilePicThumb }),
        ae = o("WAWebConnModel").Conn.isSMB
          ? _.jsx(o("WAWebBizProfileDrawer.react").EditBizProfileEditSection, {
              contact: i,
              openMerchantDetailsForm: f,
              businessProfile: B,
              openCatalogDetailsForm: c,
              catalogResult: H,
              aboutInput: re,
              aboutValue: te,
              openCreateUsernameDrawer: m,
              openEditUsernameDrawer: p,
              entryPoint: a.entryPoint,
              isRefreshed: !0,
            })
          : _.jsx(I, {
              aboutPromptKey: a.aboutPromptKey,
              conn: a.conn,
              aboutInput: re,
              aboutValue: te,
              contact: i,
              unmountSignal: F,
              openCreateUsernameDrawer: m,
              openEditUsernameDrawer: p,
            }),
        ie = o("WAWebSettingGatingUtils").isMeTabEnabled()
          ? s._(/*BTDS*/ "Edit profile")
          : s._(/*BTDS*/ "Profile"),
        le = l
          ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB
          : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
      return _.jsx(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        tsNavigationData: S,
        children: _.jsx(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          children: _.jsxs("div", {
            className: "x1rife3k x78zum5 xdt5ytf x5yr21d",
            children: [
              _.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                testid: void 0,
                title: ie,
                onBack: K,
                type: le,
                focusBackOrCancel: !0,
              }),
              _.jsxs(r("WAWebDrawerBody.react"), {
                children: [
                  oe,
                  ae,
                  o("WAWebQuickPromotionGating").profilePrivacyTipsEnabled() &&
                    _.jsx(r("WAWebProfileQuickPromotionSurface.react"), {}),
                  _.jsx("div", {
                    className: "xexx8yu xyri2b xefzj8c x1c1uobl",
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    ((D.displayName = D.name + " [from " + i.id + "]"), (l.default = E));
  },
  226,
);
