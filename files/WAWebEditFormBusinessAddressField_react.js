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
      var t = e.activeField,
        n = e.businessProfile,
        a = e.disabled,
        i = e.error,
        l = e.lowProfile,
        u = l === void 0 ? !0 : l,
        d = e.onActive,
        m = e.onCancel,
        p = e.onChange,
        _ = e.onError,
        g = e.onSaveBusinessProfile,
        h = e.rawBusinessProfile,
        y = e.sessionId,
        C = e.validate,
        b = e.value,
        v = c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
          activeField: t,
          fieldKey: "address",
          fieldMetric: o("WAWebWamEnumBusinessProfileField")
            .BUSINESS_PROFILE_FIELD.ADDRESS,
          formatForSave: function () {
            return { address: b };
          },
          lowProfile: u,
          originalValue: n.address,
          placeholder: s._(/*BTDS*/ "Business address"),
          rawBusinessProfile: h,
          sessionId: y,
          maxLength: o("WAWebBusinessProfileTypes")
            .BUSINESS_PROFILE_FIELDS_LENGTH.ADDRESS,
          value: b,
          validate: C,
          error: i,
          onActive: d,
          onChange: p,
          onSaveBusinessProfile: g,
          onError: _,
          onCancel: m,
          disabled: a,
        }),
        S = n.latitude,
        R = n.longitude,
        L =
          S != null && R != null
            ? c.jsx(f, { activeField: t, value: b, latitude: S, longitude: R })
            : null;
      return c.jsxs(c.Fragment, { children: [v, L] });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var n = t.activeField,
        a = t.latitude,
        i = t.longitude,
        l = t.value,
        u =
          (n == null ? void 0 : n.fieldKey) === "address"
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
            : null;
      return c.jsxs("div", {
        style: { height: d },
        className: (e || (e = r("stylex")))(
          p.businessMap,
          o("WAWebUISpacing").uiPadding.vert2,
          o("WAWebUISpacing").uiMargin.top10,
        ),
        children: [
          u,
          c.jsx(r("WAWebMap.react"), {
            lat: a,
            lng: i,
            name: l,
            width: m,
            height: d,
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
