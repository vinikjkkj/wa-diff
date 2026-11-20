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
        he = fe && o("WebBloksBooleanUtils").isTrue(G),
        ye = o("WebBloksStyle").useStyle(H, U, void 0, b),
        Ce = ye.ref,
        be = ye.style,
        ve = ye.wrapper,
        Se = ye.wrapperProps,
        Re = o("WebBloksTheme").useTheme().getTheme(),
        Le =
          (Y != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(Y),
            )) ||
          (J && o("WebBloksUtils").getRGBColorWithTheme(J, Re)),
        Ee =
          te != null
            ? o("WebBloksUtils").getRGBColorWithTheme(te, Re)
            : "transparent",
        ke =
          K != null ? o("WebBloksUtils").getRGBColorWithTheme(K, Re) : "auto",
        Ie = o("WebBloksComponentContext").useWebBloksContext(),
        Te = Ie.bloksContext,
        De = Ie.executeCatch,
        xe = _(!1),
        $e = _(null),
        Pe = Te.initAssociatedObject_INTERNAL(
          H,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
          { ref: $e, text: null },
        );
      p(
        function () {
          Te.updateAssociatedObject_INTERNAL(
            H,
            o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
            { ref: $e },
          );
        },
        [Te, H],
      );
      var Ne = c(
          function (e) {
            Te.updateAssociatedObject_INTERNAL(
              H,
              o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
              { text: e },
            );
          },
          [Te, H],
        ),
        Me = o(
          "WebBloksTextInputMaskExtensionHandlerUtils",
        ).getTextInputMaskExtensionProps(H),
        we = o(
          "WebBloksTextInputDatePickerExtensionHandlerUtils",
        ).useWebBloksTextInputDateProps(H),
        Ae = Te.objectSet.environment.fontFamilyMappings,
        Fe =
          (t = Me == null ? void 0 : Me.typeOverride) != null
            ? t
            : we == null
              ? void 0
              : we.typeOverride,
        Oe = r("useWebBloksTextInputFormatValue")(H, H.get(T), H.get(C)),
        Be = o(
          "WebBloksBKSTextInputFormatterHandlerUtils",
        ).useBKSTextInputFormatter(H),
        We = we == null ? void 0 : we.onChange,
        qe = o("WebBloksBooleanUtils").isFalse(ue) || Se.disabled === !0,
        Ue = (n = Me == null ? void 0 : Me.maxLength) != null ? n : le,
        Ve = o("WebBloksTextInputHelpers").getInputTypeProps(
          Fe != null ? Fe : se,
        ),
        He = we != null && we.initialValue ? we.initialValue : z,
        Ge = Pe.text,
        ze = f((a = Ge != null ? Ge : He) != null ? a : ""),
        je = ze[0],
        Ke = ze[1],
        Qe = f(He),
        Xe = Qe[0],
        Ye = Qe[1],
        Je = _(null);
      (p(
        function () {
          He !== Xe &&
            (He !== Je.current &&
              ((xe.current = !1),
              Ne(He != null ? He : ""),
              Ke(He != null ? He : "")),
            Ye(He));
        },
        [H, Xe, He, Ne],
      ),
        p(
          function () {
            if (fe && Ce.current != null && je !== Xe) {
              Ce.current.style.height = "0px";
              var e = Ce.current.scrollHeight;
              Ce.current.style.height = e + "px";
            }
          },
          [Xe, Ce, fe, je],
        ));
      var Ze = c(
          function (e) {
            var t = !0;
            if (
              (_e != null &&
                (t = o("WebBloksBooleanUtils").isTrue(
                  o("WebBloksUtils").cast(De(H, _e, [je, e])),
                )),
              t)
            ) {
              xe.current = !1;
              var n = Oe(je, e);
              ((n = Be(n)), Ne(n), Ke(n));
            }
          },
          [_e, De, Be, Oe, H, je, Ne],
        ),
        et = _(!0);
      d(
        function () {
          var e,
            t = (e = Pe.text) != null ? e : je;
          if (et.current && ((et.current = !1), Ge == null || He === Ge)) {
            Je.current = t;
            return;
          }
          t !== Je.current &&
            ((Je.current = t),
            ce != null && De(H, ce, [H, Te]),
            We != null && We(je));
        },
        [je],
      );
      var tt = function (t) {
          (t.keyCode === o("WebBloksConstants").KEY_RETURN &&
            de != null &&
            De(H, de, [H, Te]),
            (t.keyCode === o("WebBloksConstants").KEY_RETURN ||
              t.keyCode === o("WebBloksConstants").KEY_SPACE) &&
              t.stopPropagation());
        },
        nt = function (t) {
          t.keyCode === o("WebBloksConstants").KEY_SPACE && t.stopPropagation();
        },
        rt =
          me != null
            ? function () {
                De(H, me, [H, Te]);
              }
            : void 0,
        ot = r("useQueuedBlurEventForWebBloks")(Ce, function () {
          pe != null && De(H, pe, [H, Te]);
        }),
        at = pe != null ? ot : void 0,
        it = babelHelpers.extends(
          {},
          be,
          o("WebBloksTextStyle").getTextStyle(j),
          {
            background: Ee,
            color: Le != null ? Le : void 0,
            fontFamily:
              (i = o("WebBloksTextStyle").getFontFamily(Z, Ae)) != null
                ? i
                : void 0,
            fontVariationSettings:
              (l = o("WebBloksTextStyle").getFontVariationSettings(
                Z,
                Ae,
                Re,
                be,
              )) != null
                ? l
                : void 0,
            fontSize: o("WebBloksUtils").toPx(Q),
            lineHeight: o("WebBloksTextStyle").getLineHeight(),
            outline: "none",
            textAlign: o("WebBloksUtils").toHyphen(X),
            caretColor: ke,
          },
        ),
        lt = o("WebBloksStyle").classNames(
          o("WebBloksStyle").WebBloksStyles.container,
          V.base,
        ),
        st = babelHelpers.extends(
          {},
          Se,
          Ve,
          (u = we == null ? void 0 : we.minmaxProps) != null ? u : {},
          {
            autoCapitalize: re,
            autoComplete: oe,
            autoCorrect: ae,
            disabled: qe,
            maxLength: Ue,
            name: ie,
            onChange: function (t) {
              return Ze(t.target.value);
            },
            onKeyDown: tt,
            onKeyUp: nt,
            onFocus: rt,
            onBlur: at,
            placeholder: ne,
            value: je,
            onClick: function (t) {
              t.stopPropagation();
            },
          },
        ),
        ut = c(
          function (e) {
            xe.current ||
              (Ze(String(e)),
              (xe.current = !0),
              ce != null && De(H, ce, [H, Te]),
              typeof window.requestIdleCallback == "function"
                ? window.requestIdleCallback(function () {
                    xe.current = !1;
                  })
                : window.setTimeout(function () {
                    xe.current = !1;
                  }, 50));
          },
          [Te, De, H, Ze, ce],
        ),
        ct = c(
          function () {
            var e = Ce.current;
            if (
              e instanceof HTMLInputElement ||
              e instanceof HTMLTextAreaElement
            )
              return { start: e.selectionStart, end: e.selectionEnd };
          },
          [Ce],
        ),
        dt = c(
          function () {
            var e = Ce.current;
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
          [Ce],
        ),
        mt = c(
          function () {
            var e;
            return (e = Ce.current) == null ? void 0 : e.blur();
          },
          [Ce],
        );
      return (
        m(
          $e,
          function () {
            return {
              onExternalUpdate: ut,
              getSelection: ct,
              requestFocus: dt,
              requestBlur: mt,
            };
          },
          [ct, ut, mt, dt],
        ),
        ve(
          ge || fe
            ? s.jsx(
                "textarea",
                babelHelpers.extends({}, st, fe ? { rows: 1 } : void 0, {
                  className: lt,
                  style: babelHelpers.extends(
                    {},
                    it,
                    { resize: "none" },
                    he ? { overflow: "hidden", whiteSpace: "pre" } : void 0,
                  ),
                }),
              )
            : s.jsx(
                "input",
                babelHelpers.extends({ dir: "auto" }, st, {
                  className: lt,
                  style: it,
                }),
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
