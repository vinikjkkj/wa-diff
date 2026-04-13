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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(12),
        n = e.callLogMsg,
        a = e.onWindowReady,
        i = e.popoutWindow,
        l = m(!1),
        s = l[0],
        c = l[1],
        g,
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [
            r("WAWebCallCollection"),
            r("WAWebCallCollection").activeCall,
            o("WAWebVoipWindowConstants").sidebarVisibilityEmitter,
          ]),
          (h = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          )),
          (t[0] = g),
          (t[1] = h))
        : ((g = t[0]), (h = t[1]));
      var y = r("useWAWebEventTargetValue")(
          g,
          h + " change",
          o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth,
        ),
        C,
        b;
      (t[2] !== y || t[3] !== i
        ? ((C = function () {
            if (i) {
              var e = function () {
                c(
                  i.outerWidth < y ||
                    i.outerHeight <
                      o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT,
                );
              };
              return (
                i.addEventListener("resize", e),
                e(),
                function () {
                  i.removeEventListener("resize", e);
                }
              );
            }
          }),
          (b = [i, y]),
          (t[2] = y),
          (t[3] = i),
          (t[4] = C),
          (t[5] = b))
        : ((C = t[4]), (b = t[5])),
        d(C, b));
      var v;
      t[6] !== i
        ? ((v = i
            ? {
                targetWindow: i,
                popoverPortalId: o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).VOIP_POPOUT_POPOVER_PORTAL_ID,
                logContext: "popout window",
                onBeforeUnload: p,
                onPageHide: p,
                setDocumentTitle: _,
                preventPageRefresh: !0,
                replaceUrl: f(),
              }
            : null),
          (t[6] = i),
          (t[7] = v))
        : (v = t[7]);
      var S = o("useWAWebVoipWindowSetup").useVoipWindowSetup(v, a),
        R;
      return (
        t[8] !== n || t[9] !== S || t[10] !== s
          ? ((R =
              S &&
              o("ReactDOM").createPortal(
                u.jsxs(u.Fragment, {
                  children: [
                    u.jsx(
                      o("WAWebVoipPopoutModalManagerWrapper.react")
                        .VoipPopoutModalManagerWrapper,
                      {
                        type: o("WAWebVoipPopoutModalManagerWrapper.react")
                          .ModalType,
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
                        type: o("WAWebVoipPopoutModalManagerWrapper.react")
                          .MediaType,
                      },
                    ),
                    u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                      callLogMsg: n,
                    }),
                    u.jsx(
                      o("WAWebVoipTooSmallOverlay.react")
                        .WAWebVoipTooSmallOverlay,
                      { isVisible: s },
                    ),
                  ],
                }),
                S,
              )),
            (t[8] = n),
            (t[9] = S),
            (t[10] = s),
            (t[11] = R))
          : (R = t[11]),
        R
      );
    }
    l.WAWebVoipUiPopoutWindow = g;
  },
  226,
);
