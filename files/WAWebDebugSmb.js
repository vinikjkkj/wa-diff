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
    async function I(e, t, n, r, a, i, l) {
      var s = { id: e, name: t, colorIndex: n, predefinedId: r };
      a != null && (s.orderIndex = a);
      var u = i != null ? o("WAWebSchemaLabel").ListType.cast(i) : null;
      (u != null && (s.type = u),
        l != null && (s.isActive = l),
        await o("WAWebSchemaLabel").getLabelTable().createOrReplace(s),
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({}, s),
          { merge: !0 },
        ));
    }
    I.doc = "create label";
    async function T(e, t, n, r, a) {
      var i = { id: e, shortcut: t, count: r, message: n, keywords: a };
      (await o("WAWebSchemaQuickReply").getQuickReplyTable().createOrReplace(i),
        o("WAWebQuickReplyCollection").QuickReplyCollection.add(
          { id: e, shortcut: t, message: n, keywords: a, count: r },
          { merge: !0 },
        ));
    }
    T.doc = "create quick reply";
    async function D() {
      var t,
        n = new Map([
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
    ((D.doc =
      "Toggle between SMB (smba/smbi) and mobile (Android/iOS) platforms"),
      (D.paramsToExecute = []));
    async function x(e) {
      var t = o("WAWebWidFactory").createWidFromWidLike(e).toString();
      return {
        row: await o("WAWebApiBusinessProfile").getBusinessProfileRow(t),
        record: await o("WAWebApiBusinessProfile").getBusinessProfileRecord(t),
      };
    }
    var $ = {
      delayBusinessProfileQuery: 0,
      mockBusinessProfileQueryPayload: null,
      mockBusinessProfileId: null,
    };
    function P(e) {
      (($.delayBusinessProfileQuery = e),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Business Profile query will be delayed by ",
              " seconds",
            ])),
          e,
        ));
    }
    async function N(e) {
      var t = e.accessTokenMeta,
        n = e.paymentAccountID,
        r = e.wizardName,
        a = await Promise.all([k.load(), E.load()]),
        i = a[0],
        l = a[1],
        s = await l(t),
        c = await i({
          relayEnvironment: s,
          paymentAccountID: n,
          wizardName: r != null ? r : "ADD_PM",
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
      c();
    }
    async function M() {
      (await o("WAWebOIDCFlow.react").launchOIDCFlow(),
        o("WAWebModalManager").ModalManager.open(
          L.jsxs(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.AutoWrap,
            children: [
              L.jsx(o("WAWebOIDCFlow.react").OIDCEventListener, {}),
              L.jsx("div", {}),
            ],
          }),
        ));
    }
    function w(e) {
      return o("WAWebBizGetProfileShimlinksQuery")
        .getProfileShimlinks(e)
        .then(function (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizFetchBusinessProfileShimlinks",
              ])),
          );
        });
    }
    w.doc = "Fetch business profile shimlinks";
    var A = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(o("WAWebOrderRequestDrawer.react").OrderRequestEducationModal, {
          onExit: r("WAWebNoop"),
        }),
      );
    };
    ((A.doc = "Opens the order request education modal"),
      (A.paramsToExecute = []));
    function F() {
      o("WAWebBizOrderExpansionModal.react").openOrderExpansionModal(
        r("WAWebNoop"),
      );
    }
    function O() {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), {
          onBack: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    async function B(e) {
      try {
        var t = await o("WAWebSchemaAgent")
          .getAgentTable()
          .bulkCreateOrReplace(e);
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "createOrReplaceAgent: ",
              "",
            ])),
          String(t),
        );
      } catch (e) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "createOrReplaceAgent: error ",
              "",
            ])),
          e,
        );
      }
    }
    async function W() {
      await B([
        { id: "1", name: "Agent1", deviceId: 1, isDeleted: !0 },
        { id: "11", name: "Vasily", deviceId: 2, isDeleted: !1 },
        { id: "111", name: "Max", deviceId: 3, isDeleted: !1 },
        { id: "1111", name: "Jesse", deviceId: 10, isDeleted: !1 },
        { id: "11111", name: "Fabio", deviceId: 99, isDeleted: !1 },
      ]);
    }
    async function q(e) {
      var t;
      e === void 0 && (e = 10);
      var n = o("WAWebAgentCollection")
          .AgentCollection.getModelsArray()
          .filter(function (e) {
            return e.id !== "-1";
          }),
        r =
          (t = o("WAWebChatCollection").ChatCollection.getModelsArray()) == null
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
        var a = await o("WAWebSchemaChatAssignment")
          .getChatAssignmentTable()
          .bulkCreateOrReplace(r);
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "createOrReplaceAgent: ",
              "",
            ])),
          String(a),
        );
      } catch (e) {
        o("WALogger").WARN(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "createOrReplaceAgent: error ",
              "",
            ])),
          e,
        );
      }
    }
    async function U() {
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
    async function V(e) {
      try {
        var t = await o("WAWebPremiumMessageSchema")
          .getPremiumMessageTable()
          .bulkCreateOrReplace(e);
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "createPremiumMessage: ",
              "",
            ])),
          String(t),
        );
      } catch (e) {
        o("WALogger").WARN(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "createPremiumMessage: error ",
              "",
            ])),
          e,
        );
      }
    }
    var H = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(r("WAWebDOIntroPopup.react"), {}),
      );
    };
    ((H.doc = "Opens the DO Intro Popup"), (H.paramsToExecute = []));
    var G = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, {}),
      );
    };
    ((G.doc = "Opens the SMB Lists Intro NUX Popup"), (G.paramsToExecute = []));
    var z = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(r("WAWebCustomerManagerNuxModal.react"), {}),
      );
    };
    ((z.doc = "Opens the Customer Manager Intro NUX Modal"),
      (z.paramsToExecute = []));
    var j = function () {
      o("WAWebModalManager").ModalManager.open(
        L.jsx(r("WAWebContactInfoFieldsNuxModal.react"), {}),
      );
    };
    ((j.doc = "Opens the new contact info fields NUX Modal"),
      (j.paramsToExecute = []));
    var K = function () {
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
    async function Q(e) {}
    Q.doc = "send delete mutation";
    var X = function (t) {
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
      Y = function (t) {
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
    async function J(e, t) {
      var n = o("WAJids").unsafeCoerceToChatJid(e);
      await o("WAWebCustomerDataAction").customerDataAddAction(n, t);
    }
    J.doc = "Add or update customer data for a contact";
    async function Z(e) {
      var t = o("WAJids").unsafeCoerceToChatJid(e);
      return o("WAWebCustomerDataAction").retrieveCustomerDataForChatJid(t);
    }
    Z.doc = "Get customer data for a contact";
    async function ee() {
      var e = o("WAWebChatCollection")
        .ChatCollection.filter(function (e) {
          return r("WAWebWid").isUser(e.id);
        })
        .slice(0, 10);
      if (e.length === 0) {
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
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
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
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
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[CustomerData] No LID-based chats found to seed test data",
            ])),
        );
        return;
      }
      (await Promise.all(
        s.map(function (e, t) {
          var n = o("WAJids").unsafeCoerceToChatJid(e.id.toString()),
            r = i[t % i.length];
          return (
            l.length < 3 && l.push({ chatId: e.id.toString(), leadStage: r }),
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
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
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
    ((ee.doc =
      "Seed 10 customer management test records with distributed lead stages"),
      (ee.paramsToExecute = []));
    async function te(e) {
      o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "[DEBUG][SMB] fetching BP access token and session cookies",
          ])),
      );
      var t = await o(
        "WAWebBPAccessTokenAndSessionCookiesMutation",
      ).fetchBPAccessTokenAndSessionCookies(e);
      return (
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "[DEBUG][SMB] BP access token result: ",
              "",
            ])),
          t,
        ),
        t
      );
    }
    te.doc =
      "Fetch SMB BP access token and session cookies via xwa_bp_access_token_and_session_cookies GQL endpoint";
    var ne = babelHelpers.extends(
      {
        createOrReplaceLabel: I,
        createOrReplaceQuickReply: T,
        getBusinessProfileFromDBById: x,
        toggleSMB: D,
        delayBusinessProfileQuery: P,
        debugSmbConfigs: $,
        showBillingWizard: N,
        launchOIDCFlow: M,
      },
      r("WAWebDebugPerCustomerDataSharing"),
      {
        bizFetchBusinessProfileShimlinks: w,
        openOrderRequestEducationModal: A,
        openBizOrderExpansionModal: F,
        openBizOrderRequestManagementModal: O,
        createTestAgents: W,
        assignChatsToAgents: q,
        createSubscriptions: U,
        createPremiumMessage: V,
        openDOIntroPopup: H,
        openSMBListsIntroPopup: G,
        openCustomerManagerNuxModal: z,
        openContactInfoFieldsNuxModal: j,
        openSmbDataSharingDialog: K,
        syncQuickReplyDelete: Q,
        showPerCustomerDataSharingOptOutModal: X,
        showPerCustomerDataSharingOptInModal: Y,
        addCustomerData: J,
        getCustomerData: Z,
        gen10CustomerManagementTestDataFromChats: ee,
        fetchBPAccessTokenGQL: te,
      },
    );
    l.default = ne;
  },
  98,
);
