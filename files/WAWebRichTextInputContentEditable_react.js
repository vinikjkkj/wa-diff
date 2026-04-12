__d(
  "WAWebRichTextInputContentEditable.react",
  [
    "LexicalComposerContext",
    "LexicalContentEditable",
    "WAWebStylesEnv",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useLayoutEffect,
      _ = 15,
      f = 1.47,
      g = {
        contentEditable: {
          userSelect: "x1hx0egp",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          fontSize: "x6prxxf",
          lineHeight: "x1k6rcq7",
          $$css: !0,
        },
        nowrap: { whiteSpace: "x1whj5v", $$css: !0 },
      };
    function h(t) {
      var n = t.ariaActiveDescendant,
        a = t.ariaLabel,
        i = t.focusOnMount,
        l = t.lineWrap,
        s = l === void 0 ? !0 : l,
        c = t.maxVisibleLines,
        _ = t.minVisibleLines,
        h = _ === void 0 ? 1 : _,
        y = t.onClick,
        b = t.placeholder,
        v = t.placeholderTestId,
        S = t.placeholderXstyle,
        R = t.readOnly,
        L = R === void 0 ? !1 : R,
        E = t.ref,
        k = t.spellCheck,
        I = t.tabOrder,
        T = t.testid,
        D = t.title,
        x = t.xstyle,
        $ = o("LexicalComposerContext").useLexicalComposerContext(),
        P = $[0],
        N = d(function (e) {
          e != null &&
            (I != null && e.setAttribute("data-tab", String(I)),
            i === !0 &&
              self.setTimeout(function () {
                return P.focus();
              }, 0));
        }, []);
      p(
        function () {
          var e = P.getRootElement();
          e !== null && e.setAttribute("data-tab", String(I));
        },
        [P, I],
      );
      var M = r("useMergeRefs")(E, N);
      m(
        function () {
          P.setEditable(!L);
        },
        [P, L],
      );
      var w,
        A = a != null ? a : D;
      A != null && A !== "" && (w = { ariaLabel: A.toString() });
      var F =
        b == null
          ? w
          : babelHelpers.extends(
              {
                placeholder: u.jsx(C, { text: b, xstyle: S, testid: void 0 }),
                "aria-placeholder": b.toString(),
              },
              w,
            );
      return u.jsx(
        o("LexicalContentEditable").ContentEditable,
        babelHelpers.extends(
          {
            ariaActiveDescendant: n,
            className: (e || (e = r("stylex")))(
              g.contentEditable,
              x,
              !s && g.nowrap,
            ),
            style: {
              maxHeight: c != null ? f * c + "em" : void 0,
              minHeight: f * h + "em",
            },
          },
          F,
          {
            role: "textbox",
            ref: M,
            spellCheck: k,
            title: D == null ? void 0 : D.toString(),
            "data-testid": void 0,
            tabIndex: I != null ? I : void 0,
            onClick: y,
            ariaAutoComplete: "list",
            ariaOwns: "emoji-suggestion",
          },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = {
      container: {
        position: "x10l6tqk",
        top: "x13vifvy",
        bottom: "x1ey2m1c",
        insetInlineStart: "x1u2k1fw",
        zIndex: "xhtitgo",
        color: "xhslqc4",
        pointerEvents: "x47corl",
        userSelect: "x87ps6o",
        transition: "xh9ts4v",
        fontSize: "x6prxxf",
        lineHeight: "x1k6rcq7",
        $$css: !0,
      },
      containerRefreshed: { insetInlineStart: "x1o0tod", $$css: !0 },
      fontSmoothing: {
        "-webkit-font-smoothing": "xvmahel",
        "-moz-osx-font-smoothing": "xlh3980",
        $$css: !0,
      },
    };
    function C(t) {
      var n = t.testid,
        a = t.text,
        i = t.xstyle;
      return u.jsx(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props(
            y.container,
            y.containerRefreshed,
            o("WAWebStylesEnv").isOSMac && y.fontSmoothing,
            i,
          ),
          { children: a },
        ),
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.MIN_FONT_SIZE = _),
      (l.InputContentEditable = h));
  },
  98,
);
