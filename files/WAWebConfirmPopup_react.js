__d(
  "WAWebConfirmPopup.react",
  [
    "Promise",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["onCancel", "onOK", "onOverlayClick"],
      u,
      c,
      d = c || (c = o("react"));
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.buttonAlign,
        l = i === void 0 ? "end" : i,
        s = a.buttonWidth,
        u = s === void 0 ? "hug" : s,
        c = function (t) {
          (t.stopPropagation(), t.preventDefault(), a.onOK == null || a.onOK());
        },
        m = function (t) {
          (t.stopPropagation(),
            t.preventDefault(),
            a.onCancel == null || a.onCancel(t));
        },
        _ = a.onOK
          ? d.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: a.okButtonType ? a.okButtonType : "primary",
              onClick: c,
              disabled: a.okDisabled,
              spinner: a.okSpinner === !0,
              children: a.okText != null ? a.okText : r("WAWebFbtCommon")("OK"),
            })
          : null,
        f = null;
      a.onCancel &&
        (f = d.jsx(r("WDSButton.react"), {
          variant: "borderless",
          onPress: m,
          testid: void 0,
          disabled: a.cancelDisabled,
          size: "medium",
          type: "default",
          label:
            a.cancelText != null && a.cancelText !== ""
              ? a.cancelText
              : r("WAWebFbtCommon")("Cancel"),
        }));
      var g = a.extraButtonProps
          ? d.jsx(p, babelHelpers.extends({}, a.extraButtonProps))
          : null,
        h = { escape: a.onCancel ? m : r("WAWebNoop") },
        y = null;
      if (g && a.splitLayout === !0)
        y = d.jsxs(o("WAWebFlex.react").FlexRow, {
          justify: "all",
          align: "center",
          grow: 1,
          children: [
            g,
            d.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 8,
              children: [f, _],
            }),
          ],
        });
      else if (g) {
        var C,
          b = [f, g, _];
        y = d.jsxs(o("WAWebButton.react").ButtonGroup, {
          direction: (C = a.buttonsDirection) != null ? C : "vertical",
          align: l,
          children: [b[0], b[1], b[2]],
        });
      } else if (f != null || _ != null) {
        var v = f != null && _ != null;
        if (v) {
          var S;
          y = d.jsx(r("WDSButtonGroup.react"), {
            width: u,
            orientation:
              ((S = a.buttonsDirection) != null ? S : "horizontal") ===
              "horizontal"
                ? "horizontal"
                : "stacked",
            primaryButtonProps: {
              variant: "filled",
              onPress: c,
              testid: "popup-controls-ok",
              disabled: a.okDisabled,
              loading: a.okSpinner === !0,
              size: "medium",
              Icon: a.okIcon,
              type:
                a.okButtonType === "solid-warning" ||
                a.okButtonType === "warning" ||
                a.okButtonType === "negative-destructive"
                  ? "destructive"
                  : "default",
              label: a.okText != null ? a.okText : r("WAWebFbtCommon")("OK"),
            },
            tertiaryButtonProps: {
              variant: "borderless",
              onPress: m,
              testid: "popup-controls-cancel",
              disabled: a.cancelDisabled,
              size: "medium",
              type: "default",
              label:
                a.cancelText != null && a.cancelText !== ""
                  ? a.cancelText
                  : r("WAWebFbtCommon")("Cancel"),
            },
          });
        } else {
          var R, L;
          y = d.jsxs(o("WAWebButton.react").ButtonGroup, {
            direction: (R = a.buttonsDirection) != null ? R : "horizontal",
            columnGap:
              ((L = a.buttonsDirection) != null ? L : "horizontal") ===
              "horizontal"
                ? 8
                : void 0,
            align: l,
            children: [f, _],
          });
        }
      }
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        "data-testid": void 0,
        handlers: h,
        ref: n,
        children: d.jsx(o("WAWebModal.react").Modal, {
          actions: y,
          controlsStyle: a.buttonGroupStyle,
          children: a.children,
          cover: a.cover,
          onDragChange: a.onDragChange,
          onOverlayClick: a.onOverlayClick,
          onDrop: a.onDrop,
          type: a.type,
          title: a.title,
          testid: void 0,
          overflow: a.overflow,
          ariaLabel: a.ariaLabel,
          contentRef: a.contentRef,
          tsNavigationData: a.tsNavigationData,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.disabled,
        n = t === void 0 ? !1 : t,
        r = e.onClick,
        a = e.primary,
        i = a === void 0 ? !1 : a,
        l = e.spinner,
        s = e.text,
        u = e.type,
        c = function (t) {
          (t.stopPropagation(), t.preventDefault(), r());
        };
      return d.jsx(o("WAWebButton.react").Button, {
        testid: void 0,
        type: u != null ? u : i ? "primary" : "secondary",
        onClick: c,
        disabled: n,
        spinner: l,
        children: s,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.onCancel,
            r = e.onOK,
            a = e.onOverlayClick,
            i = babelHelpers.objectWithoutPropertiesLoose(e, s);
          return new (u || (u = n("Promise")))(function (e) {
            var n = function () {
                (o("WAWebModalManager").ModalManager.off("close_modal", n),
                  e(!1));
              },
              l = function () {
                (o("WAWebModalManager").ModalManager.off("close_modal", n),
                  r == null || r(),
                  o("WAWebModalManager").ModalManager.close(),
                  e(!0));
              },
              s = function (a) {
                (o("WAWebModalManager").ModalManager.off("close_modal", n),
                  t == null || t(a),
                  o("WAWebModalManager").ModalManager.close(),
                  e(!1));
              },
              u = function (r) {
                (o("WAWebModalManager").ModalManager.off("close_modal", n),
                  a == null || a(r),
                  o("WAWebModalManager").ModalManager.close(),
                  e(!1));
              };
            (o("WAWebModalManager").ModalManager.on("close_modal", n),
              o("WAWebModalManager").ModalManager.open(
                d.jsx(
                  m,
                  babelHelpers.extends(
                    { onOverlayClick: u, onCancel: s, onOK: l },
                    i,
                  ),
                ),
              ));
          });
        })),
        f.apply(this, arguments)
      );
    }
    ((l.ConfirmPopup = m), (l.waitForConfirmPopup = _));
  },
  98,
);
