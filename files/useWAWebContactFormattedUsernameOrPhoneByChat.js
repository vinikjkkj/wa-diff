__d(
  "useWAWebContactFormattedUsernameOrPhoneByChat",
  [
    "WAWebChatCommunityUtils",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebEventTargetValue",
    "useWAWebIAmCommunityAdmin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("react-compiler-runtime").c(16),
        a = t.id,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
            o("WAWebFrontendContactGetters").getMaskedPhoneLid,
          ]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebContactValues").useContactValues(t.id, i),
        s = l[0],
        u = l[1],
        c;
      if (n[1] !== (e == null ? void 0 : e.groupMetadata)) {
        var d;
        ((c =
          e == null ||
          (d = e.groupMetadata) == null ||
          (d = d.getParentGroupChat()) == null
            ? void 0
            : d.groupMetadata),
          (n[1] = e == null ? void 0 : e.groupMetadata),
          (n[2] = c));
      } else c = n[2];
      var m = c,
        p = r("useWAWebIAmCommunityAdmin")(m),
        _;
      if (n[3] !== a) {
        var f;
        ((_ = (f = o("WAWebLidMigrationUtils").toPn(a)) != null ? f : a),
          (n[3] = a),
          (n[4] = _));
      } else _ = n[4];
      var g = _,
        h;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["bulk_add", "bulk_remove"]), (n[5] = h))
        : (h = n[5]);
      var y;
      n[6] !== g || n[7] !== (m == null ? void 0 : m.participants)
        ? ((y = function () {
            var e;
            return (
              g.isUser() &&
              !!(
                !(m == null || (e = m.participants) == null) && e.userIsAdmin(g)
              )
            );
          }),
          (n[6] = g),
          (n[7] = m == null ? void 0 : m.participants),
          (n[8] = y))
        : (y = n[8]);
      var C = r("useWAWebEventTargetValue")(
          m == null ? void 0 : m.participants,
          h,
          y,
        ),
        b;
      return (
        n[9] !== e ||
        n[10] !== t ||
        n[11] !== s ||
        n[12] !== p ||
        n[13] !== C ||
        n[14] !== u
          ? ((b = o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
              e,
              t,
              { iAmCommunityAdmin: p, isSenderAdmin: C },
            )
              ? { formattedUsernameOrPhone: u, isPhoneNumberForceMasked: !0 }
              : {
                  formattedUsernameOrPhone: s,
                  isPhoneNumberForceMasked: null,
                }),
            (n[9] = e),
            (n[10] = t),
            (n[11] = s),
            (n[12] = p),
            (n[13] = C),
            (n[14] = u),
            (n[15] = b))
          : (b = n[15]),
        b
      );
    }
    l.default = e;
  },
  98,
);
