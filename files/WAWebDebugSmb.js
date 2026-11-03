__d(
  "WAWebDebugSmb",
  [
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
    "WAWebCustomerManagerEducationUnitsDebugOverride",
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
      R = S || (S = o("react")),
      L = r("requireDeferred")("WAWebGetAdsRelayEnvironment").__setRef(
        "WAWebDebugSmb",
      ),
      E = r("requireDeferred")("WAWebShowBillingWizard").__setRef(
        "WAWebDebugSmb",
      );
    async function k(e) {
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
        await o("WAWebSchemaLabel").getLabelTable().createOrReplace(c),
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({}, c),
          { merge: !0 },
        ));
    }
    k.doc = "create label";
    async function I(e) {
      var t = e.count,
        n = e.id,
        a = e.keywords,
        i = e.message,
        l = e.shortcut;
      r("vulture")("untm6PKTbu_NMu6H6yq02aj2H-I=");
      var s = { id: n, shortcut: l, count: t, message: i, keywords: a };
      (await o("WAWebSchemaQuickReply").getQuickReplyTable().createOrReplace(s),
        o("WAWebQuickReplyCollection").QuickReplyCollection.add(
          { id: n, shortcut: l, message: i, keywords: a, count: t },
          { merge: !0 },
        ));
    }
    I.doc = "create quick reply";
    async function T() {
      var t;
      r("vulture")("ZeVClSWHyJQsC8WDn0UjfHhYIGo=");
      var n = new Map([
          [(t = o("WAWebMobilePlatforms")).PLATFORMS.SMBA, t.PLATFORMS.ANDROID],
          [t.PLATFORMS.SMBI, t.PLATFORMS.IPHONE],
          [t.PLATFORMS.IPHONE, t.PLATFORMS.SMBI],
          [t.PLATFORMS.ANDROID, t.PLATFORMS.SMBA],
        ]),
        a = n.get(o("WAWebConnModel").Conn.platform);
      if (!a)
        throw r("err")(
          "Unsupported platform: " + o("WAWebConnModel").Conn.platform,
        );
      ((o("WAWebConnModel").Conn.platform = a),
        await o("WAWebMobilePlatforms").setMobilePlatform(a),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[reload] toggleSMB",
            ])),
        ),
        window.location.reload());
    }
    ((T.doc =
      "Toggle between SMB (smba/smbi) and mobile (Android/iOS) platforms"),
      (T.paramsToExecute = []));
    async function D(e) {
      r("vulture")("KF7jHfwv65dBmRX9sF9-impbWQQ=");
      var t = o("WAWebWidFactory").createWidFromWidLike(e).toString();
      return {
        row: await o("WAWebApiBusinessProfile").getBusinessProfileRow(t),
      };
    }
    async function x(e) {
      var t = e.accessTokenMeta,
        n = e.paymentAccountID,
        a = e.wizardName;
      r("vulture")("-LhlJi3LyRBK0p8a5xitm7FzC90=");
      var i = await Promise.all([E.load(), L.load()]),
        l = i[0],
        u = i[1],
        c = await u(t),
        d = await l({
          relayEnvironment: c,
          paymentAccountID: n,
          wizardName: a != null ? a : "ADD_PM",
          wizardPropsJSON: null,
          flowID: "debug",
          onCloseCb: function (t) {
            (r("vulture")("FGCINichpF9ziUjzt407dnovjWo="),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Billing wizard return code: ",
                    "",
                  ])),
                t,
              ));
          },
        });
      d();
    }
    async function $() {
      (r("vulture")("WFRHzZdYexzFe4maYGjUNaUHNVA="),
        await o("WAWebOIDCFlow.react").launchOIDCFlow(),
        o("WAWebModalManager").ModalManager.open(
          R.jsxs(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.AutoWrap,
            children: [
              R.jsx(o("WAWebOIDCFlow.react").OIDCEventListener, {}),
              R.jsx("div", {}),
            ],
          }),
        ));
    }
    function P(e) {
      return (
        r("vulture")("rl7DgSsCi6jmWfL2hIxJtZ4JqaM="),
        o("WAWebBizGetProfileShimlinksQuery")
          .getProfileShimlinks(e)
          .then(function (e) {
            (r("vulture")("New68DBw9IBGoM0zrXz1Ropm1nQ="),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:bizFetchBusinessProfileShimlinks",
                  ])),
              ));
          })
      );
    }
    P.doc = "Fetch business profile shimlinks";
    var N = function () {
      (r("vulture")("A2LYpOOVMSkaRq3LOyQM4f_2Q4I="),
        o("WAWebModalManager").ModalManager.open(
          R.jsx(o("WAWebOrderRequestDrawer.react").OrderRequestEducationModal, {
            onExit: r("WAWebNoop"),
          }),
        ));
    };
    ((N.doc = "Opens the order request education modal"),
      (N.paramsToExecute = []));
    function M() {
      (r("vulture")("8SUomXtUIuXGuE4x_Tmmb7AZDsc="),
        o("WAWebBizOrderExpansionModal.react").openOrderExpansionModal(
          r("WAWebNoop"),
        ));
    }
    function w() {
      (r("vulture")("SMSqDXvpH24aR2Cvxv7DiO3RqbA="),
        o("WAWebModalManager").ModalManager.open(
          R.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), {
            onBack: o("WAWebModalManager").closeModalManager,
          }),
        ));
    }
    async function A(e) {
      r("vulture")("-2JhEi7fJ43aCPzsRtw4N4MjoEQ=");
      try {
        var t = await o("WAWebSchemaAgent")
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
    }
    async function F() {
      (r("vulture")("L_NKOHFR6C6_txd4mgYXHPUJ2hM="),
        await A([
          { id: "1", name: "Agent1", deviceId: 1, isDeleted: !0 },
          { id: "11", name: "Vasily", deviceId: 2, isDeleted: !1 },
          { id: "111", name: "Max", deviceId: 3, isDeleted: !1 },
          { id: "1111", name: "Jesse", deviceId: 10, isDeleted: !1 },
          { id: "11111", name: "Fabio", deviceId: 99, isDeleted: !1 },
        ]));
    }
    async function O(e) {
      var t;
      (e === void 0 && (e = 10), r("vulture")("jDw_4IWoWvZRz3GB2Jn9wbf-LyQ="));
      var n = o("WAWebAgentCollection")
          .AgentCollection.getModelsArray()
          .filter(function (e) {
            return e.id !== "-1";
          }),
        a =
          (t = o("WAWebChatCollection").ChatCollection.getModelsArray()) == null
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
        var i = await o("WAWebSchemaChatAssignment")
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
    }
    async function B() {
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
      await o("WAWebSchemaSubscription")
        .getSubscriptionTable()
        .bulkCreateOrReplace(e);
    }
    async function W(e) {
      r("vulture")("5XEi5aO26OxRc-vMSc8yQ0YaeZE=");
      try {
        var t = await o("WAWebPremiumMessageSchema")
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
    }
    var q = function () {
      (r("vulture")("6YSwVoQFs_Cwb5XqLg0iTuK9bvk="),
        o("WAWebModalManager").ModalManager.open(
          R.jsx(r("WAWebDOIntroPopup.react"), {}),
        ));
    };
    ((q.doc = "Opens the DO Intro Popup"), (q.paramsToExecute = []));
    var U = function () {
      (r("vulture")("qCwURaUgrBdpUhxGnO63Ham7ZmU="),
        o("WAWebModalManager").ModalManager.open(
          R.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, {}),
        ));
    };
    ((U.doc = "Opens the SMB Lists Intro NUX Popup"), (U.paramsToExecute = []));
    var V = function () {
      (r("vulture")("B3Kq6DVZO-2SfgQe9L2qUmHRu0o="),
        o("WAWebModalManager").ModalManager.open(
          R.jsx(r("WAWebCustomerManagerNuxModal.react"), {}),
        ));
    };
    ((V.doc = "Opens the Customer Manager Intro NUX Modal"),
      (V.paramsToExecute = []));
    function H(e) {
      (e === void 0 && (e = "hatch"),
        o(
          "WAWebCustomerManagerEducationUnitsDebugOverride",
        ).setCustomerManagerEducationUnitsOverride(
          e == null
            ? null
            : o(
                "WAWebCustomerManagerEducationUnitsDebugOverride",
              ).buildCustomerManagerEducationUnitsFixture(e),
        ));
    }
    H.doc =
      "Stand in for the Customer Manager education feed: no argument seeds the fixture on the small clip, 'login_hq' on the large one, null clears it. Reopen Customer Manager to pick up the change.";
    var G = function () {
      (r("vulture")("PYqA_8qsJoy-fHeXOWOuW_RL3bs="),
        o("WAWebModalManager").ModalManager.open(
          R.jsx(r("WAWebContactInfoFieldsNuxModal.react"), {}),
        ));
    };
    ((G.doc = "Opens the new contact info fields NUX Modal"),
      (G.paramsToExecute = []));
    var z = function () {
      (r("vulture")("dycd9a5Q2zDU0zqyDcgot5wg1bg="),
        o("WAWebModalManager").ModalManager.open(
          R.jsx(
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
    async function j(e) {
      r("vulture")("URCJo3asnFPvtAtNZV6yK6p9q3U=");
    }
    j.doc = "send delete mutation";
    var K = function (t) {
        (r("vulture")("JXo1zqXpQyDXicQM4ARZUAaPfUI="),
          o("WAWebModalManager").ModalManager.open(
            R.jsx(r("WAWebSmbPerCustomerDataSharingOptOutModal"), {
              accountLid: t,
              entryPoint: o(
                "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
              ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
                .CONTACT_INFO_CARD,
            }),
          ));
      },
      Q = function (t) {
        (r("vulture")("9o4hSAZFGJYyC0NFJk4XvkW3FRo="),
          o("WAWebModalManager").ModalManager.open(
            R.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
              accountLids: [t],
              entryPoint: o(
                "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
              ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
                .CONTACT_INFO_CARD,
            }),
          ));
      };
    async function X(e, t) {
      r("vulture")("_JNijRQYrgerRjMV2PYdu86YDXE=");
      var n = o("WAJids").unsafeCoerceToChatJid(e);
      await o("WAWebCustomerDataAction").customerDataAddAction(n, t);
    }
    X.doc = "Add or update customer data for a contact";
    async function Y(e) {
      r("vulture")("GG9DhR7bkaQ2Z5qDs9gJGAJ6Meg=");
      var t = o("WAJids").unsafeCoerceToChatJid(e);
      return o("WAWebCustomerDataAction").retrieveCustomerDataForChatJid(t);
    }
    Y.doc = "Get customer data for a contact";
    async function J() {
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
      await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
        t,
        "DebugSmb.gen10CustomerManagementTestDataFromChats",
      );
      for (var n of t)
        if (n.id != null) {
          var a = o("WAWebWidFactory").createWidFromWidLike(n.id);
          o("WAWebContactCollection").ContactCollection.add(
            babelHelpers.extends({}, n, { id: a }),
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
      var i = [1, 2, 3, 4, 5, 6],
        l = [],
        s = e.filter(function (e) {
          return e.id.toString().endsWith(o("WAJids").LID_DOMAIN);
        });
      if (s.length === 0) {
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[CustomerData] No LID-based chats found to seed test data",
            ])),
        );
        return;
      }
      (await Promise.all(
        s.map(function (e, t) {
          r("vulture")("qzb5jdOhTkBrHb3FrHLryWyJQo4=");
          var n = o("WAJids").unsafeCoerceToChatJid(e.id.toString()),
            a = i[t % i.length];
          return (
            l.length < 3 && l.push({ chatId: e.id.toString(), leadStage: a }),
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
          String(s.length),
          String(e.length - s.length),
          JSON.stringify(l),
        ));
    }
    ((J.doc =
      "Seed 10 customer management test records with distributed lead stages"),
      (J.paramsToExecute = []));
    async function Z(e) {
      (r("vulture")("Kzdf44boSW1xC0EN0dcmKlEKeXQ="),
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[DEBUG][SMB] fetching BP access token and session cookies",
            ])),
        ));
      var t = await o(
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
    }
    Z.doc =
      "Fetch SMB BP access token and session cookies via xwa_bp_access_token_and_session_cookies GQL endpoint";
    var ee = babelHelpers.extends(
      {
        createOrReplaceLabel: k,
        createOrReplaceQuickReply: I,
        getBusinessProfileFromDBById: D,
        toggleSMB: T,
        showBillingWizard: x,
        launchOIDCFlow: $,
      },
      r("WAWebDebugPerCustomerDataSharing"),
      {
        bizFetchBusinessProfileShimlinks: P,
        openOrderRequestEducationModal: N,
        openBizOrderExpansionModal: M,
        openBizOrderRequestManagementModal: w,
        createTestAgents: F,
        assignChatsToAgents: O,
        createSubscriptions: B,
        createPremiumMessage: W,
        openDOIntroPopup: q,
        openSMBListsIntroPopup: U,
        openCustomerManagerNuxModal: V,
        setCustomerManagerEducationUnits: H,
        openContactInfoFieldsNuxModal: G,
        openSmbDataSharingDialog: z,
        syncQuickReplyDelete: j,
        showPerCustomerDataSharingOptOutModal: K,
        showPerCustomerDataSharingOptInModal: Q,
        addCustomerData: X,
        getCustomerData: Y,
        gen10CustomerManagementTestDataFromChats: J,
        fetchBPAccessTokenGQL: Z,
      },
    );
    l.default = ee;
  },
  98,
);
