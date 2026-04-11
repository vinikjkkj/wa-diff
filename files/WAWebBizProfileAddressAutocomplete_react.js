__d(
  "WAWebBizProfileAddressAutocomplete.react",
  [
    "WAWebBizProfileAddressAutocompleteQuery.graphql",
    "WAWebBusinessProfileLabels",
    "WAWebBusinessProfileTextField.react",
    "WAWebCountryCenterCoordinates",
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebRelayClient",
    "WAWebServiceAreaRadiusDropdown.react",
    "WDSIconIcLocationOn.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSVars.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebOnOutsideClick",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g =
        e !== void 0
          ? e
          : (e = n("WAWebBizProfileAddressAutocompleteQuery.graphql")),
      h = 300,
      y = 3,
      C =
        "calc(" +
        o("WDSVars.stylex").WDSVars.spacingTriple +
        " + " +
        o("WDSVars.stylex").WDSVars.spacingSingle +
        " * 2 + 12px + " +
        o("WDSVars.stylex").WDSVars.spacingSingle +
        ")",
      b = {
        menuContainer: {
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          boxShadow: "x1sr759z",
          color: "x14ug900",
          insetInlineStart: "xxb5yu8",
          left: null,
          right: null,
          marginTop: "x1wgys3m",
          maxHeight: "xuyqlj2",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          position: "x10l6tqk",
          top: "xdsb8wn",
          width: "x116kdbm",
          zIndex: "xfo81ep",
          $$css: !0,
        },
      };
    function v(e) {
      var t = e.defaultValue,
        a = t === void 0 ? "" : t,
        i = e.fieldName,
        l = e.initialLatitude,
        s = e.initialLongitude,
        c = e.label,
        C = e.locationNotesValue,
        v = C === void 0 ? "" : C,
        S = e.onChange,
        R = e.onClick,
        L = e.onLocationSelect,
        E = e.serviceAreaRadiusValue,
        k = E === void 0 ? "" : E,
        I = e.xstyle,
        T = f(a),
        D = T[0],
        x = T[1],
        $ = f([]),
        P = $[0],
        N = $[1],
        M = p(
          function () {
            return l != null && s != null
              ? { latitude: l, longitude: s }
              : o("WAWebCountryCenterCoordinates").getDefaultCenter();
          },
          [l, s],
        ),
        w = _(null),
        A = _(!1),
        F = _(!0),
        O = _(null),
        B = d(function () {
          N([]);
        }, []);
      o("useWAWebOnOutsideClick").useOnOutsideClick(O, B);
      var W = d(
          function (e) {
            var t = e.title;
            ((A.current = !0),
              x(t),
              N([]),
              S != null && i != null && S(i, t),
              L != null &&
                e.latitude != null &&
                e.longitude != null &&
                L({ latitude: e.latitude, longitude: e.longitude }));
          },
          [i, S, L],
        ),
        q = d(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e.length < y) {
                  N([]);
                  return;
                }
                try {
                  var t,
                    n,
                    r = yield o("WAWebRelayClient").fetchQuery(
                      g,
                      {
                        input: {
                          center: M,
                          query: e,
                          use_case_id: "WHATSAPP_BIZ_PROFILE",
                        },
                      },
                      { environmentType: "facebook" },
                    );
                  if (r == null) {
                    N([]);
                    return;
                  }
                  var a =
                      (t =
                        (n = r.whatsapp_maps_typeahead) == null
                          ? void 0
                          : n.items) != null
                        ? t
                        : [],
                    i = a.map(function (e, t) {
                      var n, r, o, a, i, l, s, u, c, d, m, p, _, f, g;
                      return {
                        city:
                          (n = (r = e.address) == null ? void 0 : r.city) !=
                          null
                            ? n
                            : null,
                        country:
                          (o = (a = e.address) == null ? void 0 : a.country) !=
                          null
                            ? o
                            : null,
                        id: (i = e.id) != null ? i : "result-" + t,
                        latitude:
                          (l =
                            (s = e.location) == null ? void 0 : s.latitude) !=
                          null
                            ? l
                            : null,
                        longitude:
                          (u =
                            (c = e.location) == null ? void 0 : c.longitude) !=
                          null
                            ? u
                            : null,
                        postalcode:
                          (d =
                            (m = e.address) == null ? void 0 : m.postalcode) !=
                          null
                            ? d
                            : null,
                        stateprovince:
                          (p =
                            (_ = e.address) == null
                              ? void 0
                              : _.stateprovince) != null
                            ? p
                            : null,
                        streetaddress:
                          (f =
                            (g = e.address) == null
                              ? void 0
                              : g.streetaddress) != null
                            ? f
                            : null,
                        title: e.title,
                      };
                    });
                  N(i);
                } catch (e) {
                  N([]);
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [M],
        );
      m(
        function () {
          if (F.current) {
            F.current = !1;
            return;
          }
          if (A.current) {
            A.current = !1;
            return;
          }
          return (
            w.current != null && self.clearTimeout(w.current),
            D.length >= y
              ? (w.current = self.setTimeout(function () {
                  q(D).catch(r("WAWebNoop"));
                }, h))
              : N([]),
            function () {
              w.current != null && self.clearTimeout(w.current);
            }
          );
        },
        [D, q],
      );
      var U = d(
        function (e, t) {
          (x(t), S != null && S(e, t));
        },
        [S],
      );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs("div", {
            className: "x1n2onr6 xh8yej3",
            ref: O,
            children: [
              u.jsx(r("WAWebBusinessProfileTextField.react"), {
                editable: !0,
                fieldName: i,
                icon: u.jsx(r("WDSIconIcLocationOn.react"), {}),
                label: c,
                onChange: U,
                onClick: R,
                value: D,
                xstyle: I,
              }),
              P.length > 0 &&
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: b.menuContainer,
                  children: u.jsx(r("WDSMenu.react"), {
                    useMaxWidth: !1,
                    children: P.map(function (e) {
                      var t,
                        n = [
                          e.streetaddress,
                          e.city,
                          e.stateprovince,
                          e.postalcode,
                        ]
                          .filter(Boolean)
                          .join(", ");
                      return u.jsx(
                        r("WDSMenuItem.react"),
                        {
                          Icon: r("WDSIconIcLocationOn.react"),
                          onPress: function () {
                            return W(e);
                          },
                          subtitle: (t = e.country) != null ? t : void 0,
                          title: n || e.title,
                        },
                        e.id,
                      );
                    }),
                  }),
                }),
            ],
          }),
          u.jsx(r("WAWebServiceAreaRadiusDropdown.react"), {
            label: o("WAWebBusinessProfileLabels").getCoverageAreaLabel(),
            onChange: S,
            value: k,
            xstyle: I,
          }),
          u.jsx(r("WAWebBusinessProfileTextField.react"), {
            editable: !0,
            fieldName: "locationNotes",
            label: o("WAWebBusinessProfileLabels").getLocationNotesLabel(),
            onChange: S,
            value: v,
            xstyle: I,
          }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
