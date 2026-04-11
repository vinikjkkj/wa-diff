__d(
  "WAWebQuickReplySmartDefaults",
  [
    "fbt",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyModel",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser",
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
        t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (t != null) {
        var n = o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.get(t);
        if (n != null && (e = n.businessHours) != null && e.config) {
          var a = o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT,
            i = o("WAWebBusinessProfileUtils").quickReplyHoursStr(
              n.businessHours,
            );
          return new (r("WAWebQuickReplyModel"))({
            id: a,
            shortcut: s._(/*BTDS*/ "Hours").toString(),
            message: i,
            count: -1,
            keywords: [],
          });
        }
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
      var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (e != null) {
        var t = o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.get(e);
        if (
          (t == null ? void 0 : t.latitude) != null ||
          (t == null ? void 0 : t.longitude) != null ||
          (t == null ? void 0 : t.address) != null
        ) {
          var n = o("WAWebQuickReplyEnum").QuickReplyTypes
              .ADDRESS_SMART_DEFAULT,
            a = t.address || s._(/*BTDS*/ "Map location"),
            i = "\uD83D\uDCCD";
          return new (r("WAWebQuickReplyModel"))({
            id: n,
            shortcut: s._(/*BTDS*/ "Address").toString(),
            message: s
              ._(/*BTDS*/ "{pinEmoji} {address}", [
                s._param("pinEmoji", i),
                s._param("address", a),
              ])
              .toString(),
            count: -1,
            keywords: [],
          });
        }
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
