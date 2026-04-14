__d(
  "WAWebVoipUiPopoutWindow.react",
  [
    "ReactDOM",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebVoipEventConstants",
    "WAWebVoipPopoutModalManagerWrapper.react",
    "WAWebVoipTooSmallOverlay.react",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipWindowConstants",
    "fbs",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebVoipWindowSetup",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m() {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", {
        callEnded: !1,
      });
    }
    function p(e) {
      if (e != null) {
        var t,
          n = (t = e.id) == null ? void 0 : t.remote;
        if (n != null) {
          var a = o("WAWebChatCollection").ChatCollection.get(n);
          if (a != null && a.id.isGroup()) {
            var i = a.name || a.formattedTitle;
            if (i != null && i !== "")
              return String(
                r("fbs")._(/*BTDS*/ "WhatsApp call \u2014 {group_name}", [
                  r("fbs")._param("group_name", i),
                ]),
              );
          }
        }
      }
      return String(r("fbs")._(/*BTDS*/ "WhatsApp call"));
    }
    function _() {
      var e = r("WAWebCallCollection").activeCall;
      if (e != null && e.isCallLink && e.callLinkToken != null) {
        var t = e.isVideo ? "video" : "voice";
        return window.location.origin + "/call/" + t + "/" + e.callLinkToken;
      }
      return window.location.origin;
    }
    function f(e) {
      var t = e.callLogMsg,
        n = e.onWindowReady,
        a = e.popoutWindow,
        i = d(!1),
        l = i[0],
        u = i[1],
        f = r("useWAWebEventTargetValue")(
          [
            r("WAWebCallCollection"),
            r("WAWebCallCollection").activeCall,
            o("WAWebVoipWindowConstants").sidebarVisibilityEmitter,
          ],
          o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          ) + " change",
          o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth,
        );
      c(
        function () {
          if (a) {
            var e = function () {
              u(
                a.outerWidth < f ||
                  a.outerHeight <
                    o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT,
              );
            };
            return (
              a.addEventListener("resize", e),
              e(),
              function () {
                a.removeEventListener("resize", e);
              }
            );
          }
        },
        [a, f],
      );
      var g = o("useWAWebVoipWindowSetup").useVoipWindowSetup(
        a
          ? {
              targetWindow: a,
              popoverPortalId: o("WAWebVoipUiPopoutWindowPortalContainer.react")
                .VOIP_POPOUT_POPOVER_PORTAL_ID,
              logContext: "popout window",
              onBeforeUnload: m,
              onPageHide: m,
              setDocumentTitle: function (n) {
                n.title = p(t);
              },
              preventPageRefresh: !0,
              replaceUrl: _(),
            }
          : null,
        n,
      );
      return (
        g &&
        o("ReactDOM").createPortal(
          s.jsxs(s.Fragment, {
            children: [
              s.jsx(
                o("WAWebVoipPopoutModalManagerWrapper.react")
                  .VoipPopoutModalManagerWrapper,
                {
                  type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType,
                },
              ),
              s.jsx(
                o("WAWebVoipPopoutModalManagerWrapper.react")
                  .VoipPopoutModalManagerWrapper,
                {
                  type: o("WAWebVoipPopoutModalManagerWrapper.react")
                    .SupportType,
                },
              ),
              s.jsx(
                o("WAWebVoipPopoutModalManagerWrapper.react")
                  .VoipPopoutModalManagerWrapper,
                {
                  type: o("WAWebVoipPopoutModalManagerWrapper.react").MediaType,
                },
              ),
              s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                callLogMsg: t,
              }),
              s.jsx(
                o("WAWebVoipTooSmallOverlay.react").WAWebVoipTooSmallOverlay,
                { isVisible: l },
              ),
            ],
          }),
          g,
        )
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.WAWebVoipUiPopoutWindow = f));
  },
  226,
);
