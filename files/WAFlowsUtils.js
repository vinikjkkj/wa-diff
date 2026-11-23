__d(
  "WAFlowsUtils",
  ["WAFlowsEnvContext.react", "WAFlowsError", "WAFlowsTypes", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useLayoutEffect;
    function d() {
      var e = window;
      if (e != null && Object.prototype.hasOwnProperty.call(e, "navigator")) {
        var t = e == null ? void 0 : e.navigator;
        if (
          !(t == null || !Object.prototype.hasOwnProperty.call(t, "onLine")) &&
          !t.onLine
        )
          throw o("WAFlowsError").WAFlowsCodedError.NO_INTERNET_CONNECTION;
      }
    }
    function m(e, t, n, r) {
      if (e != null && n != null && r != null && e.current != null) {
        var o = e.current.offsetHeight,
          a = o / t > 1;
        a !== r && n(a);
      }
    }
    function p(e, t, n, r) {
      var a = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        i = a.env,
        l = u(
          function () {
            if (i.platform === "wa_web") return !1;
            m(t, e, n, r);
          },
          [e, t, i.platform, r, n],
        );
      return (
        c(
          function () {
            l();
          },
          [l, t],
        ),
        r
      );
    }
    function _(e, t, n, r, a) {
      (n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        a === void 0 && (a = !1));
      var i = [];
      return (
        t.forEach(function (t) {
          if (t.type === e) i.push(t);
          else if (
            n &&
            t.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM
          )
            i.push(_(e, t.children));
          else if (
            r &&
            t.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.SWITCH
          ) {
            var l = Object.values(t.cases);
            l.length > 0 &&
              l.forEach(function (t) {
                i.push(_(e, t, n, r));
              });
          } else
            a &&
              t.type === o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.IF &&
              (i.push(_(e, t.then, n, r)),
              t.else != null && i.push(_(e, t.else, n, r)));
        }),
        i.length > 0 ? i[0] : null
      );
    }
    function f(e) {
      return e.reduce(function (e, t) {
        var n;
        if (
          ((n = t.layout) == null ? void 0 : n.type) ===
          o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN
        ) {
          var r,
            a = (r = t.layout) == null ? void 0 : r.children;
          a &&
            a.length > 0 &&
            _(
              o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
              a,
              !0,
            ) &&
            e.push(t.id);
        }
        return e;
      }, []);
    }
    ((l.checkIfOnlineOrThrowError = d),
      (l.updateIfContentIsMultiline = m),
      (l.useUpdateContentWrap = p),
      (l.findComponentInScreen = _),
      (l.getNavigationListScreens = f));
  },
  98,
);
