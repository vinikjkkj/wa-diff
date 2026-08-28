__d(
  "FBPayAddressTypeaheadViewItem",
  [
    "CometTypeaheadViewItem.react",
    "FBPayECPText.react",
    "FDSListCell.react",
    "FDSTextPairing.react",
    "fbpayECPParseAddressTypeaheadData",
    "intlList",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["entry", "logger", "queryString"],
      s,
      u = s || (s = o("react")),
      c = {
        headline: {
          marginBottom: "x1wsgfga",
          marginTop: "x1rdy4ex",
          $$css: !0,
        },
      },
      d = function (t, n, o) {
        var e = 0,
          a = [];
        return (
          t == null ||
            t.forEach(function (t) {
              var i,
                l,
                s = (i = t.length) != null ? i : 0,
                c = (l = t.offset) != null ? l : 0;
              (e < c &&
                (a.push(
                  o
                    ? u.jsx(
                        r("FBPayECPText.react"),
                        {
                          cdsText: { color: "primaryText", textStyle: "body" },
                          fbType: "headlineDeemphasized4",
                          children: n.substring(e, c),
                        },
                        n.substring(e, c),
                      )
                    : u.jsx(
                        r("FBPayECPText.react"),
                        {
                          cdsText: {
                            color: "secondaryText",
                            textStyle: "meta",
                          },
                          fbColor: "disabled",
                          fbType: "body4",
                          children: n.substring(e, c),
                        },
                        n.substring(e, c),
                      ),
                ),
                (e = c)),
                a.push(
                  o
                    ? u.jsx(
                        r("FBPayECPText.react"),
                        {
                          cdsText: {
                            color: "primaryText",
                            textStyle: "bodyEmphasized",
                          },
                          fbType: "headlineEmphasized4",
                          children: n.substring(e, c + s),
                        },
                        n.substring(e, c + s),
                      )
                    : u.jsx(
                        r("FBPayECPText.react"),
                        {
                          cdsText: {
                            color: "secondaryText",
                            textStyle: "metaEmphasized",
                          },
                          fbColor: "disabled",
                          fbType: "bodyLink4",
                          children: n.substring(e, c + s),
                        },
                        n.substring(e, c + s),
                      ),
                ),
                (e = c + s));
            }),
          a.push(
            o
              ? u.jsx(
                  r("FBPayECPText.react"),
                  {
                    cdsText: { color: "primaryText", textStyle: "body" },
                    fbType: "headlineDeemphasized4",
                    children: n.substring(e, n.length),
                  },
                  n.substring(e, n.length),
                )
              : u.jsx(
                  r("FBPayECPText.react"),
                  {
                    cdsText: { color: "secondaryText", textStyle: "meta" },
                    fbColor: "disabled",
                    fbType: "body4",
                    children: n.substring(e, n.length),
                  },
                  n.substring(e, n.length),
                ),
          ),
          a
        );
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(20),
        a,
        i,
        l;
      if (n[0] !== t) {
        var s = t.entry,
          m = t.logger,
          p = t.queryString,
          _ = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((a = s),
          (i = m),
          (l = _),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l));
      } else ((a = n[1]), (i = n[2]), (l = n[3]));
      var f = a.rawData.suggestions.address_id,
        g,
        h;
      if (f == null) {
        var y;
        if (n[4] !== a) {
          var C = r("fbpayECPParseAddressTypeaheadData")(a);
          ((h = C.street1),
            (y = r("intlList")(
              [C.city, C.state, C.zip],
              r("intlList").CONJUNCTIONS.NONE,
            )),
            (n[4] = a),
            (n[5] = y),
            (n[6] = h));
        } else ((y = n[5]), (h = n[6]));
        g = y;
      } else {
        var b = a.rawData.suggestions.main_text_value,
          v = a.rawData.suggestions.main_text_matched_string,
          S;
        (n[7] !== v || n[8] !== b
          ? ((S = b == null ? b : d(v, b, !0)),
            (n[7] = v),
            (n[8] = b),
            (n[9] = S))
          : (S = n[9]),
          (h = S));
        var R = a.rawData.suggestions.secondary_text_value,
          L = a.rawData.suggestions.secondary_text_matched_string,
          E;
        (n[10] !== L || n[11] !== R
          ? ((E = R == null ? R : d(L, R, !1)),
            (n[10] = L),
            (n[11] = R),
            (n[12] = E))
          : (E = n[12]),
          (g = E));
      }
      if (g == null) {
        var k = { isBodyEmpty: "true" };
        i.logClientLoadEcpAddresstypeaheadFail(k);
      }
      if (h == null) {
        var I = { isHeadlineEmpty: "true" };
        i.logClientLoadEcpAddresstypeaheadFail(I);
      }
      var T;
      n[13] !== g || n[14] !== h
        ? ((T = u.jsx(o("react-strict-dom").html.div, {
            style: c.headline,
            children: u.jsx(r("FDSListCell.react"), {
              content: u.jsx(r("FDSTextPairing.react"), {
                body: g,
                bodyColor: "placeholder",
                bodyLineLimit: 3,
                headline: h,
                headlineLineLimit: 1,
                level: 4,
              }),
              hasBottomDivider: !0,
              nestedSpacing: 16,
            }),
          })),
          (n[13] = g),
          (n[14] = h),
          (n[15] = T))
        : (T = n[15]);
      var D;
      return (
        n[16] !== a || n[17] !== l || n[18] !== T
          ? ((D = u.jsx(
              r("CometTypeaheadViewItem.react"),
              babelHelpers.extends({}, l, { entry: a, children: T }),
            )),
            (n[16] = a),
            (n[17] = l),
            (n[18] = T),
            (n[19] = D))
          : (D = n[19]),
        D
      );
    }
    l.default = m;
  },
  98,
);
