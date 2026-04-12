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
      var t = e.boundaryName,
        a = e.error,
        i = a != null ? a : {},
        l = i.stack,
        u = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            l != null &&
              (yield navigator.clipboard.writeText(l),
              o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, { msg: "Stack copied" }),
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        d = function () {
          var e = "Uncaught render error at " + t;
          o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", e);
        };
      return m.jsx(o("WAWebModal.react").Modal, {
        title: "Error stack from " + t,
        type: o("WAWebModal.react").ModalTheme.Multiline,
        children:
          l != null
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
                      { children: m.jsx("code", { children: l }) },
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
                                  onClick: u,
                                  children: s._(/*BTDS*/ "Copy error stack"),
                                },
                              ),
                              m.jsx(
                                o("WAWebButton.react").WAWebButtonSecondary,
                                {
                                  onClick: d,
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
            : "No error stack found, check console",
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.boundaryName,
        n = e.error,
        o = e.handleClick;
      if (!r("gkx")("26258"))
        return m.jsx(r("WAWebUnstyledButton.react"), {
          xstyle: _.redBox,
          onClick: o,
          testid: void 0,
          children: s._(
            /*BTDS*/ "Uncaught error at {boundaryName} [Click for more info]",
            [s._param("boundaryName", t)],
          ),
        });
    }
    g.displayName = g.name + " [from " + i.id + "]";
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
