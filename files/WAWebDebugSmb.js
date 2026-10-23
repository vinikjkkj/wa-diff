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
    "vulture",
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
            a = e.isActive,
            i = e.name,
            l = e.orderIndex,
            s = e.predefinedId,
            u = e.type;
          r("vulture")("_eJJzzEQ74ZswFLv-9b_nSNApQU=");
          var c = { id: n, name: i, colorIndex: t, predefinedId: s };
          l != null && (c.orderIndex = l);
          var d = u != null ? o("WAWebSchemaLabel").ListType.cast(u) : null;
          (d != null && (c.type = d),
            a != null && (c.isActive = a),
            yield o("WAWebSchemaLabel").getLabelTable().createOrReplace(c),
            o("WAWebLabelCollection").LabelCollection.add(
              babelHelpers.extends({}, c),
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
            a = e.keywords,
            i = e.message,
            l = e.shortcut;
          r("vulture")("untm6PKTbu_NMu6H6yq02aj2H-I=");
          var s = { id: n, shortcut: l, count: t, message: i, keywords: a };
          (yield o("WAWebSchemaQuickReply")
            .getQuickReplyTable()
            .createOrReplace(s),
            o("WAWebQuickReplyCollection").QuickReplyCollection.add(
              { id: n, shortcut: l, message: i, keywords: a, count: t },
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
          var e;
          r("vulture")("ZeVClSWHyJQsC8WDn0UjfHhYIGo=");
          var t = new Map([
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
          r("vulture")("KF7jHfwv65dBmRX9sF9-impbWQQ=");
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
            a = e.paymentAccountID,
            i = e.wizardName;
          r("vulture")("-LhlJi3LyRBK0p8a5xitm7FzC90=");
          var l = yield (S || (S = n("Promise"))).all([k.load(), E.load()]),
            s = l[0],
            c = l[1],
            d = yield c(t),
            m = yield s({
              relayEnvironment: d,
              paymentAccountID: a,
              wizardName: i != null ? i : "ADD_PM",
              wizardPropsJSON: null,
              flowID: "debug",
              onCloseCb: function (t) {
                (r("vulture")("FGCINichpF9ziUjzt407dnovjWo="),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Billing wizard return code: ",
                        "",
                      ])),
                    t,
                  ));
              },
            });
          m();
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
          (r("vulture")("WFRHzZdYexzFe4maYGjUNaUHNVA="),
            yield o("WAWebOIDCFlow.react").launchOIDCFlow(),
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
      return (
        r("vulture")("rl7DgSsCi6jmWfL2hIxJtZ4JqaM="),
        o("WAWebBizGetProfileShimlinksQuery")
          .getProfileShimlinks(t)
          .then(function (t) {
            (r("vulture")("New68DBw9IBGoM0zrXz1Ropm1nQ="),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizFetchBusinessProfileShimlinks",
                  ])),
              ));
          })
      );
    }
    B.doc = "Fetch business profile shimlinks";
    var W = function () {
      (r("vulture")("A2LYpOOVMSkaRq3LOyQM4f_2Q4I="),
        o("WAWebModalManager").ModalManager.open(
          L.jsx(o("WAWebOrderRequestDrawer.react").OrderRequestEducationModal, {
            onExit: r("WAWebNoop"),
          }),
        ));
    };
    ((W.doc = "Opens the order request education modal"),
      (W.paramsToExecute = []));
    function q() {
      (r("vulture")("8SUomXtUIuXGuE4x_Tmmb7AZDsc="),
        o("WAWebBizOrderExpansionModal.react").openOrderExpansionModal(
          r("WAWebNoop"),
        ));
    }
    function U() {
      (r("vulture")("SMSqDXvpH24aR2Cvxv7DiO3RqbA="),
        o("WAWebModalManager").ModalManager.open(
          L.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), {
            onBack: o("WAWebModalManager").closeModalManager,
          }),
        ));
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("-2JhEi7fJ43aCPzsRtw4N4MjoEQ=");
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
          (r("vulture")("L_NKOHFR6C6_txd4mgYXHPUJ2hM="),
            yield V([
              { id: "1", name: "Agent1", deviceId: 1, isDeleted: !0 },
              { id: "11", name: "Vasily", deviceId: 2, isDeleted: !1 },
              { id: "111", name: "Max", deviceId: 3, isDeleted: !1 },
              { id: "1111", name: "Jesse", deviceId: 10, isDeleted: !1 },
              { id: "11111", name: "Fabio", deviceId: 99, isDeleted: !1 },
            ]));
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
          (e === void 0 && (e = 10),
            r("vulture")("jDw_4IWoWvZRz3GB2Jn9wbf-LyQ="));
          var n = o("WAWebAgentCollection")
              .AgentCollection.getModelsArray()
              .filter(function (e) {
                return e.id !== "-1";
              }),
            a =
              (t = o("WAWebChatCollection").ChatCollection.getModelsArray()) ==
              null
                ? void 0
                : t.slice(0, e).map(function (e, t) {
                    r("vulture")("8QBk7e9Rw_D0p1X4kYSabB1zthI=");
                    var o = e.id.toString(),
                      a = n[t % (n.length - 1)].id;
                    return {
                      id: "" + t,
                      chatId: o,
                      agentId: a,
                      chatOpenedByAgent: !1,
                    };
                  });
          try {
            var i = yield o("WAWebSchemaChatAssignment")
              .getChatAssignmentTable()
              .bulkCreateOrReplace(a);
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrReplaceAgent: ",
                  "",
                ])),
              String(i),
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
          r("vulture")("lmsYjGY8SLqaL4bIQsHLwdUTvEE=");
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
          r("vulture")("5XEi5aO26OxRc-vMSc8yQ0YaeZE=");
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
      (r("vulture")("6YSwVoQFs_Cwb5XqLg0iTuK9bvk="),
        o("WAWebModalManager").ModalManager.open(
          L.jsx(r("WAWebDOIntroPopup.react"), {}),
        ));
    };
    ((Z.doc = "Opens the DO Intro Popup"), (Z.paramsToExecute = []));
    var ee = function () {
      (r("vulture")("qCwURaUgrBdpUhxGnO63Ham7ZmU="),
        o("WAWebModalManager").ModalManager.open(
          L.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, {}),
        ));
    };
    ((ee.doc = "Opens the SMB Lists Intro NUX Popup"),
      (ee.paramsToExecute = []));
    var te = function () {
      (r("vulture")("B3Kq6DVZO-2SfgQe9L2qUmHRu0o="),
        o("WAWebModalManager").ModalManager.open(
          L.jsx(r("WAWebCustomerManagerNuxModal.react"), {}),
        ));
    };
    ((te.doc = "Opens the Customer Manager Intro NUX Modal"),
      (te.paramsToExecute = []));
    var ne = function () {
      (r("vulture")("PYqA_8qsJoy-fHeXOWOuW_RL3bs="),
        o("WAWebModalManager").ModalManager.open(
          L.jsx(r("WAWebContactInfoFieldsNuxModal.react"), {}),
        ));
    };
    ((ne.doc = "Opens the new contact info fields NUX Modal"),
      (ne.paramsToExecute = []));
    var re = function () {
      (r("vulture")("dycd9a5Q2zDU0zqyDcgot5wg1bg="),
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
        ));
    };
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("URCJo3asnFPvtAtNZV6yK6p9q3U=");
        })),
        ae.apply(this, arguments)
      );
    }
    oe.doc = "send delete mutation";
    var ie = function (t) {
        (r("vulture")("JXo1zqXpQyDXicQM4ARZUAaPfUI="),
          o("WAWebModalManager").ModalManager.open(
            L.jsx(r("WAWebSmbPerCustomerDataSharingOptOutModal"), {
              accountLid: t,
              entryPoint: o(
                "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
              ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
                .CONTACT_INFO_CARD,
            }),
          ));
      },
      le = function (t) {
        (r("vulture")("9o4hSAZFGJYyC0NFJk4XvkW3FRo="),
          o("WAWebModalManager").ModalManager.open(
            L.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
              accountLids: [t],
              entryPoint: o(
                "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
              ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
                .CONTACT_INFO_CARD,
            }),
          ));
      };
    function se(e, t) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          r("vulture")("_JNijRQYrgerRjMV2PYdu86YDXE=");
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
          r("vulture")("GG9DhR7bkaQ2Z5qDs9gJGAJ6Meg=");
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
          r("vulture")("LRb1CYVECHaSxkRQU8VSnniG_2k=");
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
            var n;
            r("vulture")("COlOwEpG_J4GBvUGsksg9l8c6D0=");
            var a = o("WAWebContactCollection").ContactCollection.get(e.id),
              i =
                a != null
                  ? o("WAWebFrontendContactGetters").getDisplayName(a)
                  : "Test Customer " + String(t + 1);
            return {
              id: e.id.toString(),
              name: i,
              shortName: (n = i.split(" ")[0]) != null ? n : "",
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
              r("vulture")("qzb5jdOhTkBrHb3FrHLryWyJQo4=");
              var n = o("WAJids").unsafeCoerceToChatJid(e.id.toString()),
                a = l[t % l.length];
              return (
                s.length < 3 &&
                  s.push({ chatId: e.id.toString(), leadStage: a }),
                o("WAWebCustomerDataAction").customerDataAddAction(n, {
                  contactType: o("WAWebContactType").ContactType.CUSTOMER,
                  email: "test@meta.com",
                  altPhoneNumbers: "666-888-9999",
                  address: "1 Hacker Way",
                  leadStage: a,
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
          (r("vulture")("Kzdf44boSW1xC0EN0dcmKlEKeXQ="),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[DEBUG][SMB] fetching BP access token and session cookies",
                ])),
            ));
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
