__d(
  "WAWebExecApiCmdNewCall",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebCoreActionsODS",
    "WAWebDialerPadFlowLoadable",
    "WAWebDrawerManager",
    "WAWebExecApiCmdHelpers",
    "WAWebKeyboardTabUtils",
    "WAWebLidMigrationUtils",
    "WAWebNavBarTypes",
    "WAWebQueryExistsJob",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebVoipOutgoingCallConsent",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react"));
    function m(t) {
      var n = t == null ? void 0 : t.lid,
        a = t == null ? void 0 : t.phone,
        i = (t == null ? void 0 : t.video) === !0,
        l = t == null ? void 0 : t.fromDefaultProtocol;
      if (r("isStringNullOrEmpty")(n))
        if (r("isStringNullOrEmpty")(a))
          (o("WAWebCmd").Cmd.setActiveNavBarItem(
            o("WAWebNavBarTypes").NavBarItems.Calls,
          ),
            o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({}),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              d.jsx(
                o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable,
                { entryPoint: "calls_tab" },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
        else {
          var c = a.trim().replace(/\D/g, "");
          if (c.length === 0) {
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1);
            return;
          }
          var m = "+" + c,
            _;
          try {
            _ = o("WAWebWidFactory").createUserWidOrThrow(c + "@c.us");
          } catch (e) {
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1);
            return;
          }
          p({
            fromDefaultProtocol: l,
            isVideo: i,
            lookup: function () {
              return o("WAWebQueryExistsJob").queryPhoneExists(m);
            },
            peerWid: _,
          }).catch(function (e) {
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Default protocol call via phone failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("default-protocol-call-phone-failed"),
              o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1));
          });
        }
      else {
        var u;
        try {
          u = o("WAWebWidFactory").createUserLidOrThrow(n);
        } catch (e) {
          o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1);
          return;
        }
        p({
          fromDefaultProtocol: l,
          isVideo: i,
          lookup: function () {
            return o("WAWebQueryExistsJob").queryWidExists(u);
          },
          peerWid: u,
        }).catch(function (t) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Default protocol call via LID failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("default-protocol-call-lid-failed"),
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1));
        });
      }
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.fromDefaultProtocol,
            n = e.isVideo,
            r = e.lookup,
            a = e.peerWid;
          if (
            !o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(
              a,
              "before_ask",
            )
          ) {
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(t, !0);
            return;
          }
          if (
            !(yield o("WAWebVoipOutgoingCallConsent").confirmDeepLinkCall(a, n))
          ) {
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(t, !0);
            return;
          }
          if (
            !o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(
              a,
              "after_ask",
            )
          ) {
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(t, !0);
            return;
          }
          (o("WAWebCmd").Cmd.setActiveNavBarItem(
            o("WAWebNavBarTypes").NavBarItems.Calls,
          ),
            o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({}));
          var i = yield r();
          if (i == null) {
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(t, !1);
            return;
          }
          if (!f(a, i.wid)) {
            (o("WAWebCoreActionsODS").logDeepLinkCallPeerMismatch(),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "New call deep link: lookup resolved a different peer than the one confirmed",
                    ])),
                )
                .sendLogs("new-call-deep-link-peer-mismatch"),
              o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(t, !1));
            return;
          }
          if (
            !o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(
              i.wid,
              "after_ask",
            )
          ) {
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(t, !0);
            return;
          }
          (yield o("WAWebVoipStartCall").startWAWebVoipCall(
            i.wid,
            n,
            o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_PHONE_NUMBER_DEEPLINK,
            0,
            null,
            { entryTrust: "user_gesture" },
          ),
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(t, !0));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      if (e.equals(t)) return !0;
      var n = o("WAWebLidMigrationUtils").toLid(e);
      return n == null || n.equals(t);
    }
    l.handleNewCallDeeplink = m;
  },
  98,
);
