__d(
  "WAWebLoadingMediaViewer.react",
  [
    "WAWebClassnames",
    "WAWebFbtCommon",
    "WAWebLazyLoadLoading.react",
    "WAWebMediaPanelHeader.styles",
    "WAWebMediaViewerModalStyle",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WAWebXViewerIcon.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.error,
        a = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "overlay",
          (e || (e = r("stylex")))(r("WAWebMediaViewerModalStyle").mediaViewer),
        ),
        i = u.jsx(o("WAWebXViewerIcon.react").XViewerIcon, {}),
        l = function () {
          return o("WAWebModalManager").ModalManager.closeMedia();
        };
      return u.jsx("div", {
        children: u.jsxs("div", {
          className: a,
          "data-animate-media-viewer": !0,
          children: [
            u.jsxs("div", {
              className: r("WAWebMediaPanelHeader.styles").mediaPanelHeader,
              children: [
                u.jsx("div", {
                  className: r("WAWebMediaPanelHeader.styles").info,
                }),
                u.jsx("div", {
                  className: r("WAWebMediaPanelHeader.styles").mediaPanelTools,
                  children: u.jsx(
                    o("WAWebMenuBar.react").MenuBar,
                    {
                      theme: "strong",
                      children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                        testid: void 0,
                        icon: i,
                        title: r("WAWebFbtCommon")("Close"),
                        onClick: l,
                      }),
                    },
                    "media-panel-header",
                  ),
                }),
              ],
            }),
            u.jsx("div", {
              className: r("WAWebMediaViewerModalStyle").mediaContent,
              dir: "ltr",
              onClick: l,
              children: u.jsx("div", {
                className: r("WAWebMediaViewerModalStyle").media,
                children: u.jsx(r("WAWebLazyLoadLoading.react"), { error: n }),
              }),
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
