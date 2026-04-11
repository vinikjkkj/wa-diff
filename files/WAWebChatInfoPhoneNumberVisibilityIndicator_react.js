__d(
  "WAWebChatInfoPhoneNumberVisibilityIndicator.react",
  [
    "fbt",
    "WAWebCagPhoneNumberPrivacyNux.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebModalManager",
    "WAWebPnhCagDailyUtils",
    "WAWebSharePhoneNumberModal.react",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPnhEntryPointType",
    "WDSIconIcDialpad.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.handleClick,
        a = e.phoneNumberIsShared,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            children: s._(/*BTDS*/ "Phone number privacy"),
          })),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(
            /*BTDS*/ "Your phone number is shared in this chat. Click to learn more.",
          )),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(
            /*BTDS*/ "This chat has added privacy for your phone number. Click to learn more.",
          )),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _ = a ? d : p,
        f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(r("WDSIconIcDialpad.react"), {})), (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== _
        ? ((g = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            children: _,
          })),
          (t[4] = _),
          (t[5] = g))
        : (g = t[5]);
      var h;
      if (t[6] !== n || t[7] !== g) {
        var y = {
          icon: f,
          title: l,
          testid: "phone_number_visibility_indicator",
          secondaryTitle: g,
          onClick: n,
        };
        ((h = u.jsx(
          o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
          babelHelpers.extends({}, y),
        )),
          (t[6] = n),
          (t[7] = g),
          (t[8] = h));
      } else h = t[8];
      return h;
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        r = n.contact.shareOwnPn === !0,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebUserPrefsMeUser").getMaybeMePnUser()), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] !== r
        ? ((l = function () {
            if (r && i) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebSharePhoneNumberModal.react")
                    .PostSharePhoneNumberModal,
                  {
                    entryPoint: o("WAWebWamEnumPnhEntryPointType")
                      .PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY,
                    mePnUser: i,
                  },
                ),
              );
              return;
            }
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebSharePhoneNumberModal.react").SharePhoneNumberModal,
                {
                  entryPoint: o("WAWebWamEnumPnhEntryPointType")
                    .PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY,
                },
              ),
            );
          }),
          (t[1] = r),
          (t[2] = l))
        : (l = t[2]);
      var s = l,
        d;
      return (
        t[3] !== s || t[4] !== r
          ? ((d = u.jsx(c, { phoneNumberIsShared: r, handleClick: s })),
            (t[3] = s),
            (t[4] = r),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function m(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(8),
        a = e.chat,
        i;
      if (r[0] !== ((t = a.groupMetadata) == null ? void 0 : t.participants)) {
        var l, s;
        ((i =
          (l = a.groupMetadata) == null ? void 0 : l.participants.iAmAdmin()),
          (r[0] = (s = a.groupMetadata) == null ? void 0 : s.participants),
          (r[1] = i));
      } else i = r[1];
      var d = !!i,
        m;
      if (
        r[2] !== ((n = a.groupMetadata) == null ? void 0 : n.parentGroup) ||
        r[3] !== d
      ) {
        var p;
        ((m = function () {
          var e,
            t = (e = a.groupMetadata) == null ? void 0 : e.parentGroup;
          (t &&
            o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(
              t,
              o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType
                .PNH_INDICATOR_CLICKS_INFO_SCREEN,
            ),
            o("WAWebModalManager").ModalManager.open(
              d
                ? u.jsx(
                    o("WAWebCagPhoneNumberPrivacyNux.react")
                      .CagPhoneNumberSharedNux,
                    {},
                  )
                : u.jsx(
                    o("WAWebCagPhoneNumberPrivacyNux.react")
                      .CagPhoneNumberHiddenNux,
                    {},
                  ),
            ));
        }),
          (r[2] = (p = a.groupMetadata) == null ? void 0 : p.parentGroup),
          (r[3] = d),
          (r[4] = m));
      } else m = r[4];
      var _ = m,
        f;
      return (
        r[5] !== _ || r[6] !== d
          ? ((f = u.jsx(c, { phoneNumberIsShared: d, handleClick: _ })),
            (r[5] = _),
            (r[6] = d),
            (r[7] = f))
          : (f = r[7]),
        f
      );
    }
    ((l.PhoneNumberVisibilityIndicator1On1 = d),
      (l.PhoneNumberVisibilityIndicatorCag = m));
  },
  226,
);
