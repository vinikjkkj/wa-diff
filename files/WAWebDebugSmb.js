__d(
  "WAWebDebugSmb",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebApiBusinessProfile",
    "WAWebBPAccessTokenAndSessionCookiesMutation",
    "WAWebBizGetProfileShimlinksQuery",
    "WAWebBizOrderExpansionModal.react",
    "WAWebBizOrderRequestManagementDrawer.react",
    "WAWebChatCollection",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactInfoFieldsNuxModal.react",
    "WAWebContactType",
    "WAWebCustomerDataAction",
    "WAWebCustomerManagerNuxModal.react",
    "WAWebDOIntroPopup.react",
    "WAWebDebugPerCustomerDataSharing",
    "WAWebDeleteQuickReplyAction",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebLidAwareContactsDB",
    "WAWebMobilePlatforms",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebOIDCFlow.react",
    "WAWebOrderRequestDrawer.react",
    "WAWebPremiumMessageSchema",
    "WAWebQuickReplyCollection",
    "WAWebSMBListsIntroPopup.react",
    "WAWebSchemaAgent",
    "WAWebSchemaChatAssignment",
    "WAWebSchemaLabel",
    "WAWebSchemaQuickReply",
    "WAWebSchemaSubscription",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebSmbPerCustomerDataSharingOptInModal",
    "WAWebSmbPerCustomerDataSharingOptOutModal",
    "WAWebSubscriptionSource",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = R || (R = o("react")),
      E = r("requireDeferred")("WAWebGetAdsRelayEnvironment").__setRef(
        "WAWebDebugSmb",
      ),
      k = r("requireDeferred")("WAWebShowBillingWizard").__setRef(
        "WAWebDebugSmb",
      );
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.colorIndex,
            n = e.id,
            r = e.isActive,
            a = e.name,
            i = e.orderIndex,
            l = e.predefinedId,
            s = e.type,
            u = { id: n, name: a, colorIndex: t, predefinedId: l };
          i != null && (u.orderIndex = i);
          var c = s != null ? o("WAWebSchemaLabel").ListType.cast(s) : null;
          (c != null && (u.type = c),
            r != null && (u.isActive = r),
            yield o("WAWebSchemaLabel").getLabelTable().createOrReplace(u),
            o("WAWebLabelCollection").LabelCollection.add(
              babelHelpers.extends({}, u),
              { merge: !0 },
            ));
        })),
        T.apply(this, arguments)
      );
    }
    I.doc = "create label";
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.count,
            n = e.id,
            r = e.keywords,
            a = e.message,
            i = e.shortcut,
            l = { id: n, shortcut: i, count: t, message: a, keywords: r };
          (yield o("WAWebSchemaQuickReply")
            .getQuickReplyTable()
            .createOrReplace(l),
            o("WAWebQuickReplyCollection").QuickReplyCollection.add(
              { id: n, shortcut: i, message: a, keywords: r, count: t },
              { merge: !0 },
            ));
        })),
        x.apply(this, arguments)
      );
    }
    D.doc = "create quick reply";
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = new Map([
              [
                (e = o("WAWebMobilePlatforms")).PLATFORMS.SMBA,
                e.PLATFORMS.ANDROID,
              ],
              [e.PLATFORMS.SMBI, e.PLATFORMS.IPHONE],
              [e.PLATFORMS.IPHONE, e.PLATFORMS.SMBI],
              [e.PLATFORMS.ANDROID, e.PLATFORMS.SMBA],
            ]),
            n = t.get(o("WAWebConnModel").Conn.platform);
          if (!n)
            throw r("err")(
              "Unsupported platform: " + o("WAWebConnModel").Conn.platform,
            );
          ((o("WAWebConnModel").Conn.platform = n),
            yield o("WAWebMobilePlatforms").setMobilePlatform(n),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] toggleSMB",
                ])),
            ),
            window.location.reload());
        })),
        P.apply(this, arguments)
      );
    }
    (($.doc =
      "Toggle between SMB (smba/smbi) and mobile (Android/iOS) platforms"),
      ($.paramsToExecute = []));
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWidFromWidLike(e).toString();
          return {
            row: yield o("WAWebApiBusinessProfile").getBusinessProfileRow(t),
            record: yield o("WAWebApiBusinessProfile").getBusinessProfileRecord(
              t,
            ),
          };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.accessTokenMeta,
            r = e.paymentAccountID,
            a = e.wizardName,
            i = yield (S || (S = n("Promise"))).all([k.load(), E.load()]),
            l = i[0],
            s = i[1],
            c = yield s(t),
            d = yield l({
              relayEnvironment: c,
              paymentAccountID: r,
              wizardName: a != null ? a : "ADD_PM",
              wizardPropsJSON: null,
              flowID: "debug",
              onCloseCb: function (t) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Billing wizard return code: ",
                      "",
                    ])),
                  t,
                );
              },
            });
          d();
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebOIDCFlow.react").launchOIDCFlow(),
            o("WAWebModalManager").ModalManager.open(
              L.jsxs(o("WAWebModal.react").Modal, {
                type: o("WAWebModal.react").ModalTheme.AutoWrap,
                children: [
                  L.jsx(o("WAWebOIDCFlow.react").OIDCEventListener, {}),
                  L.jsx("div", {}),
                ],
              }),
            ));
        })),
        O.apply(this, arguments)
      );
    }
    function B(t) {
      return o("WAWebBizGetProfileShimlinksQuery")
        .getProfileShimlinks(t)
        .then(function (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizFetchBusinessProfileShimlinks",
              ])),
          );
        });
    }
    B.doc = "Fetch business profile shimlinks";
    var W = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(o("WAWebOrderRequestDrawer.react").OrderRequestEducationModal, {
          onExit: r("WAWebNoop"),
        }),
      );
    };
    ((W.doc = "Opens the order request education modal"),
      (W.paramsToExecute = []));
    function q() {
      o("WAWebBizOrderExpansionModal.react").openOrderExpansionModal(
        r("WAWebNoop"),
      );
    }
    function U() {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), {
          onBack: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebSchemaAgent")
              .getAgentTable()
              .bulkCreateOrReplace(e);
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrReplaceAgent: ",
                  "",
                ])),
              String(t),
            );
          } catch (e) {
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrReplaceAgent: error ",
                  "",
                ])),
              e,
            );
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield V([
            { id: "1", name: "Agent1", deviceId: 1, isDeleted: !0 },
            { id: "11", name: "Vasily", deviceId: 2, isDeleted: !1 },
            { id: "111", name: "Max", deviceId: 3, isDeleted: !1 },
            { id: "1111", name: "Jesse", deviceId: 10, isDeleted: !1 },
            { id: "11111", name: "Fabio", deviceId: 99, isDeleted: !1 },
          ]);
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          e === void 0 && (e = 10);
          var n = o("WAWebAgentCollection")
              .AgentCollection.getModelsArray()
              .filter(function (e) {
                return e.id !== "-1";
              }),
            r =
              (t = o("WAWebChatCollection").ChatCollection.getModelsArray()) ==
              null
                ? void 0
                : t.slice(0, e).map(function (e, t) {
                    var r = e.id.toString(),
                      o = n[t % (n.length - 1)].id;
                    return {
                      id: "" + t,
                      chatId: r,
                      agentId: o,
                      chatOpenedByAgent: !1,
                    };
                  });
          try {
            var a = yield o("WAWebSchemaChatAssignment")
              .getChatAssignmentTable()
              .bulkCreateOrReplace(r);
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrReplaceAgent: ",
                  "",
                ])),
              String(a),
            );
          } catch (e) {
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrReplaceAgent: error ",
                  "",
                ])),
              e,
            );
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = [
            {
              id: "WA_PREMIUM_1",
              isAutoRenewing: !0,
              isDeactivated: !1,
              expirationDate: void 0,
              creationTime: void 0,
              newMessageCappingEnabled: !1,
              tier: 1,
              status: "ACTIVE",
              source: o("WAWebSubscriptionSource").SubscriptionSource.BLUE,
              isPlatformChanged: !1,
              startTime: 1e3,
            },
            {
              id: "WA_PREMIUM_2",
              isAutoRenewing: !1,
              isDeactivated: !1,
              expirationDate: void 0,
              creationTime: null,
              newMessageCappingEnabled: !1,
              tier: 2,
              status: "ACTIVE",
              source: o("WAWebSubscriptionSource").SubscriptionSource.META_NOVA,
              isPlatformChanged: !1,
              startTime: 2e3,
            },
            {
              id: "WA_PREMIUM_4",
              isAutoRenewing: !1,
              isDeactivated: !0,
              expirationDate: 200,
              creationTime: 50,
              newMessageCappingEnabled: !0,
              tier: 1,
              status: "EXPIRED",
              source: o("WAWebSubscriptionSource").SubscriptionSource.BLUE,
              isPlatformChanged: !1,
              startTime: 100,
            },
          ];
          yield o("WAWebSchemaSubscription")
            .getSubscriptionTable()
            .bulkCreateOrReplace(e);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebPremiumMessageSchema")
              .getPremiumMessageTable()
              .bulkCreateOrReplace(e);
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "createPremiumMessage: ",
                  "",
                ])),
              String(t),
            );
          } catch (e) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "createPremiumMessage: error ",
                  "",
                ])),
              e,
            );
          }
        })),
        J.apply(this, arguments)
      );
    }
    var Z = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(r("WAWebDOIntroPopup.react"), {}),
      );
    };
    ((Z.doc = "Opens the DO Intro Popup"), (Z.paramsToExecute = []));
    var ee = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, {}),
      );
    };
    ((ee.doc = "Opens the SMB Lists Intro NUX Popup"),
      (ee.paramsToExecute = []));
    var te = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(r("WAWebCustomerManagerNuxModal.react"), {}),
      );
    };
    ((te.doc = "Opens the Customer Manager Intro NUX Modal"),
      (te.paramsToExecute = []));
    var ne = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(r("WAWebContactInfoFieldsNuxModal.react"), {}),
      );
    };
    ((ne.doc = "Opens the new contact info fields NUX Modal"),
      (ne.paramsToExecute = []));
    var re = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(
          r("WAWebSmbDataSharingOptInModalDialog")
            .SmbDataSharingOptInModalDialog,
          {
            entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
              .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CART,
            callback: function () {},
          },
        ),
      );
    };
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {})),
        ae.apply(this, arguments)
      );
    }
    oe.doc = "send delete mutation";
    var ie = function (t) {
        o("WAWebModalManager").ModalManager.open(
          L.jsx(r("WAWebSmbPerCustomerDataSharingOptOutModal"), {
            accountLid: t,
            entryPoint: o(
              "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
            ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
              .CONTACT_INFO_CARD,
          }),
        );
      },
      le = function (t) {
        o("WAWebModalManager").ModalManager.open(
          L.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
            accountLids: [t],
            entryPoint: o(
              "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
            ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
              .CONTACT_INFO_CARD,
          }),
        );
      };
    function se(e, t) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAJids").unsafeCoerceToChatJid(e);
          yield o("WAWebCustomerDataAction").customerDataAddAction(n, t);
        })),
        ue.apply(this, arguments)
      );
    }
    se.doc = "Add or update customer data for a contact";
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAJids").unsafeCoerceToChatJid(e);
          return o("WAWebCustomerDataAction").retrieveCustomerDataForChatJid(t);
        })),
        de.apply(this, arguments)
      );
    }
    ce.doc = "Get customer data for a contact";
    function me() {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebChatCollection")
            .ChatCollection.filter(function (e) {
              return r("WAWebWid").isUser(e.id);
            })
            .slice(0, 10);
          if (e.length === 0) {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerData] No user chats found to seed test data",
                ])),
            );
            return;
          }
          var t = e.map(function (e, t) {
            var n,
              r = o("WAWebContactCollection").ContactCollection.get(e.id),
              a =
                r != null
                  ? o("WAWebFrontendContactGetters").getDisplayName(r)
                  : "Test Customer " + String(t + 1);
            return {
              id: e.id.toString(),
              name: a,
              shortName: (n = a.split(" ")[0]) != null ? n : "",
              type: "in",
              isAddressBookContact: 1,
              isContactSyncCompleted: 0,
            };
          });
          yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            t,
            "DebugSmb.gen10CustomerManagementTestDataFromChats",
          );
          for (var a of t)
            if (a.id != null) {
              var i = o("WAWebWidFactory").createWidFromWidLike(a.id);
              o("WAWebContactCollection").ContactCollection.add(
                babelHelpers.extends({}, a, { id: i }),
                { merge: !0 },
              );
            }
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[CustomerData] Created ",
                " contacts in DB and collection",
              ])),
            String(e.length),
          );
          var l = [1, 2, 3, 4, 5, 6],
            s = [],
            u = e.filter(function (e) {
              return e.id.toString().endsWith(o("WAJids").LID_DOMAIN);
            });
          if (u.length === 0) {
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerData] No LID-based chats found to seed test data",
                ])),
            );
            return;
          }
          (yield (S || (S = n("Promise"))).all(
            u.map(function (e, t) {
              var n = o("WAJids").unsafeCoerceToChatJid(e.id.toString()),
                r = l[t % l.length];
              return (
                s.length < 3 &&
                  s.push({ chatId: e.id.toString(), leadStage: r }),
                o("WAWebCustomerDataAction").customerDataAddAction(n, {
                  contactType: o("WAWebContactType").ContactType.CUSTOMER,
                  email: "test@meta.com",
                  altPhoneNumbers: "666-888-9999",
                  address: "1 Hacker Way",
                  leadStage: r,
                  acquisitionSource: 0,
                  lastOrder: o("WATimeUtils").castToUnixTime(1773181023),
                })
              );
            }),
          ),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerData] seeded=",
                  " skipped=",
                  " samples=",
                  "",
                ])),
              String(u.length),
              String(e.length - u.length),
              JSON.stringify(s),
            ));
        })),
        pe.apply(this, arguments)
      );
    }
    ((me.doc =
      "Seed 10 customer management test records with distributed lead stages"),
      (me.paramsToExecute = []));
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[DEBUG][SMB] fetching BP access token and session cookies",
              ])),
          );
          var t = yield o(
            "WAWebBPAccessTokenAndSessionCookiesMutation",
          ).fetchBPAccessTokenAndSessionCookies(e);
          return (
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[DEBUG][SMB] BP access token result: ",
                  "",
                ])),
              t,
            ),
            t
          );
        })),
        fe.apply(this, arguments)
      );
    }
    _e.doc =
      "Fetch SMB BP access token and session cookies via xwa_bp_access_token_and_session_cookies GQL endpoint";
    var ge = babelHelpers.extends(
      {
        createOrReplaceLabel: I,
        createOrReplaceQuickReply: D,
        getBusinessProfileFromDBById: N,
        toggleSMB: $,
        showBillingWizard: w,
        launchOIDCFlow: F,
      },
      r("WAWebDebugPerCustomerDataSharing"),
      {
        bizFetchBusinessProfileShimlinks: B,
        openOrderRequestEducationModal: W,
        openBizOrderExpansionModal: q,
        openBizOrderRequestManagementModal: U,
        createTestAgents: G,
        assignChatsToAgents: j,
        createSubscriptions: Q,
        createPremiumMessage: Y,
        openDOIntroPopup: Z,
        openSMBListsIntroPopup: ee,
        openCustomerManagerNuxModal: te,
        openContactInfoFieldsNuxModal: ne,
        openSmbDataSharingDialog: re,
        syncQuickReplyDelete: oe,
        showPerCustomerDataSharingOptOutModal: ie,
        showPerCustomerDataSharingOptInModal: le,
        addCustomerData: se,
        getCustomerData: ce,
        gen10CustomerManagementTestDataFromChats: me,
        fetchBPAccessTokenGQL: _e,
      },
    );
    l.default = ge;
  },
  98,
);
