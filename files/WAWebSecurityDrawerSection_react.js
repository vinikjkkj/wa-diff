__d(
  "WAWebSecurityDrawerSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebDailyAggregatedStats",
    "WAWebLockIcon.react",
    "WAWebMiscGatingUtils",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebText.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLock.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function m(e) {
      var t = e.highlightSurface;
      c(function () {
        o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() &&
          t != null &&
          o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(
            t,
            o("WAWebDailyAggregatedStats").PrinaDailyActionType
              .NARRATIVE_APPEAR,
          );
      }, []);
      var n = e.onClick,
        r = e.text,
        a = _(e.header, !0);
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        {
          icon: a == null ? void 0 : a.icon,
          onClick: n,
          secondaryTitle: u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
            { title: r },
          ),
          title: a == null ? void 0 : a.title,
        },
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = s._(/*BTDS*/ "Encryption");
      return {
        title:
          e === !0
            ? u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
                title: t,
              })
            : u.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "span",
                children: t,
              }),
        icon:
          e === !0
            ? u.jsx(r("WDSIconIcLock.react"), {})
            : u.jsx(o("WAWebLockIcon.react").LockIcon, {
                iconXstyle: d.secondaryColor,
                height: 20,
              }),
      };
    }
    function _(e, t) {
      switch (e.type) {
        case "none":
          return null;
        case "encryption":
          return p(t);
        case "security":
          return {
            title: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              as: "span",
              children: s._(/*BTDS*/ "Security"),
            }),
            icon: u.jsx(r("WDSIconIcInfo.react"), {
              iconXstyle: d.secondaryColor,
              height: 20,
            }),
          };
      }
    }
    l.default = m;
  },
  226,
);
