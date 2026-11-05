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
        u,
        U = e.externalStyle,
        H = e.node,
        G = H.get(M),
        z = H.get(w),
        j = H.get(B),
        K = H.get(y),
        Q = H.get(O),
        X = H.get(A),
        Y = H.get(F),
        J = H.getSubNode(W),
        Z = H.get(v),
        ee = H.get(N),
        te = H.getSubNode(h),
        ne = H.get(S),
        re = H.get(R),
        oe = H.get(L),
        ae = H.get(E),
        ie = H.get(k),
        le = H.get(I),
        se = H.get(q),
        ue = H.get(b),
        ce = H.getExpression(P),
        de = H.getExpression($),
        me = H.getExpression(D),
        pe = H.getExpression(x),
        _e = H.getExpression(g),
        fe = o("WebBloksBooleanUtils").isTrue(ee),
        ge = o("WebBloksBooleanUtils").isFalse(G),
        he = o("WebBloksStyle").useStyle(H, U, void 0, b),
        ye = he.ref,
        Ce = he.style,
        be = he.wrapper,
        ve = he.wrapperProps,
        Se = o("WebBloksTheme").useTheme().getTheme(),
        Re =
          (Y != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(Y),
            )) ||
          (J && o("WebBloksUtils").getRGBColorWithTheme(J, Se)),
        Le =
          te != null
            ? o("WebBloksUtils").getRGBColorWithTheme(te, Se)
            : "transparent",
        Ee =
          K != null ? o("WebBloksUtils").getRGBColorWithTheme(K, Se) : "auto",
        ke = o("WebBloksComponentContext").useWebBloksContext(),
        Ie = ke.bloksContext,
        Te = ke.executeCatch,
        De = _(!1),
        xe = _(null),
        $e = Ie.initAssociatedObject_INTERNAL(
          H,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
          { ref: xe, text: null },
        ),
        Pe = c(
          function (e) {
            Ie.updateAssociatedObject_INTERNAL(
              H,
              o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
              { text: e },
            );
          },
          [Ie, H],
        ),
        Ne = o(
          "WebBloksTextInputMaskExtensionHandlerUtils",
        ).getTextInputMaskExtensionProps(H),
        Me = o(
          "WebBloksTextInputDatePickerExtensionHandlerUtils",
        ).useWebBloksTextInputDateProps(H),
        we = Ie.objectSet.environment.fontFamilyMappings,
        Ae =
          (t = Ne == null ? void 0 : Ne.typeOverride) != null
            ? t
            : Me == null
              ? void 0
              : Me.typeOverride,
        Fe = r("useWebBloksTextInputFormatValue")(H, H.get(T), H.get(C)),
        Oe = o(
          "WebBloksBKSTextInputFormatterHandlerUtils",
        ).useBKSTextInputFormatter(H),
        Be = Me == null ? void 0 : Me.onChange,
        We = o("WebBloksBooleanUtils").isFalse(ue) || ve.disabled === !0,
        qe = (n = Ne == null ? void 0 : Ne.maxLength) != null ? n : le,
        Ue = o("WebBloksTextInputHelpers").getInputTypeProps(
          Ae != null ? Ae : se,
        ),
        Ve = Me != null && Me.initialValue ? Me.initialValue : z,
        He = $e.text,
        Ge = f((a = He != null ? He : Ve) != null ? a : ""),
        ze = Ge[0],
        je = Ge[1],
        Ke = f(Ve),
        Qe = Ke[0],
        Xe = Ke[1];
      (p(
        function () {
          Ve !== Qe && ((De.current = !1), je(Ve != null ? Ve : ""), Xe(Ve));
        },
        [H, Qe, Ve],
      ),
        p(
          function () {
            if (fe && ye.current != null && ze !== Qe) {
              ye.current.style.height = "0px";
              var e = ye.current.scrollHeight;
              ye.current.style.height = e + "px";
            }
          },
          [Qe, ye, fe, ze],
        ));
      var Ye = c(
          function (e) {
            var t = !0;
            if (
              (_e != null &&
                (t = o("WebBloksBooleanUtils").isTrue(
                  o("WebBloksUtils").cast(Te(H, _e, [ze, e])),
                )),
              t)
            ) {
              De.current = !1;
              var n = Fe(ze, e);
              ((n = Oe(n)), Pe(n), je(n));
            }
          },
          [_e, Te, Oe, Fe, H, ze, Pe],
        ),
        Je = _(!0);
      d(
        function () {
          var e;
          (Je.current && ((Je.current = !1), He == null || Ve === He)) ||
            (($e == null || (e = $e.ref) == null ? void 0 : e.current) ==
              null &&
              Ie.updateAssociatedObject_INTERNAL(
                H,
                o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
                { ref: xe },
              ),
            ce != null && Te(H, ce, [H, Ie]),
            Be != null && Be(ze));
        },
        [ze],
      );
      var Ze = function (t) {
          (t.keyCode === o("WebBloksConstants").KEY_RETURN &&
            de != null &&
            Te(H, de, [H, Ie]),
            (t.keyCode === o("WebBloksConstants").KEY_RETURN ||
              t.keyCode === o("WebBloksConstants").KEY_SPACE) &&
              t.stopPropagation());
        },
        et = function (t) {
          t.keyCode === o("WebBloksConstants").KEY_SPACE && t.stopPropagation();
        },
        tt =
          me != null
            ? function () {
                Te(H, me, [H, Ie]);
              }
            : void 0,
        nt = r("useQueuedBlurEventForWebBloks")(ye, function () {
          pe != null && Te(H, pe, [H, Ie]);
        }),
        rt = pe != null ? nt : void 0,
        ot = babelHelpers.extends(
          {},
          Ce,
          o("WebBloksTextStyle").getTextStyle(j),
          {
            background: Le,
            color: Re != null ? Re : void 0,
            fontFamily:
              (i = o("WebBloksTextStyle").getFontFamily(Z, we)) != null
                ? i
                : void 0,
            fontVariationSettings:
              (l = o("WebBloksTextStyle").getFontVariationSettings(
                Z,
                we,
                Se,
                Ce,
              )) != null
                ? l
                : void 0,
            fontSize: o("WebBloksUtils").toPx(Q),
            lineHeight: o("WebBloksTextStyle").getLineHeight(),
            textAlign: o("WebBloksUtils").toHyphen(X),
            caretColor: Ee,
          },
        ),
        at = babelHelpers.extends(
          {},
          ve,
          Ue,
          (u = Me == null ? void 0 : Me.minmaxProps) != null ? u : {},
          {
            autoCapitalize: re,
            autoComplete: oe,
            autoCorrect: ae,
            disabled: We,
            maxLength: qe,
            name: ie,
            onChange: function (t) {
              return Ye(t.target.value);
            },
            onKeyDown: Ze,
            onKeyUp: et,
            onFocus: tt,
            onBlur: rt,
            className: o("WebBloksStyle").classNames(
              o("WebBloksStyle").WebBloksStyles.container,
              V.base,
            ),
            placeholder: ne,
            value: ze,
            onClick: function (t) {
              t.stopPropagation();
            },
          },
        ),
        it = c(
          function (e) {
            De.current ||
              (Ye(String(e)),
              (De.current = !0),
              ce != null && Te(H, ce, [H, Ie]),
              typeof window.requestIdleCallback == "function"
                ? window.requestIdleCallback(function () {
                    De.current = !1;
                  })
                : window.setTimeout(function () {
                    De.current = !1;
                  }, 50));
          },
          [Ie, Te, H, Ye, ce],
        ),
        lt = c(
          function () {
            var e = ye.current;
            if (
              e instanceof HTMLInputElement ||
              e instanceof HTMLTextAreaElement
            )
              return { start: e.selectionStart, end: e.selectionEnd };
          },
          [ye],
        ),
        st = c(
          function () {
            var e = ye.current;
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
          [ye],
        ),
        ut = c(
          function () {
            var e;
            return (e = ye.current) == null ? void 0 : e.blur();
          },
          [ye],
        );
      return (
        m(
          xe,
          function () {
            return {
              onExternalUpdate: it,
              getSelection: lt,
              requestFocus: st,
              requestBlur: ut,
            };
          },
          [lt, it, ut, st],
        ),
        be(
          ge || fe
            ? s.jsx(
                "textarea",
                babelHelpers.extends({}, at, fe ? { rows: 1 } : void 0, {
                  style: babelHelpers.extends({}, ot, { resize: "none" }),
                }),
              )
            : s.jsx(
                "input",
                babelHelpers.extends({ dir: "auto" }, at, { style: ot }),
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
