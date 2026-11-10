__d(
  "WAWebOpenStartChatContextModal",
  [
    "JSResourceForInteraction",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "once",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = 5e3,
      p = 3e3;
    function _() {
      return r("JSResourceForInteraction")("WAWebStartChatContextModal.react")
        .__setRef("WAWebOpenStartChatContextModal")
        .load();
    }
    function f() {
      _().catch(r("WAWebNoop"));
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint,
            a = e.joinDateMs,
            i = e.onBeforeOpen,
            l = e.signal,
            s = e.wid,
            c = o("WAWebContactCollection").ContactCollection.gadd(s),
            p = yield (u || (u = n("Promise"))).all([
              o("WAPromiseTimeout").promiseTimeout(_(), m),
              C(c),
            ]),
            f = p[0],
            g = p[1];
          if ((l == null ? void 0 : l.aborted) === !0) return "dismiss";
          var h = { entryPoint: t, isBusiness: c.isBusiness === !0 },
            b = function (t) {
              return o(
                "WAWebStartChatContextLogging",
              ).logStartChatContextUiAction(t, h);
            };
          return new u(function (e) {
            var t = !1,
              n = !1,
              s = r("once")(function (r, a) {
                ((n = !0),
                  l == null || l.removeEventListener("abort", u),
                  t && b(y(r)),
                  a && o("WDSDialogBridge").closeWDSDialog(),
                  o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
                    null,
                    "modal",
                  ),
                  e(r));
              }),
              u = function () {
                return s("dismiss", t);
              };
            (l == null || l.addEventListener("abort", u),
              i == null || i(),
              !n &&
                (o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
                  !1,
                  "modal",
                ),
                o("WDSDialogBridge").openWDSDialog(
                  d.jsx(f, {
                    commonGroupName: g.commonGroupName,
                    commonGroupsCount: g.commonGroupsCount,
                    contact: c,
                    countryName: g.countryName,
                    joinDateMs: a,
                    onCancel: function () {
                      return s("cancel", !0);
                    },
                    onContinue: function () {
                      return s("continue", !0);
                    },
                    onDismiss: function () {
                      return s("dismiss", !0);
                    },
                    onGroupsInCommon: function () {
                      (b("GROUPS_IN_COMMON_TAPPED"), s("dismiss", !0), v(c));
                    },
                    onLearnMore: function () {
                      return b("LEARN_MORE_TAPPED");
                    },
                    onUnmount: function () {
                      return s("dismiss", !1);
                    },
                  }),
                ),
                (t = !0),
                b("BOTTOM_SHEET_OPENED")));
          });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = yield (u || (u = n("Promise"))).all([
              L(S(e)),
              e.isBusiness
                ? null
                : L(
                    o(
                      "WAWebGetPrioritizedCommonGroupsAction",
                    ).getPrioritizedCommonGroups(e),
                  ),
            ]),
            a = r[0],
            i = r[1];
          return {
            commonGroupName:
              (i == null || (t = i.priority) == null ? void 0 : t.group) != null
                ? o(
                    "WAWebGetPrioritizedCommonGroupsAction",
                  ).getCommonGroupTitle(i.priority.group)
                : null,
            commonGroupsCount: e.isBusiness
              ? null
              : i == null
                ? void 0
                : i.commonGroups.length,
            countryName: a,
          };
        })),
        b.apply(this, arguments)
      );
    }
    function v(t) {
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
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebApiContactUsernameFields",
          ).getOrFetchContactUsernameCountryCode(e.id);
          if (t == null) return null;
          var n = yield o("WAWebApiContactUsernameFields")
            .getOrFetchMeContactUsernameCountryCode()
            .catch(E);
          return n === t &&
            !o("WAWebFMXGatingUtils").isFmxPersistentCountryTrustSignalEnabled()
            ? null
            : o("WAWebCountriesUtils").getCountryNameFromCountryCode(t);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return o("WAPromiseTimeout").promiseTimeout(e, p).catch(E);
    }
    function E(e) {
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
    ((l.preloadStartChatContextModal = f), (l.openStartChatContextModal = g));
  },
  98,
);
