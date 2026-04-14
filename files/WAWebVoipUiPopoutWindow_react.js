__d(
  "WAWebVoipUiPopoutWindow.react",
  [
    "fbt",
    "ReactDOM",
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "WAWebVoipPopoutModalManagerWrapper.react",
    "WAWebVoipTooSmallOverlay.react",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipWindowConstants",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebVoipWindowSetup",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p() {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", {
        callEnded: !1,
      });
    }
    function _(e) {
      e.title = String(s._(/*BTDS*/ "WhatsApp call"));
    }
    function f() {
      var e = r("WAWebCallCollection").activeCall;
      if (e != null && e.isCallLink && e.callLinkToken != null) {
        var t = e.isVideo ? "video" : "voice";
        return window.location.origin + "/call/" + t + "/" + e.callLinkToken;
      }
      return window.location.origin;
    }
    function g(e) {
      var t = e.callLogMsg,
        n = e.onWindowReady,
        a = e.popoutWindow,
        i = m(!1),
        l = i[0],
        s = i[1],
        c = r("useWAWebEventTargetValue")(
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
      d(
        function () {
          if (a) {
            var e = function () {
              s(
                a.outerWidth < c ||
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
        [a, c],
      );
      var g = o("useWAWebVoipWindowSetup").useVoipWindowSetup(
        a
          ? {
              targetWindow: a,
              popoverPortalId: o("WAWebVoipUiPopoutWindowPortalContainer.react")
                .VOIP_POPOUT_POPOVER_PORTAL_ID,
              logContext: "popout window",
              onBeforeUnload: p,
              onPageHide: p,
              setDocumentTitle: _,
              preventPageRefresh: !0,
              replaceUrl: f(),
            }
          : null,
        n,
      );
      return (
        g &&
        o("ReactDOM").createPortal(
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(
                o("WAWebVoipPopoutModalManagerWrapper.react")
                  .VoipPopoutModalManagerWrapper,
                {
                  type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType,
                },
              ),
              u.jsx(
                o("WAWebVoipPopoutModalManagerWrapper.react")
                  .VoipPopoutModalManagerWrapper,
                {
                  type: o("WAWebVoipPopoutModalManagerWrapper.react")
                    .SupportType,
                },
              ),
              u.jsx(
                o("WAWebVoipPopoutModalManagerWrapper.react")
                  .VoipPopoutModalManagerWrapper,
                {
                  type: o("WAWebVoipPopoutModalManagerWrapper.react").MediaType,
                },
              ),
              u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                callLogMsg: t,
              }),
              u.jsx(
                o("WAWebVoipTooSmallOverlay.react").WAWebVoipTooSmallOverlay,
                { isVisible: l },
              ),
            ],
          }),
          g,
        )
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.WAWebVoipUiPopoutWindow = g));
  },
  226,
);
