__d(
  "WAWebStatusPostingDropdown.react",
  [
    "fbt",
    "WAWebCreateTextStatusFlow.react",
    "WAWebModalManager",
    "WAWebStatusAttachMediaFlow.react",
    "WAWebStatusGatingUtils",
    "WDSIconIcAddPhotoAlternate.react",
    "WDSIconIcEdit.react",
    "WDSIconIcFilter.react",
    "WDSIconIcLock.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.isNewsletterStatus,
        n = t === void 0 ? !1 : t,
        a = e.newsletterWid,
        i = function () {
          o("WAWebModalManager").ModalManager.openMedia(
            u.jsx(r("WAWebStatusAttachMediaFlow.react"), {
              newsletterWid: a,
              isNewsletterStatus: n,
            }),
            { transition: "status-modal" },
          );
        },
        l = function () {
          o("WAWebModalManager").ModalManager.openMedia(
            u.jsx(r("WAWebCreateTextStatusFlow.react"), {
              isNewsletterStatus: n,
              newsletterWid: a,
            }),
            { transition: "status-modal" },
          );
        };
      return u.jsxs(r("WDSMenu.react"), {
        children: [
          u.jsx(r("WDSMenuItem.react"), {
            testid: void 0,
            Icon: o(
              "WAWebStatusGatingUtils",
            ).isUpdatesTabInNavigationBarEnabled()
              ? r("WDSIconIcAddPhotoAlternate.react")
              : r("WDSIconIcFilter.react"),
            title: s._(/*BTDS*/ "Photos & videos"),
            onPress: i,
          }),
          u.jsx(r("WDSMenuItem.react"), {
            testid: void 0,
            Icon: r("WDSIconIcEdit.react"),
            title: s._(/*BTDS*/ "Text"),
            onPress: l,
          }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.onOpenStatusPrivacySettingDrawer,
        n = function () {
          t == null || t();
        };
      return u.jsx(r("WDSMenu.react"), {
        children: u.jsx(r("WDSMenuItem.react"), {
          Icon: r("WDSIconIcLock.react"),
          title: s._(/*BTDS*/ "Status Privacy"),
          onPress: n,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.AddStatusMenu = c),
      (l.StatusPrivacyMenu = d));
  },
  226,
);
