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
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.accountLid,
        a = e.chat,
        i = e.containerXstyle,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()),
          (t[0] = l))
        : (l = t[0]);
      var c = m(l),
        p = c[0],
        _ = c[1],
        f,
        g;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            var e = function () {
              _(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
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
          }),
          (g = []),
          (t[1] = f),
          (t[2] = g))
        : ((f = t[1]), (g = t[2])),
        d(f, g));
      var h;
      t[3] !== n
        ? ((h = o(
            "WAWebDataSharing3pdLidCollection",
          ).DataSharing3pdLidCollection.isDataSharingEnabled(n)),
          (t[3] = n),
          (t[4] = h))
        : (h = t[4]);
      var y = m(h),
        C = y[0],
        b = y[1],
        v;
      t[5] !== n
        ? ((v = function () {
            b(
              o(
                "WAWebDataSharing3pdLidCollection",
              ).DataSharing3pdLidCollection.isDataSharingEnabled(n),
            );
          }),
          (t[5] = n),
          (t[6] = v))
        : (v = t[6]);
      var S = v;
      (o("useWAWebListener").useListener(
        o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
        "add",
        S,
      ),
        o("useWAWebListener").useListener(
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
          "change",
          S,
        ),
        o("useWAWebListener").useListener(
          o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection,
          "remove",
          S,
        ));
      var R =
          p === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && C,
        L;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: s._(/*BTDS*/ "Data Sharing") },
          )),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k;
      t[8] !== R
        ? ((k = R
            ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(/*BTDS*/ "On for this contact"),
              })
            : u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(/*BTDS*/ "Off for this contact"),
              })),
          (t[8] = R),
          (t[9] = k))
        : (k = t[9]);
      var I = k,
        T;
      t[10] !== R
        ? ((T = u.jsx(r("WDSSwitch.react"), {
            tabIndex: -1,
            "aria-label": "Toggle the data sharing state for this customer",
            value: R,
          })),
          (t[10] = R),
          (t[11] = T))
        : (T = t[11]);
      var D = T,
        x;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(
            o("WAWebBusinessDataSharingIcon.react").BusinessDataSharingIcon,
            {},
          )),
          (t[12] = x))
        : (x = t[12]);
      var $ = x,
        P;
      t[13] !== n || t[14] !== a
        ? ((P = function () {
            return o(
              "WAWebPerCustomerDataSharingUtils",
            ).getModalForPerCustomerDataSharing(
              n,
              o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CONTACT_INFO_CARD,
              a,
            );
          }),
          (t[13] = n),
          (t[14] = a),
          (t[15] = P))
        : (P = t[15]);
      var N;
      return (
        t[16] !== i || t[17] !== I || t[18] !== D || t[19] !== P
          ? ((N = u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                icon: $,
                testid: void 0,
                side: D,
                onClick: P,
                title: E,
                secondaryTitle: I,
                containerXstyle: i,
              },
            )),
            (t[16] = i),
            (t[17] = I),
            (t[18] = D),
            (t[19] = P),
            (t[20] = N))
          : (N = t[20]),
        N
      );
    }
    l.default = p;
  },
  226,
);
