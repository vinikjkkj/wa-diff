__d(
  "WAMFlowsHSMEditorProvider",
  [
    "FBLogger",
    "WAFlowJSONValidation",
    "WAMFlowsHSMEditorUtils",
    "WAMFlowsHSMFlowJSONAdapter",
    "WAMFlowsHSMScreensUtils",
    "WAMFlowsHSMValidation",
    "WAMFlowsHSMValidationConfig",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useMemo,
      f = u.useRef,
      g = u.useState,
      h = c(null);
    function y(e) {
      var t = e.businessName,
        n = e.children,
        r = e.initialFlowJSON,
        o = e.isLeadGenFlow,
        a = e.onFlowJSONChange,
        i = e.onScreenValidation,
        l = e.surface,
        u = e.validationConfig,
        c = e.wabaID,
        d = b(r, a, l, c, u, i, o, t);
      return s.jsx(h.Provider, { value: d, children: n });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      var e = m(h);
      if (e == null)
        throw r("FBLogger")("wa_flows").mustfixThrow(
          "useWhatsAppFlowTemplatesEditor must be used in a component wrapped in WAMFlowsHSMEditorProvider",
        );
      return e;
    }
    function b(e, t, n, a, i, l, s, u) {
      i === void 0 &&
        (i = o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG);
      var c = f(t),
        m = g(o("WAMFlowsHSMFlowJSONAdapter").parseFlowJSON(e)),
        h = m[0],
        y = m[1],
        C = g(h),
        b = C[0],
        v = C[1],
        S = _(
          function () {
            return e.version;
          },
          [e.version],
        ),
        R = _(
          function () {
            var e = o("WAMFlowsHSMValidation").validateScreens(h, i);
            if (!e) return !1;
            var t = JSON.stringify(
                o("WAMFlowsHSMFlowJSONAdapter").generateFlowJSON(h, S, s, u),
              ),
              n = o("WAFlowJSONValidation").validateFlowJSON(t);
            if (!n.isValid) {
              var a = n.errors
                .map(function (e) {
                  return e.code + " - " + e.message;
                })
                .join(",");
              return (
                r("FBLogger")("wa_flows").mustfix(
                  "Flow JSON is invalid, %s, %s",
                  a,
                  t,
                ),
                !1
              );
            }
            return !0;
          },
          [h, i, S, s, u],
        );
      p(
        function () {
          R && v(h);
        },
        [R, h],
      );
      var L = _(
          function () {
            return JSON.stringify(
              o("WAMFlowsHSMFlowJSONAdapter").generateFlowJSON(
                R ? h : b,
                S,
                s,
                u,
              ),
            );
          },
          [R, h, b, S, s, u],
        ),
        E = _(
          function () {
            var e;
            return (e = h[0]) == null ? void 0 : e.id;
          },
          [h],
        ),
        k = g(E),
        I = k[0],
        T = k[1];
      if (I == null)
        throw r("FBLogger")("wa_flows").mustfixThrow(
          "screen id must be not null in WAMFlowsHSMEditorProvider",
        );
      if (E == null)
        throw r("FBLogger")("wa_flows").mustfixThrow(
          "first screen id must be not null in WAMFlowsHSMEditorProvider",
        );
      var D = _(
          function () {
            return h.find(function (e) {
              var t = e.id;
              return t === I;
            });
          },
          [h, I],
        ),
        x = _(
          function () {
            var e;
            return (e = h.findIndex(function (e) {
              var t = e.id;
              return t === I;
            })) != null
              ? e
              : -1;
          },
          [h, I],
        );
      (p(
        function () {
          c.current = t;
        },
        [t],
      ),
        p(
          function () {
            c.current(L);
          },
          [L],
        ),
        p(
          function () {
            l == null || l(R);
          },
          [R, l],
        ));
      var $ = d(function (e, t) {
          y(function (n) {
            return n.map(function (n) {
              return n.id === e ? t(n) : n;
            });
          });
        }, []),
        P = d(
          function (e) {
            $(I, function (t) {
              return babelHelpers.extends({}, t, {
                components: [].concat(t.components, [e]),
              });
            });
          },
          [I, $],
        ),
        N = d(
          function (e) {
            $(I, function (t) {
              return babelHelpers.extends({}, t, {
                components: t.components.filter(function (t, n) {
                  return n !== e;
                }),
              });
            });
          },
          [$, I],
        ),
        M = d(
          function (e, t) {
            return $(I, function (n) {
              return babelHelpers.extends({}, n, {
                components: n.components.map(function (n, r) {
                  var a = e;
                  return (
                    e.name != null &&
                      e.label != null &&
                      typeof e.label == "string" &&
                      (a = babelHelpers.extends({}, e, {
                        name: o("WAMFlowsHSMEditorUtils").generateComponentId(
                          o("WAMFlowsHSMEditorUtils").sanitise(e.label),
                        ),
                      })),
                    r === t ? babelHelpers.extends({}, n, { flowJSON: a }) : n
                  );
                }),
              });
            });
          },
          [I, $],
        ),
        w = d(
          function (e) {
            $(I, function (t) {
              return babelHelpers.extends({}, t, { title: e });
            });
          },
          [$, I],
        ),
        A = d(
          function (e) {
            $(I, function (t) {
              return babelHelpers.extends({}, t, { buttonTitle: e });
            });
          },
          [$, I],
        ),
        F = d(
          function (e) {
            $(I, function (t) {
              return babelHelpers.extends({}, t, { privacyPolicyURL: e });
            });
          },
          [$, I],
        ),
        O = d(function (e) {
          y(function (t) {
            return t.reduce(function (t, n) {
              var r = e.indexOf(n.id);
              return ((t[r] = n), t);
            }, []);
          });
        }, []),
        B = d(function (e) {
          var t = o("WAMFlowsHSMEditorUtils").generateScreenId();
          (y(function (n) {
            return [].concat(
              o("WAMFlowsHSMScreensUtils").getAllScreensExceptOptins(n),
              [
                {
                  buttonTitle: "Continue",
                  components: o(
                    "WAMFlowsHSMEditorUtils",
                  ).getDefaultComponents(),
                  id: t,
                  title: e,
                },
              ],
              o("WAMFlowsHSMScreensUtils").getOptinScreens(n),
            );
          }),
            T(t));
        }, []),
        W = d(function (e) {
          var t =
            "" +
            o("WAMFlowsHSMFlowJSONAdapter").OPTIN_PREFIX +
            o("WAMFlowsHSMEditorUtils").generateScreenId();
          return (
            y(function (n) {
              return [].concat(n, [
                {
                  buttonTitle: "Continue",
                  components: o(
                    "WAMFlowsHSMEditorUtils",
                  ).getDefaultComponentsForOptinScreen(),
                  id: t,
                  title: e,
                },
              ]);
            }),
            t
          );
        }, []),
        q = d(
          function (e) {
            var t,
              n = o("WAMFlowsHSMScreensUtils").getOptinScreensMap(h)[e],
              r =
                (t =
                  n == null
                    ? void 0
                    : n.map(function (e) {
                        return e.id;
                      })) != null
                  ? t
                  : [],
              a = h.filter(function (t) {
                return t.id !== e && !r.includes(t.id);
              });
            if (
              (D == null ? void 0 : D.id) === e ||
              r.includes(D == null ? void 0 : D.id)
            ) {
              var i;
              T((i = a[0]) == null ? void 0 : i.id);
            }
            y(a);
          },
          [h, D == null ? void 0 : D.id],
        ),
        U = _(
          function () {
            return {
              addComponent: P,
              addOptinScreen: W,
              addScreen: B,
              areAllScreensValid: R,
              firstScreenId: E,
              removeComponent: N,
              removeScreen: q,
              screens: h,
              selectedScreen: D,
              selectedScreenId: I,
              selectedScreenIndex: x,
              setSelectedScreenId: T,
              surface: n,
              updateComponent: M,
              updatePrivacyPolicyURL: F,
              updateScreen: $,
              updateScreenButton: A,
              updateScreensOrder: O,
              updateScreenTitle: w,
              validationConfig: i,
              wabaID: a,
            };
          },
          [a, n, E, I, x, D, h, $, A, F, P, N, M, w, O, i, B, W, q, R],
        );
      return U;
    }
    ((l.WAMFlowsHSMEditorProvider = y), (l.useWhatsAppFlowTemplatesEditor = C));
  },
  98,
);
