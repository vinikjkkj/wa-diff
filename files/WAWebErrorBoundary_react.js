__d(
  "WAWebErrorBoundary.react",
  [
    "fbt",
    "WALogger",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d.PureComponent,
      _ = {
        redBox: {
          height: "x5yr21d",
          width: "xh8yej3",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          textAlign: "x2b8uid",
          backgroundColor: "x76b9fu",
          color: "xfungia",
          pointerEvents: "x71s49j",
          flexDirection: "xdt5ytf",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        codeContainer: {
          whiteSpace: "x126k92a",
          backgroundColor: "x1qbu5l5",
          fontSize: "x190qgfh",
          height: "xqt63rz",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(13),
        a = e.boundaryName,
        i = e.error,
        l;
      t[0] !== i
        ? ((l = i != null ? i : {}), (t[0] = i), (t[1] = l))
        : (l = t[1]);
      var u = l,
        d = u.stack,
        p;
      t[2] !== d
        ? ((p = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              d != null &&
                (yield navigator.clipboard.writeText(d),
                o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, { msg: "Stack copied" }),
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = d),
          (t[3] = p))
        : (p = t[3]);
      var f = p,
        g;
      t[4] !== a
        ? ((g = function () {
            var e = "Uncaught render error at " + a;
            o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", e);
          }),
          (t[4] = a),
          (t[5] = g))
        : (g = t[5]);
      var h = g,
        y = "Error stack from " + a,
        C;
      t[6] !== f || t[7] !== h || t[8] !== d
        ? ((C =
            d != null
              ? m.jsxs(m.Fragment, {
                  children: [
                    m.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (c || (c = r("stylex"))).props([
                          _.codeContainer,
                          o("WAWebUISpacing").uiPadding.all10,
                        ]),
                        { children: m.jsx("code", { children: d }) },
                      ),
                    ),
                    m.jsxs(
                      "div",
                      babelHelpers.extends(
                        {},
                        (c || (c = r("stylex"))).props(
                          o("WAWebUISpacing").uiPadding.vert10,
                        ),
                        {
                          children: [
                            m.jsx(o("WAWebText.react").WAWebTextSmall, {
                              xstyle: o("WAWebUISpacing").uiPadding.bottom10,
                              children: s._(
                                /*BTDS*/ "Check the console for more information",
                              ),
                            }),
                            m.jsxs(o("WAWebFlex.react").FlexRow, {
                              columnGap: 8,
                              justify: "end",
                              marginTop: 16,
                              children: [
                                m.jsx(
                                  o("WAWebButton.react").WAWebButtonSecondary,
                                  {
                                    onClick: f,
                                    children: s._(/*BTDS*/ "Copy error stack"),
                                  },
                                ),
                                m.jsx(
                                  o("WAWebButton.react").WAWebButtonSecondary,
                                  {
                                    onClick: h,
                                    children: s._(/*BTDS*/ "Report this bug"),
                                  },
                                ),
                              ],
                            }),
                          ],
                        },
                      ),
                    ),
                  ],
                })
              : "No error stack found, check console"),
          (t[6] = f),
          (t[7] = h),
          (t[8] = d),
          (t[9] = C))
        : (C = t[9]);
      var b;
      return (
        t[10] !== y || t[11] !== C
          ? ((b = m.jsx(o("WAWebModal.react").Modal, {
              title: y,
              type: o("WAWebModal.react").ModalTheme.Multiline,
              children: C,
            })),
            (t[10] = y),
            (t[11] = C),
            (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.boundaryName,
        a = e.handleClick;
      if (!r("gkx")("26258")) {
        var i;
        t[0] !== n
          ? ((i = s._(
              /*BTDS*/ "Uncaught error at {boundaryName} [Click for more info]",
              [s._param("boundaryName", n)],
            )),
            (t[0] = n),
            (t[1] = i))
          : (i = t[1]);
        var l;
        return (
          t[2] !== a || t[3] !== i
            ? ((l = m.jsx(r("WAWebUnstyledButton.react"), {
                xstyle: _.redBox,
                onClick: a,
                testid: void 0,
                children: i,
              })),
              (t[2] = a),
              (t[3] = i),
              (t[4] = l))
            : (l = t[4]),
          l
        );
      }
    }
    var h = (function (t) {
      function n() {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.state = { error: null }),
          (e.$1 = function () {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(f, { error: e.state.error, boundaryName: e.props.name }),
            );
          }),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      (babelHelpers.inheritsLoose(n, t),
        (n.getDerivedStateFromError = function (t) {
          return { error: t };
        }));
      var r = n.prototype;
      return (
        (r.componentDidCatch = function (n, r) {
          var t = this.props,
            a = t.onError,
            i = t.sendLogs,
            l = i === void 0 ? !0 : i,
            s = t.type;
          if (l === !0) {
            this.props.description != null &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ErrorBoundary][",
                    "] description: ",
                    "",
                  ])),
                this.props.name,
                this.props.description,
              );
            var c =
              s === "fatal"
                ? {
                    sendLogsType:
                      o("WALogger").SendLogsType
                        .EXTREMELY_BAD_USER_EXPERIENCE_SAD,
                  }
                : {};
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose(
                    ["", "\n", "\n", ""],
                    ["", "\\n", "\\n", ""],
                  )),
                n,
                n.stack,
                r.componentStack,
              )
              .sendLogs(
                "[ErrorBoundary][" + this.props.name + "] " + n.message,
                c,
              )
              .tags("error-boundary");
          }
          a == null || a(n);
        }),
        (r.render = function () {
          var e,
            t = this.state.error,
            n = this.props.fallback,
            r = n === void 0 ? g : n;
          return t != null
            ? m.jsx(r, {
                boundaryName: this.props.name,
                error: t,
                handleClick: this.$1,
              })
            : (e = this.props.children) != null
              ? e
              : null;
        }),
        n
      );
    })(p);
    l.ErrorBoundary = h;
  },
  226,
);
