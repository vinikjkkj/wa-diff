__d(
  "cdsPushToast",
  [
    "BaseToasterStateManager",
    "MetaBrandExclamationTriangleFilled24Icon.react",
    "XMDSIcon.react",
    "basePushToast",
    "deferredLoadComponent",
    "getToastDurationFromTextLength",
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
        r("requireDeferred")("XMDSToast.react").__setRef("cdsPushToast"),
      ),
      m = { LONG: 5e3, MEDIUM: 3e3 };
    function p(t, n, a) {
      var i = a ? m[a] : void 0,
        l = n != null ? n : c;
      if (o("basePushToast").passesNewToastAPIGK())
        if (o("basePushToast").isInteractiveToast(t)) {
          var s = o("basePushToast").pushPersistentToast(
            u.jsx(
              d,
              babelHelpers.extends({}, t, {
                loadImmediately: !0,
                onDismiss: function () {
                  return l.expire(s);
                },
              }),
            ),
            l,
          );
          return s;
        } else {
          var p = t.action,
            _ = babelHelpers.objectWithoutPropertiesLoose(t, e),
            f = babelHelpers.extends({ withoutCloseButton: !0 }, _),
            g = o("basePushToast").pushAlertToast(
              babelHelpers.extends({}, f),
              u.jsx(
                d,
                babelHelpers.extends({}, f, {
                  loadImmediately: !0,
                  onDismiss: function () {
                    return l.expire(g);
                  },
                }),
              ),
              l,
              i,
            );
          return g;
        }
      else {
        var h = l.push(
          u.jsx(
            d,
            babelHelpers.extends({}, t, {
              loadImmediately: !0,
              onDismiss: function () {
                return l.expire(h);
              },
            }),
          ),
          i != null
            ? i
            : r("getToastDurationFromTextLength")(t.message.toString(), l),
        );
        return h;
      }
    }
    function _(e) {
      return p({ message: e });
    }
    function f(e, t, n) {
      return p(
        babelHelpers.extends({}, e, {
          addOnStart: u.jsx(r("XMDSIcon.react"), {
            icon: r("MetaBrandExclamationTriangleFilled24Icon.react"),
            size: 24,
          }),
        }),
        t,
        n,
      );
    }
    function g(e, t) {
      var n = t != null ? t : c,
        r = n.push(
          u.jsx(
            d,
            babelHelpers.extends({}, e, {
              loadImmediately: !0,
              onDismiss: function () {
                return n.expire(r);
              },
            }),
          ),
          1 / 0,
        );
      return r;
    }
    ((l.pushToast = p),
      (l.pushSimpleToast = _),
      (l.pushErrorToast = f),
      (l.pushPersistentToast = g));
  },
  98,
);
