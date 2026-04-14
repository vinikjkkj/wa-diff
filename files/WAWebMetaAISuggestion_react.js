__d(
  "WAWebMetaAISuggestion.react",
  [
    "WAWebBotFrontendUtils",
    "WAWebCellV2.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMetaAIIcon.react",
    "WAWebSendAiFilledIcon.react",
    "WDSText.react",
    "react",
    "useMergeRefs",
    "useWAWebActiveSelection",
    "useWAWebFocusState",
    "useWAWebHover",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useImperativeHandle,
      c = 15,
      d = {
        container: {
          paddingInlineEnd: "xcldk2z",
          paddingInlineStart: "x1phvje8",
          paddingBottom: "xa0aww2",
          paddingTop: "x1gxa6cn",
          $$css: !0,
        },
        cell: {
          paddingInlineEnd: "x1nzty39",
          paddingInlineStart: "x181vq82",
          minHeight: "xu0aao5",
          height: "xc9qbxq",
          $$css: !0,
        },
        primary: { paddingInlineStart: "x4tra6z", $$css: !0 },
        sendIcon: { color: "x1v5yvga", $$css: !0 },
      };
    function m(e) {
      var t = e.active,
        n = e.chatEntryPoint,
        a = e.onClick,
        i = e.ref,
        l = e.suggestion,
        m = r("useWAWebActiveSelection")(t, l.id),
        p = m[0],
        _ = m[1],
        f = o("useWAWebHover").useWAWebHover(p),
        g = r("useWAWebFocusState")(),
        h = g[0],
        y = g[1],
        C = r("useMergeRefs")(p, h),
        b = function (t) {
          var e = l.query;
          (o("WAWebBotFrontendUtils").sendMetaBotQuery(e, n),
            a == null || a(t, l));
        },
        v = function () {
          var e;
          (e = p.current) == null || e.focus();
        };
      u(i, function () {
        return { focus: v };
      });
      var S = { enter: b };
      return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: S,
        role: "button",
        xstyle: d.container,
        onMouseDown: b,
        children: s.jsx(r("WAWebCellV2.react"), {
          ref: C,
          active: _ || y,
          containerXStyle: [d.cell],
          colorScheme: "default",
          border: "bottom-partial",
          size: "small",
          title: l.query,
          primary: s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            maxLines: 1,
            children: l.query,
          }),
          primaryXStyle: d.primary,
          detailLeft: s.jsx(r("WAWebMetaAIIcon.react"), {
            height: c,
            width: c,
          }),
          detailRight: s.jsx("div", {
            className: "xvy4d1p xxk0z11",
            children:
              (f || _ || y) &&
              s.jsx(o("WAWebSendAiFilledIcon.react").SendAiFilledIcon, {
                xstyle: d.sendIcon,
              }),
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
