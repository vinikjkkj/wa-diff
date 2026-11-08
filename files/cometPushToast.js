__d(
  "cometPushToast",
  [
    "BaseToasterStateManager",
    "FBNucleusCautionTriangleFilled20Icon.react",
    "FDSIcon.react",
    "basePushToast",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["action", "onDismiss"],
      s,
      u = s || (s = o("react")),
      c = r("BaseToasterStateManager").getInstance(),
      d = r("deferredLoadComponent")(
        r("requireDeferred")("CometToast.react").__setRef("cometPushToast"),
      );
    function m(t, n, r) {
      n === void 0 && (n = 2750);
      var a = r != null ? r : c;
      if (o("basePushToast").passesNewToastAPIGK())
        if (o("basePushToast").isInteractiveToast(t)) {
          var i = o("basePushToast").pushPersistentToast(
            u.jsx(
              d,
              babelHelpers.extends({}, t, {
                loadImmediately: !0,
                onDismiss: function () {
                  (a.expire(i), t.onDismiss == null || t.onDismiss());
                },
              }),
            ),
            a,
          );
          return i;
        } else {
          var l = t.action,
            s = t.onDismiss,
            m = babelHelpers.objectWithoutPropertiesLoose(t, e),
            p = babelHelpers.extends({ withoutCloseButton: !0 }, m),
            _ = o("basePushToast").pushAlertToast(
              babelHelpers.extends({}, p),
              u.jsx(
                d,
                babelHelpers.extends(
                  {
                    loadImmediately: !0,
                    onDismiss: function () {
                      (a.expire(_), s == null || s());
                    },
                  },
                  m,
                ),
              ),
              a,
            );
          return _;
        }
      var f = a.push(
        u.jsx(
          d,
          babelHelpers.extends({}, t, {
            loadImmediately: !0,
            onDismiss: function () {
              (a.expire(f), t.onDismiss == null || t.onDismiss());
            },
          }),
        ),
        n,
      );
      return f;
    }
    function p(e, t) {
      return m({ message: e }, t);
    }
    function _(e, t, n) {
      return (
        t === void 0 && (t = 2750),
        m(
          babelHelpers.extends({}, e, {
            icon: u.jsx(r("FDSIcon.react"), {
              color: "warning",
              icon: r("FBNucleusCautionTriangleFilled20Icon.react"),
              size: 20,
            }),
          }),
          t,
          n,
        )
      );
    }
    ((l.cometPushToast = m),
      (l.cometPushSimpleToast = p),
      (l.cometPushErrorToast = _));
  },
  98,
);
