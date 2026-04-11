__d(
  "FocusTable.react",
  [
    "FocusManager",
    "FocusTableUtils",
    "Locale",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "focusKeyboardEventPropagation",
    "react",
    "setElementCanTab",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = u.useRef,
      p = 5;
    function _(e) {
      var t = s.unstable_Scope,
        n = s.createContext(null),
        r = s.createContext(null),
        a = s.createContext(null);
      function l(r) {
        var a = r.children,
          i = r.wrapX,
          l = r.wrapY,
          u = r.wrapXToNextLine,
          c = r.wrapYToNextColumn,
          f = c === void 0 ? !1 : c,
          g = r.tabScopeQuery,
          h = r.allowModifiers,
          y = r.pageJumpSize,
          C = y === void 0 ? p : y,
          b = r.onNavigate,
          v = r.disabled,
          S = r.withinCellTabScopeQuery,
          R = r.focusStaticCells,
          L = R === void 0 ? !1 : R,
          E = m(null),
          k = d(
            function () {
              return {
                scopeRef: E,
                wrapXToNextLine: u,
                wrapYToNextColumn: f,
                wrapX: i,
                wrapY: l,
                tabScopeQuery: g,
                allowModifiers: h,
                pageJumpSize: C,
                onNavigate: b,
                disabled: v,
                withinCellTabScopeQuery: S,
                focusStaticCells: L,
              };
            },
            [u, f, i, l, g, h, C, b, v, S, L],
          ),
          I = m(!1),
          T = o("ReactFocusEvent.react").useFocusWithin_DEPRECATED(
            E,
            d(
              function () {
                return {
                  onFocusWithin: function (n) {
                    I.current ||
                      ((I.current = !0),
                      E.current &&
                        e &&
                        (_(E.current, e, !1),
                        o("setElementCanTab").setElementCanTab(
                          n.target,
                          !0,
                          L,
                        )));
                  },
                };
              },
              [I, L],
            ),
          );
        return s.jsx(n.Provider, {
          value: k,
          children: s.jsx(t, { ref: T, children: a }),
        });
      }
      l.displayName = l.name + " [from " + i.id + "]";
      function u(e) {
        var n = e.children,
          o = m(null),
          a = d(function () {
            return { scopeRef: o };
          }, []);
        return s.jsx(r.Provider, {
          value: a,
          children: s.jsx(t, { ref: o, children: n }),
        });
      }
      u.displayName = u.name + " [from " + i.id + "]";
      function _(e, t, n) {
        var r = e.DO_NOT_USE_queryAllNodes(t);
        if (r != null)
          for (var a = 0; a < r.length; a++) {
            var i = r[a];
            o("setElementCanTab").setElementCanTab(i, n);
          }
      }
      function g(i) {
        var l,
          u = i.children,
          p = i.colSpan,
          g = i.tag,
          h = c(n),
          y = (l = c(r)) == null ? void 0 : l.scopeRef,
          C = m(null),
          b = m(!1),
          v = (h == null ? void 0 : h.withinCellTabScopeQuery) != null,
          S = h == null ? void 0 : h.focusStaticCells;
        o("ReactKeyboardEvent.react").useKeyboard(
          C,
          d(
            function () {
              return {
                onKeyDown: function (n) {
                  if (
                    !(h && h.disabled === !0) &&
                    !o(
                      "focusKeyboardEventPropagation",
                    ).hasFocusKeyboardEventPropagationStopped(n)
                  ) {
                    var t = C.current;
                    if (!(t === null || h === null) && y != null) {
                      var i = y.current;
                      if (i !== null) {
                        var l = n.key,
                          s =
                            v &&
                            o(
                              "FocusTableUtils",
                            ).getCellSingleInteractiveContentNode(t, v) == null,
                          u = b.current;
                        if (l === "Tab" && h) {
                          var c = h.tabScopeQuery,
                            d = h.scopeRef.current;
                          if (c && d) {
                            if (
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "TAB",
                                h,
                                n,
                                i,
                                t,
                                c,
                                r,
                                a,
                              )
                            )
                              return;
                            var m = h.withinCellTabScopeQuery;
                            u && m != null
                              ? n.shiftKey
                                ? o("FocusManager").focusPreviousContained(
                                    m,
                                    t,
                                    n,
                                    !0,
                                  )
                                : o("FocusManager").focusNextContained(
                                    m,
                                    t,
                                    n,
                                    !0,
                                  )
                              : (_(d, c, !1),
                                document.activeElement != null &&
                                  o("setElementCanTab").setElementCanTab(
                                    document.activeElement,
                                    !0,
                                    S,
                                  ));
                          }
                          return;
                        }
                        var p = n.ctrlKey || n.metaKey,
                          g = l;
                        switch (
                          (o("Locale").isRTL() &&
                            (l === "ArrowRight"
                              ? (g = "ArrowLeft")
                              : l === "ArrowLeft" && (g = "ArrowRight")),
                          g)
                        ) {
                          case "Home": {
                            if (
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "HOME",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              ) ||
                              u
                            )
                              return;
                            var R = o("FocusTableUtils").getRowCellsWithIndexes(
                                t,
                                i,
                                a,
                              ),
                              L = R[0],
                              E = R[1],
                              k = o("FocusTableUtils").getRowsWithIndex(
                                h,
                                i,
                                r,
                              ),
                              I = k[0],
                              T = k[1];
                            if (L !== null && I !== null) {
                              if (p) {
                                if (T !== 0 || E !== 0) {
                                  var D = I[0];
                                  o("FocusTableUtils").focusCellByColumnIndex(
                                    e,
                                    D,
                                    0,
                                    a,
                                    n,
                                  );
                                }
                              } else if (E !== 0) {
                                var x = I[T];
                                o("FocusTableUtils").focusCellByColumnIndex(
                                  e,
                                  x,
                                  0,
                                  a,
                                  n,
                                );
                              }
                            }
                            return;
                          }
                          case "End": {
                            if (
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "END",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              ) ||
                              u
                            )
                              return;
                            var $ = o("FocusTableUtils").getRowCellsWithIndexes(
                                t,
                                i,
                                a,
                              ),
                              P = $[0],
                              N = $[1],
                              M = o("FocusTableUtils").getRowsWithIndex(
                                h,
                                i,
                                r,
                              ),
                              w = M[0],
                              A = M[1];
                            if (P !== null && w !== null)
                              if (p) {
                                if (A !== w.length - 1 || N !== P.length - 1) {
                                  var F = w[w.length - 1],
                                    O =
                                      F.getChildContextValues(a).filter(
                                        Boolean,
                                      );
                                  O.length > 0 &&
                                    o("FocusTableUtils").focusCell(
                                      e,
                                      O[O.length - 1],
                                      n,
                                    );
                                }
                              } else
                                N !== P[P.length - 1] &&
                                  o("FocusTableUtils").focusCell(
                                    e,
                                    P[P.length - 1],
                                    n,
                                  );
                            return;
                          }
                          case "ArrowUp": {
                            if (
                              f(n, h) ||
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "PREV_ROW",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              ) ||
                              u
                            )
                              return;
                            var B = o("FocusTableUtils").getRowCellsWithIndexes(
                                t,
                                i,
                                a,
                              ),
                              W = B[0],
                              q = B[1],
                              U = B[2];
                            if (W !== null && h) {
                              var V = o("FocusTableUtils").getRowsWithIndex(
                                  h,
                                  i,
                                  r,
                                ),
                                H = V[0],
                                G = V[1];
                              if (H !== null)
                                if (G === 0) {
                                  var z = h.wrapY,
                                    j = h.wrapYToNextColumn;
                                  if (z === !0 && !p) {
                                    var K = H[H.length - 1];
                                    o("FocusTableUtils").focusCellByColumnIndex(
                                      e,
                                      K,
                                      U,
                                      a,
                                      n,
                                    );
                                  } else if (j === !0 && !p && q > 0) {
                                    var Q = U - 1,
                                      X = o(
                                        "FocusTableUtils",
                                      ).getLastRowNumInColumn(Q, H, a),
                                      Y = H[X - 1];
                                    o("FocusTableUtils").focusCellByColumnIndex(
                                      e,
                                      Y,
                                      Q,
                                      a,
                                      n,
                                    );
                                  }
                                } else if (p) {
                                  var J = H[0];
                                  o("FocusTableUtils").focusCellByColumnIndex(
                                    e,
                                    J,
                                    U,
                                    a,
                                    n,
                                  );
                                } else {
                                  var Z = H[G - 1];
                                  o("FocusTableUtils").focusCellByColumnIndex(
                                    e,
                                    Z,
                                    U,
                                    a,
                                    n,
                                  );
                                }
                            }
                            return;
                          }
                          case "PageUp": {
                            if (
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "PAGE_UP",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              ) ||
                              u
                            )
                              return;
                            var ee = o(
                                "FocusTableUtils",
                              ).getRowCellsWithIndexes(t, i, a),
                              te = ee[0],
                              ne = ee[2],
                              re = o("FocusTableUtils").getRowsWithIndex(
                                h,
                                i,
                                r,
                              ),
                              oe = re[0],
                              ae = re[1];
                            if (te !== null && oe !== null && h && ae !== 0) {
                              var ie = h.pageJumpSize,
                                le = oe[Math.max(0, ae - ie)];
                              o("FocusTableUtils").focusCellByColumnIndex(
                                e,
                                le,
                                ne,
                                a,
                                n,
                              );
                            }
                            return;
                          }
                          case "ArrowDown": {
                            if (
                              f(n, h) ||
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "NEXT_ROW",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              ) ||
                              u
                            )
                              return;
                            var se = o(
                                "FocusTableUtils",
                              ).getRowCellsWithIndexes(t, i, a),
                              ue = se[0],
                              ce = se[2],
                              de = o("FocusTableUtils").getRowsWithIndex(
                                h,
                                i,
                                r,
                              ),
                              me = de[0],
                              pe = de[1];
                            if (ue !== null && me !== null && h && pe !== -1)
                              if (pe === me.length - 1) {
                                var _e = h.wrapY,
                                  fe = h.wrapYToNextColumn;
                                if (_e === !0 && !p) {
                                  var ge = me[0];
                                  o("FocusTableUtils").focusCellByColumnIndex(
                                    e,
                                    ge,
                                    ce,
                                    a,
                                    n,
                                  );
                                } else if (fe === !0 && !p) {
                                  var he = ce + 1,
                                    ye = o(
                                      "FocusTableUtils",
                                    ).getFirstRowIndexInColumn(me, he, a);
                                  if (ye !== -1) {
                                    var Ce = me[ye];
                                    o("FocusTableUtils").focusCellByColumnIndex(
                                      e,
                                      Ce,
                                      he,
                                      a,
                                      n,
                                    );
                                  }
                                }
                              } else if (p) {
                                var be = me[me.length - 1];
                                o("FocusTableUtils").focusCellByColumnIndex(
                                  e,
                                  be,
                                  ce,
                                  a,
                                  n,
                                );
                              } else {
                                var ve = me[pe + 1];
                                o("FocusTableUtils").focusCellByColumnIndex(
                                  e,
                                  ve,
                                  ce,
                                  a,
                                  n,
                                );
                              }
                            return;
                          }
                          case "PageDown": {
                            if (
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "PAGE_DOWN",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              ) ||
                              u
                            )
                              return;
                            var Se = o(
                                "FocusTableUtils",
                              ).getRowCellsWithIndexes(t, i, a),
                              Re = Se[0],
                              Le = Se[2],
                              Ee = o("FocusTableUtils").getRowsWithIndex(
                                h,
                                i,
                                r,
                              ),
                              ke = Ee[0],
                              Ie = Ee[1];
                            if (
                              Re !== null &&
                              ke !== null &&
                              h &&
                              Ie !== ke.length - 1
                            ) {
                              var Te = h.pageJumpSize,
                                De = ke[Math.min(ke.length - 1, Ie + Te)];
                              o("FocusTableUtils").focusCellByColumnIndex(
                                e,
                                De,
                                Le,
                                a,
                                n,
                              );
                            }
                            return;
                          }
                          case "ArrowLeft": {
                            if (
                              f(n, h) ||
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "PREV_CELL",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              ) ||
                              u
                            )
                              return;
                            var xe = o(
                                "FocusTableUtils",
                              ).getRowCellsWithIndexes(t, i, a),
                              $e = xe[0],
                              Pe = xe[1],
                              Ne = o("FocusTableUtils").getRowsWithIndex(
                                h,
                                i,
                                r,
                              ),
                              Me = Ne[0],
                              we = Ne[1];
                            if ($e !== null && Me !== null && h) {
                              if (Pe > 0)
                                o("FocusTableUtils").focusCell(
                                  e,
                                  $e[Pe - 1],
                                  n,
                                );
                              else if (Pe === 0) {
                                var Ae = h.wrapX,
                                  Fe = h.wrapXToNextLine;
                                Ae === !0
                                  ? o("FocusTableUtils").focusCell(
                                      e,
                                      $e[$e.length - 1],
                                      n,
                                    )
                                  : Fe === !0 &&
                                    Me[we - 1] &&
                                    o("FocusTableUtils").focusCellByColumnIndex(
                                      e,
                                      Me[we - 1],
                                      o("FocusTableUtils").getTotalSpan(
                                        Me[we - 1],
                                        a,
                                      ),
                                      a,
                                      n,
                                    );
                              }
                            }
                            return;
                          }
                          case "ArrowRight": {
                            if (
                              f(n, h) ||
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "NEXT_CELL",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              ) ||
                              u
                            )
                              return;
                            var Oe = o(
                                "FocusTableUtils",
                              ).getRowCellsWithIndexes(t, i, a),
                              Be = Oe[0],
                              We = Oe[1],
                              qe = o("FocusTableUtils").getRowsWithIndex(
                                h,
                                i,
                                r,
                              ),
                              Ue = qe[0],
                              Ve = qe[1];
                            if (Be !== null && Ue !== null && h && We !== -1)
                              if (We === Be.length - 1) {
                                var He = h.wrapX,
                                  Ge = h.wrapXToNextLine;
                                He === !0
                                  ? o("FocusTableUtils").focusCell(e, Be[0], n)
                                  : Ge === !0 &&
                                    Ue[Ve + 1] &&
                                    o("FocusTableUtils").focusCellByColumnIndex(
                                      e,
                                      Ue[Ve + 1],
                                      0,
                                      a,
                                      n,
                                    );
                              } else
                                o("FocusTableUtils").focusCell(
                                  e,
                                  Be[We + 1],
                                  n,
                                );
                            return;
                          }
                          case "Enter": {
                            if (
                              !s ||
                              u ||
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "ENTER",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              )
                            )
                              return;
                            var ze =
                              h == null ? void 0 : h.withinCellTabScopeQuery;
                            if (ze) {
                              var je = t.DO_NOT_USE_queryFirstNode(ze);
                              je != null &&
                                ((b.current = !0),
                                _(t, ze, !0),
                                o("FocusManager").focusElement(je));
                            }
                            return;
                          }
                          case "Escape": {
                            if (
                              !s ||
                              !u ||
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "ESC",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              )
                            )
                              return;
                            var Ke = h == null ? void 0 : h.tabScopeQuery;
                            if (Ke) {
                              b.current = !1;
                              var Qe = t.DO_NOT_USE_queryAllNodes(Ke);
                              if (Qe !== null)
                                for (var Xe = 0; Xe < Qe.length; Xe++) {
                                  var Ye = Qe[Xe];
                                  o("setElementCanTab").setElementCanTab(
                                    Ye,
                                    !1,
                                    S,
                                  );
                                }
                              o("FocusTableUtils").focusCell(
                                Ke,
                                { scopeRef: C },
                                n,
                              );
                            }
                            return;
                          }
                          default:
                            o("FocusTableUtils").isPrintableCharacter(l) &&
                              o("FocusTableUtils").handleOnNavigateBehavior(
                                "PRINT_CHAR",
                                h,
                                n,
                                i,
                                t,
                                e,
                                r,
                                a,
                              );
                        }
                      }
                    }
                  }
                },
              };
            },
            [y, h, v],
          ),
        );
        var R = d(
            function () {
              return {
                scopeRef: C,
                colSpan: p,
                tag: g,
                allowWithinCellNavigation: v,
                focusStaticCells: S,
              };
            },
            [p, v, g, S],
          ),
          L = h == null ? void 0 : h.tabScopeQuery,
          E = o("ReactFocusEvent.react").useFocusWithin_DEPRECATED(
            C,
            d(
              function () {
                return {
                  onFocusWithin: function (n) {
                    if (e != null) {
                      var t,
                        r =
                          (t = C.current) == null
                            ? void 0
                            : t.DO_NOT_USE_queryFirstNode(e),
                        a = n.target === r;
                      if (a && r && !o("setElementCanTab").canElementTab(r)) {
                        var i = h == null ? void 0 : h.scopeRef.current;
                        (i && _(i, e, !1),
                          o("setElementCanTab").setElementCanTab(r, !0, S));
                      }
                    }
                    if (L != null) {
                      var l,
                        s =
                          (l = C.current) == null
                            ? void 0
                            : l.DO_NOT_USE_queryFirstNode(L),
                        u = n.target === s,
                        c = R.allowWithinCellNavigation === !0;
                      (u && c && o("FocusTableUtils").focusCell(L, R),
                        s != null &&
                          !u &&
                          c &&
                          n.target instanceof HTMLElement &&
                          !o("FocusTableUtils").isArrowKeyLessOperationElement(
                            n.target,
                          ) &&
                          (b.current = !0));
                    }
                  },
                  onBlurWithin: function () {
                    b.current = !1;
                  },
                };
              },
              [L, R, h == null ? void 0 : h.scopeRef],
            ),
          );
        return s.jsx(a.Provider, {
          value: R,
          children: s.jsx(t, { ref: E, children: u }),
        });
      }
      return ((g.displayName = g.name + " [from " + i.id + "]"), [l, u, g]);
    }
    function f(e, t) {
      if (o("FocusTableUtils").hasModifierKey(e) && t) {
        var n = t.allowModifiers;
        if (n !== !0) return !0;
      }
    }
    l.createFocusTable = _;
  },
  98,
);
