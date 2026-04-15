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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(13),
        n = e.callLogMsg,
        a = e.onWindowReady,
        i = e.popoutWindow,
        l = d(!1),
        u = l[0],
        f = l[1],
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
                f(
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
        c(C, b));
      var v;
      t[6] !== n || t[7] !== i
        ? ((v = i
            ? {
                targetWindow: i,
                popoverPortalId: o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).VOIP_POPOUT_POPOVER_PORTAL_ID,
                logContext: "popout window",
                onBeforeUnload: m,
                onPageHide: m,
                setDocumentTitle: function (t) {
                  t.title = p(n);
                },
                preventPageRefresh: !0,
                replaceUrl: _(),
              }
            : null),
          (t[6] = n),
          (t[7] = i),
          (t[8] = v))
        : (v = t[8]);
      var S = o("useWAWebVoipWindowSetup").useVoipWindowSetup(v, a),
        R;
      return (
        t[9] !== n || t[10] !== S || t[11] !== u
          ? ((R =
              S &&
              o("ReactDOM").createPortal(
                s.jsxs(s.Fragment, {
                  children: [
                    s.jsx(
                      o("WAWebVoipPopoutModalManagerWrapper.react")
                        .VoipPopoutModalManagerWrapper,
                      {
                        type: o("WAWebVoipPopoutModalManagerWrapper.react")
                          .ModalType,
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
                        type: o("WAWebVoipPopoutModalManagerWrapper.react")
                          .MediaType,
                      },
                    ),
                    s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                      callLogMsg: n,
                    }),
                    s.jsx(
                      o("WAWebVoipTooSmallOverlay.react")
                        .WAWebVoipTooSmallOverlay,
                      { isVisible: u },
                    ),
                  ],
                }),
                S,
              )),
            (t[9] = n),
            (t[10] = S),
            (t[11] = u),
            (t[12] = R))
          : (R = t[12]),
        R
      );
    }
    l.WAWebVoipUiPopoutWindow = f;
  },
  226,
);
