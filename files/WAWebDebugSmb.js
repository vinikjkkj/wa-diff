__d(
  "WAWebDebugSmb",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebApiBusinessProfile",
    "WAWebBizGetProfileShimlinksQuery",
    "WAWebBizOrderExpansionModal.react",
    "WAWebBizOrderRequestManagementDrawer.react",
    "WAWebChatCollection",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactType",
    "WAWebCustomerDataAction",
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
      R = S || (S = o("react")),
      L = r("requireDeferred")("WAWebGetAdsRelayEnvironment").__setRef(
        "WAWebDebugSmb",
      ),
      E = r("requireDeferred")("WAWebShowBillingWizard").__setRef(
        "WAWebDebugSmb",
      );
    function k(e, t, n, r, o) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = { id: e, name: t, colorIndex: n, predefinedId: r };
            (a != null && (i.orderIndex = a),
              yield o("WAWebSchemaLabel").getLabelTable().createOrReplace(i),
              o("WAWebLabelCollection").LabelCollection.add(
                babelHelpers.extends({}, i),
                { merge: !0 },
              ));
          },
        )),
        I.apply(this, arguments)
      );
    }
    k.doc = "create label";
    function T(e, t, n, r, o) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = { id: e, shortcut: t, count: r, message: n, keywords: a };
            (yield o("WAWebSchemaQuickReply")
              .getQuickReplyTable()
              .createOrReplace(i),
              o("WAWebQuickReplyCollection").QuickReplyCollection.add(
                { id: e, shortcut: t, message: n, keywords: a, count: r },
                { merge: !0 },
              ));
          },
        )),
        D.apply(this, arguments)
      );
    }
    T.doc = "create quick reply";
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] toggleSMB",
                ])),
            ),
            window.location.reload());
        })),
        $.apply(this, arguments)
      );
    }
    ((x.doc =
      "Toggle between SMB (smba/smbi) and mobile (Android/iOS) platforms"),
      (x.paramsToExecute = []));
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWidFromWidLike(e).toString();
          return {
            row: yield o("WAWebApiBusinessProfile").getBusinessProfileRow(t),
            record: yield o("WAWebApiBusinessProfile").getBusinessProfileRecord(
              t,
            ),
          };
        })),
        N.apply(this, arguments)
      );
    }
    var M = {
      delayBusinessProfileQuery: 0,
      mockBusinessProfileQueryPayload: null,
      mockBusinessProfileId: null,
    };
    function w(t) {
      ((M.delayBusinessProfileQuery = t),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Business Profile query will be delayed by ",
              " seconds",
            ])),
          t,
        ));
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.accessTokenMeta,
            r = e.paymentAccountID,
            a = e.wizardName,
            i = yield (v || (v = n("Promise"))).all([E.load(), L.load()]),
            l = i[0],
            s = i[1],
            u = yield s(t),
            d = yield l({
              relayEnvironment: u,
              paymentAccountID: r,
              wizardName: a != null ? a : "ADD_PM",
              wizardPropsJSON: null,
              flowID: "debug",
              onCloseCb: function (t) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Billing wizard return code: ",
                      "",
                    ])),
                  t,
                );
              },
            });
          d();
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebOIDCFlow.react").launchOIDCFlow(),
            o("WAWebModalManager").ModalManager.open(
              R.jsxs(o("WAWebModal.react").Modal, {
                type: o("WAWebModal.react").ModalTheme.AutoWrap,
                children: [
                  R.jsx(o("WAWebOIDCFlow.react").OIDCEventListener, {}),
                  R.jsx("div", {}),
                ],
              }),
            ));
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return o("WAWebBizGetProfileShimlinksQuery")
        .getProfileShimlinks(e)
        .then(function (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "debug:bizFetchBusinessProfileShimlinks",
              ])),
          );
        });
    }
    W.doc = "Fetch business profile shimlinks";
    var q = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(o("WAWebOrderRequestDrawer.react").OrderRequestEducationModal, {
          onExit: r("WAWebNoop"),
        }),
      );
    };
    ((q.doc = "Opens the order request education modal"),
      (q.paramsToExecute = []));
    function U() {
      o("WAWebBizOrderExpansionModal.react").openOrderExpansionModal(
        r("WAWebNoop"),
      );
    }
    function V() {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), {
          onBack: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebSchemaAgent")
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
        })),
        G.apply(this, arguments)
      );
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield H([
            { id: "1", name: "Agent1", deviceId: 1, isDeleted: !0 },
            { id: "11", name: "Vasily", deviceId: 2, isDeleted: !1 },
            { id: "111", name: "Max", deviceId: 3, isDeleted: !1 },
            { id: "1111", name: "Jesse", deviceId: 10, isDeleted: !1 },
            { id: "11111", name: "Fabio", deviceId: 99, isDeleted: !1 },
          ]);
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = [
              {
                id: "WA_PREMIUM_1",
                isAutoRenewing: !0,
                isDeactivated: !1,
                expirationDate: void 0,
                creationTime: void 0,
                newMessageCappingEnabled: !1,
                tier: 1,
                status: "ACTIVE",
                source: (e = o("WAWebSubscriptionSource")).SubscriptionSource
                  .BLUE,
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
                source: e.SubscriptionSource.META_NOVA,
                isPlatformChanged: !1,
                startTime: 2e3,
              },
              {
                id: "WA_PREMIUM_3",
                isAutoRenewing: !1,
                isDeactivated: !1,
                expirationDate: 100,
                creationTime: 50,
                newMessageCappingEnabled: !0,
                tier: 1,
                status: "ACTIVE",
                source: e.SubscriptionSource.ASTERIA,
                isPlatformChanged: !0,
                startTime: 50,
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
                source: e.SubscriptionSource.BLUE,
                isPlatformChanged: !1,
                startTime: 100,
              },
            ];
          yield o("WAWebSchemaSubscription")
            .getSubscriptionTable()
            .bulkCreateOrReplace(t);
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebPremiumMessageSchema")
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
        })),
        Z.apply(this, arguments)
      );
    }
    var ee = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(r("WAWebDOIntroPopup.react"), {}),
      );
    };
    ((ee.doc = "Opens the DO Intro Popup"), (ee.paramsToExecute = []));
    var te = function () {
      o("WAWebModalManager").ModalManager.open(
        R.jsx(o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup, {}),
      );
    };
    ((te.doc = "Opens the SMB Lists Intro NUX Popup"),
      (te.paramsToExecute = []));
    var ne = function () {
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
      );
    };
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {})),
        oe.apply(this, arguments)
      );
    }
    re.doc = "send delete mutation";
    var ae = function (t) {
        o("WAWebModalManager").ModalManager.open(
          R.jsx(r("WAWebSmbPerCustomerDataSharingOptOutModal"), {
            accountLid: t,
          }),
        );
      },
      ie = function (t) {
        o("WAWebModalManager").ModalManager.open(
          R.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
            accountLids: [t],
          }),
        );
      };
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAJids").unsafeCoerceToChatJid(e);
          yield o("WAWebCustomerDataAction").customerDataAddAction(n, t);
        })),
        se.apply(this, arguments)
      );
    }
    le.doc = "Add or update customer data for a contact";
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAJids").unsafeCoerceToChatJid(e);
          return o("WAWebCustomerDataAction").retrieveCustomerDataForChatJid(t);
        })),
        ce.apply(this, arguments)
      );
    }
    ue.doc = "Get customer data for a contact";
    function de() {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[CustomerData] No LID-based chats found to seed test data",
                ])),
            );
            return;
          }
          (yield (v || (v = n("Promise"))).all(
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
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
        me.apply(this, arguments)
      );
    }
    ((de.doc =
      "Seed 10 customer management test records with distributed lead stages"),
      (de.paramsToExecute = []));
    var pe = babelHelpers.extends(
      {
        createOrReplaceLabel: k,
        createOrReplaceQuickReply: T,
        getBusinessProfileFromDBById: P,
        toggleSMB: x,
        delayBusinessProfileQuery: w,
        debugSmbConfigs: M,
        showBillingWizard: A,
        launchOIDCFlow: O,
      },
      r("WAWebDebugPerCustomerDataSharing"),
      {
        bizFetchBusinessProfileShimlinks: W,
        openOrderRequestEducationModal: q,
        openBizOrderExpansionModal: U,
        openBizOrderRequestManagementModal: V,
        createTestAgents: z,
        assignChatsToAgents: K,
        createSubscriptions: X,
        createPremiumMessage: J,
        openDOIntroPopup: ee,
        openSMBListsIntroPopup: te,
        openSmbDataSharingDialog: ne,
        syncQuickReplyDelete: re,
        showPerCustomerDataSharingOptOutModal: ae,
        showPerCustomerDataSharingOptInModal: ie,
        addCustomerData: le,
        getCustomerData: ue,
        gen10CustomerManagementTestDataFromChats: de,
      },
    );
    l.default = pe;
  },
  98,
);
