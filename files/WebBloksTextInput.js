__d(
  "WebBloksTextInput",
  [
    "WebBloksBKSTextInputFormatterHandlerUtils",
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksTextInputDatePickerExtensionHandlerUtils",
    "WebBloksTextInputHelpers",
    "WebBloksTextInputMaskExtensionHandlerUtils",
    "WebBloksTextStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "useQueuedBlurEventForWebBloks",
    "useWebBloksTextInputFormatValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useImperativeHandle,
      p = u.useLayoutEffect,
      _ = u.useRef,
      f = u.useState,
      g = o("WebBloksModel").defineWebBloksAttributeKey(">"),
      h = o("WebBloksModel").defineWebBloksAttributeKey("\x8C"),
      y = o("WebBloksModel").defineWebBloksAttributeKey("A"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("S"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("J"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      S = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      R = o("WebBloksModel").defineWebBloksAttributeKey("_"),
      L = o("WebBloksModel").defineWebBloksAttributeKey("`"),
      E = o("WebBloksModel").defineWebBloksAttributeKey("a"),
      k = o("WebBloksModel").defineWebBloksAttributeKey("b"),
      I = o("WebBloksModel").defineWebBloksAttributeKey("("),
      T = o("WebBloksModel").defineWebBloksAttributeKey("B"),
      D = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      x = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      $ = o("WebBloksModel").defineWebBloksAttributeKey("."),
      P = o("WebBloksModel").defineWebBloksAttributeKey("0"),
      N = o("WebBloksModel").defineWebBloksAttributeKey("?"),
      M = o("WebBloksModel").defineWebBloksAttributeKey("1"),
      w = o("WebBloksModel").defineWebBloksAttributeKey("2"),
      A = o("WebBloksModel").defineWebBloksAttributeKey("3"),
      F = o("WebBloksModel").defineWebBloksAttributeKey("4"),
      O = o("WebBloksModel").defineWebBloksAttributeKey("5"),
      B = o("WebBloksModel").defineWebBloksAttributeKey("6"),
      W = o("WebBloksModel").defineWebBloksAttributeKey("7"),
      q = o("WebBloksModel").defineWebBloksAttributeKey("8");
    function U(e) {
      return e.replace(/[\r\n]+/g, "");
    }
    function V(e) {
      var t = e.value;
      if (/[\r\n]/.test(t)) {
        var n = e.selectionEnd,
          r = e.selectionStart;
        ((e.value = U(t)),
          e.setSelectionRange(
            U(t.slice(0, r)).length,
            U(t.slice(0, n)).length,
          ));
      }
    }
    function H(e) {
      var t,
        n,
        a,
        i,
        l,
        u,
        H = e.externalStyle,
        z = e.node,
        j = z.get(M),
        K = z.get(w),
        Q = z.get(B),
        X = z.get(y),
        Y = z.get(O),
        J = z.get(A),
        Z = z.get(F),
        ee = z.getSubNode(W),
        te = z.get(v),
        ne = z.get(N),
        re = z.getSubNode(h),
        oe = z.get(S),
        ae = z.get(R),
        ie = z.get(L),
        le = z.get(E),
        se = z.get(k),
        ue = z.get(I),
        ce = z.get(q),
        de = z.get(b),
        me = z.getExpression(P),
        pe = z.getExpression($),
        _e = z.getExpression(D),
        fe = z.getExpression(x),
        ge = z.getExpression(g),
        he = o("WebBloksBooleanUtils").isTrue(ne),
        ye = o("WebBloksBooleanUtils").isFalse(j),
        Ce = he && o("WebBloksBooleanUtils").isTrue(j),
        be = o("WebBloksStyle").useStyle(z, H, void 0, b),
        ve = be.ref,
        Se = be.style,
        Re = be.wrapper,
        Le = be.wrapperProps,
        Ee = o("WebBloksTheme").useTheme().getTheme(),
        ke =
          (Z != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(Z),
            )) ||
          (ee && o("WebBloksUtils").getRGBColorWithTheme(ee, Ee)),
        Ie =
          re != null
            ? o("WebBloksUtils").getRGBColorWithTheme(re, Ee)
            : "transparent",
        Te =
          X != null ? o("WebBloksUtils").getRGBColorWithTheme(X, Ee) : "auto",
        De = o("WebBloksComponentContext").useWebBloksContext(),
        xe = De.bloksContext,
        $e = De.executeCatch,
        Pe = _(!1),
        Ne = _(null),
        Me = xe.initAssociatedObject_INTERNAL(
          z,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
          { ref: Ne, text: null },
        );
      p(
        function () {
          xe.updateAssociatedObject_INTERNAL(
            z,
            o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
            { ref: Ne },
          );
        },
        [xe, z],
      );
      var we = c(
          function (e) {
            xe.updateAssociatedObject_INTERNAL(
              z,
              o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
              { text: e },
            );
          },
          [xe, z],
        ),
        Ae = o(
          "WebBloksTextInputMaskExtensionHandlerUtils",
        ).getTextInputMaskExtensionProps(z),
        Fe = o(
          "WebBloksTextInputDatePickerExtensionHandlerUtils",
        ).useWebBloksTextInputDateProps(z),
        Oe = xe.objectSet.environment.fontFamilyMappings,
        Be =
          (t = Ae == null ? void 0 : Ae.typeOverride) != null
            ? t
            : Fe == null
              ? void 0
              : Fe.typeOverride,
        We = r("useWebBloksTextInputFormatValue")(z, z.get(T), z.get(C)),
        qe = o(
          "WebBloksBKSTextInputFormatterHandlerUtils",
        ).useBKSTextInputFormatter(z),
        Ue = Fe == null ? void 0 : Fe.onChange,
        Ve = o("WebBloksBooleanUtils").isFalse(de) || Le.disabled === !0,
        He = (n = Ae == null ? void 0 : Ae.maxLength) != null ? n : ue,
        Ge = o("WebBloksTextInputHelpers").getInputTypeProps(
          Be != null ? Be : ce,
        ),
        ze = Fe != null && Fe.initialValue ? Fe.initialValue : K,
        je = Me.text,
        Ke = f((a = je != null ? je : ze) != null ? a : ""),
        Qe = Ke[0],
        Xe = Ke[1],
        Ye = f(ze),
        Je = Ye[0],
        Ze = Ye[1],
        et = _(null);
      (p(
        function () {
          ze !== Je &&
            (ze !== et.current &&
              ((Pe.current = !1),
              we(ze != null ? ze : ""),
              Xe(ze != null ? ze : "")),
            Ze(ze));
        },
        [z, Je, ze, we],
      ),
        p(
          function () {
            if (he && ve.current != null && Qe !== Je) {
              ve.current.style.height = "0px";
              var e = ve.current.scrollHeight;
              ve.current.style.height = e + "px";
            }
          },
          [Je, ve, he, Qe],
        ));
      var tt = c(
          function (e) {
            var t = Ce ? U(e) : e,
              n = !0;
            if (
              (ge != null &&
                (n = o("WebBloksBooleanUtils").isTrue(
                  o("WebBloksUtils").cast($e(z, ge, [Qe, t])),
                )),
              n)
            ) {
              Pe.current = !1;
              var r = We(Qe, t);
              ((r = qe(r)), we(r), Xe(r));
            }
          },
          [ge, $e, qe, We, Ce, z, Qe, we],
        ),
        nt = _(!0);
      d(
        function () {
          var e,
            t = (e = Me.text) != null ? e : Qe;
          if (nt.current && ((nt.current = !1), je == null || ze === je)) {
            et.current = t;
            return;
          }
          t !== et.current &&
            ((et.current = t),
            me != null && $e(z, me, [z, xe]),
            Ue != null && Ue(Qe));
        },
        [Qe],
      );
      var rt = function (t) {
          (t.keyCode === o("WebBloksConstants").KEY_RETURN &&
            (pe != null && $e(z, pe, [z, xe]), Ce && t.preventDefault()),
            (t.keyCode === o("WebBloksConstants").KEY_RETURN ||
              t.keyCode === o("WebBloksConstants").KEY_SPACE) &&
              t.stopPropagation());
        },
        ot = function (t) {
          t.keyCode === o("WebBloksConstants").KEY_SPACE && t.stopPropagation();
        },
        at =
          _e != null
            ? function () {
                $e(z, _e, [z, xe]);
              }
            : void 0,
        it = r("useQueuedBlurEventForWebBloks")(ve, function () {
          fe != null && $e(z, fe, [z, xe]);
        }),
        lt = fe != null ? it : void 0,
        st = babelHelpers.extends(
          {},
          Se,
          o("WebBloksTextStyle").getTextStyle(Q),
          {
            background: Ie,
            color: ke != null ? ke : void 0,
            fontFamily:
              (i = o("WebBloksTextStyle").getFontFamily(te, Oe)) != null
                ? i
                : void 0,
            fontVariationSettings:
              (l = o("WebBloksTextStyle").getFontVariationSettings(
                te,
                Oe,
                Ee,
                Se,
              )) != null
                ? l
                : void 0,
            fontSize: o("WebBloksUtils").toPx(Y),
            lineHeight: o("WebBloksTextStyle").getLineHeight(),
            outline: "none",
            textAlign: o("WebBloksUtils").toHyphen(J),
            caretColor: Te,
          },
        ),
        ut = o("WebBloksStyle").classNames(
          o("WebBloksStyle").WebBloksStyles.container,
          G.base,
        ),
        ct = babelHelpers.extends(
          {},
          Le,
          Ge,
          (u = Fe == null ? void 0 : Fe.minmaxProps) != null ? u : {},
          {
            autoCapitalize: ae,
            autoComplete: ie,
            autoCorrect: le,
            disabled: Ve,
            maxLength: He,
            name: se,
            onChange: function (t) {
              var e = t.target;
              (Ce && e instanceof HTMLTextAreaElement && V(e), tt(e.value));
            },
            onKeyDown: rt,
            onKeyUp: ot,
            onFocus: at,
            onBlur: lt,
            placeholder: oe,
            value: Qe,
            onClick: function (t) {
              t.stopPropagation();
            },
          },
        ),
        dt = c(
          function (e) {
            Pe.current ||
              (tt(String(e)),
              (Pe.current = !0),
              me != null && $e(z, me, [z, xe]),
              typeof window.requestIdleCallback == "function"
                ? window.requestIdleCallback(function () {
                    Pe.current = !1;
                  })
                : window.setTimeout(function () {
                    Pe.current = !1;
                  }, 50));
          },
          [xe, $e, z, tt, me],
        ),
        mt = c(
          function () {
            var e = ve.current;
            if (
              e instanceof HTMLInputElement ||
              e instanceof HTMLTextAreaElement
            )
              return { start: e.selectionStart, end: e.selectionEnd };
          },
          [ve],
        ),
        pt = c(
          function () {
            var e = ve.current;
            if (
              e instanceof HTMLInputElement &&
              e.selectionStart != null &&
              e.selectionStart !== 0 &&
              e.selectionEnd != null &&
              e.selectionEnd !== 0
            ) {
              var t = e.selectionStart,
                n = e.selectionEnd;
              window.requestAnimationFrame(function () {
                e.setSelectionRange(t, n);
              });
            }
            e == null || e.focus();
          },
          [ve],
        ),
        _t = c(
          function () {
            var e;
            return (e = ve.current) == null ? void 0 : e.blur();
          },
          [ve],
        );
      return (
        m(
          Ne,
          function () {
            return {
              onExternalUpdate: dt,
              getSelection: mt,
              requestFocus: pt,
              requestBlur: _t,
            };
          },
          [mt, dt, _t, pt],
        ),
        Re(
          ye || he
            ? s.jsx(
                "textarea",
                babelHelpers.extends({}, ct, he ? { rows: 1 } : void 0, {
                  className: ut,
                  style: babelHelpers.extends(
                    {},
                    st,
                    { resize: "none" },
                    Ce ? { overflow: "hidden", whiteSpace: "pre" } : void 0,
                  ),
                }),
              )
            : s.jsx(
                "input",
                babelHelpers.extends({ dir: "auto" }, ct, {
                  className: ut,
                  style: st,
                }),
              ),
        )
      );
    }
    H.displayName = H.name + " [from " + i.id + "]";
    var G = o("WebBloksStyle").createStyles({
      base: function (t) {
        var e;
        return (
          (e = {}),
          (e[t] = {
            padding: 0,
            margin: 0,
            border: "none",
            boxSizing: "border-box",
            outline: "none",
            width: "100%",
          }),
          (e[t + "::-webkit-date-and-time-value"] = { textAlign: "inherit" }),
          e
        );
      },
    });
    l.default = H;
  },
  98,
);
