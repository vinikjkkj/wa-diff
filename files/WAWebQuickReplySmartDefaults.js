__d(
  "WAWebQuickReplySmartDefaults",
  [
    "fbt",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebBusinessProfileUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebQuickReplyBusinessProfileUtils",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyModel",
    "WAWebUserPrefsCustomPaymentMethods",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      (f(), u(), c(), d());
    }
    function u() {
      var e = o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT,
        t = p();
      o("WAWebQuickReplyCollection").QuickReplyCollection.get(e)
        ? t &&
          o("WAWebQuickReplyCollection").QuickReplyCollection.add(
            { id: e, message: t.message },
            { merge: !0 },
          )
        : t &&
          o("WAWebQuickReplyCollection").QuickReplyCollection.add(t, {
            merge: !0,
          });
    }
    function c() {
      var e = o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT,
        t = _();
      o("WAWebQuickReplyCollection").QuickReplyCollection.get(e)
        ? t &&
          o("WAWebQuickReplyCollection").QuickReplyCollection.add(
            { id: e, message: t.message },
            { merge: !0 },
          )
        : t &&
          o("WAWebQuickReplyCollection").QuickReplyCollection.add(t, {
            merge: !0,
          });
    }
    function d() {
      var e = o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT,
        t = m();
      o("WAWebQuickReplyCollection").QuickReplyCollection.get(e)
        ? t &&
          o("WAWebQuickReplyCollection").QuickReplyCollection.add(
            { id: e, message: t.message },
            { merge: !0 },
          )
        : t &&
          o("WAWebQuickReplyCollection").QuickReplyCollection.add(t, {
            merge: !0,
          });
    }
    function m() {
      var e,
        t = o(
          "WAWebQuickReplyBusinessProfileUtils",
        ).getOwnQuickReplyBusinessProfile();
      if (t != null && (e = t.businessHours) != null && e.config) {
        var n = o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT,
          a = o("WAWebBusinessProfileUtils").quickReplyHoursStr(
            t.businessHours,
          );
        return new (r("WAWebQuickReplyModel"))({
          id: n,
          shortcut: s._(/*BTDS*/ "Hours").toString(),
          message: a,
          count: -1,
          keywords: [],
        });
      }
    }
    function p() {
      var e = o("WAWebContactCollection").ContactCollection.getMeContact();
      if (e) {
        var t = o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT;
        return new (r("WAWebQuickReplyModel"))({
          id: t,
          shortcut: s._(/*BTDS*/ "Profile").toString(),
          message: o("WAWebFrontendContactGetters").getDisplayName(e),
          count: -1,
          keywords: [],
        });
      }
    }
    function _() {
      var e = o(
        "WAWebQuickReplyBusinessProfileUtils",
      ).getOwnQuickReplyBusinessProfile();
      if (
        (e == null ? void 0 : e.latitude) != null ||
        (e == null ? void 0 : e.longitude) != null ||
        (e == null ? void 0 : e.address) != null
      ) {
        var t = o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT,
          n =
            e.address != null && e.address !== ""
              ? e.address
              : s._(/*BTDS*/ "Map location"),
          a = "\uD83D\uDCCD";
        return new (r("WAWebQuickReplyModel"))({
          id: t,
          shortcut: s._(/*BTDS*/ "Address").toString(),
          message: s
            ._(/*BTDS*/ "{pinEmoji} {address}", [
              s._param("pinEmoji", a),
              s._param("address", n),
            ])
            .toString(),
          count: -1,
          keywords: [],
        });
      }
    }
    function f() {
      var e = o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT,
        t = g();
      o("WAWebQuickReplyCollection").QuickReplyCollection.get(e)
        ? t
          ? o("WAWebQuickReplyCollection").QuickReplyCollection.add(
              { id: e, message: t.message },
              { merge: !0 },
            )
          : o("WAWebQuickReplyCollection").QuickReplyCollection.remove(e)
        : t &&
          o("WAWebQuickReplyCollection").QuickReplyCollection.add(t, {
            merge: !0,
          });
    }
    function g() {
      if (o("WAWebBizFrontendGatingUtils").isPixInQuickReplyEnabled()) {
        var e = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
        if (e) {
          var t = o("WAWebQuickReplyEnum").QuickReplyTypes
            .PIX_KEY_SMART_DEFAULT;
          return new (r("WAWebQuickReplyModel"))({
            id: t,
            shortcut: s._(/*BTDS*/ "Pix").toString(),
            message: o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
              e.key,
              e.key_type,
            ),
            count: -1,
            keywords: [],
          });
        }
      }
    }
    ((l.addSmartDefaults = e), (l.getOrUpdatePixKeySmartDefault = f));
  },
  226,
);
