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
    "useWAWebLogEventOnce",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = function () {
        var e = o("WAWebContactCollection").ContactCollection.getMeContact();
        if (e != null) {
          o(
            "WAWebMetaVerifiedUserActionLogger",
          ).logMetaVerifiedEntryPointEvents(
            o("WAWebWamEnumMetaVerifiedUserActionAction")
              .META_VERIFIED_USER_ACTION_ACTION.CLICK_WEB_META_VERIFIED_BUTTON,
          );
          var t = o("WAWebContactGetters").getShowAsMetaVerified(e);
          t &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebMetaVerifiedActiveSubscriberModal.react"), {}),
            );
        }
      };
      return (
        o("useWAWebLogEventOnce").useLogEventOnce(function () {
          o(
            "WAWebMetaVerifiedUserActionLogger",
          ).logMetaVerifiedEntryPointEvents(
            o("WAWebWamEnumMetaVerifiedUserActionAction")
              .META_VERIFIED_USER_ACTION_ACTION.VIEW_WEB_META_VERIFIED_BUTTON,
          );
        }),
        u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
          testid: void 0,
          theme: "biz-tools",
          divider: !1,
          secondaryChildren: s._(/*BTDS*/ "Build trust and protect your brand"),
          icon: u.jsx(r("WDSIconWdsIcVerified.react"), {
            width: 24,
            height: 24,
          }),
          active: !1,
          onClick: e,
          children: s._(/*BTDS*/ "Meta Verified"),
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
