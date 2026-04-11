__d(
  "WAWebSharePhoneNumberModal.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebLogRequestPhoneNumber",
    "WAWebModalManager",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebPhoneUtils",
    "WAWebSendSharePhoneNumberChatAction",
    "WAWebStateUtils",
    "WAWebUnblockLidUserModal.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPnhActionType",
    "WAWebWamEnumPnhChatTypeType",
    "WAWebWamEnumPnhMessageChatParty",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = function (t) {
        var e = o("WAWebChatCollection").ChatCollection.getActive();
        (e &&
          (t != null &&
            o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
              o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
              o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                .CONSUMER,
              o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SHARE_NUMBER,
              t,
            ),
          o("WAWebSendSharePhoneNumberChatAction").sendSharePhoneNumber(
            o("WAWebStateUtils").unproxy(e),
          )),
          o("WAWebModalManager").ModalManager.close());
      },
      m = function (t) {
        var e = o("WAWebChatCollection").ChatCollection.getActive();
        e &&
          (t != null &&
            o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
              o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
              o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                .CONSUMER,
              o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.DISMISS,
              t,
            ),
          o("WAWebModalManager").ModalManager.close());
      },
      p = function () {
        var e = o("WAWebFaqUrl").getPhoneNumberHidingFaqUrl();
        o("WAWebExternalLink.react").openExternalLink(e);
      },
      _ = u.jsx(r("WAWebClickableLink.react"), {
        onClick: p,
        children: s._(/*BTDS*/ "Learn more"),
      });
    function f(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.entryPoint,
        a,
        i;
      (t[0] !== n
        ? ((a = function () {
            n &&
              o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
                o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                  .CONSUMER,
                o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE
                  .SHARE_PN_SHEET_APPEAR,
                n,
              );
          }),
          (i = [n]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        c(a, i));
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebChatCollection").ChatCollection.getActive()),
          (t[3] = l))
        : (l = t[3]);
      var p = l;
      if ((p == null ? void 0 : p.contact.isContactBlocked) === !0) {
        var f;
        return (
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = u.jsx(r("WAWebUnblockLidUserModal.react"), {
                contact: p.contact,
              })),
              (t[4] = f))
            : (f = t[4]),
          f
        );
      }
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Your phone number is not shared in this chat")),
          (t[5] = g))
        : (g = t[5]);
      var h = g,
        y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(
            /*BTDS*/ "Businesses that have your phone number saved in their contacts will be able to see it on WhatsApp. {learnMoreLink}",
            [s._param("learnMoreLink", _)],
          )),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Share number")), (t[7] = b))
        : (b = t[7]);
      var v = b,
        S;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Not now")), (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      t[9] !== n
        ? ((L = function () {
            d(n);
          }),
          (t[9] = n),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== n
        ? ((E = function () {
            m(n);
          }),
          (t[11] = n),
          (t[12] = E))
        : (E = t[12]);
      var k;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o("WAWebUserPrefsMeUser").getMaybeMeDisplayName()), (t[13] = k))
        : (k = t[13]);
      var I;
      return (
        t[14] !== L || t[15] !== E
          ? ((I = u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
              onOK: L,
              okText: v,
              onCancel: E,
              title: h,
              subTitle: C,
              cancelText: R,
              displayName: k,
              okButtonType: "secondary",
              testid: void 0,
            })),
            (t[14] = L),
            (t[15] = E),
            (t[16] = I))
          : (I = t[16]),
        I
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.entryPoint,
        a = o("WAWebChatCollection").ChatCollection.getActive();
      a &&
        a.contact.isContactBlocked &&
        o("WAWebModalManager").ModalManager.open(
          u.jsx(r("WAWebUnblockLidUserModal.react"), { contact: a.contact }),
        );
      var i, l;
      (t[0] !== n
        ? ((i = function () {
            n &&
              o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
                o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                  .CONSUMER,
                o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE
                  .SHARE_PN_SHEET_APPEAR,
                n,
              );
          }),
          (l = [n]),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        c(i, l));
      var p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Share phone number?")), (t[3] = p))
        : (p = t[3]);
      var f = p,
        g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(
            /*BTDS*/ "This business will be able to see your number and add you to their contacts. {learnMoreLink}",
            [s._param("learnMoreLink", _)],
          )),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Share number")), (t[5] = y))
        : (y = t[5]);
      var C = y,
        b;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Not now")), (t[6] = b))
        : (b = t[6]);
      var v = b,
        S;
      t[7] !== n
        ? ((S = function () {
            d(n);
          }),
          (t[7] = n),
          (t[8] = S))
        : (S = t[8]);
      var R;
      t[9] !== n
        ? ((R = function () {
            m(n);
          }),
          (t[9] = n),
          (t[10] = R))
        : (R = t[10]);
      var L;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = o("WAWebUserPrefsMeUser").getMaybeMeDisplayName()), (t[11] = L))
        : (L = t[11]);
      var E;
      return (
        t[12] !== S || t[13] !== R
          ? ((E = u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
              onOK: S,
              okText: C,
              onCancel: R,
              title: f,
              subTitle: h,
              cancelText: v,
              displayName: L,
              okButtonType: "secondary",
              testid: void 0,
            })),
            (t[12] = S),
            (t[13] = R),
            (t[14] = E))
          : (E = t[14]),
        E
      );
    }
    function h(e) {
      var t = e.entryPoint,
        n = e.mePnUser,
        a = s._(/*BTDS*/ "Your phone number is shared in this chat"),
        i = s._(/*BTDS*/ "This business can see your phone number."),
        l = r("WAWebFbtCommon")("OK"),
        c = s._(/*BTDS*/ "Learn more");
      return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
        onOK: m,
        okText: l,
        onCancel: function () {
          (p(), m());
        },
        title: a,
        subTitle: i,
        cancelText: c,
        displayName: o("WAWebPhoneUtils").formatPhone(n.user),
        testid: void 0,
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.SharePhoneNumberModal = f),
      (l.SharePhoneNumberRestrictedActionModal = g),
      (l.PostSharePhoneNumberModal = h));
  },
  226,
);
