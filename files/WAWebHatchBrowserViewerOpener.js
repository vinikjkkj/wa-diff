__d(
  "WAWebHatchBrowserViewerOpener",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebHatchBrowserViewerFlowShellLoadable",
    "WAWebHatchFrontendGating",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = 0;
    function d(t, n, a, i) {
      var l = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
        "mid",
      );
      if (!(l == null || !m(n, a))) {
        var s = ++c,
          u = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
            "right",
          );
        if (u == null || !u.existsDrawer()) {
          g(t, i);
          return;
        }
        var d = {
          activeChat: o("WAWebChatCollection").ChatCollection.getActive(),
          chatId: n,
          mid: _(l),
          request: s,
          right: _(u),
          signal: a,
        };
        u.closeDrawer(d.right.drawerId, { isConflictingDrawerOpening: !0 })
          .then(function (e) {
            e && p(d) && g(t, i);
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch: closing the right drawer before the browser viewer failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("hatch-browser-viewer-right-drawer-close-failed");
          });
      }
    }
    function m(e, t) {
      return (
        !t.aborted && o("WAWebHatchFrontendGating").isHatchBrowserEnabled(e)
      );
    }
    function p(e) {
      return (
        e.request === c &&
        m(e.chatId, e.signal) &&
        o("WAWebChatCollection").ChatCollection.getActive() === e.activeChat &&
        f(
          o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("mid"),
          e.mid,
        ) &&
        f(
          o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("right"),
          e.right,
        )
      );
    }
    function _(e) {
      return { drawerId: e.drawerId, uieRef: e.uieRef };
    }
    function f(e, t) {
      return e != null && e.uieRef === t.uieRef && e.drawerId === t.drawerId;
    }
    function g(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        u.jsx(
          o("WAWebHatchBrowserViewerFlowShellLoadable")
            .WAWebHatchBrowserViewerFlowShellLoadable,
          { onStopped: t, taskID: e },
        ),
        { transition: "none" },
      );
    }
    l.openHatchBrowserViewer = d;
  },
  98,
);
