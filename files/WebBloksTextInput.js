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
      var t,
        n,
        a,
        i,
        l,
        u = e.externalStyle,
        U = e.node,
        H = U.get(M),
        G = U.get(w),
        z = U.get(B),
        j = U.get(y),
        K = U.get(O),
        Q = U.get(A),
        X = U.get(F),
        Y = U.getSubNode(W),
        J = U.get(v),
        Z = U.get(N),
        ee = U.getSubNode(h),
        te = U.get(S),
        ne = U.get(R),
        re = U.get(L),
        oe = U.get(E),
        ae = U.get(k),
        ie = U.get(I),
        le = U.get(q),
        se = U.get(b),
        ue = U.getExpression(P),
        ce = U.getExpression($),
        de = U.getExpression(D),
        me = U.getExpression(x),
        pe = U.getExpression(g),
        _e = o("WebBloksBooleanUtils").isTrue(Z),
        fe = o("WebBloksBooleanUtils").isFalse(H),
        ge = o("WebBloksStyle").useStyle(U, u, void 0, b),
        he = ge.ref,
        ye = ge.style,
        Ce = ge.wrapper,
        be = ge.wrapperProps,
        ve = o("WebBloksTheme").useTheme().getTheme(),
        Se =
          (X != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(X),
            )) ||
          (Y && o("WebBloksUtils").getRGBColorWithTheme(Y, ve)),
        Re =
          ee != null
            ? o("WebBloksUtils").getRGBColorWithTheme(ee, ve)
            : "transparent",
        Le =
          j != null ? o("WebBloksUtils").getRGBColorWithTheme(j, ve) : "auto",
        Ee = o("WebBloksComponentContext").useWebBloksContext(),
        ke = Ee.bloksContext,
        Ie = Ee.executeCatch,
        Te = _(!1),
        De = _(null),
        xe = ke.initAssociatedObject_INTERNAL(
          U,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
          { ref: De, text: null },
        ),
        $e = c(
          function (e) {
            ke.updateAssociatedObject_INTERNAL(
              U,
              o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
              { text: e },
            );
          },
          [ke, U],
        ),
        Pe = o(
          "WebBloksTextInputMaskExtensionHandlerUtils",
        ).getTextInputMaskExtensionProps(U),
        Ne = o(
          "WebBloksTextInputDatePickerExtensionHandlerUtils",
        ).useWebBloksTextInputDateProps(U),
        Me = ke.objectSet.environment.fontFamilyMappings,
        we =
          (t = Pe == null ? void 0 : Pe.typeOverride) != null
            ? t
            : Ne == null
              ? void 0
              : Ne.typeOverride,
        Ae = r("useWebBloksTextInputFormatValue")(U, U.get(T), U.get(C)),
        Fe = o(
          "WebBloksBKSTextInputFormatterHandlerUtils",
        ).useBKSTextInputFormatter(U),
        Oe = Ne == null ? void 0 : Ne.onChange,
        Be = o("WebBloksBooleanUtils").isFalse(se) || be.disabled === !0,
        We = (n = Pe == null ? void 0 : Pe.maxLength) != null ? n : ie,
        qe = o("WebBloksTextInputHelpers").getInputTypeProps(
          we != null ? we : le,
        ),
        Ue = Ne != null && Ne.initialValue ? Ne.initialValue : G,
        Ve = xe.text,
        He = f((a = Ve != null ? Ve : Ue) != null ? a : ""),
        Ge = He[0],
        ze = He[1],
        je = f(Ue),
        Ke = je[0],
        Qe = je[1];
      (p(
        function () {
          Ue !== Ke && ((Te.current = !1), ze(Ue != null ? Ue : ""), Qe(Ue));
        },
        [U, Ke, Ue],
      ),
        p(
          function () {
            if (_e && he.current != null && Ge !== Ke) {
              he.current.style.height = "0px";
              var e = he.current.scrollHeight;
              he.current.style.height = e + "px";
            }
          },
          [Ke, he, _e, Ge],
        ));
      var Xe = c(
          function (e) {
            var t = !0;
            if (
              (pe != null &&
                (t = o("WebBloksBooleanUtils").isTrue(
                  o("WebBloksUtils").cast(Ie(U, pe, [Ge, e])),
                )),
              t)
            ) {
              Te.current = !1;
              var n = Ae(Ge, e);
              ((n = Fe(n)), $e(n), ze(n));
            }
          },
          [pe, Ie, Fe, Ae, U, Ge, $e],
        ),
        Ye = _(!0);
      d(
        function () {
          var e;
          (Ye.current && ((Ye.current = !1), Ve == null || Ue === Ve)) ||
            ((xe == null || (e = xe.ref) == null ? void 0 : e.current) ==
              null &&
              ke.updateAssociatedObject_INTERNAL(
                U,
                o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
                { ref: De },
              ),
            ue != null && Ie(U, ue, [U, ke]),
            Oe != null && Oe(Ge));
        },
        [Ge],
      );
      var Je = function (t) {
          (t.keyCode === o("WebBloksConstants").KEY_RETURN &&
            ce != null &&
            Ie(U, ce, [U, ke]),
            (t.keyCode === o("WebBloksConstants").KEY_RETURN ||
              t.keyCode === o("WebBloksConstants").KEY_SPACE) &&
              t.stopPropagation());
        },
        Ze = function (t) {
          t.keyCode === o("WebBloksConstants").KEY_SPACE && t.stopPropagation();
        },
        et =
          de != null
            ? function () {
                Ie(U, de, [U, ke]);
              }
            : void 0,
        tt = r("useQueuedBlurEventForWebBloks")(he, function () {
          me != null && Ie(U, me, [U, ke]);
        }),
        nt = me != null ? tt : void 0,
        rt = babelHelpers.extends(
          {},
          ye,
          o("WebBloksTextStyle").getTextStyle(z),
          {
            background: Re,
            color: Se != null ? Se : void 0,
            fontFamily:
              (i = o("WebBloksTextStyle").getFontFamily(J, Me)) != null
                ? i
                : void 0,
            fontSize: o("WebBloksUtils").toPx(K),
            lineHeight: o("WebBloksTextStyle").getLineHeight(),
            textAlign: o("WebBloksUtils").toHyphen(Q),
            caretColor: Le,
          },
        ),
        ot = babelHelpers.extends(
          {},
          be,
          qe,
          (l = Ne == null ? void 0 : Ne.minmaxProps) != null ? l : {},
          {
            autoCapitalize: ne,
            autoComplete: re,
            autoCorrect: oe,
            disabled: Be,
            maxLength: We,
            name: ae,
            onChange: function (t) {
              return Xe(t.target.value);
            },
            onKeyDown: Je,
            onKeyUp: Ze,
            onFocus: et,
            onBlur: nt,
            className: o("WebBloksStyle").classNames(
              o("WebBloksStyle").WebBloksStyles.container,
              V.base,
            ),
            placeholder: te,
            value: Ge,
            onClick: function (t) {
              t.stopPropagation();
            },
          },
        ),
        at = c(
          function (e) {
            Te.current ||
              (Xe(String(e)),
              (Te.current = !0),
              ue != null && Ie(U, ue, [U, ke]),
              typeof window.requestIdleCallback == "function"
                ? window.requestIdleCallback(function () {
                    Te.current = !1;
                  })
                : window.setTimeout(function () {
                    Te.current = !1;
                  }, 50));
          },
          [ke, Ie, U, Xe, ue],
        ),
        it = c(
          function () {
            var e = he.current;
            if (
              e instanceof HTMLInputElement ||
              e instanceof HTMLTextAreaElement
            )
              return { start: e.selectionStart, end: e.selectionEnd };
          },
          [he],
        ),
        lt = c(
          function () {
            var e = he.current;
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
          [he],
        ),
        st = c(
          function () {
            var e;
            return (e = he.current) == null ? void 0 : e.blur();
          },
          [he],
        );
      return (
        m(
          De,
          function () {
            return {
              onExternalUpdate: at,
              getSelection: it,
              requestFocus: lt,
              requestBlur: st,
            };
          },
          [it, at, st, lt],
        ),
        Ce(
          fe || _e
            ? s.jsx(
                "textarea",
                babelHelpers.extends({}, ot, _e ? { rows: 1 } : void 0, {
                  style: babelHelpers.extends({}, rt, { resize: "none" }),
                }),
              )
            : s.jsx(
                "input",
                babelHelpers.extends({ dir: "auto" }, ot, { style: rt }),
              ),
        )
      );
    }
    U.displayName = U.name + " [from " + i.id + "]";
    var V = o("WebBloksStyle").createStyles({
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
    l.default = U;
  },
  98,
);
