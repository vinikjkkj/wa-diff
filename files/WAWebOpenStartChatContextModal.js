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
    "WAWebFindCommonGroupsContactAction",
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint,
            a = e.joinDateMs,
            i = e.onBeforeOpen,
            l = e.signal,
            u = e.wid,
            m = o("WAWebContactCollection").ContactCollection.gadd(u),
            _ = yield (s || (s = n("Promise"))).all([
              o("WAPromiseTimeout").promiseTimeout(p(), d),
              y(m),
            ]),
            f = _[0],
            g = _[1];
          if ((l == null ? void 0 : l.aborted) === !0) return "dismiss";
          var C = { entryPoint: t, isBusiness: m.isBusiness === !0 },
            b = function (t) {
              return o(
                "WAWebStartChatContextLogging",
              ).logStartChatContextUiAction(t, C);
            };
          return new s(function (e) {
            var t = !1,
              n = !1,
              s = r("once")(function (r, a) {
                ((n = !0),
                  l == null || l.removeEventListener("abort", u),
                  t && b(h(r)),
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
                  c.jsx(f, {
                    commonGroupsCount: g.commonGroupsCount,
                    contact: m,
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (s || (s = n("Promise"))).all([
              S(b(e)),
              e.isBusiness
                ? null
                : S(
                    o("WAWebFindCommonGroupsContactAction").findCommonGroups(e),
                  ),
            ]),
            r = t[0],
            a = t[1];
          return {
            commonGroupsCount: e.isBusiness
              ? null
              : a == null
                ? void 0
                : a.length,
            countryName: r,
          };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebApiContactUsernameFields",
          ).getOrFetchContactUsernameCountryCode(e.id);
          if (t == null) return null;
          var n = yield o("WAWebApiContactUsernameFields")
            .getOrFetchMeContactUsernameCountryCode()
            .catch(R);
          return n === t &&
            !o("WAWebFMXGatingUtils").isFmxPersistentCountryTrustSignalEnabled()
            ? null
            : o("WAWebCountriesUtils").getCountryNameFromCountryCode(t);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return o("WAPromiseTimeout").promiseTimeout(e, m).catch(R);
    }
    function R(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[start-chat-context] trust signal unavailable",
              ])),
          )
          .catching(r("getErrorSafe")(t)),
        null
      );
    }
    ((l.preloadStartChatContextModal = _), (l.openStartChatContextModal = f));
  },
  98,
);
