__d(
  "WAWebEditFormBusinessAddressField.react",
  [
    "fbt",
    "WAWebBusinessProfileTypes",
    "WAWebEditFormBusinessProfileFormField.react",
    "WAWebMap.react",
    "WAWebUISpacing",
    "WAWebWamEnumBusinessProfileField",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = 96,
      m = 312,
      p = {
        businessMap: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          position: "x1n2onr6",
          $$css: !0,
        },
        overlayHint: {
          backgroundColor: "x1109wk8",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderStartStartRadius: "x1xn7y0n",
          borderStartEndRadius: "x1uxb8k9",
          borderEndEndRadius: "x1vmbcc8",
          borderEndStartRadius: "x16xm01d",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          color: "x6k43r8",
          fontSize: "x1f6kntn",
          textTransform: "xtvhhri",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.activeField,
        a = e.businessProfile,
        i = e.disabled,
        l = e.error,
        u = e.lowProfile,
        d = e.onActive,
        m = e.onCancel,
        p = e.onChange,
        _ = e.onError,
        g = e.onSaveBusinessProfile,
        h = e.rawBusinessProfile,
        y = e.sessionId,
        C = e.validate,
        b = e.value,
        v = u === void 0 ? !0 : u,
        S;
      t[0] !== b
        ? ((S = function () {
            return { address: b };
          }),
          (t[0] = b),
          (t[1] = S))
        : (S = t[1]);
      var R = a.address,
        L;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Business address")), (t[2] = L))
        : (L = t[2]);
      var E;
      t[3] !== n ||
      t[4] !== a.address ||
      t[5] !== i ||
      t[6] !== l ||
      t[7] !== v ||
      t[8] !== d ||
      t[9] !== m ||
      t[10] !== p ||
      t[11] !== _ ||
      t[12] !== g ||
      t[13] !== h ||
      t[14] !== y ||
      t[15] !== S ||
      t[16] !== C ||
      t[17] !== b
        ? ((E = c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
            activeField: n,
            fieldKey: "address",
            fieldMetric: o("WAWebWamEnumBusinessProfileField")
              .BUSINESS_PROFILE_FIELD.ADDRESS,
            formatForSave: S,
            lowProfile: v,
            originalValue: R,
            placeholder: L,
            rawBusinessProfile: h,
            sessionId: y,
            maxLength: o("WAWebBusinessProfileTypes")
              .BUSINESS_PROFILE_FIELDS_LENGTH.ADDRESS,
            value: b,
            validate: C,
            error: l,
            onActive: d,
            onChange: p,
            onSaveBusinessProfile: g,
            onError: _,
            onCancel: m,
            disabled: i,
          })),
          (t[3] = n),
          (t[4] = a.address),
          (t[5] = i),
          (t[6] = l),
          (t[7] = v),
          (t[8] = d),
          (t[9] = m),
          (t[10] = p),
          (t[11] = _),
          (t[12] = g),
          (t[13] = h),
          (t[14] = y),
          (t[15] = S),
          (t[16] = C),
          (t[17] = b),
          (t[18] = E))
        : (E = t[18]);
      var k = E,
        I = a.latitude,
        T = a.longitude,
        D;
      t[19] !== n || t[20] !== I || t[21] !== T || t[22] !== b
        ? ((D =
            I != null && T != null
              ? c.jsx(f, {
                  activeField: n,
                  value: b,
                  latitude: I,
                  longitude: T,
                })
              : null),
          (t[19] = n),
          (t[20] = I),
          (t[21] = T),
          (t[22] = b),
          (t[23] = D))
        : (D = t[23]);
      var x = D,
        $;
      return (
        t[24] !== k || t[25] !== x
          ? (($ = c.jsxs(c.Fragment, { children: [k, x] })),
            (t[24] = k),
            (t[25] = x),
            (t[26] = $))
          : ($ = t[26]),
        $
      );
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.activeField,
        i = t.latitude,
        l = t.longitude,
        u = t.value,
        _;
      n[0] !== (a == null ? void 0 : a.fieldKey)
        ? ((_ =
            (a == null ? void 0 : a.fieldKey) === "address"
              ? c.jsx("div", {
                  className:
                    "x6s0dn4 x1ey2m1c x78zum5 xtijo5x x1o0tod xl56j7k x10l6tqk x13vifvy",
                  children: c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        p.overlayHint,
                        o("WAWebUISpacing").uiPadding.vert8,
                        o("WAWebUISpacing").uiPadding.horiz30,
                      ),
                      { children: s._(/*BTDS*/ "Edit map on mobile") },
                    ),
                  ),
                })
              : null),
          (n[0] = a == null ? void 0 : a.fieldKey),
          (n[1] = _))
        : (_ = n[1]);
      var f = _,
        g,
        h;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { height: d }),
          (h = (e || (e = r("stylex")))(
            p.businessMap,
            o("WAWebUISpacing").uiPadding.vert2,
            o("WAWebUISpacing").uiMargin.top10,
          )),
          (n[2] = g),
          (n[3] = h))
        : ((g = n[2]), (h = n[3]));
      var y;
      n[4] !== i || n[5] !== l || n[6] !== u
        ? ((y = c.jsx(r("WAWebMap.react"), {
            lat: i,
            lng: l,
            name: u,
            width: m,
            height: d,
          })),
          (n[4] = i),
          (n[5] = l),
          (n[6] = u),
          (n[7] = y))
        : (y = n[7]);
      var C;
      return (
        n[8] !== f || n[9] !== y
          ? ((C = c.jsxs("div", { style: g, className: h, children: [f, y] })),
            (n[8] = f),
            (n[9] = y),
            (n[10] = C))
          : (C = n[10]),
        C
      );
    }
    l.default = _;
  },
  226,
);
