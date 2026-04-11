__d(
  "WAWebFlatList.react",
  [
    "WACustomError",
    "WAWebFocusTracer",
    "WAWebIdleTaskRunner",
    "WAWebKeyboardHotKeys.react",
    "WAWebListItem.react",
    "WAWebVelocityTransitionGroup",
    "clamp",
    "err",
    "gkx",
    "react",
    "stylex",
    "useWAWebAnimationFrames",
    "useWAWebDebouncedCallback",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.createRef,
      p = d.useEffect,
      _ = d.useImperativeHandle,
      f = d.useLayoutEffect,
      g = d.useRef,
      h = d.useState,
      y = {
        viewport: {
          position: "x1n2onr6",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        verticalListViewport: { marginTop: "x1y332i5", $$css: !0 },
        horizontalListViewport: { height: "x5yr21d", $$css: !0 },
      },
      C = 72,
      b = 72,
      v = 150,
      S = (function (e) {
        function t(t) {
          var n = r("gkx")("26258") ? "" : t.itemKey;
          return (
            e.call(this, "Unknown data encountered while rendering. " + n) ||
            this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    function R(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.role,
        l = a.itemRole,
        u = l === void 0 ? "listitem" : l,
        d = a.flatListController,
        S = a.direction,
        R = a.itemEnterAnimationsEnabled,
        T = R === void 0 ? !1 : R,
        D = a.onPointerEventsOff,
        x = a.onPointerEventsOn,
        $ = a.disablePointerEventsOnScroll,
        P = $ === void 0 ? !0 : $,
        N = a.reorderAnimationsEnabled,
        M = N === void 0 ? !0 : N,
        w = a.renderItem,
        A = a.defaultItemWidth,
        F = A === void 0 ? C : A,
        O = a.defaultItemHeight,
        B = O === void 0 ? b : O,
        W = a.extraItems,
        q = W === void 0 ? 5 : W,
        U = a.forceConsistentRenderCount,
        V = U === void 0 ? !0 : U,
        H = a.testid,
        G = a.className_DONOTUSE,
        z = a.containerXstyles,
        j = a.viewportXstyles,
        K = a.handleKeyboardNavigation,
        Q = K === void 0 ? !1 : K,
        X = a.focusableItemSelector,
        Y = a.initialActiveOptionId,
        J = a.tabIndex,
        Z = a.targetWindow,
        ee = L(a.data, S, F, B),
        te = ee.enhancedData,
        ne = ee.listLength,
        re = g(null),
        oe = g(!0),
        ae = g(null),
        ie = h(0),
        le = ie[0],
        se = ie[1],
        ue = h(0),
        ce = ue[0],
        de = ue[1],
        me = h(0),
        pe = me[0],
        _e = me[1],
        fe = h(0),
        ge = fe[0],
        he = fe[1],
        ye = h(0),
        Ce = ye[0],
        be = ye[1],
        ve = h(ne),
        Se = ve[0],
        Re = ve[1],
        Le = g(0),
        Ee = function (t) {
          var e = t != null ? t : {},
            n = e.scrollFromStart,
            o = n === void 0 ? pe : n,
            a = e.offsetFromStart,
            i = a === void 0 ? ge : a,
            l = e.bodyDimension,
            s = l === void 0 ? Ce : l;
          if (s === void 0 || i === void 0)
            throw r("err")(
              "FlatList:Computing FlatList without a valid Container",
            );
          for (var u = 0, c = 0; c < te.length; c++) {
            var d = te[c],
              m = E(d, S, F, B);
            if (i + d.offset + m > o) {
              u = c;
              break;
            }
          }
          var p = te.length - 1,
            _ = 0;
          te.length > 0 &&
            (_ = V ? Math.min(te[u].offset + s, ne) : Math.min(o + s, ne + i));
          for (var f = u; f < te.length; f++) {
            var g = te[f],
              h = E(g, S, F, B);
            if (i + g.offset + h >= _) {
              p = f;
              break;
            }
          }
          var y = q,
            C = q - u;
          C > 0 && (y += C);
          var b = q,
            v = p + q - te.length;
          return (
            v > 0 && (b += v),
            {
              firstIndex: Math.max(u - b, 0),
              lastIndex: Math.min(p + y, te.length - 1),
            }
          );
        },
        ke = r("useWAWebStableCallback")(function (e) {
          var t = re.current;
          if (t) {
            var n =
                S === "horizontal"
                  ? t.getBoundingClientRect().left - e.position.left
                  : t.getBoundingClientRect().top - e.position.top,
              r = Math.max(n, 0),
              o = S === "horizontal" ? e.width : e.height,
              a = Ee({ offsetFromStart: r, bodyDimension: o });
            (se(a.firstIndex), de(a.lastIndex), he(r), be(o));
          }
        }),
        Ie = h(!1),
        Te = Ie[0],
        De = Ie[1],
        xe = g(!1),
        $e = r("useWAWebDebouncedCallback")(function () {
          if (Te) return $e();
          (ae.current != null &&
            (o("WAWebIdleTaskRunner").UIBusyTasks.clearBusy(ae.current),
            (ae.current = null)),
            x == null || x());
          var e = re.current;
          (e && (e.style.pointerEvents = "auto"), (oe.current = !1));
        }, v),
        Pe = function () {
          if (
            ((ae.current = o("WAWebIdleTaskRunner").UIBusyTasks.setBusy(
              ae.current,
            )),
            !oe.current)
          ) {
            D == null || D();
            var e = re.current;
            (e && (e.style.pointerEvents = "none"), (oe.current = !0));
          }
        };
      r("useWAWebAnimationFrames")(
        function () {
          P === !0 && Pe();
          var e = d.getScrollFromStart();
          if (e == null)
            throw r("err")(
              "FlatList:ScrollEvent thrown while container is unmounted",
            );
          var t = Math.max(e, 0),
            n = Ee({ scrollFromStart: t });
          (se(n.firstIndex),
            de(n.lastIndex),
            _e(t),
            xe.current || (De(!1), P === !0 && $e()));
        },
        { active: Te, targetWindow: Z },
      );
      var Ne = function () {
        Te ? (xe.current = !0) : ((xe.current = !1), De(!0));
      };
      f(function () {
        return (
          d.registerList({ handleLayout: ke, handleScroll: Ne }),
          function () {
            d.unregisterList();
          }
        );
      }, []);
      var Me = Ee();
      (Me.firstIndex !== le && se(Me.firstIndex),
        Me.lastIndex !== ce && de(Me.lastIndex),
        ne !== Se && (!T || ne > Se) && Re(ne));
      var we = function (t, n) {
          if ((n === void 0 && (n = 0), t < 0 || t >= te.length))
            throw r("err")(
              "Flatlist: Invalid index for scrolling: " +
                t +
                ". Data length: " +
                te.length,
            );
          var e = te[t].offset;
          (e < pe - n || e > pe + Ce + n) && d.setScrollFromStart(e);
        },
        Ae = function () {
          var e;
          (e = re.current) == null || e.focus();
        };
      _(n, function () {
        return { scrollIntoViewIfNeeded: we, setFocus: Ae };
      });
      var Fe = S === "horizontal" ? { width: Se } : { height: Se },
        Oe = function () {
          Re(ne);
        },
        Be = g(new Map()),
        We = function (t, n, o) {
          var e = S === "horizontal" ? { width: k(n, F) } : { height: I(n, B) },
            i = m();
          return (
            a.handleKeyboardNavigation === !0 && Be.current.set(n.dataIndex, i),
            c.jsx(
              r("WAWebListItem.react"),
              {
                ref: i,
                data: babelHelpers.extends({}, n, e),
                animate: M,
                zIndex: te.length - o - 1,
                renderItem: w,
                listDirection: S,
                testid: void 0,
                role: u,
                onFocus: function () {
                  Le.current = n.dataIndex;
                },
                index: n.dataIndex,
              },
              t,
            )
          );
        },
        qe = te.slice(le, ce + 1),
        Ue = qe.map(function (e, t) {
          return We(e.itemKey, e, t);
        }),
        Ve = function (t) {
          var e;
          return (e = re.current) != null &&
            e.contains(document.activeElement) &&
            document.activeElement !== re.current
            ? Le.current + t
            : 0;
        },
        He = function (t, n) {
          if ((n === void 0 && (n = 0), typeof X == "string" && t != null)) {
            var e = Ge(),
              o = t.querySelectorAll(X);
            if (e === -1) return r("WAWebFocusTracer").focus(o[0]);
            var a = e + n;
            return r("WAWebFocusTracer").focus(
              o[r("clamp")(a, 0, o.length - 1)],
            );
          }
        },
        Ge = function (t) {
          var e, n;
          if (typeof X != "string") return -1;
          var r =
              t != null
                ? t
                : (e = Be.current.get(Le.current)) == null
                  ? void 0
                  : e.current,
            o =
              (n = r == null ? void 0 : r.querySelectorAll(X)) != null ? n : [],
            a = Array.from(o).findIndex(function (e) {
              return e === document.activeElement;
            });
          return a;
        },
        ze = function (t) {
          t.preventDefault();
          var e = Ve(-1),
            n = Be.current.get(e);
          n != null && n.current && He(n.current);
        },
        je = function (t) {
          t.preventDefault();
          var e = Ve(1),
            n = Be.current.get(e);
          n != null && n.current && He(n.current);
        },
        Ke = function (t, n) {
          t.preventDefault();
          var e = Be.current.get(Le.current);
          e != null && e.current && He(e.current, n);
        },
        Qe = function (t) {
          return Ke(t, -1);
        },
        Xe = function (t) {
          return Ke(t, 1);
        },
        Ye;
      (Q && S === "vertical"
        ? (Ye = { up: ze, down: je, right: Xe, left: Qe })
        : Q && S === "horizontal" && (Ye = { left: ze, right: je }),
        p(function () {
          var e = te.findIndex(function (e) {
            return e.itemKey === Y;
          });
          e != null && e > -1 && we(e);
        }, []));
      var Je;
      (G != null && (Je = G), z != null && (Je = (s || (s = r("stylex")))(z)));
      var Ze = -1;
      return (
        J != null ? (Ze = J) : Q === !0 && (Ze = 0),
        c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          tabIndex: Ze,
          handlers: Ye,
          className: Je,
          "data-testid": void 0,
          onFocus: function () {
            if (Q && re.current === document.activeElement) {
              var e = Be.current.get(Le.current);
              e != null && e.current && He(e.current);
            }
          },
          ref: re,
          children: c.jsx("div", {
            "aria-label": a["aria-label"],
            className: (s || (s = r("stylex")))(
              S === "horizontal" && y.horizontalListViewport,
              S === "vertical" && y.verticalListViewport,
              y.viewport,
              j,
            ),
            role: i,
            "aria-rowcount": a["aria-rowcount"],
            "aria-colcount": a["aria-colcount"],
            style: Fe,
            children: T
              ? c.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "fade",
                  onAnimationComplete: Oe,
                  children: Ue,
                })
              : Ue,
          }),
        })
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t, n, r) {
      var o = 0,
        a = 0,
        i = e.map(function (e) {
          var i = babelHelpers.extends({}, e, { offset: o, dataIndex: a }),
            l = E(e, t, n, r);
          return ((o += l), a++, i);
        });
      return { enhancedData: i, listLength: o };
    }
    function E(e, t, n, r) {
      return t === "horizontal" ? k(e, n) : I(e, r);
    }
    function k(e, t) {
      return e.width != null && e.width > 0 ? e.width : t;
    }
    function I(e, t) {
      return e.height != null && e.height > 0 ? e.height : t;
    }
    ((l.DEFAULT_ITEM_HEIGHT = b), (l.UnknownDataError = S), (l.FlatList = R));
  },
  98,
);
