__d(
  "WAWebOpenOrgNetworkHomeContactInfoAction",
  [
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebFindChatAction",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebResolvePersonToContact",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = null,
      c = 0;
    async function d(e) {
      c += 1;
      var t = c;
      if (o("WAWebResolvePersonToContact").resolvePersonToContact(e) == null)
        return !1;
      var n = await o("WAWebFindChatAction").findOrCreateLatestChat(
          o("WAWebWidFactory").createUserLidOrThrow(e.lid, "lid"),
          "orgNetworkHome",
        ),
        r = n.chat;
      if (t !== c) return !1;
      var a = s.jsx(
        o("WAWebInfoFlowLoadable").InfoFlowLoadable,
        {
          chat: r,
          initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
          onEnd: o("WAWebDrawerManager").closeDrawerRight,
        },
        "org-network-home-" + r.id.toString(),
      );
      return (
        (u = a),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(a, {
          focusOnUnMount: !0,
          transition: "slide-left",
        }),
        !0
      );
    }
    function m() {
      c += 1;
      var e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
        "right",
      );
      e != null && p(e.drawer) && e.closeDrawer(e.drawerId);
    }
    function p(e) {
      return u != null && e === u;
    }
    ((l.openOrgNetworkHomeContactInfo = d),
      (l.closeOrgNetworkHomeContactInfo = m),
      (l.isOrgNetworkHomeContactInfo = p));
  },
  98,
);
