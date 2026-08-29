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
      f = u.useState;
    function g(e) {
      var t,
        n,
        a,
        i,
        l = e.externalStyle,
        u = e.node,
        g = u.get("single_line"),
        y = u.get("text"),
        C = u.get("text_style"),
        b = u.get("cursor_color"),
        v = u.get("text_size"),
        S = u.get("text_align"),
        R = u.get("text_color"),
        L = u.getSubNode("text_themed_color"),
        E = u.get("font_family"),
        k = u.get("resize_height_based_on_content"),
        I = u.getSubNode("background_color"),
        T = u.get("hint"),
        D = u.get("html_autocapitalize"),
        x = u.get("html_autocomplete"),
        $ = u.get("html_autocorrect"),
        P = u.get("html_name"),
        N = u.get("max_length"),
        M = u.get("type"),
        w = u.get("enabled"),
        A = u.getExpression("on_text_change"),
        F = u.getExpression("on_submit"),
        O = u.getExpression("on_gain_focus"),
        B = u.getExpression("on_lose_focus"),
        W = u.getExpression("allow_text_change_callback"),
        q = o("WebBloksBooleanUtils").isTrue(k),
        U = o("WebBloksBooleanUtils").isFalse(g),
        V = o("WebBloksStyle").useStyle(u, l),
        H = V.ref,
        G = V.style,
        z = V.wrapper,
        j = V.wrapperProps,
        K = o("WebBloksTheme").useTheme().getTheme(),
        Q =
          (R != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(R),
            )) ||
          (L && o("WebBloksUtils").getRGBColorWithTheme(L, K)),
        X =
          I != null
            ? o("WebBloksUtils").getRGBColorWithTheme(I, K)
            : "transparent",
        Y = b != null ? o("WebBloksUtils").getRGBColorWithTheme(b, K) : "auto",
        J = o("WebBloksComponentContext").useWebBloksContext(),
        Z = J.bloksContext,
        ee = J.executeCatch,
        te = _(!1),
        ne = _(null),
        re = Z.initAssociatedObject_INTERNAL(
          u,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
          { ref: ne, text: null },
        ),
        oe = c(
          function (e) {
            Z.updateAssociatedObject_INTERNAL(
              u,
              o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
              { text: e },
            );
          },
          [Z, u],
        ),
        ae = o(
          "WebBloksTextInputMaskExtensionHandlerUtils",
        ).getTextInputMaskExtensionProps(u),
        ie = o(
          "WebBloksTextInputDatePickerExtensionHandlerUtils",
        ).useWebBloksTextInputDateProps(u),
        le = Z.objectSet.environment.fontFamilyMappings,
        se =
          (t = ae == null ? void 0 : ae.typeOverride) != null
            ? t
            : ie == null
              ? void 0
              : ie.typeOverride,
        ue = r("useWebBloksTextInputFormatValue")(u),
        ce = o(
          "WebBloksBKSTextInputFormatterHandlerUtils",
        ).useBKSTextInputFormatter(u),
        de = ie == null ? void 0 : ie.onChange,
        me = o("WebBloksBooleanUtils").isFalse(w) || j.disabled === !0,
        pe = (n = ae == null ? void 0 : ae.maxLength) != null ? n : N,
        _e = o("WebBloksTextInputHelpers").getInputTypeProps(
          se != null ? se : M,
        ),
        fe = ie != null && ie.initialValue ? ie.initialValue : y,
        ge = re.text,
        he = f((a = ge != null ? ge : fe) != null ? a : ""),
        ye = he[0],
        Ce = he[1],
        be = f(fe),
        ve = be[0],
        Se = be[1];
      (p(
        function () {
          fe !== ve && ((te.current = !1), Ce(fe != null ? fe : ""), Se(fe));
        },
        [u, ve, fe],
      ),
        p(
          function () {
            if (q && H.current != null && ye !== ve) {
              H.current.style.height = "0px";
              var e = H.current.scrollHeight;
              H.current.style.height = e + "px";
            }
          },
          [ve, H, q, ye],
        ));
      var Re = c(
          function (e) {
            var t = !0;
            if (
              (W != null &&
                (t = o("WebBloksBooleanUtils").isTrue(
                  o("WebBloksUtils").cast(ee(u, W, [ye, e])),
                )),
              t)
            ) {
              te.current = !1;
              var n = ue(ye, e);
              ((n = ce(n)), oe(n), Ce(n));
            }
          },
          [W, ee, ce, ue, u, ye, oe],
        ),
        Le = _(!0);
      d(
        function () {
          var e;
          (Le.current && ((Le.current = !1), ge == null || fe === ge)) ||
            ((re == null || (e = re.ref) == null ? void 0 : e.current) ==
              null &&
              Z.updateAssociatedObject_INTERNAL(
                u,
                o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
                { ref: ne },
              ),
            A != null && ee(u, A, [u, Z]),
            de != null && de(ye));
        },
        [ye],
      );
      var Ee = function (t) {
          (t.keyCode === o("WebBloksConstants").KEY_RETURN &&
            F != null &&
            ee(u, F, [u, Z]),
            (t.keyCode === o("WebBloksConstants").KEY_RETURN ||
              t.keyCode === o("WebBloksConstants").KEY_SPACE) &&
              t.stopPropagation());
        },
        ke = function (t) {
          t.keyCode === o("WebBloksConstants").KEY_SPACE && t.stopPropagation();
        },
        Ie =
          O != null
            ? function () {
                ee(u, O, [u, Z]);
              }
            : void 0,
        Te = r("useQueuedBlurEventForWebBloks")(H, function () {
          B != null && ee(u, B, [u, Z]);
        }),
        De = B != null ? Te : void 0,
        xe = babelHelpers.extends(
          {},
          G,
          o("WebBloksTextStyle").getTextStyle(C),
          {
            background: X,
            color: Q,
            fontFamily: o("WebBloksTextStyle").getFontFamily(E, le),
            fontSize: o("WebBloksUtils").toPx(v),
            lineHeight: o("WebBloksTextStyle").getLineHeight(),
            textAlign: o("WebBloksUtils").toHyphen(S),
            caretColor: Y,
          },
        ),
        $e = babelHelpers.extends(
          {},
          j,
          _e,
          (i = ie == null ? void 0 : ie.minmaxProps) != null ? i : {},
          {
            autoCapitalize: D,
            autoComplete: x,
            autoCorrect: $,
            disabled: me,
            maxLength: pe,
            name: P,
            onChange: function (t) {
              return Re(t.target.value);
            },
            onKeyDown: Ee,
            onKeyUp: ke,
            onFocus: Ie,
            onBlur: De,
            className: o("WebBloksStyle").classNames(
              o("WebBloksStyle").WebBloksStyles.container,
              h.base,
            ),
            placeholder: T,
            value: ye,
            onClick: function (t) {
              t.stopPropagation();
            },
          },
        ),
        Pe = c(
          function (e) {
            te.current ||
              (Re(String(e)),
              (te.current = !0),
              A != null && ee(u, A, [u, Z]),
              typeof window.requestIdleCallback == "function"
                ? window.requestIdleCallback(function () {
                    te.current = !1;
                  })
                : window.setTimeout(function () {
                    te.current = !1;
                  }, 50));
          },
          [Z, ee, u, Re, A],
        ),
        Ne = c(
          function () {
            var e = H.current;
            if (
              e instanceof HTMLInputElement ||
              e instanceof HTMLTextAreaElement
            )
              return { start: e.selectionStart, end: e.selectionEnd };
          },
          [H],
        ),
        Me = c(
          function () {
            var e = H.current;
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
          [H],
        ),
        we = c(
          function () {
            var e;
            return (e = H.current) == null ? void 0 : e.blur();
          },
          [H],
        );
      return (
        m(
          ne,
          function () {
            return {
              onExternalUpdate: Pe,
              getSelection: Ne,
              requestFocus: Me,
              requestBlur: we,
            };
          },
          [Ne, Pe, we, Me],
        ),
        z(
          U || q
            ? s.jsx(
                "textarea",
                babelHelpers.extends({}, $e, q ? { rows: 1 } : void 0, {
                  style: babelHelpers.extends({}, xe, { resize: "none" }),
                }),
              )
            : s.jsx(
                "input",
                babelHelpers.extends({ dir: "auto" }, $e, { style: xe }),
              ),
        )
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = o("WebBloksStyle").createStyles({
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
    l.default = g;
  },
  98,
);
