__d(
  "CometErrorDialog",
  [
    "Actor",
    "CometConsole",
    "CometErrorOverlay",
    "CometReactErrorDialog.react",
    "CurrentUser",
    "OutsideExceptionKeyCommandListener.react",
    "cr:1125213",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = [],
      c = !1;
    function d() {
      for (; u.length > 0; ) {
        var e = u.shift();
        e != null && e();
      }
    }
    function m(e) {
      (d(),
        o("CometErrorOverlay").injectComponent(function (t) {
          return (
            u.push(t),
            s.jsx(o("Actor").ActorProvider, {
              initialActorID: r("CurrentUser").getID(),
              readonly: !0,
              children: s.jsx(r("OutsideExceptionKeyCommandListener.react"), {
                children: s.jsx(r("CometReactErrorDialog.react"), {
                  error: e,
                  ignoreVC: !0,
                  onClose: d,
                }),
              }),
            })
          );
        }));
    }
    function p(e) {
      var t = e.type;
      if (
        !(t === "warn" || t === "info" || t === "debug") &&
        r("gkx")("22924") &&
        !r("gkx")("7471")
      ) {
        var n = e.message,
          o = n.length <= 50 ? n : n.substr(0, 47) + "...",
          a = t === "fatal" ? "FBLogger Fatal" : "FBLogger Error";
        (r("CometConsole").reportError(a, {
          description: o,
          onClick: function () {
            m(e);
          },
        }),
          t === "fatal" && !c && ((c = !0), m(e)));
      }
    }
    ((l.showNormalizedError = m), (l.errorListener = p));
  },
  98,
);
