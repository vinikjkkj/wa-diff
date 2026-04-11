__d(
  "WDSRichTextField.react",
  [
    "Lexical",
    "LexicalClearEditorPlugin",
    "LexicalComposerContext",
    "LexicalContentEditable",
    "LexicalErrorBoundary",
    "LexicalHistoryPlugin",
    "LexicalPlainTextPlugin",
    "LexicalSelection",
    "Locale",
    "MLCComposer.react",
    "UserAgent",
    "WAWebCopyPasteSelectable.react",
    "WDSBidiParagraphNode",
    "WDSRichTextAddOns",
    "WDSRichTextCharLimitPlugin",
    "WDSRichTextEditorStatePlugin",
    "WDSRichTextInitialStatePlugin",
    "WDSRichTextOnEnterPlugin",
    "WDSRichTextShell.react",
    "WDSTextFieldVariants",
    "err",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useId,
      f = d.useImperativeHandle,
      g = d.useLayoutEffect,
      h = d.useMemo,
      y = d.useRef,
      C = d.useState,
      b = o("Locale").isRTL(),
      v = 8,
      S = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb",
      R = {
        height: "x16ye13r",
        whiteSpace: "x126k92a",
        overflowY: "x1odjw0f",
        $$css: !0,
      },
      L = {
        root: {
          color: "x1heor9g",
          backgroundColor: "xjbqb8w",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          boxSizing: "x9f619",
          maxWidth: "x193iq5w",
          width: "xh8yej3",
          lineHeight: "x1fc57z9",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          caretColor: "xjdcl3y",
          outline: "x1a2a7pz",
          "::selection_backgroundColor": "xkrh14z",
          $$css: !0,
        },
        singleLine: { whiteSpace: "x1whj5v", $$css: !0 },
        multiLine: function (t) {
          return [
            R,
            {
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "lh"),
            },
          ];
        },
      },
      E = {
        paragraph: [
          o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS,
          "x15bjb6t xdj266r x14z9mp xat24cr x1lziwak xq9mrsl x1n2onr6",
        ].join(" "),
        text: {
          base: o("WAWebCopyPasteSelectable.react").SELECTABLE_INPUT_CSS_CLASS,
          bold: "x117nqv4",
          italic: "x1k4tb9n",
          strikethrough: "xmqliwb x1t57i5m",
          code: "xldyu6s x7l0hbv",
        },
      };
    function k(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.EndIcon,
        u = i.StartIcon,
        d = i.bottomText,
        R = i.children,
        k = i.disabled,
        T = k === void 0 ? !1 : k,
        D = i.error,
        x = D === void 0 ? !1 : D,
        $ = i.errorText,
        P = i.floatingLabel,
        N = P === void 0 ? !0 : P,
        M = i.initialText,
        w = i.label,
        A = i.labelTestId,
        F = i.loading,
        O = F === void 0 ? !1 : F,
        B = i.maxCharacterCount,
        W = i.maxLength,
        q = i.nodes,
        U = i.onBlur,
        V = i.onEndIconClick,
        H = i.onEnter,
        G = i.onFocus,
        z = i.onValueChange,
        j = i.platform,
        K = j === void 0 ? S : j,
        Q = i.prefix,
        X = i.readOnly,
        Y = X === void 0 ? !1 : X,
        J = i.rows,
        Z = J === void 0 ? 1 : J,
        ee = i.suffix,
        te = i.testid,
        ne = te === void 0 ? "text-input" : te,
        re = Z > 1,
        oe = C(M != null ? M : ""),
        ae = oe[0],
        ie = oe[1],
        le = C(!1),
        se = le[0],
        ue = le[1],
        ce = C(0),
        de = ce[0],
        me = ce[1],
        pe = C(null),
        _e = pe[0],
        fe = pe[1],
        ge = y(null),
        he = _(),
        ye = "bottom-text-" + he,
        Ce = ae.length > 0,
        be = B != null && ae.length > B,
        ve = x || be,
        Se = T === !0 && !ve,
        Re = !T && !Y,
        Le = h(function () {
          return o("LexicalHistoryPlugin").createEmptyHistoryState();
        }, []),
        Ee = h(function () {
          var e = q != null ? q : [],
            t = e.some(function (e) {
              return o("WDSBidiParagraphNode").isBidiNodeType(e.getType());
            });
          return {
            editor: {
              theme: E,
              nodes: t
                ? [].concat(e, [
                    {
                      replace: o("Lexical").ParagraphNode,
                      with: function () {
                        for (var t of e)
                          if (
                            t !==
                              o("WDSBidiParagraphNode").WDSBidiParagraphNode &&
                            o("WDSBidiParagraphNode").isBidiNodeType(
                              t.getType(),
                            )
                          )
                            return new t();
                        return new (o(
                          "WDSBidiParagraphNode",
                        ).WDSBidiParagraphNode)();
                      },
                    },
                  ])
                : e,
              onError: function (t) {
                throw r("err")(t.message);
              },
              editable: Re,
            },
            policyProduct: "whatsapp",
            surface: "WAJS",
          };
        }, []);
      (p(
        function () {
          _e != null && _e.setEditable(Re);
        },
        [_e, Re],
      ),
        g(function () {
          if (ge.current) {
            var e = ge.current,
              t = e.querySelector("label");
            if (t) {
              var n = t.getBoundingClientRect(),
                r = e.getBoundingClientRect();
              if (b === !0) {
                var o = r.right - n.right,
                  a = o - v;
                me(a);
              } else {
                var i = n.left - r.left,
                  l = i - v;
                me(-l);
              }
            }
          }
        }, []));
      var ke = m(
          function (e) {
            (ie(e), z == null || z(e));
          },
          [z],
        ),
        Ie = m(
          function () {
            (ue(!0), G == null || G());
          },
          [G],
        ),
        Te = m(
          function () {
            (ue(!1), U == null || U());
          },
          [U],
        );
      f(
        a,
        function () {
          return {
            focus: function () {
              _e == null || _e.focus();
            },
            blur: function () {
              _e != null &&
                document.activeElement === _e.getRootElement() &&
                _e.blur();
            },
            isFocused: function () {
              return _e == null
                ? !1
                : document.activeElement === _e.getRootElement();
            },
            getTextContent: function () {
              return _e == null
                ? ""
                : _e.getEditorState().read(function () {
                    return o("Lexical").$getRoot().getTextContent();
                  });
            },
            setTextContent: function (t) {
              _e != null &&
                _e.update(function () {
                  var e,
                    n = (e = o("Lexical")).$getRoot();
                  n.clear();
                  var r = e.$createParagraphNode(),
                    a = new e.TextNode(t);
                  (r.append(a), n.append(r), e.$setSelection(null));
                });
            },
            selectAll: function () {
              _e != null &&
                (_e.focus(),
                _e.update(function () {
                  var e = o("Lexical")
                    .$getRoot()
                    .select(0, o("Lexical").$getRoot().getChildrenSize());
                  e != null && o("LexicalSelection").$selectAll(e);
                }));
            },
            editor: _e,
          };
        },
        [_e],
      );
      var De = N === !1 && (se || Ce) ? void 0 : w,
        xe = ve || l != null || ee != null || O,
        $e = null;
      xe &&
        ($e = c.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnEnd, {
          shouldShowError: ve,
          EndIcon: l,
          suffix: ee,
          onEndIconClick: V,
          loading: O,
          platform: K,
        }));
      var Pe = u != null || Q != null,
        Ne = null;
      Pe &&
        (Ne = c.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnStart, {
          prefix: Q,
          StartIcon: u,
          platform: K,
        }));
      var Me = d != null || $ != null || B != null,
        we = null;
      return (
        Me &&
          (we = c.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnBottom, {
            bottomText: d,
            testid: void 0,
            errorText: $,
            maxCharacterCount: B,
            textLength: ae.length,
            platform: K,
            shouldShowError: ve,
            bottomId: ye,
          })),
        c.jsx("div", {
          ref: ge,
          style:
            ((n = {}),
            (n[o("WDSTextFieldVariants").labelMoveDistanceVarname] = de + "px"),
            n),
          children: c.jsx(r("WDSRichTextShell.react"), {
            label: De,
            isFocused: se,
            hasValue: Ce,
            platform: K,
            shouldShowError: ve,
            isDisabled: Se,
            isMultiLine: re,
            hasAddOnEnd: !!xe,
            addOnStart: Ne,
            addOnEnd: $e,
            addOnBottom: we,
            labelTestId: A,
            children: c.jsxs(r("MLCComposer.react"), {
              initialConfig: Ee,
              children: [
                c.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
                  contentEditable: c.jsx(
                    o("LexicalContentEditable").ContentEditable,
                    babelHelpers.extends(
                      {},
                      (s || (s = r("stylex"))).props(
                        L.root,
                        re ? L.multiLine(Z) : L.singleLine,
                      ),
                      {
                        "data-testid": void 0,
                        ariaLabel: String(w),
                        ariaInvalid: ve,
                        ariaDescribedBy: Me ? ye : void 0,
                        ariaMultiline: re || void 0,
                      },
                    ),
                  ),
                  ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary,
                }),
                c.jsx(o("LexicalHistoryPlugin").HistoryPlugin, {
                  externalHistoryState: Le,
                }),
                c.jsx(o("LexicalClearEditorPlugin").ClearEditorPlugin, {}),
                c.jsx(I, { onEditor: fe }),
                c.jsx(r("WDSRichTextEditorStatePlugin"), {
                  onValueChange: ke,
                  onFocus: Ie,
                  onBlur: Te,
                }),
                R,
                c.jsx(r("WDSRichTextInitialStatePlugin"), { initialText: M }),
                W != null &&
                  c.jsx(r("WDSRichTextCharLimitPlugin"), { maxLength: W }),
                H != null &&
                  c.jsx(r("WDSRichTextOnEnterPlugin"), { onEnter: H }),
              ],
            }),
          }),
        })
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.onEditor,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        r = n[0];
      return (
        p(
          function () {
            t(r);
          },
          [r, t],
        ),
        null
      );
    }
    ((I.displayName = I.name + " [from " + i.id + "]"), (l.default = k));
  },
  98,
);
