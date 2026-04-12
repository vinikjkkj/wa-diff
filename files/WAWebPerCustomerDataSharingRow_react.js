__d(
  "WAWebPerCustomerDataSharingRow.react",
  [
    "fbt",
    "WASmaxInBizSettingsEnums",
    "WAWebBusinessDataSharingIcon.react",
    "WAWebCTWADataSharingModel",
    "WAWebChatInfoDrawerRow.react",
    "WAWebDataSharing3pdLidCollection",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebText.react",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WDSSwitch.react",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t,
        n = e.accountLid,
        a = e.chat,
        i = e.containerXstyle,
        l = m(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()),
        c = l[0],
        p = l[1];
      d(function () {
        var e = function () {
          p(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
        };
        return (
          o(
            "WAWebCTWADataSharingModel",
          ).CTWADataSharingModel.subscribeForUpdates(e),
          function () {
            o(
              "WAWebCTWADataSharingModel",
            ).CTWADataSharingModel.unsubscribeFromUpdates(e);
          }
        );
      }, []);
      var _ = m(
          (t = o(
            "WAWebDataSharing3pdLidCollection",
          )).DataSharing3pdLidCollection.isDataSharingEnabled(n),
        ),
        f = _[0],
        g = _[1],
        h = function () {
          g(
            o(
              "WAWebDataSharing3pdLidCollection",
            ).DataSharing3pdLidCollection.isDataSharingEnabled(n),
          );
        };
      (o("useWAWebListener").useListener(
        t.DataSharing3pdLidCollection,
        "add",
        h,
      ),
        o("useWAWebListener").useListener(
          t.DataSharing3pdLidCollection,
          "change",
          h,
        ),
        o("useWAWebListener").useListener(
          t.DataSharing3pdLidCollection,
          "remove",
          h,
        ));
      var y =
          c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && f,
        C = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: s._(/*BTDS*/ "Data Sharing"),
        }),
        b = y
          ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: s._(/*BTDS*/ "On for this contact"),
            })
          : u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: s._(/*BTDS*/ "Off for this contact"),
            }),
        v = u.jsx(r("WDSSwitch.react"), {
          tabIndex: -1,
          "aria-label": "Toggle the data sharing state for this customer",
          value: y,
        }),
        S = u.jsx(
          o("WAWebBusinessDataSharingIcon.react").BusinessDataSharingIcon,
          {},
        );
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        {
          icon: S,
          testid: void 0,
          side: v,
          onClick: function () {
            return o(
              "WAWebPerCustomerDataSharingUtils",
            ).getModalForPerCustomerDataSharing(
              n,
              o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CONTACT_INFO_CARD,
              a,
            );
          },
          title: C,
          secondaryTitle: b,
          containerXstyle: i,
        },
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
