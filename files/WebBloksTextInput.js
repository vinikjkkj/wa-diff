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
        q = u.getValues(),
        U = o("WebBloksBooleanUtils").isTrue(k),
        V = o("WebBloksBooleanUtils").isFalse(g),
        H = o("WebBloksStyle").useStyle(u, l),
        G = H.ref,
        z = H.style,
        j = H.wrapper,
        K = H.wrapperProps,
        Q = o("WebBloksTheme").useTheme().getTheme(),
        X =
          (R != null &&
            o("WebBloksUtils").convertRGBArrToString(
              o("WebBloksUtils").convertRGBOrHexStringToArr(R),
            )) ||
          (L && o("WebBloksUtils").getRGBColorWithTheme(L, Q)),
        Y =
          I != null
            ? o("WebBloksUtils").getRGBColorWithTheme(I, Q)
            : "transparent",
        J = b != null ? o("WebBloksUtils").getRGBColorWithTheme(b, Q) : "auto",
        Z = o("WebBloksComponentContext").useWebBloksContext(),
        ee = Z.bloksContext,
        te = Z.executeCatch,
        ne = _(!1),
        re = _(null),
        oe = ee.initAssociatedObject_INTERNAL(
          u,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
          { ref: re, text: null },
        ),
        ae = c(
          function (e) {
            ee.updateAssociatedObject_INTERNAL(
              u,
              o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
              { text: e },
            );
          },
          [ee, u],
        ),
        ie = o(
          "WebBloksTextInputMaskExtensionHandlerUtils",
        ).getTextInputMaskExtensionProps(q, G),
        le = o(
          "WebBloksTextInputDatePickerExtensionHandlerUtils",
        ).useWebBloksTextInputDateProps(u),
        se = ee.objectSet.environment.fontFamilyMappings,
        ue =
          (t = ie == null ? void 0 : ie.typeOverride) != null
            ? t
            : le == null
              ? void 0
              : le.typeOverride,
        ce = r("useWebBloksTextInputFormatValue")(u, G),
        de = o(
          "WebBloksBKSTextInputFormatterHandlerUtils",
        ).useBKSTextInputFormatter(q),
        me = le == null ? void 0 : le.onChange,
        pe = o("WebBloksBooleanUtils").isFalse(w) || K.disabled === !0,
        _e = (n = ie == null ? void 0 : ie.maxLength) != null ? n : N,
        fe = o("WebBloksTextInputHelpers").getInputTypeProps(
          ue != null ? ue : M,
        ),
        ge = le != null && le.initialValue ? le.initialValue : y,
        he = oe.text,
        ye = f((a = he != null ? he : ge) != null ? a : ""),
        Ce = ye[0],
        be = ye[1],
        ve = f(ge),
        Se = ve[0],
        Re = ve[1];
      (p(
        function () {
          ge !== Se && ((ne.current = !1), be(ge != null ? ge : ""), Re(ge));
        },
        [u, Se, ge],
      ),
        p(
          function () {
            if (U && G.current != null && Ce !== Se) {
              G.current.style.height = "0px";
              var e = G.current.scrollHeight;
              G.current.style.height = e + "px";
            }
          },
          [Se, G, U, Ce],
        ));
      var Le = c(
          function (e) {
            var t = !0;
            if (
              (W != null &&
                (t = o("WebBloksBooleanUtils").isTrue(
                  o("WebBloksUtils").cast(te(u, W, [Ce, e])),
                )),
              t)
            ) {
              ne.current = !1;
              var n = ce(Ce, e);
              ((n = de(n)), ae(n), be(n));
            }
          },
          [W, te, de, ce, u, Ce, ae],
        ),
        Ee = _(!0);
      d(
        function () {
          var e;
          (Ee.current && ((Ee.current = !1), he == null || ge === he)) ||
            ((oe == null || (e = oe.ref) == null ? void 0 : e.current) ==
              null &&
              ee.updateAssociatedObject_INTERNAL(
                u,
                o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
                { ref: re },
              ),
            A != null && te(u, A, [u, ee]),
            me != null && me(Ce));
        },
        [Ce],
      );
      var ke = function (t) {
          (t.keyCode === o("WebBloksConstants").KEY_RETURN &&
            F != null &&
            te(u, F, [u, ee]),
            (t.keyCode === o("WebBloksConstants").KEY_RETURN ||
              t.keyCode === o("WebBloksConstants").KEY_SPACE) &&
              t.stopPropagation());
        },
        Ie = function (t) {
          t.keyCode === o("WebBloksConstants").KEY_SPACE && t.stopPropagation();
        },
        Te =
          O != null
            ? function () {
                te(u, O, [u, ee]);
              }
            : void 0,
        De = r("useQueuedBlurEventForWebBloks")(G, function () {
          B != null && te(u, B, [u, ee]);
        }),
        xe = B != null ? De : void 0,
        $e = babelHelpers.extends(
          {},
          z,
          o("WebBloksTextStyle").getTextStyle(C),
          {
            background: Y,
            color: X,
            fontFamily: o("WebBloksTextStyle").getFontFamily(E, se),
            fontSize: o("WebBloksUtils").toPx(v),
            lineHeight: o("WebBloksTextStyle").getLineHeight(),
            textAlign: o("WebBloksUtils").toHyphen(S),
            caretColor: J,
          },
        ),
        Pe = babelHelpers.extends(
          {},
          K,
          fe,
          (i = le == null ? void 0 : le.minmaxProps) != null ? i : {},
          {
            autoCapitalize: D,
            autoComplete: x,
            autoCorrect: $,
            disabled: pe,
            maxLength: _e,
            name: P,
            onChange: function (t) {
              return Le(t.target.value);
            },
            onKeyDown: ke,
            onKeyUp: Ie,
            onFocus: Te,
            onBlur: xe,
            className: o("WebBloksStyle").classNames(
              o("WebBloksStyle").WebBloksStyles.container,
              h.base,
            ),
            placeholder: T,
            value: Ce,
            onClick: function (t) {
              t.stopPropagation();
            },
          },
        ),
        Ne = c(
          function (e) {
            ne.current ||
              (Le(String(e)),
              (ne.current = !0),
              A != null && te(u, A, [u, ee]),
              typeof window.requestIdleCallback == "function"
                ? window.requestIdleCallback(function () {
                    ne.current = !1;
                  })
                : window.setTimeout(function () {
                    ne.current = !1;
                  }, 50));
          },
          [ee, te, u, Le, A],
        ),
        Me = c(
          function () {
            var e = G.current;
            if (
              e instanceof HTMLInputElement ||
              e instanceof HTMLTextAreaElement
            )
              return { start: e.selectionStart, end: e.selectionEnd };
          },
          [G],
        ),
        we = c(
          function () {
            var e = G.current;
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
          [G],
        ),
        Ae = c(
          function () {
            var e;
            return (e = G.current) == null ? void 0 : e.blur();
          },
          [G],
        );
      return (
        m(
          re,
          function () {
            return {
              onExternalUpdate: Ne,
              getSelection: Me,
              requestFocus: we,
              requestBlur: Ae,
            };
          },
          [Me, Ne, Ae, we],
        ),
        j(
          V || U
            ? s.jsx(
                "textarea",
                babelHelpers.extends({}, Pe, U ? { rows: 1 } : void 0, {
                  style: babelHelpers.extends({}, $e, { resize: "none" }),
                }),
              )
            : s.jsx(
                "input",
                babelHelpers.extends({ dir: "auto" }, Pe, { style: $e }),
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
