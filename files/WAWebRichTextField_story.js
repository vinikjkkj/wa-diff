__d(
  "WAWebRichTextField.story",
  [
    "WALogger",
    "WAWebFormatConfiguration",
    "WAWebLinkify",
    "WAWebRichTextField.react",
    "WAWebShowroomAlert",
    "WAWebShowroomUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
    "useWAWebCheckbox",
    "useWAWebSelect",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useRef,
      h = _.useState;
    function y(e) {
      o("WAWebToastManager").ToastManager.open(
        p.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    function C() {
      var t,
        n = (t = o("useWAWebCheckbox")).useCheckBox("Enable bullet points", !0),
        r = n[0],
        a = n[1],
        i = o("useWAWebSelect").useSelect("Emoji button (emojiBtnPosition)", [
          "none",
          "side",
          "footer",
        ]),
        l = i[0],
        m = i[1],
        _ = t.useCheckBox("Hide floating label", !1),
        C = _[0],
        v = _[1],
        S = 20,
        R = t.useCheckBox("Set max length to " + S, !1),
        L = R[0],
        E = R[1],
        k = t.useCheckBox("Visual: Low Profile", !1),
        I = k[0],
        T = k[1],
        D = t.useCheckBox("Select on mount", !1),
        x = D[0],
        $ = D[1],
        P = t.useCheckBox("Focus on mount", !1, x),
        N = P[0],
        M = P[1],
        w = t.useCheckBox("Set min lines to 3", !1),
        A = w[0],
        F = w[1],
        O = t.useCheckBox("Set max lines to 5", !1),
        B = O[0],
        W = O[1],
        q = t.useCheckBox("Locakble (Inline edit mode)", !1),
        U = q[0],
        V = q[1],
        H = t.useCheckBox("Show Remaining", !1, !U),
        G = H[0],
        z = H[1],
        j = t.useCheckBox(
          "Show edit button on hover (false to always show the button)",
          !1,
          !U,
        ),
        K = j[0],
        Q = j[1],
        X = t.useCheckBox("Editable", !0, !U),
        Y = X[0],
        J = X[1],
        Z = t.useCheckBox("Show highlighting on hover", !0, !U),
        ee = Z[0],
        te = Z[1],
        ne = t.useCheckBox(
          "Show edit restriction info (when Editable is off)",
          !0,
          Y && !U,
        ),
        re = ne[0],
        oe = ne[1],
        ae = o("useWAWebCheckbox").useCheckBox(
          "Show error on save (Incompatible with Low Profile)",
          !1,
          I || !U,
        ),
        ie = ae[0],
        le = ae[1],
        se = o("useWAWebCheckbox").useCheckBox(
          "Shown custome title for the Edit button (shown on mouse hover)",
          !1,
          !U,
        ),
        ue = se[0],
        ce = se[1],
        de = o("useWAWebCheckbox").useCheckBox(
          "Use custome emoji text settings (e.g. set text limit, show read more button)",
          !1,
          !U,
        ),
        me = de[0],
        pe = de[1],
        _e = o("useWAWebSelect").useSelect("Theme", [
          "default",
          "small",
          "text-input",
          "invite-message-caption",
          "request-reason",
        ]),
        fe = _e[0],
        ge = _e[1],
        he = h(!1),
        ye = he[0],
        Ce = he[1],
        be = h(!1),
        ve = be[0],
        Se = be[1],
        Re = h(""),
        Le = Re[0],
        Ee = Re[1],
        ke = g(""),
        Ie = function (n, r) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[rich-text-input] onChange",
              ])),
          ),
            Ee(n.text));
        },
        Te = function () {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[rich-text-input] onBlur",
              ])),
          );
        },
        De = function () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[rich-text-input] onFocus",
              ])),
          );
        },
        xe = function (t) {
          (y("onEnter triggered"),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[rich-text-input] onEnter",
                ])),
            ));
        },
        $e = function (t) {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[rich-text-input] onFiles",
              ])),
          ),
            y("onFiles triggered (see console for output)"));
        },
        Pe = function () {
          (y("onSave triggered"),
            Le !== ke.current &&
              (Se(!0),
              self.setTimeout(function () {
                Se(!1);
              }, 3e3)));
        },
        Ne = function () {
          (y("onCancel triggered"), Ee(ke.current));
        },
        Me = function () {
          (y("onBeginEdit triggered"), (ke.current = Le));
        },
        we = function () {
          o("WAWebShowroomAlert").showroomConfirm(
            "Only admins can edit this info",
          );
        },
        Ae = {
          title: "Type a group description",
          multiline: !0,
          onFiles: $e,
          onEnter: xe,
          onBlur: Te,
          onFocus: De,
          emojiBtnPosition: l != null ? l : "none",
          hideFloatingLabel: C,
          maxLength: L ? S : void 0,
          showRemaining: G,
          lowProfile: I,
          theme: fe === "default" ? null : fe,
        };
      U
        ? ((Ae = babelHelpers.extends({}, Ae, {
            emojiTextSettingsInLockMode: me
              ? {
                  textLimit: ye ? 1 / 0 : 20,
                  readMoreText: "Read more",
                  onReadMore: function () {
                    return Ce(!0);
                  },
                  ellipsify: !0,
                  multiline: !0,
                  direction: "auto",
                  inferLinesDirection: !0,
                  formatters: o("WAWebFormatConfiguration").TrustedGroupDesc({
                    links: o("WAWebLinkify").findLinks(Le),
                    bulletPointsEnabled: r,
                  }),
                }
              : void 0,
            lockable: !0,
            emptyValuePlaceholder: "Add group description",
            editable: Y,
            showEditOnHover: K,
            pending: ve,
            showHighlightOnHover: ee,
            onBeginEdit: Me,
            onSave: Pe,
            onCancel: Ne,
            editRestrictionInfo: re ? we : void 0,
          })),
          ue &&
            (Ae = babelHelpers.extends({}, Ae, {
              fieldName: "Group Descripiton",
            })))
        : (Ae = babelHelpers.extends({}, Ae, {
            placeholder: "Group description",
          }));
      var Fe = g(0),
        Oe = h(null),
        Be = Oe[0],
        We = Oe[1];
      (ie &&
        (Ae = babelHelpers.extends({}, Ae, {
          error: Be,
          validate: function () {
            return (We("Failed attempts #" + Fe.current), Fe.current++, !1);
          },
          onError: function () {
            y("onError triggered");
          },
        })),
        f(
          function () {
            if (Be != null) {
              var e = self.setTimeout(function () {
                We(null);
              }, 3e3);
              return function () {
                return self.clearTimeout(e);
              };
            }
          },
          [Be],
        ));
      var qe = String(N) + "-" + String(x),
        Ue = h(x),
        Ve = Ue[0],
        He = Ue[1];
      Ve !== x && (He(x), Ee(""));
      var Ge = Le;
      x && Ge === "" && (Ge = "Sample text");
      var ze = {
        minVisibleLines: A ? 3 : void 0,
        maxVisibleLines: B ? 5 : void 0,
      };
      return p.jsxs("div", {
        className: "x9orja2 x5zjp28 xbaz6xv x162tt16",
        children: [
          p.jsx(b, {}, qe),
          p.jsx("div", {
            className: "x9orja2 x5zjp28 xbaz6xv x162tt16",
            children: p.jsx(
              o("WAWebRichTextField.react").RichTextField,
              babelHelpers.extends(
                {
                  value: Ge,
                  onChange: Ie,
                  textFormatEnabled: !0,
                  bulletPointsEnabled: r,
                  selectOnMount: x,
                  focusOnMount: N,
                },
                ze,
                Ae,
              ),
              qe,
            ),
          }),
          p.jsx("h2", { children: "Options" }),
          m,
          v,
          E,
          T,
          M,
          $,
          F,
          W,
          ge,
          p.jsx("h2", {
            className: "x11fxgd9",
            children: "Inline Edit Options",
          }),
          V,
          J,
          oe,
          ce,
          pe,
          Q,
          te,
          z,
          le,
          p.jsx("h2", {
            className: "x11fxgd9",
            children: "New Options (not avaialble in legacy mode)",
          }),
          a,
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = []), (e[0] = t))
          : (t = e[0]),
        f(v, t),
        null
      );
    }
    function v() {
      y("Input force re-rendered.");
    }
    function S() {
      var e = o("react-compiler-runtime").c(13),
        t = h(""),
        n = t[0],
        r = t[1],
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function (t) {
            r(t.text);
          }),
          (e[0] = a))
        : (a = e[0]);
      var i = a,
        l;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function (t) {
            r(t.currentTarget.value);
          }),
          (e[1] = l))
        : (l = e[1]);
      var s = l,
        u,
        c;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x9orja2 x5zjp28 xbaz6xv x162tt16" }),
          (c = { className: "x9orja2 x5zjp28 xbaz6xv x162tt16" }),
          (e[2] = u),
          (e[3] = c))
        : ((u = e[2]), (c = e[3]));
      var d;
      e[4] !== n
        ? ((d = p.jsx(
            "div",
            babelHelpers.extends({}, c, {
              children: p.jsx(o("WAWebRichTextField.react").RichTextField, {
                title: "Type a group description",
                value: n,
                onChange: i,
                managed: !0,
                textFormatEnabled: !0,
                multiline: !0,
                emojiBtnPosition: "side",
              }),
            }),
          )),
          (e[4] = n),
          (e[5] = d))
        : (d = e[5]);
      var m, _;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = p.jsx("h2", {
            className: "x11fxgd9",
            children: "Input content will synchronize with the following value",
          })),
          (_ = { className: "xh8yej3 xng8ra x1anpbxc" }),
          (e[6] = m),
          (e[7] = _))
        : ((m = e[6]), (_ = e[7]));
      var f;
      e[8] !== n
        ? ((f = p.jsx(
            "textarea",
            babelHelpers.extends({}, _, { value: n, onChange: s }),
          )),
          (e[8] = n),
          (e[9] = f))
        : (f = e[9]);
      var g;
      return (
        e[10] !== d || e[11] !== f
          ? ((g = p.jsxs(
              "div",
              babelHelpers.extends({}, u, { children: [d, m, f] }),
            )),
            (e[10] = d),
            (e[11] = f),
            (e[12] = g))
          : (g = e[12]),
        g
      );
    }
    var R = {
      storyName: "WAWebRichTextField",
      component: C,
      description: "",
      examples: [
        {
          title: "Example",
          description:
            "\n         A wrapper component of RichTextInput that provides additioanl features. Some of them are\n\n         - Lockable state\n         - Save and validation\n         - Additional icons (e.g. emoji and drag buttons)\n         - Floating placeholder\n         - Emoji suggestions (as menu popup)\n       ",
          example: function () {
            return p.jsx(C, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
        {
          title: "Example 2",
          description:
            "\n         Managed mode\n         Input's content is synchrnoized with the 'value' prop.\n       ",
          example: function () {
            return p.jsx(S, {});
          },
          templateStyle: babelHelpers.extends(
            {},
            o("WAWebShowroomUtils").widePreview,
            { minWidth: 560 },
          ),
        },
      ],
    };
    l.default = R;
  },
  98,
);
