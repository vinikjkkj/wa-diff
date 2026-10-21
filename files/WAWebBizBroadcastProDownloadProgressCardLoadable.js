__d(
  "WAWebBizBroadcastProDownloadProgressCardLoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProDownloadPreparingToast.react",
    "WAWebBizBroadcastProSubscriberDownloadRegistry",
    "WAWebModalLoadable",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(null),
      p = r("WAWebModalLoadable")(
        r("JSResourceForInteraction")(
          "WAWebBizBroadcastProDownloadProgressCard.react",
        ).__setRef("WAWebBizBroadcastProDownloadProgressCardLoadable"),
        "BizBroadcastProDownloadProgressCard",
        f,
      );
    function _(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.entry,
        r;
      t[0] !== n
        ? ((r = s.jsx(p, { entry: n })), (t[0] = n), (t[1] = r))
        : (r = t[1]);
      var a;
      return (
        t[2] !== n || t[3] !== r
          ? ((a = s.jsx(m.Provider, { value: n, children: r })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    function f(e) {
      return s.jsx(g, { hasError: !!e.error });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.hasError,
        a = d(m);
      if (n || a == null || a.status !== "preparing") return null;
      var i;
      t[0] !== a.completionPercentage
        ? ((i = o(
            "WAWebBizBroadcastProSubscriberDownloadRegistry",
          ).getPreparingPercentage(a.completionPercentage)),
          (t[0] = a.completionPercentage),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== i
          ? ((l = s.jsx(r("WAWebBizBroadcastProDownloadPreparingToast.react"), {
              completionPercentage: i,
            })),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.WAWebBizBroadcastProDownloadProgressCardLoadable = _;
  },
  98,
);
