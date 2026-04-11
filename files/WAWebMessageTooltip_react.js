__d(
  "WAWebMessageTooltip.react",
  [
    "WAWebFormatMsgText",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebStateUtils",
    "react",
    "useWAWebAssociatedMessages",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.isEnabled,
        a = n === void 0 ? !1 : n,
        i = e.msg,
        l = o("useWAWebMsgValues").useMsgValues(i.id, [
          o("WAWebFrontendMsgGetters").getRtl,
        ]),
        u = l[0],
        c = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(
          i.unsafe(),
        ),
        d = a
          ? r("WAWebL10N").embedDir(
              r("WAWebFormatMsgText")({
                msg: o("WAWebStateUtils").unproxy(i.unsafe()),
                associatedMessages: c,
                options: { unformat: !0, formatAsSearchResult: !1 },
              }).toString() || "",
              u,
            )
          : null;
      return !a || d == null || d === ""
        ? s.jsx(s.Fragment, { children: t })
        : s.jsx("span", { title: d, className: "xjp7ctv", children: t });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
