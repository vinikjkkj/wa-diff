__d(
  "WAWebBusinessActions.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebAddUserIcon.react",
    "WAWebBizGatingUtils",
    "WAWebBusinessLogEvents",
    "WAWebBusinessProfileTypes",
    "WAWebBusinessProfileUtils",
    "WAWebChatCollection",
    "WAWebChatIcon.react",
    "WAWebChatInfoActionButton.react",
    "WAWebChatThreadLogging",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactGetters",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebDialpadSmallIcon.react",
    "WAWebDrawerContext",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebForwardRefreshedIcon.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebProductCatalogContext",
    "WAWebRequestPhoneNumberModal.react",
    "WAWebSendContactsModalLoadable",
    "WAWebShopFilledIcon.react",
    "WAWebStateUtils",
    "WAWebStorefrontFilledIcon.react",
    "WAWebWamEnumPnhEntryPointType",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useContext,
      d = {
        actionsRow: {
          marginTop: "x1sy10c2",
          marginInlineEnd: "x1trhqq4",
          marginBottom: "xyorhqc",
          marginInlineStart: "x1o1p3th",
          "@media (min-width: 1300px)_marginInlineStart": "xk4xyrm",
          "@media (min-width: 1300px)_marginInlineEnd": "x1oyx1bo",
          "@media (min-width: 1300px)_marginLeft": null,
          "@media (min-width: 1300px)_marginRight": null,
          $$css: !0,
        },
        marginHoriz12: {
          marginInlineStart: "x1uvdrpn",
          marginInlineEnd: "x14mko6t",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        marginStart16: { marginInlineStart: "xlese2p", $$css: !0 },
        marginEnd16: { marginInlineEnd: "xviac27", $$css: !0 },
      };
    function m(e) {
      var t,
        a,
        i = e.contact,
        l = e.displayRequestPnButton,
        m = e.onOpenChatTabInCustomerManager,
        _ = e.onProductCatalog,
        f = e.onSaveContact,
        g = c(o("WAWebDrawerContext").DrawerContext),
        h = o("WAWebProductCatalogContext").getProductCatalogSessionId(g);
      function y() {
        return C.apply(this, arguments);
      }
      function C() {
        return (
          (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (m != null) {
              m();
              return;
            }
            var e = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                i.id,
                "businessActions",
              ),
              t = e.chat,
              n = yield o("WAWebCmd").Cmd.openChatFromUnread({ chat: t });
            n &&
              (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
              o(
                "WAWebComposeBoxActions",
              ).ComposeBoxActions.addMsgSendingLogAttributes(t, {
                handleMultiple: function () {
                  o(
                    "WAWebChatThreadLogging",
                  ).handleActivitiesForChatThreadLogging([
                    {
                      activityType: "profileReplies",
                      ts: o("WATimeUtils").unixTime(),
                      chatId: t.id,
                    },
                  ]);
                },
              }));
          })),
          C.apply(this, arguments)
        );
      }
      var b,
        v = o("WAWebChatCollection").ChatCollection.getActive();
      if (m != null || !(v != null && v.id.equals(i.id))) {
        var S, R;
        (o("WAWebBusinessLogEvents").logMessageClick(
          h,
          (S = i.businessProfile) == null ? void 0 : S.isProfileLinked,
          !!((R = i.businessProfile) != null && R.coverPhoto),
        ),
          (b = u.jsx(r("WAWebChatInfoActionButton.react"), {
            xstyle: d.marginHoriz12,
            Icon: o("WAWebChatIcon.react").ChatIcon,
            label: r("WAWebFbtCommon")("Message"),
            onClick: function () {
              return void y();
            },
            testid: void 0,
          })));
      }
      var L;
      (((t = i.businessProfile) == null || (t = t.profileOptions) == null
        ? void 0
        : t.commerceExperience) ===
        o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG ||
        (((a = i.businessProfile) == null || (a = a.profileOptions) == null
          ? void 0
          : a.commerceExperience) ===
          o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG &&
          o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled())) &&
        (L = u.jsx(r("WAWebChatInfoActionButton.react"), {
          xstyle: d.marginHoriz12,
          Icon: o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon,
          label: s._(/*BTDS*/ "Catalog"),
          onClick: function () {
            var e, t;
            (o("WAWebBusinessLogEvents").logCatalogClick(
              h,
              (e = i.businessProfile) == null ? void 0 : e.isProfileLinked,
              !!((t = i.businessProfile) != null && t.coverPhoto),
            ),
              _(
                o("WAWebProductCatalogContext").getProductCatalogContext(g),
                "ContactInfo",
              ));
          },
          testid: void 0,
        }));
      function E() {
        var e, t;
        (o("WAWebBusinessLogEvents").logShopsClick(
          h,
          (e = i.businessProfile) == null ? void 0 : e.isProfileLinked,
          !!((t = i.businessProfile) != null && t.coverPhoto),
        ),
          o("WAWebBusinessProfileUtils").goToShop(i.businessProfile));
      }
      var k;
      if (o("WAWebBusinessProfileUtils").hasShop(i.businessProfile)) {
        var I =
          o("WAWebBizGatingUtils").bannedShopsEnabled() &&
          o("WAWebBusinessProfileUtils").isShopBanned(i.businessProfile);
        I ||
          (k = u.jsx(r("WAWebChatInfoActionButton.react"), {
            xstyle: d.marginHoriz12,
            Icon: o("WAWebShopFilledIcon.react").ShopFilledIcon,
            label: s._(/*BTDS*/ "Shop"),
            onClick: E,
            testid: void 0,
          }));
      }
      function T() {
        var e, t;
        (o("WAWebBusinessLogEvents").logForwardClick(
          h,
          (e = i.businessProfile) == null ? void 0 : e.isProfileLinked,
          !!((t = i.businessProfile) != null && t.coverPhoto),
        ),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebSendContactsModalLoadable").SendContactsModalLoadable,
              {
                contacts: [o("WAWebStateUtils").unproxy(i)],
                onContactsSent: function (t) {
                  o("WAWebCmd")
                    .Cmd.openChatFromUnread({ chat: t })
                    .then(r("WAWebNoop"));
                },
              },
            ),
          ));
      }
      var D =
          !o("WAWebContactGetters").getIsIAS(i) &&
          !o("WAWebContactGetters").getId(i).isBot() &&
          !o("WAWebContactGetters").getIsCAPISupportAccount(i) &&
          u.jsx(r("WAWebChatInfoActionButton.react"), {
            xstyle: d.marginHoriz12,
            Icon: o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
            label: s._(/*BTDS*/ "Share").toString(),
            onClick: T,
            testid: void 0,
          }),
        x = s._(/*BTDS*/ "Request"),
        $ = s._(/*BTDS*/ "Requested"),
        P = o("WAWebContactGetters").getCanRequestPhoneNumber(i) ? x : $,
        N =
          l &&
          u.jsx(r("WAWebChatInfoActionButton.react"), {
            Icon: o("WAWebDialpadSmallIcon.react").DialpadSmallIcon,
            xstyle: d.marginHoriz12,
            iconWidth: 19,
            label: P,
            disabled: !o("WAWebContactGetters").getCanRequestPhoneNumber(i),
            onClick: p,
            testid: void 0,
          }),
        M = null;
      return (
        o("WAWebContactUtils").canSaveAsMyContact(i.id) &&
          !o("WAWebFrontendContactGetters").getIsMyContact(i) &&
          o("WAWebContactManagementGating").contactManagementEnabled() &&
          (M = u.jsx(r("WAWebChatInfoActionButton.react"), {
            Icon: o("WAWebAddUserIcon.react").AddUserIcon,
            iconWidth: 26,
            label: r("WAWebFbtCommon")("Add"),
            testid: void 0,
            xstyle: [d.marginStart16, d.marginEnd16],
            disabled: !1,
            onClick: f,
          })),
        u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: d.actionsRow,
          justify: "center",
          children: [N, b, L, k, M, D],
        })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebRequestPhoneNumberModal.react"), {
          entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE
            .CHAT_INFO_REQUEST,
        }),
      );
    }
    l.default = m;
  },
  226,
);
