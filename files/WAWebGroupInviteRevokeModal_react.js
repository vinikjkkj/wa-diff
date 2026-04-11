__d(
  "WAWebGroupInviteRevokeModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebGroupType",
    "WAWebModalManager",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        confirmationText: {
          display: "x1lliihq",
          fontSize: "x6prxxf",
          lineHeight: "x1fc57z9",
          color: "x14ug900",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(13),
        i = t.chat,
        l = t.onConfirm,
        u = p,
        m;
      a[0] !== l
        ? ((m = function () {
            (l(), o("WAWebModalManager").ModalManager.close());
          }),
          (a[0] = l),
          (a[1] = m))
        : (m = a[1]);
      var _ = m,
        f,
        g;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { surface: "unknown", viewName: "group-invite-revoke" }),
          (g = s._(/*BTDS*/ "Reset link")),
          (a[2] = f),
          (a[3] = g))
        : ((f = a[2]), (g = a[3]));
      var h;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Reset link")), (a[4] = h))
        : (h = a[4]);
      var y, C;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Cancel")),
          (C = (e || (e = r("stylex"))).props(
            d.confirmationText,
            o("WAWebUISpacing").uiPadding.top4,
            o("WAWebUISpacing").uiPadding.bottom5,
            o("WAWebUISpacing").uiPadding.horiz0,
          )),
          (a[5] = y),
          (a[6] = C))
        : ((y = a[5]), (C = a[6]));
      var b;
      if (
        a[7] !== i.contact.name ||
        a[8] !== ((n = i.groupMetadata) == null ? void 0 : n.groupType)
      ) {
        var v, S;
        ((b = c.jsx(
          "div",
          babelHelpers.extends({}, C, {
            children:
              ((v = i.groupMetadata) == null ? void 0 : v.groupType) ===
              o("WAWebGroupType").GroupType.COMMUNITY
                ? s._(
                    /*BTDS*/ 'Are you sure you want to reset the invite link for "{community}"? If you reset the link, no one will be able to use it to join this community.',
                    [s._param("community", i.contact.name)],
                  )
                : s._(
                    /*BTDS*/ 'Are you sure you want to reset the invite link for "{group}"? If you reset the link, no one will be able to use it to join this group.',
                    [s._param("group", i.contact.name)],
                  ),
          }),
        )),
          (a[7] = i.contact.name),
          (a[8] = (S = i.groupMetadata) == null ? void 0 : S.groupType),
          (a[9] = b));
      } else b = a[9];
      var R;
      return (
        a[10] !== _ || a[11] !== b
          ? ((R = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: f,
              title: g,
              onOK: _,
              okText: h,
              onCancel: u,
              cancelText: y,
              children: b,
            })),
            (a[10] = _),
            (a[11] = b),
            (a[12] = R))
          : (R = a[12]),
        R
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = m;
  },
  226,
);
