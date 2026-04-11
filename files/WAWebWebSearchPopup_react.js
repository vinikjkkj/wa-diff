__d(
  "WAWebWebSearchPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebHfmTextSearchCompleteWamEvent",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebSTWGatingUtils",
    "WAWebSTWText",
    "WAWebSearchTheWebModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.entryPoint,
        n = e.message,
        a = e.stwFormat;
      if (
        o("WAWebSTWGatingUtils").isSearchTheWebEnabled() &&
        t != null &&
        a != null
      )
        return u.jsx(r("WAWebSearchTheWebModal.react"), {
          message: n,
          entryPoint: t,
          stwFormat: a,
        });
      var i = function () {
          var e,
            t = (e = n.body) != null ? e : "";
          (o("WAWebExternalLink.react").openExternalLink(
            o("WAWebSTWText").createTextSearchLink(t),
          ),
            new (o(
              "WAWebHfmTextSearchCompleteWamEvent",
            ).HfmTextSearchCompleteWamEvent)().commit(),
            o("WAWebModalManager").ModalManager.close());
        },
        l = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        c = s._(/*BTDS*/ "Cancel");
      return r("WAWebNetworkStatus").online
        ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            cancelText: c,
            onCancel: l,
            okText: s._(/*BTDS*/ "Search web"),
            onOK: i,
            tsNavigationData: { surface: "unknown", viewName: "web-search" },
            children: s._(
              /*BTDS*/ "Would you like to search this on the web? This will upload the message to Google.",
            ),
          })
        : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            okText: r("WAWebFbtCommon")("OK"),
            onOK: l,
            tsNavigationData: {
              surface: "unknown",
              viewName: "web-search-offline",
            },
            children: s._(
              /*BTDS*/ "Couldn't search the web. Check your computer's internet connection and try again.",
            ),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
