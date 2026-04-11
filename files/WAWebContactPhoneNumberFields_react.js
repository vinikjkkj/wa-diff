__d(
  "WAWebContactPhoneNumberFields.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebContactLogging",
    "WAWebContactPhoneNumberField.react",
    "WAWebCountriesUtils",
    "WAWebCountrySelectField.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCountries",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = n("$InternalEnum").Mirrored([
        "Registered",
        "Unregistered",
        "Invalid",
        "Duplicate",
        "IsCustomer",
      ]),
      d = "contact-phone-number-fields-error";
    function m(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.countryCode,
        a = e.numberWithoutPrefix,
        i = e.onChange,
        l = e.onViewDuplicateContact,
        m = e.origin,
        p = e.status,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
              .WHATSAPP_REGISTRATION,
          }),
          (t[0] = _))
        : (_ = t[0]);
      var f = o("useWAWebCountries").useCountries(_),
        g = f.error,
        h = f.value,
        y = p != null && p !== c.Registered;
      if (h == null || g != null) return null;
      var C, b;
      t[1] !== n || t[2] !== a || t[3] !== i
        ? ((b = function (t) {
            C(t, a);
          }),
          (C = function (t, r) {
            i(t != null ? t : n, r);
          }),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = C),
          (t[5] = b))
        : ((C = t[4]), (b = t[5]));
      var v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "teal",
            weight: "medium",
            children: s._(/*BTDS*/ "View contact"),
          })),
          (t[6] = v))
        : (v = t[6]);
      var S;
      t[7] !== l
        ? ((S = u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: l,
            children: v,
          })),
          (t[7] = l),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L = m === o("WAWebContactLogging").ContactSourceType.NewChat,
        E;
      t[9] !== R
        ? ((E = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "This phone number is already in your contacts. {view-contact-button}",
              [s._param("view-contact-button", R)],
            ),
          })),
          (t[9] = R),
          (t[10] = E))
        : (E = t[10]);
      var k = E,
        I;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "This phone number is already in your contacts.",
            ),
          })),
          (t[11] = I))
        : (I = t[11]);
      var T = I,
        D;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [
            o("WAWebUISpacing").uiPadding.top8,
            o("WAWebUISpacing").uiPadding.bottom20,
          ]),
          (t[12] = D))
        : (D = t[12]);
      var x;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = { className: "xzj7eog" }), (t[13] = x))
        : (x = t[13]);
      var $;
      t[14] !== h || t[15] !== n || t[16] !== b
        ? (($ = u.jsx(
            "div",
            babelHelpers.extends({}, x, {
              dir: "auto",
              children: u.jsx(
                r("WAWebCountrySelectField.react"),
                {
                  countries: h,
                  testid: void 0,
                  onChange: b,
                  initialSelection: n,
                },
                n,
              ),
            }),
          )),
          (t[14] = h),
          (t[15] = n),
          (t[16] = b),
          (t[17] = $))
        : ($ = t[17]);
      var P = p === c.Registered,
        N;
      t[18] !== n || t[19] !== C || t[20] !== y || t[21] !== a || t[22] !== P
        ? ((N = u.jsx(r("WAWebContactPhoneNumberField.react"), {
            countryCode: n,
            numberWithoutPrefix: a,
            onChange: C,
            isValid: P,
            errorShown: y,
            errorMessageDOMId: d,
          })),
          (t[18] = n),
          (t[19] = C),
          (t[20] = y),
          (t[21] = a),
          (t[22] = P),
          (t[23] = N))
        : (N = t[23]);
      var M;
      t[24] !== N || t[25] !== $
        ? ((M = u.jsxs(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            shrink: 1,
            dir: "ltr",
            children: [$, N],
          })),
          (t[24] = N),
          (t[25] = $),
          (t[26] = M))
        : (M = t[26]);
      var w;
      t[27] !== k || t[28] !== L || t[29] !== p
        ? ((w =
            p &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              id: d,
              xstyle: o("WAWebUISpacing").uiMargin.top10,
              children: [
                p === c.IsCustomer &&
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "This contact is already your customer.",
                    ),
                  }),
                p === c.Registered &&
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(/*BTDS*/ "This phone number is on WhatsApp."),
                  }),
                p === c.Unregistered &&
                  u.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: s._(
                      /*BTDS*/ "This phone number is not on WhatsApp. Invite them on your primary device.",
                    ),
                  }),
                p === c.Duplicate && L && k,
                p === c.Duplicate && !L && T,
              ],
            })),
          (t[27] = k),
          (t[28] = L),
          (t[29] = p),
          (t[30] = w))
        : (w = t[30]);
      var A;
      return (
        t[31] !== M || t[32] !== w
          ? ((A = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: D,
              children: [M, w],
            })),
            (t[31] = M),
            (t[32] = w),
            (t[33] = A))
          : (A = t[33]),
        A
      );
    }
    ((l.PhoneNumberStatusType = c), (l.ContactPhoneNumberFields = m));
  },
  226,
);
