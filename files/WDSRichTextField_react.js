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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useId,
      _ = c.useImperativeHandle,
      f = c.useLayoutEffect,
      g = c.useMemo,
      h = c.useRef,
      y = c.useState,
      C = o("Locale").isRTL(),
      b = 8,
      v = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb",
      S = {
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
    function R(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.EndIcon,
        s = i.StartIcon,
        c = i.bottomText,
        R = i.children,
        E = i.disabled,
        k = E === void 0 ? !1 : E,
        I = i.error,
        T = I === void 0 ? !1 : I,
        D = i.errorText,
        x = i.floatingLabel,
        $ = x === void 0 ? !0 : x,
        P = i.initialText,
        N = i.label,
        M = i.labelTestId,
        w = i.loading,
        A = w === void 0 ? !1 : w,
        F = i.maxCharacterCount,
        O = i.maxLength,
        B = i.nodes,
        W = i.onBlur,
        q = i.onEndIconClick,
        U = i.onEnter,
        V = i.onFocus,
        H = i.onValueChange,
        G = i.platform,
        z = G === void 0 ? v : G,
        j = i.prefix,
        K = i.readOnly,
        Q = K === void 0 ? !1 : K,
        X = i.rows,
        Y = X === void 0 ? 1 : X,
        J = i.suffix,
        Z = i.testid,
        ee = Z === void 0 ? "text-input" : Z,
        te = Y > 1,
        ne = y(P != null ? P : ""),
        re = ne[0],
        oe = ne[1],
        ae = y(!1),
        ie = ae[0],
        le = ae[1],
        se = y(0),
        ue = se[0],
        ce = se[1],
        de = y(null),
        me = de[0],
        pe = de[1],
        _e = h(null),
        fe = p(),
        ge = "bottom-text-" + fe,
        he = re.length > 0,
        ye = F != null && re.length > F,
        Ce = T || ye,
        be = k === !0 && !Ce,
        ve = !k && !Q,
        Se = g(function () {
          return o("LexicalHistoryPlugin").createEmptyHistoryState();
        }, []),
        Re = g(function () {
          var e = B != null ? B : [],
            t = e.some(function (e) {
              return o("WDSBidiParagraphNode").isBidiNodeType(e.getType());
            });
          return {
            editor: {
              theme: S,
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
              editable: ve,
            },
            policyProduct: "whatsapp",
            surface: "WAJS",
          };
        }, []);
      (m(
        function () {
          me != null && me.setEditable(ve);
        },
        [me, ve],
      ),
        f(function () {
          if (_e.current) {
            var e = _e.current,
              t = e.querySelector("label");
            if (t) {
              var n = t.getBoundingClientRect(),
                r = e.getBoundingClientRect();
              if (C === !0) {
                var o = r.right - n.right,
                  a = o - b;
                ce(a);
              } else {
                var i = n.left - r.left,
                  l = i - b;
                ce(-l);
              }
            }
          }
        }, []));
      var Le = d(
          function (e) {
            (oe(e), H == null || H(e));
          },
          [H],
        ),
        Ee = d(
          function () {
            (le(!0), V == null || V());
          },
          [V],
        ),
        ke = d(
          function () {
            (le(!1), W == null || W());
          },
          [W],
        );
      _(
        a,
        function () {
          return {
            focus: function () {
              me == null || me.focus();
            },
            blur: function () {
              me != null &&
                document.activeElement === me.getRootElement() &&
                me.blur();
            },
            isFocused: function () {
              return me == null
                ? !1
                : document.activeElement === me.getRootElement();
            },
            getTextContent: function () {
              return me == null
                ? ""
                : me.getEditorState().read(function () {
                    return o("Lexical").$getRoot().getTextContent();
                  });
            },
            setTextContent: function (t) {
              me != null &&
                me.update(function () {
                  var e,
                    n = (e = o("Lexical")).$getRoot();
                  n.clear();
                  var r = e.$createParagraphNode(),
                    a = new e.TextNode(t);
                  (r.append(a), n.append(r), e.$setSelection(null));
                });
            },
            selectAll: function () {
              me != null &&
                (me.focus(),
                me.update(function () {
                  var e = o("Lexical")
                    .$getRoot()
                    .select(0, o("Lexical").$getRoot().getChildrenSize());
                  e != null && o("LexicalSelection").$selectAll(e);
                }));
            },
            editor: me,
          };
        },
        [me],
      );
      var Ie = $ === !1 && (ie || he) ? void 0 : N,
        Te = Ce || l != null || J != null || A,
        De = null;
      Te &&
        (De = u.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnEnd, {
          shouldShowError: Ce,
          EndIcon: l,
          suffix: J,
          onEndIconClick: q,
          loading: A,
          platform: z,
        }));
      var xe = s != null || j != null,
        $e = null;
      xe &&
        ($e = u.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnStart, {
          prefix: j,
          StartIcon: s,
          platform: z,
        }));
      var Pe = c != null || D != null || F != null,
        Ne = null;
      return (
        Pe &&
          (Ne = u.jsx(o("WDSRichTextAddOns").RichTextFieldAddOnBottom, {
            bottomText: c,
            testid: void 0,
            errorText: D,
            maxCharacterCount: F,
            textLength: re.length,
            platform: z,
            shouldShowError: Ce,
            bottomId: ge,
          })),
        u.jsx("div", {
          ref: _e,
          style:
            ((n = {}),
            (n[o("WDSTextFieldVariants").labelMoveDistanceVarname] = ue + "px"),
            n),
          children: u.jsx(r("WDSRichTextShell.react"), {
            label: Ie,
            isFocused: ie,
            hasValue: he,
            platform: z,
            shouldShowError: Ce,
            isDisabled: be,
            isMultiLine: te,
            hasAddOnEnd: !!Te,
            addOnStart: $e,
            addOnEnd: De,
            addOnBottom: Ne,
            labelTestId: M,
            children: u.jsxs(r("MLCComposer.react"), {
              initialConfig: Re,
              children: [
                u.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
                  contentEditable: u.jsx(
                    o("LexicalContentEditable").ContentEditable,
                    {
                      className: {
                        0: "x1heor9g xjbqb8w x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x193iq5w xh8yej3 x1fc57z9 x6ikm8r x10wlt62 xjdcl3y x1a2a7pz xkrh14z x1whj5v",
                        1: "x1heor9g xjbqb8w x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x193iq5w xh8yej3 x1fc57z9 x6ikm8r xjdcl3y x1a2a7pz xkrh14z x126k92a x1odjw0f",
                      }[!!te << 0],
                      style: te ? { height: Y + "lh" } : void 0,
                      "data-testid": void 0,
                      ariaLabel: String(N),
                      ariaInvalid: Ce,
                      ariaDescribedBy: Pe ? ge : void 0,
                      ariaMultiline: te || void 0,
                    },
                  ),
                  ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary,
                }),
                u.jsx(o("LexicalHistoryPlugin").HistoryPlugin, {
                  externalHistoryState: Se,
                }),
                u.jsx(o("LexicalClearEditorPlugin").ClearEditorPlugin, {}),
                u.jsx(L, { onEditor: pe }),
                u.jsx(r("WDSRichTextEditorStatePlugin"), {
                  onValueChange: Le,
                  onFocus: Ee,
                  onBlur: ke,
                }),
                R,
                u.jsx(r("WDSRichTextInitialStatePlugin"), { initialText: P }),
                O != null &&
                  u.jsx(r("WDSRichTextCharLimitPlugin"), { maxLength: O }),
                U != null &&
                  u.jsx(r("WDSRichTextOnEnterPlugin"), { onEnter: U }),
              ],
            }),
          }),
        })
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.onEditor,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        r = n[0];
      return (
        m(
          function () {
            t(r);
          },
          [r, t],
        ),
        null
      );
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = R));
  },
  98,
);
