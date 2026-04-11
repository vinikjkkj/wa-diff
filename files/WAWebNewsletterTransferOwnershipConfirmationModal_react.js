__d(
  "WAWebNewsletterTransferOwnershipConfirmationModal.react",
  [
    "fbt",
    "WAWebChangeNewsletterOwnerAction",
    "WAWebContactCollection",
    "WAWebDemoteNewsletterAdminAction",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebUserConfirmationModal.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {
        return s._(
          /*BTDS*/ "To confirm the transfer, enter your country code and phone number.",
        );
      },
      d = function () {
        return s._(/*BTDS*/ "To confirm the transfer, enter your email.");
      },
      m = function () {
        return s._(/*BTDS*/ "Transfer");
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.chat,
        a = e.contact,
        i = e.onTransferCompletion,
        l = e.shouldDismissSelfAsAdmin,
        p;
      t[0] !== n || t[1] !== a
        ? ((p = function () {
            return o(
              "WAWebChangeNewsletterOwnerAction",
            ).changeNewsletterOwnerAction(n, a);
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== i
        ? ((_ = function () {
            i();
          }),
          (t[3] = i),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Couldn't transfer ownership. Please try again.")),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== p || t[7] !== _
        ? ((g = { action: p, onSuccess: _, errorMessage: f }),
          (t[6] = p),
          (t[7] = _),
          (t[8] = g))
        : (g = t[8]);
      var h;
      if (t[9] !== n || t[10] !== l || t[11] !== g) {
        if (((h = [g]), l)) {
          var y;
          t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = o(
                "WAWebContactCollection",
              ).ContactCollection.getMeContact()),
              (t[13] = y))
            : (y = t[13]);
          var C = y;
          if (C != null) {
            var b;
            t[14] !== n
              ? ((b = function () {
                  return o(
                    "WAWebDemoteNewsletterAdminAction",
                  ).demoteNewsletterAdminAction(n, C);
                }),
                (t[14] = n),
                (t[15] = b))
              : (b = t[15]);
            var v;
            t[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = s._(
                  /*BTDS*/ "Ownership transferred but couldn't dismiss yourself as admin.",
                )),
                (t[16] = v))
              : (v = t[16]);
            var S;
            (t[17] !== b
              ? ((S = { action: b, errorMessage: v }), (t[17] = b), (t[18] = S))
              : (S = t[18]),
              h.push(S));
          }
        }
        ((t[9] = n), (t[10] = l), (t[11] = g), (t[12] = h));
      } else h = t[12];
      var R;
      t[19] !== a || t[20] !== l
        ? ((R = l
            ? s._(
                /*BTDS*/ 'Ownership transferred to "{new-channel-owner}". You are no longer an admin.',
                [
                  s._param(
                    "new-channel-owner",
                    u.jsx(o("WAWebName.react").ContactName, { contact: a }),
                  ),
                ],
              )
            : s._(/*BTDS*/ 'Ownership transferred to "{new-channel-owner}"', [
                s._param(
                  "new-channel-owner",
                  u.jsx(o("WAWebName.react").ContactName, { contact: a }),
                ),
              ])),
          (t[19] = a),
          (t[20] = l),
          (t[21] = R))
        : (R = t[21]);
      var L = R,
        E,
        k,
        I;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = m()),
          (k = d()),
          (I = c()),
          (t[22] = E),
          (t[23] = k),
          (t[24] = I))
        : ((E = t[22]), (k = t[23]), (I = t[24]));
      var T;
      return (
        t[25] !== h || t[26] !== L
          ? ((T = u.jsx(r("WAWebUserConfirmationModal.react"), {
              actions: h,
              actionType: "primary",
              actionText: E,
              emailContentText: k,
              phoneContentText: I,
              successText: L,
              onCompletion: o("WAWebModalManager").closeModalManager,
            })),
            (t[25] = h),
            (t[26] = L),
            (t[27] = T))
          : (T = t[27]),
        T
      );
    }
    l.default = p;
  },
  226,
);
