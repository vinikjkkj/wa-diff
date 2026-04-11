__d(
  "WAWebGalaxyFlowsShowToastAction",
  ["fbt", "WAWebFbtCommon", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      if (e != null && typeof e == "object") {
        var t = e.text != null ? e.text : null,
          n =
            (t != null && s.isFbtInstance(t)) || typeof t == "string"
              ? t
              : null,
          a = typeof e.duration == "number" ? e.duration : null;
        n != null &&
          a != null &&
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: n,
              duration: a,
              action: {
                actionText:
                  e.actionText != null && typeof e.actionText == "string"
                    ? e.actionText
                    : r("WAWebFbtCommon")("OK"),
                dismiss: !0,
              },
            }),
          );
      }
    }
    l.onFlowShowToastAction = c;
  },
  98,
);
