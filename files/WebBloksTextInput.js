__d(
  "WebBloksTextInput",
  [
    "WebBloksBKSTextInputFormatterHandlerUtils",
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksConstants",
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
      g = ">",
      h = "\x8C",
      y = "A",
      C = "S",
      b = "J",
      v = "#",
      S = "$",
      R = "_",
      L = "`",
      E = "a",
      k = "b",
      I = "(",
      T = "B",
      D = "*",
      x = "-",
      $ = ".",
      P = "0",
      N = "?",
      M = "1",
      w = "2",
      A = "3",
      F = "4",
      O = "5",
      B = "6",
      W = "7",
      q = "8";
    function U(e) {
      var t,
        n,
        a,
        i,
        l = e.externalStyle,
        u = e.node,
        U = u.get(M),
        H = u.get(w),
        G = u.get(B),
        z = u.get(y),
        j = u.get(O),
        K = u.get(A),
        Q = u.get(F),
        X = u.getSubNode(W),
        Y = u.get(v),
        J = u.get(N),
        Z = u.getSubNode(h),
        ee = u.get(S),
        te = u.get(R),
        ne = u.get(L),
        re = u.get(E),
        oe = u.get(k),
        ae = u.get(I),
        ie = u.get(q),
        le = u.get(b),
        se = u.getExpression(P),
        ue = u.getExpression($),
        ce = u.getExpression(D),
        de = u.getExpression(x),
        me = u.getExpression(g),
        pe = o("WebBloksBooleanUtils").isTrue(J),
        _e = o("WebBloksBooleanUtils").isFalse(U),
        fe = o("WebBloksStyle").useStyle(u, l),
        ge = fe.ref,
        he = fe.style,
        ye = fe.wrapper,
        Ce = fe.wrapperProps,
        be = o("WebBloksTheme").useTheme().getTheme(),
        ve =
          (Q != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(Q),
            )) ||
          (X && o("WebBloksUtils").getRGBColorWithTheme(X, be)),
        Se =
          Z != null
            ? o("WebBloksUtils").getRGBColorWithTheme(Z, be)
            : "transparent",
        Re =
          z != null ? o("WebBloksUtils").getRGBColorWithTheme(z, be) : "auto",
        Le = o("WebBloksComponentContext").useWebBloksContext(),
        Ee = Le.bloksContext,
        ke = Le.executeCatch,
        Ie = _(!1),
        Te = _(null),
        De = Ee.initAssociatedObject_INTERNAL(
          u,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
          { ref: Te, text: null },
        ),
        xe = c(
          function (e) {
            Ee.updateAssociatedObject_INTERNAL(
              u,
              o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
              { text: e },
            );
          },
          [Ee, u],
        ),
        $e = o(
          "WebBloksTextInputMaskExtensionHandlerUtils",
        ).getTextInputMaskExtensionProps(u),
        Pe = o(
          "WebBloksTextInputDatePickerExtensionHandlerUtils",
        ).useWebBloksTextInputDateProps(u),
        Ne = Ee.objectSet.environment.fontFamilyMappings,
        Me =
          (t = $e == null ? void 0 : $e.typeOverride) != null
            ? t
            : Pe == null
              ? void 0
              : Pe.typeOverride,
        we = r("useWebBloksTextInputFormatValue")(u, u.get(T), u.get(C)),
        Ae = o(
          "WebBloksBKSTextInputFormatterHandlerUtils",
        ).useBKSTextInputFormatter(u),
        Fe = Pe == null ? void 0 : Pe.onChange,
        Oe = o("WebBloksBooleanUtils").isFalse(le) || Ce.disabled === !0,
        Be = (n = $e == null ? void 0 : $e.maxLength) != null ? n : ae,
        We = o("WebBloksTextInputHelpers").getInputTypeProps(
          Me != null ? Me : ie,
        ),
        qe = Pe != null && Pe.initialValue ? Pe.initialValue : H,
        Ue = De.text,
        Ve = f((a = Ue != null ? Ue : qe) != null ? a : ""),
        He = Ve[0],
        Ge = Ve[1],
        ze = f(qe),
        je = ze[0],
        Ke = ze[1];
      (p(
        function () {
          qe !== je && ((Ie.current = !1), Ge(qe != null ? qe : ""), Ke(qe));
        },
        [u, je, qe],
      ),
        p(
          function () {
            if (pe && ge.current != null && He !== je) {
              ge.current.style.height = "0px";
              var e = ge.current.scrollHeight;
              ge.current.style.height = e + "px";
            }
          },
          [je, ge, pe, He],
        ));
      var Qe = c(
          function (e) {
            var t = !0;
            if (
              (me != null &&
                (t = o("WebBloksBooleanUtils").isTrue(
                  o("WebBloksUtils").cast(ke(u, me, [He, e])),
                )),
              t)
            ) {
              Ie.current = !1;
              var n = we(He, e);
              ((n = Ae(n)), xe(n), Ge(n));
            }
          },
          [me, ke, Ae, we, u, He, xe],
        ),
        Xe = _(!0);
      d(
        function () {
          var e;
          (Xe.current && ((Xe.current = !1), Ue == null || qe === Ue)) ||
            ((De == null || (e = De.ref) == null ? void 0 : e.current) ==
              null &&
              Ee.updateAssociatedObject_INTERNAL(
                u,
                o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
                { ref: Te },
              ),
            se != null && ke(u, se, [u, Ee]),
            Fe != null && Fe(He));
        },
        [He],
      );
      var Ye = function (t) {
          (t.keyCode === o("WebBloksConstants").KEY_RETURN &&
            ue != null &&
            ke(u, ue, [u, Ee]),
            (t.keyCode === o("WebBloksConstants").KEY_RETURN ||
              t.keyCode === o("WebBloksConstants").KEY_SPACE) &&
              t.stopPropagation());
        },
        Je = function (t) {
          t.keyCode === o("WebBloksConstants").KEY_SPACE && t.stopPropagation();
        },
        Ze =
          ce != null
            ? function () {
                ke(u, ce, [u, Ee]);
              }
            : void 0,
        et = r("useQueuedBlurEventForWebBloks")(ge, function () {
          de != null && ke(u, de, [u, Ee]);
        }),
        tt = de != null ? et : void 0,
        nt = babelHelpers.extends(
          {},
          he,
          o("WebBloksTextStyle").getTextStyle(G),
          {
            background: Se,
            color: ve,
            fontFamily: o("WebBloksTextStyle").getFontFamily(Y, Ne),
            fontSize: o("WebBloksUtils").toPx(j),
            lineHeight: o("WebBloksTextStyle").getLineHeight(),
            textAlign: o("WebBloksUtils").toHyphen(K),
            caretColor: Re,
          },
        ),
        rt = babelHelpers.extends(
          {},
          Ce,
          We,
          (i = Pe == null ? void 0 : Pe.minmaxProps) != null ? i : {},
          {
            autoCapitalize: te,
            autoComplete: ne,
            autoCorrect: re,
            disabled: Oe,
            maxLength: Be,
            name: oe,
            onChange: function (t) {
              return Qe(t.target.value);
            },
            onKeyDown: Ye,
            onKeyUp: Je,
            onFocus: Ze,
            onBlur: tt,
            className: o("WebBloksStyle").classNames(
              o("WebBloksStyle").WebBloksStyles.container,
              V.base,
            ),
            placeholder: ee,
            value: He,
            onClick: function (t) {
              t.stopPropagation();
            },
          },
        ),
        ot = c(
          function (e) {
            Ie.current ||
              (Qe(String(e)),
              (Ie.current = !0),
              se != null && ke(u, se, [u, Ee]),
              typeof window.requestIdleCallback == "function"
                ? window.requestIdleCallback(function () {
                    Ie.current = !1;
                  })
                : window.setTimeout(function () {
                    Ie.current = !1;
                  }, 50));
          },
          [Ee, ke, u, Qe, se],
        ),
        at = c(
          function () {
            var e = ge.current;
            if (
              e instanceof HTMLInputElement ||
              e instanceof HTMLTextAreaElement
            )
              return { start: e.selectionStart, end: e.selectionEnd };
          },
          [ge],
        ),
        it = c(
          function () {
            var e = ge.current;
            if (
              e instanceof HTMLInputElement &&
              e.selectionStart &&
              e.selectionEnd
            ) {
              var t = e.selectionStart,
                n = e.selectionEnd;
              window.requestAnimationFrame(function () {
                e.setSelectionRange(t, n);
              });
            }
            e == null || e.focus();
          },
          [ge],
        ),
        lt = c(
          function () {
            var e;
            return (e = ge.current) == null ? void 0 : e.blur();
          },
          [ge],
        );
      return (
        m(
          Te,
          function () {
            return {
              onExternalUpdate: ot,
              getSelection: at,
              requestFocus: it,
              requestBlur: lt,
            };
          },
          [at, ot, lt, it],
        ),
        ye(
          _e || pe
            ? s.jsx(
                "textarea",
                babelHelpers.extends({}, rt, pe ? { rows: 1 } : void 0, {
                  style: babelHelpers.extends({}, nt, { resize: "none" }),
                }),
              )
            : s.jsx(
                "input",
                babelHelpers.extends({ dir: "auto" }, rt, { style: nt }),
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
