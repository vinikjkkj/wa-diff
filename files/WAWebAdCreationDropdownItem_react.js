__d(
  "WAWebAdCreationDropdownItem.react",
  [
    "fbt",
    "WALogger",
    "WAWebAdCreationLogger",
    "WAWebChatlistUtils",
    "WAWebMegaphoneRefreshedIcon.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      var n = t.adCreationUrlInput,
        a = t.ctaText,
        i = t.lwiEntryPoint,
        l = n.activeAccountInfo;
      d(
        function () {
          o("WAWebAdCreationLogger").logAdCreationImpression(
            i,
            l !== "not-linked" && l.hasFacebookPage,
          );
        },
        [l, i],
      );
      var u = function (t) {
          (t == null || t.preventDefault(),
            o("WAWebChatlistUtils").handleAdCreation({
              adCreationUrlInput: n,
              lwiEntryPoint: i,
            }));
        },
        m;
      if (a != null) m = a;
      else
        switch (n.sourceAdCreation) {
          case "whatsapp_smb_web_ad_creation_home_menu_item":
            m = s._(/*BTDS*/ "Advertise");
            break;
          case "whatsapp_smb_web_catalog":
            m = s._(/*BTDS*/ "Boost");
            break;
          default:
            return (
              n.sourceAdCreation,
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[AdCreationDropdownItem] missing CTA for source ",
                    "",
                  ])),
                n.sourceAdCreation,
              ),
              null
            );
        }
      var p = "ad-creation-menu-item";
      return c.jsx(r("WDSMenuItem.react"), {
        testid: void 0,
        Icon: o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
        onPress: u,
        title: m,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
