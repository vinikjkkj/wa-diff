__d(
  "openWAWebBizBroadcastChatBannerAudienceImport",
  [
    "WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable",
    "WAWebBizBroadcastCreationState",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastsManageAudiencePanelLoadable",
    "WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebPrepareBizBroadcastProAudienceImportFlowLoadable",
    "WAWebWamEnumEntryPoint",
    "openWAWebBizBroadcastVerifyOnPhoneModal",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 1;
    function c() {
      if (
        (o(
          "WAWebBusinessBroadcastUserJourneyLogger",
        ).BusinessBroadcastUserJourneyLogger.importAudienceClicked(
          o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
        ),
        o("WAWebBizBroadcastCreationState").getBizBroadcastCreationState() ===
          o("WAWebBizBroadcastCreationState").BizBroadcastCreationState
            .RECONNECT)
      ) {
        r("openWAWebBizBroadcastVerifyOnPhoneModal")(
          "TURN_ON",
          o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
          "banner",
        );
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebBizBroadcastsUploadModalLoadable.react"), {
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
          onCancel: function (t, n) {
            (o("WAWebModalManager").ModalManager.close(),
              n !== !0 &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
                  o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
                ));
          },
          onUploadSuccess: g,
        }),
      );
    }
    function d() {
      return (
        o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser() &&
        o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).getPrimarySupportsBusinessBroadcastPro()
      );
    }
    function m(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        s.jsx(
          o("WAWebPrepareBizBroadcastProAudienceImportFlowLoadable")
            .WAWebPrepareBizBroadcastProAudienceImportFlowLoadable,
          {
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
            importLoggingContext: t,
            request: e,
          },
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function p(e, t, n) {
      if (d()) {
        m({ errorList: t, kind: "single", validContactsData: e }, n);
        return;
      }
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        s.jsx(
          o("WAWebBizBroadcastsManageAudiencePanelLoadable")
            .WAWebBizBroadcastsManageAudiencePanelLoadable,
          {
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
            validContactsData: e,
            errorList: t,
          },
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function _(e, t) {
      if (d()) {
        m({ audiences: e, kind: "multiple" }, t);
        return;
      }
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        s.jsx(
          o("WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable")
            .WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable,
          {
            audiences: e,
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
            importLoggingContext: t,
            onClose: function () {
              return o(
                "WAWebDrawerManager",
              ).DrawerManager.closeDrawerFullscreen();
            },
            onCreateAudiencesSuccess: function () {
              return o(
                "WAWebDrawerManager",
              ).DrawerManager.closeDrawerFullscreen();
            },
          },
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function f(e, t) {
      var n = e.length === u ? e[0] : null;
      if (n != null) {
        var r;
        p(n.contacts, (r = n.errorList) != null ? r : [], t);
        return;
      }
      _(e, t);
    }
    function g(e, t, n, r, a) {
      if (n != null) {
        o(
          "WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
        ).openSmartCSVImportSetupFlowLoadable({
          contacts: e,
          context: n,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
          errorList: t,
          importLoggingContext: r,
          maxContactsPerAudience: a,
          onReviewAudience: function (t, n) {
            return p(t, n, r);
          },
          onReviewAudiences: function (t) {
            return f(t, r);
          },
        });
        return;
      }
      p(e, t, r);
    }
    l.default = c;
  },
  98,
);
