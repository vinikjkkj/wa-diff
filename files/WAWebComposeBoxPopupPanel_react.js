__d(
  "WAWebComposeBoxPopupPanel.react",
  [
    "WAWebFbtCommon",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef,
      p = {
        container: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          backgroundColor: "xhjsbib",
          $$css: !0,
        },
        notQuestionContainer: {
          width: "xh8yej3",
          borderInlineStartWidth: "xpilrb4",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        containerRefresh: {
          backgroundColor: "xk7ee7b",
          borderInlineStartWidth: "x14e42zd",
          borderInlineEndWidth: "x10w94by",
          $$css: !0,
        },
        quotedQuestionContainer: {
          backgroundColor: "x4wrhlh",
          borderInlineStartWidth: "xpilrb4",
          borderInlineEndWidth: "x1lun4ml",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineEndStyle: "x18b5jzi",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        notTopmostPanel: { transition: "x1lkwvkz", $$css: !0 },
        topmostPanel: {
          borderStartStartRadius: "x12l2aii",
          borderStartEndRadius: "x1mbk4o",
          transition: "x1yf5jnz",
          $$css: !0,
        },
        questionsTopMostPanel: {
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
        body: {
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "xk7ee7b",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          marginLeft: null,
          marginRight: null,
          marginTop: "x1380le5",
          $$css: !0,
        },
        cancelButtonRefresh: {
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          position: "x10l6tqk",
          top: "xfr5jun",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          $$css: !0,
        },
        transparentBackground: { backgroundColor: "xjbqb8w", $$css: !0 },
      };
    function _(t) {
      var n = t.bodyBackground,
        a = n === void 0 ? !0 : n,
        i = t.children,
        l = t.isTopmostPanel,
        s = l === void 0 ? !1 : l,
        c = t.onOmit,
        _ = t.questionType,
        f = t.ref,
        g = t.showCloseButton,
        h = g === void 0 ? !0 : g,
        y = m();
      d(f, function () {
        return {
          getElement: function () {
            return y.current;
          },
        };
      });
      var C = [p.container];
      (_ != null
        ? C.push(p.quotedQuestionContainer)
        : C.push([p.notQuestionContainer, p.containerRefresh]),
        s
          ? (C.push(p.topmostPanel),
            _ != null && C.push(p.questionsTopMostPanel))
          : C.push(p.notTopmostPanel));
      var b = [p.body];
      a || b.push(p.transparentBackground);
      var v =
        h &&
        u.jsx("div", {
          className:
            "x9f619 x1okw0bk x6s0dn4 xl56j7k xv371q9 xf9nvzp xhslqc4 x1bu39yj x1lliihq x1n2onr6",
          children: u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcClose.react"),
            variant: "borderless",
            tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON,
            onPress: c,
            xstyle: p.cancelButtonRefresh,
            "aria-label": r("WAWebFbtCommon")("Cancel"),
          }),
        });
      return u.jsx(
        "div",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(C), {
          "data-testid": void 0,
          ref: y,
          children: u.jsxs(
            "div",
            babelHelpers.extends({}, e.props(b), { children: [i, v] }),
          ),
        }),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
