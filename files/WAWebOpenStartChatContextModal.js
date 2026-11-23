__d(
  "WAWebOpenStartChatContextModal",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebApiContactUsernameFields",
    "WAWebContactCollection",
    "WAWebCountriesUtils",
    "WAWebFMXGatingUtils",
    "WAWebFindChatAction",
    "WAWebGetPrioritizedCommonGroupsAction",
    "WAWebHeaderInfoPanelActions",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebStartChatContextLogging",
    "WDSDialogBridge",
    "getErrorSafe",
    "once",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = 5e3,
      m = 3e3;
    function p() {
      return r("JSResourceForInteraction")("WAWebStartChatContextModal.react")
        .__setRef("WAWebOpenStartChatContextModal")
        .load();
    }
    function _() {
      p().catch(r("WAWebNoop"));
    }
    async function f(e) {
      var t = e.entryPoint,
        n = e.joinDateMs,
        a = e.onBeforeOpen,
        i = e.signal,
        l = e.wid,
        s = o("WAWebContactCollection").ContactCollection.gadd(l),
        u = await Promise.all([
          o("WAPromiseTimeout").promiseTimeout(p(), d),
          h(s),
        ]),
        m = u[0],
        _ = u[1];
      if ((i == null ? void 0 : i.aborted) === !0) return "dismiss";
      var f = { entryPoint: t, isBusiness: s.isBusiness === !0 },
        C = function (t) {
          return o("WAWebStartChatContextLogging").logStartChatContextUiAction(
            t,
            f,
          );
        };
      return new Promise(function (e) {
        var t = !1,
          l = !1,
          u = r("once")(function (n, r) {
            ((l = !0),
              i == null || i.removeEventListener("abort", d),
              t && C(g(n)),
              r && o("WDSDialogBridge").closeWDSDialog(),
              o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
                null,
                "modal",
              ),
              e(n));
          }),
          d = function () {
            return u("dismiss", t);
          };
        (i == null || i.addEventListener("abort", d),
          a == null || a(),
          !l &&
            (o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
              !1,
              "modal",
            ),
            o("WDSDialogBridge").openWDSDialog(
              c.jsx(m, {
                commonGroupName: _.commonGroupName,
                commonGroupsCount: _.commonGroupsCount,
                contact: s,
                countryName: _.countryName,
                joinDateMs: n,
                onCancel: function () {
                  return u("cancel", !0);
                },
                onContinue: function () {
                  return u("continue", !0);
                },
                onDismiss: function () {
                  return u("dismiss", !0);
                },
                onGroupsInCommon: function () {
                  (C("GROUPS_IN_COMMON_TAPPED"), u("dismiss", !0), y(s));
                },
                onLearnMore: function () {
                  return C("LEARN_MORE_TAPPED");
                },
                onUnmount: function () {
                  return u("dismiss", !1);
                },
              }),
            ),
            (t = !0),
            C("BOTTOM_SHEET_OPENED")));
      });
    }
    function g(e) {
      return e === "continue"
        ? "CONTINUE_TO_CHAT_BTN"
        : e === "cancel"
          ? "CANCEL_CHAT_BTN"
          : e === "dismiss"
            ? "OTHER_DISMISS"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    async function h(e) {
      var t,
        n = await Promise.all([
          b(C(e)),
          e.isBusiness
            ? null
            : b(
                o(
                  "WAWebGetPrioritizedCommonGroupsAction",
                ).getPrioritizedCommonGroups(e),
              ),
        ]),
        r = n[0],
        a = n[1];
      return {
        commonGroupName:
          (a == null || (t = a.priority) == null ? void 0 : t.group) != null
            ? o("WAWebGetPrioritizedCommonGroupsAction").getCommonGroupTitle(
                a.priority.group,
              )
            : null,
        commonGroupsCount: e.isBusiness
          ? null
          : a == null
            ? void 0
            : a.commonGroups.length,
        countryName: r,
      };
    }
    function y(t) {
      o("WAWebFindChatAction")
        .findOrCreateLatestChat(t.id, "debugOpenChatFlow")
        .then(function (e) {
          var t = e.chat;
          return o("WAWebHeaderInfoPanelActions").openInfoPanel({
            chat: t,
            uim: null,
          });
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[start-chat-context] groups in common failed to open",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("start-chat-context-groups-in-common-open-failed");
        });
    }
    async function C(e) {
      var t = await o(
        "WAWebApiContactUsernameFields",
      ).getOrFetchContactUsernameCountryCode(e.id);
      if (t == null) return null;
      var n = await o("WAWebApiContactUsernameFields")
        .getOrFetchMeContactUsernameCountryCode()
        .catch(v);
      return n === t &&
        !o("WAWebFMXGatingUtils").isFmxPersistentCountryTrustSignalEnabled()
        ? null
        : o("WAWebCountriesUtils").getCountryNameFromCountryCode(t);
    }
    function b(e) {
      return o("WAPromiseTimeout").promiseTimeout(e, m).catch(v);
    }
    function v(e) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[start-chat-context] trust signal unavailable",
              ])),
          )
          .catching(r("getErrorSafe")(e)),
        null
      );
    }
    ((l.preloadStartChatContextModal = _), (l.openStartChatContextModal = f));
  },
  98,
);
