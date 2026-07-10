__d(
  "WAWebExecApiCmdNewCall",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebDialerPadFlowLoadable",
    "WAWebDrawerManager",
    "WAWebExecApiCmdHelpers",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarTypes",
    "WAWebQueryExistsJob",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWidFactory",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(t) {
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
              c.jsx(
                o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable,
                { entryPoint: "calls_tab" },
              ),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
        else {
          var d = a.trim().replace(/\D/g, "");
          if (d.length === 0) {
            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1);
            return;
          }
          var m = "+" + d;
          (o("WAWebCmd").Cmd.setActiveNavBarItem(
            o("WAWebNavBarTypes").NavBarItems.Calls,
          ),
            o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({}),
            o("WAWebQueryExistsJob")
              .queryPhoneExists(m)
              .then(function (e) {
                if (e != null)
                  return o("WAWebVoipStartCall")
                    .startWAWebVoipCall(
                      e.wid,
                      i,
                      o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                        .CALL_PHONE_NUMBER_DEEPLINK,
                    )
                    .then(function () {
                      o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                        l,
                        !0,
                      );
                    });
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1);
              })
              .catch(function (e) {
                (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Default protocol call via phone failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("default-protocol-call-phone-failed"),
                  o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                    l,
                    !1,
                  ));
              }));
        }
      else {
        var u;
        try {
          u = o("WAWebWidFactory").createUserLidOrThrow(n);
        } catch (e) {
          o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1);
          return;
        }
        (o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Calls,
        ),
          o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({}),
          o("WAWebQueryExistsJob")
            .queryWidExists(u)
            .then(function (e) {
              if (e != null)
                return o("WAWebVoipStartCall")
                  .startWAWebVoipCall(
                    e.wid,
                    i,
                    o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                      .CALL_PHONE_NUMBER_DEEPLINK,
                  )
                  .then(function () {
                    o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                      l,
                      !0,
                    );
                  });
              o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(l, !1);
            })
            .catch(function (t) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Default protocol call via LID failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("default-protocol-call-lid-failed"),
                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(
                  l,
                  !1,
                ));
            }));
      }
    }
    l.handleNewCallDeeplink = d;
  },
  98,
);
