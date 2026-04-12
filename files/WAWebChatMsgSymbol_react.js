__d(
  "WAWebChatMsgSymbol.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMessageFailIcon.react",
    "WAWebMessagePluginRenderPreviewIcon",
    "WAWebMsgGetters",
    "WAWebSystemMessagePluginRenderPreviewIcon",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: {
          display: "x1rg5ohu",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          color: "xhslqc4",
          verticalAlign: "x16dsc37",
          height: "x1qx5ct2",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.msg,
        a = o("useWAWebMsgValues").useOptionalMsgValues(n.id, [
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getSubtype,
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        i = a != null ? a[0] : n.type,
        l = a != null ? a[1] : n.subtype,
        s = a != null ? a[2] : n.mediaData,
        d = u.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {});
      if (t.overrideIcon != null) d = t.overrideIcon;
      else {
        var m = o(
          "WAWebSystemMessagePluginRenderPreviewIcon",
        ).renderPreviewIcon({ msg: n });
        if (m != null) d = m;
        else {
          var p = o("WAWebMessagePluginRenderPreviewIcon").renderPreviewIcon(
            i,
            l,
            {
              msg: n,
              options: {
                parsedVcards: s == null ? void 0 : s.parsedVcards,
                viewOnceStatic: t.viewOnceStatic,
              },
            },
          );
          p != null && (d = p);
        }
      }
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.container,
            o("WAWebUISpacing").uiMargin.end3,
          ),
          { "data-testid": void 0, children: d },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
