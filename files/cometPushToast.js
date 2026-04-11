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
    var e = ["action"],
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
                  return a.expire(i);
                },
              }),
            ),
            a,
          );
          return i;
        } else {
          var l = t.action,
            s = babelHelpers.objectWithoutPropertiesLoose(t, e),
            m = babelHelpers.extends({ withoutCloseButton: !0 }, s),
            p = o("basePushToast").pushAlertToast(
              babelHelpers.extends({}, m),
              u.jsx(
                d,
                babelHelpers.extends(
                  {
                    loadImmediately: !0,
                    onDismiss: function () {
                      return a.expire(p);
                    },
                  },
                  s,
                ),
              ),
              a,
            );
          return p;
        }
      var _ = a.push(
        u.jsx(
          d,
          babelHelpers.extends({}, t, {
            loadImmediately: !0,
            onDismiss: function () {
              return a.expire(_);
            },
          }),
        ),
        n,
      );
      return _;
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
