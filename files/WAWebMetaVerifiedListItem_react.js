__d(
  "WAWebMetaVerifiedListItem.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDrawerButton.react",
    "WAWebMetaVerifiedActiveSubscriberModal.react",
    "WAWebMetaVerifiedUserActionLogger",
    "WAWebModalManager",
    "WAWebWamEnumMetaVerifiedUserActionAction",
    "WDSIconWdsIcVerified.react",
    "react",
    "react-compiler-runtime",
    "useWAWebLogEventOnce",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t = m;
      o("useWAWebLogEventOnce").useLogEventOnce(d);
      var n, a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "Build trust and protect your brand")),
          (a = u.jsx(r("WDSIconWdsIcVerified.react"), {
            width: 24,
            height: 24,
          })),
          (e[0] = n),
          (e[1] = a))
        : ((n = e[0]), (a = e[1]));
      var i;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              theme: "biz-tools",
              divider: !1,
              secondaryChildren: n,
              icon: a,
              active: !1,
              onClick: t,
              children: s._(/*BTDS*/ "Meta Verified"),
            })),
            (e[2] = i))
          : (i = e[2]),
        i
      );
    }
    function d() {
      o("WAWebMetaVerifiedUserActionLogger").logMetaVerifiedEntryPointEvents(
        o("WAWebWamEnumMetaVerifiedUserActionAction")
          .META_VERIFIED_USER_ACTION_ACTION.VIEW_WEB_META_VERIFIED_BUTTON,
      );
    }
    function m() {
      var e = o("WAWebContactCollection").ContactCollection.getMeContact();
      if (e != null) {
        o("WAWebMetaVerifiedUserActionLogger").logMetaVerifiedEntryPointEvents(
          o("WAWebWamEnumMetaVerifiedUserActionAction")
            .META_VERIFIED_USER_ACTION_ACTION.CLICK_WEB_META_VERIFIED_BUTTON,
        );
        var t = o("WAWebContactGetters").getShowAsMetaVerified(e);
        t &&
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebMetaVerifiedActiveSubscriberModal.react"), {}),
          );
      }
    }
    l.default = c;
  },
  226,
);
